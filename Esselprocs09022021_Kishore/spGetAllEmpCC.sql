create Procedure  [dbo].[spGetAllEmpCC] 
@CCCode Varchar(50)
As
Begin	
Select CC_Code as CC_Code,(CC_Code+' , '+CC_Name)as CC_Name from Cost_Center where CC_Code!=@CCCode
End

--select * from EmpolyeeInfo
--exec spGetEmployeeExtender 'AN'