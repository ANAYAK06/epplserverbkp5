
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[EmployeeAssetAllocation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EmpRefNo] [nchar](10) NULL,
	[ItemCode] [varchar](11) NULL,
	[ValidityFrom] [datetime] NULL,
	[ValidityTo] [datetime] NULL,
	[AllocationRemarks] [varchar](max) NULL,
	[AllocationApprovalRemarks] [varchar](max) NULL,
	[DeAllocationRemarks] [varchar](max) NULL,
	[DeAllocationApprovalRemarks] [varchar](max) NULL,
	[AllocationStatus] [varchar](50) NULL,
	[DeAllocationStatus] [varchar](50) NULL,
	[WorkFlowLevelId] [int] NULL,
	[AllocationTranNo] [varchar](50) NULL,
	[DeAllocationTranNo] [varchar](50) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[EmployeeLeaveDetails]    Script Date: 09-02-2021 11:26:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[EmployeeLeaveDetails](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [varchar](50) NULL,
	[LeaveTypeId] [int] NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[NoOfDays] [int] NULL,
	[Remarks] [varchar](max) NULL,
	[LeaveApprovedBy] [varchar](50) NULL,
	[Status] [varchar](50) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[EmployeeTransfer]    Script Date: 09-02-2021 11:26:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[EmployeeTransfer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [varchar](50) NOT NULL,
	[RelievingCC] [varchar](50) NULL,
	[JoiningCC] [varchar](50) NULL,
	[RelievingCCDate] [datetime] NULL,
	[JoiningCCDate] [datetime] NULL,
	[Remarks] [varchar](max) NULL,
	[Status] [varchar](50) NULL,
	[WorkFlowLevelId] [int] NULL,
	[ApprovalNote] [varchar](max) NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
	[ModifiedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LeaveTypeMaster]    Script Date: 09-02-2021 11:26:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LeaveTypeMaster](
	[LeaveTypeid] [int] IDENTITY(1,1) NOT NULL,
	[LeaveType] [varchar](100) NULL,
	[Status] [bit] NULL,
 CONSTRAINT [PK_LeaveTypeMaster] PRIMARY KEY CLUSTERED 
(
	[LeaveTypeid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
