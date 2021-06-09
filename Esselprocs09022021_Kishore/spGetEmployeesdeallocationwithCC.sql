create PROCEDURE [dbo].[spGetEmployeesdeallocationwithCC]

AS
BEGIN    
	select distinct (JoiningCostCenter+','+ei.EmpRefNo+','+ea.AllocationTranNo)as Employeeid,(ei.EmpRefNo+', ('+FirstName+' '+MiddleName+' '+LastName+' )') as EmployeeName from EmpolyeeInfo ei join EmployeeAssetAllocation ea on ei.EmpRefNo=ea.EmpRefNo where ea.AllocationStatus='Approved' and  (DeAllocationStatus is null or DeAllocationStatus in('Rejected'))
END

--select * from EmpolyeeInfo