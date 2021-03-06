create  Procedure   [dbo].[spGetEmployeeAssetDeAllocationGrid] 
@RoleID Varchar(10)=null,
@UserID Varchar(10)=null,
@DeAllRefno Varchar(10)=null
As
Begin	
	 if(@DeAllRefno is null or @DeAllRefno ='')
		Begin
			select H.EmpRefNo as Employeeid, (FirstName+' '+MiddleName+' '+LastName)as Empname,REPLACE(CONVERT(VARCHAR(11),convert(datetime,ValidityTo,101),106), ' ', '-') as Validupto,H.DeAllocationStatus as DeAllocationStatus,H.WorkFlowLevelId as MOID,H.DeAllocationTranNo as DeAllocationRefno from EmployeeAssetAllocation H join EmpolyeeInfo ri on ri.EmpRefNo=H.EmpRefNo
			where H.DeAllocationStatus not in ('Approved','Rejected') and  H.DeAllocationStatus in(select LevelOfApproval - 1 from WorkFlowLevels where UserRoleID = @RoleID and MasterOperationID = H.WorkFlowLevelId) group by H.DeAllocationTranNo,H.EmpRefNo,FirstName,MiddleName,LastName,ValidityTo,H.DeAllocationStatus,H.WorkFlowLevelId
		End
	 Else
		Begin
			Select id as Rid,il.itemcode as ItemCode,itemname as ItemName,specification as Specification,units as Units,empRefno as Employeeid
			from (Select itemcode,itemname,specification,units 
			from itemcodes ic join itemcodecreation icc on substring(ic.itemcode,1,3)=icc.categorycode+icc.majorgroupcode )i right outer join 
			(Select id,itemcode,empRefno from EmployeeAssetAllocation EA where DeAllocationStatus not in ('Approved','Rejected') and  DeAllocationStatus in(select LevelOfApproval - 1 from WorkFlowLevels where UserRoleID = @RoleID and MasterOperationID = EA.WorkFlowLevelId) and DeAllocationTranNo=LTRIM(RTRIM(@DeAllRefno)))il on substring(i.itemcode,1,8)=substring(il.itemcode,1,8)  order by id asc 
		End
End


--select * from EmployeeAssetAllocation