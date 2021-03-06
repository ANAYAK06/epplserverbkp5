CREATE PROCEDURE [dbo].[spInsertEmpAssetAllocation] @ItemCode VARCHAR(11),
											 @EmpCCCode VARCHAR(20)=null,
											 @EmpRefno VARCHAR(20),
									         @AddItemsResult VARCHAR(50) OUTPUT   
AS										
BEGIN
BEGIN TRY
BEGIN TRANSACTION
  BEGIN      
		IF Not Exists (Select * from EmployeeAssetAllocation where ItemCode=LTRIM(RTRIM(@ItemCode)) and EmpRefNo=@EmpRefno and AllocationStatus is null)
		Begin
		insert into EmployeeAssetAllocation(ItemCode,EmpRefNo)values(LTRIM(RTRIM(@ItemCode)),@EmpRefno)
		SET @AddItemsResult='Submited';	
		END
		Else
		Begin
			SET @AddItemsResult='ItemCode Already Added';
		End
  END 
  COMMIT TRANSACTION
END TRY
BEGIN CATCH
SET @AddItemsResult = ERROR_MESSAGE();
DECLARE @ModuleName    VARCHAR(50),
                @ProcedureName VARCHAR(50),
                @ErrorNumber VARCHAR(10),
				@ErrorMessage  VARCHAR(300),
				@ErrorSeverity TINYINT,
				@ErrorState    TINYINT

        SELECT  @ModuleName = 'spInsertEmpAssetAllocation',
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

