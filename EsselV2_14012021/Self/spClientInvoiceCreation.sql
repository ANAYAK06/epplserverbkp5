ALTER Procedure    [dbo].[spClientInvoiceCreation]    @Pono VARCHAR(50)=null,
											@Rano VARCHAR(50)=null,
											@Cccode VARCHAR(50)=null,
											@Invoiceno VARCHAR(50)=null,
											@Invoicedate DATETIME,
											@Invmakingdate DATETIME,
											@Basicvalue money=null,
											@InvTotal money,
											@Description VARCHAR(max)=null,											
											@InvoiceType VARCHAR(50),
											@Clientcode VARCHAR(20),
											@SubClientcode VARCHAR(20),
											@Invoicesubtype VARCHAR(100)=null,											
											@Createdby VARCHAR(50),
											@Taxtypes varchar(max)=null,
											@Taxdcas varchar(max)=null,
											--@Taxsdcas varchar(max)=null,
											--@Taxnos varchar(max)=null,
											@Taxamounts varchar(max)=null,

											 @Cgstsdca VARCHAR(50)=null,
											 @Cgstsdcaamt MONEY=0,
											 @Sgstsdca VARCHAR(50)=null,
											 @Sgstsdcaamt MONEY=0,
											 @Igstsdca VARCHAR(50)=null,
											 @Igstsdcaamt MONEY=0,
											 @Statecheck BIT=0,
											 @ClientGstNo  VARCHAR(50)=null,
											 @CompanyGstNo  VARCHAR(50)=null,
											 @Taxid Int=0,
											@Action VARCHAR(50),	
											@Roleid INT,	
											@IsGstApplicable  VARCHAR(10)=null,
											@IsTcsApplicable  VARCHAR(10)=null,	
											@TcsDCA VARCHAR(100)=null,	
											@TcsSDCA VARCHAR(100)=null,
											@TCSAmount MONEY=0,															
											@InvoiceCreationSucess  INT OUTPUT 
AS
BEGIN
BEGIN TRY
BEGIN TRANSACTION

DECLARE @CCTYpe varchar(50)
DECLARE @itcode varchar(20)
DECLARE @taxtype varchar(100)
DECLARE @taxdca VARCHAR(100)
DECLARE @taxsdca VARCHAR(100)
DECLARE @taxno VARCHAR(100)
DECLARE @taxamount VARCHAR(50)
DECLARE @taxmapdca varchar(50)
DECLARE @Code varchar(100);
DECLARE @ISCreditableTax INT;
--DECLARE @Taxid int;

