GO
SET IDENTITY_INSERT [dbo].[LeaveTypeMaster] ON 

GO
INSERT [dbo].[LeaveTypeMaster] ([LeaveTypeid], [LeaveType], [Status]) VALUES (1, N'Earned Leave', 1)
GO
INSERT [dbo].[LeaveTypeMaster] ([LeaveTypeid], [LeaveType], [Status]) VALUES (2, N'Casual Leave', 1)
GO
INSERT [dbo].[LeaveTypeMaster] ([LeaveTypeid], [LeaveType], [Status]) VALUES (3, N'Sick Leave', 1)
GO
INSERT [dbo].[LeaveTypeMaster] ([LeaveTypeid], [LeaveType], [Status]) VALUES (4, N'Maternity Leave', 1)
GO
INSERT [dbo].[LeaveTypeMaster] ([LeaveTypeid], [LeaveType], [Status]) VALUES (5, N'Paternity Leave', 1)
GO
INSERT [dbo].[LeaveTypeMaster] ([LeaveTypeid], [LeaveType], [Status]) VALUES (6, N'Some one died in family', 1)
GO
INSERT [dbo].[LeaveTypeMaster] ([LeaveTypeid], [LeaveType], [Status]) VALUES (7, N'Custom(no of days in a month/no of days in a year* no of days attendance in a year)', 1)
GO
SET IDENTITY_INSERT [dbo].[LeaveTypeMaster] OFF
GO
