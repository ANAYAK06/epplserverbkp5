Create Procedure   [dbo].[spGetCCCashbalance] 
@CostCenter varchar(100)
As
Begin	
   Declare @Bal money=0;
   SELECT @Bal=isnull(OpenningBalance,0)FROM CostCenterBalance WHERE cc_code= @CostCenter
   SELECT SelfCCBalance=ISNULL(cast(@Bal as decimal(10,2)),0)
End











