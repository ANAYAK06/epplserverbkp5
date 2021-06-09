ALTER Procedure  [dbo].[spSaveEmpAssetsDeAllocation]   
											@Itemids varchar(max)=null,
											@EmpRefno varchar(50),
											@EmpCCCode varchar(50),											
											@ValidtoDate varchar(50),
											@AllocationTranno varchar(50),											
											@Remarks varchar(MAX),
											@Roleid INT,
											@Createdby VARCHAR(100),											
											@AddStatus VARCHAR(MAX) OUTPUT,
											@AddEmpid VARCHAR(MAX) OUTPUT
											
AS
BEGIN
BEGIN TRY
BEGIN TRANSACTION
    DECLARE @Itemid int	
	DECLARE @Itemcode varchar(11)
	DECLARE @RoleName varchar(100)
	DECLARE @UserName varchar(max)
    DECLARE @Masterid INT,@Rolestatus INT;
	DECLARE @Nextroleexist BIT;	
	Declare @Validfrom varchar(20);	
	Set @UserName=(select FirstName+' '+MiddleName+' '+LastName from EmpolyeeInfo where EmpRefNo=@EmpRefno)
	Set @Validfrom=(Select distinct validityfrom from EmployeeAssetAllocation where EmpRefNo=@EmpRefno and AllocationTranNo=@AllocationTranno)
    SET @Masterid=(Select MasterOperationID from MasterOperation where MasterOperationCode=('EmployeeAssetDeAllocation'))
	SET @Nextroleexist=(Select dbo.ChecKNextLevelUser(@Masterid,@Roleid,'Insert',null))
    SET @Rolestatus=dbo.GetWorkFlowStatus(@Roleid,@Masterid);	
	IF(@Nextroleexist=1)
    BEGIN
	 IF((DATEDIFF(DAY,@Validfrom,@ValidtoDate)<0))
	 Begin
	   set @AddStatus ='Invalid Date';
	 End
	 Else
	    Begin
		DECLARE @Tran_No bigint
	    SET @Tran_No=ROUND(((8999999998) * RAND() + 1000000000), 0)	
		 WHILE (charindex(',',@Itemids) <> 0)
					  BEGIN
							set @Itemid=substring(@Itemids,1,charindex(',',@Itemids) - 1)
							SET @Itemids = substring(@Itemids,charindex(',',@Itemids)+1,len(@Itemids))
							SET @Itemcode=(SELECT ItemCode FROM EmployeeAssetAllocation WHERE id=@Itemid)

							UPDATE EmployeeAssetAllocation SET ValidityTo=@ValidtoDate,DeAllocationRemarks=@Remarks,DeAllocationStatus='1',WorkFlowLevelId=@Masterid,CreatedBy=@Createdby,CreatedDate=getdate(),DeAllocationTranNo=@Tran_No where id=@Itemid and itemcode=@Itemcode and AllocationStatus ='Approved'
							update Masterdata set status='InActive' where itemcode=@Itemcode and cccode=@EmpCCCode							
						  END 
					 SET @AddStatus= 'Submited'
				     SET @AddEmpid= @Tran_No
	    End
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

       SELECT  @ModuleName = 'spSaveEmpAssetsDeAllocation',
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