--Current Financial Year
DECLARE @Year varchar(10)
 DECLARE @Masterid INT,@Rolestatus INT;
 DECLARE @Nextroleexist BIT;
 DECLARE @CapitalCC varchar(100)
 SET @Masterid=(Select MasterOperationID from MasterOperation where MasterOperationCode='ClientInvoiceCreation');
 SET @Nextroleexist=(Select dbo.ChecKNextLevelUser(@Masterid,@Roleid,'Insert',@Cccode)) 
 SET @Rolestatus=dbo.GetWorkFlowStatus(@Roleid,@Masterid);
 SET @Year=dbo.FinancialYear(@Invoicedate)
 set @CapitalCC=(SELECT CC_Code FROM Cost_Center WHERE CC_Type='Capital')
 IF(@Nextroleexist=1)
 BEGIN
 IF(@Action='New')
		BEGIN
		IF Not Exists (Select * from ClientInvoice where ClientInvoiceNo=@Invoiceno)
			Begin	
			    	        DECLARE @invtypeid INT;
							Select @invtypeid=CCInvoiceTypeId  from CCInvoiceType where  CCInvoiceTypeDescription=@InvoiceType
					   -- SET @invtypeid=(Select CostCenterTypeID from  CostCenterType where CostCenterTypeName=@InvoiceType );
					    Insert into ClientInvoice(ClientInvoiceNo,PONumber,InvoiceDate,InvoiceMakingDate,
						CCCode,RANO,ClientCode,SubClientCode,BasicValue,Total,CCInvoiceTypeId,Status,CreatedBy,CreatedDate,InvoiceRemarks,WorkFlowLevelId,ClientGSTNo,CompanyGST,IsGSTApplicable,IsTCSApplicable)
						Values(@Invoiceno,@Pono,@Invoicedate,@Invmakingdate,@Cccode,@Rano,@Clientcode,@SubClientcode,
						@Basicvalue,@InvTotal,@invtypeid,'1',@Createdby,GETDATE(),@Description,@Masterid,@ClientGstNo,@CompanyGstNo,@IsGstApplicable,@IsTcsApplicable);	
					   IF(@IsGstApplicable='Yes')					
						BEGIN
						--DECLARE @Taxid INT;
								SET @taxtype=@Taxtypes;
								SET @taxamount=@Taxamounts;
								SET @taxdca=@Taxdcas;
						        if(@taxtype='Creditable')
									BEGIN
										SET @Code=@CapitalCC									
									END	
								ELSE
									BEGIN
										SET @Code=@CCCode																		
									END		
								BEGIN	
								 SET @ISCreditableTax=(Select  TypesOfTaxID from TypesOfTax where TypesOfTaxName=@taxtype)	
								 --SET @Taxid=(Select TaxId from taxes where TaxFor='DCA-DCA-GST-CR' and TaxType='GST' and TaxNo='22AABCE7701QK')
								 IF(@Statecheck=1)
								 BEGIN
								  --cgst
								 insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate,TaxType)
								 values(@Taxid,@Invoiceno,@Cgstsdcaamt,@ISCreditableTax,@Code,@taxdca,@Cgstsdca,@Createdby,GETDATE(),'GST');
								 --sgst
								  insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate,TaxType)
								 values(@Taxid,@Invoiceno,@Sgstsdcaamt,@ISCreditableTax,@Code,@taxdca,@Sgstsdca,@Createdby,GETDATE(),'GST');
								 END
								 ELSE
								 BEGIN
								 --igst
								  insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate,TaxType)
								 values(@Taxid,@Invoiceno,@Igstsdcaamt,@ISCreditableTax,@Code,@taxdca,@Igstsdca,@Createdby,GETDATE(),'GST');
								 END									 										 
								END								
	                       END
						    IF(@IsTcsApplicable='Yes')
								BEGIN
								    insert into ClientTaxes(ClientInvoiceNo,TaxValue,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate,TaxType)
								    values(@Invoiceno,@TCSAmount,@Cccode,@TcsDCA,@TcsSDCA,@Createdby,GETDATE(),'TCS');
								END	
						--WHILE (charindex(',',@Taxtypes) <> 0)
						--BEGIN 
						--  SET @taxtype=substring(@Taxtypes,1,Charindex(',',@Taxtypes) - 1)
						--  SET @Taxtypes = substring(@Taxtypes,Charindex(',',@Taxtypes)+1,Len(@Taxtypes))  
						  
						--   SET @taxdca=substring(@Taxdcas,1,Charindex(',',@Taxdcas) - 1)
						--   SET @Taxdcas = substring(@Taxdcas,Charindex(',',@Taxdcas)+1,Len(@Taxdcas))   
						  
						--   SET @taxsdca=substring(@Taxsdcas,1,Charindex(',',@Taxsdcas) - 1)
						--   SET @Taxsdcas = substring(@Taxsdcas,Charindex(',',@Taxsdcas)+1,Len(@Taxsdcas))   
						  
						--   SET @taxno=substring(@Taxnos,1,Charindex(',',@Taxnos) - 1)
						--   SET @Taxnos = substring(@Taxnos,Charindex(',',@Taxnos)+1,Len(@Taxnos))  
						   
						--    SET @taxamount=substring(@Taxamounts,1,Charindex(',',@Taxamounts) - 1)
						--    SET @Taxamounts = substring(@Taxamounts,Charindex(',',@Taxamounts)+1,Len(@Taxamounts))   
						--    SET @ISCreditableTax=(Select  TypesOfTaxID from TypesOfTax where TypesOfTaxName=@taxtype)
						--		if(@taxtype='Creditable')
						--		BEGIN
						--			SET @Code='CCC'									
						--		END	
						--		ELSE
						--		BEGIN
						--			SET @Code=@CCCode																		
						--		END		
						--			 BEGIN		
						--			 insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate)
						--			 values(@taxno,@Invoiceno,@taxamount,@ISCreditableTax,@Code,@taxdca,@taxsdca,@Createdby,GETDATE());										 
						--			 END	
						--	  END
						--END		
						--Notification ReturnUpdate Starts--- 
							Exec [SPNotificationhub] @Roleid,@Masterid,'Insert',0,@Cccode
					     --Notification ReturnUpdate Ends---
						SET @InvoiceCreationSucess = 1;					
								
			 END
		ELSE
			SET @InvoiceCreationSucess = 2;
		END
		ELSE IF(@Action='Update')
		BEGIN
		IF Exists (Select * from ClientInvoice where ClientInvoiceNo=@Invoiceno)
		BEGIN
		  Update ClientInvoice Set InvoiceDate=@Invoicedate,InvoiceMakingDate=@Invmakingdate,RANO=@Rano,
		  BasicValue=@Basicvalue,Total=@InvTotal,InvoiceRemarks=@Description,Status='1',
		  ModifiedBy=@Createdby,ModifiedDate=GETDATE() where ClientInvoiceNo=@Invoiceno;
	--	  Delete from ClientTaxes where ClientInvoiceNo=@Invoiceno;
	--	  IF(@Taxtypes!='')					
	--					BEGIN

	--					SET @taxtype=@Taxtypes;
	--					SET @taxamount=@Taxamounts;
	--					SET @taxdca=@Taxdcas;
	--					if(@taxtype='Creditable')
	--							BEGIN
	--								SET @Code='CCC'									
	--							END	
	--							ELSE
	--							BEGIN
	--								SET @Code=@CCCode																		
	--							END		
	--							BEGIN	
	--							 SET @ISCreditableTax=(Select  TypesOfTaxID from TypesOfTax where TypesOfTaxName=@taxtype)	
	--							 IF(@Statecheck=1)
	-- BEGIN
	--  cgst
	-- insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate)
	-- values(@CompanyGstNo,@Invoiceno,@Cgstsdcaamt,@ISCreditableTax,@Code,@taxdca,@Cgstsdca,@Createdby,GETDATE());
	-- sgst
	--  insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate)
	-- values(@CompanyGstNo,@Invoiceno,@Sgstsdcaamt,@ISCreditableTax,@Code,@taxdca,@Sgstsdca,@Createdby,GETDATE());
	-- END
	-- ELSE
	-- BEGIN
	-- igst
	--  insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate)
	-- values(@CompanyGstNo,@Invoiceno,@Igstsdcaamt,@ISCreditableTax,@Code,@taxdca,@Igstsdca,@Createdby,GETDATE());
	-- END									 										 
	--END	
	--END
		  --IF(@Taxtypes!='')					
				--		BEGIN
				--		WHILE (charindex(',',@Taxtypes) <> 0)
				--		BEGIN 
				--		  SET @taxtype=substring(@Taxtypes,1,Charindex(',',@Taxtypes) - 1)
				--		  SET @Taxtypes = substring(@Taxtypes,Charindex(',',@Taxtypes)+1,Len(@Taxtypes))  
						  
				--		   SET @taxdca=substring(@Taxdcas,1,Charindex(',',@Taxdcas) - 1)
				--		   SET @Taxdcas = substring(@Taxdcas,Charindex(',',@Taxdcas)+1,Len(@Taxdcas))   
						  
				--		   SET @taxsdca=substring(@Taxsdcas,1,Charindex(',',@Taxsdcas) - 1)
				--		   SET @Taxsdcas = substring(@Taxsdcas,Charindex(',',@Taxsdcas)+1,Len(@Taxsdcas))   
						  
				--		   SET @taxno=substring(@Taxnos,1,Charindex(',',@Taxnos) - 1)
				--		   SET @Taxnos = substring(@Taxnos,Charindex(',',@Taxnos)+1,Len(@Taxnos))  
						   
				--		    SET @taxamount=substring(@Taxamounts,1,Charindex(',',@Taxamounts) - 1)
				--		    SET @Taxamounts = substring(@Taxamounts,Charindex(',',@Taxamounts)+1,Len(@Taxamounts))   
				--		    SET @ISCreditableTax=(Select  TypesOfTaxID from TypesOfTax where TypesOfTaxName=@taxtype)
				--				if(@taxtype='Creditable')
				--				BEGIN
				--					SET @Code='CCC'
									
				--				END	
				--				ELSE
				--				BEGIN
				--					SET @Code=@CCCode																		
				--				END		
				--					 BEGIN		
				--					 insert into ClientTaxes(TaxId,ClientInvoiceNo,TaxValue,TypesOfTaxID,CCCode,DCACode,SubDCACode,CreatedBy,CreatedDate)
				--					 values(@taxno,@Invoiceno,@taxamount,@ISCreditableTax,@Code,@taxdca,@taxsdca,@Createdby,GETDATE());										 
				--					 END	
				--			  END
				--		END		
						--Notification ReturnUpdate Starts--- 
	                    Exec [SPNotificationhub] @Roleid,@Masterid,'ReturnUpdate',0,@Cccode
                        --Notification ReturnUpdate Ends---
		SET @InvoiceCreationSucess = 1;
		END
		ELSE
		BEGIN
		SET @InvoiceCreationSucess = 2;
		END
		END
 END
 ELSE
 BEGIN
 SET @InvoiceCreationSucess='Next Level Verification User Does Not Exist';
 END	
COMMIT TRANSACTION
END TRY
BEGIN CATCH
SET @InvoiceCreationSucess = 2;
DECLARE @ModuleName    VARCHAR(50),
                @ProcedureName VARCHAR(50),
                @ErrorNumber VARCHAR(10),
				@ErrorMessage  VARCHAR(300),
				@ErrorSeverity TINYINT,
				@ErrorState    TINYINT

        SELECT  @ModuleName = 'spClientInvoiceCreation',
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









