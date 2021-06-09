$(document).ready(function () {

    $("#ApproveCCMsgModal").on("hidden.bs.modal", function () {
        $("#divAppCCDtailsGrid").load('/AccountsApproval/ViewApproveCostCenterGrid');
    });
    $("#ApproveITMsgModal").on("hide.bs.modal", function () {
        $("#divApprITDtailsGrid").load('/AccountsApproval/ViewApproveITCodeGrid');
    });
    $("#ApproveCCBudgetMsgModal").on("hide.bs.modal", function () {
        $("#divAppCCBudgetDtailsGrid").load('/AccountsApproval/ViewApprovalCCBudgetDetailsGrid');
    });
    $("#ApproveCCAmendMsgModal").on("hide.bs.modal", function () {
        $("#divAppCCAmendDtailsGrid").load('/AccountsApproval/ViewVerifyCostCenterAmendBudgetGrid');
    });
    $("#ApproveDCABudgetMsgModal").on("hide.bs.modal", function () {
        $("#divAppDCABudgetGrid").load('/AccountsApproval/VerifyDCABudgetGrid');
    });
    $("#ApproveDCABudgetAmendMsgModal").on("hide.bs.modal", function () {
        $("#divAppDCABudgetAmendGrid").load('/AccountsApproval/VerifyDCABudgetAmendGrid');
    });
    $("#ApproveClientMsgModal").on("hide.bs.modal", function () {
        $("#divApprclientsGrid").load('/AccountsApproval/VerifyClientGrid');
    });
    $("#ApprovesClientMsgModal").on("hide.bs.modal", function () {
        $("#divApprsclientsGrid").load('/AccountsApproval/VerifySubClientGrid');
    });
    $("#ApproveClientPoMsgModal").on("hide.bs.modal", function () {
        $("#divApprclientPoGrid").load('/AccountsApproval/VerifyClientPOGrid');
    });
    $("#ApproveAmendPoMsgModal").on("hide.bs.modal", function () {
        $("#divApprAmendPoGrid").load('/AccountsApproval/VerifyClientPOAmendGrid');
    });
    $("#ApproveBankMsgModal").on("hide.bs.modal", function () {
        $("#divApprBankGrid").load('/AccountsApproval/VerifyBankAccountsGrid');
    });
    $("#ApproveGstMsgModal").on("hide.bs.modal", function () {
        $("#divApprGstGrid").load('/AccountsApproval/VerifyTaxGSTGrid');
    });
    $("#ApproveGentaxMsgModal").on("hide.bs.modal", function () {
        $("#divApprGentaxGrid").load('/AccountsApproval/VerifyTaxGeneralGrid');
    });
    $("#ApproveMGMsgModal").on("hide.bs.modal", function () {
        $("#divApprMGGrid").load('/AccountsApproval/VerifyMasterGroupsGrid');
    });
    $("#ApproveSGMsgModal").on("hide.bs.modal", function () {
        $("#divApprSGGrid").load('/AccountsApproval/VerifySubGroupsGrid');
    });
    $("#ApproveCGMsgModal").on("hide.bs.modal", function () {
        $("#divApprcGGrid").load('/AccountsApproval/VerifyChildGroupsGrid');
    });
    $("#ApproveLedgerMsgModal").on("hide.bs.modal", function () {
        $("#divApprLedgerGrid").load('/AccountsApproval/VerifyLedgerGrid');
    });
    $("#ApproveInvMsgModal").on("hide.bs.modal", function () {
        $("#divApprinvGrid").load('/AccountsApproval/VerifyClientInvoiceGrid');
    });
    $("#ApproveClientrecMsgModal").on("hide.bs.modal", function () {
        $("#divApprclientsRecGrid").load('/AccountsApproval/VerifyClientRecievableGrid');
    });
    $("#ApproveAdvanceMsgModal").on("hide.bs.modal", function () {
        $("#divApprAdvanceGrid").load('/AccountsApproval/VerifyAdvancePaymentGrid');
    });
    $("#ApproveRetMsgModal").on("hide.bs.modal", function () {
        $("#divApprRetGrid").load('/AccountsApproval/VerifyRetentionPaymentGrid');
    });
    $("#ApproveHoldMsgModal").on("hide.bs.modal", function () {
        $("#divApprHoldGrid").load('/AccountsApproval/VerifyHoldPaymentGrid');
    });
    $("#ApproveGenMsgModal").on("hide.bs.modal", function () {
        $("#divApprGenGrid").load('/AccountsApproval/VerifyGeneralPaymentGrid');
    });
    $("#ApproveUnslMsgModal").on("hide.bs.modal", function () {
        $("#divApprUnsLGrid").load('/AccountsApproval/VerifyUnsecuredLoanGrid');
    });
    $("#ApproveofdMsgModal").on("hide.bs.modal", function () {
        $("#divApprOpenfdGrid").load('/AccountsApproval/VerifyOpenFDGrid');
    });
    $("#ApprovePfdMsgModal").on("hide.bs.modal", function () {
        $("#divApprPfdGrid").load('/AccountsApproval/VerifyPartialFDGrid');
    });
    $("#ApproveClfdMsgModal").on("hide.bs.modal", function () {
        $("#divApprClfdGrid").load('/AccountsApproval/VerifyCloseFDGrid');
    });
    $("#ApprovefdiMsgModal").on("hide.bs.modal", function () {
        $("#divApprfdiGrid").load('/AccountsApproval/VerifyFDInterestGrid');
    });
    $("#ApproveWithdrawnMsgModal").on("hide.bs.modal", function () {
        $("#divApprWithDrawnGrid").load('/AccountsApproval/VerifyBankWithdrawnGrid');
    });
    $("#ApproveBankDepositMsgModal").on("hide.bs.modal", function () {
        $("#divApprDepositGrid").load('/AccountsApproval/VerifyBankDepositGrid');
    });

    $("#ApproveBankTransferMsgModal").on("hide.bs.modal", function () {
        $("#divApprTransferGrid").load('/AccountsApproval/VerifyBankTransferGrid');
    });

    $("#ApproveMiscMsgModal").on("hide.bs.modal", function () {
        $("#divApprMiscGrid").load('/AccountsApproval/VerifyMiscGrid');
    });

    $("#ApprovegeneralpayablebycashMsgModal").on("hide.bs.modal", function () {
        $("#divApprGeneralpayableGrid").load('/AccountsApproval/VerifyGeneralpayablebycashGrid');
    });

    //$("#ApprovecccashtransferMsgModal").on("hide.bs.modal", function () {
    //    $("#divApprcccashtransferGrid").load('/AccountsApproval/VerifyCCCashTransferGrid');
    //});

    $("#ApproveRefundMsgModal").on("hide.bs.modal", function () {
        $("#divApprRefundGrid").load('/AccountsApproval/VerifyRefundGrid');
    });

    $("#ApproveChequeMsgModal").on("hide.bs.modal", function () {
        $("#divApprChequeGrid").load('/AccountsApproval/VerifyChequeGrid');
    });
    $("#ApproveDcaMsgModal").on("hide.bs.modal", function () {
        $("#divApprDcaGrid").load('/AccountsApproval/VerifyDcaGrid');
    });
    $("#ApproveSDcaMsgModal").on("hide.bs.modal", function () {
        $("#divApprSDcaGrid").load('/AccountsApproval/VerifySubDcaGrid');
    });
    $("#ApproveUserMsgModal").on("hide.bs.modal", function () {
        $("#divApprUSserDtailsGrid").load('/AccountsApproval/VerifyUsersGrid');
    });
    $("#ApproveUnslMsgModal").on("hide.bs.modal", function () {
        $("#divApprUnsLGrid").load('/AccountsApproval/VerifyUnsecuredLoanGrid');
    });
    $("#ApproveUnslExistMsgModal").on("hide.bs.modal", function () {
        $("#divApprUnsLGridExist").load('/AccountsApproval/VerifyUnsecuredLoanExistingGrid');
    });
    $("#ApproveUnslReturnMsgModal").on("hide.bs.modal", function () {
        $("#divApprUnsLRetGrid").load('/AccountsApproval/VerifyUnsecuredLoanReturnGrid');
    });
    $("#ApprovejvMsgModal").on("hide.bs.modal", function () {
        $("#divApprjvGrid").load('/accountsApproval/VerifyJournalVoucherGrid');
    });

    $("#ApproveTLMsgModal").on("hide.bs.modal", function () {
        $("#divApprTLDtailsGrid").load('/AccountsApproval/VerifyTermLoanAgencyGrid');
    });

});


function RejectCC(id) {
    var ccid = "cname-" + id;
    var ccname = $("#" + ccid + "").val();
    cctypeid = "cctype-" + id;
    inchargeid = "Appincname-" + id;
    incnoid = "Appincno-" + id;
    ccnoid = "Appccno-" + id;
    cccodeid = "cccode-" + id;
    cctype1 = $("#" + cctypeid + "").val();
    incharge = $("#" + inchargeid + "").val();
    incno = $("#" + incnoid + "").val();
    ccno = $("#" + ccnoid + "").val();
    code = $("#" + cccodeid + "").val();
    var currentdate = new Date();
    var appCC = {};
    appCC = {
        CC_Id: id,
        CCCode: code,
        CCName: ccname,
        FinalOfferDate: currentdate,
        CCInchargeName: incharge,
        InchargePhNo: incno,
        PhoneNo: ccno,
        CCType: cctype1,
        ClientAcceptanceDate: currentdate,
        Createdby: $("#txtAppccCreatedby").val(),
        Status: 'Rejected',
        Action: 'Reject'
    };

    addFailMsg = "Error Occurred";
    addSuccessMsg = "Cost Center Rejected Successfully.";
    $.ajax({
        type: "POST",
        url: "/AccountsApproval/SaveApproveCostCenter",
        data: JSON.stringify({ approveCC: appCC }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
       
        success: function (response) {
            var typeArr = response.saveStatus.toString().split('+');
            var msg = typeArr[0];
            var msgcc = typeArr[1];
            if (msg == "Submitted") {
                $('#ApproveCCMsgModal').modal('show');
                var msg = "<div>Cost Center:" + msgcc + "Rejected Successfully</div>";
                $("#AppCCMsg").html(msg);
            }
            else {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCMsg").html(msg);
                $('#ApproveCCMsgModal').modal('show');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppCCMsg").html(msg);
            $('#ApproveCCMsgModal').modal('show');
        }
    });

}
function AppActionchange(id) {
    appstatusid = "Appstatus-" + id;
    appstatus = $("#" + appstatusid + " " + "option:selected").text();
    retnoteid = "divAppRetNote-" + id;
    retnote = $("#" + retnoteid + "");
    //alert(id + "," + appstatus);
    if (appstatus == "Return") {
        $(retnote).removeClass('hidden');
    } else {
        $(retnote).addClass('hidden');
    }
    msgid = "divApproveCCInfoMsg-" + id;
    msg = $("#" + msgid + "");
    $(msg).text("");
    $(msg).addClass("hidden");
}
function ApprITActionchange(id) {
    appstatusid = "Appstatus-" + id;
    appstatus = $("#" + appstatusid + " " + "option:selected").text();
    retnoteid = "divApprITRetNote-" + id;
    retnote = $("#" + retnoteid + "");
    //alert(id + "," + appstatus);
    if (appstatus == "Return") {
        $(retnote).removeClass('hidden');
    } else {
        $(retnote).addClass('hidden');
    }
    msgid = "divApproveITInfoMsg-" + id;
    msg = $("#" + msgid + "");
    $(msg).text("");
    $(msg).addClass("hidden");
}

function ApproveIT(id, Itstatus) {
    var appstatus = $("#Appstatus option:selected").text();
    retnote = $("#ApprITRetNote").val();
    msg = $("#divApproveITInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var apprit = {
            RoleId: $("#roleid").val(),
            CreatedBy: $("#txtAppITCreatedby").val(),
            Itid: id,
            Action: appstatus,
            RemarksNote: retnote,
            ITStatus: Itstatus
        };
        //addFailMsg = "Error Occurred While Adding IT Verification";
        addFailMsg = "Error Occurred";
        //addSuccessMsg = "IT Verified Successfully.";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveITCode",
            data: JSON.stringify({ apprItcode: apprit }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",            
            success: function (response) {               
                if (response.saveStatus === "Submitted") {
                    $('#ApproveITMsgModal').modal('show');
                    var msg = "<div>IT Code " + finalmsg+"</div>";
                    $("#AppITMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppITMsg").html(msg1);
                    $('#ApproveITMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg2 = "<div>" + addFailMsg+" </div>";
                $("#AppITMsg").html(msg2);
                $('#ApproveITMsgModal').modal('show');
            }
        });
    }
}

function rootUrl(url) {
    var _rootUrl = '@Url.Content("~")';
    var x = url;
    if (url.indexOf(_rootUrl) != 0) {
        x = _rootUrl + "/" + url;
        x = x.replace(/\/\//g, "/").replace(/\/\//g, "/");
    }
    return x;
};
function UpdateApprIT(itid) {

    isValid = true;
    var errorMsg = "";
    var itname = $("#txtUpITName").val();
    if (itname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter IT Name</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpdateITInfoMsg").text("");
        $("#divUpdateITInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpdateITInfoMsg").addClass("alert-danger");
        $("#divUpdateITInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divUpdateITInfoMsg").text("");
        $("#divUpdateITInfoMsg").addClass("hidden");

        var saveIT = {
            Itid: itid,
            CreatedBy: $("#txtCreatedby").val(),
            ItName: $("#txtUpITName").val(),
            Action: 'Update',
            CheckUpdationType: 'ReturnUpdate',
            GroupId: $("#txtupGroupid").val(),
            SubGroupId: $("#txtupSubGroupid").val()
        };
        addFailMsg = "Error Occurred While Updating IT Code.";
        addSuccessMsg = "IT Code Updated Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/EditITCode',
            data: { itcode: saveIT },
         
            success: function (Data) {

                if (Data.saveStatus == "Submitted") {
                    $('#ApproveITMsgModal').modal('show');
                    var msg = "<div>IT Code Updated Successfully</div>";
                    $("#AppITMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + Data.saveStatus + "</div>";
                    $("#AppITMsg").html(msg);
                    $('#ApproveITMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppITMsg").html(msg);
                $('#ApproveITMsgModal').modal('show');
            }
        });
    }

}

function ApproveCCBudget(budgetid, fyear) {

    var cccodeid = "cccode-" + budgetid;
    cccode = $("#" + cccodeid + "").val();
    //appstatusid = "ApprCCBstatus-" + budgetid;
    var appstatus = $("#ApprCCBstatus option:selected").text();
    var retnoteid = "ApprCCBRetNote-" + budgetid;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divApproveCCBudgetInfoMsg-" + budgetid;
    msg = $("#" + msgid + "");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var ccBudget = {
            CostCenter: cccode,
            Action: appstatus,
            ApprovalNote: retnote,
            Year: fyear,
            RoleId: $("#roleid").val(),
            Createdby: $("#txtAppccBudgetCreatedby").val()
        };
        addFailMsg = "Error Occurred";
        // addSuccessMsg = "Ledger  Verified Successfully.";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveCCBudget",
            data: JSON.stringify({ apprccBudget: ccBudget }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
           
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApproveCCBudgetMsgModal').modal('show');
                    var msg = "<div>Budget " + finalmsg +"</div>";
                    $("#AppCCBudgetMsg").html(msg);
                }
                else {
                    var msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppCCBudgetMsg").html(msg);
                    $('#ApproveCCBudgetMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCBudgetMsg").html(msg);
                $('#ApproveCCBudgetMsgModal').modal('show');
            }
        });
    }
}

function UpdateCCBudget(CCCode, cctype, year) {
    isValid = true;
    var errorMsg = "";
    var fyear = '';
    var amount = $("#txtAmount").val();
    if (cctype === "Non-Performing" || cctype === "Capital") {
        fyear = year;
    }
  
    var msg = $("#divCCInfoMsg");
    var fyearindex = $("#Yearddl  option:selected").index();
    if (amount == " " || amount == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (cctype == "Non-Performing" && cctype == "Capital") {
        if (fyearindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Year</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
       
        var ccBudget = {
            CostCenter: CCCode,
            Year: fyear,
            Amount: amount,
            Createdby: $("#txtAppccBudgetCreatedby").val(),
            Remarks: $("#txtCCReamarks").val()
        };
        //debugger;
        addFailMsg = "Error Occurred While Updating Budget";
        addSuccessMsg = "Budget Verified Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateCCBudget",
            data: JSON.stringify({ budgetDetails: ccBudget }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            
            success: function (response) {

                if (response.saveStatus === 'Submited') {
                    $('#ApproveCCBudgetMsgModal').modal('show');
                    var msg = "<div>Budget Updated Successfully</div>";
                    $("#AppCCBudgetMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppCCBudgetMsg").html(msg1);
                    $('#ApproveCCBudgetMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCBudgetMsg").html(msg);
                $('#ApproveCCBudgetMsgModal').modal('show');
            }
        });
    }

}
function ApproveCCAmend(AmendBudgetid) {
    cccode = $("#apprccamendCCCode").val();
    var budgetid = "ccbudgetid-" + AmendBudgetid;
    bid = $("#" + budgetid + "").val();
    //appstatusid = "AppCCAmendstatus-" + AmendBudgetid;
    var appstatus = $("#AppCCAmendstatus option:selected").text();
    var retnoteid = "AppAmendCCNote-" + AmendBudgetid;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divApproveCCAmendInfoMsg-" + AmendBudgetid;
    msg = $("#" + msgid + "");
    fyyearid = "Amendyear-" + AmendBudgetid;
    fyyear = $("#" + fyyearid + "").val();
    amendtype = $("#Amendtype").val();
    amendvalueid = "Amendvalue-" + AmendBudgetid;
    amendvalue = $("#" + amendvalueid + "").val();
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var ccAnd = {
            BudgetId: bid,
            CCBudgetAmendmentid: AmendBudgetid,
            ApprovalNote: retnote,
            CreatedBy: $("#txtAppccAmendCreatedby").val(),
            CCCode: cccode,
            VerificationType: appstatus,
            AmendmentType: amendtype,
            FYYear: fyyear,
            AmendedValue: amendvalue,
            Roleid: $("#roleid").val()
        };
        addFailMsg = "Error Occurred";
        // addSuccessMsg = "Ledger  Verified Successfully.";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/saveCCAmendApproval",
            data: JSON.stringify({ apprccAmend: ccAnd }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            
            success: function (response) {

                var typeArr = response.saveStatus.toString().split('+');
                var msg = typeArr[0];
                var msgit = typeArr[1];
                if (msg == "Submitted") {
                    $('#ApproveCCAmendMsgModal').modal('show');
                    var msg = "<div>Budget:" + msgit + " " + finalmsg+" </div>";
                    $("#AppCCAmendMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + msg + "</div>";
                    $("#AppCCAmendMsg").html(msg1);
                    $('#ApproveCCAmendMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCAmendMsg").html(msg);
                $('#ApproveCCAmendMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCAmendMsg").html(msg);
                $('#ApproveCCAmendMsgModal').modal('show');
            }
        });

    }
}
function ApproveDCABudget(cc, year, cctype) {
    //cccodeid = "CCCode-" + AmendBudgetid;
    //  cccode = cc;
    var appstatus = $("#AppDCABudgetstatus  option:selected").text();
    retnote = $("#AppDCABudgetNote").val();
    msg = $("#divApprDCABudgetInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var BudgetIds = ""; var ids = "",DCAamounts="";       
        $("#tblApprDCABudget1 tbody tr").each(function () {
                       
            var currentRow = $(this);
            let id = currentRow.find("td").eq(1).find("input[type='text']").val();
            var rowamount = currentRow.find("td").eq(4).html();
            BudgetIds += id + ",";
           // var str = levelid.trim();   
            DCAamounts += rowamount.trim() + ",";
        });

        var dcabudget = {
            Budgetidlist: BudgetIds,
            CCCode: cc,
            FYyear: year,
            RoleId: $("#roleid").val(),
            ApprovalNote: retnote,
            CreatedBy: $("#txtAppDcaBudCreatedby").val(),
            DCABudgetValue: $("#txtApprDCABudget").val(),
            DcaAmounts: DCAamounts,
            Action: appstatus
        };
      
        addFailMsg = "Error Occurred";
        // addSuccessMsg = "Ledger  Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update'; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveDCABudget",
            data: JSON.stringify({ apprDcaBudget: dcabudget }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var msg = response.saveStatus;

                if (msg == "Submited") {
                    $('#ApproveDCABudgetMsgModal').modal('show');
                    msg = "<div>Budget " + finalmsg+"</div>";
                    $("#AppDcaBudgetMsg").html(msg);
                }
                else {
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppDcaBudgetMsg").html(msg);
                    $('#ApproveDCABudgetMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetMsg").html(msg);
                $('#ApproveDCABudgetMsgModal').modal('show');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetMsg").html(msg);
                $('#ApproveDCABudgetMsgModal').modal('show');
            }
        });
    }
}

function ApproveDCABudgetAmend(code, dcacode, atype, amendid, fyear) {


    var appstatus = $("#AppDCABudgetAmendstatus option:selected").text();
    retnote = $("#AppDCABudgetAmendNote").val();
    msg = $("#divApprDCABudgetAmendInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyDCABudgetAmend = {
            DCABudgetAmendmentId: amendid,
            Action: appstatus,
            ApprovalNote: retnote,
            CreatedBy: $("#txtAppDcaBudAmendCreatedby").val(),
            AmendmentType: atype,
            AmendedValue: $("#txtapprdbavalue").val(),
            DCABudgetId: $("#DcaBid").html(),
            CCBudgetId: $("#CCBid").html(),
            RoleId: $("#roleid").val(),
            CCCode: code,
            DCACode: dcacode,
            FYYear: fyear
        };
        debugger;
        //addFailMsg = "Error Occurred While  Budget Verification";
        //addSuccessMsg = "Budget Verified Successfully.";

        addFailMsg = "Error Occurred";
        // addSuccessMsg = "Ledger  Verified Successfully.";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveDCABudgetAmend",
            data: JSON.stringify({ apprDcaAmend: verifyDCABudgetAmend }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApproveDCABudgetAmendMsgModal').modal('show');
                    var msg = "<div>Budget " + finalmsg + "</div>";
                    $("#AppDcaBudgetAmendMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppDcaBudgetAmendMsg").html(msg);
                    $('#ApproveDCABudgetAmendMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetAmendMsg").html(msg);
                $('#ApproveDCABudgetAmendMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetAmendMsg").html(msg);
                $('#ApproveDCABudgetAmendMsgModal').modal('show');
            }
        });
    }
}
function ApprAmendDCAVerification(type) {
    // alert(type);

    //var type = $("#ddlDCAAmendType option:selected").val();
    var amount = $("#AmendDCABudgetAmount").val();
    var oldamount = $("#txtDCAoldAmount").val();
    var newbudget = 0, newbalance = 0;
    var newccbudget = 0, newccbalance = 0;
    //DCA
    var oldBudget = $("#txtDCABudgetold").val();
    var oldBalance = $("#txtDCABalanceold").val();
    //CC
    oldCCBudget = $("#txtDCCBudgetold").val();
    oldCCBalance = $("#txtDCCBalanceOld").val();
    //Budget Difference
   

    //alert(amount);
 
    if (amount !== "") {
        if (type === 'Add') {
            var CurrenCCBalance = parseFloat(oldCCBalance);
            var CurrentDCABudget = parseFloat(oldBudget) - parseFloat(oldamount);
            var CurrenDCABalance = parseFloat(oldBalance) - parseFloat(oldamount);
            var addingamount = parseFloat(amount);
            if (parseFloat(addingamount) > parseFloat(CurrenCCBalance)) {//if adding amount is avaible in cc balance
                $("#divAmendDCAInfoMsg").text("");
                $("#divAmendDCAInfoMsg").append("<div>Amount is greater than the CC Balance</div>");
                $("#divAmendDCAInfoMsg").addClass("alert-danger");
                $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divAmendDCAInfoMsg").text("");
                $("#divAmendDCAInfoMsg").addClass("hidden");
                if (parseFloat(oldamount) !== parseFloat(amount)) {
                    var dbal = $("#lblDCAAmendBudgetBalance").html();
                    var dbudg = $("#lblDCABudgetAmend").html();
                  
                    if (amount === '') {
                        //add balance to dca balance
                        newbudget = parseFloat(CurrentDCABudget) + parseFloat(oldamount);  //add amount to dca budget -previously assigned value      
                        newbalance = parseFloat(CurrenDCABalance) + parseFloat(oldamount);  //add amount to dca balance -previously assigned value    
                        //increase cc budget
                        newccbalance = parseFloat(CurrenCCBalance) - parseFloat(oldamount);
                    }
                    else {
                        newbudget = parseFloat(CurrentDCABudget) + parseFloat(amount);  //add amount to dca budget -previously assigned value      
                        newbalance = parseFloat(CurrenDCABalance) + parseFloat(amount);  //add amount to dca balance -previously assigned value     
                        //reduce cc budget
                        newccbalance = parseFloat(CurrenCCBalance) - parseFloat(amount);
                    }
                    
                    //alert("new" + newbudget + "-" + newbalance);
                    $("#lblDCABudgetAmend").html(parseFloat(newbudget).toFixed(2));
                    $("#lblDCAAmendBudgetBalance").html(parseFloat(newbalance).toFixed(2));
                    $("#lblDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2));
                }


            }

        }
     
        if (type === 'Substract') {
            var CurrentDCABudget1 = parseFloat(oldBudget);
            var CurrenDCABalance1 = parseFloat(oldBalance);
            //var CurrentDCABudget1 = parseFloat(oldBudget) + parseFloat(oldamount);
            //var CurrenDCABalance1 = parseFloat(oldBalance) + parseFloat(oldamount);
            var CurrentCCBal1 = parseFloat(oldCCBalance);
            isValid = true;
            var errorMsg = "";
            if (parseFloat(oldamount) !== parseFloat(amount)) {

                //var dbal1 = $("#lblDCAAmendBudgetBalance").html();
                //var dbudg1 = $("#lblDCABudgetAmend").html();
                //var cbal1 = $("#lblDCCAmendBalance").html();
                if (parseFloat(amount) > parseFloat(CurrentCCBal1)) {//if amount is greater than balance
                    $("#divAmendDCAInfoMsg").text("");
                    $("#divAmendDCAInfoMsg").append("<div>Amount is greater than the DCA Balance</div>");
                    $("#divAmendDCAInfoMsg").addClass("alert-danger");
                    $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
                }
                else {
                    var substractdca = parseFloat(CurrenDCABalance1) - parseFloat(amount);
                    if (substractdca < 0) {// if substracting amount is available in dca balance
                        $("#divAmendDCAInfoMsg").text("");
                        $("#divAmendDCAInfoMsg").append("<div>Substract Amount is greater than the Balance</div>");
                        $("#divAmendDCAInfoMsg").addClass("alert-danger");
                        $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
                    }
                    else {
                        $("#divAmendDCAInfoMsg").text("");
                        $("#divAmendDCAInfoMsg").addClass("hidden");
                        if (amount === '') {
                            newbudget = parseFloat(CurrentDCABudget1) - parseFloat(oldamount);  //aad amount to dca budget -previously assigned value      
                            newbalance = parseFloat(CurrenDCABalance1) - parseFloat(oldamount);  //add amount to dca balance -previously assigned value    
                            //increase cc budget
                            newccbalance = parseFloat(CurrentCCBal1) - parseFloat(oldamount);//substract amount from cc
                        }
                        else {
                            // if  add amount to CC balance and reduce dca balance & dca Budget
                            newbudget = parseFloat(CurrentDCABudget1) - parseFloat(amount);
                            newccbalance = CurrentCCBal1 + parseFloat(amount);
                            newbalance = parseFloat(CurrenDCABalance1) - parseFloat(amount);
                        }

                        $("#lblDCAAmendBudgetBalance").html(parseFloat(newbalance).toFixed(2));
                        $("#lblDCABudgetAmend").html(parseFloat(newbudget).toFixed(2));
                        $("#lblDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2));
                    }
                }
            }
            else {
                var ccbal = parseFloat(CurrentCCBal1) + parseFloat( oldamount);
                $("#lblDCAAmendBudgetBalance").html(parseFloat(CurrenDCABalance1).toFixed(2) - parseFloat(oldamount).toFixed(2));
                $("#lblDCABudgetAmend").html(parseFloat(CurrentDCABudget1).toFixed(2) - parseFloat(oldamount).toFixed(2));
                $("#lblDCCAmendBalance").html(parseFloat(ccbal).toFixed(2));
            }
        }

    }
    else {
        $("#divAmendDCAInfoMsg").text("");
        $("#divAmendDCAInfoMsg").addClass("hidden");
        if (type === 'Substract') {
            newbudget = parseFloat(oldBudget) ;  //add amount to dca budget        
            newbalance = parseFloat(oldBalance) ;  //add amount to dca balance        
            //reduce cc budget
            newccbalance = parseFloat(oldCCBalance) ;
            //alert("new" + newbudget + "-" + newbalance);
            $("#lblDCABudgetAmend").html(parseFloat(newbudget).toFixed(2));
            $("#lblDCAAmendBudgetBalance").html(parseFloat(newbalance).toFixed(2));
            $("#lblDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2));
        }
        if (type === 'Add') {
            //add balance to dca balance
            newbudget = parseFloat(oldBudget) - parseFloat(oldamount);  //add amount to dca budget        
            newbalance = parseFloat(oldBalance) - parseFloat(oldamount);  //add amount to dca balance        
            //reduce cc budget
            newccbalance = parseFloat(oldCCBalance);
            //alert("new" + newbudget + "-" + newbalance);
            $("#lblDCABudgetAmend").html(parseFloat(newbudget).toFixed(2));
            $("#lblDCAAmendBudgetBalance").html(parseFloat(newbalance).toFixed(2));
            $("#lblDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2));
        }
        ////alert(oldBudget + "" + oldBalance);
        ////debugger;
        //$("#lblDCCAmendBudget").html(parseFloat(oldCCBudget).toFixed(2));
        //$("#lblDCCAmendBalance").html(parseFloat(oldCCBalance).toFixed(2));
        //$("#lblDCABudgetAmend").html(parseFloat(oldBudget).toFixed(2));
        //$("#lblDCAAmendBudgetBalance").html(parseFloat(oldBalance).toFixed(2));
    }
}
function NewAmendDCAVerification() {

    var amount = $("#NewDCABudgetAmount").val();
    var oldccbalance = $("#txtNewDCCBalanceOld").val();
    var oldamount = $("#txtDCAoldAmount1").val();
    if (amount !== "") {
        var currentccbal = $("#lblNewDCCAmendBalance").html();
        if (parseFloat(oldamount) !== parseFloat(amount)) {

            if (parseFloat(oldccbalance) < parseFloat(amount)) {
                $("#divNewAmendDCAInfoMsg").text("");
                $("#divNewAmendDCAInfoMsg").append("<div>Amount is greater than CC Balance</div>");
                $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
                $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");

            }
            else {
                var ccbal = parseFloat(oldccbalance) + parseFloat(oldamount);
                var newccbalance = parseFloat(ccbal) - parseFloat(amount);
                $("#lblNewDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2));
                $("#divNewAmendDCAInfoMsg").text("");
                $("#divNewAmendDCAInfoMsg").addClass("hidden");
            }
        }
        //else {
        //    var newccbalance1 = parseFloat(oldccbalance) - parseFloat(amount);
        //    $("#lblNewDCCAmendBalance").html(parseFloat(newccbalance1).toFixed(2));
        //    $("#divNewAmendDCAInfoMsg").text("");
        //    $("#divNewAmendDCAInfoMsg").addClass("hidden");
        //}

    }
    else {
        //var currentccbal1 = $("#lblNewDCCAmendBalance").html();
        var ccbal1 = parseFloat(oldccbalance) + parseFloat(oldamount);
        $("#lblNewDCCAmendBalance").html(parseFloat(ccbal1).toFixed(2));
        $("#divNewAmendDCAInfoMsg").text("");
        $("#divNewAmendDCAInfoMsg").addClass("hidden");

    }

}
function UpdateApprAmendDCAData(cccode, dcacode, oldamendvalue, type, amendid, fyear) {
    //alert(fyear);
    var newamendvalue = $("#AmendDCABudgetAmount").val();
    msg = $("#divAmendDCAInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (newamendvalue == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var updateData = {
            DCABudgetAmendmentId: amendid,
            OldAmount: oldamendvalue,
            AmendedValue: newamendvalue,
            AmendmentType: type,
            DCABudgetId: $("#txtDCABudgetid").val(),
            CCBudgetId: $("#txtDCCBudgetid").val(),
            CCCode: cccode,
            DCACode: dcacode,
            DCABudgetBalance: $("#lblDCAAmendBudgetBalance").html(),
            DCABudget: $("#lblDCABudgetAmend").html(),
            CCBalance: $("#lblDCCAmendBalance").html(),
            FYYear: fyear

        };
        addFailMsg = "Error Occurred While Updating Budget Amend";
        addSuccessMsg = "Budget Verified Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateApprovalDCABudgetAmend",
            data: JSON.stringify({ apprDcaAmend: updateData }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApproveDCABudgetAmendMsgModal').modal('show');
                    var msg = "<div>Budget  Updated Successfully</div>";
                    $("#AppDcaBudgetAmendMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppDcaBudgetAmendMsg").html(msg);
                    $('#ApproveDCABudgetAmendMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetAmendMsg").html(msg);
                $('#ApproveDCABudgetAmendMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetAmendMsg").html(msg);
                $('#ApproveDCABudgetAmendMsgModal').modal('show');
            }
        });



    }

}
function UpdateApprNewAmendDCAData(cccode, dcacode, oldamendvalue, type, amendid, fyear) {
    
    var newamendvalue = $("#NewDCABudgetAmount").val();
    msg = $("#divNewAmendDCAInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (newamendvalue == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");


        var updateData = {
            DCABudgetAmendmentId: amendid,
            OldAmount: oldamendvalue,
            AmendedValue: newamendvalue,
            AmendmentType: type,
            DCABudgetId: $("#DCABid").val(),
            CCBudgetId: $("#CCBid").val(),
            CCCode: cccode,
            DCACode: dcacode,
            DCABudgetBalance: newamendvalue,
            DCABudget: newamendvalue,
            CCBalance: $("#lblNewDCCAmendBalance").html(),
            FYYear: fyear

        };


        addFailMsg = "Error Occurred While  Budget Verification";
        addSuccessMsg = "Budget Verified Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateApprovalDCABudgetAmend",
            data: JSON.stringify({ apprDcaAmend: updateData }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApproveDCABudgetAmendMsgModal').modal('show');
                    var msg = "<div>Budget  Updated Successfully</div>";
                    $("#AppDcaBudgetAmendMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppDcaBudgetAmendMsg").html(msg);
                    $('#ApproveDCABudgetAmendMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetAmendMsg").html(msg);
                $('#ApproveDCABudgetAmendMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppDcaBudgetAmendMsg").html(msg);
                $('#ApproveDCABudgetAmendMsgModal').modal('show');
            }
        });
    }
}

function ApproveClient(clientcode, ClientStatus) {

    var appstatus = $("#AppClientstatus option:selected").text();
    retnote = $("#AppClientNote").val();
    msg = $("#divApprclientInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var verifyclient = {
            Client_Code: clientcode,
            VerificationType: appstatus,
            ApprovalNote: retnote, 
            RoleId: $("#roleid").val(),
            Createdby: $("#txtAppClientCreatedby").val(),
            ClientStatus: ClientStatus
        };
        addFailMsg = "Error Occurred While Client Verification";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update ';}
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }



        addSuccessMsg = "Client Verified Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveClient",
            data: JSON.stringify({ apprClient: verifyclient }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApproveClientMsgModal').modal('show');
                    var msg = "<div>Client " + finalmsg+"</div>";
                    $("#AppClientMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppClientMsg").html(msg1);
                    $('#ApproveClientMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientMsg").html(msg);
                $('#ApproveClientMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientMsg").html(msg);
                $('#ApproveClientMsgModal').modal('show');
            }
        });
    }

}
//function upgstCheckchange(checkbox) {
//    var selectedIds = [];
//    var checkboxes = document.getElementsByName('upGstApplicable');
//    for (var i in checkboxes)
//        checkboxes[i].checked = checkbox.checked;
//    checkboxes.forEach((item) => {
//        if (item !== checkbox) item.checked = false;
//    })
//    var ids = document.getElementsByName('upGstApplicable');
//    for (var i = 0; i < ids.length; i++) {
//        if (ids[i].checked == true) {
//            // alert(ids[i].value);
//            if (ids[i].value == 'Yes') {
//                $("#divUpClientGst").removeClass('hidden');
//                $.ajax({
//                    type: "POST",
//                    url: "/Home/GetAllStates",
//                    data: '{}',
//                    contentType: "application/json; charset=utf-8",
//                    dataType: "json",
//                    beforeSend: function () {
//                        $('#ajax-container').html('');
//                        addSpinner($('#ajax-container'));
//                    },
//                    success: function (response) {

//                        var rowno = 1;
//                        var newRow = $("<tr>");
//                        var cols = "";
//                        cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
//                        cols += '<td><select class="form-control dropdown-toggle" id="ddlUpGstState" onchange="ClientGSTStateChange()"><option value="">-Please Select-</option>';
//                        $.each(response, function () {
//                            cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
//                        });
//                        cols += '</select>';
//                        cols += '</td><td style="text-align:center"><input class="form-control" data-val="true" id="txtUpGSTNo" name="txtGSTNo" type="text" /></td >';
//                        cols += '<td style="text-align:center"><ul class="list-inline">';
//                        cols += '<li class="eagle-checkbox">';
//                        cols += '<label class="eagle-check custom-checkbox">';
//                        cols += '<input type="checkbox" class="eagle-check-input" id="chkGstCheck">';
//                        cols += '<span class="eagle-check-indicator"></span>  </label>';
//                        cols += '</li>';
//                        cols += '</ul ></td>';
//                        //cols += '<td style="text-align:center"><input type="button" class="ibtnUpClientDel btn btn-md btn-danger" value="Delete"></td>';
//                        newRow.append(cols);
//                        $("table.order-list.UpClientGstGrid").append(newRow);
//                        $("#divUpClientInfoMsg").text("");
//                        $("#divUpClientInfoMsg").addClass("hidden");
//                        removeSpinner($('#ajax-container'), function () {
//                            $('#ajax-container').html('Content loaded.');
//                        })
//                    },
//                    failure: function (response) {
//                        removeSpinner($('#ajax-container'), function () {
//                            $('#ajax-container').html('Content loaded.');
//                        })
//                        alert(response.responseText);
//                    },
//                    error: function (response) {
//                        removeSpinner($('#ajax-container'), function () {
//                            $('#ajax-container').html('Content loaded.');
//                        })
//                        alert(response.responseText);
//                    }
//                });

//            }
//            else {
//                $("#divUpClientGst").addClass('hidden');
//                $("#UpClientGstTable tbody tr").remove();
//                $("#divUpClientInfoMsg").text("");
//                $("#divUpClientInfoMsg").addClass("hidden");
//            }
//        }
//    }
//}

function checkValueInArray(value, arr) {
    var status = false;//Not Exist in array
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
            status = true;//Exist  in array
            break;
        }
    }
    return status;
}
function UpdateClientData(clientcode) {

    isValid = true;
    var errorMsg = "";
    var clientid = $("#txtUpclientid").val();
    var clientName = $("#txtUpClient").val();
    var Tin = $("#txtUpTINNo").val();
    var Pan = $("#txtUpPANNo").val();
    var Tan = $("#txtUpTANNo").val();
    var ContactPerson = $("#txtUpContactPersonName").val();
    var ContactNo = $("#txtUpPersonPhoneNo").val();
    var Address = $("#txtUpAddress").val();
    if (clientcode == 0 || clientcode == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Client </p>";
        isValid = false;
    }
    if (clientName == null || clientName == "") {

        errorMsg += "<p style='margin-top:-5px!important;'>Enter Client Name</p>";
        isValid = false;
    }
    if (Tin == null || Tin == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter TIN No</p>";
        isValid = false;
    }
    if (Pan == null || Pan == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter PAN No</p>";
        isValid = false;
    }
    if (Tan == null || Tan == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tan No</p>";
        isValid = false;
    }
    if (ContactPerson == null || ContactPerson == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Contact Person Name</p>";
        isValid = false;
    }
    if (ContactNo == null || ContactNo == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Contact Person No</p>";
        isValid = false;
    }
    else if (ContactNo.length != 10) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter 10 digit Phone No</p>";
        isValid = false;
    }
    if (Address == null || Address == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Address</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpClientInfoMsg").text("");
        $("#divUpClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpClientInfoMsg").addClass("alert-danger");
        $("#divUpClientInfoMsg").removeClass("hidden alert-success");
    }
    else {
        //if ($('#chkUpGSTN').is(":checked")) {
        //    var gst = confirm('Apply GST');
        //    if (gst == true) {
        //        //show gst grid
        //        $("#chkUpGSTY").prop("checked", true);
        //        $("#chkUpGSTN").prop("checked", false);
        //        $("#divUpClientGst").removeClass('hidden');

        //        $.ajax({
        //            type: "POST",
        //            url: "/Home/GetAllStates",
        //            data: '{}',
        //            contentType: "application/json; charset=utf-8",
        //            dataType: "json",
        //            beforeSend: function () {
        //                $('#ajax-container').html('');
        //                addSpinner($('#ajax-container'));
        //            },
        //            success: function (response) {

        //                var rowno = 1;
        //                var newRow = $("<tr>");
        //                var cols = "";
        //                cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
        //                cols += '<td><select class="form-control dropdown-toggle" id="ddlUpGstState" onchange="ClientGSTStateChange()"><option value="">-Please Select-</option>';
        //                $.each(response, function () {

        //                    cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';

        //                });
        //                cols += '</select>';
        //                cols += '</td><td style="text-align:center"><input class="form-control" data-val="true" id="txtUpGSTNo" name="txtGSTNo" type="text" /></td >';
        //                cols += '<td style="text-align:center"><ul class="list-inline">';
        //                cols += '<li class="eagle-checkbox">';
        //                cols += '<label class="eagle-check custom-checkbox">';
        //                cols += '<input type="checkbox" class="eagle-check-input" id="chkGstCheck">';
        //                cols += '<span class="eagle-check-indicator"></span>  </label>';
        //                cols += '</li>';
        //                cols += '</ul ></td>';
        //                cols += '<td style="text-align:center"><input type="button" class="ibtnUpClientDel btn btn-md btn-danger" value="Delete"></td>';
        //                newRow.append(cols);
        //                $("table.order-list.UpClientGstGrid").append(newRow);
        //                removeSpinner($('#ajax-container'), function () {
        //                    $('#ajax-container').html('Content loaded.');
        //                });
        //            },
        //            failure: function (response) {
        //                removeSpinner($('#ajax-container'), function () {
        //                    $('#ajax-container').html('Content loaded.');
        //                });
        //                alert(response.responseText);
        //            },
        //            error: function (response) {
        //                removeSpinner($('#ajax-container'), function () {
        //                    $('#ajax-container').html('Content loaded.');
        //                });
        //                alert(response.responseText);
        //            }
        //        });

        //    }
        //    else {
        //        //submit data without gst details
        //        //UpdateClientDetails();
        //    }
        //}
        //else {
        //    //alert('is NOT checked!');
        //    //submit data with gst details
        //    var ddlcount = 0;
        //    var amountcount = 0, checkcount = 0;
        //    $("#UpClientGstTable tbody tr").each(function () {

        //        var currentRow = $(this);
        //        var col2_value = currentRow.find("td").eq(1).find("select option:selected").val();
        //        var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
        //        // var col3_value = currentRow.find("td").find("input[type='checkbox']");
        //        var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
        //        var check = currentRow.find('input[type="checkbox"]').is(':checked');
        //        if (col2_value == 0) {
        //            ddlcount = ddlcount + 1;
        //        }
        //        if (col1_value == "" || col1_value == "0") {
        //            amountcount = amountcount + 1;
        //        }
        //        if (check == false) {
        //            checkcount = checkcount + 1;
        //        }
        //    });

        //    if (ddlcount > 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Select State Name</p>";
        //        isValid = false;
        //    }
        //    if (amountcount > 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Enter GSTNo</p>";
        //        isValid = false;
        //    }
        //    if (checkcount > 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Select Check</p>";
        //        isValid = false;
        //    }

        //    if (!isValid) {

        //        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        //        $("#divUpClientInfoMsg").text("");
        //        $("#divUpClientInfoMsg").append(finalerror1 + errorMsg + "</div>");
        //        $("#divUpClientInfoMsg").addClass("alert-danger");
        //        $("#divUpClientInfoMsg").removeClass("hidden alert-success");
        //        return false;
        //    }
        //    else {
                $("#divUpClientInfoMsg").text("");
                $("#divUpClientInfoMsg").addClass("hidden");
                //update client data

                //var gstdeals = null;
                //var gstApplicatble = '0';
                //var rows = [];

                //if ($('#chkUpGSTN').is(":checked")) { gstApplicatble = '0'; }
                //if ($('#chkUpGSTY').is(":checked")) {
                //    gstApplicatble = '1';
                //    var totalRowCount = $("#UpClientGstTable tbody tr").length;

                //    var GstStatids = "", GstNos = "";
                //    $("#UpClientGstTable tbody tr").each(function () {
                //        var currentRow = $(this);

                //        var state = currentRow.find("td").eq(1).find("select option:selected").val();//statetd
                //        // var state = currentRow.find("td").eq(1).find(".statetd option:selected").val();
                //        var gstno = currentRow.find("td").eq(2).find("input[type='text']").val();
                //        GstStatids += state + ",";
                //        GstNos += gstno + ",";
                //    });

                //}
                //var updateClient = {
                //    ClientID: $("#txtUpclientid").val(),
                //    Client_Code: $("#txtUpClientcode").val(),
                //    Client_Name: $("#txtUpClient").val(),
                //    TINNo: $("#txtUpTINNo").val(),
                //    PANNo: $("#txtUpPANNo").val(),
                //    TANNo: $("#txtUpTANNo").val(),
                //    Contact_Person_Name: $("#txtUpContactPersonName").val(),
                //    Person_PhoneNo: $("#txtUpPersonPhoneNo").val(),
                //    Address: $("#txtUpAddress").val(),
                //    GST_Applicable: gstApplicatble,
                //    Action: 2,
                //    GSTStatesList: GstStatids,
                //    GSTNoList: GstNos,
                //    Createdby: $("#txtAppClientCreatedby").val(),
                //    DelGSTStatesList: $("#txtdelgstid").val(),
                //    CheckUpdationType: 'ReturnUpdate'
                //};

                var updateClient = {
                    ClientID: $("#txtUpclientid").val(),
                    Client_Code: $("#txtUpClientcode").val(),
                    Client_Name: $("#txtUpClient").val(),
                    TINNo: $("#txtUpTINNo").val(),
                    PANNo: $("#txtUpPANNo").val(),
                    TANNo: $("#txtUpTANNo").val(),
                    Contact_Person_Name: $("#txtUpContactPersonName").val(),
                    Person_PhoneNo: $("#txtUpPersonPhoneNo").val(),
                    Address: $("#txtUpAddress").val(),           
                    Action: 2,          
                    Createdby: $("#txtAppClientCreatedby").val(),
                    DelGSTStatesList: $("#txtdelgstid").val(),
                    CheckUpdationType: 'ReturnUpdate'
        };      
               
                addFailMsg = "Error Occurred While Updating ClientDatials.";
                addSuccessMsg = "Client Details Updated Successfully.";
                //alert('submit');
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Home/UpdateClientDetails',
                    data: { addClient: updateClient },
                   
                    success: function (Data) {
                        if (Data.saveStatus == 'Updated') {
                            $('#ApproveClientMsgModal').modal('show');
                            var msg = "<div>Client Updated Successfully</div>";
                            $("#AppClientMsg").html(msg);
                        }
                        else {
                            var msg1 = "<div>" + Data.saveStatus + "</div>";
                            $("#AppClientMsg").html(msg1);
                            $('#ApproveClientMsgModal').modal('show');
                        }
                    },
                    failure: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppClientMsg").html(msg);
                        $('#ApproveClientMsgModal').modal('show');
                    },
                    error: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppClientMsg").html(msg);
                        $('#ApproveClientMsgModal').modal('show');
                    }
                });

            }

        //}

    //}
}
function IsNumeric(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
    if ((iKeyCode < 48 || iKeyCode > 57))
        return false;
}
function ApproveSubClient(sclientcode, ClientCode, Subclientstatus) {

    var appstatus = $("#AppSubClientstatus option:selected").text();
    retnote = $("#AppSubClientNote").val();
    msg = $("#divApprSubclientInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyclient = {
            SubClientCode: sclientcode,
            ClientCode: ClientCode,
            Verificationtype: appstatus,
            ApprovalNote: retnote,
            RoleId: $("#roleid").val(),
            Createdby: $("#txtAppSClientCreatedby").val(),
            SubClientStatus: Subclientstatus
        };
        addFailMsg = "Error Occurred";
       // addSuccessMsg = "Sub Client Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveSubClient",
            data: JSON.stringify({ apprSubclient: verifyclient }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApprovesClientMsgModal').modal('show');
                    var msg = "<div>Sub Client " + finalmsg+"</div>";
                    $("#AppsClientMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppsClientMsg").html(msg1);
                    $('#ApprovesClientMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppsClientMsg").html(msg);
                $('#ApprovesClientMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppsClientMsg").html(msg);
                $('#ApprovesClientMsgModal').modal('show');
            }
        });
    }
}
function UpdateSubClient(Subclientcode, clientcode) {
    isValid = true;
    var errorMsg = "";
    var Branch = $("#txtUpSCBranch").val();
    var PersonName = $("#txtUpSCPersonName").val();
    var PhoneNo = $("#txtUpSCPhoneNo").val();
    var SCTin = $("#txtUpSCTINNo").val();
    var SCPan = $("#txtUpSCPANNo").val();
    var SCTan = $("#txtUpSCTANNo").val();
    var address = $("#txtUpSCAddress").val();
    if (Branch == null || Branch == "") {

        errorMsg += "<p style='margin-top:-5px!important;'>Enter Branch</p>";
        isValid = false;
    }
    if (PersonName == null || PersonName == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Person Name</p>";
        isValid = false;
    }
    if (PhoneNo == null || PhoneNo == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Person Phone No</p>";
        isValid = false;
    }
    else if (PhoneNo.length != 10) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter 10 digit Phone No</p>";
        isValid = false;
    }
    if (SCTin == null || SCTin == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter TIN No</p>";
        isValid = false;
    }
    if (SCPan == null || SCPan == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter PAN No</p>";
        isValid = false;
    }
    if (SCTan == null || SCTan == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tin No</p>";
        isValid = false;
    }
    if (address == null || address == "") {

        errorMsg += "<p style='margin-top:-5px!important;'>Enter Address</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSubClientInfoMsg").text("");
        $("#divUpSubClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpSubClientInfoMsg").addClass("alert-danger");
        $("#divUpSubClientInfoMsg").removeClass("hidden alert-success");
    }
    else {        
        if ($('#chkUpSCGSTN').is(":checked")) {
            var gst = confirm('Apply GST');
            if (gst == true) {
                //show gst grid
                $("#chkUpSCGSTY").prop("checked", true);
                $("#chkUpSCGSTN").prop("checked", false);
                $("#divUpSCClientGst").removeClass('hidden');
                $.ajax({
                    type: "POST",
                    url: "/Home/GetAllStates",
                    data: '{}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var rowno = 1;
                        var newRow = $("<tr>");
                        var cols = "";
                        cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
                        cols += '<td><select class="form-control dropdown-toggle" "><option value="">-Please Select-</option>';
                        $.each(response, function () {
                            cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                        });
                        cols += '</select>';
                        cols += '</td><td style="text-align:center"><input class="form-control" data-val="true"  name="txtGSTNo" type="text" /></td >';
                        cols += '<td style="text-align:center"><ul class="list-inline">';
                        cols += '<li class="eagle-checkbox">';
                        cols += '<label class="eagle-check custom-checkbox">';
                        cols += '<input type="checkbox" class="eagle-check-input" id="chkGstCheck">';
                        cols += '<span class="eagle-check-indicator"></span>  </label>';
                        cols += '</li>';
                        cols += '</ul ></td>';
                        cols += '<td style="text-align:center"><input type="button" class="ibtnUpSClientDel btn btn-md btn-danger" value="Delete"></td>';
                        newRow.append(cols);
                        $("table.order-list.UpSClientGstGrid").append(newRow)
                    },
                    failure: function (response) {
                    },
                    error: function (response) {
                    }
                });

            }
        else {
             UpdateRetrunSubClient(Subclientcode, clientcode);
            $("#divUpSubClientInfoMsg").text("");
            $("#divUpSubClientInfoMsg").addClass("hidden");
        }          
            //submit data with gst details
        }
        else {
            var ddlcount = 0;
            var amountcount = 0;
            var checkcount = 0;
            var list = [];
            $("#UpSClientGstTable tbody tr").each(function () {              
                var currentRow = $(this);
                var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
                var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
                var col3_value = currentRow.find("td").eq(1).find("select option:selected").val();
                var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
                var check = currentRow.find('input[type="checkbox"]').is(':checked');
                if (col3_value === "") {
                    ddlcount = ddlcount + 1;
                }
                else {
                    list.push(stateName);
                }

                if (col1_value == "" || col1_value == "0") {
                    amountcount = amountcount + 1;
                }
                if (check === false) {
                    checkcount = checkcount + 1;                  
                }
               
            });

            if (ddlcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select State Name</p>";
                isValid = false;
            }
            if (amountcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter GSTNo</p>";
                isValid = false;
            }
            if (checkcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Verify GST</p>";
                isValid = false;
            }           
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
                $("#divUpSubClientInfoMsg").text("");
                $("#divUpSubClientInfoMsg").append(finalerror1 + errorMsg + "</div>");
                $("#divUpSubClientInfoMsg").addClass("alert-danger");
                $("#divUpSubClientInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divUpSubClientInfoMsg").text("");
                $("#divUpSubClientInfoMsg").addClass("hidden");

                var duplicatelist = list.filter(i => list.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    var finalerror2 = "<div style='align:center'><p>Only One GST for One State</p>";
                    $("#divUpSubClientInfoMsg").text("");
                    $("#divUpSubClientInfoMsg").append(finalerror2 + "</div>");
                    $("#divUpSubClientInfoMsg").addClass("alert-danger");
                    $("#divUpSubClientInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
                else {
                    UpdateRetrunSubClient(Subclientcode, clientcode);
                    $("#divUpSubClientInfoMsg").text("");
                    $("#divUpSubClientInfoMsg").addClass("hidden");
                }
            }
            //submit data without gst details

        }
    }
}

