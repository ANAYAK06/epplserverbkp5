create PROCEDURE [dbo].[spGetEmployeeswithCC]

AS
BEGIN    
	select (JoiningCostCenter+','+EmpRefNo)as Employeeid,(EmpRefNo+', ('+FirstName+' '+MiddleName+' '+LastName+' )') as EmployeeName from EmpolyeeInfo where Status='Active' and EmpRefNo is not null  order by FirstName
END

--select * from EmpolyeeInfo