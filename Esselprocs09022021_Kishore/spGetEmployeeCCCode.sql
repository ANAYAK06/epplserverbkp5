CREATE Procedure  [dbo].[spGetEmployeeCCCode] 
@Employeeid Varchar(20)
As
Begin	
  select (ei.JoiningCostCenter+' , '+cc.CC_Name) as FromCC from EmpolyeeInfo ei join Cost_Center cc on cc.CC_Code=ei.JoiningCostCenter where JoiningCostCenter is not null and EmpRefNo=@Employeeid
End

--select * from EmpolyeeInfo
--exec spGetEmployeeExtender 'AN'