function UpdateRetrunSubClient(Subclientcode, clientcode) {
    var gstdeals = null;
    var gstApplicatble = 0;
    var rows = [];
    var GstStatids = "", GstNos = "";
    if ($('#chkUpSCGSTN').is(":checked")) { gstApplicatble = 0; }
    if ($('#chkUpSCGSTY').is(":checked")) {
        gstApplicatble = 1;
        var totalRowCount = $("#ClientGstTable tbody tr").length;
        $("#UpSClientGstTable tbody tr").each(function () {
            var currentRow = $(this);          
            var state = currentRow.find("td").eq(1).find("select option:selected").val();
            var gstno = currentRow.find("td").eq(2).find("input[type='text']").val();
            GstStatids += state + ",";
            GstNos += gstno + ",";

        });
    }
        var subclient = {
            ClientCode: clientcode,
            SubClientCode: Subclientcode,
            Branch: $("#txtUpSCBranch").val(),
            SC_Person_Name: $("#txtUpSCPersonName").val(),
            SC_Phone_No: $("#txtUpSCPhoneNo").val(),
            SC_TINNo: $("#txtUpSCTINNo").val(),
            SC_PANNo: $("#txtUpSCPANNo").val(),
            SC_TANNo: $("#txtUpSCTANNo").val(),
            Address: $("#txtUpSCAddress").val(),
            Action: 2,
            RoleId: $("#txtupdatesubclientRoleId").val(),
            Createdby: $("#txtAppSClientCreatedby").val(),
            CheckUpdationType: 'ReturnUpdate',
            GST_Applicable: gstApplicatble,
            GSTStatesList: GstStatids,
            GSTNoList: GstNos

    };
  
        addFailMsg = "Error Occurred While Updating  Sub Client";
        addSuccessMsg = "Sub Client Details Updated Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/UpdateSubClientDetails',
            data: { addSubClient: subclient },
            success: function (Data) {
                if (Data.saveStatus === 'Updated') {
                    $('#ApprovesClientMsgModal').modal('show');
                    var msg = "<div>Sub Client Updated Successfully</div>";
                    $("#AppsClientMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + Data.saveStatus + "</div>";
                    $("#AppsClientMsg").html(msg1);
                    $('#ApprovesClientMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppsClientMsg").html(msg);
                $('#ApprovesClientMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppsClientMsg").html(msg);
                $('#ApprovesClientMsgModal').modal('show');
            }
        });

    }
    
function ApproveClientPO(ponumber, CCCode) {
    var appstatus = $("#AppClientPostatus option:selected").text();
    retnote = $("#AppClientPoNote").val();
    msg = $("#divApprclientPoInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyclientPo = {
            pono: ponumber,
            CostCenter: CCCode,
            Action: appstatus,
            ApprovalNote: retnote,
            Createdby: $("#txtAppClientPoCreatedby").val(),
            RoleId: $("#roleid").val()
        };
        addFailMsg = "Error Occurred";
        //addSuccessMsg = "Sub Client Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveClientPO",
            data: JSON.stringify({ apprClientPO: verifyclientPo }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApproveClientPoMsgModal').modal('show');
                    var msg = "<div>Purchase Order " + finalmsg+"</div>";
                    $("#AppClientPoMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppClientPoMsg").html(msg1);
                    $('#ApproveClientPoMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientPoMsg").html(msg);
                $('#ApproveClientPoMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientPoMsg").html(msg);
                $('#ApproveClientPoMsgModal').modal('show');
            }
        });
    }

}
function UpdatePOData(PONo, CCCode) {

    var CC = CCCode;
    var startDate = $("#txtpostartdate").val();
    var endDate = $("#txtpocompletiondate").val();
    var PoValue = $("#txtpovalue").val();
    var GST = $("#txtgst").val();
    var total = $("#txttotal").val();
    var mobAdvance = $("#ddlmobadv option:selected").index();
    var RaBill = $("#txtrabill").val();
    var DuesOfRa = $("#txtrabilldues").val();
    var AdvSettle = $("#txtadvsettelment").val();

    var errorMsg = "";
    isValid = true;
    if (startDate == "" || startDate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Start Date</p>";
        isValid = false;
    }
    if (endDate == "" || endDate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter End Date</p>";
        isValid = false;
    }
    if (PoValue == "" || PoValue == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter PO Value</p>";
        isValid = false;
    }

    if (GST == "" || GST == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter GST Value</p>";
        isValid = false;
    }
    if (total == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Total Value Can not be Zero</p>";
        isValid = false;
    }
    if (mobAdvance == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mobilisation Advance </p>";
        isValid = false;
    }
    if (RaBill == "" || RaBill == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter RABill Value</p>";
        isValid = false;
    }
    if (DuesOfRa == "" || DuesOfRa == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter RABill Dues</p>";
        isValid = false;
    }
    if (mobAdvance == 1) {
        if (AdvSettle == "" || AdvSettle == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Advance Settelment</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divpoInfoMsg").text("");
        $("#divpoInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divpoInfoMsg").addClass("alert-danger");
        $("#divpoInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divpoInfoMsg").text("");
        $("#divpoInfoMsg").addClass("hidden");
       
        var mobilize = $("#ddlmobadv option:selected").index();
        var madv;
        if (mobilize == 1) {
            madv = true;
        }
        else if (mobilize == 2) {
            madv = false;
        }

        var newPO = {
            pono: PONo,
            postartdate: $("#txtpostartdate").val(),
            pocompletiondate: $("#txtpocompletiondate").val(),
            total: $("#txttotal").val(),
            povalue: $("#txtpovalue").val(),
            gst: $("#txtgst").val(),
            clientid: $("#txtpoclient").val(),
            subclientid: $("#txtposubclient").val(),
            Madvance: madv,
            rabill: $("#txtrabill").val(),
            rabilldues: $("#txtrabilldues").val(),
            advancesettelment: $("#txtadvsettelment").val(),
            CostCenter: CCCode,
            Createdby: $("#txtAppClientPoCreatedby").val(),
            RoleId: $("#roleid").val(),
            Action: 'Update'
        };
        addFailMsg = "Error Occurred While Adding Amend PO.";
        addSuccessMsg = "Amend PO Details Updated Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/AccountsApproval/UpdateClientPO',
            data: { clientPo: newPO },
            success: function (Data) {
                if (Data.saveStatus == true) {
                    $('#ApproveClientPoMsgModal').modal('show');
                    var msg = "<div>Purchase Order Updated Successfully</div>";
                    $("#AppClientPoMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppClientPoMsg").html(msg1);
                    $('#ApproveClientPoMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientPoMsg").html(msg);
                $('#ApproveClientPoMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientPoMsg").html(msg);
                $('#ApproveClientPoMsgModal').modal('show');
            }
        });

    }

}
function ValidateAmount(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode == 46) {
        if (txt.value.indexOf(".") < 0)
            return true;
        else
            return false;
    }
    if (txt.value.indexOf(".") > 0) {
        var txtlen = txt.value.length;
        var dotpos = txt.value.indexOf(".");
        if ((txtlen - dotpos) > 2)
            return false;
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function ApproveAmendPO(apono, oldpono) {
    var appstatus = $("#AppAmendPostatus option:selected").text();
    retnote = $("#AppAmendPoNote").val();
    msg = $("#divApprAmendPoInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyAmendPo = {
            oldPONO: oldpono,
            Amendpono: apono,
            Action: appstatus,
            ApprovalNote: retnote,
            Roleid: $("#roleid").val(),
            Createdby: $("#txtAppAmendPoCreatedby").val()
        };
        addFailMsg = "Error Occurred";
       // addSuccessMsg = "Amend PO Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveClientPOAmend",
            data: JSON.stringify({ apprAmendPO: verifyAmendPo }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApproveAmendPoMsgModal').modal('show');
                    var msg = "<div>Purchase Order Amendment" + finalmsg+"</div>";
                    $("#AppAmendPoMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppAmendPoMsg").html(msg1);
                    $('#ApproveAmendPoMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppAmendPoMsg").html(msg);
                $('#ApproveAmendPoMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppAmendPoMsg").html(msg);
                $('#ApproveAmendPoMsgModal').modal('show');
            }
        });
    }
}
function UpdateClientPOAmend(oldpono, amendpono, CCCode) {
   
    var Date = $("#txtamendpocompletiondate").val();
    var amendpovalue = $("#txtamendpovalue").val();
    var gstvalue = $("#txtamendgst").val();
    var totalamendvalue = $("#txttotalamendvalue").val();
    var errorMsg = "";
    isValid = true;
    if (Date == "" || Date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Completion Date</p>";
        isValid = false;
    }
    if (amendpovalue == "" || amendpovalue == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amend PO Value</p>";
        isValid = false;
    }

    if (gstvalue == "" || gstvalue == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter GST Value</p>";
        isValid = false;
    }
    if (totalamendvalue == 0 || totalamendvalue == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Total Amend Value</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divamendpoInfoMsg").text("");
        $("#divamendpoInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divamendpoInfoMsg").addClass("alert-danger");
        $("#divamendpoInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divamendpoInfoMsg").text("");
        $("#divamendpoInfoMsg").addClass("hidden");
        var addAmendPO = {
            oldPONO: oldpono,
            amendpocompletiondate: $("#txtamendpocompletiondate").val(),
            Amendpono: amendpono,
            Amendpovalue: $("#txtamendpovalue").val(),
            Amendtotalvalue: $("#txttotalamendvalue").val(),
            Amendegst: $("#txtamendgst").val(),
            Action: 'Update',
            Roleid: $("#roleid").val(),
            Createdby: $("#txtAppAmendPoCreatedby").val()

        };
        addFailMsg = "Error Occurred While Adding Amend PO.";
        addSuccessMsg = "Amend PO Details Added Successfully.";
        //alert('submit');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/AccountsApproval/UpdateAmendPO',
            data: { clientPo: addAmendPO },
            success: function (Data) {
                if (Data.saveStatus == true) {
                    $('#ApproveAmendPoMsgModal').modal('show');
                    var msg = "<div>Purchase Order Amendment Verified Successfully</div>";
                    $("#AppAmendPoMsg").html(msg);
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppAmendPoMsg").html(msg);
                $('#ApproveAmendPoMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppAmendPoMsg").html(msg);
                $('#ApproveAmendPoMsgModal').modal('show');
            }
        });
    }

}
function CalculateamentTotal() {
    Amendtotal = 0;
    RevisePOVal = 0;
    // var PresentPoValue = $("#txtpresentpovalue").val();
    var AmendPoValue = $("#txtamendpovalue").val();
    //var Amendexciseduty = $("#txtamendexcisevalue").val();
    var AmendGST = $("#txtamendgst").val();
    //if (PresentPoValue == "" && PresentPoValue == 0) {
    //    PresentPoValue = 0;
    //}
    if (AmendPoValue == "" && AmendPoValue == 0) {
        AmendPoValue = 0;
    }
    //if (Amendexciseduty == "" && Amendexciseduty == 0) {
    //    Amendexciseduty = 0;
    //}
    if (AmendGST == "" && AmendGST == 0) {
        AmendGST = 0;
    }
    Amendtotal = eval((parseFloat(AmendPoValue) + parseFloat(AmendGST)));
    $("#txttotalamendvalue").val(Amendtotal);
    //RevisePOVal = eval((parseFloat(PresentPoValue) + parseFloat(AmendPoValue) + parseFloat(Amendexciseduty) + parseFloat(AmendGST)));
    //$("#txtrevisedpovalue").val(RevisePOVal);
}
function ApproveBankAccount(id, accno, bankstatus) {
    // alert(id+"---"+accno);
    var appstatus = $("#AppBankAccstatus option:selected").text();
    retnote = $("#AppBankNote").val();
    msg = $("#divApprBankInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyAccno = {
            Bankid: id,
            Accountno: accno,
            Action: appstatus,
            ApprovalNote: retnote,
            BankStatus: bankstatus,
            Createdby: $("#txtApprBankCreatedby").val(),
            RoleId: $("#roleid").val()
        };
        addFailMsg = "Error Occurred";
        addSuccessMsg = "Bank Account Verified Successfully.";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveBankAccounts",
            data: JSON.stringify({ apprBankAcc: verifyAccno }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApproveBankMsgModal').modal('show');
                    var msg = "<div>Bank Account " + finalmsg +"</div>";
                    $("#ApprBankMsg").html(msg);
                    //$("#divApprBankGrid").load('/AccountsApproval/VerifyBankAccountsGrid');
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprBankMsg").html(msg1);
                    $('#ApproveBankMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankMsg").html(msg);
                $('#ApproveBankMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankMsg").html(msg);
                $('#ApproveBankMsgModal').modal('show');
            }
        });
    }
}
function UpdateReturnedBankAccount(id, accno) {

    var Loc = $("#UpBankLoc").val();
    var role = $("#txtUpRole").val();
    var minbal = $("#UpBankMinBal").val();
    var msg = $("#divUpBankInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (Loc == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Location</p>";
        isValid = false;
    }
        if (minbal == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Minimum Bal</p>";
            isValid = false;
        }

   
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var Accnodetails = {
            Bankid: id,
            Banklocation: Loc,
            Status: '1',
            MinimumBalance: minbal,
            Createdby: $("#txtApprBankCreatedby").val(),
            RoleId: $("#roleid").val(),
            Role: role
        };
        addFailMsg = "Error Occurred While Updating Bank Account ";
        addSuccessMsg = "Bank Account Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateReturnedbankAcc",
            data: JSON.stringify({ updateBank: Accnodetails }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == 'Submitted') {
                    $('#ApproveBankMsgModal').modal('show');
                    var msg = "<div>Bank Account  Updated Successfully</div>";
                    $("#ApprBankMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprBankMsg").html(msg1);
                    $('#ApproveBankMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankMsg").html(msg);
                $('#ApproveBankMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankMsg").html(msg);
                $('#ApproveBankMsgModal').modal('show');
            }
        });
    }
}
function ApproveGst(taxid1) {

    var appstatus = $("#AppGststatus option:selected").text();
    retnote = $("#AppGstNote").val();
    msg = $("#divApprgstInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyGst = {
            TaxId: taxid1,
            Action: appstatus,
            RoleId: $("#roleid").val(),
            ApprovalNote: retnote,
            CreatedBy: $("#txtApprGentaxCreatedby").val()
        };
        addFailMsg = "Error Occurred";
        //addSuccessMsg = "Gst Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveTaxGST",
            data: JSON.stringify({ apprGst: verifyGst }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    $('#ApproveGentaxMsgModal').modal('show');
                    var msg = "<div>Gst  " + finalmsg+"</div>";
                    $("#ApprGentaxMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprGentaxMsg").html(msg1);
                    $('#ApproveGentaxMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            }
        });
    }
}
function UpdateApprGstTaxes(Taxid) {

    isValid = true;
    var errorMsg = "";
    var taxname = $("#txtUpgsTaxName").val();
    var remarks = $("#txtUpgsTaxRemarks").val();
    if (taxname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Name</p>";
        isValid = false;
    }
    if (remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpGstTaxInfoMsg").text("");
        $("#divUpGstTaxInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpGstTaxInfoMsg").addClass("alert-danger");
        $("#divUpGstTaxInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpGstTaxInfoMsg").text("");
        $("#divUpGenTaxInfoMsg").addClass("hidden");

        var updateGstTax = {
            TaxName: $("#txtUpgsTaxName").val(),
            TaxNo: $("#txtUpgstaxTaxNo").val(),
            TaxType: 'GST',
            TaxFor: $("#txtUpgstaxTaxDca").val(),            
            Remarks: $("#txtUpgsTaxRemarks").val(),
            CreatedBy: $("#txtApprGentaxCreatedby").val(),
            Action: 'Update',
            TaxId: Taxid,
            DcaId: 0,
            RoleId: $("#roleid").val(),
            ApplicableFrom: $("#txtUpgstaxTaxAppFrm").val(),
        };

        //var updateGstTax = {
        //    TaxName: $("#txtUpgsTaxName").val(),
        //    TaxNo: $("#txtUpgstaxTaxNo").val(),
        //    TaxType: 'GST',
        //    TaxFor: $("#txtUpgstaxTaxDca").val(),
        //    SubDCA: $("#txtUpgsTaxsdca").val(),
        //    Remarks: $("#txtUpgsTaxRemarks").val(),
        //    CreatedBy: $("#txtApprGentaxCreatedby").val(),
        //    Action: 'Update',
        //    TaxId: Taxid,
        //    DcaId: 0,
        //    RoleId: $("#roleid").val(),
        //    ApplicableFrom: $("#txtUpgstaxTaxAppFrm").val(),
        //};
        addFailMsg = "Error Occurred While Editing GST";
        addSuccessMsg = "GST Detials Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/Accounts/UpdateGstTax",
            data: JSON.stringify({ createTax: updateGstTax }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $('#ApproveGentaxMsgModal').modal('show');
                    var msg = "<div>Gst Updated Successfully</div>";
                    $("#ApprGentaxMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprGentaxMsg").html(msg1);
                    $('#ApproveGentaxMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            }
        });
    }
}
function ApproveGeneralTax(taxid1) {
    var appstatus = $("#AppGentaxstatus option:selected").text();
    retnote = $("#AppGentaxNote").val();
    msg = $("#divApprgentaxInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyGentax = {
            TaxId: taxid1,
            RoleId: $("#roleid").val(),
            Action: appstatus,
            ApprovalNote: retnote,
            CreatedBy: $("#txtApprGentaxCreatedby").val()
        };
        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        //addSuccessMsg = "General Tax Verified Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveTaxGeneral",
            data: JSON.stringify({ apprGeneraltax: verifyGentax }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                if (response.saveStatus == "Submited") {
                    $('#ApproveGentaxMsgModal').modal('show');
                    var msg = "<div>Tax " + finalmsg+"</div>";
                    $("#ApprGentaxMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprGentaxMsg").html(msg1);
                    $('#ApproveGentaxMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            }
        });
    }
}
function UpdateApprGeneralTaxes(TaxId) {

    isValid = true;
    var errorMsg = "";
    var taxname = $("#txtUpgtaxTaxName").val();
    var remarks = $("#txtUpgtaxTaxRemarks").val();
    if (taxname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Name</p>";
        isValid = false;
    }
    if (remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpGenTaxInfoMsg").text("");
        $("#divUpGenTaxInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpGenTaxInfoMsg").addClass("alert-danger");
        $("#divUpGenTaxInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpGenTaxInfoMsg").text("");
        $("#divUpGenTaxInfoMsg").addClass("hidden");

        var updateNewGenTax = {
            TaxName: $("#txtUpgtaxTaxName").val(),
            TaxNo: $("#txtUpgtaxTaxNo").val(),
            TaxType: 'General',
            TaxFor: $("#txtUpgtaxTaxDca").val(),
            SubDCA: $("#txtUpgtaxTaxsdca").val(),
            Remarks: $("#txtUpgtaxTaxRemarks").val(),
            CreatedBy: $("#txtApprGentaxCreatedby").val(),
            Action: 'Update',
            TaxId: TaxId,
            DcaId: 0,
            RoleId: $("#roleid").val(),
            ApplicableFrom: $("#txtUpgtaxTaxAppFrm").val(),
        };
        addFailMsg = "Error Occurred While Editing Tax";
        addSuccessMsg = "Tax Detials Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/Accounts/UpdateGeneralTax",
            data: JSON.stringify({ createTax: updateNewGenTax }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $('#ApproveGentaxMsgModal').modal('show');
                    var msg = "<div>Tax Updated Successfully</div>";
                    $("#ApprGentaxMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + addFailMsg + "</div>";
                    $("#ApprGentaxMsg").html(msg1);
                    $('#ApproveGentaxMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGentaxMsg").html(msg);
                $('#ApproveGentaxMsgModal').modal('show');
            }
        });
    }

}
function ApproveMasterGroup(mgroupid) {

    groupname = $("#Apprmgroupname").val();
    var appstatus = $("#ApprMGstatus option:selected").text();
    retnote = $("#ApprMGNote").val();
    msg = $("#divApprMGInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var verifyMgroup = {
            GroupId: mgroupid,
            GroupName: groupname,
            Action: appstatus,
            RoleId: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtApprMGCreatedby").val()
        };
        addFailMsg = "Error Occurred";
       // addSuccessMsg = "Master Group  Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update'; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveMasterGroup",
            data: JSON.stringify({ apprMastergroup: verifyMgroup }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Submitted") {
                    $('#ApproveMGMsgModal').modal('show');
                    var msg = "<div>Master Group "+finalmsg+"</div>";
                    $("#ApprMGMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprMGMsg").html(msg1);
                    $('#ApproveMGMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprMGMsg").html(msg);
                $('#ApproveMGMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprMGMsg").html(msg);
                $('#ApproveMGMsgModal').modal('show');
            }
        });
    }

}
function UpdateApprMasterGroup(Groupid, Id) {

    isValid = true;
    var errorMsg = "";
    var gname = $("#txtUpMasterGpName").val();
    if (gname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Group Name</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpdateMasterGroupInfoMsg").text("");
        $("#divUpdateMasterGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpdateMasterGroupInfoMsg").addClass("alert-danger");
        $("#divUpdateMasterGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpdateMasterGroupInfoMsg").text("");
        $("#divUpdateMasterGroupInfoMsg").addClass("hidden");
        var mGroup = {

            GroupNameList: gname,
            Createdby: $("#txtApprMGCreatedby").val(),
            Action: "Update",
            RoleId: $("#roleid").val(),
            GroupIdList: Groupid

        };

        addFailMsg = "Error Occurred While Updating Master Group";
        addSuccessMsg = "Master Group Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/Ledger/UpdateMasterGroup",
            data: JSON.stringify({ masterGroup: mGroup }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $('#ApproveMGMsgModal').modal('show');
                    var msg = "<div>Master Group Updated Successfully</div>";
                    $("#ApprMGMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprMGMsg").html(msg1);
                    $('#ApproveMGMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprMGMsg").html(msg);
                $('#ApproveMGMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprMGMsg").html(msg);
                $('#ApproveMGMsgModal').modal('show');
            }
        });
    }

}
function ApproveSubGroup(subgroupid) {
    subgroupname = $("#Apprsgroupname").val();
    var appstatus = $("#ApprSGstatus option:selected").text();
    retnote = $("#ApprSGNote").val();
    msg = $("#divApprSGInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var verifySubgroup = {
            Id: subgroupid,
            Name: subgroupname,
            Action: appstatus,
            RoleId: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtApprSGCreatedby").val(),
            Grouptype: 'Sub'
        };
        addFailMsg = "Error Occurred";
        //addSuccessMsg = "Sub Group  Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveSubGroup",
            data: JSON.stringify({ apprsubgroup: verifySubgroup }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                if (response.saveStatus == "Submitted") {
                    $('#ApproveSGMsgModal').modal('show');
                    var msg = "<div>Sub Group " + finalmsg+"</div>";
                    $("#ApprSGMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprSGMsg").html(msg1);
                    $('#ApproveSGMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprSGMsg").html(msg);
                $('#ApproveSGMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprSGMsg").html(msg);
                $('#ApproveSGMsgModal').modal('show');
            }
        });
    }
}
function UpdateApprSubGroup(subgroupid) {
    //alert(subgroupid);
    isValid = true;
    var errorMsg = "";
    var gname = $("#txtUpSubGpName").val();
    if (gname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Sub Group Name</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpdateSubGroupInfoMsg").text("");
        $("#divUpdateSubGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpdateSubGroupInfoMsg").addClass("alert-danger");
        $("#divUpdateSubGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpdateSubGroupInfoMsg").text("");
        $("#divUpdateSubGroupInfoMsg").addClass("hidden");

        var savesgrp = {
            SubGroupNameList: gname,
            MasterGroupId: 0,
            Createdby: $("#txtApprSGCreatedby").val(),
            Id: subgroupid,
            RoleId: $("#roleid").val(),
            Action: 'Update'
        };
        addFailMsg = "Error Occurred While Updating SubGroup";
        addSuccessMsg = "Sub Group Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/Ledger/UpdateSubGroup",
            data: JSON.stringify({ subGroup: savesgrp }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $('#ApproveSGMsgModal').modal('show');
                    var msg = "<div>Sub Group Updated Successfully</div>";
                    $("#ApprSGMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprSGMsg").html(msg1);
                    $('#ApproveSGMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprSGMsg").html(msg);
                $('#ApproveSGMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprSGMsg").html(msg);
                $('#ApproveSGMsgModal').modal('show');
            }
        });
    }

}
function ApproveChildGroup(subgroupid) {

    childgroupname = $("#Apprcgroupname").val();
    var appstatus = $("#ApprCGstatus option:selected").text();
    retnote = $("#ApprCGNote").val();
    msg = $("#divApprCGInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyChildgroup = {
            Id: subgroupid,
            Name: childgroupname,
            Action: appstatus,
            RoleId: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtApprCGCreatedby").val(),
            Grouptype:'Child'
        };
        addFailMsg = "Error Occurred While Sub Group Verification";
        //addSuccessMsg = "Child Group  Verified Successfully.";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveSubGroup",
            data: JSON.stringify({ apprsubgroup: verifyChildgroup }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                if (response.saveStatus == "Submitted") {
                    $('#ApproveCGMsgModal').modal('show');
                    var msg = "<div>Child Group " + finalmsg+"</div>";
                    $("#ApprCGMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprCGMsg").html(msg1);
                    $('#ApproveCGMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprCGMsg").html(msg);
                $('#ApproveCGMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprCGMsg").html(msg);
                $('#ApproveCGMsgModal').modal('show');
            }
        });
    }

}
function UpdateChildGroup(Childgroupid) {

   // alert(Childgroupid);
    isValid = true;
    var errorMsg = "";
    var gname = $("#txtUpChildGpName").val();
    if (gname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Child Group Name</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpdateChildGroupInfoMsg").text("");
        $("#divUpdateChildGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpdateChildGroupInfoMsg").addClass("alert-danger");
        $("#divUpdateChildGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpdateChildGroupInfoMsg").text("");
        $("#divUpdateChildGroupInfoMsg").addClass("hidden");
     
        var savecgrp = {
            ChildGroupNameList: gname,
            ChildGroupid: Childgroupid,
            Createdby: $("#txtApprCGCreatedby").val(),
            RoleId: $("#roleid").val(),
            Action: 'Update'
        };
        addFailMsg = "Error Occurred While Updating ChildGroup";
        addSuccessMsg = "Child Group Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/Ledger/UpdateChildGroup",
            data: JSON.stringify({ subGroup: savecgrp }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $('#ApproveCGMsgModal').modal('show');
                    var msg = "<div>Child Group Updated Successfully</div>";
                    $("#ApprCGMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#ApprCGMsg").html(msg1);
                    $('#ApproveCGMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprCGMsg").html(msg);
                $('#ApproveCGMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprCGMsg").html(msg);
                $('#ApproveCGMsgModal').modal('show');
            }

        });
    }
}

