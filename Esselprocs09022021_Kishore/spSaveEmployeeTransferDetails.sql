create Procedure   [dbo].[spSaveEmployeeTransferDetails]  											
											@Employeeid VARCHAR(50),
											@RelievingCC VARCHAR(20),
											@JoiningCC VARCHAR(20),
											@RelievingDate VARCHAR(50),
											@JoiningDate VARCHAR(50),											
											@Remarks Varchar(max),
											@CreatedBy VARCHAR(100),
											@Roleid INT=0,
											@AddStatus VARCHAR(MAX) OUTPUT
											
AS
BEGIN
BEGIN TRY
BEGIN TRANSACTION 
			DECLARE @Masterid INT,@Rolestatus INT,@Nextroleexist BIT;
            SET @Masterid=(Select MasterOperationID from MasterOperation where MasterOperationCode='EmployeeTransfer');
            SET @Rolestatus=dbo.GetWorkFlowStatus(@Roleid,@Masterid);
	        SET @Nextroleexist=(Select dbo.ChecKNextLevelUser(@Masterid,@Roleid,'Insert',null))
	        IF(@Nextroleexist=1)     
	   		BEGIN
				IF NOT EXISTS(Select 1 From EmployeeTransfer Where EmployeeId = LTRIM(RTRIM(@Employeeid)) and status!='Rejected' and status!='Approved')   
					BEGIN
						INSERT INTO EmployeeTransfer(EmployeeId,RelievingCC,JoiningCC,RelievingCCDate,JoiningCCDate,Remarks,CreatedBy,CreatedDate,Status,WorkFlowLevelId)
						VALUES(LTRIM(RTRIM(@Employeeid)),@RelievingCC,@JoiningCC,@RelievingDate,@JoiningDate,@Remarks,@CreatedBy,GETDATE(),'1',@Masterid)
							--Notification Approval Starts--- 
 							Exec [SPNotificationhub] @Roleid,@Masterid,'Insert',0,'*'
 							--Notification Approval Ends---
						SET @AddStatus= 'Successfull'
					END
				Else
					BEGIN
					  SET @AddStatus= 'Already in Process';
					END
			END			
			ELSE
				BEGIN
				SET @AddStatus='Next Level Verification User Does Not Exist';
				END	
	
COMMIT TRANSACTION
END TRY
BEGIN CATCH
DECLARE @ModuleName    VARCHAR(50),
               @ProcedureName VARCHAR(50),
               @ErrorNumber VARCHAR(10),
				@ErrorMessage  VARCHAR(300),
				@ErrorSeverity TINYINT,
				@ErrorState    TINYINT

	   SELECT  @ModuleName = 'spSaveEmployeeTransferDetails',
               @ProcedureName = ERROR_PROCEDURE(),
               @ErrorNumber = ERROR_NUMBER(),
               @ErrorMessage = ERROR_MESSAGE(),
               @ErrorSeverity = ERROR_SEVERITY(),
               @ErrorState = ERROR_STATE();

IF @@TRANCOUNT > 0  
ROLLBACK TRANSACTION 

PRINT 'Transaction Rolledback Successfully.'

       RAISERROR (@ErrorMessage,@ErrorSeverity,@ErrorState);
END CATCH
END









