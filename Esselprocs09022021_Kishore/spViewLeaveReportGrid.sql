create Procedure   [dbo].[spViewLeaveReportGrid] 
@FromDate datetime,
@ToDate datetime
AS
BEGIN 
select ei.EmpRefNo as lid,(ei.FirstName+' '+ei.MiddleName+' '+ei.LastName)as EmployeeName,REPLACE(CONVERT(VARCHAR(11),eld.FromDate, 106), ' ', '-')as FromDate,REPLACE(CONVERT(VARCHAR(11),eld.ToDate, 106), ' ', '-')as ToDate ,eld.NoOfDays as Noofleaves,ltm.LeaveType as LeaveType,(case when eld.Status!='Approved' and eld.Status!='Rejected' then 'Pending' when eld.Status='Rejected' then 'Rejected'  else 'Approved' end)as Status,ei.JoiningCostCenter as cccode from [EmployeeLeaveDetails] eld join EmpolyeeInfo ei on eld.EmployeeId=ei.UserName join [LeaveTypeMaster] ltm on ltm.LeaveTypeid=eld.LeaveTypeId where eld.Status !='Rejected' and eld.FromDate between @FromDate and @ToDate order by eld.Id desc
END

--exec spVerifyEmployeeTransferReport 'MS00011'