function ApproveLedger(Ledgid) {

    ledgername = $("#Apprledgername").val();
    var appstatus = $("#ApprLedgerstatus option:selected").text();
    retnote = $("#ApprLedgerNote").val();
    msg = $("#divApprLedgerInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyLedger = {
            LedgerId: Ledgid,
            LedgerName: ledgername,
            Action: appstatus,
            RoleId: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtApprLedgerCreatedby").val()
        };
        addFailMsg = "Error Occurred";
       // addSuccessMsg = "Ledger  Verified Successfully.";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveLedger",
            data: JSON.stringify({ apprLedger: verifyLedger }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var typeArr = response.saveStatus.toString().split('+');
                var msg = typeArr[0];
                var msglgname = typeArr[1];
                if (msg == "Submitted") {
                    $('#ApproveLedgerMsgModal').modal('show');
                    var msg = "<div>Ledger: " + msglgname +" " +finalmsg +"</div>";
                    $("#ApprLgMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + addFailMsg + "</div>";
                    $("#ApprLgMsg").html(msg1);
                    $('#ApproveLedgerMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprLgMsg").html(msg);
                $('#ApproveLedgerMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprLgMsg").html(msg);
                $('#ApproveLedgerMsgModal').modal('show');
            }
        });
    }

}
function UpdateApprLedger(Ledgid) {
   
    var isValid = true;
    var errorMsg = "";

    var name = $("#txtUpledgName").val();
    var balance = $("#txtUpledgBal").val();
    var balancedate = $("#txtUpledgBalDate").val();

    if (name == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Ledger Name</p>";
        isValid = false;
    }
    if (balance == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Opening Balance</p>";
        isValid = false;
    }
    if (balance != "" && balance != "0") {
        if (balancedate == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Balance As on Date</p>";
            isValid = false;
        }
    }
    if ($('#chkUpCredit').is(":checked") == false && $('#chkUpDebit').is(":checked") == false) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Ledger Value Type</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpdateLedgerInfoMsg").text("");
        $("#divUpdateLedgerInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpdateLedgerInfoMsg").addClass("alert-danger");
        $("#divUpdateLedgerInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divUpdateLedgerInfoMsg").text("");
        $("#divUpdateLedgerInfoMsg").addClass("hidden");
        var ledgvaluetype;
        if ($('#chkUpCredit').is(":checked") == true) {
            ledgvaluetype = 'Credit';
        }
        else if ($('#chkUpDebit').is(":checked") == true) {
            ledgvaluetype = 'Debit';
        }
        var savenewLedger = {
            LedgerValueType: ledgvaluetype,
            LedgerName: $("#txtUpledgName").val(),
            OpeningBalance: $("#txtUpledgBal").val(),
            BalanceAsOnDate: $("#txtUpledgBalDate").val(),
            Createdby: $("#txtApprLedgerCreatedby").val(),
            LedgerId: Ledgid,
            RoleId: $("#roleid").val(),
            Action: 'Update'
        };
        addFailMsg = "Error Occurred While Editing Ledger.";
        addSuccessMsg = "Ledger Details Edited Successfully.";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Ledger/EditLedger',
            data: { ledg: savenewLedger },
            success: function (Data) {
                if (Data.saveStatus == "Submitted") {
                    $('#ApproveLedgerMsgModal').modal('show');
                    var msg = "<div>Ledger Updated Successfully</div>";
                    $("#ApprLgMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + addFailMsg + "</div>";
                    $("#ApprLgMsg").html(msg1);
                    $('#ApproveLedgerMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprLgMsg").html(msg);
                $('#ApproveLedgerMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprLgMsg").html(msg);
                $('#ApproveLedgerMsgModal').modal('show');
            }
        });
    }
}
function ApproveClientInvoice(ClientInvoiceNo) {

    //appstatusid = "AppInvstatus-" + ClientInvoiceNo;
    var appstatus = $("#AppInvstatus option:selected").text();
  //  var retnoteid = "AppInvNote-" + ClientInvoiceNo;
    retnote = $("#AppInvNote").val();
    //msgid = "divApprInvInfoMsg-" + ClientInvoiceNo;


    msg = $("#divApprInvInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyInvoice = {
            ClientInvoiceNo: ClientInvoiceNo,
            Action: appstatus,
            ApprovalNote: retnote,
            Createdby: $("#txtAppInvCreatedby").val(),
            Roleid: $("#roleid").val(),
        };
        //addFailMsg = "Error Occurred While Invoice Verification";
        //addSuccessMsg = "Invoice  Verified Successfully.";
        addFailMsg = "Error Occurred";
        // addSuccessMsg = "Ledger  Verified Successfully.";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveClientInvoice",
            data: JSON.stringify({ apprInvoice: verifyInvoice }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var typeArr = response.saveStatus.toString().split('+');
                var msg = typeArr[0];
                var msgInv = typeArr[1];
                if (msg == "Submitted") {
                    $('#ApproveInvMsgModal').modal('show');
                    msg = "<div>Invoice: " + msgInv + " " + finalmsg +"</div>";
                    $("#AppInvMsg").html(msg);
                }
                else {
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppInvMsg").html(msg);
                    $('#ApproveInvMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppInvMsg").html(msg);
                $('#ApproveInvMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppInvMsg").html(msg);
                $('#ApproveInvMsgModal').modal('show');
            }
        });
    }
}
function UpdateClientInvoiceCreation(Invno) {

    var InvoiceNo = Invno;
    var RANo = $("#txtRANo").val();
    var InsDate = $("#txtInvoiceDate").val();
    var MakingDate = $("#txtInsMakingDate").val();
    var BasicValue = $("#txtBasicValue").val();
    var Remarks = $("#txtDescription").val();
    isValid = true;
    var errorMsg = "";
    var ddlcount = 0;
    var amountcount = 0;

    if (RANo == 0 || RANo == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Running Account No</p>";
        isValid = false;
    }
    if (InsDate == 0 || InsDate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Date</p>";
        isValid = false;
    }
    if (MakingDate == "" || MakingDate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Making Date</p>";
        isValid = false;
    }
    if (BasicValue == "0.00" || BasicValue == "" || BasicValue == "0.0" || BasicValue == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Basic Value</p>";
        isValid = false;
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Making Date</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divInvoiceCreationInfoMsg").text("");
        $("#divInvoiceCreationInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
        $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divInvoiceCreationInfoMsg").text("");
        $("#divInvoiceCreationInfoMsg").addClass("hidden");
        //var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;
        //$("#ClientTaxTable tbody tr").each(function () {
        //    var currentRow = $(this);
        //    var taxtype = currentRow.find("td").eq(1).find("select option:selected").index();
        //    var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        //    var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();
        //    var taxname = currentRow.find("td").eq(4).find("select option:selected").index();
        //    var taxamount = currentRow.find("td").eq(5).find("input[type='text']").val();
        //    var check = currentRow.find("td").eq(6).find('input[type="checkbox"]').is(':checked');

        //    if (taxtype != 0 || taxdca != 0 || taxsdca != 0 || taxname != 0 || taxamount != "" && check == true) {
        //        if (taxtype == 0) { typecount = typecount + 1; }
        //        if (taxdca == 0) { dcacount = dcacount + 1; }
        //        if (taxsdca == 0) { sdcacount = sdcacount + 1; }
        //        if (taxname == 0) { taxcount = taxcount + 1; }
        //        if (taxamount == "") { taxvaluecount = taxvaluecount + 1; }
        //        if (check == false) { taxchkcount = taxchkcount + 1; }

        //    }

        //});

        //if (typecount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select IsCreditable</p>";
        //    isValid = false;
        //}
        //if (dcacount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter DCA</p>";
        //    isValid = false;
        //}
        //if (sdcacount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select SubDCA</p>";
        //    isValid = false;
        //}
        //if (taxcount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Tax Name</p>";
        //    isValid = false;
        //}
        //if (taxvaluecount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Amount</p>";
        //    isValid = false;
        //}
        //if (taxchkcount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Check Taxes </p>";
        //    isValid = false;
        //}
        //if (!isValid) {
        //    var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        //    $("#divInvoiceCreationInfoMsg").text("");
        //    $("#divInvoiceCreationInfoMsg").append(finalerror1 + errorMsg + "</div>");
        //    $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
        //    $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
        //    return false;
        //}
        //else {
            //$("#divInvoiceCreationInfoMsg").text("");
            //$("#divInvoiceCreationInfoMsg").addClass("hidden");

            //var duplicatedcacount = 0;
            //var selecteddcalist = [];
            //$("#ClientTaxTable tbody tr").each(function () {
            //    var currentRow = $(this);

            //    var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
            //    if (taxdca !== 0) {
            //        selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());                  
            //        //selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());                  
            //        //selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());                  
            //    }
            //});
            //var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
            //if (duplicatelist.length > 0) {
            //    var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Tax</p>";
            //    $("#divInvoiceCreationInfoMsg").text("");
            //    $("#divInvoiceCreationInfoMsg").append(finalerror2 + "</div>");
            //    $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            //    $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
            //    return false;
            //}
            //else {
                var createdby = $("#txtAppInvCreatedby").val();
                //var taxtypes = "", taxdcas = "", taxsdcas = "", taxnames = "", taxAmounts = "";
                //var count = $("#ClientTaxTable tbody tr").length;

                //$("#ClientTaxTable tbody tr").each(function () {
                //    var currentRow = $(this);
                //    var rowno = currentRow.find("td").eq(0).html();
                //    var taxtypeval = currentRow.find("td").eq(1).find("select option:selected").text();
                //    var taxdcaval = currentRow.find("td").eq(2).find("select option:selected").val();
                //    var taxsdcaval = currentRow.find("td").eq(3).find("select option:selected").val();
                //    var taxnameval = currentRow.find("td").eq(4).find("select option:selected").val();
                //    var taxamountval = currentRow.find("td").eq(5).find("input[type='text']").val();
                //    var check = currentRow.find("td").eq(6).find('input[type="checkbox"]').is(':checked');
                //    var taxtype = currentRow.find("td").eq(1).find("select option:selected").index();
                //    var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
                //    var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();
                //    var taxname = currentRow.find("td").eq(4).find("select option:selected").index();
                //    var taxamount = currentRow.find("td").eq(5).find("input[type='text']").val();
                //    if (taxtype !== 0 && taxdca !== 0 && taxsdca !== 0 && taxname !== 0 && taxamountval !== "" && check === true) {
                //        taxtypes += taxtypeval;
                //        taxtypes += ",";
                //        taxdcas += taxdcaval;
                //        taxdcas += ",";
                //        taxsdcas += taxsdcaval;
                //        taxsdcas += ",";
                //        taxnames += taxnameval;
                //        taxnames += ",";
                //        taxAmounts += taxamountval;
                //        taxAmounts += ",";
                //    }
                //});
                var updateclientInv = {
                    RANO: $("#txtRANo").val(),
                    CCCode: $("#UpCCCode").val(),
                    ClientInvoiceNo: InvoiceNo,
                    InvoiceDate: $("#txtInvoiceDate").val(),
                    InvoiceMakingDate: $("#txtInsMakingDate").val(),
                    BasicValue: $("#txtBasicValue").val(),
                    Total: $("#txtInvoiceValue").val(),
                    InvoiceRemarks: $("#txtDescription").val(),
                    InvoiceType: $("#InsTypeddl option:selected").text(),
                    CreatedBy: createdby,
                    //Taxtypes: taxtypes,
                    //Taxdcas: taxdcas,
                    //Taxsdcas: taxsdcas,
                    //Taxnos: taxnames,
                    //Taxamounts: taxAmounts,
                    Action: 'Update'
                };
                addFailMsg = "Error Occurred While Updating Client Invoice Details.";
                addSuccessMsg = "Client Invoice Details Updated Successfully.";
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/AccountsApproval/UpdateClientInvoiceCreation',
                    data: { clinetInv: updateclientInv },
                    success: function (Data) {
                        if (Data.saveStatus == true) {
                            var msg = "<div>" + addSuccessMsg + "</div>";
                            $("#AppInvMsg").html(msg);
                            $('#ApproveInvMsgModal').modal('show');
                        }
                    },
                    failure: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppInvMsg").html(msg);
                        $('#ApproveInvMsgModal').modal('show');
                    },
                    error: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppInvMsg").html(msg);
                        $('#ApproveInvMsgModal').modal('show');
                    }
                });
            //}
        //}
    }

}
function UpdateClientInvoice() {
    var createdby = $("#txtAppInvCreatedby").val();
    var taxtypes = "", taxdcas = "", taxsdcas = "", taxnames = "", taxAmounts = "";
    var count = $("#ClientTaxTable tbody tr").length;

    $("#ClientTaxTable tbody tr").each(function () {
        var currentRow = $(this);
        var rowno = currentRow.find("td").eq(0).html();
        var taxtypeval = currentRow.find("td").eq(1).find("select option:selected").text();
        var taxdcaval = currentRow.find("td").eq(2).find("select option:selected").val();
        var taxsdcaval = currentRow.find("td").eq(3).find("select option:selected").val();
        var taxnameval = currentRow.find("td").eq(4).find("select option:selected").val();
        var taxamountval = currentRow.find("td").eq(5).find("input[type='text']").val();
        taxtypes += taxtypeval;
        taxtypes += ",";
        taxdcas += taxdcaval;
        taxdcas += ",";
        taxsdcas += taxsdcaval;
        taxsdcas += ",";
        taxnames += taxnameval;
        taxnames += ",";
        taxAmounts += taxamountval;
        taxAmounts += ",";
    });

    var clientInv = {
        PONumber: $("#PONumberddl option:selected").text(),
        RANO: $("#txtRANo").val(),
        CCCode: $("#CCCodeddl option:selected").text(),
        ClientInvoiceNo: $("#txtInvoiceNo").val(),
        InvoiceDate: $("#txtInvoiceDate").val(),
        InvoiceMakingDate: $("#txtInsMakingDate").val(),
        BasicValue: $("#txtBasicValue").val(),
        Total: $("#txtInvoiceValue").val(),
        InvoiceRemarks: $("#txtDescription").val(),
        InvoiceType: $("#InsTypeddl option:selected").text(),
        Clientcode: $("#ClientIDddl option:selected").text(),
        SubClientcode: $("#SubClientIDddl option:selected").text(),
        InvoiceSubType: $("#InsCategoryddl option:selected").text(),
        CreatedBy: createdby,
        Taxtypes: taxtypes,
        Taxdcas: taxdcas,
        Taxsdcas: taxsdcas,
        Taxnos: taxnames,
        Taxamounts: taxAmounts
    };
    addFailMsg = "Error Occurred While Adding Client Invoice Details.";
    addSuccessMsg = "Client Invoice Details Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/SaveClientInvoiceCreation',
        data: { clinetInv: clientInv },
        success: function (Data) {
            if (Data.saveStatus == true) {
                $("#btnSubmitClientInvCreation").prop("disabled", true);
                $("#divInvoiceCreationInfoMsg").text(addSuccessMsg);
                $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-danger");
                $("#divInvoiceCreationInfoMsg").addClass("alert-success");
            }
            else {
                $("#btnSubmitClientInvCreation").prop("disabled", true);
                $("#divInvoiceCreationInfoMsg").text(addFailMsg);
                $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
                $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnSubmitClientInvCreation").prop("disabled", true);
            $("#divInvoiceCreationInfoMsg").text(addFailMsg);
            $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
        }
    });
}
//Payments 
function ApproveClientRecievable(Transactionid) {
    var invoicenoid = "ApprClientRecInvoice-" + Transactionid;
    invno = $("#" + invoicenoid + "").val();
 //   appstatusid = "AppClientrecstatus-" + Transactionid;
    var appstatus = $("#AppClientrecstatus option:selected").text();
    var retnoteid = "AppClientrecNote-" + Transactionid;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divApprclientrecInfoMsg-" + Transactionid;
    msg = $("#" + msgid + "");
    var invdateid = "ApprClientRecInvoicedate-" + Transactionid;
    var invdate = $("#" + invdateid + "").val();
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var DedCCs = '', DedDcas = '', DedSdca = '', DedAmounts = '';
        $("#ApprclientrecDeduction-" + Transactionid + " tbody tr").each(function () {
            var currentRow = $(this);
            var cccode = currentRow.find("td").eq(0).html();
            var dca = currentRow.find("td").eq(1).html();
            var sdca = currentRow.find("td").eq(2).html();
            var dcaamount = currentRow.find("td").eq(3).html();
            DedCCs += cccode + ",";
            DedDcas += dca + ",";
            DedSdca += sdca + ",";
            DedAmounts += dcaamount + ",";
        });
        var verifyclientpayment = {
            BankTransactionId: Transactionid,
            DedCcs: DedCCs,
            DedDcas: DedDcas,
            DedSubdcas: DedSdca,
            DedAmounts: DedAmounts,
            Action: appstatus,
            ApprovalNote: retnote,
            Createdby: $("#txtAppClRecCreatedby").val(),
            InvoiceDate: invdate,
            InvoiceNo: invno,
            Roleid: $("#roleid").val(),
            Advance: $("#apprClRecAdvance").val(),
            Rentention: $("#apprClRecRet").val(),
            Hold: $("#apprClRecHold").val(),
            Bank: $("#Apprclrecbank").val(),
            Amount: $("#ApprclrecTransAmount").val(),
        };
        //addFailMsg = "Error Occurred While Invoice Verification";
        //addSuccessMsg = "Invoice  Verified Successfully.";


        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveClientRecievable",
            data: JSON.stringify({ apprclientRec: verifyclientpayment }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = "";
                if (response.saveStatus == "Submitted") {
                    $('#ApproveClientrecMsgModal').modal('show');
                    msg = "<div>Cleint Payment " + finalmsg+"</div>";
                    $("#AppClientrecMsg").html(msg);
                }
                else {
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppClientrecMsg").html(msg);
                    $('#ApproveClientrecMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientrecMsg").html(msg);
                $('#ApproveClientrecMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppClientrecMsg").html(msg);
                $('#ApproveClientrecMsgModal').modal('show');
            }
        });
    }
}

