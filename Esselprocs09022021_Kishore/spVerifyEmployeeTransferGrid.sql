create Procedure   [dbo].[spVerifyEmployeeTransferGrid] 
@Roleid bigint=null,
@Eid int =null
AS
BEGIN
 IF(@Eid IS NOT NULL)
	 BEGIN
	   Declare @Reliveccname varchar(200)
	   Declare @Joiningccname varchar(200)
	   Set @Reliveccname=(select CC_Name from Cost_Center where CC_Code=(Select RelievingCC from EmployeeTransfer where id=@Eid))
	   Set @Joiningccname=(select CC_Name from Cost_Center where CC_Code=(Select JoiningCC from EmployeeTransfer where id=@Eid))
	    select el.Id as lid,ei.EmpRefNo as EmployeeId,(FirstName+' '+MiddleName+' '+LastName+' ('+el.EmployeeId+')')as EmployeeName,REPLACE(CONVERT(VARCHAR(11),el.RelievingCCDate, 106), ' ', '-')as RelievingDate,REPLACE(CONVERT(VARCHAR(11),el.JoiningCCDate, 106), ' ', '-')as JoiningDate,el.Status as Status,el.Remarks as Remarks,(el.RelievingCC+' , '+@Reliveccname) as FromCC,(el.JoiningCC+' , '+@Joiningccname) as ToCC,el.WorkFlowLevelId as MOID from EmployeeTransfer el join EmpolyeeInfo ei on ei.EmpRefNo=el.EmployeeId where el.Id= @Eid
	 END
 ELSE
	 BEGIN
	   select el.Id as lid,ei.EmpRefNo as EmployeeId ,(FirstName+' '+MiddleName+' '+LastName+' ('+el.EmployeeId+')')as EmployeeName,REPLACE(CONVERT(VARCHAR(11),el.RelievingCCDate, 106), ' ', '-')as RelievingDate,REPLACE(CONVERT(VARCHAR(11),el.JoiningCCDate, 106), ' ', '-')as JoiningDate,el.Status as Status from EmployeeTransfer el join EmpolyeeInfo ei on ei.EmpRefNo=el.EmployeeId where el.Status not in ('Approved','Rejected') and el.Status in (select LevelOfApproval-1 from WorkFlowLevels where UserRoleID=@Roleid and MasterOperationID=el.WorkFlowLevelId)

	   --select el.Id as lid,(FirstName+' '+MiddleName+' '+LastName)as EmployeeName,REPLACE(CONVERT(VARCHAR(11),el.FromDate, 106), ' ', '-')as FromDate,REPLACE(CONVERT(VARCHAR(11),el.ToDate, 106), ' ', '-')as ToDate,lt.LeaveType as LeaveType,NoOfDays as NoofDays,el.Status as Status from EmployeeLeaveDetails el join EmpolyeeInfo ei on ei.UserName=el.EmployeeId join LeaveTypeMaster lt on lt.LeaveTypeid=el.LeaveTypeId where el.Status='1'
	 END
END

--exec spVerifyEmployeeTransferGrid '',1