create Procedure  [dbo].[spGetEmployeeExtender] 
@Prefix Varchar(200)
As
Begin	
Declare @Pfx varchar(100)
SET @Pfx='%'+@Prefix+'%';   
	    Select top 20 (EmpRefNo+' , ('+FirstName+' '+MiddleName+' '+LastName+')') as FirstName,EmpRefNo as EmpRefNo from EmpolyeeInfo where (FirstName like @Pfx or EmpRefNo like @Pfx) and EmpRefNo is not null	 
End

--select * from EmpolyeeInfo
--exec spGetEmployeeExtender 'AN'