function ApproveAdvancePayment(Transactionid) {
    var refnoid = "ApprAdvpayRefno-" + Transactionid;
    refno = $("#" + refnoid + "").val();

    //appstatusid = "AppAdvstatus;
    var appstatus = $("#AppAdvstatus option:selected").text();

    var retnoteid = "AppAdvNote-" + Transactionid;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divAppradvPayInfoMsg-" + Transactionid;
    msg = $("#" + msgid + "");
    var reqdateid = "ApprAdvReqDate-" + Transactionid;
    var reqdate = $("#" + reqdateid + "").val();

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var DedCCs = '', DedDcas = '', DedSdca = '', DedAmounts = '';
        var count = $("#AppradvanceDeduction-" + Transactionid + " tbody tr").length;
        //alert(count);
        if (count > 0) {
            $("#AppradvanceDeduction-" + Transactionid + " tbody tr").each(function () {
                var currentRow = $(this);
                var cccode = currentRow.find("td").eq(0).html();
                var dca = currentRow.find("td").eq(1).html();
                var sdca = currentRow.find("td").eq(2).html();
                var dcaamount = currentRow.find("td").eq(3).html();
                DedCCs += cccode + ",";
                DedDcas += dca + ",";
                DedSdca += sdca + ",";
                DedAmounts += dcaamount + ",";
                //alert(cccode + "," + dca + "," + sdca + "," + dcaamount);
            });
        }
        var verifyadvancepayment = {
            BankTransactionId: Transactionid,
            BankTransactionRefNo: refno,
            DedCcs: DedCCs,
            DedDcas: DedDcas,
            DedSubdcas: DedSdca,
            DedAmounts: DedAmounts,
            Action: appstatus,
            Roleid: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtAppAdvanceCreatedby").val(),
            RequestDate: reqdate,
            Bank: $("#ApprAdvBank").val(),
            Amount: $("#ApprAdvPayAmount").val(),
        };
        //debugger;
        //addFailMsg = "Error Occurred While Advance Payment Verification";
        //addSuccessMsg = "Advance Payment  Verified Successfully.";

        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveAdvancePayment",
            data: JSON.stringify({ apprAdvancepay: verifyadvancepayment }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    var msg = '';
                    $('#ApproveAdvanceMsgModal').modal('show');
                    msg = "<div>Adnvance Payment " + finalmsg+"</div>";
                    $("#AppAdvMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppAdvMsg").html(msg);
                    $('#ApproveAdvanceMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppAdvMsg").html(msg);
                $('#ApproveAdvanceMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppAdvMsg").html(msg);
                $('#ApproveAdvanceMsgModal').modal('show');
            }
        });

    }
}
function SubmitAdvancePayReturnData(TransRefno, TransId) {
    isValid = true;
    var errorMsg = "";
    var requestdate = $("#txtAdvPayReqDate").val();
    var Rano = $("#txtAdvPayRANo").val();
    var Basicvalue = $("#txtAdvPayBasicValue").val();
    var Bankname = $("#ddlAdvPayBank option:selected").text();
    var no = $("#txtAdvPayNo").val();
    var transdate = $("#txtAdvbPayDate").val();
    var remarks = $("#txtAdvPayRemarks").val();
    if (requestdate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Advance Request Date</p>";
        isValid = false;
    }
    if (Rano == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter RA Number</p>";
        isValid = false;
    }
    if (Basicvalue == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Basic Value</p>";
        isValid = false;
    }
    if (Bankname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        isValid = false;
    }
    if (no == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select RTGS Number</p>";
        isValid = false;
    }
    if (transdate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Transaction Date</p>";
        isValid = false;
    }
    if (remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAdvPayInfoMsg").text("");
        $("#divAdvPayInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divAdvPayInfoMsg").addClass("alert-danger");
        $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        //var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;
        //$("#AdvPayTaxTable tbody tr").each(function () {
        //    var currentRow = $(this);
        //    var taxtype = currentRow.find("td").eq(1).find("select option:selected").text();
        //    var taxdca = currentRow.find("td").eq(2).find("select option:selected").text();
        //    var taxsdca = currentRow.find("td").eq(3).find("select option:selected").text();
        //    var taxname = currentRow.find("td").eq(4).find("select option:selected").text();
        //    var taxamount = currentRow.find("td").eq(5).find("input[type='text']").val();
        //    var check = currentRow.find("td").eq(6).find('input[type="checkbox"]').is(':checked');
        //    if (taxtype != 'Select' || taxdca != 'Select' || taxsdca != 'Select' || taxname != 'Select') {
        //        if (taxtype == 0) { typecount = typecount + 1; }
        //        if (taxdca == 0) { dcacount = dcacount + 1; }
        //        if (taxsdca == 0) { sdcacount = sdcacount + 1; }
        //        if (taxname == 0) { taxcount = taxcount + 1; }
        //        if (taxamount == "") { taxvaluecount = taxvaluecount + 1; }
        //        if (check == false) { taxchkcount = taxchkcount + 1; }
        //    }

        //});

        //if (typecount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select IsCreditable</p>";
        //    isValid = false;
        //}
        //if (dcacount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter DCA</p>";
        //    isValid = false;
        //}
        //if (sdcacount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select SubDCA</p>";
        //    isValid = false;
        //}
        //if (taxcount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Tax Name</p>";
        //    isValid = false;
        //}
        //if (taxvaluecount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Amount</p>";
        //    isValid = false;
        //}
        //if (taxchkcount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Check Taxes </p>";
        //    isValid = false;
        //}
        if ($("#chkDedAdvY").is(':checked') === true) {
            var checkboxCount = 0, OtherCcCount = 0, CCCodeCount = 0, DcaCount = 0, SubDcaCount = 0, DcaAmountCount = 0;
            $("#AdvPayDeductionGrid tbody tr").each(function () {
                var currentRow = $(this);
                var RowNo = currentRow.find("td").eq(0).html();
                var checkbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
                var OtherCC = currentRow.find("td").eq(1).find("select option:selected").index();
                var CCCode = currentRow.find("td").eq(2).find("select option:selected").index();
                var DCA = currentRow.find("td").eq(3).find("select option:selected").index();
                var SubDCA = currentRow.find("td").eq(4).find("select option:selected").index();
                var DcaAmount = currentRow.find("td").eq(5).find("input[type='text']").val();
                var dedexist = 0;
                //if (checkbox == true || OtherCC != 0 || CCCode != 0 || DCA !=0 || SubDCA != 0|| DcaAmount != "") {
                if (checkbox == false) {
                    checkboxCount = checkboxCount + 1;
                }
                if (OtherCC == 0) {
                    OtherCcCount = OtherCcCount + 1;
                }
                if (CCCode == 0) {
                    CCCodeCount = parseInt(CCCodeCount) + parseInt(1);
                }
                if (DCA == 0) {
                    DcaCount = DcaCount + 1;
                }
                if (SubDCA == 0) {
                    SubDcaCount = SubDcaCount + 1;
                }
                if (DcaAmount == "0.00" || DcaAmount == "" || DcaAmount == "0.0" || DcaAmount == "0") {
                    DcaAmountCount = DcaAmountCount + 1;
                }
                // }
            });

            if (OtherCcCount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction from other CC</p>";
                isValid = false;
            }
            if (CCCodeCount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Cost Center</p>";
                isValid = false;
            }
            if (DcaCount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head </p>";
                isValid = false;
            }
            if (SubDcaCount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubAccount Head </p>";
                isValid = false;
            }
            if (DcaAmountCount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Amount</p>";
                isValid = false;
            }
            if (checkboxCount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Check or Not</p>";
                isValid = false;
            }
            if (!isValid) {
                var finalerrorr = "<div style='align:center'><p>Please enter all required fields!</p>";
                $("#divAdvPayInfoMsg").text("");
                $("#divAdvPayInfoMsg").append(finalerrorr + errorMsg + "</div>");
                $("#divAdvPayInfoMsg").addClass("alert-danger");
                $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                //$("#divAdvPayInfoMsg").text("");
                //$("#divAdvPayInfoMsg").addClass("hidden");
                //var selecteddcalist = [];
                //$("#AdvPayTaxTable tbody tr").each(function () {
                //    var currentRow = $(this);
                //    var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
                //    if (taxdca !== 0) {
                //        selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                //        alert(currentRow.find("td").eq(2).find("select option:selected").val());
                //    }
                //});
                //var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
                //if (duplicatelist.length > 0) {
                //    var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Tax</p>";
                //    $("#divAdvPayInfoMsg").text("");
                //    $("#divAdvPayInfoMsg").append(finalerror2 + "</div>");
                //    $("#divAdvPayInfoMsg").addClass("alert-danger");
                //    $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
                //    return false;
                //}
                //else {                
                var selectedcclist = [];
                $("#AdvPayDeductionGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var dedcc = currentRow.find("td").eq(2).find("select option:selected").val();
                    var deddca = currentRow.find("td").eq(3).find("select option:selected").val();
                    if (dedcc !== 0 && deddca) {
                        selectedcclist.push(dedcc + '-' + deddca);
                        // alert(dedcc + '-' + deddca);
                    }
                });

                var duplicatelist1 = selectedcclist.filter(i => selectedcclist.filter(ii => ii === i).length > 1);
                if (duplicatelist1.length > 0) {
                    var finalerror3 = "<div style='align:center'><p>Duplicate Accounts Heads for Deductions</p>";
                    $("#divAdvPayInfoMsg").text("");
                    $("#divAdvPayInfoMsg").append(finalerror3 + "</div>");
                    $("#divAdvPayInfoMsg").addClass("alert-danger");
                    $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
                else {
                    UpdateAdvancePayment(TransRefno, TransId);
                }

            } 

        } else { UpdateAdvancePayment(TransRefno, TransId); }

    }
}
function UpdateAdvancePayment(TransRefno, TransId) {

    var createdby = $("#txtCreatedby").val();
    //var taxtypes = "", taxdcas = "", taxsdcas = "", taxnames = "", taxAmounts = "";
    var Cclist = "", Dcalist = "", Subdcalist = "", Amountslist = "";
    var subtotal = 0;
    var rowtotal = 0;
    var totaladvance = $("#txtAdvPayAmount").val();
    $("#AdvPayDeductionGrid tbody tr").each(function () {
        var currentRow = $(this);
        var RowNo = currentRow.find("td").eq(0).html();
        var checkbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
        var OtherCC = currentRow.find("td").eq(1).find("select option:selected").index();
        var CCCode = currentRow.find("td").eq(2).find("select option:selected").index();
        var DCA = currentRow.find("td").eq(3).find("select option:selected").index();
        var SubDCA = currentRow.find("td").eq(4).find("select option:selected").index();
        var DcaAmount = currentRow.find("td").eq(5).find("input[type='text']").val();
        if (checkbox == true && OtherCC != 0 && CCCode != 0 && DCA != 0 && SubDCA != 0 && DcaAmount != "") {
            Cclist += currentRow.find("td").eq(2).find("select option:selected").val() + ",";
            Dcalist += currentRow.find("td").eq(3).find("select option:selected").val() + ",";
            Subdcalist += currentRow.find("td").eq(4).find("select option:selected").val() + ",";
            Amountslist += currentRow.find("td").eq(5).find("input[type='text']").val() + ",";
        }
    });
    //$("#AdvPayTaxTable tbody tr").each(function () {
    //    var currentRow = $(this);
    //    var rowno = currentRow.find("td").eq(0).html();
    //    var taxtypeindex = currentRow.find("td").eq(1).find("select option:selected").index();
    //    var taxdcaindex = currentRow.find("td").eq(2).find("select option:selected").index();
    //    var taxsdcavindex = currentRow.find("td").eq(3).find("select option:selected").index();
    //    var taxnameindex = currentRow.find("td").eq(4).find("select option:selected").index();
    //    var taxamountval = currentRow.find("td").eq(5).find("input[type='text']").val();
    //    subtotal = parseFloat(subtotal) + parseFloat(taxamountval);
    //    if (taxtypeindex != 0 && taxdcaindex != 0 && taxsdcavindex != 0 && taxnameindex != 0 && taxamountval != "") {
    //        taxtypes += currentRow.find("td").eq(1).find("select option:selected").text();
    //        taxtypes += ",";
    //        taxdcas += currentRow.find("td").eq(2).find("select option:selected").val();
    //        taxdcas += ",";
    //        taxsdcas += currentRow.find("td").eq(3).find("select option:selected").val();
    //        taxsdcas += ",";
    //        taxnames += currentRow.find("td").eq(4).find("select option:selected").val();
    //        taxnames += ",";
    //        taxAmounts += currentRow.find("td").eq(5).find("input[type='text']").val();
    //        taxAmounts += ",";
    //    }
    //});

    var saveAdvPay = {
        Client: $("#txtAdvPayClient option:selected").val(),
        SubClient: $("#ddlAdvPaysubClient option:selected").val(),
        CCCode: $("#ddlAdvPayCC option:selected").val(),
        PONo: $("#ddlAdvPayPO").val(),
        RequestDate: $("#txtAdvPayReqDate").val(),
        RANo: $("#txtAdvPayRANo").val(),
        BasicValue: $("#txtAdvPayBasicValue").val(),
        Bank: $("#ddlAdvPayBank option:selected").text(),
        TransactionDate: $("#txtAdvbPayDate").val(),
        Number: $("#txtAdvPayNo").val(),
        Remarks: $("#txtAdvPayRemarks").val(),
        Amount: $("#txtAdvPayBasicValue").val(),
        PaytypeId: 0,
        //Taxtypes: taxtypes,
        //Taxdcas: taxdcas,
        //Taxsdcas: taxsdcas,
        //Taxnos: taxnames,
        //Taxamounts: taxAmounts,
        DedDcas: Dcalist,
        DedSubdcas: Subdcalist,
        DedCcs: Cclist,
        DedAmounts: Amountslist,
        Createdby: $("#txtadvpayCreatedby").val(),
        InvTotalValue: totaladvance,
        Action: 'Update',
        BankTransactionId: TransId,
        BankTransactionRefNo: TransRefno,
        Roleid: $("#txtClientAdvRoleId").val(),
        OldDeductionids: $("#txtolddeductionids").val()
    };
    debugger;
    addFailMsg = "Error Occurred While Adding Advance Payment.";
    addSuccessMsg = "Advance Payment Saved Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/AccountsApproval/UpdateClientAdvancePayment',
        data: { advPay: saveAdvPay },
        success: function (response) {
            if (response.saveStatus == "Updated") {
                var msg = '';
                $('#ApproveAdvanceMsgModal').modal('show');
                msg = "<div>Adnvance Payment Updated Successfully</div>";
                $("#AppAdvMsg").html(msg);
            }
            else {
                msg = "<div>" + response.saveStatus + "</div>";
                $("#AppAdvMsg").html(msg);
                $('#ApproveAdvanceMsgModal').modal('show');
            }
        },
        failure: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppAdvMsg").html(msg);
            $('#ApproveAdvanceMsgModal').modal('show');
        },
        error: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppAdvMsg").html(msg);
            $('#ApproveAdvanceMsgModal').modal('show');
        }

    });
}
function ApproveRetentionPayment(TransRefno) {
    // alert(TransRefno);

    appstatusid = "AppRetstatus-" + TransRefno;
    var appstatus = $("#AppRetstatus option:selected").text();

    var retnoteid = "AppRetNote-" + TransRefno;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divApprretPayInfoMsg-" + TransRefno;
    msg = $("#" + msgid + "");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var Invoicenos = '', Retamounts = '';
        var count = $("#tblApprRetInv-" + TransRefno + " tbody tr").length;
        // alert(count);
        if (count > 0) {
            $("#tblApprRetInv-" + TransRefno + " tbody tr").each(function () {
                var currentRow = $(this);
                var invno = currentRow.find("td").eq(0).html();
                var amount = currentRow.find("td").eq(3).html();
                Invoicenos += invno + ",";
                Retamounts += amount + ",";

            });
        }
        var verifyRetpayment = {
            BankTransactionRefNo: TransRefno,
            InvoiceNos: Invoicenos,
            PaidRetAmounts: Retamounts,
            Action: appstatus,
            Roleid: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtAppRetCreatedby").val(),
            Bank: $("#ApprRetBank").val(),
            PaymentAmount: $("#ApprRetCredit").val(),

        };
        //addFailMsg = "Error Occurred While Retention Payment Verification";
        //addSuccessMsg = "Retention Payment  Verified Successfully.";

        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveRetentionPayment",
            data: JSON.stringify({ apprRetpay: verifyRetpayment }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    var msg = '';
                    $('#ApproveRetMsgModal').modal('show');
                    msg = "<div>Retention Payment " + finalmsg+"</div>";
                    $("#AppRetMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppRetMsg").html(msg);
                    $('#ApproveRetMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppRetMsg").html(msg);
                $('#ApproveRetMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppRetMsg").html(msg);
                $('#ApproveRetMsgModal').modal('show');
            }
        });
    }
}
function UpdateRetPayData(TransRefno) {
   // alert(TransRefno);
    var tablerowcount = $("#RetPayInvTable tbody tr").length;
    if (tablerowcount > 0) {//
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#RetPayInvTable tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(5).html();
            if (checkbox == true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check Invoice Numbers</p>";
            isValid = false;
        }
        var bank = $("#ddlRetPayBank option:selected").index();
        var Mode = $("#ddlRetPaymode option:selected").index();

        var date = $("#txtRetPayDate").val();
        var remarks = $("#txtRetPayRemarks").val();
        var amount = $("#txtRetPayAmount").val();

        if (bank == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Mode == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Mode == 1) {
            var ddlcheque = $("#ddltxtRetPayNo option:selected").index();
            if (ddlcheque == "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtRetPayNo").val();
            if (cheque == "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
                isValid = false;
            }

        }
        if (date == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
            isValid = false;
        }
        $("#RetPayInvTable tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(5).html();
            if (checkbox == true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Payment Amount is greater than invoice total</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divRetPayInfoMsg").text("");
            $("#divRetPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divRetPayInfoMsg").addClass("alert-danger");
            $("#divRetPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#RetPayInvTable tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(4).html();
                if (checkbox == true) {
                    if (new Date(paydate) < new Date(invdate)) {
                        isValid = false;
                    }
                }
            });
            if (!isValid) {
                var finalerror = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divRetPayInfoMsg").text("");
                $("#divRetPayInfoMsg").append(finalerror + "</div>");
                $("#divRetPayInfoMsg").addClass("alert-danger");
                $("#divRetPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divRetPayInfoMsg").text("");
                $("#divRetPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                var Modeindex = $("#ddlRetPaymode option:selected").index();
                var chequeno;
                if (Modeindex == 1) {
                    var ddlcheque = $("#ddltxtRetPayNo option:selected").text();
                    chequeno = ddlcheque;
                }
                else {
                    var cheque = $("#txtRetPayNo").val();
                    chequeno = cheque;

                }
                var selecetedinvnos = "";
                var selecetedinvdates = "";
                $("#RetPayInvTable tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var date = currentRow.find("td").eq(4).html();
                    if (checkbox == true) {
                        selecetedinvnos += ino + ",";
                        var d = moment(date).format("YYYY-MM-DD");
                        selecetedinvdates += d + ",";
                    }
                });

                var updateRetPay = {
                    PaymentDate: $("#txtRetPayDate").val(),
                    PaidRetAmounts: $("#txtRetPayAmount").val(),
                    Bank: $("#ddlRetPayBank option:selected").text(),
                    InvoiceNos: selecetedinvnos,
                    No: chequeno,
                    ModeOfPay: $("#ddlRetPaymode option:selected").text(),
                    Createdby: $("#txtRetCreatedby").val(),
                    Action: 'Update',
                    Remarks: $("#txtRetPayRemarks").val(),
                    BankTransactionRefNo: TransRefno,
                    InvoiceDates: selecetedinvdates,
                    OldInvoicenos: $("#txtoldinvoicenos").val(),
                    Roleid: $("#txtRetRoleId").val(),
                    OldRetamounts: $("#txtoldredamounts").val(),
                };
                addFailMsg = "Error Occurred While Updating Retention Payment";
                addSuccessMsg = "Retention Payment Updated Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/AccountsApproval/UpdateClientRetentionPayment',
                    data: { retPay: updateRetPay },
                    success: function (Data) {
                        if (Data.saveStatus == "Updated") {
                            var msg = '';
                            $('#ApproveRetMsgModal').modal('show');
                            msg = "<div>Retention Payment Updated Successfully</div>";
                            $("#AppRetMsg").html(msg);
                        }
                        else {
                            msg = "<div>" + response.saveStatus + "</div>";
                            $("#AppRetMsg").html(msg);
                            $('#ApproveRetMsgModal').modal('show');
                        }
                    },
                    failure: function (Data) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppRetMsg").html(msg);
                        $('#ApproveRetMsgModal').modal('show');
                    },
                    error: function (Data) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppRetMsg").html(msg);
                        $('#ApproveRetMsgModal').modal('show');
                    }
                });


            }
        }
    }

}
function ApproveHoldPayment(TransRefno) {
    alert(TransRefno);

    appstatusid = "AppHoldstatus-" + TransRefno;
    var appstatus = $("#AppHoldstatus option:selected").text();

    var retnoteid = "AppHoldNote-" + TransRefno;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divApprholdPayInfoMsg-" + TransRefno;
    msg = $("#" + msgid + "");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var Invoicenos = '', Holdamounts = '';
        var count = $("#tblApprRetInv-" + TransRefno + " tbody tr").length;
        // alert(count);
        if (count > 0) {
            $("#tblApprRetInv-" + TransRefno + " tbody tr").each(function () {
                var currentRow = $(this);
                var invno = currentRow.find("td").eq(0).html();
                var amount = currentRow.find("td").eq(3).html();
                Invoicenos += invno + ",";
                Holdamounts += amount + ",";

            });
            var verifyHoldpayment = {
                BankTransactionRefNo: TransRefno,
                InvoiceNos: Invoicenos,
                PaidHoldAmounts: Holdamounts,
                Action: appstatus,
                Roleid: $("#roleid").val(),
                ApprovalNote: retnote,
                Createdby: $("#txtAppHoldCreatedby").val(),
                Bank: $("#ApprholdBank").val(),
                PaymentAmount: $("#ApprholdCredit").val(),

            };
            //addFailMsg = "Error Occurred While Hold Payment Verification";
            //addSuccessMsg = "Hold Payment  Verified Successfully.";

            addFailMsg = "Error Occurred";
            var finalmsg;
            if (appstatus === 'Verify') {
                finalmsg = 'Verified Successfully';
            }
            else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
            else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
            else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

            $.ajax({
                type: "POST",
                url: "/AccountsApproval/ApproveHoldPayment",
                data: JSON.stringify({ apprHoldpay: verifyHoldpayment }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.saveStatus == "Submitted") {
                        var msg = '';
                        $('#ApproveHoldMsgModal').modal('show');
                        msg = "<div>Hold Payment " + finalmsg+"</div>";
                        $("#AppholdMsg").html(msg);
                    }
                    else {
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppholdMsg").html(msg);
                        $('#ApproveHoldMsgModal').modal('show');
                    }
                },
                failure: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppholdMsg").html(msg);
                    $('#ApproveHoldMsgModal').modal('show');
                },
                error: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppholdMsg").html(msg);
                    $('#ApproveHoldMsgModal').modal('show');
                }
            });
        }
    }
}

