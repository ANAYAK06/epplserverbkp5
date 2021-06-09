ALTER Procedure   [dbo].[spGetTCSDCASDCAS] 
As
Begin
Declare @TCSDCA varchar(100)
Declare @TCSDCAName varchar(100)
Declare @TCSSDCA varchar(100)
Declare @TCSSDCAName varchar(100)
DECLARE @TCSDCACODEANDNAME VARCHAR(500)
DECLARE @TCSSDCACODEANDNAME VARCHAR(500)
Set @TCSDCA=(Select c.ConfigurationValue from ConfigurationType ct join Configurations c on c.ConfigurationtypeId=ct.ConfigurationTypeId and ct.Configuration_For='Output TCS' and ct.ConfigurationName='Output TCS DCA')
Set @TCSSDCA=(Select c.ConfigurationValue from ConfigurationType ct join Configurations c on c.ConfigurationtypeId=ct.ConfigurationTypeId and ct.Configuration_For='Output TCS' and ct.ConfigurationName='Output TCS SDCA')
Set @TCSDCAName=(Select DCAName from DCA where DCACode=@TCSDCA)
Set @TCSSDCAName=(Select SubDCAName from SubDCA where SubDCACode=@TCSSDCA)
SET @TCSDCACODEANDNAME=(@TCSDCA+' , '+@TCSDCAName)
SET @TCSSDCACODEANDNAME=(@TCSSDCA+' , '+@TCSSDCAName) 
 --SELECT TCSDCA=@TCSDCACODEANDNAME,TCSSDCA=@TCSSDCACODEANDNAME
 SELECT TCSDCA=@TCSDCA,TCSSDCA=@TCSSDCA
End

--exec spGetCentalcashDetails




