CREATE Procedure  [dbo].[spGetAutoCompleteEmpAsset] 
@Prefix Varchar(20),
@CCCode varchar(20)
As
Begin	
Declare @Pfx varchar(100)
SET @Pfx='%'+@Prefix+'%';
   Select top 20 (md.ItemCode+' , '+ItemName) as SearchItem from ItemCodes ic join Masterdata md on SUBSTRING(md.itemcode,1,8)=ic.ItemCode where  (md.ItemCode like @Pfx or ic.ItemName like @Pfx)  and CCCode=@CCCode and md.ItemCode like '1%' and md.Status='Active'
End

--SELECT * FROM ItemCodes
--select * from Masterdata where ItemCode like '1MV00301%'
--exec spGetAutoCompleteEmpAsset '1','CC-33'
--SELECT  SUBSTRING(ItemCode,1,1) FROM ItemCodes