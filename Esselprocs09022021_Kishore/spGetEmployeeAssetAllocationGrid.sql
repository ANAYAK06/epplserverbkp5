CREATE  Procedure   [dbo].[spGetEmployeeAssetAllocationGrid] 
@RoleID Varchar(10)=null,
@UserID Varchar(10)=null,
@AllRefno Varchar(10)=null
As
Begin	
	 if(@AllRefno is null or @AllRefno ='')
		Begin
			select H.EmpRefNo as Employeeid, (FirstName+' '+MiddleName+' '+LastName)as Empname,REPLACE(CONVERT(VARCHAR(11),convert(datetime,ValidityFrom,101),106), ' ', '-') as Validfrom,H.AllocationStatus as AllocationStatus,H.WorkFlowLevelId as MOID,H.AllocationTranNo as AllocationRefno from EmployeeAssetAllocation H join EmpolyeeInfo ri on ri.EmpRefNo=H.EmpRefNo
			where H.AllocationStatus not in ('Approved','Rejected') and  H.AllocationStatus in(select LevelOfApproval - 1 from WorkFlowLevels where UserRoleID = @RoleID and MasterOperationID = H.WorkFlowLevelId) group by H.AllocationTranNo,H.EmpRefNo,FirstName,MiddleName,LastName,ValidityFrom,H.AllocationStatus,H.WorkFlowLevelId
		End
	 Else
		Begin
			Select id as Rid,il.itemcode as ItemCode,itemname as ItemName,specification as Specification,units as Units,empRefno as Employeeid
			from (Select itemcode,itemname,specification,units 
			from itemcodes ic join itemcodecreation icc on substring(ic.itemcode,1,3)=icc.categorycode+icc.majorgroupcode )i right outer join 
			(Select id,itemcode,empRefno from EmployeeAssetAllocation EA where AllocationStatus not in ('Approved','Rejected') and  AllocationStatus in(select LevelOfApproval - 1 from WorkFlowLevels where UserRoleID = @RoleID and MasterOperationID = EA.WorkFlowLevelId) and AllocationTranNo=LTRIM(RTRIM(@AllRefno)))il on substring(i.itemcode,1,8)=substring(il.itemcode,1,8)  order by id asc 
		End
End


--select * from EmployeeAssetAllocation