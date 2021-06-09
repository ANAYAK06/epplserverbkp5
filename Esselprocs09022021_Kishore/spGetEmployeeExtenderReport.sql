CREATE Procedure  [dbo].[spGetEmployeeExtenderReport] 
@Prefix Varchar(200)
As
Begin	
Declare @Pfx varchar(100)
SET @Pfx='%'+@Prefix+'%';   
	    Select top 20 (EmpRefNo+' , ('+FirstName+' '+MiddleName+' '+LastName+')') as FirstName,EmpRefNo as EmpRefNo from EmpolyeeInfo ei join EmployeeTransfer et on et.EmployeeId=ei.EmpRefNo where (FirstName like @Pfx or EmpRefNo like @Pfx) and EmpRefNo is not null and et.Status='Approved'	 
End

--select * from EmpolyeeInfo
--exec spGetEmployeeExtender 'AN'