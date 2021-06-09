ALTER Procedure   [dbo].[spApproveAssetAllocation] 
@AllocationRefno varchar(20),
@Employeeid varchar(20),
@AprovalRemarks VARCHAR(max),
@Action VARCHAR(50),
@RoleId INT,
@Createdby varchar(100),
@ICresult VARCHAR(200) OUTPUT
AS										
BEGIN
BEGIN TRY
BEGIN TRANSACTION
DECLARE @Masterid INT,@Rolestatus INT;
DECLARE @Nextroleexist BIT;
	 SET @Masterid=(Select MasterOperationID from MasterOperation where MasterOperationCode='EmployeeAssetAllocation');
	 SET @Nextroleexist=(Select dbo.ChecKNextLevelUser(@Masterid,@RoleId,@Action,null))
	 SET @Rolestatus=dbo.GetWorkFlowStatus(@RoleId,@Masterid);
	IF(@Nextroleexist=1 or @Action='Reject' or  @Action='Approve')
	BEGIN	
	IF(@Action='Verify')
			BEGIN
					  update EmployeeAssetAllocation set AllocationStatus=@Rolestatus,AllocationApprovalRemarks=@AprovalRemarks,Modifiedby=@CreatedBy,ModifiedDate=GETDATE() where AllocationTranNo=@AllocationRefno and EmpRefNo=@Employeeid	  	  
 						--Notification Verification Starts--- 
 							Exec [SPNotificationhub] @Roleid,@Masterid,'Verify',0,'*'
 						--Notification Verification Ends---
					  SET @ICresult='Submitted'
			END
	--ELSE IF(@Action='Return')
	--		BEGIN	
	--				  update ItemCodes set Status='0',ApprovalNote=@AprovalRemarks,Modifiedby=@CreatedBy,ModifiedDate=GETDATE() where Id=@Rid			 
	--					  Notification Return Starts--- 
	--					   Exec [SPNotificationhub] @Roleid,@Masterid,'Return',0,'*'
	--					 Notification Return Ends---	
	--				  SET @ICresult='Submitted'

	--		END
	ELSE IF(@Action='Reject')
			BEGIN	                     
					 update EmployeeAssetAllocation set AllocationStatus='Rejected',AllocationApprovalRemarks=@AprovalRemarks,Modifiedby=@CreatedBy,ModifiedDate=GETDATE() where AllocationTranNo=@AllocationRefno and EmpRefNo=@Employeeid	
					 update Masterdata set Status='Active' where ItemCode in (Select ItemCode from EmployeeAssetAllocation where AllocationTranNo=@AllocationRefno and EmpRefNo=@Employeeid )
						--Notification Reject Starts--- 
 						Exec [SPNotificationhub] @Roleid,@Masterid,'Reject',0,'*'
 						--Notification Reject Ends---
					  SET @ICresult='Submitted'
			END
   ELSE IF(@Action='Approve')
			BEGIN
			if Exists(Select * from EmployeeAssetAllocation where AllocationTranNo=@AllocationRefno and EmpRefNo=@Employeeid and AllocationStatus='Approved')
		    SET @ICresult= 'The Item Code already approved'
			Else 
			BEGIN
			update Masterdata set Status='Active' where ItemCode in (Select ItemCode from EmployeeAssetAllocation where AllocationTranNo=@AllocationRefno and EmpRefNo=@Employeeid )
			update EmployeeAssetAllocation set AllocationStatus='Approved',AllocationApprovalRemarks=@AprovalRemarks,Modifiedby=@CreatedBy,ModifiedDate=GETDATE() where  AllocationTranNo=@AllocationRefno and EmpRefNo=@Employeeid	
			--Notification Approval Starts--- 
 				  Exec [SPNotificationhub] @Roleid,@Masterid,'Approve',0,'*'
 			--Notification Approval Ends---
			SET @ICresult='Submitted'
			END  
		END
	END
	ELSE
	BEGIN
	SET @ICresult='Next Level Verification User Does Not Exist';
	END
COMMIT TRANSACTION
END TRY
BEGIN CATCH
--SET @Addupdateitstatus = ERROR_MESSAGE();
DECLARE @ModuleName    VARCHAR(50),
                @ProcedureName VARCHAR(50),
                @ErrorNumber VARCHAR(10),
				@ErrorMessage  VARCHAR(300),
				@ErrorSeverity TINYINT,
				@ErrorState    TINYINT

        SELECT  @ModuleName = 'spApproveAssetAllocation',
                @ProcedureName = ERROR_PROCEDURE(),
                @ErrorNumber = ERROR_NUMBER(),
                @ErrorMessage = @ICresult,
                @ErrorSeverity = ERROR_SEVERITY(),
                @ErrorState = ERROR_STATE();
		
		IF @@TRANCOUNT > 0  
			ROLLBACK TRANSACTION 

		PRINT 'Transaction Rolledback Successfully.'

        RAISERROR (@ErrorMessage,@ErrorSeverity,@ErrorState);
END CATCH
END