create Procedure  [dbo].[spGetItemCodesbyempid] 
@EmpRefno Varchar(20)
As
Begin
	Select id as Rid,il.itemcode as ItemCode,itemname as ItemName,specification as Specification,units as Units,empRefno as Employeeid
	from (Select itemcode,itemname,specification,units 
	from itemcodes ic join itemcodecreation icc on substring(ic.itemcode,1,3)=icc.categorycode+icc.majorgroupcode )i right outer join 
	(Select id,itemcode,empRefno from EmployeeAssetAllocation where EmpRefno=LTRIM(RTRIM(@EmpRefno)) and AllocationStatus is null )il on substring(i.itemcode,1,8)=substring(il.itemcode,1,8)  order by id asc 
  
End

--SELECT * FROM ItemCodes
--exec spGetItemCodesbyempid 'MS00011'
--SELECT  SUBSTRING(ItemCode,1,1) FROM ItemCodes

--use EsselV2QA_01022021