function UpdateHoldPayData(TransRefno) {

    var tablerowcount = $("#HoldPayInvTable tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#HoldPayInvTable tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(5).html();
            if (checkbox == true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check Invoice Numbers</p>";
            isValid = false;
        }
        var bank = $("#ddlHoldPayBank option:selected").index();
        var Mode = $("#ddlHoldPaymode option:selected").index();

        var date = $("#txtHoldPayDate").val();
        var remarks = $("#txtHoldPayRemarks").val();
        var amount = $("#txtHPayAmount").val();

        if (bank == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Mode == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Mode == 1) {
            var ddlcheque = $("#ddlHoldPayNo option:selected").index();
            if (ddlcheque == 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtRetPayNo").val();
            if (cheque == "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
                isValid = false;
            }

        }
        if (date == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
            isValid = false;
        }
        $("#HoldPayInvTable tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(5).html();
            if (checkbox == true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Payment Amount is greater than invoice total</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divHoldPayInfoMsg").text("");
            $("#divHoldPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divHoldPayInfoMsg").addClass("alert-danger");
            $("#divHoldPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#HoldPayInvTable tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(4).html();
                if (checkbox == true) {
                    if (new Date(paydate) < new Date(invdate)) {
                        isValid = false;
                    }
                }
            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divHoldPayInfoMsg").text("");
                $("#divHoldPayInfoMsg").append(finalerror1 + "</div>");
                $("#divHoldPayInfoMsg").addClass("alert-danger");
                $("#divHoldPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divHoldPayInfoMsg").text("");
                $("#divHoldPayInfoMsg").addClass("hidden");

                var Modeindex = $("#ddlHoldPaymode option:selected").index();
                var chequeno;
                if (Modeindex == 1) {
                    var ddlcheque = $("#ddlHoldPayNo option:selected").text();
                    chequeno = ddlcheque;
                }
                else {
                    var cheque = $("#txtHoldPayNo").val();
                    chequeno = cheque;

                }
                var selecetedinvnos = "";
                var selecetedinvdates = "";
                $("#HoldPayInvTable tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var date = currentRow.find("td").eq(4).html();
                    if (checkbox == true) {
                        selecetedinvnos += ino + ",";
                        var d = moment(date).format("YYYY-MM-DD");
                        selecetedinvdates += d + ",";
                    }
                });

                var updateHoldPay = {
                    PaymentDate: $("#txtHoldPayDate").val(),
                    PaidHoldAmounts: $("#txtHPayAmount").val(),
                    Bank: $("#ddlHoldPayBank option:selected").text(),
                    InvoiceNos: selecetedinvnos,
                    No: chequeno,
                    ModeOfPay: $("#ddlHoldPaymode option:selected").text(),
                    Createdby: $("#txtHoldCreatedby").val(),
                    Action: 'Update',
                    Remarks: $("#txtHoldPayRemarks").val(),
                    BankTransactionRefNo: TransRefno,
                    InvoiceDates: selecetedinvdates,
                    Roleid: $("#txtClientHoldRoleId").val(),
                    OldInvoicenos: $("#txtoldinvoicenos").val(),
                    OldHoldamounts: $("#txtoldholdamounts").val()
                };
                


                addFailMsg = "Error Occurred While Updating Hold Payment";
                addSuccessMsg = "Hold Payment Updated Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/AccountsApproval/UpdateClientHoldPayment',
                    data: { holdPay: updateHoldPay },
                    success: function (Data) {
                        if (Data.saveStatus == "Updated") {
                            var msg = '';
                            $('#ApproveHoldMsgModal').modal('show');
                            msg = "<div>Hold Payment Verified Successfully</div>";
                            $("#AppholdMsg").html(msg);
                        }
                        else {
                            msg = "<div>" + response.saveStatus + "</div>";
                            $("#AppholdMsg").html(msg);
                            $('#ApproveHoldMsgModal').modal('show');
                        }
                    },
                    failure: function (Data) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppholdMsg").html(msg);
                        $('#ApproveHoldMsgModal').modal('show');
                    },
                    error: function (Data) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppholdMsg").html(msg);
                        $('#ApproveHoldMsgModal').modal('show');
                    }
                });


            }
        }

    }

}
function UpdateClientRecievableData(Transactionid,OldAdvance,OldRetention,Oldhold) {
   // alert(Transactionid);
    var Advance = $("#txtAdvance").val();
    var Bank = $("#ddl_ClRecBankddl option:selected").index();
    var Date = $("#txtClientPayDate").val();
    var Remarks = $("#txtRemarks").val();
    var No = $("#txtNo").val();

    var errorMsg = "";
    isValid = true;
    if (Advance == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Advance Amount</p>";
        isValid = false;
    }
    if (Bank == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        isValid = false;
    }
    if (No == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Number</p>";
        isValid = false;
    }
    if (Date == "" || Date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Date</p>";
        isValid = false;
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if ($("#chkDedY").is(':checked') === true) {
        var checkboxCount = 0, OtherCcCount = 0, CCCodeCount = 0, DcaCount = 0, SubDcaCount = 0, DcaAmountCount = 0;
        $("#ClientRecDCAGrid tbody tr").each(function () {
            var currentRow = $(this);
            var RowNo = currentRow.find("td").eq(0).html();
            var checkbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
            var OtherCC = currentRow.find("td").eq(1).find("select option:selected").index();
            var CCCode = currentRow.find("td").eq(2).find("select option:selected").index();
            var DCA = currentRow.find("td").eq(3).find("select option:selected").index();
            var SubDCA = currentRow.find("td").eq(4).find("select option:selected").index();
            var DcaAmount = currentRow.find("td").eq(5).find("input[type='text']").val();
            var dedexist = 0;

            //alert(checkbox == true || OtherCC != 0 || CCCode != 0 || DCA != 0 || SubDCA != 0 || DcaAmount != "");
            //if (checkbox == true || OtherCC != 0 || CCCode != 0 || DCA != 0 || SubDCA != 0 || DcaAmount != "") {
                if (checkbox === false) {
                    checkboxCount = checkboxCount + 1;
                }
                if (OtherCC === 0) {
                    OtherCcCount = OtherCcCount + 1;
                }
                if (CCCode === 0) {
                    CCCodeCount = parseInt(CCCodeCount) + parseInt(1);
                }
                if (DCA === 0) {
                    DcaCount = DcaCount + 1;
                }
                if (SubDCA === 0) {
                    SubDcaCount = SubDcaCount + 1;
                }
                if (DcaAmount == "0.00" || DcaAmount == "" || DcaAmount == "0.0" || DcaAmount == "0") {
                    DcaAmountCount = DcaAmountCount + 1;
                }
            //}
        });

        if (OtherCcCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction from other CC</p>";
            isValid = false;
        }
        if (CCCodeCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Cost Center</p>";
            isValid = false;
        }
        if (DcaCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head </p>";
            isValid = false;
        }
        if (SubDcaCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubAccount Head </p>";
            isValid = false;
        }
        if (DcaAmountCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Amount</p>";
            isValid = false;
        }
        if (checkboxCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Check or Not</p>";
            isValid = false;
        }

    }

    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClientRecInfoMsg").text("");
        $("#divClientRecInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClientRecInfoMsg").addClass("alert-danger");
        $("#divClientRecInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClientRecInfoMsg").text("");
        $("#divClientRecInfoMsg").addClass("hidden");
        var duplicatedcacount = 0;
        var selecteddcalist = [];
        if ($("#chkDedY").is(':checked') === true) {

            $("#ClientRecDCAGrid tbody tr").each(function () {
                var currentRow = $(this);
                var dedcc = currentRow.find("td").eq(2).find("select option:selected").val();
                var deddca = currentRow.find("td").eq(3).find("select option:selected").val();
                if (dedcc !== 0) {
                    selecteddcalist.push(dedcc + '-' + deddca);
                    // alert(currentRow.find("td").eq(2).find("select option:selected").val());
                }

                //var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
                //if (taxdca !== 0) {
                //    selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                //}
            });
        }
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate CostCenters for Deduction</p>";
            $("#divClientRecInfoMsg").text("");
            $("#divClientRecInfoMsg").append(finalerror2 + "</div>");
            $("#divClientRecInfoMsg").addClass("alert-danger");
            $("#divClientRecInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {

            var retention = $("#txtRentention").val();
            var Hold = $("#txtHold").val();
            var renval = 0;
            var holdval = 0;
            if (retention !== "") { renval = retention; }
            if (Hold !== "") { holdval = Hold; }
            var Cclist = "", Dcalist = "", Subdcalist = "", Amountslist = "";
            if ($("#chkDedY").is(':checked') === true) {
                $("#ClientRecDCAGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var RowNo = currentRow.find("td").eq(0).html();
                    var checkbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
                    var OtherCC = currentRow.find("td").eq(1).find("select option:selected").index();
                    var CCCode = currentRow.find("td").eq(2).find("select option:selected").index();
                    var DCA = currentRow.find("td").eq(3).find("select option:selected").index();
                    var SubDCA = currentRow.find("td").eq(4).find("select option:selected").index();
                    var DcaAmount = currentRow.find("td").eq(5).find("input[type='text']").val();
                    if (checkbox == true && OtherCC != 0 && CCCode != 0 && DCA != 0 && SubDCA != 0 && DcaAmount != "") {
                        Cclist += currentRow.find("td").eq(2).find("select option:selected").val() + ",";
                        Dcalist += currentRow.find("td").eq(3).find("select option:selected").val() + ",";
                        Subdcalist += currentRow.find("td").eq(4).find("select option:selected").val() + ",";
                        Amountslist += currentRow.find("td").eq(5).find("input[type='text']").val() + ",";
                    }
                });
            }

            var clientPayment = {
                DedDcas: Dcalist,
                DedSubdcas: Subdcalist,
                DedCcs: Cclist,
                DedAmounts: Amountslist,
                Advance: $("#txtAdvance").val(),
                Rentention: renval,
                Hold: holdval,
                BankId: $("#ddl_ClRecBankddl option:selected").val(),
                TransactionDate: $("#txtClientPayDate").val(),
                Number: $("#txtNo").val(),
                Remarks: $("#txtRemarks").val(),
                Amount: $("#txtFinalAmount").val(),
                InvoiceNo: $("#ApprClientRecInvoice").val(),
                CCCode: $("#ApprClientRecCC").val(),
                Createdby: $("#txtCreatedby").val(),
                PaytypeId: $("#ddl_ClRecCategoryddl option:selected").val(),
                InvoiceDate: $("#ApprUpcleitnrecInvoicedate").val(),
                Action: 'Update',
                BankTransactionId: Transactionid,
                Roleid: $("#txtupdclientrecRoleId").val(),
                OldDeductionids: $("#txtolddeductionids").val()

            };
            debugger;
            addFailMsg = "Error Occurred While Updating Client Payment Details.";
            addSuccessMsg = "Client Payment Details Updated Successfully.";

            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/AccountsApproval/UpdateClientInvoiceRecievable',
                data: { clinetRec: clientPayment },
                success: function (Data) {
                    if (Data.saveStatus == "Updated") {
                        var msg = '';
                        $('#ApproveClientrecMsgModal').modal('show');
                        msg = "<div>Payment Updated Successfully</div>";
                        $("#AppClientrecMsg").html(msg);
                    }
                    else {
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppClientrecMsg").html(msg);
                        $('#ApproveClientrecMsgModal').modal('show');
                    }
                },
                failure: function (Data) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppClientrecMsg").html(msg);
                    $('#ApproveClientrecMsgModal').modal('show');
                },
                error: function (Data) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppClientrecMsg").html(msg);
                    $('#ApproveClientrecMsgModal').modal('show');
                }
            });
        }
    }
}
function ApproveGenPayment(TransRefno) {
    //debugger;
    appstatusid = "AppGenstatus-" + TransRefno;
    var appstatus = $("#AppGenstatus").val();

    var retnoteid = "AppGenNote-" + TransRefno;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divApprgenPayInfoMsg-" + TransRefno;
    msg = $("#" + msgid + "");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select" || appstatus == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        //debugger;
        var verifyGenpayment = {
            BankTransactionRefNo: TransRefno,
            Action: appstatus,
            Roleid: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtAppGenCreatedby").val(),
            Bank: $("#ApprholdBank").val(),
            TransactionAmount: $("#ApprGenCredit").val(),

        };
        //addFailMsg = "Error Occurred While General Payment Verification";
        //addSuccessMsg = "General Payment  Verified Successfully.";

        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {finalmsg = 'Verified Successfully';}
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update'; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveGeneralPayment",
            data: JSON.stringify({ apprGeneralpay: verifyGenpayment }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    var msg = '';
                    $('#ApproveGenMsgModal').modal('show');
                    msg = "<div>General Payment " + finalmsg+"</div>";
                    $("#AppgenMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppgenMsg").html(msg);
                    $('#ApproveGenMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppgenMsg").html(msg);
                $('#ApproveGenMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppgenMsg").html(msg);
                $('#ApproveGenMsgModal').modal('show');
            }
        });

    }
}
function UpdateGeneralPayableData(TransRefno) {
    isValid = true;
    var errorMsg = "";
    var date = $("#txtGPPayDate").val();
    var amount = $("#txtGPFinalAmount").val();
    var name = $("#txtGPName").val();
    var bank = $("#ddlGPBank option:selected").index();
    var paymode = $("#ddlGPPayMode option:selected").index(); 
    var Remarks = $("#txtGPReamarks").val();   
    if (date == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Transaction Date</p>";
        isValid = false;
    }
    if (amount == "" || amount == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Transaction Amount</p>";
        isValid = false;
    }
    if (name == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
        isValid = false;
    }
    if (bank == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        isValid = false;
    }
    if (paymode == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay</p>";
        isValid = false;
    }
    if (paymode > 1) {
        var payno = $("#txtGPPaymentNo").val();
        if (payno == "" || payno == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Payment No</p>";
            isValid = false;
        }
    }
    if (paymode == 1) {
        var payno = $("#ddlGPPaymentNo option:selected").index();
        if (payno == 0 || payno == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Payment No</p>";
            isValid = false;
        }
    }
    if (Remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divGeneralPayInfoMsg").text("");
        $("#divGeneralPayInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divGeneralPayInfoMsg").addClass("alert-danger");
        $("#divGeneralPayInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {

        $("#divGeneralPayInfoMsg").text("");
        $("#divGeneralPayInfoMsg").addClass("hidden");     
        var name = $("#txtGPName").val();
        var Remarks = $("#txtGPReamarks").val();
        var number = 0;
        if (paymode == 1) { number = $("#ddlGPPaymentNo option:selected").text(); }
        else { number = $("#txtGPPaymentNo").val(); }
        var genPaydetails = {
            BankId: $("#ddlGPBank option:selected").val(),
            TransactionDate: date,
            TransactionAmount: amount,
            Createdby: $("#txtAppGenCreatedby").val(),
            Action: 'Update',
            Roleid: $("#txtGeneralRoleId").val(),
            Name: name,           
            ModeofPay: $("#ddlGPPayMode option:selected").text(),
            Number: number,
            Remarks: Remarks,
            BankTransactionRefNo: TransRefno
        };
        addFailMsg = "Error Occurred While Adding General Payment.";
        addSuccessMsg = "General Payment Saved Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateGeneralPayment",
            data: JSON.stringify({ generalPay: genPaydetails }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Updated") {
                    var msg = '';
                    $('#ApproveGenMsgModal').modal('show');
                    msg = "<div>General Payment Verified Successfully</div>";
                    $("#AppgenMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppgenMsg").html(msg);
                    $('#ApproveGenMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppgenMsg").html(msg);
                $('#ApproveGenMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppgenMsg").html(msg);
                $('#ApproveGenMsgModal').modal('show');
            }
        });
    }
}

function ApproveNewUnsLoan(TransRefno, type) {

    var appstatus = $("#ApprStatus option:selected").text();
    retnote = $("#ApprNote").val();
    msgid = "divApprgenPayInfoMsg-" + TransRefno;
    msg = $("#divApprLoanInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var deddca = "", sdca = "", dcaamount = 0; var verifyNewloan = {};
        if (type !== 'Return') {

            verifyNewloan = {
                BankTransactionRefNo: TransRefno,
                Action: appstatus,
                Roleid: $("#roleid").val(),
                ApprovalNote: retnote,
                Createdby: $("#txtAppUnlCreatedby").val(),
                Type: $("#apprType").val(),
                Bank: $("#ApprBankname").val(),
                paymentAmount: $("#txtpaymentamount").val(),
            };
        }
        else {
            $("#apprloanDeductionTable tbody tr").each(function () {
                var currentRow = $(this);
                deddca = currentRow.find("td").eq(0).html();
                dcaamount = currentRow.find("td").eq(2).html();
            });
            verifyNewloan = {
                BankTransactionRefNo: TransRefno,
                Action: appstatus,
                Roleid: $("#roleid").val(),
                ApprovalNote: retnote,
                Createdby: $("#txtAppUnlCreatedby").val(),
                Type: $("#apprType").val(),
                Bank: $("#ApprBankname").val(),
                paymentAmount: $("#txtpaymentamount").val(),
                DeductionDCA: deddca,
                DeductionAmount: dcaamount
            };
        }
        //addFailMsg = "Error Occurred While Unsecured Loan Verification";
        //addSuccessMsg = "Unsecured Loan Verified Successfully.";

        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveLoan",
            data: JSON.stringify({ apprLoan: verifyNewloan }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {


                    if (type == 'New') {
                        $('#ApproveUnslMsgModal').modal('show');
                        msg = "<div>Unsecured Loan  " + finalmsg + "</div>";
                        $("#AppUnslMsg").html(msg);
                    }
                    else if (type == 'Existing') {
                        $('#ApproveUnslExistMsgModal').modal('show');
                        msg = "<div>Unsecured Loan " + finalmsg + "</div>";
                        $("#AppUnslMsg").html(msg);
                    }
                    else {
                        $('#ApproveUnslReturnMsgModal').modal('show');
                        msg = "<div>Unsecured Loan " + finalmsg + "</div>";
                        $("#AppUnslMsg").html(msg);
                    }


                    //var msg = '';
                    //$('#ApproveUnslMsgModal').modal('show');
                    //msg = "<div>Unsecured Loan " + finalmsg+"</div>";
                    //$("#AppUnslMsg").html(msg);
                }
                else {
                    //msg = "<div>" + response.saveStatus + "</div>";
                    //$("#AppUnslMsg").html(msg);
                    //$('#ApproveUnslMsgModal').modal('show');


                    if (type === 'New') {
                        $('#ApproveUnslMsgModal').modal('show');
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppUnslMsg").html(msg);
                    }
                    else if (type === 'Existing') {
                        $('#ApproveUnslExistMsgModal').modal('show');
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppUnslMsg").html(msg);
                    }
                    else {
                        $('#ApproveUnslReturnMsgModal').modal('show');
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppUnslMsg").html(msg);
                    }
                }
            },
            failure: function (response) {
                //var msg = "<div>" + addFailMsg + "</div>";
                //$("#AppUnslMsg").html(msg);
                //$('#ApproveUnslMsgModal').modal('show');

                if (type === 'New') {
                    $('#ApproveUnslMsgModal').modal('show');
                    msg = "<div> " + addFailMsg + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else if (type === 'Existing') {
                    $('#ApproveUnslExistMsgModal').modal('show');
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else {
                    $('#ApproveUnslReturnMsgModal').modal('show');
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
            },
            error: function (response) {
                if (type === 'New') {
                    $('#ApproveUnslMsgModal').modal('show');
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else if (type === 'Existing') {
                    $('#ApproveUnslExistMsgModal').modal('show');
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else {
                    $('#ApproveUnslReturnMsgModal').modal('show');
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
            }
        });

    }
}
function CountFinalAmountForUpdate() {

    var final = $("#txtUpUnsLoanFinalAmount");
    var LoanAmount = $("#txtUpUnsLoanAmount").val();
    if (LoanAmount != "") {
        var total = parseFloat(LoanAmount);
        final.val(total);
    }
    else { final.val(0) }

}
function CheckReturnUpdateLoanDate() {

    var loantype = $("#apprType").val();
    if (loantype === "Existing" || loantype === "Return") {
        var loandate = $("#txtMainLoanDate").val();
        var returndate = $("#txtUpAdditionalDate").val();
        //alert("loandate:" + loandate + "---returndate:" + returndate);
        if (new Date(returndate) < new Date(loandate)) {

            if (loantype == "Existing") {
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").append("<div>Additional loan Date must be greater than Loan Date</div>");
                $("#divUnsLoanInfoMsg").addClass("alert-danger");
                $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");

            }
            else if (loantype == "Return") {
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").append("<div>Return Date must be greater than Loan Date</div>");
                $("#divUnsLoanInfoMsg").addClass("alert-danger");
                $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");

            }
        }
        else {
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");
            $("#txtUpUnsLoanPayDate").datepicker("option", "minDate", returndate);

        }

    }


}
function ValidateUpdateAmount(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode == 46) {
        if (txt.value.indexOf(".") < 0)
            return true;
        else
            return false;
    }
    if (txt.value.indexOf(".") > 0) {
        var txtlen = txt.value.length;
        var dotpos = txt.value.indexOf(".");
        if ((txtlen - dotpos) > 2)
            return false;
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function UnsLoanUpPayModeChange() {

    var loantype = $("#txtUpLoantype").val();
    if (loantype != "New") {
        var bank = $("#ddl_UpUnsLoanBank option:selected").text();
        var Mode = $("#ddl_UpUnsLoanPayMode option:selected").text();

        var bankindex = $("#ddl_UpUnsLoanBank option:selected").index();
        var Modeindex = $("#ddl_UpUnsLoanPayMode option:selected").index();

        if (Modeindex != 0 && bankindex != 0) {
            if (Modeindex == 1) {


                $("#ddl_UpUnsLoanPaymentNo").removeClass('hidden');
                $("#txtUpUnsLoanPaymentNo").addClass('hidden');
                $.ajax({
                    type: "POST",
                    url: "/Accounts/GetChequeNos",
                    data: '{bankname:"' + bank + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var count = Object.keys(response).length;
                        var rowcount = 0;
                        //alert("Cheques"+count);
                        var ddl_UnsLoanPaymentNo = $("#ddl_UpUnsLoanPaymentNo");
                        if (count > 0) {

                            ddl_UnsLoanPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                            $.each(response, function () {
                                ddl_UnsLoanPaymentNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                            });
                            $("#divUnsLoanInfoMsg").text("");
                            $("#divUnsLoanInfoMsg").addClass("hidden");
                        }
                        else { ddl_UnsLoanPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>'); }
                    },
                    failure: function (response) {
                    },
                    error: function (response) {
                    }
                });
            }
            else {
                $("#txtUpUnsLoanPaymentNo").removeClass('hidden');
                $("#ddl_UpUnsLoanPaymentNo").addClass('hidden');
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").addClass("hidden");
            }
        }
        else if (Modeindex == 0 && bankindex != 0) {
            $("#txtUpUnsLoanPaymentNo").removeClass('hidden');
            $("#ddl_UpUnsLoanPaymentNo").addClass('hidden');
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");

        }
        else if (Modeindex != 0 && bankindex == 0) {
            $("#txtUpUnsLoanPaymentNo").removeClass('hidden');
            $("#ddl_UpUnsLoanPaymentNo").addClass('hidden');

            $("#divUnsLoanInfoMsg").text("Select Bank Name");
            $("#divUnsLoanInfoMsg").addClass("alert-danger");
            $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");
            $("#divUnsLoanInfoMsg").prop('selectedIndex', 0);
        }
        else {
            $("#txtUpUnsLoanPaymentNo").removeClass('hidden');
            $("#ddl_UpUnsLoanPaymentNo").addClass('hidden');
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");

        }

    }
    else {

        $("#ddl_UpUnsLoanPaymentNo").addClass('hidden');
        $("#txtUpUnsLoanPaymentNo").removeClass('hidden');
    }


}

function UpdateUnsLoanData(TransactionRefno, type, no) {

    var errorMsg = "";
    isValid = true;
    var PerName = $("#txtUpUnsLoanPersonName").val();
    var LoanAmount = $("#txtUpUnsLoanAmount").val();
    var LoanDate;
    if (type == "New") {//new loan
        LoanDate = $("#txtUpUnsLoanDate").val();
    }
    else {
        LoanDate = $("#txtUpAdditionalDate").val();

    }

    if (LoanDate == "" || LoanDate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Loan Date</p>";
        isValid = false;
    }
    if (PerName == "" || PerName == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
        isValid = false;
    }
    if (LoanAmount == "" || LoanAmount == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Loan Amount</p>";
        isValid = false;
    }
    //if (Intrest == "" || Intrest == null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate of Interest</p>";
    //    isValid = false;
    //}

    if (type == "Existing") {//additional

        var LoanAdditionalAmount = $("#txtUpUnsLoanAmount").val();

        var Intrest = $("#txUptUnsLoanIntrest").val();
        if (LoanAdditionalAmount == "" || LoanAdditionalAmount == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Additional Loan Amount</p>";
            isValid = false;
        }
        if (Intrest == "" || Intrest == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate of Interest</p>";
            isValid = false;
        }
    }
    if (type == "Return") {//return
        //debugger;
        var LoanAdditionalAmount1 = $("#txtUpUnsLoanAmount").val();
        if (LoanAdditionalAmount1 == "" || LoanAdditionalAmount1 == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Loan Amount</p>";
            isValid = false;
        }
        else {
            var totalamount = $("#TotalLoanAmount").val();
            var returnamount = $("#txtUnsLoanAdditionalAmount").val();
            if (parseFloat(returnamount) > parseFloat(totalamount)) {
                errorMsg += "<p style='margin-top:-5px!important;'>Return Loan Amount is greater than loan amount</p>";
                isValid = false;
            }


        }
        //var deductionExist = $("#DeductionExist").val();
        //if (deductionExist == 1) { }
        if ($("#chkDedUnIntY").is(':checked') === true) {
            $("#UnloanDeductionTable tbody tr").each(function () {
                var currentRow = $(this);
                var Dca = currentRow.find("td").eq(0).find("select option:selected").index();
                var Sdca = currentRow.find("td").eq(1).find("select option:selected").index();
                var amount = currentRow.find("td").eq(2).find("input[type='text']").val();
                //if (Dca != 0 || Sdca != 0 || amount != "") {
                    if (Dca == 0 || Dca == null) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head</p>";
                        isValid = false;
                    }
                    if (Sdca == 0 || Sdca == null) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubAccount Head</p>";
                        isValid = false;
                    }
                    if (amount == "" || amount == null) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
                        isValid = false;
                    }
                //}
            });
        }


    }
    var Bank = $("#ddl_UpUnsLoanBank option:selected").index();
    var PayMode = $("#ddl_UpUnsLoanPayMode  option:selected").index();
    var PayDate = $("#txtUpUnsLoanPayDate").val();
    var PaymentNo = $("#txtUpUnsLoanPaymentNo").val();
    var Remarks = $("#txtUpUnsLoanReamarks").val();

    if (Bank == 0 || Bank == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        isValid = false;
    }
    if (PayMode == 0 || PayMode == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay</p>";
        isValid = false;
    }
    if (PayDate == "" || PayDate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Date</p>";
        isValid = false;
    }
    if (type == "Return" && PayMode == 1) {
        var ddlPayNo = $("#ddl_UnsLoanPaymentNo  option:selected").index();
        if (ddlPayNo == 0 || ddlPayNo == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>select  Cheque No</p>";
            isValid = false;
        }

    } else {
        if (PaymentNo == "" || PaymentNo == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Payment No</p>";
            isValid = false;
        }
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUnsLoanInfoMsg").text("");
        $("#divUnsLoanInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUnsLoanInfoMsg").addClass("alert-danger");
        $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUnsLoanInfoMsg").text("");
        $("#divUnsLoanInfoMsg").addClass("hidden");
        //submit data to db
        //  SaveNewUnsecuredLoan();
        UpdateLoanData(TransactionRefno, type, no);
    }

}
function UpdateLoanData(TransactionRefno, type, no) {

    var LoanType = type;
    var createdby = $("#txtAppUnlCreatedby").val();
    var newloan = "";
    var deddca = "", sdca = "", dcaamount = 0;
    var payno = 0;
    var paymode = $("#ddl_UpUnsLoanPayMode  option:selected").text();
    if (paymode === "Cheque") {
        payno = $("#ddl_UpUnsLoanPaymentNo option:selected").text();
    }
    else {
        payno = $("#txtUpUnsLoanPaymentNo").val();
    }
    var updatenewloan = {};
    if (LoanType === 'New') {
        updatenewloan = {
            LoanNo: no,
            LoanDate: $("#txtUpUnsLoanDate").val(),
            Name: $("#txtUpUnsLoanPersonName").val(),
            LoanAmount: $("#txtUpUnsLoanAmount").val(),
            BankID: $("#ddl_UpUnsLoanBank option:selected").val(),
            ModeofPay: $("#ddl_UpUnsLoanPayMode  option:selected").val(),
            UnsLoanPaymentNo: $("#txtUpUnsLoanPaymentNo").val(),
            PaymentDate: $("#txtUpUnsLoanPayDate").val(),
            LoanfinalAmount: $("#txtUpUnsLoanFinalAmount").val(),
            Remarks: $("#txtUpUnsLoanReamarks").val(),
            Createdby: createdby,
            LoanType: $("#txtUpLoantype").val(),
            RateOfIntrest: $("#txUptUnsLoanIntrest").val(),
            Roleid: $("#txtupdateunsecuredloanRoleId").val(),
            BankTransactionRefNo: TransactionRefno
        };

    } else if (LoanType === 'Existing') {

        updatenewloan = {
            LoanNo: no,
            LoanDate: $("#txtUpAdditionalDate").val(),
            Name: $("#txtUpUnsLoanPersonName").val(),
            LoanAmount: $("#txtUpUnsLoanAmount").val(),
            BankID: $("#ddl_UpUnsLoanBank option:selected").val(),
            ModeofPay: $("#ddl_UpUnsLoanPayMode  option:selected").val(),
            UnsLoanPaymentNo: payno,
            PaymentDate: $("#txtUpUnsLoanPayDate").val(),
            LoanfinalAmount: $("#txtUpUnsLoanFinalAmount").val(),
            Remarks: $("#txtUpUnsLoanReamarks").val(),
            Createdby: createdby,
            LoanType: $("#txtUpLoantype").val(),
            RateOfIntrest: $("#txUptUnsLoanIntrest").val(),
            Roleid: $("#txtupdateunsecuredloanRoleId").val(),
            BankTransactionRefNo: TransactionRefno
        };


    }
    else if (LoanType === 'Return') {
        if ($("#chkDedUnIntY").is(':checked') === true) {
            $("#UnloanDeductionTable tbody tr").each(function () {
                var currentRow = $(this);
                var dca = currentRow.find("td").eq(0).find("select option:selected").index();
                var ddlSDCA = currentRow.find("td").eq(1).find("select option:selected").index();
                var amount = currentRow.find("td").eq(2).find("input[type='text']").val();

                if (dca !== 0 || ddlSDCA !== 0 || dcaamount !== "") {
                    deddca = currentRow.find("td").eq(0).find("select option:selected").val();
                    sdca = currentRow.find("td").eq(1).find("select option:selected").val();
                    dcaamount = amount;
                }

            });
        }
        updatenewloan = {
            LoanNo: no,
            LoanDate: $("#txtUpAdditionalDate").val(),
            Name: $("#txtUpUnsLoanPersonName").val(),
            LoanAmount: $("#txtUpUnsLoanAmount").val(),
            BankID: $("#ddl_UpUnsLoanBank option:selected").val(),
            ModeofPay: $("#ddl_UpUnsLoanPayMode  option:selected").val(),
            UnsLoanPaymentNo: payno,
            PaymentDate: $("#txtUpUnsLoanPayDate").val(),
            LoanfinalAmount: $("#txtUpUnsLoanFinalAmount").val(),
            Remarks: $("#txtUpUnsLoanReamarks").val(),
            Createdby: createdby,
            LoanType: $("#txtUpLoantype").val(),
            BankTransactionRefNo: TransactionRefno,
            DeductionDCA: deddca,
            DeductionSDCA: sdca,
            Roleid: $("#txtupdateunsecuredloanRoleId").val(),
            DeductionAmount: dcaamount
        };
    }
    addFailMsg = "Error Occurred While Updating Unsecured Loan.";
    addSuccessMsg = " Unsecured Loan Updated Successfully.";
    debugger;
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/AccountsApproval/UpdateUnsecuredLoan1',
        data: { updateUnsLoan: updatenewloan },
        success: function (Data) {
            // alert("Hi");
            if (Data.saveStatus == "Updated") {
                var msg = '';
                //$('#ApproveUnslMsgModal').modal('show');
                //msg = "<div>Unsecured Loan Updated Successfully</div>";
                //$("#AppUnslMsg").html(msg);
                if (type == 'New') {
                    $('#ApproveUnslMsgModal').modal('show');
                    msg = "<div>Unsecured Loan Updated Successfully</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else if (type == 'Existing') {
                    $('#ApproveUnslExistMsgModal').modal('show');
                    msg = "<div>Unsecured Loan Updated Successfully</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else {
                    $('#ApproveUnslReturnMsgModal').modal('show');
                    msg = "<div>Unsecured Loan Updated Successfully</div>";
                    $("#AppUnslMsg").html(msg);
                }
            }
            else {
                //msg = "<div>" + Data.saveStatus + "</div>";
                //$("#AppUnslMsg").html(msg);
                //$('#ApproveUnslMsgModal').modal('show');
                if (type === 'New') {
                    $('#ApproveUnslMsgModal').modal('show');
                    msg = "<div>" + Data.saveStatus + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else if (type === 'Existing') {
                    $('#ApproveUnslExistMsgModal').modal('show');
                    msg = "<div>" + Data.saveStatus + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
                else {
                    $('#ApproveUnslReturnMsgModal').modal('show');
                    msg = "<div>" + Data.saveStatus + "</div>";
                    $("#AppUnslMsg").html(msg);
                }
            }
        },
        failure: function (response) {
            if (Type === 'New') {
                $('#ApproveUnslMsgModal').modal('show');
                msg = "<div>" + addFailMsg + "</div>";
                $("#AppUnslMsg").html(msg);
            }
            else if (Type === 'Existing') {
                $('#ApproveUnslExistMsgModal').modal('show');
                msg = "<div>" + addFailMsg + "</div>";
                $("#AppUnslMsg").html(msg);
            }
            else {
                $('#ApproveUnslReturnMsgModal').modal('show');
                msg = "<div>" + addFailMsg + "</div>";
                $("#AppUnslMsg").html(msg);
            }
        },
        error: function (response) {
            if (Type === 'New') {
                $('#ApproveUnslMsgModal').modal('show');
                msg = "<div>" + addFailMsg + "</div>";
                $("#AppUnslMsg").html(msg);
            }
            else if (Type === 'Existing') {
                $('#ApproveUnslExistMsgModal').modal('show');
                msg = "<div>" + addFailMsg + "</div>";
                $("#AppUnslMsg").html(msg);
            }
            else {
                $('#ApproveUnslReturnMsgModal').modal('show');
                msg = "<div>" + addFailMsg + "</div>";
                $("#AppUnslMsg").html(msg);
            }
        }
    });

}
function CountUpdateCountLoanFinalAmount() {
    var loantype = $("#txtUpLoantype").val();   
    if (loantype === "Existing") {
        //var final = $("#AdditionalTotal").val();
        var AdditionalAmount = $("#txtUpUnsLoanAmount").val();
        //var total = 0;
        if (AdditionalAmount !== "") {
            // total = parseFloat(final) - parseFloat(AdditionalAmount);
            $("#txtUpUnsLoanFinalAmount").val(parseFloat(AdditionalAmount));
        }
        else { $("#txtUpUnsLoanFinalAmount").val(0); }
    }
    else if (loantype === "Return") {
        var amount = $("#txtUpUnsLoanAmount").val();
        var Dedtotal = 0;
        var total = 0;
        if (!isNaN(amount)) {
            if ($("#chkDedUnIntY").is(':checked') === true) {
                $("#UnloanDeductionTable tbody tr").each(function () {

                    var currentRow = $(this);
                    // Dedtotal = currentRow.find("td").eq(2).find("input[type='text']").val();
                    var rowtotal = currentRow.find("td").eq(2).find("input[type='text']").val();
                    if (!isNaN(rowtotal)) {
                        Dedtotal = parseFloat(Dedtotal) + parseFloat(rowtotal);
                    }
                });
            }
            if (!isNaN(Dedtotal)) {
                    if (parseFloat(Dedtotal) > parseFloat(amount)) {
                        $("#divUnsLoanInfoMsg").text("");
                        $("#divUnsLoanInfoMsg").append("<div>Deduction amount should not be greater than  return amount</div>");
                        $("#divUnsLoanInfoMsg").addClass("alert-danger");
                        $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");

                    }
                    else {
                        total = parseFloat(amount) - parseFloat(Dedtotal);
                        $("#txtUpUnsLoanFinalAmount").val(parseFloat(total).toFixed(2));
                        $("#divUnsLoanInfoMsg").text("");
                        $("#divUnsLoanInfoMsg").addClass("hidden");
                    }
                }
                else {

                    $("#txtUpUnsLoanFinalAmount").val(parseFloat(amount).toFixed(2));
                    $("#divUnsLoanInfoMsg").text("");
                    $("#divUnsLoanInfoMsg").addClass("hidden");
                }
            
        }        
        else {
            $("#txtUnsLoanFinalAmount").val(0);
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");
        }
    }
    else if (loantype === "New") {
        var newamount = $("#txtUpUnsLoanAmount").val();
        if (newamount !== "") { $("#txtUpUnsLoanFinalAmount").val(parseFloat(newamount).toFixed(2)); }
        else { $("#txtUpUnsLoanFinalAmount").val(""); }
    }
}
function ApproveOpenfd(Transactionno) {
    // alert(Transactionno);

    var appstatus = $("#Appropenfdstatus option:selected").text();
    retnote = $("#AppropenfdNote").val();
    msg = $("#divApproepnfdInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>"; 
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyOpenfd = {
            BankTransactionRefNo: Transactionno,
            Action: appstatus,
            Roleid: $("#roleid").val(),
            ApprovalNote: retnote,
            Createdby: $("#txtAppofdCreatedby").val(),
            Bankid: $("#ApprOpenfdbankid").val(),
            PaymentAmount: $("#Apprfdtransamount").val(),
            ReturnFromDate: $("#apprfdfromdate").val(),
        };
        //addFailMsg = "Error Occurred While Open FD Verification";
        //addSuccessMsg = "General Payment  Verified Successfully.";

        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveOpenFD",
            data: JSON.stringify({ apprfd: verifyOpenfd }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    var msg = '';
                    $('#ApproveofdMsgModal').modal('show');
                    msg = "<div>Open FD " + finalmsg+"</div>";
                    $("#AppofdMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppofdMsg").html(msg);
                    $('#ApproveofdMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppofdMsg").html(msg);
                $('#ApproveofdMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppofdMsg").html(msg);
                $('#ApproveofdMsgModal').modal('show');
            }
        });

    }

}
function UpdateOpenfdData(TransactionRefno) {
    var fromdate = $("#txtfdfromdate").val();
    var todate = $("#txtfdtodate").val();
    var fdrno = $("#txtfdrnos").val();
    var fdrroi = $("#txtfdrroi").val();
    var fdramount = $("#txtfdramount").val();
    var bank = $("#ddl_fdrpaymentbank option:selected").index();
    var modeofpay = $("#ddl_FDPaymentMode option:selected").index();
    var paymentdate = $("#txtFDRPaymentDate").val();
    var remarks = $("#txtFDRRemarks").val();
    var amount = $("#txtFDRAmount").val();
    var errorMsg = "";
    isValid = true;
    if (fdrno == "" || fdrno == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter FD No</p>";
        isValid = false;
    }
    if (fromdate == "" || fromdate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select From Date</p>";
        isValid = false;
    }
    if (todate == "" || todate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select To Date </p>";
        isValid = false;
    }

    if (fdrroi == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate of Interst</p>";
        isValid = false;
    }
    if (fdramount == 0 || fdramount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter FD Amount </p>";
        isValid = false;
    }
    if (bank == 0 || bank == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        isValid = false;
    }
    if (modeofpay == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay</p>";
        isValid = false;
    }
    var no = $("#txtfdchqNo").val();
    if (no == "" || no == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter No</p>";
        isValid = false;
    }

    if (paymentdate == "" || paymentdate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Date</p>";
        isValid = false;
    }
    if (remarks == "" || remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (amount == "0.00" || amount == "" || amount == "0.0" || amount == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divFDRInfoMsg").text("");
        $("#divFDRInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divFDRInfoMsg").addClass("alert-danger");
        $("#divFDRInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divFDRInfoMsg").text("");
        $("#divFDRInfoMsg").addClass("hidden");

        var updateFD = {
            FDRNo: $("#txtfdrnos").val(),
            FDRFromDate: $("#txtfdfromdate").val(),
            FDRClosingDate: $("#txtfdtodate").val(),
            FDRAmount: $("#txtfdramount").val(),
            FDRTotalAmount: $("#txtFDRAmount").val(),
            FDRROI: $("#txtfdrroi").val(),
            Createdby: $("#txtAppofdCreatedby").val(),
            Bankid: $("#ddl_fdrpaymentbank option:selected").val(),
            Remarks: $("#txtFDRRemarks").val(),
            ModeofPay: $("#ddl_FDPaymentMode option:selected").val(),
            No: $("#txtfdchqNo").val(),
            PaymentDate: $("#txtFDRPaymentDate").val(),
            Action: 'Update',
            Roleid: $("#roleid").val(),
            BankTransactionRefNo: TransactionRefno
        };
        addFailMsg = "Error Occurred While Updating OpenFD";
        addSuccessMsg = "Open FD Detials Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateOpenFD",
            data: JSON.stringify({ updateopenfd: updateFD }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Updated") {
                    var msg = '';
                    $('#ApproveofdMsgModal').modal('show');
                    msg = "<div>Fixed Deposit Updated Successfully</div>";
                    $("#AppofdMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppofdMsg").html(msg);
                    $('#ApproveofdMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppofdMsg").html(msg);
                $('#ApproveofdMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppofdMsg").html(msg);
                $('#ApproveofdMsgModal').modal('show');
            }
        });
    }


}
function ApprovePartialFDData(Transactionno, type) {

    var appstatus = $("#Apprpfdstatus option:selected").text();
    retnote = $("#ApprpfdNote").val();
    msg = $("#divApprpfdInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var capitalcc = 'CCC';
        var DeductionDca = "", DeductionSdca = "", DeductionAmount = "";
        $("#FDParCloseDedTable tbody tr").each(function () {
            var currentRow = $(this);
            var deddca = currentRow.find("td").eq(0).html();
            var dedsdca = currentRow.find("td").eq(1).html();
            var dedamount = currentRow.find("td").eq(2).html();
            DeductionDca += deddca + ",";
            DeductionSdca += dedsdca + ",";
            DeductionAmount += dedamount + ",";

        });
        
        var deductiontotal = $("#Apprpfddeductiontotal").val();

        if (deductiontotal === "" || deductiontotal === null) { deductiontotal = 0;}
        var MatIntTotal = parseFloat($("#txtMaturityamount").val())+parseFloat($("#txtfdParcloseInterest").val());
        var totalfd = parseFloat(MatIntTotal) - parseFloat(deductiontotal);

        var verifypartialfd = {
            BankTransactionRefNo: Transactionno,
            Action: appstatus,
            ApprovalNote: retnote,
            Bankid: $("#Apprpfdbankid").val(),
            Roleid: $("#roleid").val(),
            Createdby: $("#Apprpcreatedby").val(),
            PaymentAmount: $("#txtFDpclAmount").val(),
            FDRClosingDate: $("#txtFdPClosedate").val(),
            DedDcas: DeductionDca,
            DedSDcas: DeductionSdca,
            DedAmounts: DeductionAmount,
            Capitalcc: capitalcc,
            FDRNo: $("#txtfdrno").val(),
            Fdtype: type,
            //Amount: $("#txtMaturityamount").val()
            Amount: totalfd
        };
      
    
        //addFailMsg = "Error Occurred While  Verification";
        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        if (type === "Partial") {
            $.ajax({
                type: "POST",
                url: "/AccountsApproval/ApprovePartialFD",
                data: JSON.stringify({ apprPfd: verifypartialfd }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    //alert('Partial-' + response.saveStatus);
                    //debugger;
                    $('#ApprovePfdMsgModal').modal('show'); 
                    
                    if (response.saveStatus === "Submitted") {
                        var msg = '';
                        $('#ApprovePfdMsgModal').modal('show');
                        msg = "<div>FD " + finalmsg+"</div>";
                        $("#ApppfdMsg").html(msg);
                    }
                    else {
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#ApppfdMsg").html(msg);
                        $('#ApprovePfdMsgModal').modal('show');
                    }
                },
                failure: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApppfdMsg").html(msg);
                    $('#ApprovePfdMsgModal').modal('show');
                },
                error: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApppfdMsg").html(msg);
                    $('#ApprovePfdMsgModal').modal('show');
                }
            });
        }
        else {
            $.ajax({
                type: "POST",
                url: "/AccountsApproval/ApprovePartialFD",
                data: JSON.stringify({ apprPfd: verifypartialfd }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.saveStatus === "Submitted") {
                        //alert('Closed-' + response.saveStatus);
                        //debugger;
                        var msg = '';
                        $('#ApproveClfdMsgModal').modal('show');
                        msg = "<div>FD " + finalmsg + "</div>";
                        $("#AppClfdMsg").html(msg);
                    }
                    else {
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppClfdMsg").html(msg);
                        $('#ApproveClfdMsgModal').modal('show');
                    }
                },
                failure: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppClfdMsg").html(msg);
                    $('#ApproveClfdMsgModal').modal('show');
                },
                error: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppClfdMsg").html(msg);
                    $('#ApproveClfdMsgModal').modal('show');
                }
            });

        }

    }
}
function UpdatePartialFDData(Transactionrefno, type) {
    // alert(Transactionrefno);    
    isValid = true;
    var errorMsg = "";
    var closedate = $("#txtFdPClosedate").val();
    var maturityamount = $("#txtfdParcloseMaturityAmount").val();
    var interst = $("#txtfdParcloseMaturityAmount").val();
    var modepay = $("#ddlFdpclPayMode option:selected").index();
    var paymentdate = $("#txtfdpPaymentDate").val();
    var no = $("#txtfdpclchqNo").val();
    var remarks = $("#txtFDpclRemarks").val();
    var frmdate = $("#begindate").val();
    var balance = $("#txtfdPclosebalamount").val();

    if (closedate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Closing Date</p>";
        isValid = false;
    }
    //else {
    //    var closedate1 = moment(closedate, "DD-MMM-YYYY").format('DD-MM-YYYY');
    //    var frmdate1 = moment(frmdate, "DD-MMM-YYYY").format('DD-MM-YYYY');
    //    if (closedate1 < frmdate1) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Closing Date Must Be Greater Than FD Open Date</p>";
    //        isValid = false;
    //    }
    //}

    if (maturityamount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Maturity Amount</p>";
        isValid = false;
    }
    else {
        if (parseFloat(balance) < parseFloat(maturityamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Invalid Maturity Amount</p>";
            isValid = false;
        }
        else if ((parseFloat(balance) != parseFloat(maturityamount)) && type === 'Close') {
            errorMsg += "<p style='margin-top:-5px!important;'>Maturity Amount is less than Balance</p>";
            isValid = false;

        }

    }
    if (interst == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Interest</p>";
        isValid = false;
    }
    if (modepay == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        isValid = false;
    }

    if (no == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Number</p>";
        isValid = false;
    }
    if (paymentdate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Date</p>";
        isValid = false;
    }
    //else {
    //    //debugger;
    //    closedate1 = moment(closedate, "DD-MMM-YYYY").format('MM-DD-YYYY');
    //    var paydate1 = moment(paymentdate, "DD-MMM-YYYY").format('MM-DD-YYYY');
    //    if (closedate1 >= paydate1) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Payment Date Must Be Greater Than Closing Date</p>";
    //        isValid = false;
    //    }
    //}
    if (remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    var fdvalue = $("#txtFDpclAmount").val();
    if (fdvalue < 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amounts</p>";
        isValid = false;
    }


    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divFDPArClInfoMsg").text("");
        $("#divFDPArClInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divFDPArClInfoMsg").addClass("alert-danger");
        $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divFDPArClInfoMsg").text("");
        $("#divFDPArClInfoMsg").addClass("hidden");
        if ($("#chkDedFDPerY").is(':checked') === true) {
            var dcacount = 0, sdcacount = 0, amountcount = 0, chkcount = 0;
            $("#FDParCloseDedTable tbody tr").each(function () {
                var currentRow = $(this);

                var dca = currentRow.find("td").eq(1).find("select option:selected").index();
                var sdca = currentRow.find("td").eq(2).find("select option:selected").index();
                var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
                var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
                //if (dca != 0 || sdca != 0 || amount != "" || checkbox == true) {
                    if (amount === "") { amountcount = amountcount + 1; }
                    if (dca === 0) { dcacount = dcacount + 1; }
                    if (sdca === 0) { sdcacount = sdcacount + 1; }
                    if (checkbox === false) { chkcount = chkcount + 1; }
               // }
            });

            if (dcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head</p>";
                isValid = false;
            }
            if (sdcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubAccount  Head</p>";
                isValid = false;
            }
            if (amountcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
                isValid = false;
            }
            if (chkcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Verify Deduction Account Head</p>";
                isValid = false;
            }
            if (!isValid) {
                var finalerror2 = "<div style='align:center'><p>Please enter all required fields!</p>";
                $("#divFDPArClInfoMsg").text("");
                $("#divFDPArClInfoMsg").append(finalerror2 + errorMsg + "</div>");
                $("#divFDPArClInfoMsg").addClass("alert-danger");
                $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divFDPArClInfoMsg").text("");
                $("#divFDPArClInfoMsg").addClass("hidden");
                var selecteddcalist = [];
                $("#FDParCloseDedTable tbody tr").each(function () {
                    var currentRow = $(this);
                    var deddca = currentRow.find("td").eq(1).find("select option:selected").val();
                    var dedsdca = currentRow.find("td").eq(2).find("select option:selected").val();
                  //  if (deddca !== 0) {
                    selecteddcalist.push(deddca + ',' + dedsdca);
                        // alert(currentRow.find("td").eq(2).find("select option:selected").val());
                    //}
                });
                var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    var finalerror3 = "<div style='align:center'><p> Duplicate AccountHead for Deduction</p>";
                    $("#divFDPArClInfoMsg").text("");
                    $("#divFDPArClInfoMsg").append(finalerror3 + "</div>");
                    $("#divFDPArClInfoMsg").addClass("alert-danger");
                    $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
                else {
                    var fdtranstype = $('#ddl_FDTransactiontype option:selected').index();

                    var DeductionDca = "", DeductionSdca = "", DeductionAmount = "";
                    $("#FDParCloseDedTable tbody tr").each(function () {
                        var currentRow = $(this);
                        var deddca = currentRow.find("td").eq(1).find("select option:selected").val();
                        var dedsdca = currentRow.find("td").eq(2).find("select option:selected").val();
                        var dedamount = currentRow.find("td").eq(3).find("input[type='text']").val();
                        var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
                        if (deddca != 0 && dedsdca != 0 && dedamount != "" && checkbox == true) {
                            DeductionDca += deddca + ",";
                            DeductionSdca += dedsdca + ",";
                            DeductionAmount += dedamount + ",";
                        }
                    });
                    //var capitalcc = 'CCC', Paymenttype = '', typefd = '';
                    var Paymenttype = '', typefd = '';
                    var ParIntCC, ParIntdca, ParIntsdca, ParIntITcod;
                    var Principledca, Principlesdca, PrincipleITcode;
                    if (type === 'Partial') { typefd = 'Partial'; Paymenttype = 'FDPartial'; }
                    else { typefd = 'Close'; Paymenttype = 'FDClose'; }

                    
                    var updatePartialFD = {
                        FDRNo: $("#Updatepfdrno").val(),
                        Createdby: $("#txtfdcreatedby").val(),
                        BankName: $("#txtfdPclPayBank").val(),
                        Remarks: $("#txtFDpclRemarks").val(),
                        PaymentModeofPay: $("#ddlFdpclPayMode option:selected").text(),
                        PaymentNo: $("#txtfdpclchqNo").val(),
                        PaymentDate: $("#txtfdpPaymentDate").val(),
                        DedDcas: DeductionDca,
                        DedSDcas: DeductionSdca,
                        DedAmounts: DeductionAmount,
                        FDRClosingDate: $("#txtFdPClosedate").val(),
                        FDRAmount: $("#txtfdParcloseMaturityAmount").val(),
                        FDRROI: $("#txtfdParcloseInterest").val(),
                        //Capitalcc: capitalcc,
                        Status: '1',
                        PaymenttypeName: Paymenttype,
                        //ParIntcc: $("#txtfdIntCC").val(),
                        //ParIntdca: $("#txtfdIntDca").val(),
                        //ParIntsdca: $("#txtfdIntSdca").val(),
                        //ParIntitcode: $("#txtfdIntIt").val(),
                        //Principledca: $("#txtfdPriDca").val(),
                        //Principlesdca: $("#txtfdPriSdca").val(),
                        //Principleitcode: $("#txtfdPriIt").val(),
                        BankTransactionRefNo: Transactionrefno,
                        OldFDRAmount: $("#Updatepoldamount").val(),
                        Roleid: $("#txtpartialRoleId").val(),
                        Fdtype: type,
                        PaymentAmount: $("#txtFDpclAmount").val()
                    };
                    addFailMsg = "Error Occurred While Updating  FixedDeposit";
                    addSuccessMsg = "Partial FD Detials Updated Successfully.";
                    //alert(type);
                    //debugger;
                    if (type === 'Partial') {
                        $.ajax({
                            type: "POST",
                            url: "/AccountsApproval/UpdateParitalFD1",
                            data: JSON.stringify({ fdPay: updatePartialFD }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (response) {
                                //alert(response.saveStatus);
                                if (response.saveStatus === "Updated") {
                                    var msg = '';
                                    $('#ApprovePfdMsgModal').modal('show');
                                    msg = "<div>Updated Successfully</div>";
                                    $("#ApppfdMsg").html(msg);
                                }
                                else {
                                    msg = "<div>" + response.saveStatus + "</div>";
                                    $("#ApppfdMsg").html(msg);
                                    $('#ApprovePfdMsgModal').modal('show');
                                }
                            },
                            failure: function (response) {
                                var msg = "<div>" + addFailMsg + "</div>";
                                $("#ApppfdMsg").html(msg);
                                $('#ApprovePfdMsgModal').modal('show');
                            },
                            error: function (response) {
                                var msg = "<div>" + addFailMsg + "</div>";
                                $("#ApppfdMsg").html(msg);
                                $('#ApprovePfdMsgModal').modal('show');
                            }

                        });
                    }
                    else {
                        $.ajax({
                            type: "POST",
                            url: "/AccountsApproval/UpdateParitalFD",
                            data: JSON.stringify({ fdPay: updatePartialFD }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (response) {
                                if (response.saveStatus === "Updated") {
                                    var msg = '';
                                    $('#ApproveClfdMsgModal').modal('show');
                                    msg = "<div>FD Closed Successfully</div>";
                                    $("#AppClfdMsg").html(msg);
                                }
                                else {
                                    msg = "<div>" + response.saveStatus + "</div>";
                                    $("#AppClfdMsg").html(msg);
                                    $('#ApproveClfdMsgModal').modal('show');
                                }
                            },
                            failure: function (response) {
                                var msg = "<div>" + addFailMsg + "</div>";
                                $("#AppClfdMsg").html(msg);
                                $('#ApproveClfdMsgModal').modal('show');
                            },
                            error: function (response) {
                                var msg = "<div>" + addFailMsg + "</div>";
                                $("#AppClfdMsg").html(msg);
                                $('#ApproveClfdMsgModal').modal('show');
                            }

                        });
                    }

                }
            }
        } else {

            var DeductionDca1 = "", DeductionSdca1 = "", DeductionAmount1 = "";
            var Paymenttype1 = '', typefd1 = '';
            //var ParIntCC1, ParIntdca1, ParIntsdca1, ParIntITcod1;
            //var Principledca1, Principlesdca1, PrincipleITcode1;
            if (type === 'Partial') { typefd = 'Partial'; Paymenttype1 = 'FDPartial'; }
            else { typefd = 'Close'; Paymenttype1 = 'FDClose'; }


            var updatePartialFD1 = {
                FDRNo: $("#Updatepfdrno").val(),
                Createdby: $("#txtfdcreatedby").val(),
                BankName: $("#txtfdPclPayBank").val(),
                Remarks: $("#txtFDpclRemarks").val(),
                PaymentModeofPay: $("#ddlFdpclPayMode option:selected").text(),
                PaymentNo: $("#txtfdpclchqNo").val(),
                PaymentDate: $("#txtfdpPaymentDate").val(),
                DedDcas: DeductionDca1,
                DedSDcas: DeductionSdca1,
                DedAmounts: DeductionAmount1,
                FDRClosingDate: $("#txtFdPClosedate").val(),
                FDRAmount: $("#txtfdParcloseMaturityAmount").val(),
                FDRROI: $("#txtfdParcloseInterest").val(),
                //Capitalcc: capitalcc,
                Status: '1',
                PaymenttypeName: Paymenttype1,
                //ParIntcc: $("#txtfdIntCC").val(),
                //ParIntdca: $("#txtfdIntDca").val(),
                //ParIntsdca: $("#txtfdIntSdca").val(),
                //ParIntitcode: $("#txtfdIntIt").val(),
                //Principledca: $("#txtfdPriDca").val(),
                //Principlesdca: $("#txtfdPriSdca").val(),
                //Principleitcode: $("#txtfdPriIt").val(),
                BankTransactionRefNo: Transactionrefno,
                OldFDRAmount: $("#Updatepoldamount").val(),
                Roleid: $("#txtpartialRoleId").val(),
                Fdtype: type,
                PaymentAmount: $("#txtFDpclAmount").val()
            };
            addFailMsg = "Error Occurred While Updating  FixedDeposit";
            addSuccessMsg = "Partial FD Detials Updated Successfully.";
           // alert(type);
            if (type === 'Partial') {
                $.ajax({
                    type: "POST",
                    url: "/AccountsApproval/UpdateParitalFD",
                    data: JSON.stringify({ fdPay: updatePartialFD1 }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        //alert(response.saveStatus);
                        if (response.saveStatus === "Updated") {
                            var msg = '';
                            $('#ApprovePfdMsgModal').modal('show');
                            msg = "<div>Updated Successfully</div>";
                            $("#ApppfdMsg").html(msg);
                        }
                        else {
                            msg = "<div>" + response.saveStatus + "</div>";
                            $("#ApppfdMsg").html(msg);
                            $('#ApprovePfdMsgModal').modal('show');
                        }
                    },
                    failure: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#ApppfdMsg").html(msg);
                        $('#ApprovePfdMsgModal').modal('show');
                    },
                    error: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#ApppfdMsg").html(msg);
                        $('#ApprovePfdMsgModal').modal('show');
                    }

                });
            }
            else {
                $.ajax({
                    type: "POST",
                    url: "/AccountsApproval/UpdateParitalFD",
                    data: JSON.stringify({ fdPay: updatePartialFD }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.saveStatus === "Updated") {
                            var msg = '';
                            $('#ApproveClfdMsgModal').modal('show');
                            msg = "<div>FD Closed Successfully</div>";
                            $("#AppClfdMsg").html(msg);
                        }
                        else {
                            msg = "<div>" + response.saveStatus + "</div>";
                            $("#AppClfdMsg").html(msg);
                            $('#ApproveClfdMsgModal').modal('show');
                        }
                    },
                    failure: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppClfdMsg").html(msg);
                        $('#ApproveClfdMsgModal').modal('show');
                    },
                    error: function (response) {
                        var msg = "<div>" + addFailMsg + "</div>";
                        $("#AppClfdMsg").html(msg);
                        $('#ApproveClfdMsgModal').modal('show');
                    }
                });
            }
        }

    }
}
function ApproveFDIntData(Transno, Bankid) {
    //alert(Transno + "--" + Bankid);
    var appstatus = $("#Apprfdistatus option:selected").text();
    retnote = $("#ApprfdiNote").val();
    msg = $("#divFDIntInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var capitalcc = $("#txtIntCC").val();
        var DeductionDca = "", DeductionSdca = "", DeductionAmount = "";
        $("#FDIntDedTable tbody tr").each(function () {
            var currentRow = $(this);
            var deddca = currentRow.find("td").eq(1).html();
            var dedsdca = currentRow.find("td").eq(2).html();
            var dedamount = currentRow.find("td").eq(3).html();
            DeductionDca = deddca;
            DeductionSdca = dedsdca;
            DeductionAmount = dedamount;
        });
        var verifyfdInt = {
            BankTransactionRefNo: Transno,
            Action: appstatus,
            ApprovalNote: retnote,
            Bankid: Bankid,
            Roleid: $("#roleid").val(),
            Createdby: $("#txtApppfdiCreatedby").val(),
            IntAmount: $("#txtFDIntAmount").val(),
            IntDate: $("#txtFdIntdate").val(),
            DedDcas: DeductionDca,
            ParIntcc: capitalcc,
            FDRAmount: DeductionAmount


        };
        //addFailMsg = "Error Occurred While  Verification";
        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveFDInterest",
            data: JSON.stringify({ apprfdInt: verifyfdInt }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    var msg = '';
                    $('#ApprovefdiMsgModal').modal('show');
                    msg = "<div>FD " + finalmsg+"</div>";
                    $("#AppfdiMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppfdiMsg").html(msg);
                    $('#ApprovefdiMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppfdiMsg").html(msg);
                $('#ApprovefdiMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppfdiMsg").html(msg);
                $('#ApprovefdiMsgModal').modal('show');
            }
        });



    }
}
function UpdateFDIntData(TransactionRefno) {
    // alert(TransactionRefno);
    isValid = true;
    var errorMsg = "";
    var Intdate = $("#txtFdIntdate").val();
    var Intamount = $("#txtFDIntAmount").val();
    var Bank = $("#ddlfdIntpaymentbank option:selected").index();
    var modepay = $("#ddlFdIntPayMode option:selected").index();
    var no = $("#txtfdIntchqNo").val();
    var paydate = $("#txtFDIPayDate").val();
    var remarks = $("#txtFDIntRemarks").val();
     let dedamount = $("#txtDedAmt").val();
    if (Intdate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Interest Date</p>";
        isValid = false;
    }
    if (Intamount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Interest Amount</p>";
        isValid = false;
    }
    if (Bank == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        isValid = false;
    }
    if (modepay == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        isValid = false;
    }
    if (no == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Number</p>";
        isValid = false;
    }
    if (paydate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Date</p>";
        isValid = false;
    }
    if (remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    var total = $("#txtFDIPayAmount").val();
    if (total < 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amounts</p>";
        isValid = false;

    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divFDIntInfoMsg").text("");
        $("#divFDIntInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divFDIntInfoMsg").addClass("alert-danger");
        $("#divFDIntInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divFDIntInfoMsg").text("");
        $("#divFDIntInfoMsg").addClass("hidden");
        //var ccount = 0, dcacount = 0, sdcacount = 0, amountcount = 0;
        //$("#FDIntDedTable tbody tr").each(function () {
        //    var currentRow = $(this);
        //    var cc = currentRow.find("td").eq(1).find("select option:selected").index();
        //    var dca = currentRow.find("td").eq(2).find("select option:selected").index();
        //    var sdca = currentRow.find("td").eq(3).find("select option:selected").index();
        //    var amount = currentRow.find("td").eq(4).find("input[type='text']").val();
        //    var check = currentRow.find("td").eq(5).find('input[type="checkbox"]').is(':checked');
        //    //debugger;
        //    if (dca != 0 || sdca != 0 || amount != "" || cc != 0 || check == true) {
        //        if (amount == "") { amountcount = amountcount + 1; }
        //        if (dca == 0) { dcacount = dcacount + 1; }
        //        if (sdca == 0) { sdcacount = sdcacount + 1; }
        //        if (cc == 0) { ccount = ccount + 1; }
        //    }
        //});
        //if (ccount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Cost Center</p>";
        //    isValid = false;
        //}
        //if (dcacount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head</p>";
        //    isValid = false;
        //}
        //if (sdcacount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubAccount  Head</p>";
        //    isValid = false;
        //}
        //if (amountcount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
        //    isValid = false;
        //}
        if ($("#chkDedFDIntY").is(':checked') === true) {

            if (dedamount == "" || dedamount === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
                isValid = false;
            }
        }
        if (!isValid) {
            var finalerror2 = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divFDIntInfoMsg").text("");
            $("#divFDIntInfoMsg").append(finalerror2 + errorMsg + "</div>");
            $("#divFDIntInfoMsg").addClass("alert-danger");
            $("#divFDIntInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divFDIntInfoMsg").text("");
            $("#divFDIntInfoMsg").addClass("hidden");
            // Submit FD interest data to db

            var deductioncc = '', deductiondca = '', deductionsdca = '', deductionamount = '';
            //$("#FDIntDedTable tbody tr").each(function () {
            //    var currentRow = $(this);
            //    var cc = currentRow.find("td").eq(1).find("select option:selected").text();
            //    var dca = currentRow.find("td").eq(2).find("select option:selected").val();
            //    var sdca = currentRow.find("td").eq(3).find("select option:selected").val();
            //    var amount = currentRow.find("td").eq(4).find("input[type='text']").val();
            //    if (dca != 0 && sdca != 0 && amount != "" && cc != 0) {
            //        deductioncc = cc;
            //        deductiondca = dca;
            //        deductionsdca = sdca;
            //        deductionamount = amount;
            //    }
            //});
            if ($("#chkDedFDIntY").is(':checked') === true) {

                deductioncc = $("#txtDedCC").val();
                deductiondca = $("#txtDedDca").val();
                deductionsdca = $("#txtDedSdca").val();
                deductionamount = $("#txtDedAmt").val();
            }
            ////debugger;
            var updateFDIntrest = {
                FDRNo: $("#txtIntFdNos").val(),
                IntDate: $("#txtFdIntdate").val(),
                IntAmount: $("#txtFDIntAmount").val(),
                Capitalcc: deductioncc,
                DedDcas: deductiondca,
                DedSDcas: deductionsdca,
                DedAmounts: deductionamount,
                Bankid: $("#ddlfdIntpaymentbank option:selected").val(),
                Remarks: $("#txtFDIntRemarks").val(),
                PaymentModeofPay: $("#ddlFdIntPayMode option:selected").val(),
                PaymentNo: $("#txtfdIntchqNo").val(),
                PaymentDate: $("#txtFDIPayDate").val(),
                Createdby: $("#txtupdatefdiCreatedby").val(),
                Status: 1,
                PaymenttypeName: 'FDInterest',
                Action: 'Update',
                RoleID: $("#txtpartialRoleId").val(),
                BankTransactionRefNo: TransactionRefno,
                PaymentAmount: $("#txtFDIPayAmount").val()

            };
         
            addFailMsg = "Error Occurred While Updating FD Interest";
            addSuccessMsg = "FD Interest Detials Updated Successfully.";
            $.ajax({
                type: "POST",
                url: "/AccountsApproval/UpdateFDInterest",
                data: JSON.stringify({ fdPay: updateFDIntrest }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.saveStatus == "Updated") {
                        var msg = '';
                        $('#ApprovefdiMsgModal').modal('show');
                        msg = "<div>" + addSuccessMsg+"</div>";
                        $("#AppfdiMsg").html(msg);
                    }
                    else {
                        msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppfdiMsg").html(msg);
                        $('#ApprovefdiMsgModal').modal('show');
                    }
                },
                failure: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppfdiMsg").html(msg);
                    $('#ApprovefdiMsgModal').modal('show');
                },
                error: function (response) {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#AppfdiMsg").html(msg);
                    $('#ApprovefdiMsgModal').modal('show');
                }
            });

        }

    }
}

