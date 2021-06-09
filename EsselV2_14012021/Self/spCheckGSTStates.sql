ALTER Procedure [dbo].[spCheckGSTStates]           @GSTNo VARCHAR(50),
											@VendorGSTNo VARCHAR(50),
											@Taxtype VARCHAR(50)
											
AS
BEGIN

DECLARE @Vgststateid int,@Gststateid int,@Samestate BIT;
Select @Vgststateid=s.StateId from Taxes t join CountryStates s on t.StateId = s.StateId  where TaxNo=@VendorGSTNo and Taxtype=@Taxtype
Select @Gststateid=s.StateId from Taxes t join CountryStates s on t.StateId = s.StateId  where TaxNo=@GSTNo  and Taxtype='GST'

IF(@Vgststateid=@Gststateid)
SET @Samestate=1
ELSE
SET @Samestate=0

Select @Samestate



END

