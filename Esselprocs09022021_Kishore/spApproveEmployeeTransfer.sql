CREATE Procedure   [dbo].[spApproveEmployeeTransfer] 
@Rid INT,
@AprovalRemarks VARCHAR(max),
@Action VARCHAR(50),
@RoleId INT,
@Approvedby varchar(100),
@Transferresult VARCHAR(500) OUTPUT
AS										
BEGIN
BEGIN TRY
BEGIN TRANSACTION
DECLARE @Nextroleexist BIT;	
DECLARE @Masterid INT,@Rolestatus INT,@Year VARCHAR(10),@Deductiondcabal MONEY;
	 SET @Masterid=(Select MasterOperationID from MasterOperation where MasterOperationCode='EmployeeTransfer');
	 SET @Nextroleexist=(Select dbo.ChecKNextLevelUser(@Masterid,@RoleId,@Action,null))
	 SET @Rolestatus=dbo.GetWorkFlowStatus(@RoleId,@Masterid);	 
	 IF(@Nextroleexist=1 or @Action='Reject' or  @Action='Approve')
	BEGIN	
    IF(@Action='Verify')
		BEGIN	
				  Update EmployeeTransfer set status = @Rolestatus,ApprovalNote=@AprovalRemarks,ModifiedBy=@Approvedby,ModifiedDate=GETDATE() where id=@Rid 		  
 					--Notification Verification Starts--- 
 						Exec [SPNotificationhub] @Roleid,@Masterid,'Verify',0,'*'
 					--Notification Verification Ends---
				  SET @Transferresult='Submitted'
		END
	--ELSE IF(@Action='Return')
	--	BEGIN			
	--	  				--Notification Return Starts--- 
	--					Exec [SPNotificationhub] @Roleid,@Masterid,'Return',0,'*'
	--					--Notification Return Ends---
	--				SET @Depositresult='Submitted'

	--	END
	ELSE IF(@Action='Reject')
			BEGIN	          
					  Update EmployeeTransfer set Status='Rejected',ApprovalNote=@AprovalRemarks,ModifiedBy=@Approvedby,ModifiedDate=GETDATE() where id=@Rid 						  
		   				--Notification Reject Starts--- 
 						Exec [SPNotificationhub] @Roleid,@Masterid,'Reject',0,'*'
 						--Notification Reject Ends---
					  SET @Transferresult='Submitted'
			END
	ELSE IF(@Action='Approve')
			BEGIN
			        Declare @JoiningcostCenter varchar(100)
					Declare @EmpID varchar(100)
					Set @JoiningcostCenter=(select JoiningCC from EmployeeTransfer where id=@Rid)
					Set @EmpID=(select EmployeeId from EmployeeTransfer where id=@Rid)
					Update EmployeeTransfer set Status='Approved',ApprovalNote=@AprovalRemarks,ModifiedBy=@Approvedby,ModifiedDate=GETDATE() where id=@Rid
					update EmpolyeeInfo set JoiningCostCenter=@JoiningcostCenter where EmpRefNo=@EmpID
					 	--Notification Approval Starts--- 
 						Exec [SPNotificationhub] @Roleid,@Masterid,'Approve',0,'*'
 						--Notification Approval Ends---
					SET @Transferresult='Submitted'
			END
		END
	ELSE
	BEGIN
	SET @Transferresult='Next Level Verification User Does Not Exist';
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

        SELECT  @ModuleName = 'spApproveEmployeeTransfer',
                @ProcedureName = ERROR_PROCEDURE(),
                @ErrorNumber = ERROR_NUMBER(),
                @ErrorMessage = @Transferresult,
                @ErrorSeverity = ERROR_SEVERITY(),
                @ErrorState = ERROR_STATE();
		
		IF @@TRANCOUNT > 0  
			ROLLBACK TRANSACTION 

		PRINT 'Transaction Rolledback Successfully.'

        RAISERROR (@ErrorMessage,@ErrorSeverity,@ErrorState);
END CATCH
END








