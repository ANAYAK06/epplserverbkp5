CREATE Procedure   [dbo].[spDeleteEmpAssetItem] 
											@EmpRowid VARCHAR(50),																													
											@DeleteIndStatus varchar(500) OUTPUT

AS
BEGIN
BEGIN TRY
BEGIN TRANSACTION   
	 Begin
	 Delete from EmployeeAssetAllocation where id=@EmpRowid and AllocationStatus is null
	 SET @DeleteIndStatus='Submited'
	 End
COMMIT TRANSACTION
END TRY
BEGIN CATCH
DECLARE @ModuleName    VARCHAR(50),
                @ProcedureName VARCHAR(50),
                @ErrorNumber VARCHAR(10),
				@ErrorMessage  VARCHAR(300),
				@ErrorSeverity TINYINT,
				@ErrorState    TINYINT

        SELECT  @ModuleName = 'spDeleteEmpAssetItem',
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