function btnreturnWithDraw(Apprid) {
    ////debugger;
    Bankid = "divWithdrawalupdateInfoMsg-" + Apprid;
    msg = $("#" + Bankid + "");
    isValid = true;
    var errorMsg = "";
    isValid = true;
    var name = $("#txtWdName").val();
    var from = $("#ddl_WdFrom option:selected").index();
    var modeofpay = $("#ddl_WdPayNode option:selected").index();
    var date = $("#txtWdDate").val();
    var amount = $("#txtWdAmount").val();
    var remarks = $("#txtWdRemarks").val();
    var errorMsg = "";
    isValid = true;
    if (name == "" || name == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
        isValid = false;
    }
    if (from == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Withdrawal From </p>";
        isValid = false;
    }
    if (modeofpay == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay </p>";
        isValid = false;
    }
    if (modeofpay > 0) {
        if (modeofpay == 1) {
            var no = $("#ddl_WdNo option:selected").index();
            if (no == 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var no = $("#txtWdNo").val();
            if (no == "" || no == null) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter No</p>";
                isValid = false;
            }
        }
    }
    if (amount == "0.00" || amount == "" || amount == "0.0" || amount == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (remarks == "" || remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divWithdrawalInfoMsg").text("");
        $("#divWithdrawalInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divWithdrawalInfoMsg").addClass("alert-danger");
        $("#divWithdrawalInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divWithdrawalInfoMsg").text("");
        $("#divWithdrawalInfoMsg").addClass("hidden");
        $(msg).text("");
        $(msg).addClass("hidden");
        var bankwithdrawlDetails = {
            Id: Apprid,
            Name: $("#txtWdName").val(),
            From: $("#ddl_WdFrom option:selected").val(),
            Mode_of_Pay: $("#ddl_WdPayNode option:selected").val(),
            No: $("#txtWdNo").val(),
            Chequeid: $("#ddl_Wdchequenos option:selected").val(),
            Date: $("#txtWdDate").val(),
            Remarks: $("#txtWdRemarks").val(),
            Amount: $("#txtWdAmount").val(),
            Createdby: $("#txtApprBankWithdrawnCreatedby").val(),
            RoleId: $("#txtApprBankWithdrawnRole").val()
        };
        addFailMsg = "Error Occurred While Return Withdraw Updation";
        addSuccessMsg = "Bank Return Withdraw Updation Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateBankWithdraw",
            data: JSON.stringify({ apprdeposit: bankwithdrawlDetails }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                if (msg == "Successfull") {
                    $('#ApproveWithdrawnMsgModal').modal('show');
                    var msg = "<div>BankReturn: Withdraw Updated Successfully</div>";
                    $("#ApprWDMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprWDMsg").html(msg);
                    $('#ApproveWithdrawnMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprWDMsg").html(msg);
                $('#ApproveWithdrawnMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprWDMsg").html(msg);
                $('#ApproveWithdrawnMsgModal').modal('show');
            }
        });
    }
}
function ApproveWithdraw(Apprid) {

    appstatusid = "ApprWithdrawstatus-" + Apprid;
    var appstatus = $("#ApprWithdrawstatus option:selected").text();
    var retnoteid = "ApprWithdrawNote-" + Apprid;
    retnote = $("#" + retnoteid + "").val();
    Bankid = "divApprwithdrawInfoMsg-" + Apprid;
    msg = $("#" + Bankid + "");
    isValid = true;

    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var verifywithdraw = {
            Id: Apprid,
            Approvalstatus: appstatus,
            ApprovalRemarks: retnote,
            Createdby: $("#txtApprBankWithdrawnCreatedby").val(),
            RoleId: $("#txtApprBankWithdrawnRole").val()
        };
        addFailMsg = "Error Occurred While WithDraw Verification";
        addSuccessMsg = "Withdraw  Verified Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveWithdraw",
            data: JSON.stringify({ apprwithdraw: verifywithdraw }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                if (msg == "Submitted") {
                    $('#ApproveWithdrawnMsgModal').modal('show');
                    var msg = "<div>Withdraw: Verified Successfully</div>";
                    $("#ApprWDMsg").html(msg);
                }
                else {
                    var msg = "<div>" + msg + "</div>";
                    $("#ApprWDMsg").html(msg);
                    $('#ApproveWithdrawnMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprWDMsg").html(msg);
                $('#ApproveWithdrawnMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprWDMsg").html(msg);
                $('#ApproveWithdrawnMsgModal').modal('show');
            }
        });
    }
}

function ApproveTransfer(Refnos) {
    //debugger;
    appstatusid = "ApprTransferstatus-" + Refnos;
    var appstatus = $("#ApprTransferstatus option:selected").text();
    var retnoteid = "ApptransferNote-" + Refnos;
    retnote = $("#" + retnoteid + "").val();
    Bankid = "divApprTransferInfoMsg-" + Refnos;
    msg = $("#" + Bankid + "");
    isValid = true;

    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var VerifyTransfer = {
            Refno: Refnos,
            Approvalstatus: appstatus,
            ApprovalRemarks: retnote,
            Createdby: $("#txtApprBanktransferCreatedby").val(),
            RoleId: $("#txtApprBanktransferRole").val()
        };
        addFailMsg = "Error Occurred While Bank Deposit Verification";
        //addSuccessMsg = "Bank Transfer  Verified Successfully.";
        var addSuccessMsg;
        if (appstatus === 'Verify') {
            addSuccessMsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { addSuccessMsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { addSuccessMsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { addSuccessMsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveBankTransfer",
            data: JSON.stringify({ apprtransfer: VerifyTransfer }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                //alert(msg);
                if (msg == "Submitted") {
                    $('#ApproveBankTransferMsgModal').modal('show');
                    var msg = "<div>BankTransfer:  " + addSuccessMsg +"</div>";
                    $("#ApprBankTransferMsg").html(msg);
                   
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprBankTransferMsg").html(msg);
                    $('#ApproveBankTransferMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankTransferMsg").html(msg);
                $('#ApproveBankTransferMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankTransferMsg").html(msg);
                $('#ApproveBankTransferMsgModal').modal('show');
            }
        });
    }
}
function ValidateAmount(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode == 46) {
        if (txt.value.indexOf(".") < 0)
            return true;
        else
            return false;
    }
    if (txt.value.indexOf(".") > 0) {
        var txtlen = txt.value.length;
        var dotpos = txt.value.indexOf(".");
        if ((txtlen - dotpos) > 2)
            return false;
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function AmountValidatedeposit() {
    var ccamount = $("#txtCCAmount").val();
    var Depositamt = $("#txtTransAmount").val();
    if (ccamount == "0") {
        $("#divTransferInfoupdateMsg").text("Invalid Attempt");
        $("#divTransferInfoupdateMsg").removeClass("hidden");
        $("#txtTransAmount").val("");
    }
    else if (parseFloat(Depositamt) > parseFloat(ccamount)) {
        $("#divTransferInfoupdateMsg").text("Invalid Attempt");
        $("#divTransferInfoupdateMsg").removeClass("hidden");
        $("#txtTransAmount").val("");
    }
    else {
        $("#divTransferInfoupdateMsg").text("");
        $("#divTransferInfoupdateMsg").addClass("hidden");
    }
}
function TransferUpdateData(Apprid) {
    ////debugger;

    Bankid = "divTransferInfoupdateMsg-" + Apprid;
    msg = $("#" + Bankid + "");
    isValid = true;
    var errorMsg = "";
    isValid = true;
    //var CC = $("#ddl_TransToCC option:selected").index();
    var Bank = $("#ddl_TransToBank option:selected").index();
    var Date = $("#txtTransferDate").val();
    var Desc = $("#txtTransferDesc").val();
    var Amount = $("#txtTransAmount").val();
    //if (CC == 0 || CC == null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select CostCenter</p>";
    //    isValid = false;
    //}
    if (Bank == 0 || Bank == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        isValid = false;
    }

    if (Date == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Date</p>";
        isValid = false;
    }
    if (Desc == "" || Desc == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
        isValid = false;
    }
    if (Amount == "" || Amount == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divTransferInfoupdateMsg").text("");
        $("#divTransferInfoupdateMsg").append(finalerror + errorMsg + "</div>");
        $("#divTransferInfoupdateMsg").addClass("alert-danger");
        $("#divTransferInfoupdateMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divTransferInfoupdateMsg").text("");
        $("#divTransferInfoupdateMsg").addClass("hidden");
        //submit data to db
        //AddCCBanktransferDetails();
        $(msg).text("");
        $(msg).addClass("hidden");
        var updatedeposit = {
            Id: Apprid,
            CC_Amount: $("#txtCCAmount").val(),
            Transfer_Cost_Center: $("#Transfer_Cost_Center").val(),
            Transfer_Bank: $("#ddl_TransToBank").val(),
            Transfer_Date: $("#txtTransferDate").val(),
            Transfer_Amount: $("#txtTransAmount").val(),
            Description: $("#txtTransferDesc").val(),
            Createdby: $("#txtApprBankDepositCreatedby").val(),
            RoleId: $("#txtApprBankDepositRole").val()
        };
        addFailMsg = "Error Occurred While Return Deposit Updation";
        addSuccessMsg = "Bank Return Deposit Updation Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateBankDeposit",
            data: JSON.stringify({ apprdeposit: updatedeposit }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                if (msg == "Successfull") {
                    $('#ApproveBankDepositMsgModal').modal('show');
                    var msg = "<div>BankReturn: Update Successfully</div>";
                    $("#ApprBankDepositMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprBankDepositMsg").html(msg);
                    $('#ApproveBankDepositMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankDepositMsg").html(msg);
                $('#ApproveBankDepositMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankDepositMsg").html(msg);
                $('#ApproveBankDepositMsgModal').modal('show');
            }
        });
    }

}
function btnReturnBankTransferData(Apprid) {
    Refno = "divBankTransferupdateInfoMsg-" + Apprid;
    msg = $("#" + Refno + "");
    isValid = true;
    var errorMsg = "";
    isValid = true;
    //var name = $("#txtBanktranferName").val();
    var from = $("#txtFrombank").val();
    var to = $("#ddl_TranTo option:selected").index();
    //var modeofpay = $("#ddl_TansferPayMode option:selected").index();
    var date = $("#txtTransferDate1").val();
    var remarks = $("#txttransferRemarks").val();
    var amount = $("#txtTransferAmount").val();
    var errorMsg = "";
    isValid = true;
    //if (name == "" || name == null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
    //    isValid = false;
    //}
    //if (from == 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select From Bank </p>";
    //    isValid = false;
    //}
    if (to == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select To Bank </p>";
        isValid = false;
    }
    if (from != 0 && to != 0) {
        if (from == to) {
            errorMsg += "<p style='margin-top:-5px!important;'>Both From Bank and To Bank are not same</p>";
            isValid = false;
        }
    }
    //if (modeofpay == 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay </p>";
    //    isValid = false;
    //}
    //if (modeofpay > 0) {
    //    if (modeofpay == 1) {
    //        var Chequenos = $("#ddl_Transferchequenos option:selected").index();
    //        if (Chequenos == 0) {
    //            errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
    //            isValid = false;
    //        }
    //    }
    //    else {
    //        var no = $("#txtTansferNo").val();
    //        if (no == "" || no == null) {
    //            errorMsg += "<p style='margin-top:-5px!important;'>Enter No</p>";
    //            isValid = false;
    //        }
    //    }
    //}

    if (amount == "0.00" || amount == "" || amount == "0.0" || amount == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (remarks == "" || remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divBankTransferupdateInfoMsg").text("");
        $("#divBankTransferupdateInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divBankTransferupdateInfoMsg").addClass("alert-danger");
        $("#divBankTransferupdateInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divBankTransferupdateInfoMsg").text("");
        $("#divBankTransferupdateInfoMsg").addClass("hidden");
        $(msg).text("");
        $(msg).addClass("hidden");
        var banktransferDetails = {
            Refno: Apprid,
            //Name: $("#txtBanktranferName").val(),
            From: $("#txtFrombank").val(),
            //Mode_of_Pay: $("#ddl_TansferPayMode option:selected").val(),
            //No: $("#txtTansferNo").val(),
            //Chequeid: $("#ddl_Transferchequenos option:selected").val(),
            To: $("#ddl_TranTo option:selected").val(),
            Date: $("#txtTransferDate1").val(),
            Remarks: $("#txttransferRemarks").val(),
            Amount: $("#txtTransferAmount").val(),
            Createdby: $("#txtApprBanktransferCreatedby").val(),
            RoleId: $("#txtApprBanktransferRole").val()
        };
        addFailMsg = "Error Occurred While Return Bank Transfer Updation";
        addSuccessMsg = "Bank Return Transfer Updation Successfully.";
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/UpdateBankTransfer",
            data: JSON.stringify({ apprtransfer: banktransferDetails }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                if (msg == "Successfull") {
                    $('#ApproveBankTransferMsgModal').modal('show');
                    var msg = "<div>BankReturn: Bank Transfer Updated Successfully</div>";
                    $("#ApprBankTransferMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprBankTransferMsg").html(msg);
                    $('#ApproveBankTransferMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankTransferMsg").html(msg);
                $('#ApproveBankTransferMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprWDMsg").html(msg);
                $('#ApproveBankTransferMsgModal').modal('show');
            }
        });
    }
}
//BanktoBank Transfer
function ApproveTransfer(Refnos) {
    appstatusid = "ApprTransferstatus-" + Refnos;
    var appstatus = $("#ApprTransferstatus option:selected").text();
    var retnoteid = "ApptransferNote-" + Refnos;
    retnote = $("#" + retnoteid + "").val();
    Bankid = "divApprTransferInfoMsg-" + Refnos;
    msg = $("#" + Bankid + "");
    isValid = true;

    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var VerifyTransfer = {
            Refno: Refnos,
            Approvalstatus: appstatus,
            ApprovalRemarks: retnote,
            Createdby: $("#txtApprBanktransferCreatedby").val(),
            RoleId: $("#txtApprBanktransferRole").val()
        };
        addFailMsg = "Error Occurred While Bank Deposit Verification";
        //addSuccessMsg = "Bank Transfer  Verified Successfully.";
        var addSuccessMsg;
        if (appstatus === 'Verify') {
            addSuccessMsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { addSuccessMsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { addSuccessMsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { addSuccessMsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveBankTransfer",
            data: JSON.stringify({ apprtransfer: VerifyTransfer }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                //alert(msg);
                if (msg == "Submitted") {
                    $('#ApproveBankTransferMsgModal').modal('show');
                    var msg = "<div>BankTransfer:" + addSuccessMsg +"</div>";
                    $("#ApprBankTransferMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprBankTransferMsg").html(msg);
                    $('#ApproveBankTransferMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankTransferMsg").html(msg);
                $('#ApproveBankTransferMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprBankTransferMsg").html(msg);
                $('#ApproveBankTransferMsgModal').modal('show');
            }
        });
    }
}
//Misc verification
function ApproveMisc(Refnos) {

    appstatusid = "ApprMiscstatus-" + Refnos;
    var appstatus = $("#ApprMiscstatus option:selected").text();
    var retnoteid = "ApprMiscNote-" + Refnos;
    retnote = $("#" + retnoteid + "").val();
    Bankid = "divApprMiscInfoMsg-" + Refnos;
    msg = $("#" + Bankid + "");
    isValid = true;

    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var VerifyMisc = {
            Refno: Refnos,
            Approvalstatus: appstatus,
            ApprovalRemarks: retnote,
            Createdby: $("#txtApprMiscCreatedby").val(),
            RoleId: $("#txtApprMiscRole").val()
        };
        addFailMsg = "Error Occurred While Misc Verification";
        //addSuccessMsg = "Misc Verified Successfully.";
        var addSuccessMsg;
        if (appstatus === 'Verify') {
            addSuccessMsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { addSuccessMsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { addSuccessMsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { addSuccessMsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveMisc",
            data: JSON.stringify({ apprmisc: VerifyMisc }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                //alert(msg);
                if (msg == "Submitted") {
                    $('#ApproveMiscMsgModal').modal('show');
                    var msg = "<div>Miscellenaous:" + addSuccessMsg +"</div>";
                    $("#ApprMiscMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprMiscMsg").html(msg);
                    $('#ApproveMiscMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprMiscMsg").html(msg);
                $('#ApproveMiscMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprMiscMsg").html(msg);
                $('#ApproveMiscMsgModal').modal('show');
            }
        });
    }
}
function btnReturnmiscData(Refnos) {
    //debugger;
    Bankrefno = "divMiscreturnInfoMsg1-" + Refnos;
    msg = $("#" + Bankrefno + "");
    isValid = true;
    var errorMsg = "";
    isValid = true;
    var IntType = $("#ddl_MiscIntrestType option:selected").index();
    var CC = $("#ddl_MiscCcCode option:selected").index();
    var DCA = $("#ddl_MiscDCACode option:selected").index();
    var SDCA = $("#ddl_MiscSDCACode option:selected").index();
    var Amount = $("#txtMiscAmount").val();
    var IntCC = $("#ddl_MiscIntrestCcCode option:selected").index();
    var IntDCA = $("#ddl_MiscIntrestDCACode option:selected").index();
    var IntSDCA = $("#ddl_MiscIntrestSDCACode option:selected").index();
    var IntAmount = $("#txtMiscIntrestAmount").val();
    var Name = $("#txtMiscName").val();
    var Bank = $("#ddlMiscBank option:selected").index();
    var PayMode = $("#ddl_MiscPayMode option:selected").index();
    var No = $("#txtMiscNo").val();
    var date = $("#txtMiscPayDate").val();
    var Remarks = $("#txtMiscReamarks").val();
    var TotalAmount = $("#txtMiscFinalAmount").val();
    if (IntType == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest Type</p>";
        isValid = false;
    }
    if (IntType == 1) {
        var client = $("#ddl_Miscclient option:selected").index();
        var subclient = $("#ddl_MiscSubclient option:selected").index();
        if (client == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Client</p>";
            isValid = false;
        }
        if (subclient == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Client</p>";
            isValid = false;
        }

    }
    if (CC == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select CC Code</p>";
        isValid = false;
    }
    if (DCA == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select DCA Code</p>";
        isValid = false;
    }
    if (SDCA == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub DCA Code</p>";
        isValid = false;
    }
    if (Amount == "" || Amount == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }

    if (Name == "" || Name == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
        isValid = false;
    }
    if (Bank == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        isValid = false;
    }
    if (PayMode == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay</p>";
        isValid = false;
    }
    if (No == "" || No == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Number</p>";
        isValid = false;
    }
    if (date == "" || date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select date</p>";
        isValid = false;
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (IntCC == 0 || IntDCA == 0 || IntSDCA == 0 || IntAmount == "") {
        if ($('#txtclickcheck').val() == "") {
            $('#MiscIntrestConfirmModel').modal('show');
        }
        else {
            if ($('#txtclickcheck').val() == "YES") {
                if (IntCC == 0 || IntDCA == 0 || IntSDCA == 0 || IntAmount == "") {
                    if (IntCC == 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction CC Code</p>";
                        isValid = false;
                    }
                    if (IntDCA == 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction DCA Code</p>";
                        isValid = false;
                    }
                    if (IntSDCA == 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Sub DCA Code</p>";
                        isValid = false;
                    }
                    if (IntAmount == "" || IntAmount == null) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
                        isValid = false;
                    }

                }
            }
            else {
                $("#ddl_MiscIntrestCcCode option:selected").val("");
                $("#ddl_MiscIntrestDCACode option:selected").val("");
                $("#ddl_MiscIntrestSDCACode option:selected").val("");
                $("#txtMiscIntrestAmount").val("");

            }
        }
    }
    if (TotalAmount < 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Total Misc Amount</p>";
        isValid = false;
    }
    else {
        if (IntCC == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest CC Code</p>";
            isValid = false;
        }
        if (IntDCA == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest DCA Code</p>";
            isValid = false;
        }
        if (IntSDCA == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest Sub DCA Code</p>";
            isValid = false;
        }
        if (IntAmount == "" || IntAmount == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Intrest Amount</p>";
            isValid = false;
        }

    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divMiscreturnInfoMsg1").text("");
        $("#divMiscreturnInfoMsg1").append(finalerror + errorMsg + "</div>");
        $("#divMiscreturnInfoMsg1").addClass("alert-danger");
        $("#divMiscreturnInfoMsg1").removeClass("hidden alert-success");
        return false;

    }
    else {
        $("#divMiscreturnInfoMsg1").text("");
        $("#divMiscreturnInfoMsg1").addClass("hidden");
        $('#MiscIntrestConfirmModel').modal('hide');
        Returnmiscdata(Refnos);
    }
}
function Returnmiscdata(Ref) {
    var miscPayment = {
        Date: $("#txtMiscDate").val(),
        Intrest_type: $("#ddl_MiscIntrestType option:selected").val(),
        clientid: $("#ddl_Miscclient option:selected").val(),
        Subclient: $("#ddl_MiscSubclient option:selected").val(),
        Misc_CC_Code: $("#ddl_MiscCcCode option:selected").val(),
        Misc_DCA_Code: $("#ddl_MiscDCACode option:selected").val(),
        Misc_Sub_DCA_Code: $("#ddl_MiscSDCACode option:selected").val(),
        MiscAmount: $("#txtMiscAmount").val(),
        MiscDed_CC_Code: $("#ddl_MiscIntrestCcCode option:selected").val(),
        MiscDed_DCA_Code: $("#ddl_MiscIntrestDCACode option:selected").val(),
        MiscDed_Sub_DCA_Code: $("#ddl_MiscIntrestSDCACode option:selected").val(),
        MiscDedAmount: $("#txtMiscIntrestAmount").val(),
        Misc_Name: $("#txtMiscName").val(),
        MiscBank: $("#ddlMiscBank option:selected").val(),
        Mode_of_Pay: $("#ddl_MiscPayMode").val(),
        Misc_No: $("#txtMiscNo").val(),
        Remarks: $("#txtMiscReamarks").val(),
        Misc_Date: $("#txtMiscPayDate").val(),
        Createdby: $("#txtApprMiscCreatedby").val(),
        RoleId: $("#txtApprMiscRole").val(),
        Refno: Ref
    };
    addFailMsg = "Error Occurred While Updating Misc Details";
    addSuccessMsg = "Misc Details Updated Successfully.";
    $.ajax({
        type: "POST",
        url: "/AccountsApproval/UpdateMisc",
        data: JSON.stringify({ apprdeposit: miscPayment }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var msg = response.saveStatus;
            if (msg == "Successfull") {
                $('#ApproveMiscMsgModal').modal('show');
                var msg = "<div>Miscelleneous Updated Successfully</div>";
                $("#ApprMiscMsg").html(msg);
            }
            else {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprMiscMsg").html(msg);
                $('#ApproveMiscMsgModal').modal('show');
            }
        },
        failure: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#ApprMiscMsg").html(msg);
            $('#ApproveMiscMsgModal').modal('show');
        },
        error: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#ApprMiscMsg").html(msg);
            $('#ApproveMiscMsgModal').modal('show');
        }
    });
}

//Generalpayable by cash verification
function Approvegeneralpayablebycash(Voucherno) {
    appstatusid = "Apprgeneralpayablebycashstatus-" + Voucherno;
    var appstatus = $("#Apprgeneralpayablebycashstatus option:selected").text();
    var retnoteid = "ApprgeneralpayablebycashNote-" + Voucherno;
    retnote = $("#" + retnoteid + "").val();
    Bankid = "divApprgeneralpayablebycashInfoMsg-" + Voucherno;
    msg = $("#" + Bankid + "");
    isValid = true;

    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {

        $(msg).text("");
        $(msg).addClass("hidden");
        var VerifyGeneral = {
            Voucherno: Voucherno,
            Approvalstatus: appstatus,
            ApprovalRemarks: retnote,
            Createdby: $("#txtApprgeneralpayablebycashCreatedby").val(),
            RoleId: $("#txtApprgeneralpayablebycashRole").val()
        };
        addFailMsg = "Error Occurred While General Payment by cash Verification";
        //addSuccessMsg = "General Payment by Cash Verified Successfully.";
        var addSuccessMsg;
        if (appstatus === 'Verify') {
            addSuccessMsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { addSuccessMsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { addSuccessMsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { addSuccessMsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveGeneralpayablebycash",
            data: JSON.stringify({ apprgeneral: VerifyGeneral }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                //alert(msg);
                if (msg == "Submitted") {
                    $('#ApprovegeneralpayablebycashMsgModal').modal('show');
                    var msg = "<div>General Payable By Cash:" + addSuccessMsg +"</div>";
                    $("#ApprGPbycashMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprGPbycashMsg").html(msg);
                    $('#ApprovegeneralpayablebycashMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGPbycashMsg").html(msg);
                $('#ApprovegeneralpayablebycashMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGPbycashMsg").html(msg);
                $('#ApprovegeneralpayablebycashMsgModal').modal('show');
            }
        });
    }
}

//CCCashTransfer  -- code shift to VerifycccashtransferView.cshtml
//CCUpdateCashTransfer


//Refund Verification

function btnReturnRefundData(Refno) {
    Bankrefno = "divRefInfoReturnMsg-" + Refno;
    msg = $("#" + Bankrefno + "");
    isValid = true;
    var errorMsg = "";
    var PaymentCategory = "";
    isValid = true;
    if ($("#ddlpaymentcategory").val() == "Refunds")
        var PaymentCategory = 1;
    else
        var PaymentCategory = 2;
    if ($("#ddltype").val() == "SD")
        var RefundType = 2;
    var CC = $("#ddl_Refundcccode option:selected").val();
    var DCA = $("#ddl_RefDCACode option:selected").val();
    var SDCA = $("#ddl_RefSubDcaCode option:selected").val();
    var Amount = $("#txtPrincipleAmount").val();
    var IntCC = $("#ddl_RefintrestCCCode option:selected").val();
    var IntDCA = $("#ddl_RefintrestDCACode option:selected").val();
    var IntSDCA = $("#ddl_RefintrestSDCACode option:selected").val();
    var IntAmount = $("#txRefundIntrestAmount").val();
    var Name = $("#txtRefundName").val();
    var Bank = $("#ddl_RefBank option:selected").index();
    var PayMode = $("#ddl_RefPayMode option:selected").index();
    var No = $("#txtrefundNo").val();
    var date = $("#txtRefPayDate").val();
    var Remarks = $("#txtRefundRemarks").val();
    if (PaymentCategory == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Category</p>";
        isValid = false;
    }
    if (PaymentCategory == 1) {
        if (RefundType == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Refund Type</p>";
            isValid = false;
        }
    }
    if (CC == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select CC Code</p>";
        isValid = false;
    }
    if (DCA == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select DCA Code</p>";
        isValid = false;
    }
    if (SDCA == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub DCA Code</p>";
        isValid = false;
    }
    if (Amount == "" || Amount == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }

    if (Name == "" || Name == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
        isValid = false;
    }
    if (Bank == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        isValid = false;
    }
    if (PayMode == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay</p>";
        isValid = false;
    }
    if (No == "" || No == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Number</p>";
        isValid = false;
    }
    if (date == "" || date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select date</p>";
        isValid = false;
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (PaymentCategory == 2) {
        if (IntCC == 0 || IntDCA == 0 || IntSDCA == 0 || IntAmount == "") {
            if ($('#txtclickcheckref').val() == "") {
                $('#RefundIntrestConfirmModel').modal('show');
            }
            else {
                if ($('#txtclickcheckref').val() == "YES" || IntCC != 0 || IntDCA != 0 || IntSDCA != 0 || IntAmount != "") {
                    if (IntCC == 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest CC Code</p>";
                        isValid = false;
                    }
                    if (IntDCA == 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest DCA Code</p>";
                        isValid = false;
                    }
                    if (IntSDCA == 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest Sub DCA Code</p>";
                        isValid = false;
                    }
                    if (IntAmount == "" || IntAmount == null) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Enter Intrest Amount</p>";
                        isValid = false;
                    }

                }
                else {
                    if (!isValid) {
                        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
                        $("#divRefInfoReturnMsg").text("");
                        $("#divRefInfoReturnMsg").append(finalerror + errorMsg + "</div>");
                        $("#divRefInfoReturnMsg").addClass("alert-danger");
                        $("#divRefInfoReturnMsg").removeClass("hidden alert-success");
                        return false;
                    }
                    else {
                        $("#divRefInfoReturnMsg").text("");
                        $("#divRefInfoReturnMsg").addClass("hidden");
                        returndata(Refno);
                    }
                }
            }
        }

        else {
            if (IntCC == 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest CC Code</p>";
                isValid = false;
            }
            if (IntDCA == 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest DCA Code</p>";
                isValid = false;
            }
            if (IntSDCA == 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Intrest Sub DCA Code</p>";
                isValid = false;
            }
            if (IntAmount == "" || IntAmount == null) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Intrest Amount</p>";
                isValid = false;
            }

        }
    }
    if (!isValid) {

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divRefInfoReturnMsg").text("");
        $("#divRefInfoReturnMsg").append(finalerror + errorMsg + "</div>");
        $("#divRefInfoReturnMsg").addClass("alert-danger");
        $("#divRefInfoReturnMsg").removeClass("hidden alert-success");
        return false;

    }
    else {
        $("#divRefInfoReturnMsg").text("");
        $("#divRefInfoReturnMsg").addClass("hidden");
        returndata(Refno);
    }

}
function returndata(Refnos) {
    ////debugger;
    $(msg).text("");
    $(msg).addClass("hidden");
    var PaymentCategory = "";
    if ($("#ddlpaymentcategory").val() == "Refunds")
        PaymentCategory = 1;
    else
        PaymentCategory = 2;
    var RefundPayment = {
        Refno: Refnos,
        Date: $("#txtRefundDate").val(),
        paymentcategory: PaymentCategory,
        RefundType: $("#ddltype option:selected").val(),
        Refund_CC_Code: $("#ddl_Refundcccode option:selected").val(),
        Refund_DCA_Code: $("#ddl_RefDCACode option:selected").val(),
        Refund_Sub_DCA_Code: $("#ddl_RefSubDcaCode option:selected").val(),
        Amount: $("#txtPrincipleAmount").val(),
        RefIntCC: $("#ddl_RefintrestCCCode option:selected").val(),
        RefIntDCA: $("#ddl_RefintrestDCACode option:selected").val(),
        RefIntSDCA: $("#ddl_RefintrestSDCACode option:selected").val(),
        RefIntAmount: $("#txRefundIntrestAmount").val(),
        Refund_Name: $("#txtRefundName").val(),
        Bank: $("#ddl_RefBank option:selected").val(),
        Mode_of_Pay: $("#ddl_RefPayMode").val(),
        Refund_No: $("#txtrefundNo").val(),
        Remarks: $("#txtRefundRemarks").val(),
        Refpayment_Date: $("#txtRefPayDate").val(),
        Refund_final_Amount: $("#txtRefFinalAmount").val(),
        Createdby: $("#txtApprRefundCreatedby").val(),
        RoleId: $("#txtApprRefundRole").val()
    };
    addFailMsg = "Error Occurred While Refund Updation";
    addSuccessMsg = "Refund Updation Successfully.";
    $.ajax({
        type: "POST",
        //url: "/AccountsApproval/UpdateBankWithdraw",
        url: "/AccountsApproval/UpdateRefund",
        data: JSON.stringify({ apprdeposit: RefundPayment }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var msg = response.saveStatus;
            if (msg == "Successfull") {
                $('#ApproveRefundMsgModal').modal('show');
                var msg = "<div>Refund Updated Successfully</div>";
                $("#ApprRefundMsg").html(msg);
            }
            else {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprRefundMsg").html(msg);
                $('#ApproveRefundMsgModal').modal('show');
            }
        },
        failure: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#ApprRefundMsg").html(msg);
            $('#ApproveRefundMsgModal').modal('show');
        },
        error: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#ApprRefundMsg").html(msg);
            $('#ApproveRefundMsgModal').modal('show');
        }
    });

}
function ApproveRefund(Refnos) {
    appstatusid = "ApprRefundstatus-" + Refnos;
    //var appstatus = $("#" + appstatusid + " " + "option:selected").text();
    var appstatus = $("#ApprRefundstatus option:selected").text();
    var retnoteid = "ApprRefundNote-" + Refnos;
    retnote = $("#" + retnoteid + "").val();
    Bankid = "divApprRefundInfoMsg-" + Refnos;
    msg = $("#" + Bankid + "");
    isValid = true;

    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var VerifyRefund = {
            Refno: Refnos,
            Approvalstatus: appstatus,
            ApprovalRemarks: retnote,
            Createdby: $("#txtApprRefundCreatedby").val(),
            RoleId: $("#txtApprRefundRole").val()
        };
        addFailMsg = "Error Occurred While Refund Verification";
        //addSuccessMsg = "Refund Verified Successfully.";
        var addSuccessMsg;
        if (appstatus === 'Verify') {
            addSuccessMsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { addSuccessMsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { addSuccessMsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { addSuccessMsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveRefund",
            data: JSON.stringify({ Refno: VerifyRefund }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                //alert(msg);
                if (msg == "Submitted") {
                    $('#ApproveRefundMsgModal').modal('show');
                    var msg = "<div>Refund:" + addSuccessMsg +"</div>";
                    $("#ApprRefundMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprRefundMsg").html(msg);
                    $('#ApproveRefundMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprRefundMsg").html(msg);
                $('#ApproveRefundMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprRefundMsg").html(msg);
                $('#ApproveRefundMsgModal').modal('show');
            }
        });
    }
}

function btngeneralinvocicecashupdation(Apprid) {
    voucherid = "divcashgeneralinvoiceupdateInfoMsg-" + Apprid;
    msg = $("#" + voucherid + "");
    isValid = true;
    var errorMsg = "";
    isValid = true;
    //var GPCPaymentmode = $("#ddlGPCPaymentmode option:selected").index();
    //var GPCCCode = $("#ddlGICashCCCode option:selected").index();
    var GPCashInvoiceno = Apprid;
    var GPCdate = $("#txtGPCashdate").val();
    var GPCashpaiddate = $("#txtGPCashpaiddate").val();
    //var GPCDcacode = $("#ddlGICashDCACode option:selected").index();
    //var GPCSdcacode = $("#ddlGICashSDCACode option:selected").index();
    var GPCname = $("#txtGPCashName").val();
    var GPCRemarks = $("#txtGPCashRemarks").val();
    var GPCTotalAmount = $("#txtGPCashAmount").val();
    //if (GPCPaymentmode == 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Transaction</p>";
    //    isValid = false;
    //}
    //if (GPCPaymentmode == 2) {
    //    if (GPCCCode == 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Debit Cost Center</p>";
    //        isValid = false;
    //    }
    //}
    //if (GPCashInvoiceno == 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice No</p>";
    //    isValid = false;
    //}
    if (GPCdate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Date</p>";
        isValid = false;
    }
    if (GPCashpaiddate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Date</p>";
        isValid = false;
    }
    //if (GPCDcacode == 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
    //    isValid = false;
    //}
    //if (GPCSdcacode == 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Sub-Account Head</p>";
    //    isValid = false;
    //}
    if (GPCname == "" || GPCname == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
        isValid = false;
    }
    if (GPCRemarks == "" || GPCRemarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (GPCTotalAmount == "" || GPCTotalAmount == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (GPCTotalAmount == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Amount</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divcashgeneralinvoiceupdateInfoMsg").text("");
        $("#divcashgeneralinvoiceupdateInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divcashgeneralinvoiceupdateInfoMsg").addClass("alert-danger");
        $("#divcashgeneralinvoiceupdateInfoMsg").removeClass("hidden alert-success");
        return false;

    }
    else {
        //debugger;
        $("#divcashgeneralinvoiceupdateInfoMsg").text("");
        $("#divcashgeneralinvoiceupdateInfoMsg").addClass("hidden");
        var GeneralcashpaymentDetails = {
            Voucherno: Apprid,
            GPCash_TransactionMode: $("#txtGPCPaymentmode").val(),
            GPCash_CCCode: $("#txtGICashCCCode").val(),
            GPCash_Date: $("#txtGPCashdate").val(),
            GPCash_PaidDate: $("#txtGPCashpaiddate").val(),
            GPCash_DCACode: $("#txtGICashDCACode").val(),
            GPCash_SDCACode: $("#txtGICashSDCACode").val(),
            GPCash_Name: $("#txtGPCashName").val(),
            GPCash_Remarks: $("#txtGPCashRemarks").val(),
            GPCash_Amount: $("#txtGPCashAmount").val(),
            GPSessionCCCode: $("#txtGeneralSessionCC").val(),
            Createdby: $("#txtApprgeneralpayablebycashCreatedby").val(),
            RoleId: $("#txtApprgeneralpayablebycashRole").val()

        };
        addFailMsg = "Error Occurred While Updating General Payment by Cash Details.";
        addSuccessMsg = "General Payment by Cash Details  Updated Successfully.";
        //alert('submit');
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/NewUpdateGeneralCashPaymentDetails",
            data: JSON.stringify({ apprdeposit: GeneralcashpaymentDetails }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                if (msg == "Updated SuccessFully") {
                    $('#ApprovegeneralpayablebycashMsgModal').modal('show');
                    var msg = "<div>BankReturn: Update Successfully</div>";
                    $("#ApprGPbycashMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprGPbycashMsg").html(msg);
                    $('#ApprovegeneralpayablebycashMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGPbycashMsg").html(msg);
                $('#ApprovegeneralpayablebycashMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprGPbycashMsg").html(msg);
                $('#ApprovegeneralpayablebycashMsgModal').modal('show');
            }
        });

    }
}


function ApproveChequeDetails(Refnos) {   
    appstatusid = "ApprChequestatus-" + Refnos;
    var appstatus = $("#ApprChequestatus").val();
    var retnoteid = "ApprChequeNote-" + Refnos;
    retnote = $("#" + retnoteid + "").val();
    Bankid = "divApprChequeInfoMsg-" + Refnos;
    msg = $("#" + Bankid + "");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select" || appstatus=="") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        addFailMsg = "Error Occurred While Cheque Book Verification";
        //addSuccessMsg = "Cheque Book Verified Successfully.";
        var addSuccessMsg;
        if (appstatus === 'Verify') {
            addSuccessMsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { addSuccessMsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { addSuccessMsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { addSuccessMsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveCheque",
            data: '{chqid:"' + Refnos + '",Appstatus:"' + appstatus + '",AppRemarks:"' + retnote + '",Crtdby:"' + $("#txtApprchequebookCreatedby").val() + '",RId:"' + $("#txtApprchequebookRole").val() + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var msg = response.saveStatus;
                //alert(msg);
                if (msg == "Submitted") {
                    $('#ApproveChequeMsgModal').modal('show');
                    var msg = "<div>ChequeBook:" + addSuccessMsg +"</div>";                    
                    $("#ApproveChequeMsgModal").on("hide.bs.modal", function () {
                        $("#divApprChequeGrid").load('/AccountsApproval/VerifyChequeGrid');
                    });
                    $("#ApprChequeMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprChequeMsg").html(msg);
                    $('#ApproveChequeMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprChequeMsg").html(msg);
                $('#ApproveChequeMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprChequeMsg").html(msg);
                $('#ApproveChequeMsgModal').modal('show');
            }
        });
    }
}
function btnReturnChequeData(chkid) {
    //debugger;
    Bankrefno = "divchequeReturnInfoMsg-" + chkid;
    msg = $("#" + Bankrefno + "");
    isValid = true;
    var errorMsg = "";
    var bankname = $("#ddl_ChequeBank option:selected").index();
    var bankid = $("#ddl_ChequeBank option:selected").val();
    var date = $("#txtchequeopeningdate").val();
    var FirstchqNo = $("#txtFirstChequeno").val();
    var LastchqNo = $("#txtLastChequeno").val();
    var Remarks = $("#txtchequeremarks").val();
    if (bankname == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        isValid = false;
    }
    if (date == "" || date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select date</p>";
        isValid = false;
    }
    if (FirstchqNo == "" || FirstchqNo == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter First Cheque Number</p>";
        isValid = false;
    }
    if (LastchqNo == "" || LastchqNo == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Last Cheque Number</p>";
        isValid = false;
    }
    if (LastchqNo.length != 6 || LastchqNo.length != 6) {
        errorMsg += "<p style='margin-top:-5px!important;'>Please Enter six digits in from and to textboxes</p>";
        isValid = false;
    }
    if (Number(FirstchqNo) >= Number(LastchqNo)) {
        errorMsg += "<p style='margin-top:-5px!important;'>Please Enter valid cheque nos</p>";
        isValid = false;
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Please Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divchequeReturnInfoMsg").text("");
        $("#divchequeReturnInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divchequeReturnInfoMsg").addClass("alert-danger");
        $("#divchequeReturnInfoMsg").removeClass("hidden alert-success");
        return false;

    }
    else {
        $("#divchequeReturnInfoMsg").text("");
        $("#divchequeReturnInfoMsg").addClass("hidden");
        $(msg).text("");
        $(msg).addClass("hidden");
        //Savechequedata(chkid);
        var chequenos = {
            BankName: $("#ddl_ChequeBank option:selected").val(),
            ChqOpeningDate: $("#txtchequeopeningdate").val(),
            FirstChequeno: $("#txtFirstChequeno").val(),
            LastChequeno: $("#txtLastChequeno").val(),
            Remarks: $("#txtchequeremarks").val(),
            Createdby: $("#txtApprchequebookCreatedby").val(),
            RoleId: $("#txtApprchequebookRole").val(),
            chequeid: chkid
        };
        addFailMsg = "Error Occurred While Adding Cheque Nos.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/AccountsApproval/UpdateCheque',
            data: JSON.stringify({ apprdeposit: chequenos }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            //data: '{BankName:"' + bankid + '",ChquOpeningDate:"' + $("#txtchequeopeningdate").val() + '"}',
            //data: '{BankName:"' + $("#ddl_ChequeBank option:selected").val() + '",ChquOpeningDate:"' + $("#txtchequeopeningdate").val() + '",FirstChequeno:"' + $("#txtFirstChequeno").val() + '",LastChequeno: "' + $("#txtLastChequeno").val() + '",Remarks: "' + $("#txtchequeremarks").val() + '",Createdby: "' + $("#txtApprchequebookCreatedby").val() + '",RoleId: "' + $("#txtApprchequebookRole").val() + '",chqueid:"' + chkid + '"}',
            success: function (response) {
                var msg = response.saveStatus;
                if (msg == "Successfull") {
                    $('#ApproveChequeMsgModal').modal('show');
                    var msg = "<div>Check Book Updated Successfully</div>";
                    $("#ApprChequeMsg").html(msg);
                }
                else {
                    var msg = "<div>" + addFailMsg + "</div>";
                    $("#ApprChequeMsg").html(msg);
                    $('#ApproveChequeMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprChequeMsg").html(msg);
                $('#ApproveChequeMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#ApprChequeMsg").html(msg);
                $('#ApproveChequeMsgModal').modal('show');
            }
        });
    }
}
function Savechequedata(chkid) {
    //var chequenos = {
    //    BankName: $("#ddl_ChequeBank option:selected").val(),
    //    ChequeOpeningDate: $("#txtchequeopeningdate").val(),
    //    FirstChequeno: $("#txtFirstChequeno").val(),
    //    LastChequeno: $("#txtLastChequeno").val(),
    //    Remarks: $("#txtchequeremarks").val(),
    //    Createdby: $("#txtApprchequebookCreatedby").val(),
    //    RoleId: $("#txtApprchequebookRole").val()
    //};
    //debugger;

}

function ApproveDCa(Did, Dcode, Dtypeid, Dcastatus) {
    var appstatus = $("#AppDcastatus option:selected").text();
    retnote = $("#AppDcaNote").val();
    msg = $("#divApprDcaInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");       
        var verifyDca = {
            DCATypeID: Dtypeid,
            DCACodeID: Did,
            DCACode: Dcode,
            Action: appstatus,
            RemarksNote: retnote,
            Createdby: $("#txtApprDcaCreatedby").val(),
            RoleId: $("#roleid").val(),
            DCAStatus: Dcastatus
        };
        addFailMsg = "Error Occurred While Verification";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveDCA",
            data: JSON.stringify({ apprDca: verifyDca }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    var msg = '';
                    $('#ApproveDcaMsgModal').modal('show');
                    msg = "<div>Account Head " + finalmsg+"</div>";
                    $("#AppdcaMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppdcaMsg").html(msg);
                    $('#ApproveDcaMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppdcaMsg").html(msg);
                $('#ApproveDcaMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppdcaMsg").html(msg);
                $('#ApproveDcaMsgModal').modal('show');
            }
        });
    }
}
function UpdateTaxDCA(DCAId) {
    var isValid = ValidateTaxDCADetails();
    if (!isValid) return false;  

    //var addTaxDCADetails = {
    //    DCACodeID: DCAId,
    //    TypeOfTax: $("#AddTaxDCATypeOfTaxID").val(),
    //    NatureOfTax: $("#AddTaxDCANatureOfTaxID").val(),
    //    DCACode: $("#txtAddTaxDCACode").val(),
    //    DCAName: $("#txtAddTaxDCAName").val(),
    //    TaxNoIDs: $("#addTaxDCATaxNosMLID").val(),
    //    CCTypeIDs: $("#addTaxDCACCTypeMLID").val(),        
    //    ITCodeID: $("#AddTaxDCAITCodeID").val(),
    //    DCATypeID: 2,
    //    CheckUpdationType: 'ReturnUpdate'
    //};

    var addTaxDCADetails = {
        DCACodeID: DCAId,
        TypeOfTax: $("#AddTaxDCATypeOfTaxID").val(),
        NatureOfTax: $("#AddTaxDCANatureOfTaxID").val(),
        DCACode: $("#txtAddTaxDCACode").val(),
        DCAName: $("#txtAddTaxDCAName").val(),      
        CCTypeIDs: $("#addTaxDCACCTypeMLID").val(),
        ITCodeID: $("#AddTaxDCAITCodeID").val(),
        DCATypeID: 2,
        CheckUpdationType: 'ReturnUpdate'
    };
    var addFailMsg = "Error Occurred While Adding Tax DCA.";
    var addSuccessMsg = "Tax DCA Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveDCA',
        data: { dcaDetails: addTaxDCADetails },
        success: function (Data) {
            if (Data.saveStatus == 'Updated') {
                var msg = '';
                $('#ApproveDcaMsgModal').modal('show');
                msg = "<div>Updated Successfully</div>";
                $("#AppdcaMsg").html(msg);
            }
            else {
                msg = "<div>" + Data.saveStatus + "</div>";
                $("#AppdcaMsg").html(msg);
                $('#ApproveDcaMsgModal').modal('show');
            }
        },
        failure: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppdcaMsg").html(msg);
            $('#ApproveDcaMsgModal').modal('show');
        },
        error: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppdcaMsg").html(msg);
            $('#ApproveDcaMsgModal').modal('show');
        }
    });
}

function ValidateTaxDCADetails() {
    var isValid = true;

    var errorMsg = "Please enter all required fields!\n";
    var TypeOfTax = $("#AddTaxDCATypeOfTaxID").val();
    var NatureOfTax = $("#AddTaxDCANatureOfTaxID").val();
    var DCACode = $("#txtAddTaxDCACode").val();
    var DCAName = $("#txtAddTaxDCAName").val();
   // var TaxNoIDs = $("#addTaxDCATaxNosMLID").val();
    var CCTypeIDs = $("#addTaxDCACCTypeMLID").val();
    var PaymentTypeIDs = $("#addTaxDCAPaymenttypeMLID").val();
    var ITCodeID = $("#AddTaxDCAITCodeID").val();


    if (CCTypeIDs == "" || CCTypeIDs == null || DCACode == "" || DCACode == null || DCAName == "" || DCAName == null
        || ITCodeID == "" || ITCodeID == null || 
       TypeOfTax == "" || TypeOfTax == null || NatureOfTax == "" || NatureOfTax == null
    ) {
        isValid = false;
    }

    if (!isValid) {
        $("#divAddTaxDCAInfoMsg").text(errorMsg);
        $("#divAddTaxDCAInfoMsg").addClass("alert-danger");
        $("#divAddTaxDCAInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divAddTaxDCAInfoMsg").addClass("hidden");
    }

    return isValid;
}

function UpdateGeneralDCA(DCAId) {

    var isValid = ValidateGeneralDCADetails();
    if (!isValid) return false;

    var addGeneralDCADetails = {
        DCACodeID: DCAId,
        DCACode: $("#txtAddGenerelDCACode").val(),
        DCAName: $("#txtAddGenerelDCAName").val(),
        CCTypeIDs: $("#addGeneralDCACCtypeMLID").val(),        
        ITCodeID: $("#ITCodeddlID").val(),
        RoleId: $("#txtUpdateGeneralDCARoleId").val(),
        DCATypeID: 1,
        CheckUpdationType: 'ReturnUpdate'
    };
    var addFailMsg = "Error Occurred While Adding General DCA.";
    var addSuccessMsg = "General DCA Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveDCA',
        data: { dcaDetails: addGeneralDCADetails },
        success: function (Data) {
            if (Data.saveStatus == 'Updated') {
                var msg = '';
                $('#ApproveDcaMsgModal').modal('show');
                msg = "<div>Updated Successfully</div>";
                $("#AppdcaMsg").html(msg);
            }
            else {
                msg = "<div>" + Data.saveStatus + "</div>";
                $("#AppdcaMsg").html(msg);
                $('#ApproveDcaMsgModal').modal('show');
            }
        },
        failure: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppdcaMsg").html(msg);
            $('#ApproveDcaMsgModal').modal('show');
        },
        error: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppdcaMsg").html(msg);
            $('#ApproveDcaMsgModal').modal('show');
        }
    });
}

function ValidateGeneralDCADetails() {
    var isValid = true;

    var errorMsg = "Please enter all required fields!\n";
    var DCACode = $("#txtAddGenerelDCACode").val();
    var DCAName = $("#txtAddGenerelDCAName").val();
    var CCType = $("#addGeneralDCACCtypeMLID").val();
    var PaymentType = $("#addGeneralDCAPaymenttypeMLID").val();
    var ITCode = $("#ITCodeddlID").val();


    if (CCType == "" || CCType == null || DCACode == "" || DCACode == null || DCAName == "" || DCAName == null
        || PaymentType == "" || PaymentType == null || ITCode == "" || ITCode == null) {
        isValid = false;
    }

    if (!isValid) {
        $("#divAddGeneralDCAInfoMsg").text(errorMsg);
        $("#divAddGeneralDCAInfoMsg").addClass("alert-danger");
        $("#divAddGeneralDCAInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divAddGeneralDCAInfoMsg").addClass("hidden");
    }

    return isValid;
}

function ApprovesSubDCa(Subdcaid, Dcaid, SDcaStatus) {
    var appstatus = $("#AppsDcastatus option:selected").text();
    retnote = $("#AppsDcaNote").val();
    msg = $("#divApprsDcaInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifySDca = {
            DCACodeID: Dcaid,
            SubDCACodeID: Subdcaid,
            Action: appstatus,
            RemarksNote: retnote,
            Createdby: $("#txtApprsDcaCreatedby").val(),
            RoleId: $("#roleid").val(),
            SubDcaStatus: SDcaStatus
        };
        addFailMsg = "Error Occurred While Verification";

        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }


        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveSubDCA",
            data: JSON.stringify({ apprSubDca: verifySDca }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submited") {
                    var msg = '';
                    $('#ApproveSDcaMsgModal').modal('show');
                    msg = "<div>Sub Account Head " + finalmsg+"</div>";
                    $("#AppsdcaMsg").html(msg);
                }
                else {
                    msg = "<div>" + response.saveStatus + "</div>";
                    $("#AppsdcaMsg").html(msg);
                    $('#ApproveSDcaMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppsdcaMsg").html(msg);
                $('#ApproveSDcaMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppsdcaMsg").html(msg);
                $('#ApproveSDcaMsgModal').modal('show');
            }
        });
    }
}

function UpdateSubDCA(Subdcaid, Dcaid, Dcacode) {
    var isValid = ValidateAddEditSubDCA();
    if (!isValid) return false;
    //debugger;
    var addEditSubDCADetails = {
        SubDCACodeID: Subdcaid,
        DCACodeID: Dcaid,
        SubDCACode: $("#txtAddEditSubDCACode").val(),
        SubDCAName: $("#txtAddEditSubDCAName").val(),
        ITCodeID: $("#SubDCAITCodeddlID option:selected").val(),
        RoleId: $("#roleid").val(),
        ModifiedBy: $("#txtApprsDcaCreatedby").val(),
        CheckUpdationType:'ReturnUpdate'
    };
    var addFailMsg = "Error Occurred While Update Sub DCA.";
    var addSuccessMsg = "Sub DCA Updated Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveSubDCA',
        data: { subDCADetails: addEditSubDCADetails },
        success: function (Data) {
            if (Data.saveStatus == 'Updated') {
                var msg = '';
                $('#ApproveSDcaMsgModal').modal('show');
                msg = "<div>Updated Successfully</div>";
                $("#AppsdcaMsg").html(msg);
            }
            else {
                msg = "<div>" + Data.saveStatus + "</div>";
                $("#AppsdcaMsg").html(msg);
                $('#ApproveSDcaMsgModal').modal('show');
            }
        },
        failure: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppsdcaMsg").html(msg);
            $('#ApproveSDcaMsgModal').modal('show');
        },
        error: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppsdcaMsg").html(msg);
            $('#ApproveSDcaMsgModal').modal('show');
        }
    });


}

function ValidateAddEditSubDCA() {
    var isValid = true;

    var errorMsg = "Please enter all required fields!\n";
    //var DCACodeID = $("#SubDCAddlCodeID").val();
    var SubDCACode = $("#txtAddEditSubDCACode").val();
    var SubDCAName = $("#txtAddEditSubDCAName").val();
    var ITCodeID = $("#SubDCAITCodeddlID").val();


    if (DCACodeID == "" || DCACodeID == null || SubDCACode == "" || SubDCACode == null || SubDCAName == "" || SubDCAName == null
        || ITCodeID == "" || ITCodeID == null
    ) {
        isValid = false;
    }

    if (!isValid) {
        $("#divAddSubDCAInfoMsg").text(errorMsg);
        $("#divAddSubDCAInfoMsg").addClass("alert-danger");
        $("#divAddSubDCAInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divAddSubDCAInfoMsg").addClass("hidden");
    }

    return isValid;
}

function UpdateAmendCCData(Amendid, AmendType, year, cctype) {
    //alert(year);
    //debugger;
    isValid = true;
    var errorMsg = "";
    var type = $("#ddlCCAmendType option:selected").val();
    var OldBudget = $("#txtCCBudgetold").val();
    var OldBalance = $("#txtCCBalanceOld").val();
    var extraAmount = $("#AmendCCBudgetAmount").val();
    var amount = $("#AmendCCBudgetAmount").val();
    if (amount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (type == 'Substract') {
        var substract = parseFloat(OldBalance) - parseFloat(amount);
        if (substract < 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Substract Amount is greater than the Balance</p>";
            isValid = false;
        }
    }

    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAmendCCInfoMsg").text("");
        $("#divAmendCCInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divAmendCCInfoMsg").addClass("alert-danger");
        $("#divAmendCCInfoMsg").removeClass("hidden alert-success");

    }
    else {

        $("#divAmendCCInfoMsg").text("");
        $("#divAmendCCInfoMsg").addClass("hidden");
        var amendcc = {
            CCCode: $("#lblCcAmendCode").text(),
            AmendedValue: amount,
            AmendmentType: AmendType,
            BudgetId: $("#txtCCBudgetid").val(),
            OldmendedValue: $("#txtoldAmend").val(),
            CCBudgetAmendmentid: Amendid,
            CreatedBy: $("#txtAppccAmendCreatedby").val(),
            FYYear: year
        };


        addFailMsg = "Error Occurred While Amending Cost Center Budget.";
        addSuccessMsg = "Budget Amended Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/AccountsApproval/UpdateCCAmendBudget',
            data: { amendCCBudget: amendcc },
            success: function (Data) {
                if (Data.saveStatus === 'Updated') {
                    $('#ApproveCCAmendMsgModal').modal('show');
                    var msg = "<div>" + addSuccessMsg + "</div>";
                    $("#AppCCAmendMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + Data.saveStatus + "</div>";
                    $("#AppCCAmendMsg").html(msg1);
                    $('#ApproveCCAmendMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCAmendMsg").html(msg);
                $('#ApproveCCAmendMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCAmendMsg").html(msg);
                $('#ApproveCCAmendMsgModal').modal('show');
            }
        });
    }
}
function UpdateDCABudgetData(Code, CctypeId, CCType) {
    var tablerowcount = $("#ApprDCABudgetTable tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        //alert(Code + "---" + CctypeId + "---" + CCType);
        var remarks = $("#txtapprdbremarks").val();

        if (remarks == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }

        var amountcount = 0, checkcount = 0, selectedcheck = 0,validcount = 0;
        $("#ApprDCABudgetTable tbody tr").each(function () {
            var currentRow = $(this);
            var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
            var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
            if (checkbox === false) {
                checkcount = checkcount + 1;
            }
            if (checkbox === false && amount !== "") {

                validcount = validcount + 1;
            }
            else {
                selectedcheck = selectedcheck + 1;
            }
            //if (checkbox == false) {
            //    checkcount = checkcount + 1;
            //}
            //else {
            //    selectedcheck = selectedcheck + 1;
            //}
        });
        if (checkcount == tablerowcount) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check DCA Code to Assign budget</p>";
            isValid = false;
        }
        if (validcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check DCA Code to Assign budget</p>";
            isValid = false;
        }
        if (selectedcheck > 0) {
            $("#ApprDCABudgetTable tbody tr").each(function () {
                var currentRow = $(this);
                var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
                var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
                if (checkbox == true) {
                    if (amount == "") {
                        amountcount = amountcount + 1;
                    }

                }
            });
            if (amountcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Dca Budget</p>";
                isValid = false;
            }
        }       
        var DCABudget = $("#txtApprDCABudgetSubTotal").val();
        var CCupdatedBalAmount = $("#txtapprCCBudgetBalance").val();
        var olddcabudgetsubtotal = $("#txtApprDCABudgetOld").val();
        
        if (parseFloat(DCABudget) > (parseFloat(CCupdatedBalAmount) + parseFloat(olddcabudgetsubtotal))) {
            errorMsg += "<p style='margin-top:-5px!important;'>Dca Budget is greater than CC Budget</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divapprDCAInfoMsg").text("");
            $("#divapprDCAInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divapprDCAInfoMsg").addClass("alert-danger");
            $("#divapprDCAInfoMsg").removeClass("hidden alert-success");
        }
        else {

            $("#divapprDCAInfoMsg").text("");
            $("#divapprDCAInfoMsg").addClass("hidden");
            var totalRowCount = $("#ApprDCABudgetTable tbody tr").length;
            if (totalRowCount > 0) {
                var DcaCodes = '', amounts = '';
                $("#ApprDCABudgetTable tbody tr").each(function () {
                    var currentRow = $(this);
                    var dcacode = currentRow.find("td").eq(1).html();
                    var dcaAmount = currentRow.find("td").eq(3).find("input[type='text']").val();
                    var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
                    if (checkbox == true) {
                        if (dcaAmount != "" && dcaAmount != null) {
                            DcaCodes += dcacode + ",";
                            amounts += dcaAmount + ",";
                        }
                    }
                });
                addFailMsg = "Error Occurred While Adding DCA Budget";
                var DcaBudgetDetails = {};
                if (CCType != "Performing") {
                    DcaBudgetDetails = {
                        UDCACode: DcaCodes,
                        UCCCode: Code,
                        UDcaAmounts: amounts,
                        UFYyear: $("#txtapprdbyear").val(),
                        URemarks: $("#txtapprdbremarks").val(),
                        UAction: "Update",
                        UOldBudgetAmount: $("#txtApprDCABudgetOld").val(),
                        RoleId: $("#txtUpdateDCABudgetRoleId").val(),
                        UCreatedBy: $("#txtAppDcaBudCreatedby").val()

                    };
                } else {
                    DcaBudgetDetails = {
                        UDCACode: DcaCodes,
                        UCCCode: Code,
                        UDcaAmounts: amounts,
                        URemarks: $("#txtapprdbremarks").val(),
                        UAction: "Update",
                        UOldBudgetAmount: $("#txtApprDCABudgetOld").val(),
                        RoleId: $("#txtUpdateDCABudgetRoleId").val(),
                        UCreatedBy: $("#txtAppDcaBudCreatedby").val()
                    };
                }
                
                addFailMsg = "Error Occurred While Updating DCA Budget";
                $.ajax({
                    type: "POST",
                    url: "/AccountsApproval/UpdateDCAAssignedBudget",
                    data: JSON.stringify({ updateDcaBudget: DcaBudgetDetails }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.saveStatus == 'Updated') {
                            $('#ApproveDCABudgetMsgModal').modal('show');
                            msg = "<div>Budget  Updated Successfully</div>";
                            $("#AppDcaBudgetMsg").html(msg);
                        }
                        else {
                            msg = "<div>" + response.saveStatus + "</div>";
                            $("#AppDcaBudgetMsg").html(msg);
                            $('#ApproveDCABudgetMsgModal').modal('show');
                        }
                    },
                    failure: function (response) {
                        var msg = "<div>" + response.saveStatus + "</div>";
                        $("#AppDcaBudgetMsg").html(msg);
                        $('#ApproveDCABudgetMsgModal').modal('show');
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.responseText);
                    }
                });


            }
        }
    }
}
function ApproveUser(id, Roleid) {
    var appstatus = $("#Appstatus option:selected").text();
    retnote = $("#ApprUserRetNote").val();
    msg = $("#divApproveUserInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var apprUsr = {
            RoleID: Roleid,
            Userid: id,
            Action: appstatus,
            RemarksNote: retnote
        };
        addFailMsg = "Error Occurred While Adding User Verification";
        addSuccessMsg = "Usere Verified Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/AccountsApproval/ApproveUser',
            data: { apprUsers: apprUsr },
            success: function (Data) {
                if (Data.saveStatus == "Submitted") {
                    $('#ApproveUserMsgModal').modal('show');
                    var msg = "<div>User Verified Successfully</div>";
                    $("#AppUserMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + addFailMsg + "</div>";
                    $("#AppUserMsg").html(msg);
                    $('#ApproveUserMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppUserMsg").html(msg);
                $('#ApproveUserMsgModal').modal('show');
            }
        });
    }
}


//User Return Update 
function ddlUpUserRoleChange() {

    var Roleid = $("#ddlUpUserRole  option:selected").val();

    //for accountant and project manager bind cccodes,for accountant bind all for prj mgr bind only performing cc

    if (Roleid === "110" || Roleid === "100") {
        $("#ddlUpMultiCCCode option:selected").prop("selected", false);
        $("#ddlUpMultiCCCode option").remove();
        $('#ddlUpMultiCCCode').multiselect('rebuild');
        $.ajax({
            type: "POST",
            url: "/Home/GetUserCC",
            data: '{Roleid:"' + Roleid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $.each(response, function () {
                    $('#ddlUpMultiCCCode').append('<option value="' + this['CC_Code'] + '">' + this['CC_Name'] + '</option>').multiselect('rebuild');
                });
                $("#divCCCodes").removeClass('hidden');

            },
            failure: function (response) {
            

            },
            error: function (response) {
             
                //removeSpinner($('#ajax-container'), function () {
                //    $('#ajax-container').html('Content loaded.');
                //});
            }
        });
    }
    else {
        $("#divCCCodes").addClass('hidden');
    }
}

function PasswordValidatorForUpdate(txt) {
    var pwd = txt.value;
    //var passwordstrength = document.getElementById("<%=txtPassword.ClientID%>");
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[!@#$%^&*]"); //Special Character.

    var passed = 0;
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(pwd)) {
            passed++;
        }
    }
    if (pwd.length < 6) {
        //alert("Password must contain atleast 6 characters");
        $("#divUpUserInfoMsg").text("");
        $("#divUpUserInfoMsg").append("<div>Password must contain atleast 6 characters</div>");
        $("#divUpUserInfoMsg").addClass("alert-danger");
        $("#divUpUserInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else if (passed > 3) {
        //alert("Valid");
        $("#divUpUserInfoMsg").text("");
        $("#divUpUserInfoMsg").addClass("hidden");
    }
    else {
        $("#divUpUserInfoMsg").text("");
        $("#divUpUserInfoMsg").append("<div>Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,></div>");
        $("#divUpUserInfoMsg").addClass("alert-danger");
        $("#divUpUserInfoMsg").removeClass("hidden alert-success");
        //alert("Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,>");
        return false;
    }
}
function ValidateConfirmPasswordUpdate() {
    var pwd = $("#txtUpPwd").val();
    var Confpwd = $("#txtUpConfPwd").val();
    if (pwd != Confpwd) {
        $("#divUpUserInfoMsg").text("");
        $("#divUpUserInfoMsg").append("<div>Confirm Password not matching with Password</div>");
        $("#divUpUserInfoMsg").addClass("alert-danger");
        $("#divUpUserInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpUserInfoMsg").text("");
        $("#divUpUserInfoMsg").addClass("hidden");
    }

}

function ReturnUpdateUserData(Userid) {
    isValid = true;
    var errorMsg = "";
    var username = $("#txtUpNUsername").val();
    var role = $("#ddlUpUserRole option:selected").index();
    var pwd = $("#txtUpPwd").val();
    var cpwd = $("#txtUpConfPwd").val();
    var Roleid = $("#ddlUpUserRole  option:selected").val();
    if (username == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Username</p>";
        isValid = false;
    }
    else {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!expr.test(username)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Emailid for Username</p>";
            isValid = false;
        }
    }
    if (role == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Role</p>";
        isValid = false;
    }
    else if (Roleid === "100" || Roleid === "110") {
        var options = $('#ddlUpMultiCCCode > option:selected');
        if (options.length === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Centers</p>";
            isValid = false;
        }
    }
    if (pwd == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Password</p>";
        isValid = false;
    }
    else {

        if (pwd.length < 6 && pwd.length < 3) {
            errorMsg += "<p style='margin-top:-5px!important;'>Password must contain atleast 6 characters</p>";
            isValid = false;
        }
        else {
            var regex = new Array();
            regex.push("[A-Z]"); //Uppercase Alphabet.
            regex.push("[a-z]"); //Lowercase Alphabet.
            regex.push("[0-9]"); //Digit.
            regex.push("[!@#$%^&*]"); //Special Character.

            var passed = 0;
            for (var i = 0; i < regex.length; i++) {
                if (new RegExp(regex[i]).test(pwd)) {
                    passed++;
                }
            }
            if (passed !== 4) {
                errorMsg += "<p style='margin-top:-5px!important;'>Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,></p>";
                isValid = false;
            }
        }
    }
    if (cpwd == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter confirm Password</p>";
        isValid = false;
    }
    else if (pwd != cpwd) {
        errorMsg += "<p style='margin-top:-5px!important;'>Confirm Password not matching with Password</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpUserInfoMsg").text("");
        $("#divUpUserInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpUserInfoMsg").addClass("alert-danger");
        $("#divUpUserInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpUserInfoMsg").text("");
        $("#divUpUserInfoMsg").addClass("hidden");

        var encodedpwd = window.btoa(pwd);

        var saveNewUser = {};
        if (Roleid === "100" || Roleid === "110") {
            var SelectedCC = $('#ddlUpMultiCCCode option:selected').toArray().map(item => item.value).join() + ',';
            saveNewUser = {
                Userid: Userid,
                Username: username,
                Password: encodedpwd,
                RoleID: $("#ddlUpUserRole option:selected").val(),
                CheckUpdationType: 'ReturnUpdate',
                Action: 'Update',
                CCCode: SelectedCC
            };

        }
        else {
            saveNewUser = {
                Userid: Userid,
                Username: username,
                Password: encodedpwd,
                RoleID: $("#ddlUpUserRole option:selected").val(),
                Action: 'Update',
                CheckUpdationType: 'ReturnUpdate'
            };

        }
        addFailMsg = "Error Occurred While Updating User";
        addSuccessMsg = "User Detials Updated Successfully.";


        $.ajax({
            type: "POST",
            url: "/Home/UpdateUser",
            data: JSON.stringify({ usr: saveNewUser }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            success: function (Data) {
                if (Data.saveStatus == "Submitted") {
                    $('#ApproveUserMsgModal').modal('show');
                    var msg = "<div>User Updated Successfully</div>";
                    $("#AppUserMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + addFailMsg + "</div>";
                    $("#AppUserMsg").html(msg);
                    $('#ApproveUserMsgModal').modal('show');
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppUserMsg").html(msg);
                $('#ApproveUserMsgModal').modal('show');
            }

        });
    }

}

function upSCgstCheckchange(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('upSCGstApplicable');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    })
    var ids = document.getElementsByName('upSCGstApplicable');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked == true) {
            // alert(ids[i].value);
            if (ids[i].value == 'Yes') {
                $("#divUpSCClientGst").removeClass('hidden');
                $.ajax({
                    type: "POST",
                    url: "/Home/GetAllStates",
                    data: '{}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {

                        var rowno = 1;
                        var newRow = $("<tr>");
                        var cols = "";
                        cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
                        cols += '<td><select class="form-control dropdown-toggle" id="ddlUpSCGstState"><option value="">-Please Select-</option>';
                        $.each(response, function () {
                            cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                        });
                        cols += '</select>';
                        cols += '</td><td style="text-align:center"><input class="form-control" data-val="true" id="txtUpGSTNo" name="txtGSTNo" type="text" /></td >';
                        cols += '<td style="text-align:center"><ul class="list-inline">';
                        cols += '<li class="eagle-checkbox">';
                        cols += '<label class="eagle-check custom-checkbox">';
                        cols += '<input type="checkbox" class="eagle-check-input" id="chkGstCheck">';
                        cols += '<span class="eagle-check-indicator"></span>  </label>';
                        cols += '</li>';
                        cols += '</ul ></td>';
                        //cols += '<td style="text-align:center"><input type="button" class="ibtnUpClientDel btn btn-md btn-danger" value="Delete"></td>';
                        newRow.append(cols);
                        $("table.order-list.UpSClientGstGrid").append(newRow);
                        $("#divUpSubClientInfoMsg").text("");
                        $("#divUpSubClientInfoMsg").addClass("hidden");
                    },
                    failure: function (response) {
                    },
                    error: function (response) {
                    }
                });

            }
            else {
                $("#divUpSCClientGst").addClass('hidden');
                $("#UpSClientGstTable tbody tr").remove();
                $("#divUpSubClientInfoMsg").text("");
                $("#divUpSubClientInfoMsg").addClass("hidden");
            }
        }
    }
}

function ReturnUpAmendCCVerification() {
    var oldamount = $("#txtoldAmend").val();
    var type = $("#ddlCCAmendType option:selected").val();
    var amount = $("#AmendCCBudgetAmount").val();
    var newbudget = 0, newbalance = 0;

    if (amount !== "") {
        if (parseFloat(amount) !== parseFloat(oldamount)) {

            if (type === 'Add') {
                var oldBudget1 = parseFloat($("#txtCCBudgetold").val()) - parseFloat(oldamount);
                var oldBalance1 = parseFloat($("#txtCCBalanceOld").val()) - parseFloat(oldamount);

                newbudget = parseFloat(oldBudget1) + parseFloat(amount);
                newbalance = parseFloat(oldBalance1) + parseFloat(amount);

                $("#lblCcAmendBudget").html(newbudget);
                $("#lblCcAmendBudgetBalance").html(newbalance);

            } else {
                var oldBudget = parseFloat($("#txtCCBudgetold").val()) + parseFloat(oldamount);
                var oldBalance = parseFloat($("#txtCCBalanceOld").val()) + parseFloat(oldamount);

                isValid = true;
                var errorMsg = "";
                if (oldBalance === 0 || oldBalance === "") {
                    $("#divAmendCCInfoMsg").text("");
                    $("#divAmendCCInfoMsg").append("<div>Budget Balance is Zero,Cannot Substract Budget</div>");
                    $("#divAmendCCInfoMsg").addClass("alert-danger");
                    $("#divAmendCCInfoMsg").removeClass("hidden alert-success");
                }
                else {
                    var substract = parseFloat(oldBalance) - parseFloat(amount);
                    if (substract < 0) {
                        $("#divAmendCCInfoMsg").text("");
                        $("#divAmendCCInfoMsg").append("<div>Substract Amount is greater than the Balance</div>");
                        $("#divAmendCCInfoMsg").addClass("alert-danger");
                        $("#divAmendCCInfoMsg").removeClass("hidden alert-success");
                    }
                    else {
                        newbudget = parseFloat(oldBudget) - parseFloat(amount);
                        newbalance = parseFloat(oldBalance) - parseFloat(amount);
                        $("#lblCcAmendBudget").html(newbudget);
                        $("#lblCcAmendBudgetBalance").text(newbalance);
                    }

                }
            }
        }
    }
    else {

        if (type === 'Add') {
            var oldBudget2 = parseFloat($("#txtCCBudgetold").val()) - parseFloat(oldamount);
            var oldBalance2 = parseFloat($("#txtCCBalanceOld").val()) - parseFloat(oldamount);
            $("#lblCcAmendBudget").html(parseFloat(oldBudget2).toFixed(2));
            $("#lblCcAmendBudgetBalance").html(parseFloat(oldBalance2).toFixed(2));
        }
        else {
            var oldBudget3 = parseFloat($("#txtCCBudgetold").val()) + parseFloat(oldamount);
            var oldBalance3 = parseFloat($("#txtCCBalanceOld").val()) + parseFloat(oldamount);
            $("#lblCcAmendBudget").html(parseFloat(oldBudget3).toFixed(2));
            $("#lblCcAmendBudgetBalance").html(parseFloat(oldBalance3).toFixed(2));

        }

    }
}
function Approvejournal(TranNo) {
    var appstatus = $("#AppInvstatus option:selected").text();
    var retnoteid = "AppInvNote-" + TranNo;
    retnote = $("#" + retnoteid + "").val();
    msgid = "divApprjvInfoMsg-" + TranNo;
    msg = $("#" + msgid + "");
    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");

        var verifyjv = {
            TranNo: TranNo,
            Action: appstatus,
            ApprovalNote: retnote,
            Createdby: $("#txtAppjvCreatedby").val(),
            Roleid: $("#roleid").val(),
        };
        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/AccountsApproval/ApproveJV",
            data: JSON.stringify({ apprjv: verifyjv }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Successfull") {
                    $('#ApprovejvMsgModal').modal('show');
                    msg = "<div>JV: " + finalmsg + "</div>";
                    $("#AppjvMsg").html(msg);
                }
                else {
                    msg = "<div>" + addFailMsg + "</div>";
                    $("#AppjvMsg").html(msg);
                    $('#ApprovejvMsgModal').modal('show');
                }
            },
            failure: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppjvMsg").html(msg);
                $('#ApprovejvMsgModal').modal('show');
            },
            error: function (response) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppjvMsg").html(msg);
                $('#ApprovejvMsgModal').modal('show');
            }
        });
    }
}
function JVRowUpd_BindNewRowtoGrid() {
    isValid = true;
    var errorMsg = "";
    var ledgercount = 0, typecount = 0, ledgervaluecount = 0, ledgerchkcount = 0;
    $("#JVTable tbody tr").each(function () {
        var currentRow = $(this);
        var Ledger = currentRow.find("td").eq(1).find("select option:selected").index();
        var Trantype = currentRow.find("td").eq(2).find("select option:selected").index();
        var ledamount = currentRow.find("td").eq(3).find("input[type='text']").val();
        var check = currentRow.find("td").eq(4).find('input[type="checkbox"]').is(':checked');
        $("#LedExist").val("1");
        if (Ledger === 0) { ledgercount = ledgercount + 1; }
        if (Trantype === 0) { typecount = typecount + 1; }
        if (ledamount === "") { ledgervaluecount = ledgervaluecount + 1; }
        if (check === false) { ledgerchkcount = ledgerchkcount + 1; }
    });
    $("#txtupdsumcreditamount").val("");
    $("#txtupdsumdebitamount").val("");
    if (ledgercount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Ledger Name</p>";
        isValid = false;
    }
    if (typecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Transaction Type</p>";
        isValid = false;
    }
    if (ledgervaluecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (ledgerchkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Ledger</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divJournalCreationupdInfoMsg").text("");
        $("#divJournalCreationupdInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divJournalCreationupdInfoMsg").addClass("alert-danger");
        $("#divJournalCreationupdInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {

        var selectedledgerlist = [];
        $("#JVTable tbody tr").each(function () {
            var currentRow = $(this);
            var ledger = currentRow.find("td").eq(1).find("select option:selected").val();
            if (ledger !== 0) {
                selectedledgerlist.push(currentRow.find("td").eq(1).find("select option:selected").val());
            }
        });
        var duplicatelist = selectedledgerlist.filter(i => selectedledgerlist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Ledger for Journal</p>";
            $("#divJournalCreationupdInfoMsg").text("");
            $("#divJournalCreationupdInfoMsg").append(finalerror2 + "</div>");
            $("#divJournalCreationupdInfoMsg").addClass("alert-danger");
            $("#divJournalCreationupdInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divJournalCreationupdInfoMsg").text("");
            $("#divJournalCreationupdInfoMsg").addClass("hidden");
            var count = $("#JVTable tbody tr").length;
            var rowno = count + 1;
            var newRow = $("<tr>");
            var cols = "";
            var selectedledgerlist1 = [];
            $("#JVTable tbody tr").each(function () {
                var currentRow = $(this);
                var ledger1 = currentRow.find("td").eq(1).find("select option:selected").val();
                if (ledger1 !== 0) {
                    selectedledgerlist1.push(currentRow.find("td").eq(1).find("select option:selected").val());
                }
            });
            $.ajax({
                type: "POST",
                url: "/Accounts/GetLedger",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var count = Object.keys(response).length;
                    if (count > 0) {
                        cols += '<td style="text-align:center">' + rowno + '</td>';
                        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle ctaxtype" id="ddlLedger">';
                        cols += '<option selected="selected" value="Select">-Select-</option>';
                        $.each(response, function (index, value) {
                            var status = checkValueInArray(this['LedgerId'], selectedledgerlist1);
                            if (status === false) {
                                cols += '<option value=' + this['LedgerId'] + '>' + this['LedgerName'] + '</option>';
                            }

                        });
                        cols += '</select></td>';
                        cols += ' <td style="text-align:center"><select class="form-control dropdown-toggle ctrantype" id="ddlTranType" onchange="Ledgercountupdate();">';
                        cols += '<option selected="selected" value="Select">-Select-</option><option value="Credit">Credit</option><option value="Debit">Debit</option></select></td>';
                        cols += '<td style="text-align:center"><input type="text" class="form-control ctaxamount" value="" id="txttranAmount"   onkeypress="return ValidateAmount(this,event);" onkeyup="Ledgercountupdate()" /></td>';
                        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">';
                        cols += '<input type="checkbox" class="eagle-check-input" id="chkJV"><span class="eagle-check-indicator"></span> <span class="eagle-check-description"></span>';
                        cols += '</label></li></ul></td>';
                        cols += '<td style="text-align:center"><input type="button" class="ibtnledgerdelete btn btn-md btn-danger" value="Delete"></td>';
                        newRow.append(cols);
                        $("table.order-list.jv").append(newRow);
                    }
                },
                failure: function (response) {
                    alert(response.responseText);
                },
                error: function (response) {
                    alert(response.responseText);
                }
            });

        }
    }

}
function Ledgercountupdate() {
    var creditamount = $("#txtupdsumcreditamount").val();
    var debitamount = $("#txtupdsumdebitamount").val();
    var subtotal = 0;
    var rowtotal = 0;
    var credittotal = 0;
    var debittotal = 0;
    $("#JVTable tbody tr").each(function () {
        var currentRow = $(this);
        rowtotal = currentRow.find("td").eq(3).find("input[type='text']").val();
        var Type = currentRow.find("td").eq(2).find("select option:selected").val();
        if (rowtotal != "") {
            if (Type === 'Credit') {
                credittotal = parseFloat(credittotal) + parseFloat(rowtotal);
            }
            else if (Type === 'Debit') {
                debittotal = parseFloat(debittotal) + parseFloat(rowtotal);
            }
        }
    });
    if (rowtotal != "") {
        if (credittotal != "") {
            $("#txtupdsumcreditamount").val(credittotal);
        }
        else {
            $("#txtupdsumcreditamount").val("");
        }
        if (debittotal != 0) {
            $("#txtupdsumdebitamount").val(debittotal);
        }
        else {
            $("#txtupdsumdebitamount").val("");
        }
    }
    else {
        $("#txtupdsumcreditamount").val("");
        $("#txtupdsumdebitamount").val("");
    }
}
function SubmitupdateJournal() {
    //debugger;
    var date = $("#txtjvupdDate").val();
    var Remarks = $("#txtJVupdDescription").val();
    var Creditsum = $("#txtupdsumcreditamount").val();
    var Debitsum = $("#txtupdsumdebitamount").val();
    isValid = true;
    var errorMsg = "";
    if (date == "" || date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select JV Updation Date</p>";
        isValid = false;
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (Creditsum == "" || Creditsum == null || Creditsum == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Credit Ledger Amount</p>";
        isValid = false;
    }
    if (Debitsum == "" || Debitsum == null || Debitsum == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Debit Ledger Amount</p>";
        isValid = false;
    }
    if (Creditsum != Debitsum) {
        errorMsg += "<p style='margin-top:-5px!important;'>Debit and Credit amount Are not equal</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divJournalCreationupdInfoMsg").text("");
        $("#divJournalCreationupdInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divJournalCreationupdInfoMsg").addClass("alert-danger");
        $("#divJournalCreationupdInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divJournalCreationupdInfoMsg").text("");
        $("#divJournalCreationupdInfoMsg").addClass("hidden");
        var ledgercount = 0, typecount = 0, ledgervaluecount = 0, ledgerchkcount = 0, creditcount = 0, debitcount = 0;
        $("#JVTable tbody tr").each(function () {
            var currentRow = $(this);
            var Ledger = currentRow.find("td").eq(1).find("select option:selected").index();
            var Trantype = currentRow.find("td").eq(2).find("select option:selected").index();
            var Trantypeval = currentRow.find("td").eq(2).find("select option:selected").val();
            var ledamount = currentRow.find("td").eq(3).find("input[type='text']").val();
            var check = currentRow.find("td").eq(4).find('input[type="checkbox"]').is(':checked');
            if (Ledger != 0 || Trantype != 0 || ledamount != "" || check == true) {
                $("#LedExist").val("1");
                if (Ledger == 0) { ledgercount = ledgercount + 1; }
                if (Trantype == 0) { typecount = typecount + 1; }
                if (ledamount == "") { ledgervaluecount = ledgervaluecount + 1; }
                if (check == false) { ledgerchkcount = ledgerchkcount + 1; }
                if (Trantypeval == "Credit") { creditcount = creditcount + 1; }
                if (Trantypeval == "Debit") { debitcount = debitcount + 1; }
                if (creditcount > 1 && debitcount > 1) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Invalid Credit and Debit Selection</p>";
                    isValid = false;
                }
            }

        });

        if (ledgercount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Ledger Name</p>";
            isValid = false;
        }
        if (typecount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction Type</p>";
            isValid = false;
        }
        if (ledgervaluecount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Ledger Amount</p>";
            isValid = false;
        }
        if (ledgerchkcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check Ledger</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divJournalCreationupdInfoMsg").text("");
            $("#divJournalCreationupdInfoMsg").append(finalerror1 + errorMsg + "</div>");
            $("#divJournalCreationupdInfoMsg").addClass("alert-danger");
            $("#divJournalCreationupdInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            var duplicatedcacount = 0;
            var selectedledlist = [];
            $("#JVTable tbody tr").each(function () {
                var currentRow = $(this);
                var ledger = currentRow.find("td").eq(1).find("select option:selected").val();
                if (ledger !== 0) {
                    selectedledlist.push(currentRow.find("td").eq(1).find("select option:selected").val());
                }
            });
            var duplicatelist = selectedledlist.filter(i => selectedledlist.filter(ii => ii === i).length > 1);
            if (duplicatelist.length > 0) {
                var finalerror2 = "<div style='align:center'><p>Duplicate Ledger For JV</p>";
                $("#divJournalCreationupdInfoMsg").text("");
                $("#divJournalCreationupdInfoMsg").append(finalerror2 + "</div>");
                $("#divJournalCreationupdInfoMsg").addClass("alert-danger");
                $("#divJournalCreationupdInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divJournalCreationupdInfoMsg").text("");
                $("#divJournalCreationupdInfoMsg").addClass("hidden");
                //alert("Sucess");
                SaveUpdateJournal();
            }
        }
    }

}
function SaveUpdateJournal() {
    var createdby = $("#txtJournalupdatedby").val();
    var ledgers = "", trantypes = "", ledAmounts = "";
    var count = $("#ClientTaxTable tbody tr").length;
    var ledexist = $("#LedExist").val();
    if (ledexist == "1") {
        $("#JVTable tbody tr").each(function () {
            var currentRow = $(this);
            var rowno = currentRow.find("td").eq(0).html();
            var ledgerval = currentRow.find("td").eq(1).find("select option:selected").val();
            var ledtrantype = currentRow.find("td").eq(2).find("select option:selected").val();
            var ledamountval = currentRow.find("td").eq(3).find("input[type='text']").val();
            ledgers += ledgerval;
            ledgers += ",";
            trantypes += ledtrantype;
            trantypes += ",";
            ledAmounts += ledamountval;
            ledAmounts += ",";
        });
    }
    var Journaldetails = {
        JVCreationDate: $("#txtjvupdDate").val(),
        JVRemarks: $("#txtJVupdDescription").val(),
        Amount: $("#txtupdsumcreditamount").val(),
        TranNo: $("#txtltranno").val(),
        CreatedBy: createdby,
        Ledgers: ledgers,
        Trantypes: trantypes,
        Ledgeramounts: ledAmounts
    };
    addFailMsg = "Error Occurred While Updating Journal.";
    addSuccessMsg = "Journal Voucher Updated Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/AccountsApproval/Saveupdatejournal',
        data: { Journal: Journaldetails },
        success: function (Data) {
            if (Data.saveStatus == "Successfull") {
                var msg = "<div>" + addSuccessMsg + "</div>";
                $("#AppjvMsg").html(msg);
                $('#ApprovejvMsgModal').modal('show');
            }
        },
        failure: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppjvMsg").html(msg);
            $('#ApprovejvMsgModal').modal('show');
        },
        error: function (response) {
            var msg = "<div>" + addFailMsg + "</div>";
            $("#AppjvMsg").html(msg);
            $('#ApprovejvMsgModal').modal('show');
        }
    });

}
function ApproveTLA(Agid, Agencystatus) {
    var appstatus = $("#Appstatus option:selected").text();
    retnote = $("#ApprTLARetNote").val();
    msg = $("#divApproveTLInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus == "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Return Note</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $(msg).text("");
        $(msg).append(finalerror1 + errorMsg + "</div>");
        $(msg).addClass("alert-danger");
        $(msg).removeClass("hidden alert-success");
        return false;
    }
    else {
        $(msg).text("");
        $(msg).addClass("hidden");
        var appragency = {
            RoleId: $("#roleid").val(),
            CreatedBy: $("#txtAppTLCreatedby").val(),
            AgencyId: Agid,
            Action: appstatus,
            RemarksNote: retnote,
            AgencyStatus: Agencystatus
        };
        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            //url: "/AccountsApproval/ApproveITCode",
            url: "/AccountsApproval/ApproveTLAgency",
            data: JSON.stringify({ apprtlagency: appragency }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $('#ApproveTLMsgModal').modal('show');
                    var msg = "<div>Agency Code " + finalmsg + "</div>";
                    $("#AppTLMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppTLMsg").html(msg);
                    $('#ApproveTLMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppTLMsg").html(msg);
                $('#ApproveTLMsgModal').modal('show');
            }
        });
    }
}
function UpdateApprAgency(Agid) {    
    isValid = true;
    var errorMsg = "";
    var Agencyname = $("#txtUpagencyName").val();
    var Agencyaddress = $("#txtUpagencyNature").val();
    if (Agencyname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Agency Name</p>";
        isValid = false;
    }
    if (Agencyaddress == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Agency Address</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpdateTLInfoMsg").text("");
        $("#divUpdateTLInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpdateTLInfoMsg").addClass("alert-danger");
        $("#divUpdateTLInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divUpdateTLInfoMsg").text("");
        $("#divUpdateTLInfoMsg").addClass("hidden");
        var appragency = {
            AgencyId: Agid,
            RoleId: $("#roleid").val(),
            Createdby: $("#txtAppTLCreatedby").val(),
            AgencyId: Agid,
            Action: 'Update',
            AgencyName: Agencyname,
            AgencyAddress: Agencyaddress,           
            CheckUpdationType: 'ReturnUpdate'
        };
        addFailMsg = "Error Occurred While Updating Agency.";
        addSuccessMsg = "Agency Updated Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/EditTermLoanAgency',
            data: { agency: appragency },
            success: function (Data) {
                if (Data.saveStatus == "Submitted") {
                    $('#ApproveTLMsgModal').modal('show');
                    var msg = "<div>Agency Updated Successfully</div>";
                    $("#AppTLMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + Data.saveStatus + "</div>";
                    alert(msg1);       
                    $('#ApproveTLMsgModal').modal('show');
                    $("#AppTLMsg").html(msg1);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppTLMsg").html(msg);
                $('#ApproveTLMsgModal').modal('show');
            }
        });
    }

}







