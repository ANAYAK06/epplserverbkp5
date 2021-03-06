CREATE Procedure   [dbo].[spVerifyEmployeeTransferReport] 
@Eid varchar(100)
AS
BEGIN 
	   Declare @Reliveccname varchar(200)
	   Declare @Joiningccname varchar(200)
	   Set @Reliveccname=(select CC_Name from Cost_Center where CC_Code=(Select top 1 RelievingCC from EmployeeTransfer where EmployeeId=@Eid order by id desc))
	   Set @Joiningccname=(select CC_Name from Cost_Center where CC_Code=(Select top 1 JoiningCC from EmployeeTransfer where EmployeeId=@Eid order by id desc))
	   print @Reliveccname
	   print @Joiningccname
	   select el.Id as lid,ei.EmpRefNo as EmployeeId,(FirstName+' '+MiddleName+' '+LastName+' ('+el.EmployeeId+')')as EmployeeName,REPLACE(CONVERT(VARCHAR(11),el.RelievingCCDate, 106), ' ', '-')as RelievingDate,REPLACE(CONVERT(VARCHAR(11),el.JoiningCCDate, 106), ' ', '-')as JoiningDate,el.Status as Status,el.Remarks as Remarks,(el.RelievingCC+' , '+@Reliveccname) as FromCC,(el.JoiningCC+' , '+@Joiningccname) as ToCC,el.WorkFlowLevelId as MOID from EmployeeTransfer el join EmpolyeeInfo ei on ei.EmpRefNo=el.EmployeeId where el.EmployeeId=(Select top 1 EmployeeId from EmployeeTransfer where EmployeeId=@Eid order by id desc)

END

--exec spVerifyEmployeeTransferGrid 'MS00011'