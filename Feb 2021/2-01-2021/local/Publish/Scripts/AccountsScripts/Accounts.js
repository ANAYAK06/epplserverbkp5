$(document).ajaxSend(function (event, request, settings) {
    $("#divDCAFormLoader").append(getLoaderBlock());
    $('.loadingOverlay').show();
});

$(document).ajaxComplete(function (event, request, settings) {
    $('.loadingOverlay').hide();
});

$(document).ajaxError(function (event, request, settings) {
    $('.loadingOverlay').hide();
});
function getLoaderBlock() {
    return $('<div class="loadingOverlay"><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div>')
}
function CountRetnPayTotal() {
    var invtotalamount = 0;
    $("#RetPayInvTable tbody tr").each(function () {
        var currentRow = $(this);
        var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
        var rowamount = currentRow.find("td").eq(5).html();
        if (checkbox == true) {
            invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
        }
    });
    $("#txtinvtotal").val(parseFloat(invtotalamount).toFixed(2));
    $("#txtRetPayAmount").val(parseFloat(invtotalamount).tofFixed(2));
}

function CountHoldPayTotal() {
    var invtotalamount = 0;
    $("#HoldPayInvTable tbody tr").each(function () {
        var currentRow = $(this);
        var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
        var rowamount = currentRow.find("td").eq(5).html();
        if (checkbox == true) {
            invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
        }
    });
    $("#txtHoldinvtotal").val(parseFloat(invtotalamount).toFixed(2));
    $("#txtHPayAmount").val(parseFloat(invtotalamount).toFixed(2));

    // alert(invtotalamount);
}


function HoldPaymentDateValidation() {
    var paydate = $("#txtHoldpaydate").val();
    // alert(paydate);
    $("#HoldPayInvTable tbody tr").each(function () {
        var currentRow = $(this);
        var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
        var invdate = currentRow.find("td").eq(4).html();
        if (checkbox == true) {
            if (new Date(paydate) < new Date(invdate)) {
                //alert('invdate:' + invdate + "...." + "paydate:" + paydate);
                $("#divHoldPayInfoMsg").text("");
                $("#divHoldPayInfoMsg").append("<div>Payment Date must be greater than Invoice Date</div>");
                $("#divHoldPayInfoMsg").addClass("alert-danger");
                $("#divHoldPayInfoMsg").removeClass("hidden alert-success");
                $("#txtHoldPayDate").datepicker("setDate", 'dateToday');
            }
            else {
                $("#divHoldPayInfoMsg").text("");
                $("#divHoldPayInfoMsg").addClass("hidden");
            }
        }

    });
}


$(document).ready(function () {
    //Close it verification

    $("#closeITcodeConfirmationVerification").on("hidden.bs.modal", function () {
        location.reload();
    });
    //Close CC verification
    $("#closeConfirmationForVerifyAppr").on("hidden.bs.modal", function () {
        location.reload();
    });
    $("#closeBankcodeConfirmationVerification").on("hidden.bs.modal", function () {
        location.reload();
    });
    //close DCA
    $("#closeDCAConfirmationForVerifyAppr").on("hidden.bs.modal", function () {
        location.reload();
    });
    //close DCA
    $("#closeSDCAConfirmation").on("hidden.bs.modal", function () {
        location.reload();
    });

    $("#closeSDCAConfirmationForVerifyAppr").on("hidden.bs.modal", function () {
        location.reload();
    });
    $("#closeclientConfirmationVerification").on("hidden.bs.modal", function () {
        location.reload();
    });
    $("#closesubclientConfirmationVerification").on("hidden.bs.modal", function () {
        location.reload();
    });

    $("#closeAgencycodeConfirmation").on("hidden.bs.modal", function () {
        location.reload();
    });
    $("#UpdateWorkflow").on("hidden.bs.modal", function () {
        $("#ApprovalHierarchy").load('/Home/BusinessInfoApprovalHierarchy');
    });

    //MiscPageLoad
    $("#divclientandsunclient").addClass("hidden");
    $("#ddl_miscchequenos").addClass("hidden");
    //Refund pageload
    $("#divIntrestTables").addClass("hidden");
    $("#txtIntrestExist").val(0);
    $("#divtype").hide();
    $("#divpricniple").hide();
    $("#divIntrestTables").hide();
    $("#ddlpaymentcategory").change(function () {
        ////////debugger;
        var mobadv = $(this).val();
        if (mobadv == 1) {
            $("#divtype").show();
            $("#divIntrestTables").addClass("hidden");
            $("#divIntrestTables").hide();
            $("#divpricniple").show();
        }
        else if (mobadv == 2) {
            $("#divpricniple").show();
            $("#divIntrestTables").removeClass("hidden");
            $("#divIntrestTables").show();
            $("#divtype").hide();
        }
        else {
            $("#divtype").hide();
        }

    });

    //FD PageLoad Starts
    $("#lblfdchqNo").text("RTGS/E-Trans Number");
    $("#divFdInterest").addClass("hidden");
    $("#divfdrno").addClass("hidden");
    // $("#ddl_FdNos").addClass("hidden");
    $("#divOpenFD").addClass("hidden");
    $("#divFdPartialFD").addClass("hidden");

    $('#ddlFdNos').prop('disabled', false);

    $("#txtfdfromdate").datepicker({
        dateFormat: 'dd-M-yy',
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        maxDate: 'dateToday',
        buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",
        onClose: function (selectedDate) {
            $("#txtfdtodate").datepicker("option", "minDate", selectedDate);
            $("#txtFDRPaymentDate").datepicker("option", "minDate", selectedDate);
        },
    }).datepicker("setDate", "");

    $("#txtfdtodate").datepicker({
        dateFormat: 'dd-M-yy',
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        maxDate: '+1825 d',
        buttonText: "<i class ='glyphicon glyphicon-calendar'></i>"
    }).datepicker("setDate", "");

    $("#txtfdpPaymentDate").datepicker({
        dateFormat: 'dd-M-yy',
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        maxDate: 'dateToday',
        buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",

    }).datepicker("setDate", "");

    //$("#txtFdPClosedate").datepicker({
    //    dateFormat: 'dd-M-yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    showOn: "button",
    //    maxDate: 'dateToday',
    //    buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",
    //    onClose: function (selectedDate) {
    //        $("#txtfdpPaymentDate").datepicker("option", "minDate", selectedDate);    
    //        BindDeductionDCA();
    //    },
    //}).datepicker("setDate", ""); 

    //$('#FDParCloseDedTable').on('change', '.fdpDCA', function () {
    //    var closingdate = $("#txtFdPClosedate").val();
    //    var ddlDCA = $(this).find("option:selected").text();
    //    var row = $(this).closest('tr'); // get the row
    //    var ddlSubDCA = row.find('.fdpSubDCA'); // get the other select in the same row
    //    var amount = row.find('.fdpDcaAmount');
    //    if (closingdate == "") {        
    //        ddlDCA.prop('selectedIndex',0);
    //        $("#divFDPArClInfoMsg").text("");
    //        $("#divFDPArClInfoMsg").append("<div>Select Closing Date</div>");
    //        $("#divFDPArClInfoMsg").addClass("alert-danger");
    //        $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
    //        return false;        }
    //    else {
    //        $("#divFDPArClInfoMsg").text("");
    //        $("#divFDPArClInfoMsg").addClass("hidden");     

    //        if ($(this).find("option:selected").index() == 0) {
    //            ddlSubDCA.empty().append('<option selected="selected" value="Select">-Select-</option>');
    //            amount.val("");
    //        }
    //        else {
    //            $.ajax({
    //                type: "POST",
    //                url: "/Accounts/GetSubDCAbyDCA",
    //                data: '{ DCACode:"' + ddlDCA + '"}',
    //                contentType: "application/json; charset=utf-8",
    //                dataType: "json",
    //                success: function (response) {
    //                    ddlSubDCA.empty().append('<option selected="selected" value="Select">-Select-</option>');
    //                    $.each(response, function () {
    //                        ddlSubDCA.append($("<option></option>").val(this['SubDCAID']).html(this['SubDCACode']));
    //                    });
    //                },
    //                failure: function (response) {
    //                    alert(response.responseText);
    //                },
    //                error: function (response) {
    //                    alert(response.responseText);
    //                }
    //            });
    //        }
    //    }
    //});

    //$("table.order-list.fdpclgrid").on("click", ".ibtnfdparclDel", function (event) {
    //    $(this).closest("tr").remove();
    //    $("#divFDPArClInfoMsg").text("");
    //    $("#divFDPArClInfoMsg").addClass("hidden");
    //});


    //$.ajax({
    //    type: "POST",
    //    url: "/Accounts/GetAppSetting",
    //    data: '{}',
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        $.each(response, function () {
    //            $("#txtfdIntCC").val(this['ParIntCC']);
    //            $("#txtfdIntDca").val(this['ParIntDca']);
    //            $("#txtfdIntSdca").val(this['ParIntSdca']);
    //            $("#txtfdIntIt").val(this['ParIntItcode']);
    //            $("#txtfdPriDca").val(this['ParPrincipleDca']);
    //            $("#txtfdPriSdca").val(this['ParPrincipleSdca']);
    //            $("#txtfdPriIt").val(this['ParPrincipleItcode']);             
    //           // alert(this['ParIntCC'] + "=" + this['ParIntDca'] + "=" + this['ParIntSdca'] + "=" + this['ParIntItcode'] + "=" + this['ParPrincipleDca'] + "=" + this['ParPrincipleSdca'] + "=" + this['ParPrincipleItcode']);
    //        });
    //    },
    //    failure: function (response) {
    //        alert(response.responseText);
    //    },
    //    error: function (response) {
    //        alert(response.responseText);
    //    }
    //});
    //DCA
    $("#closeDCAConfirmation").on("hidden.bs.modal", function () {
        $("#divDCADtailsGrid").load('/Home/ViewDCAGrid');
    });
    $("#AddNewDCASubDCAModal").on("hidden.bs.modal", function () {

        $("#divDCADtailsGrid").load('/Home/ViewDCAGrid');
    });
    $("#divEditGeneralDCAPopup").on("hidden.bs.modal", function () {

        $("#divDCADtailsGrid").load('/Home/ViewDCAGrid');
    });

    $("#divEditSubDCAPopup").on("hidden.bs.modal", function () {

        $("#divSDCADtailsGrid").load('/Home/ViewSubDCAGrid');
    });

    //Add bank details
    $("#EditBankModal").on("hidden.bs.modal", function () {

        $("#divBankDetailsGrid").load('/Home/ViewBankGrid');
    });
    $("#AddNewBankModal").on("hidden.bs.modal", function () {

        $("#divBankDetailsGrid").load('/Home/ViewBankGrid');
    });
    $("#divCloseAccountModel").on("hidden.bs.modal", function () {

        $("#divBankDetailsGrid").load('/Home/ViewBankGrid');
    });
    //Create user
    $("#AddNewUserModal").on("hidden.bs.modal", function () {

        $("#divUserDetailsGrid").load('/Home/ViewUsersGrid');
    });

    //create Taxes
    $("#AddNewGenTaxModal").on("hidden.bs.modal", function () {

        $("#divGaneralTaxGrid").load('/Accounts/ViewGeneralTaxesGrid');
    });
    $("#EditGenTaxModal").on("hidden.bs.modal", function () {

        $("#divGaneralTaxGrid").load('/Accounts/ViewGeneralTaxesGrid');
    });
    $("#DeleteGenTaxModel").on("hidden.bs.modal", function () {

        $("#divGaneralTaxGrid").load('/Accounts/ViewGeneralTaxesGrid');
    });

    //IT Code page load
    $("#deleteITcode").on("hidden.bs.modal", function () {

        $("#divITCodeGrid").load('/Home/ViewITCodesGrid');
    });
    $("#AddNewITcodeModal").on("hidden.bs.modal", function () {

        $("#divITCodeGrid").load('/Home/ViewITCodesGrid');
    });
    $("#EditITCodeModal").on("hidden.bs.modal", function () {

        $("#divITCodeGrid").load('/Home/ViewITCodesGrid');
    });
    $("#closeITcodeConfirmation").on("hidden.bs.modal", function () {

        $("#divITCodeGrid").load('/Home/ViewITCodesGrid');
    });

    //Agency page load
    //$("#deleteITcode").on("hidden.bs.modal", function () {

    //    $("#divITCodeGrid").load('/Home/ViewITCodesGrid');
    //});
    //$("#AddNewTLAModal").on("hidden.bs.modal", function () {

    //    $("#divTLAGrid").load('/Home/ViewTLAgencyGrid');
    //});
    //$("#EditITCodeModal").on("hidden.bs.modal", function () {

    //    $("#divITCodeGrid").load('/Home/ViewITCodesGrid');
    //});
    //$("#closeITcodeConfirmation").on("hidden.bs.modal", function () {

    //    $("#divITCodeGrid").load('/Home/ViewITCodesGrid');
    //});
    //cashvoucher report page load

    //Transfer Page Load
    $("#ddl_Transferchequenos").addClass("hidden");
    $("#txtTransferDate1").datepicker({
        dateFormat: 'dd-M-yy',
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        maxDate: 'dateToday',
        buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",

    }).datepicker("setDate", new Date());
    //Withdrawal Page Load
    $("#ddl_Wdchequenos").addClass("hidden");
    //cahspayment for generalinvoice starts
    $("#divacccashcccode").addClass("hidden");
    $("#divcashcccode").addClass("hidden");
    $("#divcashinvoiceno").addClass("hidden");
    $("#divaccounthead").addClass("hidden");
    $("#divremarksamt").addClass("hidden");
    $("#divsubmitbtn").addClass("hidden");
    $("#ddlGPCPaymentmode").change(function () {
        //////debugger;
        var cashcheck = $(this).val();
        var CCVal = $("#txtSessionCC").val();
        if (cashcheck == 1) {
            $("#divcashinvoiceno").removeClass('hidden');
            $("#divaccounthead").removeClass("hidden");
            $("#divremarksamt").removeClass("hidden");
            $("#divsubmitbtn").removeClass("hidden");
            $("#divacccashcccode").removeClass("hidden");
            $("#divcashcccode").addClass("hidden");

        }
        else if (cashcheck == 2) {
            $("#divcashinvoiceno").removeClass('hidden');
            $("#divaccounthead").removeClass("hidden");
            $("#divremarksamt").removeClass("hidden");
            $("#divsubmitbtn").removeClass("hidden");
            $("#divacccashcccode").removeClass("hidden");
            $("#divcashcccode").removeClass("hidden");
            $.ajax({
                type: "POST",
                url: "/Accounts/GetAllCashDCAs",
                data: '{Cashcc:"' + CCVal + '" }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",

                success: function (response) {
                    var dca = $("#ddlGICashDCACode");
                    dca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        dca.append($("<option></option>").val(this['CashDCA_Id']).html(this['CashDCA_Code']));
                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
        else {
            $("#divacccashcccode").addClass("hidden");
            $("#divcashcccode").addClass("hidden");
            $("#divcashinvoiceno").addClass("hidden");
            $("#divaccounthead").addClass("hidden");
            $("#divremarksamt").addClass("hidden");
            $("#divsubmitbtn").addClass("hidden");
            $("#divcashgeneralinvoiceInfoMsg").text("");
            $("#divcashgeneralinvoiceInfoMsg").addClass("hidden");
        }
    });
    //var Sessioncreated = '@Session["SessionCostCenter"]';
    //$("#txtSessionCC").val(Sessioncreated);
    //cahspayment for generalinvoice ends
    //  //Retention Page Load Start

    //$("#divCRec_InsType").addClass('hidden');
    //$("#divRetpayIncDetails").addClass('hidden');
    //$("#divRetentionPayment").addClass("hidden"); 
    //$("#divRetPaymentsection").addClass("hidden");
    //$('#txtRetPayDate').css('background-color', 'transparent');
    //$('#RetPayInvTable').on('change', '.chkRetpayInv', function () {  

    //    var row = $(this).closest('tr'); // get the row
    //    var checkbox = row.find("td").eq(1).find("input[type='checkbox']").is(":checked");
    //    if (checkbox == false) {
    //        $("#RetPayInvTable thead tr").each(function () {
    //            var currentRow = $(this);
    //            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
    //            currentRow.find("td").eq(1).find("input[type='checkbox']").prop('checked', false);
    //        });
    //    }
    //    else {

    //        var noofrows = $("#RetPayInvTable tbody tr").length;
    //        var checkedrows = 0;
    //        $("#RetPayInvTable tbody tr").each(function () {
    //            var currentRow = $(this);
    //            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
    //            if (checkbox == true) {
    //                checkedrows = parseInt(checkedrows) + 1;
    //            }

    //        });

    //        if (parseInt(noofrows) == parseInt(checkedrows)) {
    //            $("#RetPayInvTable thead tr").each(function () {
    //                var currentRow = $(this);
    //                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
    //                currentRow.find("td").eq(1).find("input[type='checkbox']").prop('checked', true);
    //            });

    //        }

    //    }
    //    //var rowamount = currentRow.find("td").eq(5).html();
    //    CountRetnPayTotal();

    //});
    //$('#RetPayInvTable thead tr').on('change', '.chkselectall', function () {
    //    var row = $(this).closest('tr'); // get the row
    //    var headcheckbox = row.find("td").eq(1).find("input[type='checkbox']").is(":checked");
    //    if (headcheckbox == true) {
    //        $("#RetPayInvTable tbody tr").each(function () {
    //            var currentRow = $(this);
    //            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
    //            currentRow.find("td").eq(1).find("input[type='checkbox']").prop('checked', true);
    //        });
    //    }
    //    else {
    //        $("#RetPayInvTable tbody tr").each(function () {
    //            var currentRow = $(this);
    //            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
    //            currentRow.find("td").eq(1).find("input[type='checkbox']").prop('checked', false);
    //        });

    //    }
    //    CountRetnPayTotal();

    //});
    //   //Retention Page Load End

    //Hold payment page load start
    //$("#divCRec_InsType").addClass('hidden');
    //$("#divRetpayIncDetails").addClass('hidden');
    //$("#divRetentionPayment").addClass("hidden");
    //$("#divRetPaymentsection").addClass("hidden");
    //$('#txtHoldPayDate').css('background-color', 'transparent');
    //$("#divHoldPayment").addClass('hidden');
    //$("#txtHoldPayDate").datepicker({
    //    dateFormat: 'dd-M-yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    showOn: "button",
    //    maxDate: 'dateToday',
    //    buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",
    //    onClose: function (selectedDate) {
    //        $("#txtHoldpaydate").val(selectedDate);
    //        HoldPaymentDateValidation();
    //    }
    //}).datepicker("setDate", new Date());


    //Hold payment page load end

    //Advance payment page load start

    //Advance payment page load end
    $("#AddNewCCModal").on("hidden.bs.modal", function () {
        $("#divCCDtailsGrid").load('/Home/ViewCostCentersGrid');
    });
    $("#EditCCModal").on("hidden.bs.modal", function () {
        $("#divCCDtailsGrid").load('/Home/ViewCostCentersGrid');
    });
    $("#closeConfirmation").on("hidden.bs.modal", function () {
        $("#divCCDtailsGrid").load('/Home/ViewCostCentersGrid');
    });
    $("#deletecc").on("hidden.bs.modal", function () {
        //alert('loading');
        $("#divCCDtailsGrid").load('/Home/ViewCostCentersGrid');
    });
    $("table.order-list.UpClientGstGrid").on("click", ".ibtnUpClientDel", function (event) {
        var clientcode = $("#txtUpClientcode").val();
        var row = $(this).closest("tr");
        var st = row.find("td").eq(1).find("select option:selected").val();
        var gstno = row.find("td").eq(2).find("input[type='text']").val();
        var delgstids = $("#txtdelgstid").val();
        delgstids += st + ",";
        $("#txtdelgstid").val(delgstids);
        row.remove();

        var tablerowcount = $("#UpClientGstTable tbody tr").length;
        if (tablerowcount < 1) {
            $("#divUpClientGst").addClass('hidden');
            $("#chkUpGSTY").prop("checked", false);
            $("#chkUpGSTN").prop("checked", true);
        }
        else {
            $("#divUpClientGst").removeClass('hidden');
            $("#chkUpGSTY").prop("checked", true);
            $("#chkUpGSTN").prop("checked", false);
        }
        ////alert(st + '--' + gstno);
        //var deleteclient = {
        //    State: st,
        //    GST_No: gstno,
        //    Client_Code: clientcode
        //};           

        // addFailMsg = "Error Occurred While Deleting Tax";
        // addSuccessMsg = "Cost Center Added Successfully.";
        //$.ajax({
        //    type: 'POST',
        //    dataType: 'json',
        //    url: '/Home/DeleteClientGST',
        //    data: { addClient: deleteclient },
        //    success: function (Data) {
        //        if (Data.saveStatus == true) {
        //            row.remove();

        //            var tablerowcount = $("#UpClientGstTable tbody tr").length;
        //            if (tablerowcount < 1) {
        //                $("#divUpClientGst").addClass('hidden');
        //                $("#chkUpGSTY").prop("checked", false);
        //                $("#chkUpGSTN").prop("checked", true);
        //            }
        //            else {

        //                $("#divUpClientGst").removeClass('hidden');
        //                $("#chkUpGSTY").prop("checked", true);
        //                $("#chkUpGSTN").prop("checked", false);
        //            }
        //        }
        //        else {
        //            $("#divUpClientInfoMsg").text(addFailMsg);
        //            $("#divUpClientInfoMsg").addClass("alert-danger");
        //            $("#divUpClientInfoMsg").removeClass("hidden alert-success");
        //        }
        //    },
        //    error: function (XMLHttpRequest, textStatus, errorThrown) {
        //        $("#divUpClientInfoMsg").text(addFailMsg);
        //        $("#divUpClientInfoMsg").addClass("alert-danger");
        //        $("#divUpClientInfoMsg").removeClass("hidden alert-success");
        //    }
        //});


    });

    $("#ModelNewClient").on("hidden.bs.modal", function () {
        //alert('Reloading');
        $("#divClientGrid").load('/Home/ViewClientDetailsGrid');

    });
    $("#ModelUpdateClient").on("hidden.bs.modal", function () {
        // alert('Reloading');
        $("#divClientGrid").load('/Home/ViewClientDetailsGrid');

    });
    $("#ModelAddSubClient").on("hidden.bs.modal", function () {
        // alert('Reloading');
        $("#divClientGrid").load('/Home/ViewClientDetailsGrid');

    });
    $("#ModelUpdateSubClient").on("hidden.bs.modal", function () {
        // alert('Reloading');
        $("#divClientGrid").load('/Home/ViewClientDetailsGrid');

    });
    $("#ModelViewClient").on("hidden.bs.modal", function () {
        // alert('Reloading');
        $("#divClientGrid").load('/Home/ViewClientDetailsGrid');

    });
    $("#closeClientcodeConfirmation").on("hidden.bs.modal", function () {
        // alert('Reloading');
        $("#divClientGrid").load('/Home/ViewClientDetailsGrid');

    });
    //Client NEWPO and AMENDPO Page Load starts
    $("#btncloseamendcc").addClass('hidden');
    $("#btnopenamendcc").addClass('hidden');
    $("#btnopenamendcc").addClass('hidden');
    $("#btncloseamendcc").addClass('hidden');
    $("#divopenamendcc").hide();
    $("#divcloseamendcc").hide();
    $("#divViewamendCCDetails").hide();
    $("#divAdvSettle").hide();
    $("#ddlmobadv").change(function (event) {
        var Type = $("#ddlmobadv option:selected").index();
        if (Type == 1) {

            $("#divAdvSettle").show();
        }
        else {
            $("#divAdvSettle").hide();
        }
    });
    $("#divopencc").hide();
    $("#divclosecc").hide();
    $("#divViewCCDetails").hide();
    $("#btnClentPOSubmit").hide();
    $("#divAdvSettle").addClass('hidden');
    $("#CostCenterddl").change(function (event) {
        var CCType = $("#CostCenterddl option:selected").index();
        if (CCType != 0) {
            $("#divopencc").show();
            $("#btncloseamendcc").addClass('hidden');
            $("#btnopenamendcc").removeClass('hidden');
        }
        else {
            $("#divopencc").hide();
            $("#btncloseamendcc").addClass('hidden');
            $("#btnopenamendcc").addClass('hidden');
        }
    });

    $("#ddlmobadv").change(function () {
        var mobadv = $(this).val();
        if (mobadv == 1) {
            $("#divAdvSettle").removeClass('hidden');
        }
        else {
            $("#divAdvSettle").addClass('hidden');
        }

    });

    //General payment page load start

    //$("#ddlGPPaymentNo").addClass("hidden");
    //$("#divGPPaymentDetails").addClass("hidden");
    //$("#divgpdca").addClass("hidden");
    //$("#divgpsdca").addClass("hidden");
    //$('#txtGPPayDate').css('background-color', 'transparent');
    //$("#txtGPPayDate").datepicker({
    //    dateFormat: 'dd-M-yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    showOn: "button",
    //    maxDate: 'dateToday',
    //    buttonText: "<i class ='glyphicon glyphicon-calendar'></i>"
    //}).datepicker("setDate", new Date());

    //General payment page load end
    //$("#txtWdDate").datepicker({
    //    dateFormat: 'dd-M-yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    showOn: "button",
    //    maxDate: 'dateToday',
    //    buttonText: "<i class ='glyphicon glyphicon-calendar'></i>"

    //}).datepicker("setDate", new Date());

    //Deposit Page Load


    //Unsecured Loan Page Load
    //Client Recievables Page Load 
    //$("#txtDate").datepicker({
    //    dateFormat: 'dd-M-yy',ClearAddNewCC
    //    changeMonth: true,
    //    changeYear: true,
    //    showOn: "button",
    //    buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",
    //    maxDate: 'dateToday'
    //}).datepicker("setDate", new Date());
});

/* Scripts For Adding New Cost Center */

function ViewAddCostCenterModel() {
    //$("#AddNewCCModal").modal('show');
    //$('#AddNewCCModal').on('hidden.bs.modal', function () {
    //    $(this).removeData();
    //});
    $.get("/Home/AddCostCenter", null, function (data) {
        $('#AddCostCenter').html(data);
        $("#AddNewCCModal").modal('show');
        $("#divNPCCType").addClass('hidden');
    });

    //$('#AddNewCCModal').modal('show');
    ClearAddNewCC();
}
function ClearAddNewCC() {
    $("#lblccExist").text("");

    $("#txtEPPLFinalOfferNoid").val("");
    //var FinalOfferDate = $("#txtFinalOfferDateid").val();
    var ClientAcceptanceReferenceNo = $("#txtClientAcceptanceReferenceNoid").val("");
    //var ClientAcceptanceDate = $("#txtClientAcceptanceDateid").val();
    $("#txtCCNameid").val("");
    $("#txtCCInchargeNameid").val("");
    $("#txtInchargePhNoid").val("");
    $("#txtSiteAddressid").val("");
    $("#txtPhoneNoid").val("");
    $("#txtVoucherLimitid").val("");
    $("#txtDayLimitid").val("");
    //$("#txtStateNameid option:selected").index();
    $("#txtNewCCCode").val("");
    $("#SubTypeddlID").prop('selectedIndex', 0);
    $("#txtStateNameid").prop('selectedIndex', 0);
    $("#CCTypeddlID").prop('selectedIndex', 0);
    $("#CCTypeddlID").prop('disabled', false);
    // $(".date-picker").datepicker("setDate", 'dateToday');
    $("#txtClientAcceptanceDateid").datepicker("setDate", 'dateToday');
    $("#txtFinalOfferDateid").datepicker("setDate", 'dateToday');
    //$('#txtClientAcceptanceDateid').datepicker('setDate', null);
    //$("#txtFinalOfferDateid").datepicker({ }).datepicker("setDate", new Date());

    $("#divAddCostCenterInfoMsg").text("");
    $("#divAddCostCenterInfoMsg").addClass("hidden");
    $("#divNewCCSubType").addClass("hidden");
    $("#divNewCCDetails").addClass("hidden");

}



function NotifyCCPendings(CCCode, Accessname) {
    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtCCCloseNote").val();
    var closingdate = $("#txtCCClosingAson").val();
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

        if (closingdate === "" || closingdate === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
            isValid = false;
        }
    }
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
        var ddlaction = $("#ddlCloseCCStatus option:selected").index();
        if (ddlaction === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
            isValid = false;
        }

    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClsoeCCInfoMsg").text("");
        $("#divClsoeCCInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClsoeCCInfoMsg").addClass("alert-danger");
        $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClsoeCCInfoMsg").text("");
        $("#divClsoeCCInfoMsg").addClass("hidden");
        var sendNotificationDetails = {};

        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                Action: Accessname,
                CCCode: CCCode,
                CloseRemarks: $("#txtCCCloseNote").val(),
                ClosingDate: $("#txtCCClosingAson").val(),
                CloseStatus: $("#ddlCloseCCStatus option:selected").val(),
                UID: $("#txtCCclosemultipleuid").val()
            };
        }
        else {
            sendNotificationDetails = {
                Action: Accessname,
                CCCode: CCCode,
                CloseRemarks: $("#txtCCCloseNote").val(),
                ClosingDate: $("#txtCCClosingAson").val(),
                CloseStatus: '',
                UID: $("#txtCCclosemultipleuid").val()
            };

        }

        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/SaveCCCloseNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divClsoeCCInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divClsoeCCInfoMsg").text('Closing Cost Center Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseCCStatus option:selected").val();
                        if (type === 'Reject')
                            $("#divClsoeCCInfoMsg").text('Closing Cost Center  Rejected Successfully');
                        else
                            $("#divClsoeCCInfoMsg").text('Closing Cost Center  Approved Successfully');
                    }
                    $("#divClsoeCCInfoMsg").removeClass("hidden alert-danger");
                    $("#divClsoeCCInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divClsoeCCInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divClsoeCCInfoMsg").addClass("alert-danger");
                    $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divClsoeCCInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divClsoeCCInfoMsg").addClass("alert-danger");
                $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
            }
        });
    }


    //var errorMsg = "";
    //isValid = true;
    //var closingdate = $("#txtCCClosingAson").val();
    //if (closingdate === "" || closingdate === null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
    //    isValid = false;
    //}
    //if (!isValid) {
    //    var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
    //    $("#divClsoeCCInfoMsg").text("");
    //    $("#divClsoeCCInfoMsg").append(finalerror + errorMsg + "</div>");
    //    $("#divClsoeCCInfoMsg").addClass("alert-danger");
    //    $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
    //    return false;
    //}
    //else {
    //    $("#divClsoeCCInfoMsg").text("");
    //    $("#divClsoeCCInfoMsg").addClass("hidden");

    //    var sendNotificationDetails = {
    //        Action: 'New',
    //        CCCode: CCCode,
    //        ClosingDate: $("#txtCCClosingAson").val(),
    //        Createdby: $("#txtCCCreatedby").val()
    //    };
    //    addFailMsg = "Error Occurred While Sending Notification.";
    //    addSuccessMsg = "Notification Sent Successfully.";
    //    $.ajax({
    //        type: 'POST',
    //        dataType: 'json',
    //        url: '/Home/SaveCCCloseNotifications',
    //        data: { saveNotification: sendNotificationDetails },
    //        success: function (Data) {
    //            if (Data.saveStatus === 'Notified') {
    //                $("#btnNotify").prop('disabled', true);
    //                $("#divClsoeCCInfoMsg").text(addSuccessMsg);
    //                $("#divClsoeCCInfoMsg").removeClass("hidden alert-danger");
    //                $("#divClsoeCCInfoMsg").addClass("alert-success");
    //            }
    //            else {
    //                $("#btnNotify").prop('disabled', true);
    //                $("#divClsoeCCInfoMsg").append("<div>" + addFailMsg + "</div>");
    //                $("#divClsoeCCInfoMsg").addClass("alert-danger");
    //                $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
    //            }
    //        },
    //        error: function (XMLHttpRequest, textStatus, errorThrown) {
    //            $("#btnNotify").prop('disabled', true);
    //            $("#divClsoeCCInfoMsg").append("<div>" + addFailMsg + "</div>");
    //            $("#divClsoeCCInfoMsg").addClass("alert-danger");
    //            $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
    //        }
    //    });
    //}
}
function UpdateCCCloseDate(CCCode) {
    var errorMsg = "";
    isValid = true;
    var closingdate = $("#txtCCClosingAson").val();
    if (closingdate === "" || closingdate === null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClsoeCCInfoMsg").text("");
        $("#divClsoeCCInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClsoeCCInfoMsg").addClass("alert-danger");
        $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClsoeCCInfoMsg").text("");
        $("#divClsoeCCInfoMsg").addClass("hidden");

        var sendNotificationDetails = {
            Action: 'Update',
            CCCode: CCCode,
            ClosingDate: $("#txtCCClosingAson").val(),
            Createdby: $("#txtCCCreatedby").val()
        };
        addFailMsg = "Error Occurred While Updating Closing Date.";
        addSuccessMsg = "Updated Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/SaveCCCloseNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnUpdateccCloseDate").prop('disabled', true);
                    $("#divClsoeCCInfoMsg").text(addSuccessMsg);
                    $("#divClsoeCCInfoMsg").removeClass("hidden alert-danger");
                    $("#divClsoeCCInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpdateccCloseDate").prop('disabled', true);
                    $("#divClsoeCCInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divClsoeCCInfoMsg").addClass("alert-danger");
                    $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnUpdateccCloseDate").prop('disabled', true);
                $("#divClsoeCCInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divClsoeCCInfoMsg").addClass("alert-danger");
                $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
            }
        });
    }

}
function CloseCC(ccid, cccode, cctype) {
    //////debugger;
    var closeCC = {
        CC_Id: ccid,
        CCCode: cccode,
        CCType: cctype,
        RoleId: $("#txtCCroleid").val(),
        Createdby: $("#txtCreatedby").val()

    };
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/CloseStatusForCostCenter',
        data: { closeCostCenter: closeCC },
        success: function (Data) {
            if (Data.saveStatus == "Clsoed") {
                $("#divClsoeCCInfoMsg").text(addSuccessMsg);
                $("#divClsoeCCInfoMsg").removeClass("hidden alert-danger");
                $("#divClsoeCCInfoMsg").addClass("alert-success");
            }
            else {
                $("#divClsoeCCInfoMsg").text(Data.saveStatus);
                $("#divClsoeCCInfoMsg").addClass("alert-danger");
                $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divClsoeCCInfoMsg").text(addFailMsg);
            $("#divClsoeCCInfoMsg").addClass("alert-danger");
            $("#divClsoeCCInfoMsg").removeClass("hidden alert-success");
        }
    });


}
function NewCCCodeChange(txt) {

    var cccode = txt.value;
    if (cccode == "") {
        $("#lblccExist").text("");
    }
    else {
        var CC = "";
        var CostcenterType = $("#CCTypeddlID option:selected").text();
        if (CostcenterType != "Capital") {
            CC = "CC-" + cccode;
        }
        else {
            CC = cccode;
        }
        // alert(cccode);
        $.ajax({
            type: "POST",
            url: "/Home/CheckCCCodeExist",
            data: '{CCCode:"' + cccode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                var msg = "";
                if (count1 > 0) {
                    msg = CC + " " + "Is Already Exist";
                    $("#lblccExist").text(msg);
                }
                else {
                    msg = CC + " " + "Is Available";
                    $("#lblccExist").text(msg);
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }

}


//function EditCostCenter(CcId, CCCode, status) {

//    var isValid = true;
//    var errorMsg = "";    

//    var CCName = $("#txteCCNameid").val();
//    var CCInchargeName = $("#txtECCInchargeNameid").val();
//    var InchargePhNo = $("#txtEInchargePhNoid").val();
//    var PhoneNo = $("#txtEPhoneNoid").val();  

//    if (CCName == "") {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
//        isValid = false;
//    }
//    if (CCInchargeName == "") {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Incharge Name</p>";
//        isValid = false;
//    }
//    if (InchargePhNo == "") {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Incharge  Phone Number</p>";
//        isValid = false;
//    }
//    else if (InchargePhNo.length != 10) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Phone No</p>";
//        isValid = false;
//    }   
//    if (PhoneNo == "") {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Cost Center Phone No</p>";
//        isValid = false;
//    }
//    else if (PhoneNo.length != 10) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Phone No</p>";
//        isValid = false;
//    }
//    var isregionexist = $("#txtRegionExist").val();
//    if (isregionexist === 'Yes') {
//        var GroupID = $("#groupEDDlid option:selected").index();
//        if (GroupID == "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Group</p>";
//            isValid = false;
//        }
//    }
//    if (!isValid) {
//        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//        $("#divEditCostCenterInfoMsg").text("");
//        $("#divEditCostCenterInfoMsg").append(finalerror + errorMsg + "</div>");
//        $("#divEditCostCenterInfoMsg").addClass("alert-danger");
//        $("#divEditCostCenterInfoMsg").removeClass("hidden alert-success");
//    }
//    else {
//        $("#divEditCostCenterInfoMsg").text("");
//        $("#divEditCostCenterInfoMsg").addClass("hidden");
//        UpdateCC(CcId, CCCode, status);
//    }
//    return isValid;
//}
//function UpdateCC(CcId, CCCode, status) {
//    var CheckUpdationAction = '';
//    if (status === "000") {
//        CheckUpdationAction = 'ReturnUpdate';
//    }
//    else {
//        CheckUpdationAction = 'Insert';
//    }

//    var Groupname = '';
//    var isregionexist = $("#txtRegionExist").val();
//    if (isregionexist === 'Yes') {
//        Groupname = $("#groupEDDlid  option:selected").text();
//    }

//    var CCTypeval = $("#ECCTypeddlID option:selected").text();
//    var d = new Date();
//    var month = d.getMonth() + 1;
//    var day = d.getDate();
//    var currentdate = d.getFullYear() + '-' +
//        (('' + month).length < 2 ? '0' : '') + month + '-' +
//        (('' + day).length < 2 ? '0' : '') + day;
//    var editCostCenterDetails = {};

//    if (CCTypeval == "Performing") {
//        editCostCenterDetails = {
//            CCType: $("#ECCTypeddlID option:selected").text(),
//            SubType: $("#ESubTypeddlID").val(),
//            EPPLFinalOfferNo: $("#txteEPPLFinalOfferNoid").val(),
//            FinalOfferDate: $("#txtEFinalOfferDateid").val(),
//            ClientAcceptanceReferenceNo: $("#txtEClientAcceptanceReferenceNoid").val(),
//            ClientAcceptanceDate: $("#txtEClientAcceptanceDateid").val(),
//            Group: Groupname,
//            CCName: $("#txteCCNameid").val(),
//            CCInchargeName: $("#txtECCInchargeNameid").val(),
//            InchargePhNo: $("#txtEInchargePhNoid").val(),
//            SiteAddress: $("#txtESiteAddressid").val(),
//            PhoneNo: $("#txtEPhoneNoid").val(),
//            VoucherLimit: $("#txtEVoucherLimitid").val(),
//            DayLimit: $("#txtEDayLimitid").val(),
//            StateID: $("#txtEStateNameid option:selected").val(),
//            Createdby: $("#txtECreatedby").val(),
//            Action: 'Edit',
//            CCCode: $("#txtECCode").val(),
//            CC_Id: $("#txtECCID").val(),
//            CheckUpdationType: CheckUpdationAction,
//            UID: $("#txtCCUpdateuid").val()
//        };

//    }
//    else {
//        editCostCenterDetails = {
//            CCType: $("#ECCTypeddlID option:selected").text(),
//            SubType: $("#ECCTypeddlID option:selected").text(),
//            EPPLFinalOfferNo: $("#txteEPPLFinalOfferNoid").val(),
//            FinalOfferDate: currentdate,
//            ClientAcceptanceReferenceNo: $("#txtEClientAcceptanceReferenceNoid").val(),
//            ClientAcceptanceDate: currentdate,
//            Group: Groupname,
//            CCName: $("#txteCCNameid").val(),
//            CCInchargeName: $("#txtECCInchargeNameid").val(),
//            InchargePhNo: $("#txtEInchargePhNoid").val(),
//            SiteAddress: $("#txtESiteAddressid").val(),
//            PhoneNo: $("#txtEPhoneNoid").val(),
//            VoucherLimit: $("#txtEVoucherLimitid").val(),
//            DayLimit: $("#txtEDayLimitid").val(),
//            StateID: $("#txtEStateNameid option:selected").val(),
//            Createdby: $("#txtECreatedby").val(),
//            Action: 'Edit',
//            CCCode: $("#txtECCode").val(),
//            CC_Id: $("#txtECCID").val(),
//            CheckUpdationType: CheckUpdationAction,
//            UID: $("#txtCCUpdateuid").val()
//        };
//    }

//    addFailMsg = "Error Occurred While Updating Cost Center.";
//    addSuccessMsg = "Updated Successfully.";
//    if (status == "000") {
//        //for approval update 

//        $.ajax({
//            type: 'POST',
//            dataType: 'json',
//            url: '/Home/UpdateCostCenter',
//            data: { updateCostCenter: editCostCenterDetails },
//            success: function (Data) {
//                if (Data.saveStatus == "Cost Center Updated") {
//                    $('#ApproveCCMsgModal').modal('show');
//                    msg = "<div>Cost Center " + addSuccessMsg + "</div>";
//                    $("#AppCCMsg").html(msg);
//                }
//                else {
//                    $('#ApproveCCMsgModal').modal('show');
//                    msg = "<div>" + Data.saveStatus + "</div>";
//                    $("#AppCCMsg").html(msg);
//                }
//            },
//            error: function (XMLHttpRequest, textStatus, errorThrown) {
//                $('#ApproveCCMsgModal').modal('show');
//                msg = "<div>" + addFailMsg + "</div>";
//                $("#AppCCMsg").html(msg);
//            }
//        });
//    }
//    else {
//        //for normal update
//        $.ajax({
//            type: 'POST',
//            dataType: 'json',
//            url: '/Home/UpdateCostCenter',
//            data: { updateCostCenter: editCostCenterDetails },
//            success: function (Data) {
//                if (Data.saveStatus == "Cost Center Updated") {
//                    $("#divEditCostCenterInfoMsg").text(addSuccessMsg);
//                    $("#divEditCostCenterInfoMsg").removeClass("hidden alert-danger");
//                    $("#divEditCostCenterInfoMsg").addClass("alert-success");
//                }
//                else {
//                    $("#divEditCostCenterInfoMsg").text(Data.saveStatus);
//                    $("#divEditCostCenterInfoMsg").addClass("alert-danger");
//                    $("#divEditCostCenterInfoMsg").removeClass("hidden alert-success");
//                }
//            },
//            error: function (XMLHttpRequest, textStatus, errorThrown) {
//                $("#divEditCostCenterInfoMsg").text(addFailMsg);
//                $("#divEditCostCenterInfoMsg").addClass("alert-danger");
//                $("#divEditCostCenterInfoMsg").removeClass("hidden alert-success");
//            }
//        });
//    }


//}
function DeleteCC() {
    var id = $("#txtdeleteid").val();
    //alert(id);
    var editCostCenterDetails = {
        CC_Id: id,
    };

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/UpdateCCStatus',
        data: { updateCostCenter: editCostCenterDetails },
        success: function (Data) {
            if (Data.saveStatus == "Cost Center Deleted") {
                $("#divDeleteCostCenterInfoMsg").text(Data.saveStatus);
                $("#divDeleteCostCenterInfoMsg").removeClass("hidden alert-danger");
                $("#divDeleteCostCenterInfoMsg").addClass("alert-success");
                $("#confirmmsg").addClass('hidden');
                $("#confirmbtn").addClass('hidden');
                $("#confirmms1").addClass('hidden');
            }
            else {
                $("#divDeleteCostCenterInfoMsg").text(Data.saveStatus);
                $("#divDeleteCostCenterInfoMsg").addClass("alert-danger");
                $("#divDeleteCostCenterInfoMsg").removeClass("hidden alert-success");
                $("#confirmmsg").addClass('hidden');
                $("#confirmbtn").addClass('hidden');
                $("#confirmms1").addClass('hidden');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divDeleteCostCenterInfoMsg").text(addFailMsg);
            $("#divDeleteCostCenterInfoMsg").addClass("alert-danger");
            $("#divDeleteCostCenterInfoMsg").removeClass("hidden alert-success");
            $("#confirmmsg").addClass('hidden');
            $("#confirmbtn").addClass('hidden');
            $("#confirmms1").addClass('hidden');
        }

    });
}
function ClearEditCC() {


}

/* Scripts For Adding New Cost Center END*/

/* Scripts For Adding New IT */

function LoadAddNewITCodeModel() {
    $("#txtNITcode").val("");
    $("#txtNITcodename").val("");
    $("#lblITExist").text("");
    $("#divAddItCodeInfoMsg").text("");
    $("#ddlNewITNature").prop('selectedIndex', 0);
    $("#divAddItCodeInfoMsg").addClass("hidden");
    $("#btnaddnewit").prop('disabled', false);

    $("#AddNewITcodeModal").modal('show');
    $.ajax({
        type: "POST",
        url: "/Home/GetNatureOfGroups",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddl = $("#ddlNewITNature");
            ddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddl.append($("<option></option>").val(this['NatureGroupId']).html(this['NatureGroupName']));
            });
            $("#txtNITcode").val();
            $("#txtNITcodename").val();
            $("#lblITExist").text("");
            $("#divAddItCodeInfoMsg").text("");
            $("#divAddItCodeInfoMsg").addClass("hidden");
            $("#btnaddnewit").prop('disabled', false);
            $("#divITSubGroup").addClass("hidden");
            $("#txtsubgrpexist").val('0');
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });


}
function NewITCodeChange(txt) {

    var IT = txt.value;
    if (IT == "") {
        $("#lblITExist").text("");
    }
    else {
        //var CC = "CC-" + cccode;
        // alert(cccode);
        $.ajax({
            type: "POST",
            url: "/Home/CheckITCodeExist",
            data: '{Itcode:"' + IT + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                var msg = "";
                if (count1 > 0) {
                    msg = IT + " " + "Is Already Exist";
                    $("#lblITExist").text(msg);
                }
                else {
                    msg = IT + " " + "Is Available";
                    $("#lblITExist").text(msg);
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }

}
function LoadEditItCode() {

    $("#AddNewITCodeItemID").removeClass("active");
    $("#divAddNewITCode").removeClass("active");
    $("#EditITCodeItemID").addClass("active");
    $("#divAddExistingIDCode").addClass("active");
}

//function AddNewITCode() {
//    var typeOfOperationForITCode = "AddNewITCode";
//    var isValid = ValidateITCodeDetails(typeOfOperationForITCode);
//    if (!isValid) return false;

//    var addITCodeDetails = {
//        ITCode: $("#CCTypeddlID").val(),
//        ITHead: $("#SubTypeddlID").val()
//    }
//}

function EditExistingITCode() {
    var typeOfOperationForITCode = "EditExistingITCode";
    var isValid = ValidateITCodeDetails(typeOfOperationForITCode);
    if (!isValid) return false;

    var editExistingITCodeDetails = {
        CCTypeID: $("#CCTypeddlID").val(),
        SubTypeID: $("#SubTypeddlID").val()
    };
}
function AddNewITCode() {
    isValid = true;
    var errorMsg = "";
    var itcode = $("#txtNITcode").val();
    var itname = $("#txtNITcodename").val();
    var itnature = $("#ddlNewITNature option:selected").index();
    var mastergrpindex = $("#ddlNewITMastergroup option:selected").index();
    var subgrpexist = $("#txtsubgrpexist").val();
    if (itcode == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter IT Code</p>";
        isValid = false;
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Home/CheckITCodeExist",
            data: '{Itcode:"' + itcode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                var msg = "";
                if (count1 > 0) {
                    //msg = IT + " " + "Is Already Exist";
                    //$("#lblITExist").text(msg);
                    errorMsg += "<p style='margin-top:-5px!important;'>" + IT + " " + "Is Already Exist</p>";
                    isValid = false;
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });


    }
    if (itname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
        isValid = false;
    }
    if (itnature == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Nature of Group</p>";
        isValid = false;
    }
    if (mastergrpindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Group</p>";
        isValid = false;
    }
    if (subgrpexist === '1') {
        var Subgroupindex = $("#ddlNewITSubgroup option:selected").index();
        if (Subgroupindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Group</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAddItCodeInfoMsg").text("");
        $("#divAddItCodeInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divAddItCodeInfoMsg").addClass("alert-danger");
        $("#divAddItCodeInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divAddItCodeInfoMsg").text("");
        $("#divAddItCodeInfoMsg").addClass("hidden");

        var subgrp = '';
        if (subgrpexist === '1') { subgrp = $("#ddlNewITSubgroup option:selected").val(); }
        else { subgrp = 0; }

        var saveIT = {
            Itid: 0,
            ItCode: $("#txtNITcode").val(),
            CreatedBy: $("#txtCreatedby").val(),
            ItName: $("#txtNITcodename").val(),
            Action: 'Add',
            GroupId: $("#ddlNewITMastergroup option:selected").val(),
            SubGroupId: subgrp,
            NatureGroupId: $("#ddlNewITNature option:selected").val(),
        };


        addFailMsg = "Error Occurred While Adding IT Code.";
        addSuccessMsg = "IT Code Added Successfully.";
        //alert('submit');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/SaveITCode',
            data: { itcode: saveIT },
            success: function (Data) {
                // alert("Hi");
                if (Data.saveStatus === "Submitted") {

                    $("#btnaddnewit").prop('disabled', true);
                    $("#divAddItCodeInfoMsg").text(addSuccessMsg);
                    $("#divAddItCodeInfoMsg").removeClass("hidden alert-danger");
                    $("#divAddItCodeInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnaddnewit").prop('disabled', true);
                    $("#divAddItCodeInfoMsg").text(Data.saveStatus);
                    $("#divAddItCodeInfoMsg").addClass("alert-danger");
                    $("#divAddItCodeInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnaddnewit").prop('disabled', true);
                $("#divAddItCodeInfoMsg").text(addFailMsg);
                $("#divAddItCodeInfoMsg").addClass("alert-danger");
                $("#divAddItCodeInfoMsg").removeClass("hidden alert-success");
            }
        });

    }
}
function ResetAddNewITCode() {
    $.ajax({
        type: "POST",
        url: "/Home/GetNatureOfGroups",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddl = $("#ddlNewITNature");
            ddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddl.append($("<option></option>").val(this['NatureGroupId']).html(this['NatureGroupName']));
            });
            $("#txtNITcode").val();
            $("#txtNITcodename").val();
            $("#lblITExist").text("");
            $("#divAddItCodeInfoMsg").text("");
            $("#divAddItCodeInfoMsg").addClass("hidden");
            $("#btnaddnewit").prop('disabled', false);
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });
}
function ItcodegridActionChange(id, code, name, Naturegroupname, grpid, grpname, subgrpid, sungrpname, txt) {
    //alert(Action);
    var rowid = id;
    var itcode = code;
    var itname = name;
    var naturename = Naturegroupname;
    var groupname = grpname;
    var subgroupname = sungrpname;
    var Action = txt.value;

    if (Action == "Edit") {

        $("#EditITCodeModal").modal('show');
        $("#txtUpITName").val(itname);
        $("#txtUpITCode").val(itcode);
        $("#txtUpITNature").val(naturename);
        $("#txtUpIDId").val(rowid);
        $("#divUpdateITInfoMsg").text("");
        $("#divUpdateITInfoMsg").addClass("hidden");
        $("#btnUpdateIT").prop('disabled', false);
        $("#txtUpITgrpname").val(groupname);
        $("#txtupGroupid").val(grpid);
        $("#txtupSubGroupid").val(subgrpid);

        if (subgrpid !== 0) {
            $("#txtUpITsubgrpname").val(subgroupname);
            $("#divupSubgrp").removeClass('hidden');
        }
        else {
            $("#divupSubgrp").addClass('hidden');
        }
    }
    else if (Action == "Close") {
        //// alert(Action);
        //$("#deleteITcode").modal('show');
        //$("#lbldelITCode").html(itcode + " - " + itname);
        //$("#txtdeleteITid").val(rowid);
        //$("#confirmbtndeleteIT").removeClass('hidden');
        //$("#divDeleteITInfoMsg").text("");
        //$("#divDeleteITInfoMsg").addClass("hidden");
        //$("#btndeleteIT").prop('disabled', false);


        $.ajax({
            type: "POST",
            url: "/Home/ViewCloseITCode",
            data: '{ItId:"' + id + '",ItCode:"' + code + '",Itname:"' + name + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {

                $('#closeITcodeConfirmation').html(data);
                $('#closeITcodeConfirmation').modal();
                $("#divClsoeITInfoMsg").text("");
                $("#divClsoeITInfoMsg").addClass("hidden");
            }
        });
    }


}
function UpdateIT() {

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
            Itid: $("#txtUpIDId").val(),
            CreatedBy: $("#txtCreatedby").val(),
            ItName: $("#txtUpITName").val(),
            Action: 'Update',
            CheckUpdationType: 'Insert',
            GroupId: $("#txtupGroupid").val(),
            SubGroupId: $("#txtupSubGroupid").val()
        };

        addFailMsg = "Error Occurred While Updating IT Code.";
        addSuccessMsg = "IT Code Updated Successfully.";
        //alert('submit');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/EditITCode',
            data: { itcode: saveIT },
            success: function (Data) {
                // alert("Hi");
                if (Data.saveStatus === "Submitted") {
                    $("#btnUpdateIT").prop('disabled', true);
                    $("#divUpdateITInfoMsg").text(addSuccessMsg);
                    $("#divUpdateITInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpdateITInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpdateIT").prop('disabled', true);
                    $("#divUpdateITInfoMsg").text(Data.saveStatus);
                    $("#divUpdateITInfoMsg").addClass("alert-danger");
                    $("#divUpdateITInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnUpdateIT").prop('disabled', true);
                $("#divUpdateITInfoMsg").text(addFailMsg);
                $("#divUpdateITInfoMsg").addClass("alert-danger");
                $("#divUpdateITInfoMsg").removeClass("hidden alert-success");
            }
        });

    }

}
function DeleteIT() {

    var saveIT = {
        Itid: $("#txtdeleteITid").val(),
        CreatedBy: $("#txtCreatedby").val(),
        Action: 'Delete'
    };
    addFailMsg = "Error Occurred While Delting IT Code.";
    addSuccessMsg = "IT Code Deleted Successfully.";
    //alert('submit');

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/EditITCode',
        data: { itcode: saveIT },
        success: function (Data) {
            // alert("Hi");
            if (Data.saveStatus == "Submitted") {
                $("#btndeleteIT").prop('disabled', true);
                $("#divDeleteITInfoMsg").text(addSuccessMsg);
                $("#divDeleteITInfoMsg").removeClass("hidden alert-danger");
                $("#divDeleteITInfoMsg").addClass("alert-success");
                $("#confirmbtndeleteIT").addClass('hidden');
            }
            else {
                $("#btndeleteIT").prop('disabled', true);
                $("#divDeleteITInfoMsg").text(addFailMsg);
                $("#divDeleteITInfoMsg").addClass("alert-danger");
                $("#divDeleteITInfoMsg").removeClass("hidden alert-success");
                $("#confirmbtndeleteIT").addClass('hidden');
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btndeleteIT").prop('disabled', true);
            $("#divDeleteITInfoMsg").text(addFailMsg);
            $("#divDeleteITInfoMsg").addClass("alert-danger");
            $("#divDeleteITInfoMsg").removeClass("hidden alert-success");
            $("#confirmbtndeleteIT").addClass('hidden');
        }
    });

}
function ValidateITCodeDetails(typeOfOperationForITCode) {

    var isValid = true;
    var errorMsg = "Please enter all required fields!\n";
    var CCType = $("#CCTypeddlID").val();
    var SubType = $("#SubTypeddlID").val();

}

function NotifyITPendings(Itid, Accessname) {

    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtITCloseNote").val();
    var closingdate = $("#txtItClosingAson").val();
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

        if (closingdate === "" || closingdate === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
            isValid = false;
        }
    }
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
        var ddlaction = $("#ddlCloseItStatus option:selected").index();
        if (ddlaction === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
            isValid = false;
        }

    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClsoeITInfoMsg").text("");
        $("#divClsoeITInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClsoeITInfoMsg").addClass("alert-danger");
        $("#divClsoeITInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClsoeITInfoMsg").text("");
        var sendNotificationDetails = {};
        $("#divClsoeITInfoMsg").addClass("hidden");
        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                Action: Accessname,
                Itid: Itid,
                CloseRemarks: $("#txtITCloseNote").val(),
                ClosingDate: $("#txtItClosingAson").val(),
                CloseStatus: $("#ddlCloseItStatus option:selected").val()
            };
        }
        else {
            sendNotificationDetails = {
                Action: Accessname,
                Itid: Itid,
                CloseRemarks: $("#txtITCloseNote").val(),
                ClosingDate: $("#txtItClosingAson").val(),
                CloseStatus: ''
            };

        }

        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/CloseITNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divClsoeITInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divClsoeITInfoMsg").text('Closing IT Code Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseItStatus option:selected").val();
                        if (type === 'Reject')
                            $("#divClsoeITInfoMsg").text('Closing IT Code  Rejected Successfully');
                        else
                            $("#divClsoeITInfoMsg").text('Closing  IT Code  Approved Successfully');
                    }
                    $("#divClsoeITInfoMsg").removeClass("hidden alert-danger");
                    $("#divClsoeITInfoMsg").addClass("alert-success");

                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divClsoeITInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divClsoeITInfoMsg").addClass("alert-danger");
                    $("#divClsoeITInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divClsoeITInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divClsoeITInfoMsg").addClass("alert-danger");
                $("#divClsoeITInfoMsg").removeClass("hidden alert-success");
            }
        });
    }

}
/* Scripts For Adding New IT */

/* Scripts For Adding New Client and SubClient */

function ddlClientActionschange(clientid, clientcode, clientname, action) {
    var selectedaction = action.value;

    if (selectedaction == "UpdateClient") {
        $("#ModelUpdateClient").modal('show');
        ClearUpdateClient();
        $("#txtUpClientcode").val(clientcode);
        UpClientCodeChange();
        //$("#txtUpITNature").val(Naturegroupname);
        //$("#txtUpITgrpname").val(grpname);
        //$("#txtupGroupid").val(grpid);
        //$("#txtupSubGroupid").val(subgrpid);

        //if (subgrpid !== 0) {
        //    $("#txtUpITsubgrpname").val(subgroupname);
        //    $("#divupSubgrp").removeClass('hidden');
        //}
        //else {
        //    $("#divupSubgrp").addClass('hidden');
        //}
    }
    else if (selectedaction == "AddNewSubClient") {
        $("#ModelAddSubClient").modal('show');
        ClearAddSubClient();
        $("#txtClientCodeForClient").val(clientcode);
        $("#txtClientidforsubclient").val(clientid);
        $("#txtClientCodeForClient").prop("disabled", true);


    }
    else if (selectedaction == "UpdateSubClient") {
        $("#ModelUpdateSubClient").modal('show');

        ClearupdateSubClient();
        $("#txtUpClientCodeForClient").val(clientcode);
        $("#txtUpClientCodeForClient").prop("disabled", true);
        $.ajax({
            type: "POST",
            url: "/Home/GetSubClientbyClientCode",
            data: '{ClientCode:"' + clientcode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count = Object.keys(response).length;
                if (count > 0) {
                    $.each(response, function () {
                        var CCddl = $("#ddlUpSubClientCode");
                        CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            CCddl.append($("<option></option>").val(this['SubClientId']).html(this['SubClientCode']));
                        });
                        $("#ddlUpSubClientCode").prop("disabled", false);
                        $("#divUpSubClientInfoMsg").text("");
                        $("#divUpSubClientInfoMsg").addClass("hidden");
                    });
                }
                else {
                    $("#divUpSubClientInfoMsg").append("<div>SubCleint Verification in Pending</div>");
                    $("#divUpSubClientInfoMsg").addClass("alert-danger");
                    $("#divUpSubClientInfoMsg").removeClass("hidden alert-success");
                }


            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else if (selectedaction == "ViewClientDetails") {
        $("#ModelViewClient").modal('show');
        $.ajax({

            type: "POST",
            url: "/Home/GetClientDetailsbyCode",
            data: '{clientcode:"' + clientcode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                $.each(response, function () {
                    //alert(this['Person_PhoneNo']);
                    $("#txtvclient").val(this['Client_Name']);
                    $("#txtvtin").val(this['TINNo']);
                    $("#txtpan").val(this['PANNo']);
                    $("#txtvctan").val(this['TANNo']);
                    $("#txtvName").val(this['Contact_Person_Name']);
                    $("#txtUpAddress").val(this['Address']);
                    $("#txtvPhone").val(this['Person_PhoneNo']);
                    $("#txtvgnature").val(this['NatureGroupName']);

                    var gstapplicable = this['GST_Applicable'];
                    //alert(gstapplicable);
                    if (gstapplicable == "True") {
                        $.ajax({
                            type: "POST",
                            url: "/Home/GetTaxesForClient",
                            data: '{clientcode:"' + clientcode + '"}',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (response) {
                                $("#ViewGstTable tbody tr").remove();
                                var count = Object.keys(response).length;
                                if (count > 0) {
                                    $("#txtvgst").val("YES");
                                    var rowno = 0;
                                    $.each(response, function () {
                                        rowno = rowno + 1;
                                        var newRow = $("<tr>");
                                        var cols = "";
                                        cols += '<td style="text-align:center" class="rowno">' + this['State'] + '</td>';
                                        cols += '<td style="text-align:center" class="rowno">' + this['TaxNo'] + '</td>';
                                        newRow.append(cols);
                                        $("table.order-list.viewgst").append(newRow);
                                    });

                                    $("#divViewClientGst").removeClass('hidden');
                                }
                                else {
                                    $("#divViewClientGst").addClass('hidden');

                                }
                            },
                            failure: function (response) {
                            },
                            error: function (response) {
                            }
                        });

                    } else {
                        $("#txtvgst").val("No");
                        $("#ViewGstTable tbody tr").remove();
                        $("#divViewClientGst").addClass('hidden');
                    }

                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else if (selectedaction === "Close") {

        $.ajax({
            type: "POST",
            url: "/Home/ViewCloseClient",
            data: '{ClientCode:"' + clientcode + '",ClientName:"' + clientname + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {
                $('#closeClientcodeConfirmation').html(data);
                $('#closeClientcodeConfirmation').modal();
                $("#divClsoeClientInfoMsg").text("");
                $("#divClsoeClientInfoMsg").addClass("hidden");
            }
        });

    }
    else if (selectedaction === "CloseSubClient") {

        $("#ModelCloseSubClient").modal('show');

        ClearupdateSubClient();
        $("#txtClClientCodeForClient").val(clientcode);
        $("#txtClClientCodeForClient").prop("disabled", true);
        $.ajax({
            type: "POST",
            url: "/Home/GetSubClientbyClientCode",
            data: '{ClientCode:"' + clientcode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count = Object.keys(response).length;
                if (count > 0) {
                    $.each(response, function () {
                        var CCddl = $("#ddlCloseSubClientCode");
                        CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            CCddl.append($("<option></option>").val(this['SubClientId']).html(this['SubClientCode']));
                        });
                        $("#ddlClSubClientCode").prop("disabled", false);
                        $("#divClSubClientInfoMsg").text("");
                        $("#divClSubClientInfoMsg").addClass("hidden");
                    });
                }
                else {
                    $("#divClSubClientInfoMsg").append("<div>SubCleint Verification in Pending</div>");
                    $("#divClSubClientInfoMsg").addClass("alert-danger");
                    $("#divClSubClientInfoMsg").removeClass("hidden alert-success");
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
    //var action = $(this).find("select option:selected").val();
    //alert(clientid + '-' + clientcode + '-' + clientname + '-' + selectedaction);

}
function closeSubClientCodeChange(txt) {

    var selectedSubclient = $("#ddlCloseSubClientCode option:selected").text();
    $.ajax({
        type: "POST",
        url: "/Home/ViewCloseSubClient",
        data: '{SubClientCode:"' + selectedSubclient + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {
            $('#closeSubClientcodeConfirmation').html(data);
            $('#closeSubClientcodeConfirmation').modal();
            $("#divSClsoeClientInfoMsg").text("");
            $("#divSClsoeClientInfoMsg").addClass("hidden");
        }
    });

}



function UpClientCodeChange() {
    var client = $("#txtUpClientcode").val();
    $("#divupclientSubgrp").addClass('hidden');
    $.ajax({
        type: "POST",
        url: "/Home/GetClientDetailsbyCode",
        data: '{clientcode:"' + client + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#txtUpClientcode").prop("readOnly", "readOnly");
            $.each(response, function () {
                //alert(this['Person_PhoneNo']);
                $("#txtUpClient").val(this['Client_Name']);
                $("#txtUpTINNo").val(this['TINNo']);
                $("#txtUpPANNo").val(this['PANNo']);
                $("#txtUpTANNo").val(this['TANNo']);
                $("#txtUpContactPersonName").val(this['Contact_Person_Name']);
                $("#txtUpAddress").val(this['Address']);
                $("#txtUpPersonPhoneNo").val(this['Person_PhoneNo']);
                $("#txtUpclientid").val(this['Client_ID']);
                $("#txtUpClientNature").val(this['NatureGroupName']);
                $("#txtUpclientgrpname").val(this['GroupName']);
                var subclientid = (this['SubGroupId']);
                //$("#txtUpclientsubgrpname").val(this['SubGroupName']);
                if (subclientid !== 0) {
                    $("#txtUpclientsubgrpname").val(this['SubGroupName']);
                    $("#divupclientSubgrp").removeClass('hidden');
                }
                else {
                    $("#divupclientSubgrp").addClass('hidden');
                }

                //var gstapplicable = this['GST_Applicable'];
                ////alert(gstapplicable);
                //if (gstapplicable == "True") {
                //    //$("#chkUpGSTY").prop("checked", true);
                //    //$("#chkUpGSTN").prop("checked", false);
                //    //$("#divUpClientGst").removeClass('hidden');
                //    //BindClientGSTDetails();

                //} else {
                //    $("#chkUpGSTY").prop("checked", false);
                //    $("#chkUpGSTN").prop("checked", true);
                //    $("#divUpClientGst").addClass('hidden');
                //}       
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
}
function BindClientGSTDetails() {
    var client = $("#txtUpClientcode").val();

    $.ajax({
        type: "POST",
        url: "/Home/GetTaxesForClient",
        data: '{clientcode:"' + client + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#UpClientGstTable tbody tr").remove();
            var count = Object.keys(response).length;
            if (count > 0) {
                var rowno = 0;
                $.each(response, function () {
                    rowno = rowno + 1;
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center" class="rowno">' + rowno + '</td>';
                    cols += '<td  class="statetd"><select class="form-control dropdown-toggle" id="ddlGstState" disabled>';
                    cols += '<option value=' + this['State_Id'] + ' select="selected">' + this['State'] + '</option>';
                    cols += '</select>';
                    cols += '</td><td style="text-align:center"  class="gst"><input class="form-control" data-val="true" id="txtUpGSTNo" name="txtGSTNo" type="text" value=' + this['TaxNo'] + ' /></td >';
                    cols += '<td style="text-align:center"  class="gstcheckbox"><ul class="list-inline">';
                    cols += '<li class="eagle-checkbox">';
                    cols += '<label class="eagle-check custom-checkbox">';
                    cols += '<input type="checkbox" class="eagle-check-input" id="chkGstCheck" checked>';
                    cols += '<span class="eagle-check-indicator"></span>  </label>';
                    cols += '</li>';
                    cols += '</ul ></td>';
                    cols += '<td style="text-align:center"><input type="button" class="ibtnUpClientDel btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.UpClientGstGrid").append(newRow);

                });

                var rowcount = $("#UpClientGstTable tbody tr").length;
                if (rowcount > 0) {
                    $("#divUpClientGst").removeClass('hidden');
                }
                else {
                    $("#divUpClientGst").addClass('hidden');
                }
            }
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
}

function SubmitUpdateClientData() {

    isValid = true;
    var errorMsg = "";
    var clientcode = $("#txtUpClientcode").val();
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
        $("#divUpClientInfoMsg").text("");
        $("#divUpClientInfoMsg").addClass("hidden");

        UpdateClientDetails();


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
        //                cols += '<td style="text-align:center">' + rowno + '</td>';
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
        //                })
        //            },
        //            failure: function (response) {
        //                alert(response.responseText);

        //                removeSpinner($('#ajax-container'), function () {
        //                    $('#ajax-container').html('Content loaded.');
        //                })
        //            },
        //            error: function (response) {
        //                alert(response.responseText);

        //                removeSpinner($('#ajax-container'), function () {
        //                    $('#ajax-container').html('Content loaded.');
        //                })
        //            }
        //        });

        //    }
        //    else {
        //        //submit data without gst details
        //        UpdateClientDetails();
        //    }
        //}
        //else {
        //    //alert('is NOT checked!');
        //    //submit data with gst details
        //    var ddlcount = 0;
        //    var amountcount = 0, checkcount=0;
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
        //    if (checkcount>0) {
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
        //        $("#divUpClientInfoMsg").text("");
        //        $("#divUpClientInfoMsg").addClass("hidden");

        //        UpdateClientDetails();
        //    }

        //}

    }
}
function UpdateClientDetails() {
    //////debugger;
    //    var gstdeals = null;
    //    var gstApplicatble = '0';
    //var rows = [];

    //    if ($('#chkUpGSTN').is(":checked")) { gstApplicatble = '0'; }
    //    if ($('#chkUpGSTY').is(":checked")) {
    //        gstApplicatble = '1';
    //        var totalRowCount = $("#UpClientGstTable tbody tr").length;
    //        //alert(totalRowCount);
    //        //$("#UpClientGstTable tbody tr").each(function () {
    //        //    var currentRow = $(this);
    //        //    var state = currentRow.find("td").eq(1).find("select option:selected").val();
    //        //    var gstno = currentRow.find("td").eq(2).find("input[type='text']").val();
    //        //    // alert(state + "" + gstno);
    //        //    rows.push({
    //        //        State: state,
    //        //        GstNo: gstno,
    //        //        Status: "1"

    //        //    });
    //        //});
    //        var GstStatids = "", GstNos = "";
    //         $("#UpClientGstTable tbody tr").each(function () {
    //            var currentRow = $(this);
    //            var state = currentRow.find("td").eq(1).find("select option:selected").val();
    //            var gstno = currentRow.find("td").eq(2).find("input[type='text']").val();
    //             GstStatids += state + ",";
    //             GstNos += gstno + ",";
    //        });

    //}

    //var updateClient = {
    //        ClientID: $("#txtUpclientid").val(),
    //        Client_Code: $("#txtUpClientcode").val(),
    //        Client_Name: $("#txtUpClient").val(),
    //        TINNo: $("#txtUpTINNo").val(),
    //        PANNo: $("#txtUpPANNo").val(),
    //        TANNo: $("#txtUpTANNo").val(),
    //        Contact_Person_Name: $("#txtUpContactPersonName").val(),
    //        Person_PhoneNo: $("#txtUpPersonPhoneNo").val(),
    //        Address: $("#txtUpAddress").val(),
    //        GST_Applicable: gstApplicatble,
    //        Action: 2,
    //        //gstDetails: rows
    //        GSTStatesList: GstStatids,
    //        GSTNoList: GstNos,
    //        Createdby: $("#txtClientCreatedby").val(),
    //        DelGSTStatesList: $("#txtdelgstid").val(),
    //       CheckUpdationType: 'Insert'
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
        Createdby: $("#txtClientCreatedby").val(),
        CheckUpdationType: 'Insert'
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
                $("#btnSubmitUpClient").prop('disabled', true);
                $("#divUpClientInfoMsg").text(addSuccessMsg);
                $("#divUpClientInfoMsg").removeClass("hidden alert-danger");
                $("#divUpClientInfoMsg").addClass("alert-success");
            }
            else {
                $("#btnSubmitUpClient").prop('disabled', true);
                $("#divUpClientInfoMsg").text(Data.saveStatus);
                $("#divUpClientInfoMsg").addClass("alert-danger");
                $("#divUpClientInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnSubmitUpClient").prop('disabled', true);
            $("#divUpClientInfoMsg").text(addFailMsg);
            $("#divUpClientInfoMsg").addClass("alert-danger");
            $("#divUpClientInfoMsg").removeClass("hidden alert-success");
        }
    });




}
function ClearUpdateClient() {
    $("#txtUpClientcode").val("");
    $("#btnSubmitUpClient").prop("disabled", false);
    $("#txtUpClientcode").prop("readOnly", false);
    //$("#ddlUpClient").prop("disabled", "false");
    //$("#ddlUpClient").prop('selectedIndex', 0);
    $("#txtUpclientid").val("0");
    $("#txtUpClient").val("");
    $("#txtUpTINNo").val("");
    $("#txtUpPANNo").val("");
    $("#txtUpTANNo").val("");
    $("#txtUpContactPersonName").val("");
    $("#txtUpAddress").val("");
    $("#txtUpPersonPhoneNo").val("");
    $("#chkUpGSTY").prop("checked", false);
    $("#chkUpGSTN").prop("checked", true);
    $("#divUpClientInfoMsg").text("");
    $("#divUpClientInfoMsg").addClass("hidden");
    $("#divUpClientGst").addClass('hidden');
    // $("#UpClientGstTable tbody tr:first").remove();
    $("#UpClientGstTable tbody tr:not(:first)").remove();
    $("#txtdelgstid").val("");
    $("#UpClientGstTable tbody tr:first").each(function () {
        var currentRow = $(this);
        var state = currentRow.find("td").eq(1).find("select").prop('selectedIndex', 0);
        var gstno = currentRow.find("td").eq(2).find("input[type='text']").val("");
        currentRow.find('input[type="checkbox"]').prop("checked", false);

    });

}

//function UpdateClientBindNewRowForGST() {

//    var list = [];
//    isValid = true;
//    var errorMsg = "";
//    var ddlcount = 0;
//    var amountcount = 0;
//    var i = 0;

//    $("#UpClientGstTable tbody tr").each(function () {

//        var currentRow = $(this);
//        var col2_value = currentRow.find("td").eq(1).find("select option:selected").val();
//        var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
//        // var col3_value = currentRow.find("td").find("input[type='checkbox']");
//        var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
//        var stateid = currentRow.find("td").eq(1).find("select option:selected").val();
//        var check = currentRow.find('input[type="checkbox"]').is(':checked');

//            list.push(stateid);
//            //alert(stateid);

//        if (col1_value == "" || col1_value == "0") {
//            amountcount = amountcount + 1;
//        }

//        if (amountcount > 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter GSTNo</p>";
//            isValid = false;
//        }
//        if (check == false) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Check</p>";
//            isValid = false;
//        }
//    });

//    if (!isValid) {

//        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//        $("#divUpClientInfoMsg").text("");
//        $("#divUpClientInfoMsg").append(finalerror + errorMsg + "</div>");
//        $("#divUpClientInfoMsg").addClass("alert-danger");
//        $("#divUpClientInfoMsg").removeClass("hidden alert-success");
//        return false;
//    }
//    else {
//        list = $.unique(list);

//        $("#divUpClientInfoMsg").text("");
//        $("#divUpClientInfoMsg").addClass("hidden");

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
//                var count = $("#UpClientGstTable tbody tr").length;
//                var rowno = parseInt(count) + parseInt(1);
//                var newRow = $("<tr>");
//                var cols = "";
//                cols += '<td style="text-align:center" class="rowno">' + rowno + '</td>';
//                cols += '<td  class="statetd"><select class="form-control dropdown-toggle" id="ddlupGstState" ><option value="">-Please Select-</option>';
//                $.each(response, function () {                    
//                    var status = checkValueInArray(this['State_ID'], list);
//                    if (status == false) {
//                        cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
//                    }
//                });

//                cols += '</select>';
//                cols += '</td><td style="text-align:center"  class="gst"><input class="form-control" data-val="true" id="txtUpGSTNo" name="txtupGSTNo" type="text" /></td >';
//                cols += '<td style="text-align:center"  class="gstcheckbox"><ul class="list-inline">';
//                cols += '<li class="eagle-checkbox">';
//                cols += '<label class="eagle-check custom-checkbox">';
//                cols += '<input type="checkbox" class="eagle-check-input">';
//                cols += '<span class="eagle-check-indicator"></span>  </label>';
//                cols += '</li>';
//                cols += '</ul ></td>';
//                cols += '<td style="text-align:center"><input type="button" class="ibtnUpClientDel btn btn-md btn-danger" value="Delete"></td>';
//                newRow.append(cols);
//                $("table.order-list.UpClientGstGrid").append(newRow);

//                removeSpinner($('#ajax-container'), function () {
//                    $('#ajax-container').html('Content loaded.');
//                })

//            },
//            failure: function (response) {
//                alert(response.responseText);

//                removeSpinner($('#ajax-container'), function () {
//                    $('#ajax-container').html('Content loaded.');
//                })
//            },
//            error: function (response) {
//                alert(response.responseText);

//                removeSpinner($('#ajax-container'), function () {
//                    $('#ajax-container').html('Content loaded.');
//                })
//            }
//        });

//    }
//}
function SubmitSubClientData() {
    isValid = true;
    var errorMsg = "";
    var Branch = $("#txtSCBranch").val();
    var PersonName = $("#txtSCPersonName").val();
    var PhoneNo = $("#txtSCPhoneNo").val();
    var SCTin = $("#txtSCTINNo").val();
    var SCPan = $("#txtSCPANNo").val();
    var SCTan = $("#txtSCTANNo").val();
    var address = $("#txtSCAddress").val();
    var naturegroup = $("#ddlSClientNatureGroup option:selected").index();
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
    if (naturegroup == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Nature of Group</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSubClientInfoMsg").text("");
        $("#divSubClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divSubClientInfoMsg").addClass("alert-danger");
        $("#divSubClientInfoMsg").removeClass("hidden alert-success");
    }
    else {
        //submit data with gst details       
        if ($('#chkSCGSTN').is(":checked")) {

            var gst = confirm('Apply GST');
            if (gst == true) {
                //show gst grid
                $("#chkSCGSTY").prop("checked", true);
                $("#chkSCGSTN").prop("checked", false);
                $("#divSubClientGst").removeClass('hidden');
                //AddNewClientDetails();
                $("#divSubClientInfoMsg").text("");
                $("#divSubClientInfoMsg").addClass("hidden");
            }
            else {
                //submit data without gst details
                SaveNewSubClient();
                $("#divSubClientInfoMsg").text("");
                $("#divSubClientInfoMsg").addClass("hidden");
            }
        } else {
            //alert('is NOT checked!');
            //submit data with gst details
            var ddlcount = 0;
            var amountcount = 0;
            var checkcount = 0;
            var list = [];
            $("#SubClientGstTable tbody tr").each(function () {
                var currentRow = $(this);
                var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
                var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
                // var col3_value = currentRow.find("td").find("input[type='checkbox']");
                var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
                var check = currentRow.find('input[type="checkbox"]').is(':checked');
                if (col2_value == 0) {
                    ddlcount = ddlcount + 1;
                }
                else {
                    list.push(stateName);
                }

                if (col1_value === "" || col1_value === "0") {
                    amountcount = amountcount + 1;
                }
                if (check === false) {
                    checkcount = checkcount + 1;
                    //errorMsg += "<p style='margin-top:-5px!important;'>Select Check</p>";
                    //isValid = false;
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
                $("#divSubClientInfoMsg").text("");
                $("#divSubClientInfoMsg").append(finalerror1 + errorMsg + "</div>");
                $("#divSubClientInfoMsg").addClass("alert-danger");
                $("#divSubClientInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divSubClientInfoMsg").text("");
                $("#divSubClientInfoMsg").addClass("hidden");

                var duplicatelist = list.filter(i => list.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    var finalerror2 = "<div style='align:center'><p>Only One GST for One State</p>";
                    $("#divSubClientInfoMsg").text("");
                    $("#divSubClientInfoMsg").append(finalerror2 + "</div>");
                    $("#divSubClientInfoMsg").addClass("alert-danger");
                    $("#divSubClientInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
                else {
                    $("#divSubClientInfoMsg").text("");
                    $("#divSubClientInfoMsg").addClass("hidden");

                    SaveNewSubClient();
                }
            }

        }
    }
}

function SaveNewSubClient() {
    var gstdeals = null;
    var gstApplicatble = 0;
    var rows = [];
    var GstStatids = "", GstNos = "";
    if ($('#chkSCGSTN').is(":checked")) { gstApplicatble = 0; }
    if ($('#chkSCGSTY').is(":checked")) {
        gstApplicatble = 1;
        var totalRowCount = $("#ClientGstTable tbody tr").length;
        $("#SubClientGstTable tbody tr").each(function () {
            var currentRow = $(this);
            var state = currentRow.find("td").eq(1).find("select option:selected").val();
            var gstno = currentRow.find("td").eq(2).find("input[type='text']").val();
            GstStatids += state + ",";
            GstNos += gstno + ",";

        });
    }

    var addSubClient = {
        ClientCode: $("#txtClientCodeForClient").val(),
        Branch: $("#txtSCBranch").val(),
        SC_Person_Name: $("#txtSCPersonName").val(),
        SC_Phone_No: $("#txtSCPhoneNo").val(),
        SC_TINNo: $("#txtSCTINNo").val(),
        SC_PANNo: $("#txtSCPANNo").val(),
        SC_TANNo: $("#txtSCTANNo").val(),
        Address: $("#txtSCAddress").val(),
        Action: 1,
        NatureGroupId: $("#ddlSClientNatureGroup option:selected").val(),
        Createdby: $("#txtClientCreatedby").val(),
        GST_Applicable: gstApplicatble,
        GSTStatesList: GstStatids,
        GSTNoList: GstNos
    };
    addFailMsg = "Error Occurred While Adding New Sub Client";
    addSuccessMsg = "Sub Client Details Added Successfully.";
    //alert('submit');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveNewSubClient',
        data: { addSubClient: addSubClient },
        success: function (Data) {
            if (Data.saveStatus == 'Submited') {
                $("#divSubClientInfoMsg").text(addSuccessMsg);
                $("#divSubClientInfoMsg").removeClass("hidden alert-danger");
                $("#divSubClientInfoMsg").addClass("alert-success");
                $("#btnSubmitSubClient").prop("disabled", true);
            }
            else {
                $("#divSubClientInfoMsg").text(Data.saveStatus);
                $("#divSubClientInfoMsg").addClass("alert-danger");
                $("#divSubClientInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divSubClientInfoMsg").text(addFailMsg);
            $("#divSubClientInfoMsg").addClass("alert-danger");
            $("#divSubClientInfoMsg").removeClass("hidden alert-success");
        }
    });

}

function ClearAddClient() {
    $("#btnSubmitClient").prop('disabled', false);
    $("#ClientCategoryddl").prop('selectedIndex', 0);
    $("#ddlClientNatureGroup").prop('selectedIndex', 0);
    $("#txtClient").val("");
    $("#txtTINNo").val("");
    $("#txtPANNo").val("");
    $("#txtTANNo").val("");
    $("#txtContactPersonName").val("");
    $("#txtAddress").val("");
    $("#txtPersonPhoneNo").val("");
    //$("#chkGSTY").prop("checked", false);
    // $("#chkGSTN").prop("checked", true);
    $("#divAddClientInfoMsg").text("");
    $("#divAddClientInfoMsg").addClass("hidden");
    $("#txtsubgrpclientexist").val('0');
    $("#ddlNewclientMastergroup").prop('selectedIndex', 0);
    $("#ddlNewclientSubgroup").prop('selectedIndex', 0);
    //$("#divClientGst").addClass('hidden');
    //$("#ClientGstTable tbody tr:not(:first)").remove();

    //$("#ClientGstTable tbody tr:first").each(function () {
    //    var currentRow = $(this);
    //    var state = currentRow.find("td").eq(1).find("select").prop('selectedIndex', 0);
    //    var gstno = currentRow.find("td").eq(2).find("input[type='text']").val("");  
    //    currentRow.find('input[type="checkbox"]').prop("checked", false);

    //});

}

function ClearAddSubClient() {
    $("#txtSCBranch").val("");
    $("#txtSCPersonName").val("");
    $("#txtSCPhoneNo").val("");
    $("#txtSCTINNo").val("");
    $("#txtSCPANNo").val("");
    $("#txtSCTANNo").val("");
    $("#ddlSClientNatureGroup").prop('selectedIndex', 0);
    $("#divSubClientInfoMsg").text("");
    $("#divSubClientInfoMsg").addClass("hidden");
    $("#divSubClientGst").addClass('hidden');
    $("#txtClientCodeForClient").val("");
    $("#txtSCAddress").val("");
    $("#btnSubmitSubClient").prop("disabled", false);
    $("#divSubClientGst").addClass("hidden");

    $("#chkSCGSTY").prop("checked", false);
    $("#chkSCGSTN").prop("checked", true);

    $("#SubClientGstTable tbody tr:not(:first)").remove();
    $("#SubClientGstTable tbody tr:first").each(function () {
        var currentRow = $(this);
        var state = currentRow.find("td").eq(1).find("select").prop('selectedIndex', 0);
        var gstno = currentRow.find("td").eq(2).find("input[type='text']").val("");
        currentRow.find('input[type="checkbox"]').prop("checked", false);

    });

}

function IsNumeric(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
    if ((iKeyCode < 48 || iKeyCode > 57))
        return false;
}
function IsNumericCC(evt) {
    var CostcenterType = $("#CCTypeddlID option:selected").text();
    if (CostcenterType != "") {
        if (CostcenterType != "Capital") {
            var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
            if ((iKeyCode < 48 || iKeyCode > 57))
                return false;
        }
    }
    else {
        alert("Select Cost Center Type");
    }
}

function AddClientBindNewRowForGST() {

    var list = [];
    isValid = true;
    var errorMsg = "";
    var ddlcount = 0;
    var amountcount = 0;
    var i = 0;

    $("#ClientGstTable tbody tr").each(function () {

        var currentRow = $(this);
        var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
        var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
        // var col3_value = currentRow.find("td").find("input[type='checkbox']");
        var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
        var stateid = currentRow.find("td").eq(1).find("select option:selected").val();
        var check = currentRow.find('input[type="checkbox"]').is(':checked');
        if (col2_value == 0) {
            ddlcount = ddlcount + 1;
        }
        else {
            list.push(stateid);
            //alert(stateid);
        }
        if (col1_value == "" || col1_value == "0") {
            amountcount = amountcount + 1;
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
    if (check == false) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Check</p>";
        isValid = false;
    }

    if (!isValid) {

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAddClientInfoMsg").text("");
        $("#divAddClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divAddClientInfoMsg").addClass("alert-danger");
        $("#divAddClientInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        list = $.unique(list);

        $("#divAddClientInfoMsg").text("");
        $("#divAddClientInfoMsg").addClass("hidden");

        $.ajax({
            type: "POST",
            url: "/Home/GetAllStates",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count = $("#ClientGstTable tbody tr").length;
                var rowno = parseInt(count) + parseInt(1);
                var newRow = $("<tr>");
                var cols = "";
                cols += '<td style="text-align:center">' + rowno + '</td>';
                cols += '<td><select class="form-control dropdown-toggle" id="ddlGstState" onchange="ClientGSTStateChange()"><option value="">-Please Select-</option>';
                $.each(response, function () {
                    var status = checkValueInArray(this['State_ID'], list);
                    //  alert(this['State_ID'] + "=" + status);
                    if (status == false) {
                        cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                    }
                });
                cols += '</select>';
                cols += '</td><td style="text-align:center"><input class="form-control" data-val="true" id="txtGSTNo" name="txtGSTNo" type="text" /></td >';
                //cols += '<td style="text-align:center"><input type="checkbox" name="GstCheck" id="chkGstCheck" /></td>';
                cols += '<td style="text-align:center"><ul class="list-inline">';
                cols += '<li class="eagle-checkbox">';
                cols += '<label class="eagle-check custom-checkbox">';
                cols += '<input type="checkbox" class="eagle-check-input" id="chkGstCheck">';
                cols += '<span class="eagle-check-indicator"></span>  </label>';
                cols += '</li>';
                cols += '</ul ></td>';
                cols += '<td style="text-align:center"><input type="button" class="ibtnClientDel btn btn-md btn-danger" value="Delete"></td>';
                newRow.append(cols);
                $("table.order-list.ClientGstGrid").append(newRow);
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function SubClientCodeChange() {

    var subclientIndex = $("#ddlUpSubClientCode option:selected").index();
    var subclient = $("#ddlUpSubClientCode option:selected").text();
    var clientCode = $("#txtUpClientCodeForClient").val();
    $.ajax({
        type: "POST",
        url: "/Home/GetSubClientDtails",
        data: '{ClientCode:"' + clientCode + '",Subclient:"' + subclient + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $.each(response, function () {
                $("#ddlUpSubClientCode").prop("disabled", true);
                // alert(this['Address'] + "" + this['Branch'] + "" + this['SC_Person_Name'] + "" + this['SC_Phone_No'] + "" + this['SC_TINNo'] + "" + this['SC_PANNo']);
                $("#txtUpSCAddress").val(this['Address']);
                $("#txtUpSCBranch").val(this['Branch']);
                $("#txtUpSCPersonName").val(this['SC_Person_Name']);
                $("#txtUpSCPhoneNo").val(this['SC_Phone_No']);
                $("#txtUpSCTINNo").val(this['SC_TINNo']);
                $("#txtUpSCPANNo").val(this['SC_PANNo']);
                $("#txtUpSCTANNo").val(this['SC_TANNo']);
                $("#txtUpSCNature").val(this['NatureGroupName']);
                $("#txtUpClientidforsubclient").val(this['ClientID']);

                var gst = this['GST_Applicable'];
                if (gst == 'YES') {
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: '/AccountsApproval/GetVerifyClientTaxes',
                        data: { ClientCode: subclient },
                        success: function (response) {
                            $("#UpSClientGstTable tbody tr").remove();
                            var count = Object.keys(response).length;
                            if (count > 0) {
                                var rowno = 0;
                                $.each(response, function () {
                                    rowno = rowno + 1;
                                    var newRow = $("<tr>");
                                    var cols = "";
                                    cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
                                    cols += '<td  class="statetd"><select class="form-control dropdown-toggle" >';
                                    cols += '<option value=' + this['StateId'] + ' select="selected">' + this['State'] + '</option>';
                                    cols += '</select>';
                                    cols += '</td><td style="text-align:center"  class="gst"><input class="form-control" data-val="true"  name="txtGSTNo" type="text" value=' + this['TaxNo'] + ' /></td >';
                                    cols += '<td style="text-align:center"  class="gstcheckbox"><ul class="list-inline">';
                                    cols += '<li class="eagle-checkbox">';
                                    cols += '<label class="eagle-check custom-checkbox">';
                                    cols += '<input type="checkbox" class="eagle-check-input" id="chkGstCheck" checked>';
                                    cols += '<span class="eagle-check-indicator"></span>  </label>';
                                    cols += '</li>';
                                    cols += '</ul ></td>';
                                    cols += '<td style="text-align:center"><input type="button" class="ibtnUpSClientDel btn btn-md btn-danger" value="Delete"></td>';
                                    newRow.append(cols);
                                    $("table.order-list.UpSClientGstGrid").append(newRow);
                                });

                                var rowcount = $("#UpSClientGstTable tbody tr").length;

                                if (rowcount > 0) {
                                    $("#chkUpSCGSTY").prop("checked", true);
                                    $("#chkUpSCGSTN").prop("checked", false);
                                    $("#divUpSCClientGst").removeClass('hidden');
                                }
                                else {
                                    $("#chkUpSCGSTY").prop("checked", false);
                                    $("#chkUpSCGSTN").prop("checked", true);
                                    $("#divUpSCClientGst").addClass('hidden');
                                }
                            }
                        },
                        failure: function (response) {
                        },
                        error: function (response) {
                        }
                    });
                }
                else {
                    $("#chkUpSCGSTY").prop("checked", false);
                    $("#chkUpSCGSTN").prop("checked", true);
                    $("#divUpSCClientGst").addClass('hidden');
                }
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });

}
function ClientGSTStateChange() {
    //var count = $("#ClientGstTable tbody tr").length;
    //if (count>1) {
    //    $("#ClientGstTable tbody tr").each(function () {
    //        var currentRow1 = $(this);
    //        var fistindex = $(this).closest("tr").index();
    //        //alert(fistindex);
    //        var gstState1 = currentRow1.find("td").eq(1).find("select option:selected").val();
    //        var gstStateindex1 = currentRow1.find("td").eq(1).find("select option:selected").index();
    //        if (gstStateindex1 > 0) {

    //            $("#ClientGstTable tbody tr").each(function () {
    //                var currentRow2 = $(this);
    //                var secondindex = $(this).closest("tr").index();
    //               // alert('fistindex-' + fistindex + 'secondindex--' +"" + secondindex);

    //                if (parseInt(fistindex) != parseInt(secondindex)) {
    //                    var gstState2 = currentRow2.find("td").eq(1).find("select option:selected").val();
    //                    var gstStateindex2 = currentRow2.find("td").eq(1).find("select option:selected").index();
    //                    //alert(gstState2 + "---" + gstState1);
    //                    if (gstState2 == gstState1) {
    //                       // alert('match');
    //                        var error = "<div>State name is already selected</div>";
    //                        $("#divAddClientInfoMsg").text("");
    //                        $("#divAddClientInfoMsg").append(error);
    //                        $("#divAddClientInfoMsg").addClass("alert-danger");
    //                        $("#divAddClientInfoMsg").removeClass("hidden alert-success");
    //                        currentRow1.find("td").eq(1).find("select option:first-child").attr("selected", "-Please Select-");
    //                    }
    //                    else {
    //                       // alert('not');
    //                        $("#divAddClientInfoMsg").text("");
    //                        $("#divAddClientInfoMsg").addClass("hidden");
    //                    }
    //                }
    //            });

    //        }
    //    });

    //}
}

function AddSubClientBindNewRowForGST() {
    var list = [];
    isValid = true;
    var errorMsg = "";
    var ddlcount = 0;
    var amountcount = 0;
    var i = 0;
    var checkcount = 0;
    $("#SubClientGstTable tbody tr").each(function () {
        var currentRow = $(this);
        var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
        var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
        // var col3_value = currentRow.find("td").find("input[type='checkbox']");
        var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
        var check = currentRow.find('input[type="checkbox"]').is(':checked');
        if (col2_value == 0) {
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

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSubClientInfoMsg").text("");
        $("#divSubClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divSubClientInfoMsg").addClass("alert-danger");
        $("#divSubClientInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var duplicatelist = list.filter(i => list.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Only One GST for One State</p>";
            $("#divSubClientInfoMsg").text("");
            $("#divSubClientInfoMsg").append(finalerror2 + "</div>");
            $("#divSubClientInfoMsg").addClass("alert-danger");
            $("#divSubClientInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            list = $.unique(list);
            $("#divSubClientInfoMsg").text("");
            $("#divSubClientInfoMsg").addClass("hidden");

            $.ajax({
                type: "POST",
                url: "/Home/GetAllStates",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var count = $("#SubClientGstTable tbody tr").length;
                    var rowno = parseInt(count) + parseInt(1);
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center">' + rowno + '</td>';
                    cols += '<td><select class="form-control dropdown-toggle" id="ddlSubClientGstState" ><option value="">-Please Select-</option>';
                    $.each(response, function () {
                        var status = checkValueInArray(this['State_Name'], list);
                        if (status == false) {
                            cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                        }

                    });
                    cols += '</select>';
                    cols += '</td><td style="text-align:center"><input class="form-control" data-val="true" id="txtSCGSTNo" name="txtSCGSTNo" type="text" /></td >';
                    cols += '<td style="text-align:center"><input type="checkbox" name="chkSCGstCheck" id="chkSCGstCheck" /></td>';
                    cols += '<td style="text-align:center"><input type="button" class="ibtnSCClientDel btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.subclientgst").append(newRow);
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
    }
}
function UpdateSubClientData() {

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

        ////submit data with gst details
        //$("#divUpSubClientInfoMsg").text("");
        //$("#divUpSubClientInfoMsg").addClass("hidden");
        //UpdatesubClient();

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
                        $("table.order-list.UpSClientGstGrid").append(newRow);
                    },
                    failure: function (response) {
                    },
                    error: function (response) {
                    }
                });

            }
            else {
                UpdatesubClient();
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
                    UpdatesubClient();
                    $("#divUpSubClientInfoMsg").text("");
                    $("#divUpSubClientInfoMsg").addClass("hidden");
                }
            }
            //submit data without gst details

        }
    }

}

function UpdatesubClient() {

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
        ClientCode: $("#txtUpClientCodeForClient").val(),
        SubClientCode: $("#ddlUpSubClientCode option:selected").text(),
        Branch: $("#txtUpSCBranch").val(),
        SC_Person_Name: $("#txtUpSCPersonName").val(),
        SC_Phone_No: $("#txtUpSCPhoneNo").val(),
        SC_TINNo: $("#txtUpSCTINNo").val(),
        SC_PANNo: $("#txtUpSCPANNo").val(),
        SC_TANNo: $("#txtUpSCTANNo").val(),
        Address: $("#txtUpSCAddress").val(),
        Action: 2,
        Createdby: $("#txtClientCreatedby").val(),
        CheckUpdationType: 'Insert',
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
                $("#divUpSubClientInfoMsg").text(addSuccessMsg);
                $("#divUpSubClientInfoMsg").removeClass("hidden alert-danger");
                $("#divUpSubClientInfoMsg").addClass("alert-success");
                $("#btnUpdateSubClient").prop("disabled", true);
            }
            else {
                $("#divUpSubClientInfoMsg").text(Data.saveStatus);
                $("#divUpSubClientInfoMsg").addClass("alert-danger");
                $("#divUpSubClientInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divUpSubClientInfoMsg").text(addFailMsg);
            $("#divUpSubClientInfoMsg").addClass("alert-danger");
            $("#divUpSubClientInfoMsg").removeClass("hidden alert-success");
        }
    });


}
function ClearupdateSubClient() {
    $("#txtUpClientCodeForClient").val("");
    $("#txtUpClientidforsubclient").val("");
    var ddlsubclientcode = $("#ddlUpSubClientCode");
    ddlsubclientcode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    $("#txtUpSCBranch").val("");
    $("#txtUpSCPersonName").val("");
    $("#txtUpSCPhoneNo").val("");
    $("#txtUpSCTINNo").val("");
    $("#txtUpSCPANNo").val("");
    $("#txtUpSCTANNo").val("");
    $("#txtUpSCAddress").val("");
    $("#divUpSubClientInfoMsg").text("");
    $("#divUpSubClientInfoMsg").addClass("hidden");
    $("#ddlUpSubClientCode").prop("disabled", false);
    $("txtUpSCNature").val();
    $("#btnUpdateSubClient").prop("disabled", false);
    $("#divUpSCClientGst").addClass("hidden");

    $("#chkUpSCGSTY").prop("checked", false);
    $("#chkUpSCGSTN").prop("checked", true);

    $("#UpSClientGstTable tbody tr:not(:first)").remove();
    $("#UpSClientGstTable tbody tr:first").each(function () {
        var currentRow = $(this);
        var state = currentRow.find("td").eq(1).find("select").prop('selectedIndex', 0);
        var gstno = currentRow.find("td").eq(2).find("input[type='text']").val("");
        currentRow.find('input[type="checkbox"]').prop("checked", false);
    });
}

function NotifyClientPendings(ClientCode, Accessname) {
    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtclientCloseNote").val();
    var closingdate = $("#txtclientClosingAson").val();
    var status = $("#ddlCloseClientStatus").val();
    //if (Accessname === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

    //    if (closingdate === "" || closingdate === null) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
    //        isValid = false;
    //    }
    //}
    //if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
    //    var ddlaction = $("#ddlCloseClientStatus option:selected").index();
    //    if (ddlaction === 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
    //        isValid = false;
    //    }

    //}
    if (status != 'Select') {
        if (status === 'Approve' || status === 'Reject') {
            if (closingdate === "" || closingdate === null) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
                isValid = false;
            }
        }
    }
    else {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClsoeClientInfoMsg").text("");
        $("#divClsoeClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClsoeClientInfoMsg").addClass("alert-danger");
        $("#divClsoeClientInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClsoeClientInfoMsg").text("");
        var sendNotificationDetails = {};
        $("#divClsoeClientInfoMsg").addClass("hidden");
        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                CloseAction: Accessname,
                Client_Code: ClientCode,
                CloseRemarks: $("#txtclientCloseNote").val(),
                ClosingDate: $("#txtclientClosingAson").val(),
                CloseStatus: $("#ddlCloseClientStatus option:selected").val()
            };
        }
        else {
            sendNotificationDetails = {
                CloseAction: Accessname,
                Client_Code: ClientCode,
                CloseRemarks: $("#txtclientCloseNote").val(),
                ClosingDate: $("#txtclientClosingAson").val(),
                CloseStatus: ''
            };

        }

        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/CloseClientNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divClsoeClientInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divClsoeClientInfoMsg").text('Closing Client Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseClientStatus option:selected").val();
                        if (type === 'Reject')
                            $("#divClsoeClientInfoMsg").text('Closing Client  Rejected Successfully');
                        else
                            $("#divClsoeClientInfoMsg").text('Closing Client  Approved Successfully');
                    }
                    $("#divClsoeClientInfoMsg").removeClass("hidden alert-danger");
                    $("#divClsoeClientInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divClsoeClientInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divClsoeClientInfoMsg").addClass("alert-danger");
                    $("#divClsoeClientInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divClsoeClientInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divClsoeClientInfoMsg").addClass("alert-danger");
                $("#divClsoeClientInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
function NotifySubClientPendings(SubClientCode, Accessname) {
    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtsclientCloseNote").val();
    var closingdate = $("#txtsclientClosingAson").val();
    var status = $("#ddlCloseSubClientStatus").val();
    //var ddlaction = $("#ddlCloseClientStatus option:selected").index();
    //if (status === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

    //    if (closingdate === "" || closingdate === null) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
    //        isValid = false;
    //    }
    //}
    //if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
    //    var ddlaction = $("#ddlCloseClientStatus option:selected").index();
    //    if (ddlaction === 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
    //        isValid = false;
    //    }

    //}
    if (status != 'Select') {
        if (status === 'Approve' || status === 'Reject') {
            if (closingdate === "" || closingdate === null) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
                isValid = false;
            }
        }
    }
    else {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSClsoeClientInfoMsg").text("");
        $("#divSClsoeClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divSClsoeClientInfoMsg").addClass("alert-danger");
        $("#divSClsoeClientInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divSClsoeClientInfoMsg").text("");
        var sendNotificationDetails = {};
        $("#divSClsoeClientInfoMsg").addClass("hidden");
        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                CloseAction: Accessname,
                SubClientCode: SubClientCode,
                CloseRemarks: $("#txtsclientCloseNote").val(),
                ClosingDate: $("#txtsclientClosingAson").val(),
                CloseStatus: $("#ddlCloseSubClientStatus option:selected").val()
            };
        }
        else {
            sendNotificationDetails = {
                CloseAction: Accessname,
                SubClientCode: SubClientCode,
                CloseRemarks: $("#txtsclientCloseNote").val(),
                ClosingDate: $("#txtsclientClosingAson").val(),
                CloseStatus: ''
            };

        }

        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/CloseSubClientNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divSClsoeClientInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divSClsoeClientInfoMsg").text('Closing Sub Client Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseSubClientStatus option:selected").val();
                        if (type === 'Reject')
                            $("#divSClsoeClientInfoMsg").text('Closing SubClient  Rejected Successfully');
                        else
                            $("#divClsoeClientInfoMsg").text('Closing SubClient  Approved Successfully');
                    }
                    $("#divSClsoeClientInfoMsg").removeClass("hidden alert-danger");
                    $("#divSClsoeClientInfoMsg").addClass("alert-success");

                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divSClsoeClientInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divSClsoeClientInfoMsg").addClass("alert-danger");
                    $("#divSClsoeClientInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divSClsoeClientInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divSClsoeClientInfoMsg").addClass("alert-danger");
                $("#divSClsoeClientInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
/*Client Invoice Creation Functions*/
function GSTApplicableChange() {
    var gsttype = $("#ddlGSTApplicable option:selected").text();
    var gsttypeindex = $("#ddlGSTApplicable option:selected").index();
    if (gsttypeindex !== 0) {
        if (gsttypeindex == 1) {
            $("#diviscreditable").removeClass('hidden');
            $("#divSPInvTaxGrid").removeClass("hidden");
        }
        else {
            $("#diviscreditable").addClass('hidden');
            $("#divSPInvTaxGrid").addClass("hidden");
            clearforGST();
        }
    }
    else {
        $("#diviscreditable").addClass('hidden');
        $("#divSPInvTaxGrid").addClass("hidden");
        clearforGST();
    }
}
function TCSApplicableChange() {
    var tcstype = $("#ddlTCSApplicable option:selected").text();
    var tcstypeindex = $("#ddlTCSApplicable option:selected").index();
    if (tcstypeindex !== 0) {
        if (tcstypeindex == 1) {

            $.ajax({
                type: "POST",
                url: "/Accounts/GetTCSDCASDCAS",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    $("#divistcsapplicable").removeClass('hidden');
                    $.each(response, function () {
                        $("#txttcsdca").val(this['TCSDCA']);
                        $("#txttcssdca").val(this['TCSSDCA']);
                    });
                },
                failure: function (response) {
                    alert(response.responseText);
                },
                error: function (response) {
                    alert(response.responseText);
                }
            });
        }
        else {
            $("#divistcsapplicable").addClass('hidden');
            clearforTCS();
        }
    }
    else {
        $("#divistcsapplicable").addClass('hidden');
        clearforTCS();
    }
}

function ClientInvTypeChange() {
    var invtype = $("#InsTypeddl option:selected").text();
    // alert(invtype);
    var invtypeindex = $("#InsTypeddl option:selected").index();
    if (invtypeindex !== 0) {
        $.ajax({
            type: "POST",
            //url: "/Accounts/GetCostCenterbyInvType",
            //data: '{InvType:"' + invtype + '"}',
            url: "/Accounts/GetCostCenterbySubType",
            data: '{SubType:"' + invtype + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var CostCenterddl = $("#CCCodeddl");
                CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    CostCenterddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });

                $("#divClientInvCreation").removeClass('hidden');
                $("#divistcaapplicable").removeClass("hidden");
                //$("#divCCSubType").hide();
                //$("#divCCRemarks").removeClass('hidden');
                //$("#divCCCostCenter").show();
                //$("#divCCYear").show();
                //$("#divCCAmount").show();
                //$("#btnCCSubmit").show();
                //$("#btnAssignCCReset").show();
                //$("#divCCInfoMsg").text("");
                //$("#divCCInfoMsg").addClass("hidden");
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });


    }
    else {
        var CostCenterddl = $("#CCCodeddl");
        CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divClientInvCreation").addClass('hidden');
        clearforGST();
    }

}
function ClientInvCCChange() {
    var invtype = $("#InsTypeddl option:selected").text();
    var CC = $("#CCCodeddl option:selected").val();
    var CCindex = $("#CCCodeddl option:selected").index();
    if (CCindex != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetClientbyCostCenter",
            data: '{InvType:"' + invtype + '",CcCode:"' + CC + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var Clientddl = $("#ClientIDddl");
                Clientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    Clientddl.append($("<option></option>").val(this['ClientCode']).html(this['ClientName']));
                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });


    }
    else {
        var Clientddl = $("#ClientIDddl");
        Clientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        clearforGST();
    }
}

function ClientInvClientChange() {
    var invtype = $("#InsTypeddl option:selected").text();
    var CC = $("#CCCodeddl option:selected").val();
    var Client = $("#ClientIDddl option:selected").val();

    var Clientindex = $("#ClientIDddl option:selected").index();
    if (Clientindex != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetSubClientsbyClient",
            data: '{InvType:"' + invtype + '",CcCode:"' + CC + '",Clientcode:"' + Client + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var SubClientddl = $("#SubClientIDddl");
                SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    SubClientddl.append($("<option></option>").val(this['SubClientId']).html(this['SubClientCode']));
                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else {
        var SubClientddl = $("#SubClientIDddl");
        SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    }
    clearforGST();
}

function ClientInvSubClientChange() {
    //debugger;
    var invtype = $("#InsTypeddl option:selected").text();
    var CC = $("#CCCodeddl option:selected").val();
    var Client = $("#ClientIDddl option:selected").val();
    var SubClient = $("#SubClientIDddl option:selected").text();
    var SubClientindex = $("#SubClientIDddl option:selected").index();
    clearforGST();
    if (SubClientindex != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetSubClientPOForInvoice",
            data: '{SubClient:"' + SubClient + '",CcCode:"' + CC + '",Clientcode:"' + Client + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var SubClientddl = $("#PONumberddl");
                SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    SubClientddl.append($("<option></option>").val(this['ClientPOId']).html(this['PONumber']));
                });
                GetclientGST(SubClient, 'SubClient');
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else {
        var SubClientddl = $("#PONumberddl");
        SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    }

}

function GetclientGST(sunbclient, type) {
    //alert(sunbclient);
    $.ajax({
        type: "POST",
        url: "/Purchase/GetVendorClientGSTNos",
        data: '{Taxtype:"' + type + '",Taxfor:"' + sunbclient + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddlgst = $("#ddlPOclientGST");
            ddlgst.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddlgst.append($("<option></option>").val(this['TaxNoID']).html(this['TaxNoName']));
            });

        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });
}
function ClientTaxTypeChange(txt) {

    var selecteddcalist = [];
    var Action = $("#txtAction").val();
    $("#ClientTaxTable tbody tr").each(function () {
        var currentRow = $(this);
        var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        //var taxdca = currentRow.find("td").eq(3).find("select option:selected").val();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").val();
        if (taxdca !== 0 && taxsdca !== 0) {
            selecteddcalist.push(taxdca + "," + taxsdca);
        }
        //if (taxdca !== 0) {
        //    selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
        //    selecteddcalist.push(taxdca + "," + taxsdca);
        //}
    });

    var currentRow = $(txt).closest("tr");
    var taxtypeindex = currentRow.find("td").eq(1).find("select option:selected").index();
    //alert(taxtypeindex);
    var taxtype = currentRow.find("td").eq(1).find("select option:selected").val();
    //alert(taxtype);
    if (taxtypeindex != 0) {
        var date = $("#txtInvoiceDate").val();
        var CC = "";
        if (Action === 'Insert') {
            CC = $("#CCCodeddl option:selected").val();
        }
        else {
            CC = $("#UpCCCode").val();
        }
        if ($("#CCCodeddl option:selected").index() == 0) {
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").append("<div>Select Cost Center</div>");
            $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");


        }
        else {
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").addClass("hidden");

            //alert(CC);
            var idate = date.toString().split(' ');
            var idate1 = idate.toString().split(' ');
            var edate = "'" + idate1 + "'";
            var edate1 = moment(edate, "DD-MMM-YYYY").format('MM-DD-YYYY');

            $.ajax({
                type: "POST",
                url: "/Accounts/GetInvTaxDCA1",
                //data: '{}',
                data: "{CcCode:'" + CC + "' ,TaxType: '" + taxtype + "',invdate: '" + edate1 + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var taxdcaddl = currentRow.find("td").eq(2).find("select");
                    taxdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(data, function () {
                        //var status = checkValueInArray(this['DCACode'], selecteddcalist);                     
                        //if (status === false) {

                        taxdcaddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                        //}
                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }

    }
    //}
    //}

}

function ClientTaxDCAChange(txt) {
    var currentRow = $(txt).closest("tr");
    //var currentRow = $(this).closest("tr");
    var taxtype = currentRow.find("td").eq(1).find("select option:selected").val();
    var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
    var taxdcaindex = currentRow.find("td").eq(2).find("select option:selected").index();
    if (taxdcaindex != 0) {
        if ($("#CCCodeddl option:selected").index() == 0) {
            $("#divInvoiceCreationInfoMsg").append("<div>Select Cost Center</div>");
            $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
        }
        else {
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").addClass("hidden");
            // alert(taxdca);
            $.ajax({
                type: "POST",
                url: "/Accounts/GetSubDCAbyDCA",
                data: "{DCACode:'" + taxdca + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var taxsdcaddl = currentRow.find("td").eq(3).find("select");
                    taxsdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(data, function () {
                        taxsdcaddl.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
    }
}

function ClientTaxSubDCAChange(txt) {
    var currentRow = $(txt).closest("tr");
    // var currentRow = $(this).closest("tr");
    var taxtype = currentRow.find("td").eq(1).find("select option:selected").val();
    var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
    var taxsdca = currentRow.find("td").eq(3).find("select option:selected").val();
    var taxsdcaindex = currentRow.find("td").eq(3).find("select option:selected").index();
    if (taxsdcaindex != 0) {
        if ($("#CCCodeddl option:selected").index() == 0) {
            $("#divInvoiceCreationInfoMsg").append("<div>Select Cost Center</div>");
            $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
        }
        else {
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").addClass("hidden");
            //alert(taxsdca);
            $.ajax({
                type: "POST",
                url: "/Accounts/GetClientInvTaxNos",
                data: "{DCACode:'" + taxdca + "',Taxtype:'" + taxtype + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var taxsdcaddl = currentRow.find("td").eq(4).find("select");
                    taxsdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(data, function () {
                        taxsdcaddl.append($("<option></option>").val(this['TaxNoID']).html(this['TaxNoName']));
                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
    }

}
function CountInvoiceTotal() {  
    var Basic = $("#txtBasicValue").val();
    var subtotal = 0;
    var rowtotal = 0;

    //$("#ClientTaxTable tbody tr").each(function () { 
    //    var currentRow = $(this);
    //    rowtotal = currentRow.find("td").eq(5).find("input[type='text']").val();
    //    if (rowtotal != "") {
    //        subtotal = parseFloat(subtotal) + parseFloat(rowtotal);
    //    }
    //    //else { subtotal = 0;}
    //});
    //$("#ClientTaxTable tfoot tr").each(function () {      
    //    var footerRow = $(this);
    //    foottotal = footerRow.find("td").eq(5).find("input[type='text']").val();
    //    if (!isNaN(subtotal)) {
    //        footerRow.find("td").eq(4).html("<b>" + subtotal + "</b>");
    //    }
    //    else {
    //        footerRow.find("td").eq(4).html("");
    //    }
    //});  
   
    var tcstypeindex = $("#ddlTCSApplicable option:selected").index();
    var statecheck = $("#gststatecheck").val();
    var gsttotal = 0;

    if (statecheck === "true") {
        let cgst = $("#txtTaxCGSTSDCAamt").val();
        let sgst = $("#txtTaxSGSTSDCAamt").val();
        if (cgst === "") { cgst = 0; }
        if (sgst === "") { sgst = 0; }
        gsttotal = parseFloat(cgst) + parseFloat(sgst);
        if (!isNaN(gsttotal)) {
            $("#txtTaxTotalGSTSDCAamt").val(gsttotal);
            subtotal = parseFloat(subtotal) + parseFloat(gsttotal);
        }
        //if (!isNaN(Taxsubtotal)) {
        //    Plus = parseFloat(Plus) + parseFloat(Taxsubtotal);
        //}
    }
    else if (statecheck === "false") {

        let igst = $("#txtTaxIGSTSDCAamt").val();
        if (igst === "") { igst = 0; }
        gsttotal = parseFloat(igst);

        if (!isNaN(gsttotal)) {
            $("#txtTaxTotalGSTSDCAamt1").val(gsttotal);
            subtotal = parseFloat(subtotal) + parseFloat(gsttotal);
        }
        //if (!isNaN(Taxsubtotal)) {
        //    Plus = parseFloat(Plus) + parseFloat(Taxsubtotal);
        //}


    }
   if (tcstypeindex == 1) {
        let tcsvalue = $("#txttcsamount").val();
        if (tcsvalue === "") { tcsvalue = 0; }
        subtotal = parseFloat(subtotal) + parseFloat(tcsvalue);
    }
   if (tcstypeindex != 1) {
        subtotal = parseFloat(subtotal) + parseFloat(0);
    }

    var total = 0;
    if (Basic !== "") {
        total = parseFloat(subtotal) + parseFloat(Basic);
    }
    if (subtotal !== 0) {
        total = parseFloat(subtotal) + parseFloat(Basic);

    }
    if (!isNaN(total)) {
        $("#txtInvoiceValue").val(total.toFixed(2));
    }
    else {
        $("#txtInvoiceValue").val("");
    }

}

function SubmitClientInvoiceCreation() {
    debugger;
    var InsCategory = $("#InsCategoryddl").val();
    var insCategoryIndex = $("#InsCategoryddl option:selected").index();
    var InsType = $("#InsTypeddl option:selected").index();
    var cccode = $("#CCCodeddl option:selected").index();
    var clientid = $("#ClientIDddl option:selected").index();
    var subclientid = $("#SubClientIDddl option:selected").index();
    var PO = $("#PONumberddl").val();
    var InvoiceNo = $("#txtInvoiceNo").val();
    var RANo = $("#txtRANo").val();
    var InsDate = $("#txtInvoiceDate").val();
    var MakingDate = $("#txtInsMakingDate").val();
    var BasicValue = $("#txtBasicValue").val();
    var Remarks = $("#txtDescription").val();
    var gstno = $("#ddlPOCompanyGST option:selected").index();
    var clientgstno = $("#ddlPOclientGST option:selected").index();
    var tcstype = $("#ddlTCSApplicable option:selected").text();
    var tcstypeindex = $("#ddlTCSApplicable option:selected").index();

    var gsttype = $("#ddlGSTApplicable option:selected").text();
    var gsttypeindex = $("#ddlGSTApplicable option:selected").index();

    isValid = true;
    var errorMsg = "";
    var ddlcount = 0;
    var amountcount = 0;

    if (insCategoryIndex == 0 | insCategoryIndex == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Category</p>";
        isValid = false;
    }
    if (insCategoryIndex == 1) {
        if (InsType == 0 || InsType == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Type</p>";
            isValid = false;
        }
    }

    if (cccode == 0 || cccode == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
        isValid = false;
    }
    if (clientid == 0 || clientid == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Client Name</p>";
        isValid = false;
    }
    if (subclientid == 0 || subclientid == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Client Name</p>";
        isValid = false;
    }
    if (PO == 0 || PO == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Purchase Order Number</p>";
        isValid = false;
    }
    if (InvoiceNo == 0 || InvoiceNo == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Number</p>";
        isValid = false;
    }
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
    if (BasicValue == "0.00" || BasicValue == "" || BasicValue == "0.0" || BasicValue == "0" || BasicValue <= 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Basic Value</p>";
        isValid = false;
    }
    if (Remarks == "" || Remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Remarks</p>";
        isValid = false;
    }
    if (gsttypeindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Is GST Applicable</p>";
        isValid = false;
    }
    if (gsttypeindex != 0) {
        if (gsttypeindex == 1) {
            if ($("#rGSTTypeY").is(':checked') === false && $("#rGSTTypeN").is(':checked') === false) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select GST Tax Type</p>";
                isValid = false;
            }
            if (clientgstno === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Client GST</p>";
                isValid = false;
            }
            if (gstno === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select  Company GST</p>";
                isValid = false;
            }
        }
    }
    if (tcstypeindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Is TCS Applicable</p>";
        isValid = false;
    }
    if (tcstypeindex == 1) {
        var tcsdca = $("#txttcsdca").val();
        var tcssdca = $("#txttcssdca").val();
        var tcsamount = $("#txttcsamount").val();
        if (tcsdca == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Invalid TCS Accounthead</p>";
            isValid = false;
        }
        if (tcssdca == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Invalid TCS Sub-Accounthead</p>";
            isValid = false;
        }
        if (tcsamount == "0.00" || tcsamount == "" || tcsamount == "0.0" || tcsamount == "0" || tcsamount <= 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Invalid TCS Amount</p>";
            isValid = false;
        }
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
        debugger;
        $("#divInvoiceCreationInfoMsg").text("");
        $("#divInvoiceCreationInfoMsg").addClass("hidden");
        if (gsttypeindex == 1) {
            var statecheck = $("#gststatecheck").val();
            if (statecheck != "") {
                if (statecheck === "true") {
                    var cgstamtcount = $("#txtTaxCGSTSDCAamt").val();
                    var sgstamtcount = $("#txtTaxSGSTSDCAamt").val();
                    if (cgstamtcount === "" || cgstamtcount === "0" || cgstamtcount === 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Enter CGST Amount</p>";
                        isValid = false;
                    }
                    if (sgstamtcount === "" || sgstamtcount === "0" || sgstamtcount === 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Enter SGST Amount</p>";
                        isValid = false;
                    }
                }
                else if (statecheck === "false") {
                    let igstamt = $("#txtTaxIGSTSDCAamt").val();
                    if (igstamt === "" || igstamt === "0" || igstamt === 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Enter IGST Amount</p>";
                        isValid = false;
                    }
                }
            }
            else {
                errorMsg += "<p style='margin-top:-5px!important;'>Click on Add Taxes</p>";
                isValid = false;
            }
        }

        //var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;

        //$("#ClientTaxTable tbody tr").each(function () {
        //    var currentRow = $(this);
        //    var taxtype = currentRow.find("td").eq(1).find("select option:selected").index();
        //    var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        //    var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();
        //    var taxname = currentRow.find("td").eq(4).find("select option:selected").index();
        //    var taxamount = currentRow.find("td").eq(5).find("input[type='text']").val(); 
        //    var check = currentRow.find("td").eq(6).find('input[type="checkbox"]').is(':checked');
        //    if (taxtype != 0 || taxdca != 0 || taxsdca != 0 || taxname!=0|| taxamount != "" || check==true) {
        //        $("#taxExist").val("1");
        //        if (taxtype == 0) { typecount = typecount + 1; }
        //        if (taxdca == 0) { dcacount = dcacount + 1; }
        //        if (taxsdca == 0) { sdcacount = sdcacount + 1;}
        //        if (taxname == 0) { taxcount = taxcount + 1;}
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
        if (!isValid) {
            var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").append(finalerror1 + errorMsg + "</div>");
            $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {

            //var duplicatedcacount = 0;
            //var selecteddcalist = [];
            //$("#ClientTaxTable tbody tr").each(function () {
            //    var currentRow = $(this);
            //    var taxcdca1 = currentRow.find("td").eq(2).find("select option:selected").val();
            //    var taxsdca1 = currentRow.find("td").eq(3).find("select option:selected").val();
            //    selecteddcalist.push(taxcdca1 + "," + taxsdca1);

            //    //var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
            //    //if (taxdca !== 0) {
            //    //    selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
            //    //    //alert(currentRow.find("td").eq(2).find("select option:selected").val());
            //    //} 
            //});          
            //var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
            //if (duplicatelist.length > 0) {
            //    var finalerror2 = "<div style='align:center'><p>Duplicate Sub Accounts Heads for Tax</p>";
            //    $("#divInvoiceCreationInfoMsg").text("");
            //    $("#divInvoiceCreationInfoMsg").append(finalerror2+ "</div>");
            //    $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            //    $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
            //    return false;
            //}          
            //else {
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").addClass("hidden");           
            SaveClientInvoice();
            //}
        }
    }

}


function SaveClientInvoice() {

    var createdby = $("#txtCreatedby").val();
    // var taxtypes = "", taxdcas = "", taxsdcas = "", taxnames = "", taxAmounts = "";
    //var count = $("#ClientTaxTable tbody tr").length;
    //var taxexist = $("#taxExist").val();
    //if (taxexist=="1") {
    //    $("#ClientTaxTable tbody tr").each(function () {
    //        var currentRow = $(this);
    //        var rowno = currentRow.find("td").eq(0).html();
    //        var taxtypeval = currentRow.find("td").eq(1).find("select option:selected").text();
    //        var taxdcaval = currentRow.find("td").eq(2).find("select option:selected").val();
    //        var taxsdcaval = currentRow.find("td").eq(3).find("select option:selected").val();
    //        var taxnameval = currentRow.find("td").eq(4).find("select option:selected").val();
    //        var taxamountval = currentRow.find("td").eq(5).find("input[type='text']").val();
    //            taxtypes += taxtypeval;
    //            taxtypes += ",";
    //            taxdcas += taxdcaval;
    //            taxdcas += ",";
    //            taxsdcas += taxsdcaval;
    //            taxsdcas += ",";
    //            taxnames += taxnameval;
    //            taxnames += ",";
    //            taxAmounts += taxamountval;
    //            taxAmounts += ",";
    //    });
    //}
    var TaxTypes = "", Taxdcas = "", Taxcgstsdcas = "", TaxcgstsdcasAmt = 0, Taxsgstsdcas = "", TaxsgstsdcasAmt = 0, Taxigstsdcas = "";
    var TaxigstsdcasAmt = 0, TaxAmounts = 0;
    if ($("#rGSTTypeY").is(':checked') === true) {
        TaxTypes = "Creditable";
    }
    else { TaxTypes = "Non-Creditable"; }
    var statecheck = $("#gststatecheck").val();

    if (statecheck === "true") {
        TaxAmounts = parseFloat($("#txtTaxCGSTSDCAamt").val()) + parseFloat($("#txtTaxSGSTSDCAamt").val());
        Taxdcas = $.trim($("#txtTaxDCA1").val());
        Taxcgstsdcas = $.trim($("#txtTaxCGSTSDCA").val());
        TaxcgstsdcasAmt = parseFloat($("#txtTaxCGSTSDCAamt").val());
        Taxsgstsdcas = $.trim($("#txtTaxSGSTSDCA").val());
        TaxsgstsdcasAmt = parseFloat($("#txtTaxSGSTSDCAamt").val());
    }
    else if (statecheck === "false") {

        TaxAmounts = parseFloat($("#txtTaxIGSTSDCAamt").val());
        Taxdcas = $.trim($("#txtTaxDCA2").val());
        Taxigstsdcas = $.trim($("#txtTaxIGSTSDCA").val());
        TaxigstsdcasAmt = parseFloat($("#txtTaxIGSTSDCAamt").val());

    }

    var clientInv = {
        PONumber: $("#PONumberddl option:selected").text(),
        RANO: $("#txtRANo").val(),
        CCCode: $("#CCCodeddl option:selected").val(),
        ClientInvoiceNo: $("#txtInvoiceNo").val(),
        InvoiceDate: $("#txtInvoiceDate").val(),
        InvoiceMakingDate: $("#txtInsMakingDate").val(),
        BasicValue: $("#txtBasicValue").val(),
        Total: $("#txtInvoiceValue").val(),
        InvoiceRemarks: $("#txtDescription").val(),
        InvoiceType: $("#InsTypeddl option:selected").text(),
        Clientcode: $("#ClientIDddl option:selected").val(),
        SubClientcode: $("#SubClientIDddl option:selected").text(),
        InvoiceSubType: $("#InsCategoryddl option:selected").text(),
        CreatedBy: createdby,
        Taxtypes: TaxTypes,
        Taxdcas: Taxdcas,
        Taxamounts: TaxAmounts,
        ClientGST: $("#ddlPOclientGST option:selected").text(),
        CompanyGST: $("#ddlPOCompanyGST option:selected").text(),
        Cgstsdca: Taxcgstsdcas,
        Cgstsdcaamt: TaxcgstsdcasAmt,
        Sgstsdca: Taxsgstsdcas,
        Sgstsdcaamt: TaxsgstsdcasAmt,
        Igstsdca: Taxigstsdcas,
        Igstsdcaamt: TaxigstsdcasAmt,
        Statecheck: statecheck,
        TaxId: $("#ddlPOCompanyGST option:selected").val(),
        IsGstApplicable: $("#ddlGSTApplicable option:selected").val(),
        IsTCSApplicable: $("#ddlTCSApplicable option:selected").val(),
        TCSDCA: $("#txttcsdca").val(),
        TCSSDCA: $("#txttcssdca").val(),
        TCSAmount: $("#txttcsamount").val()
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
function ClientInv_BindNewRowtoGrid() {
    //  var selecteddcalist = [];
    isValid = true;
    var errorMsg = "";
    var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#ClientTaxTable tbody tr").each(function () {
        var currentRow = $(this);
        var taxtype = currentRow.find("td").eq(1).find("select option:selected").index();
        var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();
        var taxname = currentRow.find("td").eq(4).find("select option:selected").index();
        var taxamount = currentRow.find("td").eq(5).find("input[type='text']").val();
        var check = currentRow.find("td").eq(6).find('input[type="checkbox"]').is(':checked');

        $("#taxExist").val("1");
        if (taxtype === 0) { typecount = typecount + 1; }
        if (taxdca === 0) { dcacount = dcacount + 1; }

        if (taxsdca === 0) { sdcacount = sdcacount + 1; }
        if (taxname === 0) { taxcount = taxcount + 1; }
        if (taxamount === "") { taxvaluecount = taxvaluecount + 1; }
        if (check === false) { taxchkcount = taxchkcount + 1; }

    });

    if (typecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select IsCreditable</p>";
        isValid = false;
    }
    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter DCA</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select SubDCA</p>";
        isValid = false;
    }
    if (taxcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Tax Name</p>";
        isValid = false;
    }
    if (taxvaluecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Amount</p>";
        isValid = false;
    }
    if (taxchkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Taxes </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divInvoiceCreationInfoMsg").text("");
        $("#divInvoiceCreationInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
        $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {

        var selecteddcalist = [];
        $("#ClientTaxTable tbody tr").each(function () {
            var currentRow = $(this);
            var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
            if (taxdca !== 0) {
                selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
            }
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Tax</p>";
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").append(finalerror2 + "</div>");
            $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").addClass("hidden");
            var count = $("#ClientTaxTable tbody tr").length;
            var rowno = count + 1;
            var newRow = $("<tr>");
            var cols = "";
            cols += '<td style="text-align:center"  class="hidden">' + rowno + '</td>';
            cols += '<td style="text-align:center"><select class="form-control dropdown-toggle ctaxtype" id="ddlCTaxType"  onchange="ClientTaxTypeChange(this)">';
            cols += '<option selected="selected" value="Select">-Select-</option>';
            cols += '<option value="Creditable">Creditable</option>';
            cols += '<option value="Non-Creditable">Non-Creditable</option></select></td>';
            cols += '<td style="text-align:center"><select class="form-control dropdown-toggle ctaxdca" id="ddlCTaxDCA" onchange="ClientTaxDCAChange(this)">';
            cols += '<option selected="selected" value="Select" >-Select-</option></select></td>';
            cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle ctaxsdca" id= ddlCTaxSubDCA"  onchange="ClientTaxSubDCAChange(this)">';
            cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
            cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle ctaxname" id="ddlCTaxName">';
            cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
            cols += '<td style="text-align:center"><input type="text" class="form-control ctaxamount" value="" id="txtclienttaxAmount"  onkeypress = "return ValidateAmount(this,event);" onkeyup="CountInvoiceTotal()"/></td>';
            cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
            cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkClientTax">';
            cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
            cols += '<td style="text-align:center"><input type="button" class="ibtnclientTaxdelect btn btn-md btn-danger" value="Delete"></td>';
            newRow.append(cols);
            $("table.order-list.clienttax").append(newRow);
        }
    }

}
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
function ResetClientInvoiceCreation() {
    location.reload();

}

/*Scripts for Client Recievables */
function BindInvoiceType() {
    var category = $("#ddl_ClRecCategoryddl option:selected").val();
    var categorytext = $("#ddl_ClRecCategoryddl option:selected").text();
    var ddlInvType = $("#ddlClRecInvoiceType");
    var ddlCc = $("#ddlClCccode");
    var ddlPO = $("#ddlClPo");
    var ddlInvNo = $("#ddlInvNo");
    var index = $("#ddl_ClRecCategoryddl option:selected").index();

    if (index == 0) {
        ddlInvType.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlCc.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divCRec_InsType").addClass("hidden");
        $("#divCCCodehr").addClass("hidden");
        $("#divCcPoInv").addClass("hidden");
        $("#divDetialshr").addClass("hidden");
        $("#divDetials").addClass("hidden");
        $("#divClientRecTaxGrid").addClass('hidden');
        $("#btnhideTaxGrid").addClass('hidden');
        $("#btnRemoveDeduction").addClass('hidden');
        $("#divDeduction").addClass('hidden');
        $("#btnClientRecSubmit").addClass('hidden');
        $("#btnClientRecReset").addClass('hidden');
        ClientRec_ClearAmounts();
        ClientRecRemoveDeduction();
    }
    else if (categorytext == "Invoice Service") {
        $("#ddl_ClRecCategoryddl").prop('disabled', true);
        //bind invoice type
        $("#divCRec_InsType").removeClass("hidden");
        ddlCc.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ClientPayment").addClass("hidden");
        $("#divCCCodehr").addClass("hidden");
        $("#divCcPoInv").addClass("hidden");
        $("#divDetialshr").addClass("hidden");
        $("#divDetials").addClass("hidden");
        $("#divClientRecTaxGrid").addClass('hidden');
        $("#btnhideTaxGrid").addClass('hidden');
        $("#btnRemoveDeduction").addClass('hidden');
        $("#divDeduction").addClass('hidden');
        $("#btnClientRecSubmit").addClass('hidden');
        $("#btnClientRecReset").addClass('hidden');
        ClientRec_ClearAmounts();
        ClientRecRemoveDeduction();

        $("#divClietRecPayment").removeClass("hidden");
        $("#divRetentionPayment").addClass("hidden");
        $("#divAdvancePayment").addClass("hidden");
        $("#divHoldPayment").addClass("hidden");

        $("#chkDedY").prop("checked", false);
        $("#chkDedN").prop("checked", true);
        clearforDeduction();
    }
    else if (categorytext == "Retention") {
        $("#ddl_ClRecCategoryddl").prop('disabled', true);
        $("#divClietRecPayment").addClass("hidden");
        $("#divHoldPayment").addClass("hidden");
        $("#divRetentionPayment").removeClass("hidden");
        $("#divAdvancePayment").addClass("hidden");
        $("#divCRec_InsType").addClass("hidden");
        $("#divRetPaySubclient").addClass("hidden");
        $("#divRetPayCC").addClass("hidden");
        $("#divRetPayPO").addClass("hidden");
        $("#divRetpayIncDetails").addClass("hidden");
        $("#divRetPaymentsection").addClass("hidden");

        $("#ddlRetPayClient").prop('selectedIndex', 0);
        $("#ddlRetPaysubClient").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ddlRetPayCC").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ddlRetPayPO").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#RetPayInvTable tbody").find("tr").remove();
        $("#ddlRetPayBank").prop('selectedIndex', 0);
        $("#ddlRetPaymode").prop('selectedIndex', 0);
        $("#ddltxtRetPayNo").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtRetPayNo").removeClass("hidden");
        $("#txtRetPayNo").val("");
        $("#ddltxtRetPayNo").addClass("hidden");
        $("#txtRetPayDate").datepicker("setDate", 'dateToday');
        $("#txtRetPayRemarks").val("");
        $("#txtRetPayAmount").val("");
        $("#txtrpaydate").val("");
        $("#txtinvtotal").val("");
        $("#divRetPayInfoMsg").text("");
        $("#divRetPayInfoMsg").addClass("hidden");
    }
    else if (categorytext == "Hold") {
        $("#ddl_ClRecCategoryddl").prop('disabled', true);
        $("#divClietRecPayment").addClass("hidden");
        $("#divRetentionPayment").addClass("hidden");
        $("#divHoldPayment").removeClass("hidden");
        $("#divCRec_InsType").addClass("hidden");
        $("#divAdvancePayment").addClass("hidden");

        $("#divHoldPaySubclient").addClass("hidden");
        $("#divHoldPayCC").addClass("hidden");
        $("#divHoldPayPO").addClass("hidden");
        $("#divHoldpayIncDetails").addClass("hidden");
        $("#divHoldPaymentsection").addClass("hidden");

        $("#ddlHoldPayClient").prop('selectedIndex', 0);
        $("#ddlHoldPaysubClient").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ddlHoldPayCC").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ddlHoldPayPO").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#HoldPayInvTable tbody").find("tr").remove();
        $("#ddlHoldPayBank").prop('selectedIndex', 0);
        $("#ddlHoldPaymode").prop('selectedIndex', 0);
        $("#txtHoldPayDate").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtHoldPayNo").removeClass("hidden");
        $("#txtHoldPayNo").val("");
        $("#ddlHoldPayNo").addClass("hidden");
        $("#txtHoldPayDate").datepicker("setDate", 'dateToday');
        $("#txtHoldPayRemarks").val("");
        $("#txtRetPayAmount").val("");
        $("#txtHoldpaydate").val("");
        $("#txtHoldinvtotal").val("");
        $("#divHoldPayInfoMsg").text("");
        $("#divHoldPayInfoMsg").addClass("hidden");
    }
    else if (categorytext == "Advance") {
        $("#ddl_ClRecCategoryddl").prop('disabled', true);
        $("#divClietRecPayment").addClass("hidden");
        $("#divRetentionPayment").addClass("hidden");
        $("#divHoldPayment").addClass("hidden");
        $("#divAdvancePayment").removeClass("hidden");
        $("#divCRec_InsType").addClass("hidden");
    }
}
function ClientRecddlClRecInvoiceTypeChange() {

    var category = $("#ddl_ClRecCategoryddl option:selected").val();
    var ddlSubType = $("#ddlClRecInvoiceType option:selected").text();
    var ddlCccode = $("#ddlClCccode");

    var ddlCc = $("#ddlClCccode");
    var ddlPO = $("#ddlClPo");
    var ddlInvNo = $("#ddlInvNo");
    $("#chkDedY").prop("checked", false);
    $("#chkDedN").prop("checked", true);
    clearforDeduction();
    if ($("#ddlClRecInvoiceType option:selected").index() == 0) {
        ddlCc.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ClientPayment").addClass("hidden");
        $("#divCCCodehr").addClass("hidden");
        $("#divCcPoInv").addClass("hidden");
        $("#divDetialshr").addClass("hidden");
        $("#divDetials").addClass("hidden");
        $("#divClientRecTaxGrid").addClass('hidden');
        $("#btnhideTaxGrid").addClass('hidden');
        $("#btnRemoveDeduction").addClass('hidden');
        $("#divDeduction").addClass('hidden');
        $("#btnClientRecSubmit").addClass('hidden');
        $("#btnClientRecReset").addClass('hidden');
        ClientRec_ClearAmounts();
        ClientRecRemoveDeduction();
    }
    else {

        $.ajax({
            type: "POST",
            url: "/Accounts/BindClientRec_Cccodes",
            data: '{SubType:"' + ddlSubType + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                ddlCccode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlCccode.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
                $("#ClientPayment").removeClass("hidden");
                $("#divCcPoInv").removeClass("hidden");
                $("#divCCCodehr").removeClass("hidden");
                $("#divPO").addClass("hidden");
                $("#divInvNo").addClass("hidden");
                ddlPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');

                $("#divDetialshr").addClass("hidden");
                $("#divDetials").addClass("hidden");
                $("#divClientRecTaxGrid").addClass('hidden');
                $("#btnhideTaxGrid").addClass('hidden');
                $("#btnRemoveDeduction").addClass('hidden');
                $("#divDeduction").addClass('hidden');
                $("#btnClientRecSubmit").addClass('hidden');
                $("#btnClientRecReset").addClass('hidden');
                ClientRec_ClearAmounts();
                ClientRecRemoveDeduction();

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function ClientRecddlCCChange() {
    var category = $("#ddl_ClRecCategoryddl option:selected").val();
    var ddlInvType = $("#ddlClRecInvoiceType option:selected").val();
    var ddlCccode = $("#ddlClCccode option:selected").val();
    var ddlPo = $("#ddlClPo");
    var ddlInvNo = $("#ddlInvNo");
    $("#chkDedY").prop("checked", false);
    $("#chkDedN").prop("checked", true);
    clearforDeduction();
    if ($("#ddlClCccode option:selected").index() == 0) {
        ddlPo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divPO").addClass("hidden");
        $("#divInvNo").addClass("hidden");
        $("#divDetialshr").addClass("hidden");
        $("#divDetials").addClass("hidden");
        $("#divClientRecTaxGrid").addClass('hidden');
        $("#btnhideTaxGrid").addClass('hidden');
        $("#btnRemoveDeduction").addClass('hidden');
        $("#divDeduction").addClass('hidden');
        $("#btnClientRecSubmit").addClass('hidden');
        $("#btnClientRecReset").addClass('hidden');
        ClientRec_ClearAmounts();
        ClientRecRemoveDeduction();
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindClientRec_PoNumbers",
            data: '{CC:"' + ddlCccode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                ddlPo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlPo.append($("<option></option>").val(this['ClientPOId']).html(this['PONumber']));
                });
                $("#divPO").removeClass("hidden");
                $("#divInvNo").addClass("hidden");
                ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $("#divDetialshr").addClass("hidden");
                $("#divDetials").addClass("hidden");
                $("#divClientRecTaxGrid").addClass('hidden');
                $("#btnhideTaxGrid").addClass('hidden');
                $("#btnRemoveDeduction").addClass('hidden');
                $("#divDeduction").addClass('hidden');
                $("#btnClientRecSubmit").addClass('hidden');
                $("#btnClientRecReset").addClass('hidden');
                ClientRec_ClearAmounts();
                ClientRecRemoveDeduction();


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function ClientRecddlClPoChange() {

    var category = $("#ddl_ClRecCategoryddl option:selected").text();
    var ddlInvType = $("#ddlClRecInvoiceType option:selected").text();
    var ddlCccode = $("#ddlClCccode option:selected").val();
    var ddlPo = $("#ddlClPo option:selected").text();
    var ddlInvNo = $("#ddlInvNo");
    $("#chkDedY").prop("checked", false);
    $("#chkDedN").prop("checked", true);
    clearforDeduction();

    if ($("#ddlClPo option:selected").index() == 0) {
        ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divInvNo").addClass("hidden");
        $("#divDetialshr").addClass("hidden");
        $("#divDetials").addClass("hidden");
        $("#divClientRecTaxGrid").addClass('hidden');
        $("#btnhideTaxGrid").addClass('hidden');
        $("#btnRemoveDeduction").addClass('hidden');
        $("#divDeduction").addClass('hidden');
        $("#btnClientRecSubmit").addClass('hidden');
        $("#btnClientRecReset").addClass('hidden');
        ClientRec_ClearAmounts();
        ClientRecRemoveDeduction();
    }
    else {
        //alert($("#ddlClPo option:selected").text());
        $.ajax({
            type: "POST",
            url: "/Accounts/BindClientRec_InvoiceNumbers",
            data: '{CC:"' + ddlCccode + '", PO:"' + ddlPo + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                ddlInvNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlInvNo.append($("<option></option>").val(this['ClientInvoiceId']).html(this['ClientInvoiceNo']));
                });
                $("#divInvNo").removeClass("hidden");
                $("#divDetialshr").addClass("hidden");
                $("#divDetials").addClass("hidden");
                $("#divClientRecTaxGrid").addClass('hidden');
                $("#btnhideTaxGrid").addClass('hidden');
                $("#btnRemoveDeduction").addClass('hidden');
                $("#divDeduction").addClass('hidden');
                $("#btnClientRecSubmit").addClass('hidden');
                $("#btnClientRecReset").addClass('hidden');
                ClientRec_ClearAmounts();
                ClientRecRemoveDeduction();


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function ClientRecddlInvNoChange() {
    $("#chkDedY").prop("checked", false);
    $("#chkDedN").prop("checked", true);
    clearforDeduction();
    var category = $("#ddl_ClRecCategoryddl option:selected").val();
    var ddlInvType = $("#ddlClRecInvoiceType option:selected").val();
    var ddlCccode = $("#ddlClCccode option:selected").val();
    var ddlPo = $("#ddlClPo  option:selected").val();
    var ddlInvNo = $("#ddlInvNo  option:selected").val();
    if ($("#ddlInvNo option:selected").index() == 0) {

        $("#divDetialshr").addClass("hidden");
        $("#divDetials").addClass("hidden");
        $("#divClientRecTaxGrid").addClass('hidden');
        $("#btnhideTaxGrid").addClass('hidden');
        $("#btnRemoveDeduction").addClass('hidden');
        $("#divDeduction").addClass('hidden');
        $("#btnClientRecSubmit").addClass('hidden');
        $("#btnClientRecReset").addClass('hidden');
        ClientRec_ClearAmounts();
        ClientRecRemoveDeduction();
    }
    else {

        $.ajax({
            type: "POST",
            url: "/Accounts/ClientRec_GetInvoiceDetials",
            data: '{invid:"' + ddlInvNo + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $.each(response, function () {
                    var client = this['Clientcode'];
                    var subclient = this['SubClientcode'];

                    var invdate = this['InvoiceDate'];
                    var invMdate = this['InvoiceMakingDate'];
                    var invdate1 = moment(invdate).format("DD-MMM-YYYY");
                    var invMdate1 = moment(invMdate).format("DD-MMM-YYYY");
                    $("#divDetialshr").removeClass("hidden");
                    $("#divDetials").removeClass("hidden");
                    $("#txtClientID").val(client);
                    $("#txtSubClientID").val(subclient);
                    $("#txtRANo").val(this['RANO']);
                    $("#txtPayInvoiceDate").val(invdate1);
                    $("#txtPayInsMakingDate").val(invMdate1);
                    $("#txtBasicValue").val(this['BasicValue'].toFixed(2));
                    $("#txtFinalAmount").val(this['Total'].toFixed(2));
                    $("#txtoldfinalamount").val(this['Total'].toFixed(2));
                    $("#btnClientRecSubmit").removeClass('hidden');
                    $("#btnClientRecReset").removeClass('hidden');
                    $("#divPayment").removeClass('hidden');
                    ClientRec_ClearAmounts();
                    ClientRecRemoveDeduction();
                    $("#divDeduction").removeClass('hidden');
                });
                $("#ClientRecTaxTable tbody tr").remove();
                $.ajax({
                    type: "POST",
                    url: "/Accounts/BindClientRec_GetTaxDetials",
                    data: '{invid:"' + ddlInvNo + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        $("#divClientRecTaxGrid").removeClass('hidden');
                        var subtotal = 0;
                        var rowtotal = 0;
                        $.each(response, function () {
                            var tavalue = parseFloat(this['TaxValue']).toFixed(2);
                            var newRow = $("<tr style='text-align:center;'>");
                            var cols = "";
                            cols += '<td class="taxname">' + this['TypesOfTaxName'] + '</td><td class="taxamount">' + this['CCCode'] + '</td>';
                            cols += '<td class="taxname">' + this['DCACode'] + '</td><td class="taxamount">' + this['SubDCACode'] + '</td>';
                            cols += '<td class="taxname">' + this['TaxNo'] + '</td><td class="taxamount">' + tavalue + '</td>';
                            newRow.append(cols);
                            $("table.order-list.tax").append(newRow);
                            rowtotal = tavalue;
                            subtotal = parseFloat(subtotal) + parseFloat(rowtotal);
                        });
                        // alert(subtotal);
                        //$("#ClientRecTaxTable tbody tr").each(function () {
                        //    var currentRow = $(this);

                        //});
                        $("#ClientRecTaxTable tfoot tr").each(function () {
                            var footerRow = $(this);
                            if (!isNaN(subtotal)) {
                                footerRow.find("td").eq(5).html("Total Tax Amount:<b>" + parseFloat(subtotal).toFixed(2) + "</b>");
                                $("#txtTaxExist").val(subtotal.toFixed(2));
                                var FinalAmount = parseFloat($("#txtBasicValue").val()) + parseFloat(subtotal);
                                $("#txtFinalAmount").val(parseFloat(FinalAmount).toFixed(2));
                                $("#txtTaxPlusBasic").val(parseFloat(FinalAmount).toFixed(2));
                            }
                            else {
                                $("#txtTaxExist").val(0);

                            }
                        });

                    },
                    failure: function (response) {

                    },
                    error: function (response) {

                    }
                });



            },
            complete: function () {


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }

}

function DeductionFromCcChange(txt) {
    var currentRow = $(txt).closest("tr");
}
function showClientRecTaxGrid() {
    $("#divClientRecTaxGrid").removeClass('hidden');
    $("#btnshowTaxGrid").addClass('hidden');
    $("#btnhideTaxGrid").removeClass('hidden');


}
function hideClientRecTaxGrid() {
    $("#divClientRecTaxGrid").addClass('hidden');
    $("#btnshowTaxGrid").removeClass('hidden');
    $("#btnhideTaxGrid").addClass('hidden');

}
function ClientRecAddDeduction() {

    $("#btnRemoveDeduction").removeClass('hidden');
    $("#btnAddDeduction").addClass('hidden');
    $("#divDeduction").removeClass('hidden');
    $("#txtShowingDeduction").val(true);
    $("#divClientRecInfoMsg").text("");
    $("#divClientRecInfoMsg").addClass("hidden");
}
function ClientRecRemoveDeduction() {
    //$("#btnRemoveDeduction").addClass('hidden');
    //$("#btnAddDeduction").removeClass('hidden');
    $("#divDeduction").addClass('hidden');
    $("#txtDeductionExist").val(0);
    $("#ClientRecDCAGrid tbody tr").remove();
    $("#divClientRecInfoMsg").text("");
    $("#divClientRecInfoMsg").addClass("hidden");

    ClearDeductionGrid();
    ClientRec_FinalAmount();
    $("#txtShowingDeduction").val(false);

}
function ClearDeductionGrid() {
    $("#ClientRecDCAGrid tfoot tr").each(function () {
        var footerRow = $(this);
        footerRow.find("td").eq(4).html("Total Deduction:");
        footerRow.find("td").eq(5).html(0);
        $("#txtDeductionExist").val(0);
    });
    //$("#ClientRecDCAGrid tbody tr").each(function () {
    //    var row = $(this);
    //    var ddlCC = row.find('.CC'); // get the other select in the same row
    //    var ddlDCA = row.find('.DCA');
    //    var ddlSubDCA = row.find('.SubDCA');
    //    var amount = row.find('.DcaAmount');
    //    ddlCC.empty().append('<option selected="selected" value="Select">-Select-</option>');
    //    ddlDCA.empty().append('<option selected="selected" value="Select">-Select-</option>');
    //    ddlSubDCA.empty().append('<option selected="selected" value="Select">-Select-</option>');
    //    amount.val("");
    //    row.find("td").eq(6).find("input[type='checkbox']").prop("checked", false);
    //    row.find("td").eq(1).find("select option").prop('selected', false).filter(function () {
    //        return $(this).text() == '-Select-';
    //    }).prop('selected', true);

    //});
}
function ClientRec_ClearAmounts() {
    $("#txtTaxPlusBasic").val(0);
    $("#txtFinalAmount").val(0);
    $("#txtAdvance").val(0);
    $("#txtRentention").val(0);
    $("#txtHold").val(0);
    $("#txtDeductionExist").val(0);
    $("#txtMinusAmount").val(0);
    $("#ClientRecDCAGrid tbody tr:not(:first)").remove();
    $("#btnhideTaxGrid").addClass('hidden');
    $("#btnRemoveDeduction").addClass('hidden');
    $("#btnshowTaxGrid").removeClass('hidden');
    $("#btnAddDeduction").removeClass('hidden');
    $("#divClientRecTaxGrid").addClass('hidden');
    $("#divDeduction").addClass('hidden');
    $("#divClientRecInfoMsg").text("");
    $("#divClientRecInfoMsg").addClass("hidden");
    $("#txtShowingDeduction").val(false);
}

function ClientRec_BindNewRowtoGrid() {
    var errorMsg = "";
    isValid = true;
    var DcaAmount = 0, OtherCcCount = 0, CCCodeCount = 0, SubDcaCount = 0, DcaAmountCount = 0, checkboxCount = 0;
    $("#ClientRecDCAGrid tbody tr").each(function () {
        var currentRow = $(this);
        var RowNo = currentRow.find("td").eq(0).html();
        var checkbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
        var OtherCC = currentRow.find("td").eq(1).find("select option:selected").index();
        var CCCode = currentRow.find("td").eq(2).find("select option:selected").index();
        var DCA = currentRow.find("td").eq(3).find("select option:selected").index();
        var SubDCA = currentRow.find("td").eq(4).find("select option:selected").index();
        var DcaAmount = currentRow.find("td").eq(6).find("input[type='text']").val();
        var checkboxCount = 0, OtherCcCount = 0, CCCodeCount = 0, DcaCount = 0, SubDcaCount = 0, DcaAmountCount = 0;

        if (checkbox === false) {
            checkboxCount = checkboxCount + 1;
        }
        if (OtherCC === 0) {
            OtherCcCount = OtherCcCount + 1;
        }
        if (CCCode === 0) {
            CCCodeCount = CCCodeCount + 1;
        }
        if (DCA === 0) {
            DcaCount = DcaCount + 1;
        }
        if (SubDCA === 0) {
            SubDcaCount = SubDcaCount + 1;
        }
        if (DcaAmount === "0.00" || DcaAmount === "" || DcaAmount === "0.0" || DcaAmount === "0") {
            DcaAmountCount = DcaAmountCount + 1;
        }

        if (OtherCcCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction from other CC</p>";
            isValid = false;
        }
        if (CCCodeCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction CC Code</p>";
            isValid = false;
        }
        if (DcaCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction DCA </p>";
            isValid = false;
        }
        if (SubDcaCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubDCA </p>";
            isValid = false;
        }
        if (DcaAmountCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction DCA Amount</p>";
            isValid = false;
        }

        if (checkboxCount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Check or Not</p>";
            isValid = false;
        }

    });

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
        var totalRowCount = $("#ClientRecDCAGrid tbody tr").length;
        //alert(totalRowCount);
        var rowcount = parseInt(totalRowCount) + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td  style="text-align:center" class="hidden">' + rowcount + '</td>';
        cols += ' <td style="text-align:center"><select class="form-control dropdown-toggle OtherCC" id="ddl_ClRecOtherCCddl"><option selected="selected" value="0">-Select-</option>';
        cols += ' <option value="Yes">Yes</option>';
        cols += ' <option value="No">No</option>';
        cols += '</select>';
        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle CC" id="ddl_ClRecDiductionCC_code"><option selected="selected" value="0">-Select-</option></select></td>';
        cols += ' <td style="text-align:center"><select class="form-control dropdown-toggle DCA" id="ddl_ClRecDiductionDCA_code"><option selected="selected" value="0">-Select-</option></select></td>';
        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle SubDCA" id="ddl_ClRecDiductionSubDCA_code"><option selected="selected" value="0">-Select-</option></select></td>';
        cols += '<td style="text-align:center"><input type="text" value="" id="txtDiductionAmount" class="form-control DcaAmount" onkeypress="return ValidateAmount(this,event);" onKeyup="CountClientRec_DCATotal()"/></td>';
        cols += '<td style="text-align:center"> <ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkDeduction" name="chkDeduction">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul>';
        cols += '<td ><input type="button" class="ibtnDel btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.DCAgrid").append(newRow);
    }

}

function CountClientRec_DCATotal() {

    var DCAsubtotal = 0;
    var DCArowtotal = 0;
    //Count DCA Amount Total
    var DcaGridRowCount = $("#ClientRecDCAGrid tbody tr").length;
    if (DcaGridRowCount > 0) {
        $("#ClientRecDCAGrid tbody tr").each(function () {
            var currentRow = $(this);
            DCArowtotal = $(this).find("td").eq(5).find("input[type='text']").val();
            if (DCArowtotal !== '') {
                DCAsubtotal = parseFloat(DCAsubtotal) + parseFloat(DCArowtotal);
            }

        });

        $("#ClientRecDCAGrid tfoot tr").each(function () {
            var footerRow = $(this);

            if (!isNaN(DCAsubtotal)) {
                footerRow.find("td").eq(4).html("Total Deduction: ");
                footerRow.find("td").eq(5).html(DCAsubtotal.toFixed(2));
                $("#txtDeductionExist").val(parseFloat(DCAsubtotal).toFixed());
            }
            else {
                footerRow.find("td").eq(4).html("Total Deduction: ");
                footerRow.find("td").eq(5).html(0);
                $("#txtDeductionExist").val(0);
            }

            ClientRec_FinalAmount();

        });
    }


}
function ClientRec_FinalAmount() {
    //debugger;
    var TaxPlusBasic = $("#txtTaxPlusBasic").val();
    var FinalAmount = $("#txtFinalAmount").val();
    var Advance = $("#txtAdvance").val();
    var Rentention = $("#txtRentention").val();
    var Hold = $("#txtHold").val();
    var DcaAmount = $("#txtDeductionExist").val();

    var minusamount = 0;
    if (!isNaN(Advance) && Advance != "") {
        minusamount = parseFloat(minusamount) + parseFloat(Advance);
    }
    if (!isNaN(Rentention) && Rentention != "") {
        minusamount = parseFloat(minusamount) + parseFloat(Rentention);
    }
    if (!isNaN(Hold) && Hold != "") {
        minusamount = parseFloat(minusamount) + parseFloat(Hold);
    }
    if (!isNaN(DcaAmount) && DcaAmount != "") {
        minusamount = parseFloat(minusamount) + parseFloat(DcaAmount);
    }
    //alert("minusamount:" + minusamount + "-TaxPlusBasic:" + TaxPlusBasic);
    //alert(!isNaN(minusamount) && !isNaN(TaxPlusBasic));
    if (!isNaN(minusamount) && !isNaN(TaxPlusBasic)) {
        var final = parseFloat(TaxPlusBasic) - parseFloat(minusamount);
        $("#txtFinalAmount").val(parseFloat(final).toFixed(2));
    }
    else {
        $("#txtFinalAmount").val(parseFloat(TaxPlusBasic).toFixed(2));
    }

}
function SubmitClientRecievableData() {

    var Advance = $("#txtAdvance").val();
    var Bank = $("#ddl_ClRecBankddl option:selected").index();
    var Date = $("#txtClientPayDate").val();
    var Remarks = $("#txtRemarks").val();
    var No = $("#txtNo").val();
    var finalamount = $("#txtFinalAmount").val();
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
    if (finalamount <= 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
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
            if (DcaAmount == "0.00" || DcaAmount == "" || DcaAmount == "0.0" || DcaAmount == "0" || DcaAmount <= 0) {
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

        var selecteddcalist = [];
        $("#ClientRecDCAGrid tbody tr").each(function () {
            var currentRow = $(this);
            var dedcc = currentRow.find("td").eq(2).find("select option:selected").val();
            var deddca = currentRow.find("td").eq(3).find("select option:selected").val();
            if (dedcc !== 0) {
                selecteddcalist.push(dedcc + '-' + deddca);
                // alert(currentRow.find("td").eq(2).find("select option:selected").val());
            }
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);

        // for (i = 0; i < duplicatelist.length; i++) { console.log(duplicatelist[i]); }
        // var duplicatelist = getDistinctArray(selecteddcalist);
        // console.log(duplicatelist.length);
        //alert(duplicatelist.length);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p> Duplicate CostCenters for Deduction</p>";
            $("#divClientRecInfoMsg").text("");
            $("#divClientRecInfoMsg").append(finalerror2 + "</div>");
            $("#divClientRecInfoMsg").addClass("alert-danger");
            $("#divClientRecInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            SaveClientPayment();
        }
    }

}


function SaveClientPayment() {

    var retention = $("#txtRentention").val();
    var Hold = $("#txtHold").val();
    var renval = 0;
    var holdval = 0;
    if (retention != "") { renval = retention; }
    if (Hold != "") { holdval = Hold; }
    if ($("#chkDedY").is(':checked') === true) {
        var Cclist = "", Dcalist = "", Subdcalist = "", Amountslist = "";
        $("#ClientRecDCAGrid tbody tr").each(function () {
            var currentRow = $(this);
            var RowNo = currentRow.find("td").eq(0).html();
            var checkbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
            var OtherCC = currentRow.find("td").eq(1).find("select option:selected").index();
            var CCCode = currentRow.find("td").eq(2).find("select option:selected").index();
            var DCA = currentRow.find("td").eq(3).find("select option:selected").index();
            var SubDCA = currentRow.find("td").eq(4).find("select option:selected").index();
            var DcaAmount = currentRow.find("td").eq(5).find("input[type='text']").val();
            if (checkbox === true && OtherCC !== 0 && CCCode !== 0 && DCA !== 0 && SubDCA !== 0 && DcaAmount !== "") {
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
        InvoiceNo: $("#ddlInvNo option:selected").text(),
        CCCode: $("#ddlClCccode option:selected").val(),
        Createdby: $("#txtCreatedby").val(),
        PaytypeId: $("#ddl_ClRecCategoryddl option:selected").val(),
        InvoiceDate: $("#txtPayInvoiceDate").val(),
        Roleid: $("#txtRoleId").val(),
        Action: 'New'
    };
    debugger;
    console.log(clientPayment);
    addFailMsg = "Error Occurred While Adding Client Payment Details.";
    addSuccessMsg = "Client Payment Details Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/SaveClientInvoiceRecievable',
        data: { clinetRec: clientPayment },
        success: function (Data) {
            if (Data.saveStatus === "Invoice Submited") {
                $("#btnClientRecSubmit").prop("disabled", true);
                $("#divClientRecInfoMsg").text(addSuccessMsg);
                $("#divClientRecInfoMsg").removeClass("hidden alert-danger");
                $("#divClientRecInfoMsg").addClass("alert-success");

            }
            else {
                $("#btnClientRecSubmit").prop("disabled", true);
                $("#divClientRecInfoMsg").text(Data.saveStatus);
                $("#divClientRecInfoMsg").addClass("alert-danger");
                $("#divClientRecInfoMsg").removeClass("hidden alert-success");

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnClientRecSubmit").prop("disabled", true);
            $("#divClientRecInfoMsg").text(addFailMsg);
            $("#divClientRecInfoMsg").addClass("alert-danger");
            $("#divClientRecInfoMsg").removeClass("hidden alert-success");

        }
    });

}

function ResetClientRecievableData() {
    location.reload();
}
//Scripts for Withdrawal

function WithdrawPayModeChange() {
    var PayMode = $('#ddl_WdPayNode option:selected').text();
    var PayModeIndex = $('#ddl_WdPayNode option:selected').index();
    if (PayModeIndex == 1) {
        //alert('success' + PayModeIndex);
        $("#ddl_Wdchequenos").removeClass("hidden");
        $("#txtWdNo").addClass("hidden");
        var Bank = $('#ddl_WdFrom option:selected').text();
        var ddlChequeNo = $("#ddl_Wdchequenos");
        $.ajax({
            type: "POST",
            url: "/Accounts/BindWdCheques",
            data: '{BankName:"' + Bank + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                ddlChequeNo.empty().append('<option selected="selected" value="Select">-Select-</option>');
                $('#ddl_Wdchequenos').get(0).selectedIndex = 0;
                $.each(response, function () {
                    ddlChequeNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                });
            },
            failure: function (response) {
                alert(response.responseText);
            },
            error: function (response) {
                alert(response.responseText);
            }
        });

    }
    else if (PayModeIndex != 1) {

        $("#txtWdNo").removeClass("hidden");
        $("#ddl_Wdchequenos").addClass("hidden");
        return false;
    }

}
function btnSubmitWithDrawalData() {
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
            //var no = $("#ddl_WdNo option:selected").index();
            var no = $("#ddl_Wdchequenos option:selected").val();
            if (no == "Select") {
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
        $("#divWithdrawalInfoMsg").text("");
        $("#divWithdrawalInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divWithdrawalInfoMsg").addClass("alert-danger");
        $("#divWithdrawalInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divWithdrawalInfoMsg").text("");
        $("#divWithdrawalInfoMsg").addClass("hidden");
        AddbankwithdrawlDetails();
    }
}
function AddbankwithdrawlDetails() {
    var bankwithdrawlDetails = {
        Name: $("#txtWdName").val(),
        From: $("#ddl_WdFrom option:selected").val(),
        Mode_of_Pay: $("#ddl_WdPayNode option:selected").val(),
        No: $("#txtWdNo").val(),
        Chequeid: $("#ddl_Wdchequenos option:selected").val(),
        Date: $("#txtWdDate").val(),
        Remarks: $("#txtWdRemarks").val(),
        RoleID: $("#txtWDRoleId").val(),
        Amount: $("#txtWdAmount").val()
    };
    addFailMsg = "Error Occurred While Adding Withdrawal Details.";
    addSuccessMsg = "Bank withdraw successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/NewSavebankwithdrawlDetails',
        data: { newbankwithdrawlDetails: bankwithdrawlDetails },
        success: function (Data) {
            //if (Data.saveStatus == "Successfull") {
            if (Data.saveStatus != "Next Level Verification User Does Not Exist" && Data.saveStatus != "This cheque is already approved" && Data.saveStatus != "Insufficent Balance") {
                //alert(Data.saveStatus);
                $("#divWithdrawalInfoMsg").text(addSuccessMsg);
                $("#divWithdrawalInfoMsg").removeClass("hidden alert-danger");
                $("#divWithdrawalInfoMsg").addClass("alert-success");
                $("#btnWdSubmit").prop("disabled", true);
                $.ajax({
                    type: "POST",
                    url: "/Accounts/ViewPrintWithdraw",
                    data: '{Refno:"' + Data.saveStatus + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: 'html',
                    success: function (data) {
                        $('#Withdrawprint').html(data);
                        $('#Withdrawprint').modal();
                    }
                });
                //btnResetWithDrawalData();
            }
            else {
                $("#divWithdrawalInfoMsg").text(Data.saveStatus);
                $("#divWithdrawalInfoMsg").addClass("alert-danger");
                $("#divWithdrawalInfoMsg").removeClass("hidden alert-success");
                $("#btnWdSubmit").prop("disabled", false);
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divWithdrawalInfoMsg").text(addFailMsg);
            $("#divWithdrawalInfoMsg").addClass("alert-danger");
            $("#divWithdrawalInfoMsg").removeClass("hidden alert-success");

        }
    });

}
function btnResetWithDrawalData() {
    $("#txtWdName").val("");
    $('#ddl_WdFrom').prop('selectedIndex', 0);
    $('#ddl_WdPayNode').prop('selectedIndex', 0);
    //$("#txtWdDate").datepicker("setDate", 'dateToday');
    $("#ddl_Wdchequenos").addClass("hidden");
    $("#ddl_Wdchequenos").empty().append('<option selected="selected" value="Select">-Select-</option>');
    $("#txtWdNo").removeClass("hidden");
    $("#txtWdNo").val("");
    $("#txtWdAmount").val("");
    $("#txtWdRemarks").val("");
    $("#divWithdrawalInfoMsg").text("");
    $("#divWithdrawalInfoMsg").addClass("hidden");
    $("#btnWdSubmit").prop("disabled", false);
}

/* Scripts for Miscellaneous*/
/* Scripts for Miscellaneous*/
function MiscIntrestttypechange() {
    ////////debugger;
    var IntrestModeval = $("#ddl_MiscIntrestType option:selected").val();
    if ($("#txtMiscDate").val() == "") {
        alert("Select Date");
        $('#ddl_MiscIntrestType').get(0).selectedIndex = 0
        return false;
    }
    else if (IntrestModeval == "Intrest From Clients") {
        $("#divclientandsunclient").removeClass("hidden");
        $('#ddl_Miscclient').get(0).selectedIndex = 0;
        $('#ddl_MiscSubclient').get(0).selectedIndex = 0;
        $("#txtMiscDate").datepicker("disable");
        $("#divIntrestTable").removeClass("hidden");
        GetMiscDedCC();
    }
    else if (IntrestModeval == "Intrest From Others") {
        $("#divclientandsunclient").addClass("hidden");
        $("#txtMiscDate").datepicker("disable");
        $("#divIntrestTable").removeClass("hidden");
        GetMiscDedNormalCC();
    }
    else if (IntrestModeval == "Intrest From Clients" || IntrestModeval == "Intrest From Others") {
        var errorMsg = "";
        isValid = true;
        if ($("#txtMiscDate").val() == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Date</p>";
            $('#ddl_MiscIntrestType').get(0).selectedIndex = 0
            isValid = false;
        }
        else {
            $("#txtMiscDate").datepicker("disable");
            isValid = true;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divMiscInfoMsg1").text("");
            $("#divMiscInfoMsg1").append(finalerror + errorMsg + "</div>");
            $("#divMiscInfoMsg1").addClass("alert-danger");
            $("#divMiscInfoMsg1").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divMiscInfoMsg1").text("");
            $("#divMiscInfoMsg1").addClass("hidden");
        }
    }
    else {
        $("#txtMiscDate").datepicker("enable");
        return true;
    }
}
function GetMiscDca() {
    var index = $("#ddl_MiscCcCode option:selected").index();
    var CCVal = $("#ddl_MiscCcCode option:selected").val();
    var Date = $("#txtMiscDate").val();
    if ($("#txtMiscDate").val() != "") {
        if (index != 0) {
            $.ajax({
                type: "POST",
                url: "/Accounts/BindMiscDCA",
                data: '{CC_code:"' + CCVal + '",date:"' + Date + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var dca = $("#ddl_MiscDCACode");
                    dca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        dca.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                    });

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        }
    }
    else {
        alert("Please Select Date");
        $('#ddl_MiscCcCode').get(0).selectedIndex = 0;
        return false;
    }
}
function GetMiscDedDca() {
    var index = $("#ddl_MiscIntrestCcCode option:selected").index();
    var CCVal = $("#ddl_MiscIntrestCcCode option:selected").val();
    var Date = $("#txtMiscDate").val();
    if ($("#txtMiscDate").val() != "") {
        if (index != 0) {
            $.ajax({
                type: "POST",
                url: "/Accounts/BindMiscDCA",
                data: '{CC_code:"' + CCVal + '",date:"' + Date + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var dca = $("#ddl_MiscIntrestDCACode");
                    dca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        dca.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                    });

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        }
    }
    else {
        alert("Please Select Date");
        $('#ddl_MiscIntrestCcCode').get(0).selectedIndex = 0;
        return false;
    }
}
function GetMiscSDca() {
    var chkstring = "YES";
    var index = $("#ddl_MiscDCACode option:selected").index();
    var DCAVal = $("#ddl_MiscDCACode option:selected").val();
    if (index != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindMiscSDCA",
            data: '{DCA:"' + DCAVal + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var sdca = $("#ddl_MiscSDCACode");
                sdca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    sdca.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function GetMiscDedSDca() {
    var chkstring = "YES";
    var index = $("#ddl_MiscIntrestDCACode option:selected").index();
    var DCAVal = $("#ddl_MiscIntrestDCACode option:selected").val();
    if (index != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindMiscSDCA",
            data: '{DCA:"' + DCAVal + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var sdca = $("#ddl_MiscIntrestSDCACode");
                sdca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    sdca.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });


            },
            failure: function (response) {


            },
            error: function (response) {


            }
        });
    }
}
function GetMiscDedSDcachk() {
    var chkstring = "YES";
}
function GetMiscDedCC() {
    var index = $("#ddl_MiscIntrestType option:selected").index();
    var Value = $("#ddl_MiscIntrestType option:selected").val();
    if (index == 1) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindMiscDedCC",
            data: '{Value:"' + Value + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var dedcc = $("#ddl_MiscIntrestCcCode");
                dedcc.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    dedcc.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function GetMiscDedNormalCC() {
    ////////debugger;
    var index = $("#ddl_MiscIntrestType option:selected").index();
    var Value = $("#ddl_MiscIntrestType option:selected").val();

    if (index == 2) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BinddednormalCC",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var dedcc = $("#ddl_MiscIntrestCcCode");
                dedcc.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    dedcc.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function GetMiscSubClient() {
    var index = $("#ddl_Miscclient option:selected").index();
    var ClientVal = $("#ddl_Miscclient option:selected").val();

    if (index != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindMiscsubclient",
            data: '{Clientid:"' + ClientVal + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var Subclient = $("#ddl_MiscSubclient");
                Subclient.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    Subclient.append($("<option></option>").val(this['SubClientCode']).html(this['SubClientName']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function CountMiscTotal() {
    var amount = $("#txtMiscAmount").val();
    var final = $("#txtMiscFinalAmount").val();
    var InterestExist = $("#txtMiscIntrestAmount").val();
    var total = 0;
    if (InterestExist != "" && amount != "") {
        $("#IntrestTable tbody tr").each(function () {
            var currentRow = $(this);
            var Interest = currentRow.find("td").eq(3).find("input[type='text']").val();
            if (Interest != "") {
                total = parseFloat(amount) - parseFloat(Interest);
            }
            else {
                total = parseFloat(amount);
            }
        });
    }
    if (InterestExist == 0 && amount != "") {
        total = parseFloat(amount);
    }
    if (InterestExist == "" && amount != "") {
        total = parseFloat(amount);
    }
    if (InterestExist != "" && amount == "") {
        $("#IntrestTable tbody tr").each(function () {
            var currentRow = $(this);
            var Interest = currentRow.find("td").eq(3).find("input[type='text']").val();
            total = parseFloat(Interest);
            if (Interest != "") {
                total = parseFloat(Interest);
            }
            else {
                total = 0;
            }
        });
    }
    if (InterestExist == 0 && amount == "") {
        total = 0;
    }
    $("#txtMiscFinalAmount").val(total);

}
function MiscPayModeChange() {
    var PayMode = $('#ddl_MiscPayMode option:selected').text();
    var PayModeIndex = $('#ddl_MiscPayMode option:selected').index();
    if (PayModeIndex == 1) {
        $("#ddl_miscchequenos").removeClass("hidden");
        $("#txtMiscNo").addClass("hidden");
        var Bank = $('#ddlMiscBank option:selected').text();
        var ddlChequeNo = $("#ddl_miscchequenos");
        $.ajax({
            type: "POST",
            url: "/Accounts/BindWdCheques",
            data: '{BankName:"' + Bank + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                ddlChequeNo.empty().append('<option selected="selected" value="Select">-Select-</option>');
                $('#ddl_miscchequenos').get(0).selectedIndex = 0;
                $.each(response, function () {
                    ddlChequeNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });

    }
    else {

        $("#txtMiscNo").removeClass("hidden");
        $("#ddl_miscchequenos").addClass("hidden");
    }

}

function SubmitMiscData() {
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
    if (!isValid) {

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divMiscInfoMsg1").text("");
        $("#divMiscInfoMsg1").append(finalerror + errorMsg + "</div>");
        $("#divMiscInfoMsg1").addClass("alert-danger");
        $("#divMiscInfoMsg1").removeClass("hidden alert-success");
        return false;

    }
    else {
        $("#divMiscInfoMsg1").text("");
        $("#divMiscInfoMsg1").addClass("hidden");
        $('#MiscIntrestConfirmModel').modal('hide');
        Savemiscdata();
    }

}
var chkstring = "";
function ContinueSubmitData() {
    $('#txtclickcheck').val("NO");
    $('#MiscIntrestConfirmModel').modal('hide')
    $("#divIntrestTable").addClass("hidden");
}
function CancelSubmitData() {
    $('#txtclickcheck').val("YES");
    $('#MiscIntrestConfirmModel').modal('hide')
    $("#divIntrestTable").removeClass("hidden");
}
function Savemiscdata() {
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
        Misc_final_Amount: $("#txtMiscFinalAmount").val(),
        Misc_Date: $("#txtMiscPayDate").val(),
        RoleID: $("#txtMiscRoleId").val(),
        Createdby: $("#txtCreatedby").val(),

    };
    addFailMsg = "Error Occurred While inserting Misc Details";
    addSuccessMsg = "Misc Details Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/Savemisc',
        data: { misc: miscPayment },
        success: function (Data) {
            if (Data.saveStatus == "Successfull") {
                $("#btnMiscSubmit").prop("disabled", true);
                $("#divMiscInfoMsg1").text(addSuccessMsg);
                $("#divMiscInfoMsg1").removeClass("hidden alert-danger");
                $("#divMiscInfoMsg1").addClass("alert-success");
            }
            else {
                $("#btnMiscSubmit").prop("disabled", false);
                $("#divMiscInfoMsg1").text(addFailMsg);
                $("#divMiscInfoMsg1").addClass("alert-danger");
                $("#divMiscInfoMsg1").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnMiscSubmit").prop("disabled", true);
            $("#divMiscInfoMsg1").text(addFailMsg);
            $("#divMiscInfoMsg1").addClass("alert-danger");
            $("#divMiscInfoMsg1").removeClass("hidden alert-success");
        }
    });

}
//function ResetClientRecievableData() {
//    location.reload();
//}

function ResetMiscData() {
    $("#ddl_MiscIntrestType").prop('selectedIndex', 0);
    $("#ddl_MiscCcCode").prop('selectedIndex', 0);
    $("#ddl_MiscDCACode").prop('selectedIndex', 0);
    $("#ddl_MiscSDCACode").prop('selectedIndex', 0);
    $("#txtMiscAmount").val("");
    $("#txtMiscName").val("");
    $("#ddlMiscBank").prop('selectedIndex', 0);
    $("#ddl_MiscPayMode").prop('selectedIndex', 0);
    $("#txtMiscNo").val("");
    $("#txtMiscReamarks").val("");
    clearInterestTable();
    $("#txtMiscFinalAmount").val(0);
    $("#divMiscInfoMsg1").text("");
    $("#divMiscInfoMsg1").addClass("hidden");
    $("#btnMiscSubmit").prop("disabled", false);
    $("#ddl_Miscclient").prop('selectedIndex', 0);
    $("#ddl_MiscSubclient").prop('selectedIndex', 0);
    $("#divclientandsunclient").addClass("hidden");
    $('#txtclickcheck').val("");
    $("#divIntrestTable").addClass("hidden");
    $("#txtMiscDate").val("");
    $("#txtMiscPayDate").val("");
}
function clearInterestTable() {
    $("#IntrestTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(3).find("input[type='text']").val("");
        currentRow.find("td").eq(0).find("select option").prop('selected', false).filter(function () {
            return $(this).text() == '-Please Select-';
        }).prop('selected', true);
        currentRow.find("td").eq(1).find("select option").prop('selected', false).filter(function () {
            return $(this).text() == '-Please Select-';
        }).prop('selected', true);
        currentRow.find("td").eq(2).find("select option").prop('selected', false).filter(function () {
            return $(this).text() == '-Please Select-';
        }).prop('selected', true);


    });
}
/* scripts for Unsecured Loan*/
function UnsLoanTypeChange() {
    var LoanType = $("#ddl_UnsLoanType option:selected").index();
    if (LoanType === 1) {
        $("#txtMainLoanDate").val("");
        $("#divUnsName").removeClass('hidden');
        //$("#hrledger").removeClass('hidden');
        // $("#divLedger").removeClass('hidden');
        $("#divLoanNo").removeClass('hidden');
        $("#divLoanDate").removeClass('hidden');
        $("#divAmount").removeClass('hidden');
        $("#txtUnsLoanAdditionalAmount").addClass('hidden');
        $("#ddl_UnsLoanNo").addClass('hidden');
        $("#txtUnsLoanAdditionalDate").addClass('hidden');
        $("#hrPayment").removeClass('hidden');
        $("#divUnsPayment").removeClass('hidden');
        $("#ddl_UnsLoanPaymentNo").addClass('hidden');
        $("#divAdditionalLoanDate").addClass('hidden');
        $("#txtUnsLoanAmount").removeClass('hidden');
        $("#txtUnsLoanNo").removeClass('hidden');
        $("#txtUnsLoanPersonName").val("");
        $("#txtUnsLoanFinalAmount").val("");
        $("#txtUnsLoanIntrest").val("");
        $("#divUnsDeduction").addClass('hidden');
        $("#txtUnsLoanDate").removeClass('hidden');
        //error msg divs
        $("#divUnsLoanInfoMsg").text("");
        $("#divUnsLoanInfoMsg").addClass("hidden");
        //  $("#DeductionExist").val(0);
        $("#divUnsRateOfInterest").removeClass('hidden');
        $("#ddl_UnsLoanType").prop('disabled', true);
    }
    if (LoanType === 2) {
        $("#txtMainLoanDate").val("");
        $("#ddl_UnsLoanType").prop('disabled', true);
        var ddlLoanNo = $("#ddl_UnsLoanNo");
        $.ajax({
            type: "POST",
            url: "/Accounts/BindUnsLoan_No",
            data: '{LoanType:"' + $("#ddl_UnsLoanType option:selected").val() + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                ddlLoanNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlLoanNo.append($("<option></option>").val(this['UnsecuredLoadId']).html(this['LoanNumber']));
                });
                // $("#hrledger").addClass('hidden');
                // $("#divLedger").addClass('hidden');
                $("#divLoanNo").removeClass('hidden');
                $("#divLoanDate").addClass('hidden');
                $("#divAdditionalLoanDate").addClass('hidden');
                $("#divAmount").addClass('hidden');
                $("#ddl_UnsLoanNo").removeClass('hidden');
                $("#txtUnsLoanNo").addClass('hidden');
                $("#hrPayment").addClass('hidden');
                $("#divUnsPayment").addClass('hidden');
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").addClass("hidden");
                $("#ddl_UnsLoanPaymentNo").addClass('hidden');
                $("#txtUnsLoanPaymentNo").removeClass('hidden');
                $("#AdditionalTotal").val(0);
                // $("#DeductionExist").val(0);
                $("#divUnsDeduction").addClass('hidden');
                $("#divUnsName").addClass('hidden');
                $("#divUnsRateOfInterest").addClass('hidden');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });

    }
    if (LoanType === 3) {
        $("#txtMainLoanDate").val("");
        $("#ddl_UnsLoanType").prop('disabled', true);
        //$("#hrledger").addClass('hidden');
        // $("#divLedger").addClass('hidden');
        //error msg
        $("#divUnsLoanInfoMsg").text("");
        $("#divUnsLoanInfoMsg").addClass("hidden");

        var ddlLoanNo1 = $("#ddl_UnsLoanNo");
        $.ajax({
            type: "POST",
            url: "/Accounts/BindUnsLoan_No",
            data: '{LoanType:"' + $("#ddl_UnsLoanType option:selected").val() + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                ddlLoanNo1.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlLoanNo1.append($("<option></option>").val(this['UnsecuredLoadId']).html(this['LoanNumber']));
                });
                //  $("#hrledger").addClass('hidden');
                // $("#divLedger").addClass('hidden');
                $("#divLoanNo").removeClass('hidden');
                $("#divLoanDate").addClass('hidden');
                $("#divAdditionalLoanDate").addClass('hidden');
                $("#divAmount").addClass('hidden');
                $("#ddl_UnsLoanNo").removeClass('hidden');
                $("#txtUnsLoanNo").addClass('hidden');
                $("#hrPayment").addClass('hidden');
                $("#divUnsPayment").addClass('hidden');
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").addClass("hidden");
                $("#ddl_UnsLoanPaymentNo").addClass('hidden');
                $("#txtUnsLoanPaymentNo").removeClass('hidden');
                $("#divUnsDeduction").addClass('hidden');
                $("#divUnsName").addClass('hidden');
                //hide rate of intrest
                $("#txtUnsLoanIntrest").val("");
                $("#divUnsRateOfInterest").addClass('hidden');


            },
            failure: function (response) {


            },
            error: function (response) {


            }
        });
    }

    //  alert(LoanType);
}
function UnsLoanNoChange() {
    var LoanNo = $("#ddl_UnsLoanNo option:selected").val();
    var loannoindex = $("#ddl_UnsLoanNo option:selected").index();
    var LoanType = $("#ddl_UnsLoanType option:selected").index();
    // alert(LoanNo);
    if (LoanType == 2 && loannoindex !== 0) {

        $.ajax({
            type: "POST",
            url: "/Accounts/BindUnsLoan_Details",
            data: '{Loanid:"' + LoanNo + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $("#divLoanDate").addClass('hidden');
                $("#divAdditionalLoanDate").removeClass('hidden');

                $("#divAmount").removeClass('hidden');
                $("#ddl_UnsLoanNo").removeClass('hidden');
                $("#txtUnsLoanNo").addClass('hidden');
                $("#hrPayment").removeClass('hidden');
                $("#divUnsPayment").removeClass('hidden');


                $("#txtUnsLoanAdditionalDate").removeClass('hidden');
                $("#txtUnsLoanDate").addClass('hidden');

                $("#txtUnsLoanAdditionalAmount").removeClass('hidden');
                $("#divUnsName").removeClass('hidden');
                $("#txtUnsLoanAmount").addClass('hidden');
                $.each(response, function () {
                    $("#txtUnsLoanPersonName").val(this['Name']);
                    $("#txtUnsLoanIntrest").val(this['RateOfIntrest']);
                });
                $("#divUnsRateOfInterest").removeClass('hidden');
                $("#txtUnsLoanAdditionalDate").prop('readOnly', true);
                $("#txtUnsLoanPersonName").prop('readOnly', true);
                $("#ddl_UnsLoanNo").prop('disabled', true);
                $("#ddl_UnsLoanType").prop('disabled', true);
                $("#ddl_UnsLoanPaymentNo").addClass('hidden');
                $("#txtUnsLoanPaymentNo").removeClass('hidden');
                $("#lblLoanDate").text('Adittional Loan Date');

                GetLoanDate();

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });

    }
    if (LoanType === 3 && loannoindex !== 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindUnsLoan_Details",
            data: '{Loanid:"' + LoanNo + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $("#divLoanDate").addClass('hidden');
                $("#divAdditionalLoanDate").removeClass('hidden');

                $("#divAmount").removeClass('hidden');
                $("#ddl_UnsLoanNo").removeClass('hidden');
                $("#txtUnsLoanNo").addClass('hidden');
                $("#hrPayment").removeClass('hidden');
                $("#divUnsPayment").removeClass('hidden');


                $("#txtUnsLoanAdditionalDate").removeClass('hidden');
                $("#txtUnsLoanDate").addClass('hidden');

                $("#txtUnsLoanAdditionalAmount").removeClass('hidden');
                $("#divUnsName").removeClass('hidden');
                $("#txtUnsLoanAmount").addClass('hidden');
                $.each(response, function () {

                    //$("#txtUnsLoanAdditionalDate").val(this['Additional_Loan_Date']);
                    $("#txtUnsLoanPersonName").val(this['Name']);

                    //Deduction table
                    $("#divUnsDeduction").removeClass('hidden');
                    $("#btnshowDeductionTable").removeClass('hidden');
                    $("#btnRemoveDeductionTable").addClass('hidden');
                    $("#divDeductiontable").addClass('hidden');
                    //  $("#DeductionExist").val(0);
                    //Amounts
                    $("#txtUnsLoanFinalAmount").val(0);
                    $("#AdditionalTotal").val(0);
                    $("#ddl_UnsLoanPayMode").prop('disabled', false);
                    $("#ddl_UnsLoanPayMode").empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    var ddlPayNode = $("#ddl_UnsLoanPayMode");
                    ddlPayNode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    ddlPayNode.append($("<option></option>").val("Cheque").html("Cheque"));
                    ddlPayNode.append($("<option></option>").val("Cash").html("Cash"));
                    ddlPayNode.append($("<option></option>").val("RTGS/E-Trans").html("RTGS/E-Trans"));
                    ddlPayNode.append($("<option></option>").val("DD").html("DD"));

                });
                $("#txtUnsLoanAdditionalDate").prop('readOnly', true);
                $("#txtUnsLoanPersonName").prop('readOnly', true);
                $("#ddl_UnsLoanNo").prop('disabled', true);
                $("#ddl_UnsLoanType").prop('disabled', true);
                $("#ddl_UnsLoanPaymentNo").addClass('hidden');
                $("#txtUnsLoanPaymentNo").removeClass('hidden');
                $("#lblLoanDate").text('Loan Return Date');
                $("#divUnsRateOfInterest").addClass('hidden');
                $("#TotalLoanAmount").val("");
                $("#divUnsDeductionGrid").addClass("hidden");
                GetLoanDate();
                GetLoanAmount();

                $("#chkDedFDIntY").prop("checked", false);
                $("#chkDedFDIntN").prop("checked", true);
                $("#divUnsDeductionGrid").addClass("hidden");

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}


function GetLoanDate() {

    var LoanNo = $("#ddl_UnsLoanNo option:selected").text();
    $.ajax({
        type: "POST",
        url: "/Accounts/GetLoanReturnDate",
        data: '{LoanNumber:"' + LoanNo + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            var ldate = "";
            var standardDate = "";
            //   alert(standardDate);
            $.each(response, function () {

                ldate = this['LoanDate'];
                standardDate = moment(ldate).format("DD-MMM-YYYY");
                $("#txtMainLoanDate").val(standardDate);
                //alert(standardDate);
            });

            $.ajax({
                type: "POST",
                url: "/Accounts/GetLoanReturnDeductionDCA",
                data: '{loandate:"' + $("#txtMainLoanDate").val() + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    $("#UnloanDeductionTable tbody tr").each(function () {
                        var currentRow = $(this);
                        var ddlDCA = currentRow.find('.loandca');
                        ddlDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            ddlDCA.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                        });
                    });

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });

}
function GetLoanAmount() {
    var LoanNo = $("#ddl_UnsLoanNo option:selected").text();
    $.ajax({
        type: "POST",
        url: "/Accounts/GetLoanReturnAmount",
        data: '{Loanno:"' + LoanNo + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var amount = response.TotalAmount;
            $("#txtUnsLoanAdditionalAmount").val(parseFloat(amount).toFixed(2));
            $("#txtUnsLoanFinalAmount").val(parseFloat(amount).toFixed(2));
            $("#TotalLoanAmount").val(parseFloat(amount).toFixed(2));

        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });
}
function CheckPaymentDateBeforeSubmit() {
    var valid = false;
    var LoanTypeIndex = $("#ddl_UnsLoanType option:selected").index();
    if (LoanTypeIndex == 3 || LoanTypeIndex == 2) {
        var returndate = $("#txtUnsLoanAdditionalDate").val();
        var paymentdate = $("#txtUnsLoanPayDate").val();
        //alert("loandate:" + loandate + "---returndate:" + returndate);
        if (new Date(paymentdate) < new Date(returndate)) {
            if (LoanTypeIndex == 2) {
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").append("<div>Payment Date must be greater than Additional  Loan Date</div>");
                $("#divUnsLoanInfoMsg").addClass("alert-danger");
                $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");
                valid = false;
            }
            else if (LoanTypeIndex == 3) {
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").append("<div>Payment Date must be greater than Return Date</div>");
                $("#divUnsLoanInfoMsg").addClass("alert-danger");
                $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");
                valid = false;
            }
        }
        else {
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");
            $("#txtUnsLoanPayDate").datepicker("option", "minDate", returndate);
            valid = true;
        }
    }
    else {
        var paymentdate1 = $("#txtUnsLoanPayDate").val();
        var loandate = $("#txtUnsLoanDate").val();
        if (new Date(paymentdate1) < new Date(loandate)) {
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").append("<div>Payment Date must be greater than Loan Date</div>");
            $("#divUnsLoanInfoMsg").addClass("alert-danger");
            $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");
            valid = false;
        }
        else {
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");
            $("#txtUnsLoanPayDate").datepicker("option", "minDate", returndate);
            valid = true;
        }

    }
    return valid;
}

function btnSubmitUnsLoanData() {
    var errorMsg = "";
    isValid = true;
    var LoanTypeIndex = $("#ddl_UnsLoanType option:selected").index();
    var LoanType = $("#ddl_UnsLoanType option:selected").val();
    if (LoanTypeIndex == 0 || LoanTypeIndex == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Loan Type</p>";
        isValid = false;
    }
    if (LoanTypeIndex == 1) {//new loan
        var LoanNo = $("#txtUnsLoanNo").val();
        var LoanDate = $("#txtUnsLoanDate").val();
        var PerName = $("#txtUnsLoanPersonName").val();
        var LoanAmount = $("#txtUnsLoanAmount").val();
        var Intrest = $("#txtUnsLoanIntrest").val();

        if (LoanNo == "" || LoanNo == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Loan No</p>";
            isValid = false;
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
        if (Intrest == "" || Intrest == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate of Interest</p>";
            isValid = false;
        }
    }
    if (LoanTypeIndex == 2) {//additional
        // var LoanDate1 = $("#txtUnsLoanAdditionalDate").val();
        //var PerName = $("#txtUnsLoanPersonName").val();
        var LoanAdditionalAmount = $("#txtUnsLoanAdditionalAmount").val();

        var Intrest1 = $("#txtUnsLoanIntrest").val();
        if (LoanAdditionalAmount == "" || LoanAdditionalAmount == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Additional Loan Amount</p>";
            isValid = false;
        }
        if (Intrest1 == "" || Intrest1 == null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate of Interest</p>";
            isValid = false;
        }
    }
    if (LoanTypeIndex == 3) {//return

        var LoanAdditionalAmount1 = $("#txtUnsLoanAdditionalAmount").val();
        if (LoanAdditionalAmount1 === "" || LoanAdditionalAmount1 === null) {
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
        if ($("#chkDedUnIntY").is(':checked') === true) {
            $("#UnloanDeductionTable tbody tr").each(function () {
                var currentRow = $(this);
                var Dca = currentRow.find("td").eq(0).find("select option:selected").index();
                var Sdca = currentRow.find("td").eq(1).find("select option:selected").index();
                var amount = currentRow.find("td").eq(2).find("input[type='text']").val();
                if (Dca !== 0 || Sdca !== 0 || amount !== "") {
                    if (Dca === 0 || Dca === null) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head</p>";
                        isValid = false;
                    }
                    if (Sdca === 0 || Sdca === null) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubAccount Head</p>";
                        isValid = false;
                    }
                    if (amount === "" || amount === null || amount === 0) {
                        errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
                        isValid = false;
                    }
                }
            });
        }
    }
    var Bank = $("#ddl_UnsLoanBank option:selected").index();
    var PayMode = $("#ddl_UnsLoanPayMode  option:selected").index();
    var PayDate = $("#txtUnsLoanPayDate").val();
    var PaymentNo = $("#txtUnsLoanPaymentNo").val();
    var Remarks = $("#txtUnsLoanReamarks").val();

    if (Bank === 0 || Bank === null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        isValid = false;
    }
    if (PayMode === 0 || PayMode === null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay</p>";
        isValid = false;
    }
    if (PayDate === "" || PayDate === null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Date</p>";
        isValid = false;
    }
    if (LoanTypeIndex === 3 && PayMode === 1) {
        var ddlPayNo = $("#ddl_UnsLoanPaymentNo  option:selected").index();
        if (ddlPayNo === 0 || ddlPayNo === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>select  Cheque No</p>";
            isValid = false;
        }

    } else {
        if (PaymentNo === "" || PaymentNo === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Payment No</p>";
            isValid = false;
        }
    }
    if (Remarks === "" || Remarks === null) {
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

        var r = CheckPaymentDateBeforeSubmit();
        if (r === true) {
            SaveNewUnsecuredLoan();
        }
    }

}
function SaveNewUnsecuredLoan() {
    var LoanType = $("#ddl_UnsLoanType option:selected").text();
    var createdby = $("#txtCreatedby").val();
    var newloan = "";
    var deddca = "", sdca = "", dcaamount = 0;
    var payno = 0;
    var paymode = $("#ddl_UnsLoanPayMode  option:selected").index();
    if (paymode === 1) {
        payno = $("#ddl_UnsLoanPaymentNo option:selected").text();
    }
    else {
        payno = $("#txtUnsLoanPaymentNo").val();
    }
    if (LoanType === 'New') {
        newloan = {
            LoanNo: $("#txtUnsLoanNo").val(),
            LoanDate: $("#txtUnsLoanDate").val(),
            Name: $("#txtUnsLoanPersonName").val(),
            LoanAmount: $("#txtUnsLoanAmount").val(),
            BankID: $("#ddl_UnsLoanBank option:selected").val(),
            ModeofPay: $("#ddl_UnsLoanPayMode  option:selected").val(),
            UnsLoanPaymentNo: $("#txtUnsLoanPaymentNo").val(),
            PaymentDate: $("#txtUnsLoanPayDate").val(),
            LoanfinalAmount: $("#txtUnsLoanAmount").val(),
            Remarks: $("#txtUnsLoanReamarks").val(),
            Createdby: createdby,
            LoanType: $("#ddl_UnsLoanType option:selected").text(),
            Roleid: $("#txtULRoleId").val(),
            RateOfIntrest: $("#txtUnsLoanIntrest").val()
        };

    } else if (LoanType === 'Existing') {

        newloan = {
            LoanNo: $("#ddl_UnsLoanNo option:selected").text(),
            LoanDate: $("#txtUnsLoanAdditionalDate").val(),
            Name: $("#txtUnsLoanPersonName").val(),
            LoanAmount: $("#txtUnsLoanAdditionalAmount").val(),
            BankID: $("#ddl_UnsLoanBank option:selected").val(),
            ModeofPay: $("#ddl_UnsLoanPayMode  option:selected").val(),
            UnsLoanPaymentNo: $("#txtUnsLoanPaymentNo").val(),
            PaymentDate: $("#txtUnsLoanPayDate").val(),
            LoanfinalAmount: $("#txtUnsLoanAdditionalAmount").val(),
            Remarks: $("#txtUnsLoanReamarks").val(),
            Createdby: createdby,
            LoanType: $("#ddl_UnsLoanType option:selected").text(),
            Roleid: $("#txtULRoleId").val(),
            RateOfIntrest: $("#txtUnsLoanIntrest").val(),

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

        newloan = {
            LoanNo: $("#ddl_UnsLoanNo option:selected").text(),
            LoanDate: $("#txtUnsLoanAdditionalDate").val(),
            Name: $("#txtUnsLoanPersonName").val(),
            LoanAmount: $("#txtUnsLoanAdditionalAmount").val(),
            BankID: $("#ddl_UnsLoanBank option:selected").val(),
            ModeofPay: $("#ddl_UnsLoanPayMode  option:selected").val(),
            UnsLoanPaymentNo: payno,
            PaymentDate: $("#txtUnsLoanPayDate").val(),
            LoanfinalAmount: $("#txtUnsLoanAdditionalAmount").val(),
            Remarks: $("#txtUnsLoanReamarks").val(),
            Createdby: createdby,
            LoanType: $("#ddl_UnsLoanType option:selected").text(),
            RateOfIntrest: $("#txtUnsLoanIntrest").val(),
            Roleid: $("#txtULRoleId").val(),
            DeductionDCA: deddca,
            DeductionSDCA: sdca,
            DeductionAmount: dcaamount
        };

    }

    addFailMsg = "Error Occurred While Adding  Unsecured Loan.";
    addSuccessMsg = "Unsecured Loan Saved Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/SaveNewUnsecuredLoan',
        data: { newUnsLoan: newloan },
        success: function (Data) {
            // alert("Hi");
            if (Data.saveStatus == "Submitted") {
                $("#btnUnsLoanSubmit").prop('disabled', true);
                $("#divUnsLoanInfoMsg").text(addSuccessMsg);
                $("#divUnsLoanInfoMsg").removeClass("hidden alert-danger");
                $("#divUnsLoanInfoMsg").addClass("alert-success");
            }
            else {
                $("#btnUnsLoanSubmit").prop('disabled', true);
                $("#divUnsLoanInfoMsg").text(Data.saveStatus);
                $("#divUnsLoanInfoMsg").addClass("alert-danger");
                $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");
            }


        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnUnsLoanSubmit").prop('disabled', true);
            $("#divUnsLoanInfoMsg").text(addFailMsg);
            $("#divUnsLoanInfoMsg").addClass("alert-danger");
            $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");

        }
    });
}
function btnResetUnsLoanData() {
    $("#txtMainLoanDate").val("");
    $("#ddl_UnsLoanType").prop('disabled', false);
    $("#btnUnsLoanSubmit").prop('disabled', false);
    $("#divUnsName").addClass('hidden');
    $("#ddl_UnsLoanType").prop('selectedIndex', 0);
    $("#txtUnsLoanNo").val("");
    $("#txtUnsLoanNo").removeClass('hidden');
    $("#ddl_UnsLoanNo").addClass('hidden');
    //$("#txtUnsLoanDate").datepicker("setDate", 'dateToday');
    $("#txtUnsLoanPersonName").val("");
    $("#txtUnsLoanAmount").val("");
    $("#txtUnsLoanIntrest").val("");
    $("#divUnsRateOfInterest").addClass('hidden');

    // $("#txtUnsLoanLedgerName").val("");
    // $("#ddl_UnsLoanSubGroup").prop('selectedIndex', 0);
    // $("#txtUnsLoanBalanceAsOn").val("");
    //$("#txtUnsLoanBalance").val("");
    //$("#UnloanDeductionTable tbody tr").each(function () {
    //    var currentRow = $(this);
    //    currentRow.find("td").eq(0).find("select option:selected").index();
    //    currentRow.find("td").eq(1).find("select option:selected").index();
    //    currentRow.find("td").eq(2).find("input[type='text']").val();

    //});
    $("#ddl_UnsLoanBank").prop('selectedIndex', 0);
    $("#ddl_UnsLoanPayMode").prop('selectedIndex', 0);
    $("#ddl_UnsLoanPaymentNo").addClass('hidden');
    $("#txtUnsLoanPaymentNo").removeClass('hidden');

    //$("#txtUnsLoanPayDate").datepicker("option","minDate", 'dateToday');
    $("#txtUnsLoanPaymentNo").val("");
    $("#txtUnsLoanReamarks").val("");
    $("#txtUnsLoanFinalAmount").val("");

    //$("#txtUnsLoanPayDate").datepicker("setDate", 'dateToday');
    $("#rbDebit").prop("checked", false);
    $("#rbCredit").prop("checked", true);

    $("#txtUnsLoanAdditionalDate").prop('readOnly', false);
    $("#txtUnsLoanPersonName").prop('readOnly', false);
    $("#ddl_UnsLoanNo").prop('disabled', false);
    $("#ddl_UnsLoanType").prop('disabled', false);
    $("#AdditionalTotal").val(0);
    $("#TotalLoanAmount").val("");
    //hide ledger
    //$("#hrledger").addClass("hidden");
    //$("#divLedger").addClass("hidden");


    //error msg divs
    $("#divUnsLoanInfoMsg").text("");
    $("#divUnsLoanInfoMsg").addClass("hidden");

    //hide all divs except loan type
    //$("#hrledger").addClass('hidden');
    //$("#divLedger").addClass('hidden');
    $("#divUnsPayment").addClass('hidden');
    $("#divLoanNo").addClass('hidden');
    $("#hrPayment").addClass('hidden');
    $("#divLoanDate").addClass('hidden');
    $("#divAdditionalLoanDate").addClass('hidden');
    $("#divAmount").addClass('hidden');
    //Deduction
    //$("#DeductionExist").val(0);
    $("#divUnsDeduction").addClass('hidden');
    $("#UnloanDeductionTable tbody tr").each(function () {
        var currentRow = $(this);
        var ddlDCA = currentRow.find('.loandca'); // get the other select in the same row
        var ddlSubDCA = currentRow.find('.loansdca'); // get the other select in the same row
        var amount = currentRow.find('.DcaAmount');
        ddlSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        amount.val("");

    });
    $("#chkDedUnIntY").prop("checked", false);
    $("#chkDedUnIntN").prop("checked", true);
    $("#divUnsDeductionGrid").addClass("hidden");
    //Mode of Payment
    var ddlPayNode = $("#ddl_UnsLoanPayMode");
    ddlPayNode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    ddlPayNode.append($("<option></option>").val("RTGS/E-Trans").html("RTGS/E-Trans"));
    ddlPayNode.append($("<option></option>").val("DD").html("DD"));
    //cheque no dropdown
    var ddlChequeNo = $("#ddl_UnsLoanPaymentNo");
    ddlChequeNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    ddlChequeNo.addClass('hidden');
    $("#txtUnsLoanPaymentNo").removeClass('hidden');

    $("#divUnsLoanInfoMsg").text("");
    $("#divUnsLoanInfoMsg").addClass("hidden");
}
function CountFinalAmount() {

    var final = $("#txtUnsLoanFinalAmount");
    var LoanAmount = $("#txtUnsLoanAmount").val();
    var LoanTypeIndex = $("#ddl_UnsLoanType option:selected").index();
    if (LoanTypeIndex == 1) {
        if (LoanAmount != "") {
            var total = parseFloat(LoanAmount);
            final.val(total);
        }
        else { final.val(0) }
    }
}
function CountAdditionalLoanFinalAmount() {
    var loantypeindex = $("#ddl_UnsLoanType option:selected").index();
    var Dedtotal = 0;
    if (loantypeindex == 2) {
        //var final = $("#AdditionalTotal").val();
        var AdditionalAmount = $("#txtUnsLoanAdditionalAmount").val();
        //var total = 0;
        if (AdditionalAmount !== "") {
            // total = parseFloat(final) - parseFloat(AdditionalAmount);
            $("#txtUnsLoanFinalAmount").val(parseFloat(AdditionalAmount));
        }
        else { $("#txtUnsLoanFinalAmount").val(0); }
    }
    if (loantypeindex === 3) {
        var amount = $("#txtUnsLoanAdditionalAmount").val();
        var total = 0;
        if (!isNaN(amount)) {
            if ($("#chkDedUnIntY").is(':checked') === true) {
                $("#UnloanDeductionTable tbody tr").each(function () {
                    var currentRow = $(this);
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
                    $("#txtUnsLoanFinalAmount").val(parseFloat(total).toFixed(2));
                    $("#divUnsLoanInfoMsg").text("");
                    $("#divUnsLoanInfoMsg").addClass("hidden");
                }
            }
            else {

                $("#txtUnsLoanFinalAmount").val(parseFloat(amount).toFixed(2));
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
        var newamount = $("#txtUnsLoanAmount").val();
        if (newamount !== "") { $("#txtUnsLoanFinalAmount").val(parseFloat(newamount).toFixed(2)); }
        else { $("#txtUpUnsLoanFinalAmount").val(""); }
    }
}
function UnsLoanPayModeChange() {
    var loantypeindex = $("#ddl_UnsLoanType option:selected").index();
    if (loantypeindex == 3) {
        var bank = $("#ddl_UnsLoanBank option:selected").text();
        var Mode = $("#ddl_UnsLoanPayMode option:selected").text();

        var bankindex = $("#ddl_UnsLoanBank option:selected").index();
        var Modeindex = $("#ddl_UnsLoanPayMode option:selected").index();

        if (Modeindex != 0 && bankindex != 0) {
            if (Modeindex == 1) {

                $("#ddl_UnsLoanPaymentNo").removeClass('hidden');
                $("#txtUnsLoanPaymentNo").addClass('hidden');
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
                        var ddl_UnsLoanPaymentNo = $("#ddl_UnsLoanPaymentNo");
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
                $("#txtUnsLoanPaymentNo").removeClass('hidden');
                $("#ddl_UnsLoanPaymentNo").addClass('hidden');
                $("#divUnsLoanInfoMsg").text("");
                $("#divUnsLoanInfoMsg").addClass("hidden");

            }
        }
        else if (Modeindex == 0 && bankindex != 0) {
            $("#txtUnsLoanPaymentNo").removeClass('hidden');
            $("#ddl_UnsLoanPaymentNo").addClass('hidden');
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");


        }
        else if (Modeindex != 0 && bankindex == 0) {
            $("#txtUnsLoanPaymentNo").removeClass('hidden');
            $("#ddl_UnsLoanPaymentNo").addClass('hidden');

            $("#divUnsLoanInfoMsg").text("Select Bank Name");
            $("#divUnsLoanInfoMsg").addClass("alert-danger");
            $("#divUnsLoanInfoMsg").removeClass("hidden alert-success");
            $("#divUnsLoanInfoMsg").prop('selectedIndex', 0);
        }
        else {
            $("#txtUnsLoanPaymentNo").removeClass('hidden');
            $("#ddl_UnsLoanPaymentNo").addClass('hidden');
            $("#divUnsLoanInfoMsg").text("");
            $("#divUnsLoanInfoMsg").addClass("hidden");

        }


    }
    else {

        $("#ddl_UnsLoanPaymentNo").addClass('hidden');
        $("#txtUnsLoanPaymentNo").removeClass('hidden');
    }


}
function CountReturnTotal() {
    var loantypeindex = $("#ddl_UnsLoanType option:selected").index();
    if (loantypeindex == 3) {
        var amount = $("#txtUnsLoanAdditionalAmount").val();
        var total = 0;
        $("#DeductionTable tbody tr").each(function () {
            var currentRow = $(this);
            Dedtotal = currentRow.find("td").eq(2).find("input[type='text']").val();
            if (amount != "" && Dedtotal != "") {
                if (parseFloat(amount) >= parseFloat(Dedtotal)) {
                    total = parseFloat(amount) - parseFloat(Dedtotal);
                }
                else { total = parseFloat(amount); }
            }
            else if (amount != "" && Dedtotal == "") {
                total = parseFloat(amount);
            }
            else if (amount == "" && Dedtotal != "") {
                total = 0;
            }
            if (total != 0) { $("#txtUnsLoanFinalAmount").val(total); }
            else { $("#txtUnsLoanFinalAmount").val(0); }
            // alert(total);

        });
    }

}
function showDeductionTable() {
    $("#btnshowDeductionTable").addClass('hidden');
    $("#btnRemoveDeductionTable").removeClass('hidden');
    $("#divDeductiontable").removeClass('hidden');
    $("#DeductionTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(0).find("select").prop('selectedIndex', 0);
        var ddlSDCA = currentRow.find("td").eq(1).find("select");
        //var ddlPayNode = $("#ddl_UnsLoanPayMode");
        ddlSDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        currentRow.find("td").eq(2).find("input[type='text']").val("");
    });
    // $("#DeductionExist").val(1);

}
function hideDeductionTable() {
    $("#btnshowDeductionTable").removeClass('hidden');
    $("#btnRemoveDeductionTable").addClass('hidden');
    $("#divDeductiontable").addClass('hidden');
    //$("#DeductionExist").val(0);
}
/* Scripts for Deposit*/
function TransferCCChange() {
    var transferto = $("#ddl_TransToCC option:selected").index();
    if (transferto != 0) {
        var CC = $("#ddl_TransToCC option:selected").val();
        $("#txtCCAmount").val("0");
        $.ajax({
            type: "POST",
            url: "/Accounts/GetCCAmount",
            data: '{CC:"' + CC + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $.each(response, function () {
                    $("#txtCCAmount").val(this['CCAmount']);
                    $("#divTranferDetails").removeClass('hidden');
                    $("#divTransferInfoMsg").text("");
                    $("#divTransferInfoMsg").addClass("hidden");
                    $("#divTransferCCAmount").removeClass('hidden');

                });
            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
    else {
        $("#txtCCAmount").val("0");
        CancelTransfer();

    }
}

function AmountValidatedeposit() {
    var ccamount = $("#txtCCAmount").val();
    var Depositamt = $("#txtTransAmount").val();
    if (ccamount == "0") {
        $("#divTransferInfoMsg").text("Invalid Attempt");
        $("#divTransferInfoMsg").removeClass("hidden");
        $("#txtTransAmount").val("");
    }
    else if (parseFloat(Depositamt) > parseFloat(ccamount)) {
        $("#divTransferInfoMsg").text("Invalid Attempt");
        $("#divTransferInfoMsg").removeClass("hidden");
        $("#txtTransAmount").val("");
    }
    else {
        $("#divTransferInfoMsg").text("");
        $("#divTransferInfoMsg").addClass("hidden");
    }
}
function CancelTransfer() {
    $("#divTranferDetails").addClass('hidden');
    $("#ddl_TransToCC").prop('selectedIndex', 0);
    $("#txtCCAmount").val("");
    $("#txtTransAmount").val("");
    $("#ddl_TransToBank").prop('selectedIndex', 0);
    $("#txtTransferDate").datepicker("setDate", 'dateToday');
    $("#txtTransferDesc").val("");
    $("#divTransferInfoMsg").text("");
    $("#divTransferInfoMsg").addClass("hidden");
    $("#divTransferCCAmount").addClass('hidden');
}
function TransferSubmitData() {
    var errorMsg = "";
    isValid = true;
    var CC = $("#ddl_TransToCC option:selected").index();
    var Bank = $("#ddl_TransToBank option:selected").index();
    var Date = $("#txtTransferDate").val();
    var Desc = $("#txtTransferDesc").val();
    var Amount = $("#txtTransAmount").val();
    if (CC == 0 || CC == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select CostCenter</p>";
        isValid = false;
    }
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
        $("#divTransferInfoMsg").text("");
        $("#divTransferInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divTransferInfoMsg").addClass("alert-danger");
        $("#divTransferInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divTransferInfoMsg").text("");
        $("#divTransferInfoMsg").addClass("hidden");
        //submit data to db
        AddCCBanktransferDetails();
    }

}

function AddCCBanktransferDetails() {

    var cccashpaymentdetails = {
        Transfer_Cost_Center: $("#ddl_TransToCC option:selected").val(),
        CC_Amount: $("#txtCCAmount").val(),
        Transfer_Bank: $("#ddl_TransToBank option:selected").val(),
        Transfer_Date: $("#txtTransferDate").val(),
        Transfer_Amount: $("#txtTransAmount").val(),
        RoleID: $("#txtdepositRoleId").val(),
        Description: $("#txtTransferDesc").val()
    };

    addFailMsg = "Error Occurred Transfer CC Payment.";
    addSuccessMsg = "CC Payment Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/NewSaveCCCashbankdepositDetails',
        data: { newCCCashbankdepositDetails: cccashpaymentdetails },
        success: function (Data) {
            if (Data.saveStatus == "Successfull") {
                $("#divTransferInfoMsg").text(Data.saveStatus);
                $("#divTransferInfoMsg").removeClass("hidden alert-danger");
                $("#divTransferInfoMsg").addClass("alert-success");
                $("#btndepositSubmit").prop("disabled", true);

            }
            else {
                $("#divTransferInfoMsg").text(Data.saveStatus);
                $("#divTransferInfoMsg").addClass("alert-danger");
                $("#divTransferInfoMsg").removeClass("hidden alert-success");
                $("#btndepositSubmit").prop("disabled", false);

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divTransferInfoMsg").text(addFailMsg);
            $("#divTransferInfoMsg").addClass("alert-danger");
            $("#divTransferInfoMsg").removeClass("hidden alert-success");
            $("#btndepositSubmit").prop("disabled", false);

        }
    });

}
function CancelTransferData() {
    $("#divTranferDetails").addClass('hidden');
    $("#ddl_TransToCC").prop('selectedIndex', 0);
    $("#txtCCAmount").val("");
    $("#txtTransAmount").val("");
    $("#ddl_TransToBank").prop('selectedIndex', 0);
    $("#txtTransferDate").datepicker("setDate", 'dateToday');
    $("#txtTransferDesc").val("");
    $("#divTransferInfoMsg").text("");
    $("#divTransferInfoMsg").addClass("hidden");
    $("#divTransferCCAmount").addClass('hidden');
    $("#btndepositSubmit").prop("disabled", false);
    //CancelTransfer();
}
/* Scripts for General Payable */

function GeneralPayCCChange() {

    var CCindex = $("#ddlGpCCCode option:selected").index();
    var ccode = $("#ddlGpCCCode option:selected").val();
    //var paymodeIndex = $("#ddl_GPPayMode option:selected").index();
    if (CCindex == 0) {
        $("#divGPPaymentDetails").addClass("hidden");
        $("#divgpdca").addClass("hidden");
        $("#divgpsdca").addClass("hidden");
        $("#divGeneralPayInfoMsg").text("");
        $("#divGeneralPayInfoMsg").addClass("hidden");
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetDCAByCC",
            data: '{CCCode:"' + ccode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlGpDcaCode = $("#ddlGpDcaCode");
                ddlGpDcaCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlGpDcaCode.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                });
                $("#divGPPaymentDetails").addClass("hidden");
                $("#divgpdca").removeClass("hidden");
                $("#divgpsdca").addClass("hidden");
                $("#divGeneralPayInfoMsg").text("");
                $("#divGeneralPayInfoMsg").addClass("hidden");

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }


}
function GeneralPayDcaChange() {

    var dcaindex = $("#ddlGpDcaCode option:selected").index();
    var dca = $("#ddlGpDcaCode option:selected").val();
    //var paymodeIndex = $("#ddl_GPPayMode option:selected").index();
    if (dcaindex == 0) {
        $("#divGPPaymentDetails").addClass("hidden");
        $("#divgpsdca").addClass("hidden");
        $("#divGeneralPayInfoMsg").text("");
        $("#divGeneralPayInfoMsg").addClass("hidden");
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetSubDCAbyDCA",
            data: '{DCACode:"' + dca + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlGpSDcaCode = $("#ddlGpSDcaCode");
                ddlGpSDcaCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlGpSDcaCode.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });
                $("#divGPPaymentDetails").addClass("hidden");
                $("#divgpsdca").removeClass("hidden");

                $("#divGeneralPayInfoMsg").text("");
                $("#divGeneralPayInfoMsg").addClass("hidden");

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }


}

function GeneralPaySDcaChange() {
    var sdcaindex = $("#ddlGpSDcaCode option:selected").index();
    //var sdca = $("#ddlGpSDcaCode option:selected").val();    
    if (sdcaindex == 0) {
        $("#divGPPaymentDetails").addClass("hidden");
    }
    else {
        $("#divGPPaymentDetails").removeClass("hidden");
    }
}
function GPPayModeChange() {

    var bank = $("#ddlGPBank option:selected").text();
    var Mode = $("#ddlGPPayMode option:selected").text();

    var bankindex = $("#ddlGPBank option:selected").index();
    var Modeindex = $("#ddlGPPayMode option:selected").index();

    if (Modeindex != 0 && bankindex != 0) {
        if (Modeindex == 1) {
            $("#txtGPPaymentNo").addClass('hidden');
            $("#ddlGPPaymentNo").removeClass('hidden');
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
                    var ddlGPPaymentNo = $("#ddlGPPaymentNo");
                    if (count > 0) {

                        ddlGPPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            ddlGPPaymentNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                        });
                        $("#divGeneralPayInfoMsg").text("");
                        $("#divGeneralPayInfoMsg").addClass("hidden");
                    } else { ddlGPPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>'); }

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        }
        else {
            $("#txtGPPaymentNo").removeClass('hidden');
            $("#ddlGPPaymentNo").addClass('hidden');
            $("#divGeneralPayInfoMsg").text("");
            $("#divGeneralPayInfoMsg").addClass("hidden");
        }
    }
    else if (Modeindex == 0 && bankindex != 0) {
        $("#txtGPPaymentNo").removeClass('hidden');
        $("#ddlGPPaymentNo").addClass('hidden');
        $("#divGeneralPayInfoMsg").text("");
        $("#divGeneralPayInfoMsg").addClass("hidden");

    }
    else if (Modeindex != 0 && bankindex == 0) {
        $("#txtGPPaymentNo").removeClass('hidden');
        $("#ddlGPPaymentNo").addClass('hidden');

        $("#divGeneralPayInfoMsg").text("Select Bank Name");
        $("#divGeneralPayInfoMsg").addClass("alert-danger");
        $("#divGeneralPayInfoMsg").removeClass("hidden alert-success");
        $("#divGeneralPayInfoMsg").prop('selectedIndex', 0);
    }
    else {
        $("#txtGPPaymentNo").removeClass('hidden');
        $("#ddlGPPaymentNo").addClass('hidden');
        $("#divGeneralPayInfoMsg").text("");
        $("#divGeneralPayInfoMsg").addClass("hidden");

    }
}
function SubmitGeneralPayableData() {

    var errorMsg = "";
    isValid = true;
    var CCindex = $("#ddlGpCCCode option:selected").index();
    var Dcaindex = $("#ddlGpDcaCode option:selected").index();
    var Sdcaindex = $("#ddlGpSDcaCode option:selected").index();
    var name = $("#txtGPName").val();
    var bank = $("#ddlGPBank option:selected").index();
    var paymode = $("#ddlGPPayMode option:selected").index();
    var date = $("#txtGPPayDate").val();
    var Remarks = $("#txtGPReamarks").val();
    var amount = $("#txtGPFinalAmount").val();
    if (CCindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select CCCode</p>";
        isValid = false;
    }
    if (Dcaindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select  DCA Code</p>";
        isValid = false;
    }
    if (Sdcaindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select SDca</p>";
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
        if (payno === "" || payno === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Payment No</p>";
            isValid = false;
        }
    }
    if (paymode === 1) {
        var payno1 = $("#ddlGPPaymentNo option:selected").index();
        if (payno1 === 0 || payno1 === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Payment No</p>";
            isValid = false;
        }
    }
    if (date === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Transaction Date</p>";
        isValid = false;
    }
    if (Remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (amount == "" || amount == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Transaction Amount</p>";
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
        SaveGeneralPayment();
    }

}


function SaveGeneralPayment() {

    var createdby = $("#txtCreatedby").val();
    var name = $("#txtGPName").val();
    var bank = $("#ddlGPBank option:selected").index();
    var paymode = $("#ddlGPPayMode option:selected").index();
    var date = $("#txtGPPayDate").val();
    var Remarks = $("#txtGPReamarks").val();
    var amount = $("#txtGPFinalAmount").val();
    //submit data to db
    var number = 0;
    if (paymode === 1) { number = $("#ddlGPPaymentNo option:selected").text(); }
    else { number = $("#txtGPPaymentNo").val(); }
    var genPaydetails = {
        CCCode: $("#ddlGpCCCode option:selected").val(),
        DCACode: $("#ddlGpDcaCode option:selected").val(),
        SubDcaCode: $("#ddlGpSDcaCode option:selected").val(),
        Name: name,
        BankId: $("#ddlGPBank option:selected").val(),
        ModeofPay: $("#ddlGPPayMode option:selected").text(),
        Number: number,
        TransactionDate: date,
        TransactionAmount: amount,
        Remarks: Remarks,
        Createdby: createdby,
        Roleid: $("#txtGeneralRoleId").val(),
        Action: 'New'
    };
    addFailMsg = "Error Occurred While Adding General Payment.";
    addSuccessMsg = "General Payment Saved Successfully.";
    $.ajax({
        type: "POST",
        url: "/Accounts/SaveGeneralPayment",
        data: JSON.stringify({ generalPay: genPaydetails }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (Data) {
            if (Data.saveStatus === "Submitted") {
                $("#divGeneralPayInfoMsg").text(addSuccessMsg);
                $("#divGeneralPayInfoMsg").removeClass("hidden alert-danger");
                $("#divGeneralPayInfoMsg").addClass("alert-success");

            }
            else {
                $("#divGeneralPayInfoMsg").text(Data.saveStatus);
                $("#divGeneralPayInfoMsg").addClass("alert-danger");
                $("#divGeneralPayInfoMsg").removeClass("hidden alert-success");

            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divGeneralPayInfoMsg").text(addFailMsg);
            $("#divGeneralPayInfoMsg").addClass("alert-danger");
            $("#divGeneralPayInfoMsg").removeClass("hidden alert-success");

        }
    });

    //$.ajax({
    //    type: 'POST',
    //    dataType: 'json',
    //    url: '/Accounts/SaveGeneralPayment',       
    //    data: JSON.stringify({ generalPay: genPaydetails }),
    //    success: function (Data) {          
    //        if (Data.saveStatus == "Submitted") {
    //            $("#divGeneralPayInfoMsg").text(addSuccessMsg);
    //            $("#divGeneralPayInfoMsg").removeClass("hidden alert-danger");
    //            $("#divGeneralPayInfoMsg").addClass("alert-success");
    //        }
    //        else {
    //            $("#divGeneralPayInfoMsg").text(addFailMsg);
    //            $("#divGeneralPayInfoMsg").addClass("alert-danger");
    //            $("#divGeneralPayInfoMsg").removeClass("hidden alert-success");
    //        }

    //    },
    //    error: function (XMLHttpRequest, textStatus, errorThrown) {
    //        $("#divGeneralPayInfoMsg").text(addFailMsg);
    //        $("#divGeneralPayInfoMsg").addClass("alert-danger");
    //        $("#divGeneralPayInfoMsg").removeClass("hidden alert-success");
    //    }
    //});

}
function ResetGeneralPayableData() {

    $("#divGPPaymentDetails").addClass('hidden');
    $("#divgpdca").addClass('hidden');
    $("#divgpsdca").addClass('hidden');

    $("#txtGPName").val("");
    $("#ddlGPBank").prop('selectedIndex', 0);
    $("#ddlGPPayMode").prop('selectedIndex', 0);
    $("#txtGPPaymentNo").val("");
    $("#ddlGPPaymentNo").prop('selectedIndex', 0);
    $("#txtGPPaymentNo").removeClass('hidden');
    $("#ddlGPPaymentNo").addClass('hidden');
    $("#txtGPPayDate").datepicker("setDate", 'dateToday');
    $("#txtGPFinalAmount").val("");
    $("#txtGPReamarks").val("");
    $("#ddl_InvNo").prop('disabled', false);
    $("#divGPCCTable").addClass('hidden');
    $("#divGPPayment").addClass('hidden');
    //error div
    $("#divGeneralPayInfoMsg").text("");
    $("#divGeneralPayInfoMsg").addClass("hidden");

    var ddlGPPaymentNo = $("#ddlGPPaymentNo");
    ddlGPPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    var ddlGpCCCode = $("#ddlGpCCCode");
    ddlGpCCCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    var ddlGpDcaCode = $("#ddlGpDcaCode");
    ddlGpDcaCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    var ddlGpSDcaCode = $("#ddlGpSDcaCode");
    ddlGpSDcaCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    $.ajax({
        type: "POST",
        url: "/Accounts/BindClientRec_AllCccodes",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddlGpCCCode = $("#ddlGpCCCode");
            ddlGpCCCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddlGpCCCode.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
            });
            $("#divGPCCTable").removeClass("hidden");
            $("#ddlGPPaymentNo").addClass("hidden");
            $("#divGPPaymentDetails").addClass("hidden");
            $("#divgpdca").addClass("hidden");
            $("#divgpsdca").addClass("hidden");

        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });


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

//client po and amend validation starts

function btnSubmiNewPOData() {
    var CC = $("#CostCenterddl option:selected").index();
    var Clientid = $("#ddlclient option:selected").index();
    var SubClientid = $("#ddlsubclient option:selected").index();
    var PONo = $("#txtpono").val();
    var startDate = $("#txtpostartdate").val();
    var endDate = $("#txtpocompletiondate").val();
    var PoValue = $("#txtpovalue").val();
    //var exciseduty = $("#txtexduty").val();
    var GST = $("#txtgst").val();
    var total = $("#txttotal").val();
    var mobAdvance = $("#ddlmobadv option:selected").index();
    var RaBill = $("#txtrabill").val();
    var DuesOfRa = $("#txtrabilldues").val();
    var AdvSettle = $("#txtadvsettelment").val();

    var errorMsg = "";
    isValid = true;
    if (CC == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center </p>";
        isValid = false;
    }
    if (Clientid == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Client ID </p>";
        isValid = false;
    }
    if (SubClientid == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub-Client ID </p>";
        isValid = false;
    }
    if (PONo == "" || PONo == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter PO No</p>";
        isValid = false;
    }
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
    //if (exciseduty == "" || exciseduty == null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Excise Value</p>";
    //    isValid = false;
    //}
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
        SaveNewclientPO();
        //submit data to db
    }
}
function SaveNewclientPO() {
    var mobilize = $("#ddlmobadv option:selected").index();
    var madv;
    if (mobilize == 1) {
        madv = true;
    }
    else if (mobilize == 2) {
        madv = false;
    }
    //////debugger;
    var newPO = {
        pono: $("#txtpono").val(),
        postartdate: $("#txtpostartdate").val(),
        pocompletiondate: $("#txtpocompletiondate").val(),
        total: $("#txttotal").val(),
        povalue: $("#txtpovalue").val(),
        gst: $("#txtgst").val(),
        clientid: $("#ddlclient option:selected").val(),
        subclientid: $("#ddlsubclient option:selected").val(),
        Madvance: madv,
        rabill: $("#txtrabill").val(),
        rabilldues: $("#txtrabilldues").val(),
        advancesettelment: $("#txtadvsettelment").val(),
        CostCenter: $("#CostCenterddl option:selected").val(),
        Createdby: $("#txtPOCreatedby").val(),
        Action: 'New'
    };
    addFailMsg = "Error Occurred While Adding Amend PO.";
    addSuccessMsg = "PO Details Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/SavePO',
        data: { clientPo: newPO },
        success: function (Data) {
            if (Data.saveStatus == true) {
                $("#divpoInfoMsg").text(addSuccessMsg);
                $("#divpoInfoMsg").removeClass("hidden alert-danger");
                $("#divpoInfoMsg").addClass("alert-success");
                $("#btnClientPOSubmit").prop("disabled", true);
            }
            else {
                $("#divpoInfoMsg").text(addFailMsg);
                $("#divpoInfoMsg").addClass("alert-danger");
                $("#divpoInfoMsg").removeClass("hidden alert-success");
                $("#btnClientPOSubmit").prop("disabled", false);
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divpoInfoMsg").text(addFailMsg);
            $("#divpoInfoMsg").addClass("alert-danger");
            $("#divpoInfoMsg").removeClass("hidden alert-success");

        }
    });
}
function ClientPOChange() {
    //////debugger;
    var client = $("#ddlclient option:selected").val();
    $.ajax({
        type: "POST",
        url: "/Accounts/GetSubClientsbyClientID",
        data: '{clientcode:"' + client + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddlsubclient = $("#ddlsubclient");
            ddlsubclient.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddlsubclient.append($("<option></option>").val(this['SubClientCode']).html(this['SubClientCodename']));
            });

        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });


}

function Checkmovadv() {
    var mobilize = $("#ddlmobadv option:selected").index();
    var madv;
    if (mobilize == 1) {
        $("#divAdvSettle").removeClass('hidden');
    }
    else {
        $("#divAdvSettle").addClass('hidden');
    }

}


function CalculateTotal() {
    total = 0;
    var PoValue = $("#txtpovalue").val();
    //var exciseduty = $("#txtexduty").val();
    var GST = $("#txtgst").val();
    if (PoValue == "" && PoValue == 0) {
        PoValue = 0;
    }
    //if (exciseduty == "" && exciseduty == 0) {
    //    exciseduty = 0;
    //}
    if (GST == "" && GST == 0) {
        GST = 0;
    }
    total = eval((parseFloat(PoValue) + parseFloat(GST)));
    $("#txttotal").val(total);
}
function btnCCviewData() {
    $("#divopencc").hide();
    $("#divclosecc").show();
    $("#divViewCCDetails").show();
    var cc = $("#CostCenterddl option:selected").val();
    if (cc === null || cc === "") {
        $("#divopencc").hide();
        $("#divclosecc").hide();
        alert("Select CostCenter");
        return false;
    }
    else {
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: '/Accounts/viewcostcenter',
            data: { CCcode: cc },
            success: function (Data) {
                $("#divViewCCDetails").html(Data);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

}
function btnCCcloseData() {
    $("#divopencc").show();
    $("#divclosecc").hide();
    $("#divViewCCDetails").hide();
}
function btnCCviewDataamend() {
    $("#divopenamendcc").hide();
    $("#divcloseamendcc").show();
    $("#divViewamendCCDetails").show();
    $("#btncloseamendcc").removeClass('hidden');
    $("#btnopenamendcc").addClass('hidden');
    var cc = $("#AmendCostCenterddl option:selected").val();
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/Accounts/viewcostcenter',
        data: { CCcode: cc },
        success: function (Data) {
            $("#divViewamendCCDetails").html(Data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });

}
function btnCCcloseDataamend() {
    $("#divopenamendcc").show();
    //$("#btncloseamendcc").addClass('hidden');
    //$("#btnopenamendcc").removeClass('hidden');
    $("#divcloseamendcc").hide();
    $("#divViewamendCCDetails").hide();
}

//$("#txtamendpocompletiondate").datepicker({
//    dateFormat: 'dd-M-yy',
//    changeMonth: true,
//    changeYear: true,
//    showOn: "button",
//    minDate: 'dateToday',
//    buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",
//    onClose: function (selectedDate) {
//    }
//}).datepicker("setDate", new Date());

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

function AmendPOCostCenterChange() {
    //////debugger;
    var cc = $("#AmendCostCenterddl option:selected").val();

    $.ajax({
        type: "POST",
        url: "/Accounts/GetPobyCC",
        data: '{CCcode:"' + cc + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddlamendpo = $("#ddlamendpo");
            ddlamendpo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddlamendpo.append($("<option></option>").val(this['ClientPOId']).html(this['PONumber']));
            });
            if ($("#AmendCostCenterddl option:selected").index != 0) {
                $("#divopenamendcc").show();
                $("#btnopenamendcc").removeClass('hidden');
                $("#btncloseamendcc").addClass('hidden');
            }
            else {
                $("#divopenamendcc").hide();
                $("#btnopenamendcc").addClass('hidden');
                $("#btncloseamendcc").addClass('hidden');
            }


        },
        failure: function (response) {


        },
        error: function (response) {


        }
    });

}
function ClientamendPOSubmit() {
    //alert("TEST");
    var CC = $("#AmendCostCenterddl option:selected").val();
    var amendpo = $("#ddlamendpo option:selected").index();
    var AmendPONo = $("#txtamendpono").val();
    var Date = $("#txtamendpocompletiondate").val();
    var amendpovalue = $("#txtamendpovalue").val();
    //var excisevalue = $("#txtamendexcisevalue").val();
    var gstvalue = $("#txtamendgst").val();
    var totalamendvalue = $("#txttotalamendvalue").val();
    //var revisepovalue = $("#txtrevisedpovalue").val();

    var errorMsg = "";
    isValid = true;
    if (CC == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center </p>";
        isValid = false;
    }
    if (amendpo == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select PO No </p>";
        isValid = false;
    }
    if (AmendPONo == "" || AmendPONo == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amend PO No</p>";
        isValid = false;
    }
    if (Date == "" || Date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Completion Date</p>";
        isValid = false;
    }
    if (amendpovalue == "" || amendpovalue == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amend PO Value</p>";
        isValid = false;
    }
    //if (excisevalue == "" || excisevalue == null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Excise Value</p>";
    //    isValid = false;
    //}
    if (gstvalue == "" || gstvalue == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter GST Value</p>";
        isValid = false;
    }
    if (totalamendvalue == 0 || totalamendvalue == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Total Amend Value</p>";
        isValid = false;
    }
    //if (revisepovalue == "0" || revisepovalue == null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Invalid Revise PO Value</p>";
    //    isValid = false;
    //}
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

        SubmitAmendPO();
    }
}

function SubmitAmendPO() {

    var addAmendPO = {
        oldPONO: $("#ddlamendpo option:selected").text(),
        amendpocompletiondate: $("#txtamendpocompletiondate").val(),
        Amendpono: $("#txtamendpono").val(),
        Amendpovalue: $("#txtamendpovalue").val(),
        Amendtotalvalue: $("#txttotalamendvalue").val(),
        Amendegst: $("#txtamendgst").val(),
        Action: 'New',
        Createdby: $("#txtPOCreatedby").val()

    };
    addFailMsg = "Error Occurred While Adding Amend PO.";
    addSuccessMsg = "Amend PO Details Added Successfully.";
    //alert('submit');

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/SaveAmendPO',
        data: { clientPo: addAmendPO },
        success: function (Data) {
            // alert("Hi");
            if (Data.saveStatus == true) {
                $("#divamendpoInfoMsg").text(addSuccessMsg);
                $("#divamendpoInfoMsg").removeClass("hidden alert-danger");
                $("#divamendpoInfoMsg").addClass("alert-success");
                $("#btnClientamendPOSubmit").prop('disabled', true);
            }
            else {
                $("#divamendpoInfoMsg").text(addFailMsg);
                $("#divamendpoInfoMsg").addClass("alert-danger");
                $("#divamendpoInfoMsg").removeClass("hidden alert-success");
                $("#btnClientamendPOSubmit").prop('disabled', true);
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divamendpoInfoMsg").text(addFailMsg);
            $("#divamendpoInfoMsg").addClass("alert-danger");
            $("#divamendpoInfoMsg").removeClass("hidden alert-success");

        }
    });

}
//client po validation Ends

//General Invoice Validation Starts
function btnSubmitGeneralInvoiceCreation() {
    var CCtype = $("#ddlcctype option:selected").index();
    var CCsubtype = $("#ddlccsubtype option:selected").index();
    var Date = $("#txtinvoicedate").val();
    var CCCode = $("#ddlcostcenter option:selected").index();
    var Dca = $("#ddldcacode option:selected").index();
    var Subdca = $("#ddlsubdcacode option:selected").index();
    var taxnos = $("#ddltaxnos option:selected").index();
    var paymentmode = $("#ddlmodeofpay option:selected").index();
    var remarks = $("#txtremarks").val();
    var Invoiceamount = $("#txtinvoiceamt").val();
    var errorMsg = "";
    isValid = true;
    if (CCtype == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center Type </p>";
        isValid = false;
    }
    if (CCsubtype == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center Sub-Type </p>";
        isValid = false;
    }
    if (Date == "" || Date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
        isValid = false;
    }
    if (CCCode == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
        isValid = false;
    }
    if (Dca == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select DCA </p>";
        isValid = false;
    }
    if (Subdca == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub-Dca </p>";
        isValid = false;
    }
    if (taxnos == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Tax No </p>";
        isValid = false;
    }
    if (paymentmode == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Payment Mode </p>";
        isValid = false;
    }
    if (remarks == "" || remarks == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (Invoiceamount == "0" || Invoiceamount == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Invoice Amount</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divGeneralInvoiceCreationInfoMsg").text("");
        $("#divGeneralInvoiceCreationInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divGeneralInvoiceCreationInfoMsg").addClass("alert-danger");
        $("#divGeneralInvoiceCreationInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divGeneralInvoiceCreationInfoMsg").text("");
        $("#divGeneralInvoiceCreationInfoMsg").addClass("hidden");
    }
}
//General Invoice Validation Ends
//script for REFUND Starts
function showRefundIntrestTable() {
    $("#divIntrestTable").removeClass("hidden");
    $("#btnshowIntrestTable").addClass("hidden");
    $("#btnRemoveIntrestTable").removeClass("hidden");
    //$("#txtIntrestExist").val(1);

    //alert("Misc Show");
}
function hideRefundIntrestTable() {
    $("#btnRemoveIntrestTable").addClass("hidden");
    $("#btnshowIntrestTable").removeClass("hidden");
    $("#divIntrestTable").addClass("hidden");
    //   $("#txtIntrestExist").val(0);
    clearInterestTable();
    CountMiscTotal();

    // alert("Misc Hide");
}
//function btnSubmitTaxes() {
//    var txtname = $("#txttaxname").val();
//    var dcacode = $("#ddldcacode option:selected").index();
//    var subdcacode = $("#ddlsubdca option:selected").index();
//    var txttaxno = $("#txttaxno").val();
//    var txtdescription = $("#txtdescription").val();
//    isValid = true;
//    var errorMsg = "";
//    if (txtname == "" || txtname == null) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Name</p>";
//        isValid = false;
//    }
//    if (dcacode == 0 || dcacode == null) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Select Dca Code</p>";
//        isValid = false;
//    }
//    if (subdcacode == 0 || subdcacode == null) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub-Dca Code</p>";
//        isValid = false;
//    }
//    if (txttaxno == "" || txttaxno == null) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Number</p>";
//        isValid = false;
//    }
//    if (txtdescription == "" || txtdescription == null) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
//        isValid = false;
//    }
//    if (!isValid) {
//        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//        $("#divInvoiceCreationInfoMsg").text("");
//        $("#divInvoiceCreationInfoMsg").append(finalerror + errorMsg + "</div>");
//        $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
//        $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");
//        return false;
//    }
//    else {
//        $("#divInvoiceCreationInfoMsg").text("");
//        $("#divInvoiceCreationInfoMsg").addClass("hidden");
//    }
//}


//Script for REFUND Ends
//Scripts for Add Bank Details
function SubmitBankDetails() {
    var errorMsg = "";
    isValid = true;
    var bankname = $("#txtBankACName").val();
    var holder = $("#txtBankACHolderName").val();
    var No = $("#txtBankACNo").val();
    var openingDate = $("#txtBankACOpeningDate").val();
    var balance = $("#txtBankACOpeningBalance").val();
    var type = $("#BankACType option:selected").index();
    var balason = $("#txtBankACBalAsOn").val();
    var loc = $("#txtBankACLocation").val();
    var naturegroup = $("#ddlBankNaturegroup option:selected").index();
    var minbal = $("#txtBankACMinBal").val();
    var mastergrpindex = $("#ddlNewBANKMastergroup option:selected").index();
    var subgrpexist = $("#txtsubgrpbnkexist").val();
    if (bankname == "" || bankname == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Bank Name</p>";
        isValid = false;
    }
    if (holder == "" || holder == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter A/C Holder Name</p>";
        isValid = false;
    }
    if (No == "" || No == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter A/c No Name</p>";
        isValid = false;
    }

    if (openingDate == "" || openingDate == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Opening Date</p>";
        isValid = false;
    }
    if (type == "" || type == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter A/C Type</p>";
        isValid = false;
    }
    if (balance == "" || balance == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Opening Balance</p>";
        isValid = false;
    }

    if (balason == "" || balason == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Balance As On</p>";
        isValid = false;
    }
    if (loc == "" || loc == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Location</p>";
        isValid = false;
    }
    if (naturegroup == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Nature Of Group</p>";
        isValid = false;
    }
    if (minbal == "" || minbal == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Minimum Balance</p>";
        isValid = false;
    }

    if (mastergrpindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Group</p>";
        isValid = false;
    }
    if (subgrpexist === '1') {
        var Subgroupindex = $("#ddlNewBANKSubgroup option:selected").index();
        if (Subgroupindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Group</p>";
            isValid = false;
        }
    }
    if (parseFloat(balance) <= parseFloat(minbal)) {
        errorMsg += "<p style='margin-top:-5px!important;'>Min Balance Should Not Be Greater Than Opening Balance</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAddBankDetilsInfoMsg").text("");
        $("#divAddBankDetilsInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divAddBankDetilsInfoMsg").addClass("alert-danger");
        $("#divAddBankDetilsInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divAddBankDetilsInfoMsg").text("");
        $("#divAddBankDetilsInfoMsg").addClass("hidden");
        AddBankDetails();
    }

}
function AddBankDetails() {

    var natureid = $("#ddlBankNaturegroup option:selected").val();
    var subgrpexist = $("#txtsubgrpbnkexist").val();
    var subgrp = '';
    if (subgrpexist === '1') { subgrp = $("#ddlNewBANKSubgroup option:selected").val(); }
    else { subgrp = 0; }
    var addBankDetails = {
        BankName: $("#txtBankACName").val(),
        AccountHolderName: $("#txtBankACHolderName").val(),
        Accountno: $("#txtBankACNo").val(),
        AccOpeningDate: $("#txtBankACOpeningDate").val(),
        AccountType: $("#BankACType option:selected").val(),
        OpeningBalance: $("#txtBankACOpeningBalance").val(),
        BalanceAsOn: $("#txtBankACBalAsOn").val(),
        Banklocation: $("#txtBankACLocation").val(),
        NatureGroupId: natureid,
        Createdby: $("#txtNBankCreatedby").val(),
        Role: $("#txtUpRole").val(),
        MinimumBalance: $("#txtBankACMinBal").val(),
        SubGroupId: subgrp,
        GroupId: $("#ddlNewBANKMastergroup option:selected").val()

    };
    addFailMsg = "Error Occurred While Adding New Bank Details.";
    addSuccessMsg = "Bank Details Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveNewBankDetails',
        data: { newBankDetails: addBankDetails },
        success: function (Data) {
            // alert("Hi");
            if (Data.saveStatus == "Submited") {
                $("#btnSubmitBankAc").prop('disabled', true);
                $("#divAddBankDetilsInfoMsg").text(addSuccessMsg);
                $("#divAddBankDetilsInfoMsg").removeClass("hidden alert-danger");
                $("#divAddBankDetilsInfoMsg").addClass("alert-success");
            }
            else {
                $("#btnSubmitBankAc").prop('disabled', false);
                $("#divAddBankDetilsInfoMsg").text(Data.saveStatus);
                $("#divAddBankDetilsInfoMsg").addClass("alert-danger");
                $("#divAddBankDetilsInfoMsg").removeClass("hidden alert-success");
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnSubmitBankAc").prop('disabled', false);
            $("#divAddBankDetilsInfoMsg").text(addFailMsg);
            $("#divAddBankDetilsInfoMsg").addClass("alert-danger");
            $("#divAddBankDetilsInfoMsg").removeClass("hidden alert-success");

        }
    });

}
function ResetBankDetials() {
    $("#btnSubmitBankAc").prop('disabled', false);
    $("#divAddBankDetilsInfoMsg").text("");
    $("#divAddBankDetilsInfoMsg").addClass("hidden");
    $("#txtBankACName").val("");
    $("#txtBankACHolderName").val("");
    $("#txtBankACNo").val("");
    $("#txtBankACOpeningDate").val("");
    $("#BankACType").prop('selectedIndex', 0);
    $("#txtBankACOpeningBalance").val("");
    $("#txtBankACBalAsOn").val("");
    $("#txtBankACLocation").val("");
    $("#ddlBankNaturegroup").prop('selectedIndex', 0);
    $("#txtBankACMinBal").val("");
    $("#ddlNewBANKMastergroup").prop('selectedIndex', 0);
    $("#ddlNewBANKSubgroup").prop('selectedIndex', 0);
}
function BankACTypeChange() {
    $("#txtBankACOpeningBalance").val("");
    $("#divAddBankDetilsInfoMsg").text("");
    $("#divAddBankDetilsInfoMsg").addClass("hidden");
}
function ViewAddNewBankModel() {
    ResetBankDetials();
    $("#AddNewBankModal").modal('show');
    $("#btnSubmitBankAc").prop('disabled', false);
    $("#divAddBankDetilsInfoMsg").text("");
    $("#divAddBankDetilsInfoMsg").addClass("hidden");
    $("#txtsubgrpbnkexist").val('0');
}
function BankGridActionschange(Bankid, BankName, AccountType, Accountno, AccountHolderName, Banklocation, AccOpeningDate, OpeningBalance, MinimumBalance, BalanceAsOn, NatureGroupName, grpid, grpname, subgrpid, sungrpname, txt) {
    var action = txt.value;
    //debugger;
    //var role = $("#txtUpRole").val();
    //var typeArr = AccOpeningDate.toString().split(' ');
    //var d3 = typeArr[0];
    //var t1 = "'" + d3 + "'";
    //var bldate1 = moment(t1, "DDMMYYYY").format('DD-MMM-YYYY');
    //var typeArr1 = BalanceAsOn.toString().split(' ');
    //var d31 = typeArr[0];
    //var t11 = "'" + d31 + "'";
    //var bldate11 = moment(t11, "DDMMYYYY").format('DD-MMM-YYYY');
    //alert(d3 + "++++" + d31);
    //alert(MinimumBalance);

    if (action === "Edit") {

        $("#EditBankModal").modal('show');
        $("#txtUpBankACName").val(BankName);
        $("#txtUpBankACHolderName").val(AccountHolderName);
        $("#txtUpBankACNo").val(Accountno);
        $("#txtUpBankACType").val(AccountType);
        $("#txtUpBankACOpeningDate").val(AccOpeningDate);
        $("#txtUpBankACBalAsOn").val(BalanceAsOn);
        $("#txtUpBankACLocation").val(Banklocation);
        $("#txtUpBankACOpeningBalance").val(OpeningBalance);
        $("#txtUpNatureOfGroup").val(NatureGroupName);
        $("#txtUpMinBalance").val(MinimumBalance);
        $("#txtUpbankid").val(Bankid);
        $("#btnUpdateBankAc").prop('disabled', false);
        $("#divUpBankDetilsInfoMsg").text("");
        $("#divUpBankDetilsInfoMsg").addClass("hidden");
        $("#divupminbal").removeClass('hidden');
        //if (role === 'SuperAdmin') {
        //    $("#divupminbal").removeClass('hidden');
        //}
        //else { $("#divupminbal").addClass("hidden"); }

        $("#btnCloseBankAc").addClass('hidden');
        $("#btnUpdateBankAc").removeClass('hidden');
        $("#txtUpBankACLocation").prop('disabled', false);
        $("#txtUpMinBalance").prop('disabled', false);
        $("#txtUpbankgrpname").val(grpname);
        $("#txtbankGroupid").val(grpid);
        $("#txtbankSubGroupid").val(subgrpid);

        if (subgrpid !== 0) {
            $("#txtUpbanksubgrpname").val(sungrpname);
            $("#divupbankSubgrp").removeClass('hidden');
        }
        else {
            $("#divupbankSubgrp").addClass('hidden');
        }

    }
    else if (action === "Close") {

        $.ajax({
            type: "POST",
            url: "/Home/ViewCloseBankAccount",
            data: '{BankId:"' + Bankid + '",BankName:"' + BankName + '",Accno:"' + Accountno + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {
                $('#divCloseAccountModel').html(data);
                $('#divCloseAccountModel').modal();
                $("#divCloseBankDetilsInfoMsg").text("");
                $("#divCloseBankDetilsInfoMsg").addClass("hidden");

            }
        });


        //$("#EditBankModal").modal('show');
        //$("#txtUpBankACName").val(BankName);
        //$("#txtUpBankACHolderName").val(AccountHolderName);
        //$("#txtUpBankACNo").val(Accountno);
        //$("#txtUpBankACType").val(AccountType);
        //$("#txtUpBankACOpeningDate").val(bldate1);
        //$("#txtUpBankACBalAsOn").val(bldate11);
        //$("#txtUpBankACLocation").val(Banklocation);
        //$("#txtUpBankACOpeningBalance").val(OpeningBalance);
        //$("#txtUpNatureOfGroup").val(NatureGroupName);
        //$("#txtUpMinBalance").val(MinimumBalance);
        //$("#txtUpbankid").val(Bankid);
        //$("#btnUpdateBankAc").prop('disabled', false);
        //$("#divUpBankDetilsInfoMsg").text("");
        //$("#divUpBankDetilsInfoMsg").addClass("hidden");       
        //if (role === 'SuperAdmin') {
        //    $("#divupminbal").removeClass('hidden');
        //}
        //else { $("#divupminbal").addClass("hidden"); }
        //$("#btnCloseBankAc").removeClass('hidden');
        //$("#btnUpdateBankAc").addClass('hidden');
        //$("#txtUpBankACLocation").prop('disabled', true);
        //$("#txtUpMinBalance").prop('disabled', true);
        //$("#btnCloseBankAc").prop('disabled', false);
    }
    // alert(action);
}

function UpdateBankDetails() {
    //////debugger;
    var errorMsg = "";
    isValid = true;
    var minbalance = $("#txtUpMinBalance").val();
    var loc = $("#txtUpBankACLocation").val();
    if (minbalance == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Minimum Balance</p>";
        isValid = false;
    }
    if (loc == "" || loc == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Location</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpBankDetilsInfoMsg").text("");
        $("#divUpBankDetilsInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpBankDetilsInfoMsg").addClass("alert-danger");
        $("#divUpBankDetilsInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpBankDetilsInfoMsg").text("");
        $("#divUpBankDetilsInfoMsg").addClass("hidden");
        var editBankDetails = {
            BankName: $("#txtUpBankACName").val(),
            AccountHolderName: $("#txtUpBankACHolderName").val(),
            Accountno: $("#txtUpBankACNo").val(),
            AccOpeningDate: $("#txtUpBankACOpeningDate").val(),
            AccountType: $("#txtUpBankACType").val(),
            OpeningBalance: $("#txtUpBankACOpeningBalance").val(),
            BalanceAsOn: $("#txtUpBankACBalAsOn").val(),
            Banklocation: $("#txtUpBankACLocation").val(),
            NatureGroupId: 0,
            Bankid: $("#txtUpbankid").val(),
            MinimumBalance: $("#txtUpMinBalance").val(),
            Createdby: $("#txtNBankCreatedby").val(),
            Role: $("#txtUpRole").val()
        };
        addFailMsg = "Error Occurred While Updating Bank Details.";
        addSuccessMsg = "Bank Details Updated Successfully.";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/UpdateBankDetails',
            data: { newBankDetails: editBankDetails },
            success: function (Data) {
                if (Data.saveStatus == 'Updated') {
                    $("#btnUpdateBankAc").prop('disabled', true);
                    $("#divUpBankDetilsInfoMsg").text(addSuccessMsg);
                    $("#divUpBankDetilsInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpBankDetilsInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpdateBankAc").prop('disabled', true);
                    $("#divUpBankDetilsInfoMsg").text(Data.saveStatus);
                    $("#divUpBankDetilsInfoMsg").addClass("alert-danger");
                    $("#divUpBankDetilsInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnUpdateBankAc").prop('disabled', true);
                $("#divUpBankDetilsInfoMsg").text(addFailMsg);
                $("#divUpBankDetilsInfoMsg").addClass("alert-danger");
                $("#divUpBankDetilsInfoMsg").removeClass("hidden alert-success");

            }
        });

    }
}
function NotifyPendings(Bankid, Accessname) {
    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtCCCloseNote").val();
    var closingdate = $("#txtClosingAson").val();
    var status = $("#ddlCloseBankAccstatus").val();
    //if (Accessname === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

    //    if (closingdate === "" || closingdate === null) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
    //        isValid = false;
    //    }
    //}
    //if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
    //    var ddlaction = $("#ddlCloseBankAccstatus option:selected").index();
    //    if (ddlaction === 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
    //        isValid = false;
    //    }

    //}

    if (status != 'Select') {
        if (status === 'Approve' || status === 'Reject') {
            if (closingdate === "" || closingdate === null) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
                isValid = false;
            }
        }
    }
    else {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divCloseBankDetilsInfoMsg").text("");
        $("#divCloseBankDetilsInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
        $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divCloseBankDetilsInfoMsg").text("");
        var sendNotificationDetails = {};
        $("#divCloseBankDetilsInfoMsg").addClass("hidden");
        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                Action: Accessname,
                Bankid: Bankid,
                CloseRemarks: $("#txtCCCloseNote").val(),
                ClosingDate: $("#txtClosingAson").val(),
                Createdby: $("#txtNBankCreatedby").val(),
                CloseStatus: $("#ddlCloseBankAccstatus option:selected").val()
            };
        }
        else {
            sendNotificationDetails = {
                Action: Accessname,
                Bankid: Bankid,
                CloseRemarks: $("#txtCCCloseNote").val(),
                ClosingDate: $("#txtClosingAson").val(),
                Createdby: $("#txtNBankCreatedby").val(),
                CloseStatus: ''
            };

        }

        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/SaveBankCloseNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divCloseBankDetilsInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divCloseBankDetilsInfoMsg").text('Closing Bank Account Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseBankAccstatus option:selected").val();
                        if (type === 'Reject')
                            $("#divClsoeCCInfoMsg").text('Closing Bank Account   Rejected Successfully');
                        else
                            $("#divCloseBankDetilsInfoMsg").text('Closing Bank Account  Approved Successfully');
                    }
                    $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-danger");
                    $("#divCloseBankDetilsInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divCloseBankDetilsInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
                    $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divCloseBankDetilsInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
                $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");

            }
        });
    }

}
function UpdateCloseDate(Bankid) {
    // alert(Rowno + "," + Bankid + "," + Materid + "," + Paytype);
    var errorMsg = "";
    isValid = true;
    var closingdate = $("#txtClosingAson").val();
    if (closingdate === "" || closingdate === null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divCloseBankDetilsInfoMsg").text("");
        $("#divCloseBankDetilsInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
        $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divCloseBankDetilsInfoMsg").text("");
        $("#divCloseBankDetilsInfoMsg").addClass("hidden");

        var sendNotificationDetails = {
            Action: 'Update',
            Bankid: Bankid,
            ClosingDate: $("#txtClosingAson").val(),
            Createdby: $("#txtNBankCreatedby").val()
        };
        addFailMsg = "Error Occurred While Updating Closing Date.";
        addSuccessMsg = "Updated Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/SaveBankCloseNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnUpdateCloseDate").prop('disabled', true);
                    $("#divCloseBankDetilsInfoMsg").text(addSuccessMsg);
                    $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-danger");
                    $("#divCloseBankDetilsInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpdateCloseDate").prop('disabled', true);
                    $("#divCloseBankDetilsInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
                    $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnUpdateCloseDate").prop('disabled', true);
                $("#divCloseBankDetilsInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
                $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");

            }
        });
    }
}
function CloseBankAccounts(Bankid) {
    var closebankDetials = {
        Bankid: Bankid,
        Createdby: $("#txtNBankCreatedby").val()
    };
    addFailMsg = "Error Occurred While Closing Bank Accoount.";
    addSuccessMsg = "Bank Accoount Closed Successfully.";

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/CloseBankAccounts',
        data: { closeBankAcc: closebankDetials },
        success: function (Data) {
            if (Data.saveStatus === "Closed") {
                $("#btnCloseBankAc").prop('disabled', true);
                $("#divCloseBankDetilsInfoMsg").text(addSuccessMsg);
                $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-danger");
                $("#divCloseBankDetilsInfoMsg").addClass("alert-success");
            }

            else {
                $("#btnCloseBankAc").prop('disabled', true);
                $("#divCloseBankDetilsInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
                $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");
            }


        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnCloseBankAc").prop('disabled', true);
            $("#divCloseBankDetilsInfoMsg").text(addFailMsg);
            $("#divCloseBankDetilsInfoMsg").addClass("alert-danger");
            $("#divCloseBankDetilsInfoMsg").removeClass("hidden alert-success");

        }
    });


}
//Retention Payment
function RetPayClientChange() {
    var clientindex = $("#ddlRetPayClient option:selected").index();
    var client = $("#ddlRetPayClient  option:selected").val();

    if (clientindex == 0) {
        $("#divRetPaySubclient").addClass('hidden');
        $("#divRetPayCC").addClass('hidden');
        $("#divRetPayPO").addClass('hidden');
        $("#divRetpayIncDetails").addClass('hidden');
        $("#divRetPaymentsection").addClass('hidden');
        var SubClientddl = $("#ddlRetPaysubClient");
        SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        var ddlRetPayCC = $("#ddlRetPayCC");
        ddlRetPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        var ddlRetPayPO = $("#ddlRetPayPO");
        ddlRetPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetInvSubClientbyClient",
            data: '{ClientCode:"' + client + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var SubClientddl = $("#ddlRetPaysubClient");
                SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    SubClientddl.append($("<option></option>").val(this['SubClientCode']).html(this['SubClientCodename']));
                });
                $("#divRetPaySubclient").removeClass('hidden');
                $("#divRetPayCC").addClass('hidden');
                $("#divRetPayPO").addClass('hidden');
                $("#divRetpayIncDetails").addClass('hidden');
                $("#divRetPaymentsection").addClass('hidden');

                var ddlRetPayCC = $("#ddlRetPayCC");
                ddlRetPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                var ddlRetPayPO = $("#ddlRetPayPO");
                ddlRetPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function RetPaySubClientChange() {
    var subclientindex = $("#ddlRetPaysubClient option:selected").index();
    var client = $("#ddlRetPayClient  option:selected").val();
    var subclient = $("#ddlRetPaysubClient  option:selected").val();

    if (subclientindex == 0) {
        $("#divRetPayCC").addClass('hidden');
        $("#divRetPayPO").addClass('hidden');
        $("#divRetpayIncDetails").addClass('hidden');
        $("#divRetPaymentsection").addClass('hidden');
        var ddlRetPayCC = $("#ddlRetPayCC");
        ddlRetPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');

        var ddlRetPayPO = $("#ddlRetPayPO");
        ddlRetPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetInvCostCentersByClient",
            data: '{ClientCode:"' + client + '",SClientcode:"' + subclient + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlRetPayCC = $("#ddlRetPayCC");
                ddlRetPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                ddlRetPayCC.append('<option value="SelectAll">SelectAll</option>');
                $.each(response, function () {
                    ddlRetPayCC.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
                $("#divRetPayCC").removeClass('hidden');
                $("#divRetPayPO").addClass('hidden');
                $("#divRetpayIncDetails").addClass('hidden');
                $("#divRetPaymentsection").addClass('hidden');


                var ddlRetPayPO = $("#ddlRetPayPO");
                ddlRetPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }

}
function RetPayCCChange() {

    var CCindex = $("#ddlRetPayCC option:selected").index();
    var client = $("#ddlRetPayClient  option:selected").val();
    var subclient = $("#ddlRetPaysubClient  option:selected").val();
    var CC = $("#ddlRetPayCC option:selected").val();
    if (CCindex == 0) {
        $("#divRetPayPO").addClass('hidden');
        $("#divRetpayIncDetails").addClass('hidden');
        $("#divRetPaymentsection").addClass('hidden');
        var ddlRetPayPO = $("#ddlRetPayPO");
        ddlRetPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetRetentPayInvPO",
            data: '{ClientCode:"' + client + '",SClientcode:"' + subclient + '",CCCode:"' + CC + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlRetPayPO = $("#ddlRetPayPO");
                ddlRetPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                ddlRetPayPO.append('<option value="SelectAll">SelectAll</option>');
                $.each(response, function () {
                    ddlRetPayPO.append($("<option></option>").val(this['ClientPOId']).html(this['PONumber']));
                });
                $("#divRetPayPO").removeClass('hidden');
                $("#divRetpayIncDetails").addClass('hidden');
                $("#divRetPaymentsection").addClass('hidden');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function ddlRetPayPOChange() {
    var Poindex = $("#ddlRetPayPO option:selected").index();
    var client = $("#ddlRetPayClient  option:selected").val();
    var subclient = $("#ddlRetPaysubClient  option:selected").val();
    var pono = $("#ddlRetPayPO option:selected").text();
    var CC = $("#ddlRetPayCC option:selected").val();
    if (Poindex == 0) {
        $("#divRetpayIncDetails").addClass('hidden');
        $("#divRetPaymentsection").addClass('hidden');
        $("#RetPayInvTable tbody tr").remove();
        $("#divRetPayInfoMsg").text("");
        $("#divRetPayInfoMsg").addClass("hidden");
    } else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetRetentPayInvDetails",
            data: '{ClientCode:"' + client + '",SClientcode:"' + subclient + '",CCCode:"' + CC + '",PO:"' + pono + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count = Object.keys(response).length;
                //alert(count);
                var rowcount = 0;
                if (count > 0) {
                    $("#RetPayInvTable tbody tr").remove();

                    //  var parsedDate = new Date(parseInt(dateAsFromServerSide.substr(6)));
                    $.each(response, function () {

                        var date = this['InvoiceDate'];
                        //// var date = /Date(1297246301973)/;
                        // var parsedDate = new Date(parseInt(date.substr(6)));
                        // var newDate = new Date(parsedDate);

                        // var getMonth = newDate.getMonth();
                        // var getDay = newDate.getDate();
                        // var getYear = newDate.getFullYear();

                        // var standardDate = getMonth + '-' + getDay + '-' + getYear;
                        //var date = "\/Date(1297246301973)\/";
                        // var nowDate = new Date(parseInt(date.substr(6)));             
                        //var parsedDate = new Date(parseInt(date.substr(10)));

                        //var dateString = new Date(d1).toUTCString();
                        //dateString = dateString.split(' ').slice(0, 4).join(' ');

                        var standardDate = moment(date).format("DD-MMM-YYYY");
                        var newRow = $("<tr>");
                        var cols = "";
                        rowcount = rowcount + 1;
                        cols += '<td style="text-align:center" class="hidden">' + rowcount + '</td>';
                        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
                        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input chkRetpayInv" id="idchkselectall" name="chkselectall">';
                        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
                        cols += '<td style="text-align:center">' + this['ClientInvoiceNo'] + '</td>';
                        cols += '<td style="text-align:center">' + this['PONumber'] + '</td>';
                        cols += '<td style="text-align:center">' + standardDate + '</td>';
                        cols += '<td style="text-align:center">' + this['RetentionBalance'] + '</td></tr>';
                        newRow.append(cols);
                        $("table.order-list.retpayinv").append(newRow);
                    });
                    $("#divRetpayIncDetails").removeClass('hidden');
                    $("#divRetPaymentsection").removeClass('hidden');
                    $("#divRetPayInfoMsg").text("");
                    $("#divRetPayInfoMsg").addClass("hidden");

                    $("#txtRetPayNo").removeClass('hidden');
                    $("#ddltxtRetPayNo").addClass('hidden');

                    $("#btnRetPaySubmit").prop("disabled", false);
                }
                else {
                    $("#RetPayInvTable tbody tr").remove();
                    $("#divRetpayIncDetails").addClass('hidden');
                    $("#divRetPaymentsection").addClass('hidden');
                    $("#RetPayInvTable tbody tr").remove();
                    $("#divRetPayInfoMsg").text("No Invoice Numbers Found");
                    $("#divRetPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divRetPayInfoMsg").addClass("alert-success");
                }


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }

}
function RetPaymodeChange() {
    var bank = $("#ddlRetPayBank option:selected").text();
    var Mode = $("#ddlRetPaymode option:selected").text();

    var bankindex = $("#ddlRetPayBank option:selected").index();
    var Modeindex = $("#ddlRetPaymode option:selected").index();
    if ((Modeindex != 0 && bankindex != 0) || (bank != "" && Mode != "")) {
        if (Modeindex == 1) {
            $("#txtRetPayNo").addClass('hidden');
            $("#ddltxtRetPayNo").removeClass('hidden');
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
                    var ddlRetPayNo = $("#ddltxtRetPayNo");
                    if (count > 0) {

                        ddlRetPayNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            ddlRetPayNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                        });
                    }
                    else {

                        ddlRetPayNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    }

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        }
        else {
            $("#txtRetPayNo").removeClass('hidden');
            $("#ddltxtRetPayNo").addClass('hidden');
        }
    }
    else if (Modeindex == 0 && bankindex != 0) {
        $("#txtRetPayNo").removeClass('hidden');
        $("#ddltxtRetPayNo").addClass('hidden');

    }
    else if (Modeindex != 0 && bankindex == 0) {
        $("#txtRetPayNo").removeClass('hidden');
        $("#ddltxtRetPayNo").addClass('hidden');

        $("#divRetPayInfoMsg").text("Select Bank Name");
        $("#divRetPayInfoMsg").addClass("alert-danger");
        $("#divRetPayInfoMsg").removeClass("hidden alert-success");
        $("#ddlRetPaymode").prop('selectedIndex', 0);
    }
    else {
        $("#txtRetPayNo").removeClass('hidden');
        $("#ddltxtRetPayNo").addClass('hidden');

    }

}
function SubmitRetPayData() {

    var tablerowcount = $("#RetPayInvTable tbody tr").length;
    if (tablerowcount > 0) {
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
        var bank = $("#ddlRetPayBank option:selected").text();
        var Mode = $("#ddlRetPaymode option:selected").text();
        var bankindex = $("#ddlRetPayBank option:selected").index();
        var Modeindex = $("#ddlRetPaymode option:selected").index();
        var date = $("#txtRetPayDate").val();
        var remarks = $("#txtRetPayRemarks").val();
        var amount = $("#txtRetPayAmount").val();

        if (bankindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Modeindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex == 1) {
            var ddlcheque = $("#ddltxtRetPayNo option:selected").index();
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
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divRetPayInfoMsg").text("");
                $("#divRetPayInfoMsg").append(finalerror1 + "</div>");
                $("#divRetPayInfoMsg").addClass("alert-danger");
                $("#divRetPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divRetPayInfoMsg").text("");
                $("#divRetPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                SaveRetentionPayment();
            }
        }

    }
    function SaveRetentionPayment() {
        var Modeindex = $("#ddlRetPaymode option:selected").index();
        var chequeno;
        if (Modeindex == 1) {
            var ddlcheque = $("#ddltxtRetPayNo option:selected").val();
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

        var saveRetPay = {
            BankID: $("#ddlRetPayBank option:selected").val(),
            PaymentDate: $("#txtRetPayDate").val(),
            No: chequeno,
            Remarks: $("#txtRetPayRemarks").val(),
            PaymentAmount: $("#txtRetPayAmount").val(),
            InvoiceNos: selecetedinvnos,
            Createdby: $("#txtRetCreatedby").val(),
            ModeOfPay: $("#ddlRetPaymode option:selected").text(),
            InvoiceDates: selecetedinvdates,
            Roleid: $("#txtRetRoleId").val(),
            Action: 'New'
        };


        addFailMsg = "Error Occurred While Adding Retention Payment";
        addSuccessMsg = "Retention Payment Added Successfully.";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Accounts/SaveClientRetentionPayment',
            data: { retPay: saveRetPay },
            success: function (Data) {
                $("#btnRetPaySubmit").prop('disabled', true);
                if (Data.saveStatus == "Retention Submited") {
                    $("#divRetPayInfoMsg").text(addSuccessMsg);
                    $("#divRetPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divRetPayInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnRetPaySubmit").prop('disabled', true);
                    $("#divRetPayInfoMsg").text(addFailMsg);
                    $("#divRetPayInfoMsg").addClass("alert-danger");
                    $("#divRetPayInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $("#btnRetPaySubmit").prop('disabled', true);
                $("#divRetPayInfoMsg").text(addFailMsg);
                $("#divRetPayInfoMsg").addClass("alert-danger");
                $("#divRetPayInfoMsg").removeClass("hidden alert-success");
            }
        });

    }



}
function ResetRetPayData() {

    location.reload();
}
//Hold Payment Scripts
function HoldPayClientChange() {

    var clientindex = $("#ddlHoldPayClient option:selected").index();
    var client = $("#ddlHoldPayClient  option:selected").val();

    if (clientindex == 0) {
        $("#divHoldPaySubclient").addClass('hidden');
        $("#divHoldPayCC").addClass('hidden');
        $("#divHoldPayPO").addClass('hidden');
        $("#divHoldpayIncDetails").addClass('hidden');
        $("#divHoldPaymentsection").addClass('hidden');
        var SubClientddl = $("#ddlHoldPaysubClient");
        SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        var ddlHoldPayCC = $("#ddlHoldPayCC");
        ddlHoldPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        var ddlHoldPayPO = $("#ddlHoldPayPO");
        ddlHoldPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetHoldPayInvSubClients",
            data: '{ClientCode:"' + client + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var SubClientddl = $("#ddlHoldPaysubClient");
                SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    SubClientddl.append($("<option></option>").val(this['SubClientCode']).html(this['SubClientCodename']));
                });
                $("#divHoldPaySubclient").removeClass('hidden');
                $("#divHoldPayCC").addClass('hidden');
                $("#divHoldPayPO").addClass('hidden');
                $("#divHoldpayIncDetails").addClass('hidden');
                $("#divHoldPaymentsection").addClass('hidden');

                var ddlHoldPayCC = $("#ddlHoldPayCC");
                ddlHoldPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                var ddlHoldPayPO = $("#ddlHoldPayPO");
                ddlHoldPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function HoldPaySubClientChange() {
    var subclientindex = $("#ddlHoldPaysubClient option:selected").index();
    var client = $("#ddlHoldPayClient  option:selected").val();
    var subclient = $("#ddlHoldPaysubClient  option:selected").val();

    if (subclientindex == 0) {
        $("#divHoldPayCC").addClass('hidden');
        $("#divHoldPayPO").addClass('hidden');
        $("#divHoldpayIncDetails").addClass('hidden');
        $("#divHoldPaymentsection").addClass('hidden');
        var ddlHoldPayCC = $("#ddlHoldPayCC");
        ddlHoldPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');

        var ddlHoldPayPO = $("#ddlHoldPayPO");
        ddlHoldPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetHoldPayInvCCbyClients",
            data: '{ClientCode:"' + client + '",SClientcode:"' + subclient + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlHoldPayCC = $("#ddlHoldPayCC");
                ddlHoldPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                ddlHoldPayCC.append('<option value="SelectAll">SelectAll</option>');
                $.each(response, function () {
                    ddlHoldPayCC.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
                $("#divHoldPayCC").removeClass('hidden');
                $("#divHoldPayPO").addClass('hidden');
                $("#divHoldpayIncDetails").addClass('hidden');
                $("#divHoldPaymentsection").addClass('hidden');


                var ddlHoldPayPO = $("#ddlHoldPayPO");
                ddlHoldPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }


}

function HoldCCChange() {
    var CCindex = $("#ddlHoldPayCC option:selected").index();
    var client = $("#ddlHoldPayClient  option:selected").val();
    var subclient = $("#ddlHoldPaysubClient  option:selected").val();
    var CC = $("#ddlHoldPayCC option:selected").val();
    if (CCindex == 0) {
        $("#divHoldPayPO").addClass('hidden');
        $("#divHoldpayIncDetails").addClass('hidden');
        $("#divHoldPaymentsection").addClass('hidden');
        var ddlHoldPayPO = $("#ddlHoldPayPO");
        ddlHoldPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetHoldPayInvPO",
            data: '{ClientCode:"' + client + '",SClientcode:"' + subclient + '",CCCode:"' + CC + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlHoldPayPO = $("#ddlHoldPayPO");
                ddlHoldPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                ddlHoldPayPO.append('<option value="SelectAll">SelectAll</option>');
                $.each(response, function () {
                    ddlHoldPayPO.append($("<option></option>").val(this['ClientPOId']).html(this['PONumber']));
                });
                $("#divHoldPayPO").removeClass('hidden');
                $("#divHoldpayIncDetails").addClass('hidden');
                $("#divHoldPaymentsection").addClass('hidden');


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }

}
function HoldPayPOChange() {
    var Poindex = $("#ddlHoldPayPO option:selected").index();
    var client = $("#ddlHoldPayClient  option:selected").val();
    var subclient = $("#ddlHoldPaysubClient  option:selected").val();
    var pono = $("#ddlHoldPayPO option:selected").text();
    var CC = $("#ddlHoldPayCC option:selected").val();
    if (Poindex == 0) {
        $("#divHoldpayIncDetails").addClass('hidden');
        $("#divHoldPaymentsection").addClass('hidden');
        $("#HoldPayInvTable tbody tr").remove();
        $("#divHoldPayInfoMsg").text("");
        $("#divHoldPayInfoMsg").addClass("hidden");
    } else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetHoldPayInvDetails",
            data: '{ClientCode:"' + client + '",SClientcode:"' + subclient + '",CCCode:"' + CC + '",PO:"' + pono + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count = Object.keys(response).length;
                //alert(count);
                var rowcount = 0;
                if (count > 0) {
                    $("#HoldPayInvTable tbody tr").remove();

                    //  var parsedDate = new Date(parseInt(dateAsFromServerSide.substr(6)));
                    $.each(response, function () {

                        var date = this['InvoiceDate'];
                        //// var date = /Date(1297246301973)/;
                        //var parsedDate = new Date(parseInt(date.substr(6)));
                        //var newDate = new Date(parsedDate);

                        //var getMonth = newDate.getMonth();
                        //var getDay = newDate.getDate();
                        //var getYear = newDate.getFullYear();

                        //var standardDate = getMonth + '-' + getDay + '-' + getYear;
                        var standardDate = moment(date).format("DD-MMM-YYYY");
                        //alert(standardDate);

                        var newRow = $("<tr>");
                        var cols = "";
                        rowcount = rowcount + 1;
                        cols += '<td style="text-align:center" class="hidden">' + rowcount + '</td>';
                        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
                        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input chkholdpayInv" id="idchkselectall" name="chkholdselectall">';
                        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
                        cols += '<td style="text-align:center">' + this['ClientInvoiceNo'] + '</td>';
                        cols += '<td style="text-align:center">' + this['PONumber'] + '</td>';
                        cols += '<td style="text-align:center">' + standardDate + '</td>';
                        cols += '<td style="text-align:center">' + this['HoldBalance'] + '</td></tr>';
                        newRow.append(cols);
                        $("table.order-list.holdpayinv").append(newRow);
                    });
                    $("#divHoldpayIncDetails").removeClass('hidden');
                    $("#divHoldPaymentsection").removeClass('hidden');
                    $("#divHoldPayInfoMsg").text("");
                    $("#divHoldPayInfoMsg").addClass("hidden");

                    $("#txtHoldPayNo").removeClass('hidden');
                    $("#ddlHoldPayNo").addClass('hidden');
                    $("#btnHoldPaySubmit").prop("disabled", false);
                }
                else {
                    $("#HoldPayInvTable tbody tr").remove();
                    $("#divHoldpayIncDetails").addClass('hidden');
                    $("#divHoldPaymentsection").addClass('hidden');

                    $("#divHoldPayInfoMsg").text("No Invoice Numbers Found");
                    $("#divHoldPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divHoldPayInfoMsg").addClass("alert-success");
                }


            },
            failure: function (response) {
                ;
            },
            error: function (response) {

            }
        });
    }

}

function HoldPaymodeChange() {
    var bank = $("#ddlHoldPayBank option:selected").text();
    var Mode = $("#ddlHoldPaymode option:selected").text();

    var bankindex = $("#ddlHoldPayBank option:selected").index();
    var Modeindex = $("#ddlHoldPaymode option:selected").index();

    if (Modeindex != 0 && bankindex != 0) {
        if (Modeindex == 1) {
            $("#txtHoldPayNo").addClass('hidden');
            $("#ddlHoldPayNo").removeClass('hidden');
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
                    var ddlRetPayNo = $("#ddlHoldPayNo");
                    if (count > 0) {

                        ddlRetPayNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            ddlRetPayNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                        });
                    }
                    else { ddlRetPayNo.empty().append('<option selected="selected" value="0">-Please Select-</option>'); }

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        }
        else {
            $("#txtHoldPayNo").removeClass('hidden');
            $("#ddlHoldPayNo").addClass('hidden');
        }
    }
    else if (Modeindex == 0 && bankindex != 0) {
        $("#txtHoldPayNo").removeClass('hidden');
        $("#ddlHoldPayNo").addClass('hidden');

    }
    else if (Modeindex != 0 && bankindex == 0) {
        $("#txtHoldPayNo").removeClass('hidden');
        $("#ddlHoldPayNo").addClass('hidden');
        $("#divHoldPayInfoMsg").text("Select Bank Name");
        $("#divHoldPayInfoMsg").addClass("alert-danger");
        $("#divHoldPayInfoMsg").removeClass("hidden alert-success");
        //$("#divHoldPayInfoMsg").removeClass("hidden alert-danger");
        //$("#divHoldPayInfoMsg").addClass("alert-success");
        $("#ddlHoldPaymode").prop('selectedIndex', 0);


    }
    else {
        $("#txtHoldPayNo").removeClass('hidden');
        $("#ddlHoldPayNo").addClass('hidden');

    }


}

function SubmitHoldayData() {
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
        var bank = $("#ddlHoldPayBank option:selected").text();
        var Mode = $("#ddlHoldPaymode option:selected").text();
        var bankindex = $("#ddlHoldPayBank option:selected").index();
        var Modeindex = $("#ddlHoldPaymode option:selected").index();
        var date = $("#txtHoldPayDate").val();
        var remarks = $("#txtHoldPayRemarks").val();
        var amount = $("#txtHPayAmount").val();

        if (bankindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Modeindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex == 1) {
            var ddlcheque = $("#ddlHoldPayNo option:selected").index();
            if (ddlcheque == 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtHoldPayNo").val();
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
                //Insert DCA Budget in to db
                SaveHoldPayment();
            }
        }

    }
    function SaveHoldPayment() {
        var Modeindex = $("#ddlHoldPaymode option:selected").index();
        var chequeno;
        if (Modeindex == 1) {
            var ddlcheque = $("#ddlHoldPayNo option:selected").val();
            chequeno = ddlcheque;
        }
        else {
            var cheque = $("#txtHoldPayNo").val();
            chequeno = cheque;
        }
        var selecetedinvnos = "";
        var selecetedinvnodates = "";
        $("#HoldPayInvTable tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var ino = currentRow.find("td").eq(2).html();
            var date = currentRow.find("td").eq(4).html();
            if (checkbox == true) {
                selecetedinvnos += ino + ",";
                var d = moment(date).format("YYYY-MM-DD");
                selecetedinvnodates += d + ",";
            }
        });

        var saveHoldPay = {
            PaymenttypeId: $("#ddl_ClRecCategoryddl option:selected").val(),
            BankID: $("#ddlHoldPayBank option:selected").val(),
            PaymentDate: $("#txtHoldPayDate").val(),
            No: chequeno,
            Remarks: $("#txtHoldPayRemarks").val(),
            PaymentAmount: $("#txtHPayAmount").val(),
            InvoiceNos: selecetedinvnos,
            Createdby: $("#txtCreatedby").val(),
            ModeOfPay: $("#ddlHoldPaymode option:selected").text(),
            Roleid: $("#txtClientHoldRoleId").val(),
            InvoiceDates: selecetedinvnodates,
            Action: 'New'
        };
        addFailMsg = "Error Occurred While Adding Hold Payment";
        addSuccessMsg = "Hold Payment Added Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Accounts/SaveClientHoldPayment',
            data: { holdPay: saveHoldPay },
            success: function (Data) {
                if (Data.saveStatus == "Hold Submited") {
                    $("#btnHoldPaySubmit").prop('disabled', true);
                    $("#divHoldPayInfoMsg").text(addSuccessMsg);
                    $("#divHoldPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divHoldPayInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnHoldPaySubmit").prop('disabled', true);
                    $("#divHoldPayInfoMsg").text(addFailMsg);
                    $("#divHoldPayInfoMsg").addClass("alert-danger");
                    $("#divHoldPayInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $("#btnHoldPaySubmit").prop('disabled', true);
                $("#divHoldPayInfoMsg").text(addFailMsg);
                $("#divHoldPayInfoMsg").addClass("alert-danger");
                $("#divHoldPayInfoMsg").removeClass("hidden alert-success");
            }
        });

    }
}
function ResetHoldPayData() {

    location.reload();
}

//Advance Payment Script
function AdvPayClientChange() {
    var clientindex = $("#ddlAdvPayClient option:selected").index();
    var client = $("#ddlAdvPayClient  option:selected").val();

    if (clientindex == 0) {
        $("#divAdvPaySubclient").addClass('hidden');
        $("#divAdvPayCC").addClass('hidden');
        $("#divAdvPayPO").addClass('hidden');
        $("#divAdvPayDetails").addClass('hidden');

        var SubClientddl = $("#ddlAdvPaysubClient");
        SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        var ddlAdvPayCC = $("#ddlAdvPayCC");
        ddlAdvPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        var ddlAdvPayPO = $("#ddlAdvPayPO");
        ddlAdvPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetAdvPayPOSubClients",
            data: '{ClientCode:"' + client + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var SubClientddl = $("#ddlAdvPaysubClient");
                SubClientddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    SubClientddl.append($("<option></option>").val(this['SubClientCode']).html(this['SubClientCodename']));
                });
                $("#divAdvPaySubclient").removeClass('hidden');
                $("#divAdvPayCC").addClass('hidden');
                $("#divAdvPayPO").addClass('hidden');
                $("#divAdvPayDetails").addClass('hidden');


                var ddlCC = $("#ddlAdvPayCC");
                ddlCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                var ddlPO = $("#ddlAdvPayPO");
                ddlPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }


}
function AdvPaySubClientChange() {

    var subclientindex = $("#ddlAdvPaysubClient option:selected").index();
    var client = $("#ddlAdvPayClient  option:selected").val();
    var subclient = $("#ddlAdvPaysubClient option:selected").val();

    if (subclientindex == 0) {
        $("#divAdvPayCC").addClass('hidden');
        $("#divAdvPayPO").addClass('hidden');
        $("#divAdvPayDetails").addClass('hidden');
        var ddlAdvPayCC = $("#ddlAdvPayCC");
        ddlAdvPayCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        var ddlAdvPayPO = $("#ddlAdvPayPO");
        ddlAdvPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetAdvPayPOCC",
            data: '{SubClientCode:"' + subclient + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var ddlCC = $("#ddlAdvPayCC");
                ddlCC.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlCC.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });

                $("#divAdvPayCC").removeClass('hidden');
                $("#divAdvPayPO").addClass('hidden');
                $("#divAdvPayDetails").addClass('hidden');
                var ddlPO = $("#ddlAdvPayPO");
                ddlPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }

}
function AdvCCChange() {
    var ccindex = $("#ddlAdvPayCC option:selected").index();
    var client = $("#ddlAdvPayClient  option:selected").val();
    var subclient = $("#ddlAdvPaysubClient option:selected").val();
    var cc = $("#ddlAdvPayCC option:selected").val();

    if (ccindex == 0) {
        $("#divAdvPayPO").addClass('hidden');
        $("#divAdvPayDetails").addClass('hidden');
        var ddlAdvPayPO = $("#ddlAdvPayPO");
        ddlAdvPayPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');

    } else {

        $.ajax({
            type: "POST",
            url: "/Accounts/GetAdvPayPO",
            data: '{ClientCode:"' + client + '",SubClientCode:"' + subclient + '",CCcode:"' + cc + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlPO = $("#ddlAdvPayPO");
                ddlPO.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlPO.append($("<option></option>").val(this['ClientPOId']).html(this['PONumber']));
                });
                $("#divAdvPayPO").removeClass('hidden');
                $("#divAdvPayDetails").addClass('hidden');


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }


}
function AdvPayPOChange() {

    var poindex = $("#ddlAdvPayPO option:selected").index();
    var po = $("#ddlAdvPayPO option:selected").text();

    if (poindex == 0) {
        $("#divAdvPayDetails").addClass('hidden');
    } else {
        $("#divAdvPayDetails").removeClass('hidden');
    }

}

function AdvPayClientTaxTypeChange(txt) {

    if ($("#txtAdvPayReqDate").val() != "") {
        var currentRow = $(txt).closest("tr");
        var taxtypeindex = currentRow.find("td").eq(1).find("select option:selected").index();
        var taxtype = currentRow.find("td").eq(1).find("select option:selected").val();
        if (taxtypeindex !== 'Select') {
            var selecteddcalist = [];
            var date = $("#txtAdvPayReqDate").val();
            var CC = $("#ddlAdvPayCC option:selected").val();

            var idate = date.toString().split(' ');
            var idate1 = idate.toString().split(' ');
            var edate = "'" + idate1 + "'";
            var edate1 = moment(edate, "DD-MMM-YYYY").format('MM-DD-YYYY');

            $("#AdvPayTaxTable tbody tr").each(function () {
                var currentRow = $(this);
                var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
                if (taxdca !== 0) {
                    selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                    //alert(currentRow.find("td").eq(2).find("select option:selected").val());
                }
            });

            $.ajax({
                type: "POST",
                url: "/Accounts/GetInvTaxDCA1",
                data: "{CcCode:'" + CC + "' ,TaxType: '" + taxtype + "',invdate: '" + edate1 + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var taxdcaddl = currentRow.find("td").eq(2).find("select");
                    taxdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(data, function () {
                        var status = checkValueInArray(this['DCACode'], selecteddcalist);
                        if (status === false) {
                            taxdcaddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                        }
                    });

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        }
        else {
            var taxdcaddl = currentRow.find("td").eq(2).find("select");
            taxdcaddl.empty().append('<option selected="selected" value="Select">Select</option>');
            var taxsdcaddl = currentRow.find("td").eq(3).find("select");
            taxsdcaddl.empty().append('<option selected="selected" value="Select">Select</option>');
            var taxno = currentRow.find("td").eq(4).find("select");
            taxno.empty().append('<option selected="selected" value="0">Select</option>');
            currentRow.find("td").eq(5).find("input[type='text']").val("");
            CountAdvPayTaxTotal();
        }
    }
    else {
        var taxdcaddl1 = currentRow.find("td").eq(2).find("select");
        taxdcaddl1.empty().append('<option selected="selected" value="0">Select</option>');
    }
}

function AdvPayClientTaxDCAChange(txt) {
    if ($("#txtAdvPayReqDate").val() != "") {
        var currentRow = $(txt).closest("tr");
        var taxtype = currentRow.find("td").eq(1).find("select option:selected").val();
        var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
        var taxdcaindex = currentRow.find("td").eq(2).find("select option:selected").index();
        if (taxdcaindex != 'Select') {
            $.ajax({
                type: "POST",
                url: "/Accounts/GetSubDCAbyDCA",
                data: "{DCACode:'" + taxdca + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var taxsdcaddl = currentRow.find("td").eq(3).find("select");
                    taxsdcaddl.empty().append('<option selected="selected" value="Select">Select</option>');
                    $.each(data, function () {
                        taxsdcaddl.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                    });

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });

        }
        else {
            var taxsdcaddl = currentRow.find("td").eq(3).find("select");
            taxsdcaddl.empty().append('<option selected="selected" value="Select">Select</option>');
            var taxno = currentRow.find("td").eq(4).find("select");
            taxno.empty().append('<option selected="selected" value="Select">Select</option>');
            currentRow.find("td").eq(2).find("input[type='text']").val("");
            CountAdvPayTaxTotal();
        }
    }
    else {
        var taxdcaddl = currentRow.find("td").eq(2).find("select");
        taxdcaddl.empty().append('<option selected="selected" value="Select">Select</option>');
        CountAdvPayTaxTotal();
    }
}

function AdvPayClientTaxSubDCAChange(txt) {
    if ($("#txtAdvPayReqDate").val() != "") {
        var currentRow = $(txt).closest("tr");
        var taxtype = currentRow.find("td").eq(1).find("select option:selected").val();
        var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").val();
        var taxsdcaindex = currentRow.find("td").eq(3).find("select option:selected").index();
        if (taxsdcaindex != 'Select') {
            $.ajax({
                type: "POST",
                url: "/Accounts/GetClientInvTaxNos",
                data: "{DCACode:'" + taxdca + "',Taxtype:'" + taxtype + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var taxsdcaddl = currentRow.find("td").eq(4).find("select");
                    taxsdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(data, function () {
                        taxsdcaddl.append($("<option></option>").val(this['TaxNoID']).html(this['TaxNoName']));
                    });

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });

        } else {

            var taxno = currentRow.find("td").eq(4).find("select");
            taxno.empty().append('<option selected="selected" value="Select">Select</option>');
            currentRow.find("td").eq(2).find("input[type='text']").val("");
        }

    }
    else {
        var taxdcaddl = currentRow.find("td").eq(2).find("select");
        taxdcaddl.empty().append('<option selected="selected" value="Select">-Please Select-</option>');
    }

}
function AdvPayTaxAddNewRowtoGrid() {
    isValid = true;
    var errorMsg = "";
    var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#AdvPayTaxTable tbody tr").each(function () {
        var currentRow = $(this);
        var taxtype = currentRow.find("td").eq(1).find("select option:selected").index();
        var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();
        var taxname = currentRow.find("td").eq(4).find("select option:selected").index();
        var taxamount = currentRow.find("td").eq(5).find("input[type='text']").val();
        var check = currentRow.find("td").eq(6).find('input[type="checkbox"]').is(':checked');
        if (taxtype == 0) { typecount = typecount + 1; }
        if (taxdca == 0) { dcacount = dcacount + 1; }
        if (taxsdca == 0) { sdcacount = sdcacount + 1; }
        if (taxname == 0) { taxcount = taxcount + 1; }
        if (taxamount == "") { taxvaluecount = taxvaluecount + 1; }
        if (check == false) { taxchkcount = taxchkcount + 1; }

    });

    if (typecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select IsCreditable</p>";
        isValid = false;
    }
    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax DCA</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Tax SubDCA</p>";
        isValid = false;
    }
    if (taxcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Tax Name</p>";
        isValid = false;
    }
    if (taxvaluecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Amount</p>";
        isValid = false;
    }
    if (taxchkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Taxes </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAdvPayInfoMsg").text("");
        $("#divAdvPayInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divAdvPayInfoMsg").addClass("alert-danger");
        $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divAdvPayInfoMsg").text("");
        $("#divAdvPayInfoMsg").addClass("hidden");
        var count = $("#AdvPayTaxTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center"  class="hidden">' + rowno + '</td>';
        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle advpayctaxtype" onchange="AdvPayClientTaxTypeChange(this)">';
        cols += '<option selected="selected" value="Select">Select</option>';
        cols += '<option value="Creditable">Creditable</option>';
        cols += '<option value="Non-Creditable">Non-Creditable</option></select></td>';
        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle advpayctaxdca"  onchange="AdvPayClientTaxDCAChange(this)">';
        cols += '<option selected="selected" value="Select" >Select</option></select></td>';
        cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle" onchange="AdvPayClientTaxSubDCAChange(this)">';
        cols += '<option selected="selected" value="Select">Select</option></select></td>';
        cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle advpayctaxname">';
        cols += '<option selected="selected" value="Select">Select</option></select></td>';
        cols += '<td style="text-align:center"><input type="text" class="form-control advpayctaxamount" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountAdvPayTaxTotal()"/></td>';
        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkAdvPayClientTax">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td style="text-align:center"><input type="button" class="ibtnAdvPayTaxdelect btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.advpayclienttax").append(newRow);

    }
}

function AdvPayDeductionBindNewRowtoGrid() {
    var errorMsg = "";
    isValid = true;
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

        if (checkbox == false) {
            checkboxCount = checkboxCount + 1;
        }
        if (OtherCC == 0) {
            OtherCcCount = OtherCcCount + 1;
        }
        if (CCCode == 0) {
            CCCodeCount = CCCodeCount + 1;
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

    });


    if (OtherCcCount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction from other CC</p>";
        isValid = false;
    }
    if (CCCodeCount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction CC Code</p>";
        isValid = false;
    }
    if (DcaCount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction DCA </p>";
        isValid = false;
    }
    if (SubDcaCount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction SubDCA </p>";
        isValid = false;
    }
    if (DcaAmountCount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction DCA Amount</p>";
        isValid = false;
    }

    if (checkboxCount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Check or Not</p>";
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
        $("#divAdvPayInfoMsg").text("");
        $("#divAdvPayInfoMsg").addClass("hidden");
        var totalRowCount = $("#AdvPayDeductionGrid tbody tr").length;
        //alert(totalRowCount);
        var rowcount = parseInt(totalRowCount) + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td  style="text-align:center" class="hidden">' + rowcount + '</td>';
        cols += ' <td style="text-align:center"><select class="form-control dropdown-toggle AdvPayOtherCC" id="ddl_ClRecOtherCCddl"><option selected="selected" value="Select">Select</option>';
        cols += ' <option value="Yes">Yes</option>';
        cols += ' <option value="No">No</option>';
        cols += '</select>';
        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle AdvPayCC" id="ddl_ClRecDiductionCC_code"><option selected="selected" value="Select">Select</option></select></td>';
        cols += ' <td style="text-align:center"><select class="form-control dropdown-toggle AdvPayDCA" id="ddl_ClRecDiductionDCA_code"><option selected="selected" value="Select">-Select-</option></select></td>';
        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle AdvPaySubDCA" id="ddl_ClRecDiductionSubDCA_code"><option selected="selected" value="Select">Select</option></select></td>';
        cols += '<td style="text-align:center"><input type="text" value="" class="form-control AdvPayDcaAmount" onkeypress="return ValidateAmount(this,event);" onKeyup="CountAdvPayDeductionTotal()"/></td>';
        cols += '<td style="text-align:center"> <ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input"  name="chkAdvPayDeduction">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul>';
        cols += '<td ><input type="button" class="ibtnAdvPayDel btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.AdvPayDeductionGrid").append(newRow);
    }
}

function SubmitAdvancePayData() {

    isValid = true;
    var errorMsg = "";
    var requestdate = $("#txtAdvPayReqDate").val();
    var Rano = $("#txtAdvPayRANo").val();
    var Basicvalue = $("#txtAdvPayBasicValue").val();
    var Bankname = $("#ddlAdvPayBank option:selected").index();
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
    if (Bankname == 0) {
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
        //    var taxtype = currentRow.find("td").eq(1).find("select option:selected").index();
        //    var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        //    var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();
        //    var taxname = currentRow.find("td").eq(4).find("select option:selected").index();
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
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Account Head</p>";
        //    isValid = false;
        //}
        //if (sdcacount > 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select SubAccount Head</p>";
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
            let rowcount = $("#AdvPayDeductionGrid tbody tr").length;
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

                //if (checkbox == true || OtherCC != 0 || CCCode != 0 || DCA != 0 || SubDCA != 0 || DcaAmount != "") {
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
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
                $("#divAdvPayInfoMsg").text("");
                $("#divAdvPayInfoMsg").append(finalerror1 + errorMsg + "</div>");
                $("#divAdvPayInfoMsg").addClass("alert-danger");
                $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divAdvPayInfoMsg").text("");
                $("#divAdvPayInfoMsg").addClass("hidden");
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
                        //alert(dedcc + '-' + deddca);
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
                    SaveAdvancePayment();
                }
                // }
            }
        }
        else {
            SaveAdvancePayment();
        }
    }
}

function SaveAdvancePayment() {
    // alert($("#txtAdvPayAmount").val());
    var createdby = $("#txtCreatedby").val();
    // var taxtypes = "", taxdcas = "", taxsdcas = "", taxnames = "", taxAmounts = "";
    var Cclist = "", Dcalist = "", Subdcalist = "", Amountslist = "";
    var subtotal = 0;
    var rowtotal = 0;

    var totaladvance = $("#txtAdvPayAmount").val();
    if ($("#chkDedAdvY").is(':checked') === true) {
        $("#AdvPayDeductionGrid tbody tr").each(function () {
            var currentRow = $(this);
            var RowNo = currentRow.find("td").eq(0).html();
            var checkbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
            var OtherCC = currentRow.find("td").eq(1).find("select option:selected").text();
            var CCCode = currentRow.find("td").eq(2).find("select option:selected").text();
            var DCA = currentRow.find("td").eq(3).find("select option:selected").text();
            var SubDCA = currentRow.find("td").eq(4).find("select option:selected").text();
            var DcaAmount = currentRow.find("td").eq(5).find("input[type='text']").val();
            if (checkbox == true && OtherCC != 'Select' && CCCode != 'Select' && DCA != 'Select' && SubDCA != 'Select' && DcaAmount != "") {
                Cclist += currentRow.find("td").eq(2).find("select option:selected").val() + ",";
                Dcalist += currentRow.find("td").eq(3).find("select option:selected").val() + ",";
                Subdcalist += currentRow.find("td").eq(4).find("select option:selected").val() + ",";
                Amountslist += currentRow.find("td").eq(5).find("input[type='text']").val() + ",";
            }
        });
    }
    //$("#AdvPayTaxTable tbody tr").each(function () {
    //    var currentRow = $(this);
    //    var rowno = currentRow.find("td").eq(0).html();
    //    var taxtypeindex = currentRow.find("td").eq(1).find("select option:selected").text();
    //    var taxdcaindex = currentRow.find("td").eq(2).find("select option:selected").text();
    //    var taxsdcavindex = currentRow.find("td").eq(3).find("select option:selected").text();
    //    var taxnameindex = currentRow.find("td").eq(4).find("select option:selected").text();
    //    var taxamountval = currentRow.find("td").eq(5).find("input[type='text']").val();
    //    subtotal = parseFloat(subtotal) + parseFloat(taxamountval);
    //    if (taxtypeindex != 'Select' && taxdcaindex != 'Select' && taxsdcavindex != 'Select' && taxnameindex != 'Select' && taxamountval!=""){
    //    taxtypes += currentRow.find("td").eq(1).find("select option:selected").text();
    //    taxtypes += ",";
    //        taxdcas += currentRow.find("td").eq(2).find("select option:selected").val();
    //    taxdcas += ",";
    //        taxsdcas += currentRow.find("td").eq(3).find("select option:selected").val();
    //    taxsdcas += ",";
    //    taxnames += currentRow.find("td").eq(4).find("select option:selected").text();
    //    taxnames += ",";
    //    taxAmounts += currentRow.find("td").eq(5).find("input[type='text']").val();
    //    taxAmounts += ",";
    //    }
    //});
    //var invtotal = parseFloat(basic) + parseFloat(subtotal);
    var saveAdvPay = {
        Client: $("#ddlAdvPayClient option:selected").val(),
        SubClient: $("#ddlAdvPaysubClient option:selected").val(),
        CCCode: $("#ddlAdvPayCC option:selected").val(),
        PONo: $("#ddlAdvPayPO option:selected").text(),
        RequestDate: $("#txtAdvPayReqDate").val(),
        RANo: $("#txtAdvPayRANo").val(),
        BasicValue: $("#txtAdvPayBasicValue").val(),
        BankId: $("#ddlAdvPayBank option:selected").val(),
        TransactionDate: $("#txtAdvbPayDate").val(),
        Number: $("#txtAdvPayNo").val(),
        Remarks: $("#txtAdvPayRemarks").val(),
        Amount: $("#txtAdvPayBasicValue").val(),
        PaytypeId: $("#ddl_ClRecCategoryddl option:selected").val(),
        //Taxtypes:taxtypes,
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
        Roleid: $("#txtClientAdvRoleId").val(),
        Action: 'New'
    };
    debugger;
    addFailMsg = "Error Occurred While Adding Advance Payment.";
    addSuccessMsg = "Advance Payment Saved Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/SaveClientAdvancePayment',
        data: { advPay: saveAdvPay },
        success: function (Data) {
            // alert("Hi");
            if (Data.saveStatus == "Advance Submited") {
                $("#btnAdvPaySubmit").prop("disabled", true);
                $("#divAdvPayInfoMsg").text(addSuccessMsg);
                $("#divAdvPayInfoMsg").removeClass("hidden alert-danger");
                $("#divAdvPayInfoMsg").addClass("alert-success");
            }
            else {
                $("#btnAdvPaySubmit").prop("disabled", true);
                $("#divAdvPayInfoMsg").text(Data.saveStatus);
                $("#divAdvPayInfoMsg").addClass("alert-danger");
                $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
            }


        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            $("#btnAdvPaySubmit").prop("disabled", true);
            $("#divAdvPayInfoMsg").text(addFailMsg);
            $("#divAdvPayInfoMsg").addClass("alert-danger");
            $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
        }
    });
}
function ResetAdvancePayData() {
    $("#btnAdvPaySubmit").prop("disabled", false);
    location.reload();
}



function BindCashDcaCode() {


    var index = $("#ddlGICashCCCode option:selected").index();
    var CCVal = $("#ddlGICashCCCode option:selected").val();
    var dca = $("#ddlGICashDCACode");
    if (index != 0) {
        //bind invoice type        
        $.ajax({
            type: "POST",
            url: "/Accounts/GetAllCashDCAs",
            data: '{Cashcc:"' + CCVal + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                dca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    dca.append($("<option></option>").val(this['CashDCA_Id']).html(this['CashDCA_Code']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }


}

function BindCashSDcaCode() {

    var index = $("#ddlGICashDCACode option:selected").index();
    var CCVal = $("#ddlGICashDCACode option:selected").val();

    if (index != 0) {
        //bind invoice type        
        $.ajax({
            type: "POST",
            url: "/Accounts/GetCashSDCA",
            data: '{Cashdca:"' + CCVal + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var sdca = $("#ddlGICashSDCACode");
                sdca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    sdca.append($("<option></option>").val(this['CashSDCA_Id']).html(this['CashSDCA_Code']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }


}
//script for general invoice cash Ends

//Script for CC Cash Tranfer Cash Starts

function btncccashtransfercash() {

    var errorMsg = "";
    isValid = true;
    var SelfCashTransferCCCode = $("#ddlcashTransferCCCode option:selected").index();
    var CashTransferCCCode = $("#ddlCashCCCode option:selected").index();
    var CashTransferDate = $("#txtCCCashdate").val();
    var CashTransferRemarks = $("#txtCCCashRemarks").val();
    var CashTransferAmount = $("#txtCCCashAmount").val();
    if (SelfCashTransferCCCode == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Self Cost Center</p>";
        isValid = false;
    }
    if (CashTransferCCCode == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Other Cost Center</p>";
        isValid = false;
    }
    if (CashTransferDate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Date</p>";
        isValid = false;
    }
    if (CashTransferRemarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (CashTransferAmount == "" || CashTransferAmount == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (CashTransferAmount == "0") {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Amount</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divcccashtransferInfoMsg").text("");
        $("#divcccashtransferInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divcccashtransferInfoMsg").addClass("alert-danger");
        $("#divcccashtransferInfoMsg").removeClass("hidden alert-success");
        return false;

    }
    else {
        $("#divcccashtransferInfoMsg").text("");
        $("#divcccashtransferInfoMsg").addClass("hidden");
        AddCCCashTransferDetails();

    }
}
function AddCCCashTransferDetails() {

    var cccashtransferdetails = {
        CashTransferCCCode: $("#ddlCashCCCode option:selected").val(),
        CCTransferDate: $("#txtCCCashdate").val(),
        CCTransferRemarks: $("#txtCCCashRemarks").val(),
        CCTransferAmount: $("#txtCCCashAmount").val(),
        RoleID: $("#txtcccasttransferRoleId").val(),
        GPSessionCCCode: $("#ddlcashTransferCCCode option:selected").val(),
        Createdby: $("#txtGeneralceratedbyCCTransfer").val()

    };
    addFailMsg = "Error Occurred While Adding New Bank Details.";
    //addSuccessMsg = "Bank Details Added Successfully.";
    //alert('submit');

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/NewSaveCCCashtransferDetails',
        data: { newCCCashtransferDetails: cccashtransferdetails },
        success: function (Data) {
            if (Data.saveStatus == "Successfull") {
                $("#divcccashtransferInfoMsg").text(Data.saveStatus);
                $("#divcccashtransferInfoMsg").removeClass("hidden alert-danger");
                $("#divcccashtransferInfoMsg").addClass("alert-success");
                $("#btnsubmitcccashtransfer").prop("disabled", true);

            }
            else {
                $("#divcccashtransferInfoMsg").text(Data.saveStatus);
                $("#divcccashtransferInfoMsg").addClass("alert-danger");
                $("#divcccashtransferInfoMsg").removeClass("hidden alert-success");
                $("#btnsubmitcccashtransfer").prop("disabled", false);

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divcccashtransferInfoMsg").text(addFailMsg);
            $("#divcccashtransferInfoMsg").addClass("alert-danger");
            $("#divcccashtransferInfoMsg").removeClass("hidden alert-success");
            $("#btnsubmitcccashtransfer").prop("disabled", true);

        }
    });

}

function resetcccashtransfer() {
    $('#ddlcashTransferCCCode').prop('selectedIndex', 0);
    $('#ddlCashCCCode').prop('selectedIndex', 0);
    $("#txtCCCashdate").val("");
    $("#txtCCCashRemarks").val("");
    $("#txtCCCashAmount").val("");
    $("#txtcccashbalance").val("");
    $("#divcccashtransferInfoMsg").text("");
    $("#divcccashtransferInfoMsg").addClass("hidden");
    $("#btnsubmitcccashtransfer").prop("disabled", false);

}
//Script for CC Cash Tranfer Cash Ends

//Script for bank transfer starts
function btnSubmitBankTransferData() {
    //debugger;
    //var name = $("#txtBanktranferName").val();
    var from = $("#ddl_TranFrom option:selected").index();
    var to = $("#ddl_TranTo option:selected").index();
    var modeofpay = $("#ddl_TansferPayMode option:selected").index();
    var date = $("#txtTransferDate1").val();
    var remarks = $("#txttransferRemarks").val();
    var amount = $("#txtTransferAmount").val();
    var errorMsg = "";
    isValid = true;
    //if (name == "" || name == null) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
    //    isValid = false;
    //}
    if (from == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select From Bank </p>";
        isValid = false;
    }
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
    if (modeofpay == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode of Pay </p>";
        isValid = false;
    }
    if (modeofpay > 0) {
        if (modeofpay == 1) {
            var Chequenos = $("#ddl_Transferchequenos option:selected").val();
            if (Chequenos == "Select") {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var no = $("#txtTansferNo").val();
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
        $("#divBankTransferInfoMsg").text("");
        $("#divBankTransferInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divBankTransferInfoMsg").addClass("alert-danger");
        $("#divBankTransferInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divBankTransferInfoMsg").text("");
        $("#divBankTransferInfoMsg").addClass("hidden");
        AddbanktransferDetails();
    }
}
function DepositPayModeChange() {
    var PayMode = $('#ddl_TansferPayMode option:selected').text();
    var PayModeIndex = $('#ddl_TansferPayMode option:selected').index();
    if (PayModeIndex == 1) {
        $("#ddl_Transferchequenos").removeClass("hidden");
        $("#txtTansferNo").addClass("hidden");
        var Bank = $('#ddl_TranFrom option:selected').text();
        //var ddlChequeNo = $("#ddl_Transferchequenos");
        $.ajax({
            type: "POST",
            url: "/Accounts/BindWdCheques",
            data: '{BankName:"' + Bank + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var chequeddl = $('#ddl_Transferchequenos');
                chequeddl.empty().append('<option selected="selected" value="Select">-Select-</option>');
                //$('#ddl_Transferchequenos').get(0).selectedIndex = 0;
                $.each(response, function () {
                    //alert(response.Cheque_No);
                    chequeddl.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });

    }
    else {

        $("#txtTansferNo").removeClass("hidden");
        $("#ddl_Transferchequenos").addClass("hidden");
    }

}

function AddbanktransferDetails() {
    //debugger;
    var banktransferDetails = {
        //Name: $("#txtBanktranferName").val(),
        From: $("#ddl_TranFrom option:selected").val(),
        Mode_of_Pay: $("#ddl_TansferPayMode option:selected").val(),
        No: $("#txtTansferNo").val(),
        Chequeid: $("#ddl_Transferchequenos option:selected").val(),
        To: $("#ddl_TranTo option:selected").val(),
        Date: $("#txtTransferDate1").val(),
        Remarks: $("#txttransferRemarks").val(),
        RoleID: $("#txtbanktransferRoleId").val(),
        Amount: $("#txtTransferAmount").val()
    };
    addFailMsg = "Error Occurred While Transfer Bank.";
    addSuccessMsg = "Bank Transfer successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/NewSavebanktransferDetails',
        data: { newbanktransferDetails: banktransferDetails },
        success: function (Data) {
            if (Data.saveStatus == "Successfull") {
                $("#divBankTransferInfoMsg").text(addSuccessMsg);
                $("#divBankTransferInfoMsg").removeClass("hidden alert-danger");
                $("#divBankTransferInfoMsg").addClass("alert-success");
                $("#btnTransferSubmit").prop("disabled", true);

            }
            else {
                $("#divBankTransferInfoMsg").text(Data.saveStatus);
                $("#divBankTransferInfoMsg").addClass("alert-danger");
                $("#divBankTransferInfoMsg").removeClass("hidden alert-success");
                $("#btnTransferSubmit").prop("disabled", false);

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divBankTransferInfoMsg").text(addFailMsg);
            $("#divBankTransferInfoMsg").addClass("alert-danger");
            $("#divBankTransferInfoMsg").removeClass("hidden alert-success");
            $("#btnTransferSubmit").prop("disabled", false);

        }
    });

}
function btnResettransferData() {
    $("#txtBanktranferName").val("");
    $('#ddl_TranFrom').prop('selectedIndex', 0);
    $('#ddl_TranTo').prop('selectedIndex', 0);
    $('#ddl_TansferPayMode').prop('selectedIndex', 0);
    $("#ddl_Transferchequenos").empty().append('<option selected="selected" value="Select">-Select-</option>');
    $("#txtTansferNo").val("");
    $("#txtTransferAmount").val("");
    $("#txttransferRemarks").val("");
    $("#divBankTransferInfoMsg").text("");
    $("#divBankTransferInfoMsg").addClass("hidden");
    $("#btnTransferSubmit").prop("disabled", false);
}
//Script for bank transfer ends

//Cash Vocher Report Script
function CashVocherReportChange() {
    //alert();

    var report = $("#ddlReportName option:selected").val();
    var reportindex = $("#ddlReportName option:selected").index();
    //if (reportindex == 0) { }
    if (reportindex !== 0) {
        if (report === "CashVoucher") {
            $("#divCashVoucherReportFilters").removeClass('hidden');
            var ddlpaidagainst = $('#ddlCashVoucherPACC');
            ddlpaidagainst.append($("<option></option>").val('SelectAll').html('SelectAll'));

            $.ajax({
                type: "POST",
                url: "/Accounts/GetCashBookPaidAgainstCC",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var ddlCashVoucherPACC = $('#ddlCashVoucherPACC');
                    // ddlCashVoucherPACC.empty().append('<option selected="selected" value="Select">-Select-</option>');
                    $.each(response, function () {
                        ddlCashVoucherPACC.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
                    });

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });

            $("#divbyDCA").addClass('hidden');
            $("#divbyIT").addClass('hidden');
            $("#divCVRDate").addClass('hidden');
        }

    }



}
function CashVoucherPACCChange() {
    var paidagainst = $("#ddlCashVoucherPACC option:selected").text();
    var paidagainstindex = $("#ddlCashVoucherPACC option:selected").index();
    if (paidagainstindex == 0) {
        $("#divbyDCA").addClass('hidden');
        $("#divbyIT").addClass('hidden');
        $("#divCVRDate").addClass('hidden');
        var ddlpaidto = $('#ddlCVPaidToCC');
        ddlpaidto.empty().append('<option selected="selected" value="Select">Select</option>');
        //var selectedIds = [];
        //var checkboxes = document.getElementsByName('CashVocherbyType');
        //for (var i in checkboxes)
        //    checkboxes[i].checked = checkbox.checked;
        //checkboxes.forEach((item) => {
        //    if (item !== checkbox) item.checked = false;
        //});
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetCashBookPaidToCC",
            data: '{CCCode:"' + paidagainst + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlpaidto = $('#ddlCVPaidToCC');
                ddlpaidto.empty().append('<option selected="selected" value="Select">Select</option>');
                ddlpaidto.append($("<option></option>").val('SelectAll').html('SelectAll'));
                $.each(response, function () {
                    ddlpaidto.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });


    }

}

function CashVocherbyTypeSelection(checkbox) {
    var selectedIds = []; p
    var checkboxes = document.getElementsByName('CashVocherbyType');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    var ids = document.getElementsByName('CashVocherbyType');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked == true) {
            // alert(ids[i].value);
            if (ids[i].value == 'byDCA') {
                var pa = $("#ddlCashVoucherPACC option:selected").text();
                var pto = $("#ddlCVPaidToCC option:selected").text();

                $.ajax({
                    type: "POST",
                    url: "/Accounts/GetCashBookDCA",
                    data: '{CCCode:"' + pto + '",PaidAgainstCC:"' + pa + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var ddlCVDCA = $('#ddlCVDCA');
                        ddlCVDCA.empty().append('<option selected="selected" value="Select">Select</option>');
                        ddlCVDCA.append($("<option></option>").val('SelectAll').html('SelectAll'));
                        $.each(response, function () {
                            ddlCVDCA.append($("<option></option>").val(this['DCAID']).html(this['DCACode']));
                        });
                        $("#divbyDCA").removeClass('hidden');
                        $("#divbyIT").addClass('hidden');
                        $("#divCVRDate").removeClass('hidden');

                    },
                    failure: function (response) {

                    },
                    error: function (response) {

                    }
                });

            }
            else if (ids[i].value == 'byIT') {

                var pa = $("#ddlCashVoucherPACC option:selected").text();
                var pto = $("#ddlCVPaidToCC option:selected").text();

                $.ajax({
                    type: "POST",
                    url: "/Accounts/GetCashBookITCodes",
                    data: '{CCCode:"' + pto + '",PaidAgainstCC:"' + pa + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var ddlCVIT = $('#ddlCVIT');
                        ddlCVIT.empty().append('<option selected="selected" value="Select">Select</option>');
                        ddlCVIT.append($("<option></option>").val('SelectAll').html('SelectAll'));
                        $.each(response, function () {
                            ddlCVIT.append($("<option></option>").val(this['ITCodeID']).html(this['ITCode']));
                        });
                        $("#divbyDCA").addClass('hidden');
                        $("#divbyIT").removeClass('hidden');
                        $("#divCVRDate").removeClass('hidden');

                    },
                    failure: function (response) {

                    },
                    error: function (response) {

                    }
                });
            }
        }
    }


}
function CashVocherDCAhange() {
    var paidagainst = $("#ddlCashVoucherPACC option:selected").text();
    var pto = $("#ddlCVPaidToCC option:selected").text();
    var dca = $("#ddlCVDCA option:selected").text();
    var dcaindex = $("#ddlCVDCA option:selected").index();
    if (dcaindex == 0) {
        var ddlCVSDCA = $('#ddlCVSDCA');
        ddlCVSDCA.empty().append('<option selected="selected" value="Select">Select</option>');
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetCashBookSDCA",
            data: '{CCCode:"' + pto + '",DCACode:"' + dca + '",PaidAgainstCC:"' + paidagainst + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ddlCVSDCA = $('#ddlCVSDCA');
                ddlCVSDCA.empty().append('<option selected="selected" value="Select">Select</option>');
                ddlCVSDCA.append($("<option></option>").val('SelectAll').html('Select All'));
                $.each(response, function () {
                    ddlCVSDCA.append($("<option></option>").val(this['SubDCAID']).html(this['SubDCACode']));
                });

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });


    }


}
function ShowCashVoucherReport() {
    //isValid = true;
    //var errorMsg = "";
    //var PaidAgainstCC = $("#ddlDCAAmendType option:selected").index();
    //var PaidToCC = $("#ddlCVPaidToCC option:selected").index();
    //if (amount == "") {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
    //    isValid = false;
    //} 

    //if (!isValid) {
    //    var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
    //    $("#divReportFilterInfoMsg").text("");
    //    $("#divReportFilterInfoMsg").append(finalerror + errorMsg + "</div>");
    //    $("#divReportFilterInfoMsg").addClass("alert-danger");
    //    $("#divReportFilterInfoMsg").removeClass("hidden alert-success");
    //    $("#divReportFilterInfoMsg").attr("disabled", false);
    //}
    //else {

    var day = $("#ddlCVDay option:selected").val();
    var Month = $("#ddlCVMonth option:selected").val();
    var Year = $("#ddlCVYear option:selected").val();
    var Fromdate, Todate;
    if ($("#ddlCVDay option:selected").index != 0 && $("#ddlCVMonth option:selected").index() != 0) {
        var yearsArr = Year.split('-');
        //alert(yearsArr.length);
        var frm = yearsArr[0];
        var to = parseInt(frm) + parseInt(1);

        Fromdate = frm + "-" + Month + "-" + day;
        Todate = to + "-" + Month + "-" + day;
    }
    if ($('#chkbyDCA').is(":checked")) { ReportBy = "DCA"; }
    if ($('#chkbyIT').is(":checked")) { ReportBy = "IT" }


    var getCV = {};
    getCV = {
        PaidAgainstCC: $("#ddlCashVoucherPACC option:selected").text(),
        PaidToCC: $("#ddlCVPaidToCC option:selected").text(),
        DCA: $("#ddlCVDCA option:selected").text(),
        SubDCA: $("#ddlCVSDCA option:selected").text(),
        ITCode: $("#ddlCVIT option:selected").text(),
        Fromdate: Fromdate,
        Todate: Todate,
        ReportBy: ReportBy,
        Role: $("#txtCVRRole").val(),
        SessionCC: $("#txtCVRSesCC").val(),
        User: $("#txtCVRSesUser").val()
    };


    //var PaidAgainstCC = $("#ddlCashVoucherPACC option:selected").text();
    //var PaidToCC = $("#ddlCVPaidToCC option:selected").text();
    //var DCA = $("#ddlCVDCA option:selected").text();
    //var SubDCA = $("#ddlCVSDCA option:selected").text();
    //var ITCode = $("#ddlCVIT option:selected").text();
    //var Fromdate = Fromdate;
    //var Todate = Todate;
    //var ReportBy = ReportBy;
    //var Role = $("#txtCVRRole").val();
    //var SessionCC = $("#txtCVRSesCC").val();
    //var User = $("#txtCVRSesUser").val(); 


    $.ajax({
        type: "POST",
        url: "/Accounts/ControllerMethodHere",
        data: JSON.stringify({ getCashvocher: getCV }),
        // data: '{PaidAgainstCC:"' + PaidAgainstCC + '",PaidToCC:"' + PaidToCC + '",DCA:"' + DCA + '",SubDCA:"' + SubDCA + '",ITCode:"' + ITCode + '",Fromdate:"' + Fromdate + '",Todate:"' + Todate + '",ReportBy:"' + ReportBy + '",Role:"' + Role + '",SessionCC:"' + SessionCC + '",User:"' + User +'"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            window.location.href = response.redirectTo;

        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });
    //}

}
function GetCashVoucherTotalDetails() {
    var getCV = {};

    getCV = {
        PaidAgainstCC: $("#txtcvrvPaidAga").val(),
        PaidToCC: $("#txtcvrvPaidto").val(),
        DCA: $("#txtcvrvDCA").val(),
        SubDCA: $("#txtcvrvSubDCA").val(),
        ITCode: $("#txtcvrvITCode").val(),
        Fromdate: $("#txtcvrvFromdate").val(),
        Todate: $("#txtcvrvTodate").val(),
        ReportBy: $("#txtcvrvReportBy").val(),
        Role: $("#txtcvrvPRole").val(),
        SessionCC: $("#txtcvrvSessionCC").val(),
        User: $("#txtcvrvUser").val()
    };
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/GetCashVocherRepostTotal',
        data: { getCashvocher: getCV },
        success: function (Data) {
            $.each(Data, function () {

                $('#tblCashReportDetails tfoot tr:last').before('<tr><th></th><th>Credit Total:&nbsp;' + this['CreditTotal'] + '</th><th>Debit Total:&nbsp;' + this['DebitTotal'] + '</th><th><th></th><th></th><th></th>');
                $('#tblCashReportDetails tfoot tr:last').before('<tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th>');

            });

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });



}

function ValidateITCode(txt, event) {
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
        if ((txtlen - dotpos) > 10)
            return false;
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
//create Taxes
function ViewAddNewGeneralTaxModel() {
    $('#AddNewGenTaxModal').modal('show');
    ClearAddNewGeneralTax();
}
function ClearAddNewGeneralTax() {
    $("#txtgtaxname").val("");
    $("#txtgTaxdate").datepicker("setDate", 'dateToday');
    $("#ddlgtaxdcacode").prop('selectedIndex', 0);
    var sdcaddl = $("#ddlgtaxsubdca");
    sdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    $("#txtgtaxno").val("");
    $("#txtgdescription").val("");
    $("#divAddGenTaxInfoMsg").text("");
    $("#divAddGenTaxInfoMsg").addClass("hidden");
    $("#btnSubmitGentax").prop('disabled', false);
}
function GeneralTaxDcaChange() {

    var dcaindex = $("#ddlgtaxdcacode option:selected").index();
    var dca = $("#ddlgtaxdcacode option:selected").val();
    var sdcaddl = $("#ddlgtaxsubdca");
    if (dcaindex == 0) {
        sdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    } else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetSubDCAbyDCA",
            data: '{DCACode:"' + dca + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                sdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    sdcaddl.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function SubmitGeneralTaxes() {

    isValid = true;
    var errorMsg = "";
    var taxname = $("#txtgtaxname").val();
    var Applicabledate = $("#txtgTaxdate").val();
    var dca = $("#ddlgtaxdcacode option:selected").index();
    var sdca = $("#ddlgtaxsubdca option:selected").index();
    var taxno = $("#txtgtaxno").val();
    var remarks = $("#txtgdescription").val();
    if (taxname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Name</p>";
        isValid = false;
    }
    if (Applicabledate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Applicable From Date</p>";
        isValid = false;
    }
    if (dca == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
        isValid = false;
    }
    if (sdca == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Account Head</p>";
        isValid = false;
    }
    if (taxno == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Number</p>";
        isValid = false;
    }
    if (remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAddGenTaxInfoMsg").text("");
        $("#divAddGenTaxInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divAddGenTaxInfoMsg").addClass("alert-danger");
        $("#divAddGenTaxInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divAddGenTaxInfoMsg").text("");
        $("#divAddGenTaxInfoMsg").addClass("hidden");
        //////debugger;
        var saveNewGenTax = {
            TaxName: $("#txtgtaxname").val(),
            TaxNo: $("#txtgtaxno").val(),
            TaxType: 'General',
            TaxFor: $("#ddlgtaxdcacode option:selected").val(),
            SubDCA: $("#ddlgtaxsubdca option:selected").val(),
            Remarks: $("#txtgdescription").val(),
            CreatedBy: $("#txtCreatedby").val(),
            Action: 'Add',
            TaxId: 0,
            RoleId: $("#txtGeneralTaxRoleId").val(),
            ApplicableFrom: $("#txtgTaxdate").val(),
        };
        addFailMsg = "Error Occurred While Adding Tax";
        addSuccessMsg = "Tax Detials Added Successfully.";
        $.ajax({
            type: "POST",
            url: "/Accounts/SaveGeneralTax",
            data: JSON.stringify({ createTax: saveNewGenTax }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $("#btnSubmitGentax").prop('disabled', true);
                    $("#divAddGenTaxInfoMsg").text(addSuccessMsg);
                    $("#divAddGenTaxInfoMsg").removeClass("hidden alert-danger");
                    $("#divAddGenTaxInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnSubmitGentax").prop('disabled', true);
                    $("#divAddGenTaxInfoMsg").text(addFailMsg);
                    $("#divAddGenTaxInfoMsg").addClass("alert-danger");
                    $("#divAddGenTaxInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $("#btnSubmitGentax").prop('disabled', true);
                $("#divAddGenTaxInfoMsg").text(addFailMsg);
                $("#divAddGenTaxInfoMsg").addClass("alert-danger");
                $("#divAddGenTaxInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
function GenTaxGridActionChange(TaxId, TaxNo, TaxName, TaxFor, SubDCA, Remarks, ApplicableFrom, txt) {
    var Action = txt.value;
    //alert(Action);
    if (Action == "E") {
        $("#EditGenTaxModal").modal('show');
        $("#txtUpgtaxTaxId").val(TaxId);
        $("#txtUpgtaxTaxNo").val(TaxNo);
        $("#txtUpgtaxTaxAppFrm").val(ApplicableFrom);
        $("#txtUpgtaxTaxDca").val(TaxFor);
        $("#txtUpgtaxTaxsdca").val(SubDCA);
        $("#txtUpgtaxTaxName").val(TaxName);
        $("#txtUpgtaxTaxRemarks").val(Remarks);
        $("#divUpGenTaxInfoMsg").text("");
        $("#divUpGenTaxInfoMsg").addClass("hidden");
        $("#btnUpGentax").prop('disabled', false);
    }
    else if (Action == "D") {
        //// alert(Action);
        $("#DeleteGenTaxModel").modal('show');
        $("#lbldelGenTaxNo").html(TaxNo + " - " + TaxName);
        $("#txtdeleteGenTaxid").val(TaxId);
        $("#confirmbtndeletegentax").removeClass('hidden');
        $("#txtdelgtaxTaxAppFrm").val(ApplicableFrom);
        $("#divDeleteGenTaxInfoMsg").text("");
        $("#divDeleteGenTaxInfoMsg").addClass("hidden");
        $("#btndeleteGenTax").prop('disabled', false);
    }


}
function UpdateGeneralTaxes() {
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
            CreatedBy: $("#txtCreatedby").val(),
            Action: 'Update',
            TaxId: $("#txtUpgtaxTaxId").val(),
            DcaId: 0,
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
                    $("#btnUpGentax").prop('disabled', true);
                    $("#divUpGenTaxInfoMsg").text(addSuccessMsg);
                    $("#divUpGenTaxInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpGenTaxInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpGentax").prop('disabled', true);
                    $("#divUpGenTaxInfoMsg").text(addFailMsg);
                    $("#divUpGenTaxInfoMsg").addClass("alert-danger");
                    $("#divUpGenTaxInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $("#btnUpGentax").prop('disabled', true);
                $("#divUpGenTaxInfoMsg").text(addFailMsg);
                $("#divUpGenTaxInfoMsg").addClass("alert-danger");
                $("#divUpGenTaxInfoMsg").removeClass("hidden alert-success");
            }
        });
    }

}
function DeleteGeneralTax() {

    var updateNewGenTax = {
        CreatedBy: $("#txtCreatedby").val(),
        Action: 'Delete',
        TaxId: $("#txtdeleteGenTaxid").val(),
        ApplicableFrom: $("#txtdelgtaxTaxAppFrm").val()
    };
    addFailMsg = "Error Occurred While deleting Tax";
    addSuccessMsg = "Tax Detials Deleted Successfully.";
    $.ajax({
        type: "POST",
        url: "/Accounts/UpdateGeneralTax",
        data: JSON.stringify({ createTax: updateNewGenTax }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.saveStatus == "Submitted") {
                // $("#btndeleteGenTax").prop('disabled', true);
                $("#divDeleteGenTaxInfoMsg").text(addSuccessMsg);
                $("#divDeleteGenTaxInfoMsg").removeClass("hidden alert-danger");
                $("#divDeleteGenTaxInfoMsg").addClass("alert-success");
                $("#confirmbtndeletegentax").addClass('hidden');
            }
            else {
                // $("#btndeleteGenTax").prop('disabled', true);
                $("#divDeleteGenTaxInfoMsg").text(addFailMsg);
                $("#divDeleteGenTaxInfoMsg").addClass("alert-danger");
                $("#divDeleteGenTaxInfoMsg").removeClass("hidden alert-success");
                $("#confirmbtndeletegentax").addClass('hidden');
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //  $("#btndeleteGenTax").prop('disabled', true);

            $("#divDeleteGenTaxInfoMsg").text(addFailMsg);
            $("#divDeleteGenTaxInfoMsg").addClass("alert-danger");
            $("#divDeleteGenTaxInfoMsg").removeClass("hidden alert-success");
            $("#confirmbtndeletegentax").addClass('hidden');
        }
    });
}

function ViewAddNewGstTaxModel() {
    $('#AddNewGstTaxModal').modal('show');
    ClearAddNewGstTax();
}
function ClearAddNewGstTax() {
    $("#txtgstaxname").val("");
    $("#txtgsTaxdate").datepicker("setDate", 'dateToday');
    $("#ddlgstaxdcacode").prop('selectedIndex', 0);
    var sdcaddl = $("#ddlgstaxsubdca");
    sdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    $("#txtgstaxno").val("");
    $("#ddlgstaxstate").prop('selectedIndex', 0);
    $("#txtgsdescription").val("");
    $("#divAddGstTaxInfoMsg").text("");
    $("#divAddGstTaxInfoMsg").addClass("hidden");
    $("#btnSubmitGsttax").prop('disabled', false);

}

function SubmitGstTaxes() {
    isValid = true;
    var errorMsg = "";
    var taxname = $("#txtgstaxname").val();
    var Applicabledate = $("#txtgsTaxdate").val();
    var dca = $("#ddlgstaxdcacode option:selected").index();
    //var sdca = $("#ddlgstaxdcacode option:selected").index();
    var taxno = $("#txtgstaxno").val();
    var remarks = $("#txtgsdescription").val();
    var state = $("#ddlgstaxstate option:selected").index();
    if (taxname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Name</p>";
        isValid = false;
    }
    if (Applicabledate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Applicable From Date</p>";
        isValid = false;
    }
    if (dca == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
        isValid = false;
    }
    //if (sdca == "") {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Account Head</p>";
    //    isValid = false;
    //}
    if (taxno == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Tax Number</p>";
        isValid = false;
    }
    if (remarks == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter remarks</p>";
        isValid = false;
    }
    if (state == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select State</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAddGstTaxInfoMsg").text("");
        $("#divAddGstTaxInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divAddGstTaxInfoMsg").addClass("alert-danger");
        $("#divAddGstTaxInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divAddGstTaxInfoMsg").text("");
        $("#divAddGstTaxInfoMsg").addClass("hidden");
        //////debugger;
        var saveNewGstTax = {
            TaxName: $("#txtgstaxname").val(),
            TaxNo: $("#txtgstaxno").val(),
            TaxType: 'GST',
            TaxFor: $("#ddlgstaxdcacode option:selected").val(),
            Remarks: $("#txtgsdescription").val(),
            CreatedBy: $("#txtCreatedby").val(),
            Action: 'Add',
            TaxId: 0,
            RoleId: $("#txtGsttaxRoleId").val(),
            ApplicableFrom: $("#txtgsTaxdate").val(),
            StateId: $("#ddlgstaxstate option:selected").val(),
        };
        //var saveNewGstTax = {
        //    TaxName: $("#txtgstaxname").val(),
        //    TaxNo: $("#txtgstaxno").val(),
        //    TaxType: 'GST',
        //    TaxFor: $("#ddlgstaxdcacode option:selected").val(),
        //    SubDCA: $("#ddlgstaxsubdca option:selected").val(),
        //    Remarks: $("#txtgsdescription").val(),
        //    CreatedBy: $("#txtCreatedby").val(),
        //    Action: 'Add',
        //    TaxId: 0,
        //    RoleId: $("#txtGsttaxRoleId").val(),
        //    ApplicableFrom: $("#txtgsTaxdate").val(),
        //    StateId: $("#ddlgstaxstate option:selected").val(),
        //};
        addFailMsg = "Error Occurred While Adding Tax";
        addSuccessMsg = "Tax Detials Added Successfully.";
        $.ajax({
            type: "POST",
            url: "/Accounts/SaveGstTax",
            data: JSON.stringify({ createTax: saveNewGstTax }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $("#btnSubmitGsttax").prop('disabled', true);
                    $("#divAddGstTaxInfoMsg").text(addSuccessMsg);
                    $("#divAddGstTaxInfoMsg").removeClass("hidden alert-danger");
                    $("#divAddGstTaxInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnSubmitGsttax").prop('disabled', true);
                    $("#divAddGstTaxInfoMsg").text(addFailMsg);
                    $("#divAddGstTaxInfoMsg").addClass("alert-danger");
                    $("#divAddGstTaxInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $("#btnSubmitGsttax").prop('disabled', true);
                $("#divAddGstTaxInfoMsg").text(addFailMsg);
                $("#divAddGstTaxInfoMsg").addClass("alert-danger");
                $("#divAddGstTaxInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
function GstTaxDcaChange() {
    var dcaindex = $("#ddlgstaxdcacode option:selected").index();
    var dca = $("#ddlgstaxdcacode option:selected").val();
    var sdcaddl = $("#ddlgstaxsubdca");
    if (dcaindex == 0) {
        sdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    } else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetSubDCAbyDCA",
            data: '{DCACode:"' + dca + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                sdcaddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    sdcaddl.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });


            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function GstTaxGridActionChange(TaxId, TaxNo, TaxName, TaxFor, SubDCA, State, Remarks, ApplicableFrom, txt) {
    var Action = txt.value;

    var oldappldate = ApplicableFrom;
    var adate = "'" + oldappldate + "'";
    var adate1 = moment(adate, "DD-MM-YYYY").format('DD-MMM-YYYY');

    if (Action == "E") {
        $("#EditGstTaxModal").modal('show');
        $("#txtUpgstaxTaxId").val(TaxId);
        $("#txtUpgstaxTaxNo").val(TaxNo);

        $("#txtUpgstaxTaxAppFrm").val(adate1);
        $("#txtUpgstaxTaxDca").val(TaxFor);
        // $("#txtUpgsTaxsdca").val(SubDCA);
        $("#txtUpgstaxTaxState").val(State);
        $("#txtUpgsTaxName").val(TaxName);
        $("#txtUpgsTaxRemarks").val(Remarks);
        $("#divUpGstTaxInfoMsg").text("");
        $("#divUpGstTaxInfoMsg").addClass("hidden");
        $("#btnUpGsttax").prop('disabled', false);
    }
    else if (Action == "D") {
        //// alert(Action);
        $("#DeleteGstTaxModel").modal('show');
        $("#lbldelGstTaxNo").html(TaxNo + " - " + TaxName);
        $("#txtdeleteGstTaxid").val(TaxId);
        $("#confirmbtndeletegsttax").removeClass('hidden');
        $("#txtdelgstTaxAppFrm").val(adate1);
        $("#divDeleteGstTaxInfoMsg").text("");
        $("#divDeleteGstTaxInfoMsg").addClass("hidden");
        $("#btndeleteGstTax").prop('disabled', false);
    }

}
function UpdateGstTaxes() {

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
            CreatedBy: $("#txtCreatedby").val(),
            Action: 'Update',
            TaxId: $("#txtUpgstaxTaxId").val(),
            DcaId: 0,
            ApplicableFrom: $("#txtUpgstaxTaxAppFrm").val(),
        };

        //var updateGstTax = {
        //    TaxName: $("#txtUpgsTaxName").val(),
        //    TaxNo: $("#txtUpgstaxTaxNo").val(),
        //    TaxType: 'GST',
        //    TaxFor: $("#txtUpgstaxTaxDca").val(),
        //    SubDCA: $("#txtUpgsTaxsdca").val(),
        //    Remarks: $("#txtUpgsTaxRemarks").val(),
        //    CreatedBy: $("#txtCreatedby").val(),
        //    Action: 'Update',
        //    TaxId: $("#txtUpgstaxTaxId").val(),
        //    DcaId: 0,
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
                    $("#btnUpGsttax").prop('disabled', true);
                    $("#divUpGstTaxInfoMsg").text(addSuccessMsg);
                    $("#divUpGstTaxInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpGstTaxInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpGsttax").prop('disabled', true);
                    $("#divUpGstTaxInfoMsg").text(addFailMsg);
                    $("#divUpGstTaxInfoMsg").addClass("alert-danger");
                    $("#divUpGstTaxInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $("#btnUpGsttax").prop('disabled', true);
                $("#divUpGstTaxInfoMsg").text(addFailMsg);
                $("#divUpGstTaxInfoMsg").addClass("alert-danger");
                $("#divUpGstTaxInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}

function DeleteGstTax() {

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
            CreatedBy: $("#txtCreatedby").val(),
            Action: 'Delete',
            TaxId: $("#txtdeleteGstTaxid").val(),
            ApplicableFrom: $("#txtdelgstTaxAppFrm").val()
        };
        addFailMsg = "Error Occurred While Deleting GST";
        addSuccessMsg = "GST Detials Deleted Successfully.";
        $.ajax({
            type: "POST",
            url: "/Accounts/UpdateGstTax",
            data: JSON.stringify({ createTax: updateGstTax }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $("#btndeleteGstTax").prop('disabled', true);
                    $("#divDeleteGstTaxInfoMsg").text(addSuccessMsg);
                    $("#divDeleteGstTaxInfoMsg").removeClass("hidden alert-danger");
                    $("#divDeleteGstTaxInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btndeleteGstTax").prop('disabled', true);
                    $("#divDeleteGstTaxInfoMsg").text(addFailMsg);
                    $("#divDeleteGstTaxInfoMsg").addClass("alert-danger");
                    $("#divDeleteGstTaxInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $("#btndeleteGstTax").prop('disabled', true);
                $("#divDeleteGstTaxInfoMsg").text(addFailMsg);
                $("#divDeleteGstTaxInfoMsg").addClass("alert-danger");
                $("#divDeleteGstTaxInfoMsg").removeClass("hidden alert-success");
            }
        });
    }

}
//create User
function ViewAddNewUserModel() {
    ClearNewUser();
    $("#AddNewUserModal").modal('show');

}

function checkUsername() {

    var user = $("#txtNUsername").val();
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!expr.test(user)) {
        //alert('not a valid e-mail address');
        $("#divAddUserInfoMsg").text("");
        $("#divAddUserInfoMsg").append("<div>Enter Valid Email Address</div>");
        $("#divAddUserInfoMsg").addClass("alert-danger");
        $("#divAddUserInfoMsg").removeClass("hidden alert-success");
        return false;

    }
    else {
        $("#divAddUserInfoMsg").text("");
        $("#divAddUserInfoMsg").addClass("hidden");

        //alert('valid e-mail address');
    }


}
function PasswordValidator(txt) {
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
        $("#divAddUserInfoMsg").text("");
        $("#divAddUserInfoMsg").append("<div>Password must contain atleast 6 characters</div>");
        $("#divAddUserInfoMsg").addClass("alert-danger");
        $("#divAddUserInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else if (passed > 3) {
        //alert("Valid");
        $("#divAddUserInfoMsg").text("");
        $("#divAddUserInfoMsg").addClass("hidden");
    }
    else {
        $("#divAddUserInfoMsg").text("");
        $("#divAddUserInfoMsg").append("<div>Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,></div>");
        $("#divAddUserInfoMsg").addClass("alert-danger");
        $("#divAddUserInfoMsg").removeClass("hidden alert-success");
        //alert("Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,>");
        return false;
    }
}
function ValidateConfirmPassword() {
    var pwd = $("#txtNPwd").val();
    var Confpwd = $("#txtNConfPwd").val();
    if (pwd != Confpwd) {
        $("#divAddUserInfoMsg").text("");
        $("#divAddUserInfoMsg").append("<div>Confirm Password not matching with Password</div>");
        $("#divAddUserInfoMsg").addClass("alert-danger");
        $("#divAddUserInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divAddUserInfoMsg").text("");
        $("#divAddUserInfoMsg").addClass("hidden");
    }

}

function generateUserPassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function UserActionschange(user, Status, txt) {

    var usrname = user;
    var Action = txt.value;

    if (Action === "Edit") {

        $.ajax({
            type: 'POST',
            url: "/Home/EditUserModal/",
            data: { Username: usrname },
            cache: false,
            success: function (response) {
                $('#EditUserModal').html(response);
                $('#EditUserModal').modal();
                $("#divUpUserInfoMsg").text("");
                $("#divUpUserInfoMsg").addClass("hidden");

                $("#btnUpdateUser").prop('disabled', false);

            },
            error: function () {

            }
        });



    }
    else if (Action === "LeftEmployee") {
        $.ajax({
            type: 'POST',
            url: "/Home/LeftEmployeeModal/",
            data: { Username: usrname },
            cache: false,
            success: function (response) {
                $('#LeftEmployeeModal').html(response);
                $('#LeftEmployeeModal').modal();
                $("#divDeleteEmployeeInfoMsg").text("");
                $("#divDeleteEmployeeInfoMsg").addClass("hidden");
                $("#confirmEmpbtn").prop('disabled', false);

            },
            error: function () {

            }
        });

    }
    else if (Action === "RoleAssign") {

        if (Status === "InActive") {
            $.ajax({
                type: 'POST',
                url: "/Home/EmployeeRoleAssignModal/",
                data: { Username: usrname },
                cache: false,
                success: function (response) {
                    $('#EmployeeRoleAssignModal').html(response);
                    $('#EmployeeRoleAssignModal').modal();
                    $("#divEmpRoleAssignInfoMsg").text("");
                    $("#divEmpRoleAssignInfoMsg").addClass("hidden");
                    $("#btnSaveEmpRole").prop('disabled', false);

                },
                error: function () {

                }
            });
        }
        else {

            $.ajax({
                type: 'POST',
                url: "/Home/UpdateEmployeeRoleAssignModal/",
                data: { Username: usrname },
                cache: false,
                success: function (response) {
                    $('#UpEmployeeRoleAssignModal').html(response);
                    $('#UpEmployeeRoleAssignModal').modal();
                    $("#divUpEmpRoleAssignInfoMsg").text("");
                    $("#divUpEmpRoleAssignInfoMsg").addClass("hidden");

                    $("#btnUpdateEmpRole").prop('disabled', false);
                },
                error: function () {

                }
            });
        }

    }


}


function EditUserData() {

    isValid = true;
    var errorMsg = "";
    var role = $("#ddlUpNewRole option:selected").index();

    if (role == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Role</p>";
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
        var updateUser = {
            Userid: $("#txtUpUId").val(),
            Username: $("#txtUpUsername").val(),
            RoleID: $("#ddlUpNewRole option:selected").val(),
            Createdby: $("#txtNUCreatedby").val(),
            Action: 'Update',
        };
        addFailMsg = "Error Occurred While Updating User";
        addSuccessMsg = "User Detials Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/Home/UpdateUser",
            data: JSON.stringify({ usr: updateUser }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $("#btnEditUser").prop('disabled', true);
                    $("#divUpUserInfoMsg").text(addSuccessMsg);
                    $("#divUpUserInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpUserInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnEditUser").prop('disabled', true);
                    $("#divUpUserInfoMsg").text(addFailMsg);
                    $("#divUpUserInfoMsg").addClass("alert-danger");
                    $("#divUpUserInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnEditUser").prop('disabled', true);
                $("#divUpUserInfoMsg").text(addFailMsg);
                $("#divUpUserInfoMsg").addClass("alert-danger");
                $("#divUpUserInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
//Script Starts for FD
function FDTransactiontypechange() {
    var PayModeIndex = $('#ddl_FDTransactiontype option:selected').index();
    if (PayModeIndex === 1) {

        $("#txtfdrnos").val("");
        $("#txtfdfromdate").datepicker("setDate", "");
        $("#txtfdtodate").datepicker("setDate", "");
        $("#txtfdrroi").val(0);
        $("#txtfdramount").val(0);
        $("#ddl_fdrpaymentbank").prop('selectedIndex', 0);
        $("#ddl_FDPaymentMode").prop('selectedIndex', 0);
        $("#txtFDRPaymentDate").datepicker("setDate", "");
        $("#txtFDRRemarks").val("");
        $("#txtFDRAmount").val("");
        $("#txtfdchqNo").val("");

        $("#divFDIntInfoMsg").text("");
        $("#divFDIntInfoMsg").addClass("hidden");

        //ResetfdrData();
        $("#btnFDRSubmit").prop('disabled', false);
        //Open FD
        $("#txtfdrnos").removeClass("hidden");
        $("#divfdrno").removeClass("hidden");
        //$("#ddl_FdNos").addClass("hidden");
        $("#divclosingdate").addClass("hidden");
        //$("#ddl_FDRchequenos").addClass("hidden");
        $("#divOpenFD").removeClass("hidden");
        $("#divFdPartialFD").addClass("hidden");
        $("#divFdInterest").addClass("hidden");
        $("#divFDRInfoMsg").text("");
        $("#divFDRInfoMsg").addClass("hidden");
        //  $('#ddl_FDTransactiontype').prop('disabled',true);
    }
    else if (PayModeIndex === 3 || PayModeIndex === 2) {
        //Close FD and Partial FD
        $("#txtfdrnos").addClass("hidden");
        $("#divfdrno").addClass("hidden");
        $("#divOpenFD").addClass("hidden");
        $("#divFdInterest").addClass("hidden");
        $("#divFdPartialFD").removeClass("hidden");
        //$('#ddl_FDTransactiontype').prop('disabled', true);
        $("#divparfddetails").addClass("hidden");
        $("#divparfdopendetails").addClass("hidden");
        $("#divparfdDed").addClass("hidden");
        $("#divparfdpayment").addClass("hidden");
        $('#ddlFdNos').prop('disabled', false);
        $("#divparfdopendetails").addClass("hidden");
        $("#divparfdDedGrid").addClass("hidden");
        $.ajax({
            type: "POST",
            url: "/Accounts/GetParFDnos",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                //ClearPartialFD();    
                var ddlfdnos = $("#ddlFdNos");
                ddlfdnos.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlfdnos.append($("<option></option>").val(this['FdID']).html(this['FdNo']));
                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });

    }
    else if (PayModeIndex === 4) {
        //Interest
        // $("#divfdrnos").removeClass('hidden');
        $("#divfdrno").removeClass("hidden");
        $("#divfdinterest").addClass("hidden");
        $("#divfdinterestDed").addClass("hidden");
        $("#divIntfdpayment").addClass("hidden");
        $("#divOpenFD").addClass("hidden");
        $("#divFdInterest").removeClass("hidden");
        $("#divFdPartialFD").addClass("hidden");
        $("#btnFDIntSubmit").prop('disabled', false);
        $("#txtFDIPayAmount").val('');
        $("#txtFDIPayDate").datepicker("setDate", new Date());
        //$('#ddl_FDTransactiontype').prop('disabled', true);
        $.ajax({
            type: "POST",
            url: "/Accounts/GetParFDnos",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                //ClearPartialFD();    
                var ddlfdnos = $("#ddlIntFdNos");
                ddlfdnos.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlfdnos.append($("<option></option>").val(this['FdID']).html(this['FdNo']));
                });
                $("#ddlIntFdNos").prop('disabled', false);
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else {
        $("#divfdrno").addClass("hidden");
        $("#txtfdrno").addClass("hidden");
        $("#divclosingdate").addClass("hidden");

        $("#divOpenFD").addClass("hidden");
        $("#divFdPartialFD").addClass("hidden");
        $("#divFdInterest").addClass("hidden");
        //$('#ddlIntFdNos').prop('disabled', false);

    }

}
function FDRPayModeChange() {
    var PayMode = $('#ddl_FDPaymentMode option:selected').text();
    var PayModeIndex = $('#ddl_FDPaymentMode option:selected').index();
    if (PayModeIndex == 1) {
        $("#lblfdchqNo").text("RTGS/E-Trans Number");
        $("#txtfdchqNo").removeClass("hidden");
        var Bank = $('#ddl_fdrpaymentbank option:selected').text();
    }


}
function btnSubmitfdrData() {
    var Transactiontype = $('#ddl_FDTransactiontype option:selected').index();
    var errorMsg = "";
    isValid = true;
    if (Transactiontype == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Transaction Type</p>";
        isValid = false;
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
            //AddbanktransferDetails();
        }
    }
    else if (Transactiontype == 1) {
        var fromdate = $("#txtfdfromdate").val();
        var todate = $("#txtfdtodate").val();
        var fdrno = $("#txtfdrnos").val();
        var fdrroi = $("#txtfdrroi").val();
        var fdramount = $("#txtfdramount").val();
        var bank = $("#ddl_fdrpaymentbank option:selected").index();
        var modeofpay = $("#ddl_FDPaymentMode option:selected").index();
        //var modeofpaychq = $("#ddl_FDRchequenos option:selected").index();
        //var modeofpayother = $("#txtfdchqNo").val();
        var paymentdate = $("#txtFDRPaymentDate").val();
        var remarks = $("#txtFDRRemarks").val();
        var amount = $("#txtFDRAmount").val();

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
            var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divFDRInfoMsg").text("");
            $("#divFDRInfoMsg").append(finalerror1 + errorMsg + "</div>");
            $("#divFDRInfoMsg").addClass("alert-danger");
            $("#divFDRInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divFDRInfoMsg").text("");
            $("#divFDRInfoMsg").addClass("hidden");

            var saveOpenFD = {
                FDRNo: $("#txtfdrnos").val(),
                FDRFromDate: $("#txtfdfromdate").val(),
                FDRClosingDate: $("#txtfdtodate").val(),
                FDRAmount: $("#txtfdramount").val(),
                FDRTotalAmount: $("#txtFDRAmount").val(),
                FDRROI: $("#txtfdrroi").val(),
                Createdby: $("#txtFDCreatedby").val(),
                Bankid: $("#ddl_fdrpaymentbank option:selected").val(),
                Remarks: $("#txtFDRRemarks").val(),
                ModeofPay: $("#ddl_FDPaymentMode option:selected").val(),
                No: $("#txtfdchqNo").val(),
                PaymentDate: $("#txtFDRPaymentDate").val(),
                Roleid: $("#txtFDRoleId").val(),
                Action: 'New'
            };
            addFailMsg = "Error Occurred While Adding OpenFD";
            addSuccessMsg = "Open FD Detials Added Successfully.";
            $.ajax({
                type: "POST",
                url: "/Accounts/SaveOpenFD",
                data: JSON.stringify({ fdPay: saveOpenFD }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.saveStatus == "Submitted") {
                        $("#btnFDRSubmit").prop('disabled', true);
                        $("#divFDRInfoMsg").text(addSuccessMsg);
                        $("#divFDRInfoMsg").removeClass("hidden alert-danger");
                        $("#divFDRInfoMsg").addClass("alert-success");
                    }
                    else if (response.saveStatus === "Exist") {
                        $("#btnFDRSubmit").prop('disabled', true);
                        $("#divFDRInfoMsg").text("FD Already Exist");
                        $("#divFDRInfoMsg").addClass("alert-danger");
                        $("#divFDRInfoMsg").removeClass("hidden alert-success");
                    }
                    else {
                        $("#btnFDRSubmit").prop('disabled', true);
                        $("#divFDRInfoMsg").text(response.saveStatus);
                        $("#divFDRInfoMsg").addClass("alert-danger");
                        $("#divFDRInfoMsg").removeClass("hidden alert-success");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $("#btnFDRSubmit").prop('disabled', true);
                    $("#divFDRInfoMsg").text(addFailMsg);
                    $("#divFDRInfoMsg").addClass("alert-danger");
                    $("#divFDRInfoMsg").removeClass("hidden alert-success");
                }
            });


            //AddbanktransferDetails();
        }
    }
    //else if (PayModeIndex == 2) {
    //    $("#txtfdrnos").addClass("hidden");
    //    $("#divfdrno").addClass("hidden");
    //    //$("#ddl_FdNos").removeClass("hidden");
    //    $("#divclosingdate").addClass("hidden");
    //   // $("#ddl_FDRchequenos").addClass("hidden");
    //}
    //else if (PayModeIndex == 3) {

    //    $("#txtfdrnos").addClass("hidden");
    //    $("#divfdrno").addClass("hidden");
    //    //$("#ddl_FdNos").removeClass("hidden");

    //}
    //else if (PayModeIndex == 4) {
    //    $("#divfdrnos").removeClass('hidden');
    //    $("#divfdrno").removeClass("hidden");
    //}
    //else {
    //    $("#divfdrno").addClass("hidden");
    //    $("#txtfdrno").addClass("hidden");
    //  //  $("#ddl_FdNos").addClass("hidden");
    //    $("#divclosingdate").addClass("hidden");
    //    //$("#ddl_FDRchequenos").addClass("hidden");
    //}

}
function ResetPartialFDData() {
    // $('#ddl_FDTransactiontype').prop('disabled', false);
    $("#ddl_FDTransactiontype").prop('selectedIndex', 0);
    $("#txtfdrnos").addClass("hidden");
    $("#divfdrno").addClass("hidden");
    $("#divOpenFD").addClass("hidden");
    $("#divFdPartialFD").addClass("hidden");
    $("#divparfddetails").addClass("hidden");
    $("#divparfdopendetails").addClass("hidden");
    $("#divparfdDed").addClass("hidden");
    $("#divparfdpayment").addClass("hidden");
    $('#ddlFdNos').prop('disabled', false);
    $("#divparfdopendetails").addClass("hidden");
    ClearPartialFD();

}

function ClearPartialFD() {
    $("#txtfdPcloseFromdate").val("");
    $("#txtfdPcloseTodate").val("");
    $("#txtfdPclOpenAmount").val("");
    $("#txtfdPclOpenRoi").val("");
    $("#txtfdPclosebalamount").val("");
    $("#txtfdPclPayBank").val("");
    $("#txtfdopenpaymod").val("");
    $("#txtfdopenpayno").val("");
    $("#txtfdopendate").val("");
    $("#txtfdParcloseMaturityAmount").prop('disabled', false);
    // $("#txtFdPClosedate").val("");
    $("#txtFdPClosedate").datepicker("setDate", '');
    $("#txtFdPClosedate").datepicker("option", "disabled", false);
    $("#txtfdParcloseMaturityAmount").val("");
    $("#txtfdParcloseInterest").val("");
    $("#txtfdPclPayBank").val("");
    $("#ddlFdpclPayMode").prop('selectedIndex', 0);
    $("#txtfdpclchqNo").val("");
    $("#txtFDpclAmount").val("");
    $("#txtFDpclRemarks").val("");
    $("#FDParCloseDedTable tbody tr").remove();
    $("#btnParFDSubmit").prop('disabled', false);
    //$("#FDParCloseDedTable tbody tr:first").each(function () {
    //    var currentRow = $(this);
    //   currentRow.find("td").eq(1).find("select").prop('SelectedIndex',0);
    //    var sdca = currentRow.find("td").eq(2).find("select");
    //    sdca.empty().append('<option selected="selected" value="Select">-Select-</option>');
    //    currentRow.find("td").eq(3).find("input[type='text']").val("");
    //    currentRow.find("td").eq(4).find('input[type="checkbox"]').prop("checked", false);
    //});
    $("#FDParCloseDedTable tfoot tr").each(function () {
        var footerRow = $(this);
        footerRow.find("td").eq(1).html("<b>Total</b>");
        footerRow.find("td").eq(2).html("");
    });
    $("#divFDPArClInfoMsg").text("");
    $("#divFDPArClInfoMsg").addClass("hidden");
    $("#chkDedFDPerY").prop("checked", false);
    $("#chkDedFDPerN").prop("checked", true);
}

function FDParNochnage() {

    var fdnoindex = $('#ddlFdNos option:selected').index();
    var fdno = $('#ddlFdNos option:selected').text();
    if (fdnoindex == 0) {
        $("#divparfddetails").addClass("hidden");
        $("#divparfdDed").addClass("hidden");
        $("#divparfdpayment").addClass("hidden");
        $('#ddlFdNos').prop('disabled', false);
        $("#divparfdopendetails").addClass("hidden");
    }
    else {
        var fdtranstype = $('#ddl_FDTransactiontype option:selected').index();
        if (fdtranstype === 2) {
            //Close FD
            $.ajax({
                type: "POST",
                url: "/Accounts/GetFDDetailsbyFdno",
                data: '{fdno:"' + fdno + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    ClearPartialFD();
                    $('#ddlFdNos').prop('disabled', true);
                    $.each(response, function () {
                        var frmdate = this['FDRFromDate'];
                        var todate = this['FDRToDate'];

                        //var num = frmdate.match(/\d+/g); //regex to extract numbers 
                        //var date = new Date(parseFloat(num)); //converting to date
                        //var last = date.getMonth() + 1 + "-" + date.getDate() + '-' + date.getFullYear();
                        //var frmdate1 = moment(last, "MM-D-YYYY").format('DD-MMM-YYYY');

                        //var tdate = todate.match(/\d+/g); //regex to extract numbers 
                        //var date1 = new Date(parseFloat(tdate)); //converting to date
                        //var tdate1 = date1.getMonth() + 1 + "-" + date1.getDate() + '-' + date1.getFullYear();
                        //var todate1 = moment(tdate1, "MM-D-YYYY").format('DD-MMM-YYYY');



                        //$("#txtFdPClosedate").datepicker("option", "minDate", frmdate1);
                        //$("#txtfdpPaymentDate").datepicker("option", "minDate", frmdate1);

                        $("#txtfdPcloseFromdate").val(frmdate);
                        $("#txtfdPcloseTodate").val(todate);
                        $("#txtfdPclOpenAmount").val(this['FDRAmount']);
                        $("#txtfdPclOpenRoi").val(this['FDRROI']);
                        $("#txtfdPclosebalamount").val(this['FDRBalanceAmount']);
                        $("#txtfdParcloseMaturityAmount").val(this['FDRBalanceAmount']);
                        $("#txtfdParcloseMaturityAmount").prop('disabled', true);
                        $("#txtFDpclAmount").val(this['FDRBalanceAmount']);
                        //$("#txtfdopenpaymod").val(this['PaymentModeofPay']);
                        //$("#txtfdopenpayno").val(this['PaymentNo']);
                        //$("#txtfdopendate").val(paydate1);

                        $("#divparfddetails").removeClass("hidden");
                        $("#divparfdDed").removeClass("hidden");
                        $("#divparfdpayment").removeClass("hidden");

                        $("#divparfdopendetails").removeClass("hidden");

                        BindDeductionDCA();
                        GetLastTransction();
                        $("#chkDedFDPerY").prop("checked", false);
                        $("#chkDedFDPerN").prop("checked", true);
                        ClearFDDeductions();

                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });

        }
        else if (fdtranstype == 3) {
            //Partail FD 
            $.ajax({
                type: "POST",
                url: "/Accounts/GetFDDetailsbyFdno",
                data: '{fdno:"' + fdno + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    ClearPartialFD();
                    $('#ddlFdNos').prop('disabled', true);
                    $.each(response, function () {
                        var frmdate = this['FDRFromDate'];
                        var todate = this['FDRToDate'];

                        //var num = frmdate.match(/\d+/g); //regex to extract numbers 
                        //var date = new Date(parseFloat(num)); //converting to date
                        //var last = date.getMonth() + 1 + "-" + date.getDate() + '-' + date.getFullYear();
                        //var frmdate1 = moment(last, "MM-D-YYYY").format('DD-MMM-YYYY');  

                        //var tdate = todate.match(/\d+/g); //regex to extract numbers 
                        //var date1 = new Date(parseFloat(tdate)); //converting to date
                        //var tdate1 = date1.getMonth() + 1 + "-" + date1.getDate() + '-' + date1.getFullYear();
                        //var todate1 = moment(tdate1, "MM-D-YYYY").format('DD-MMM-YYYY');  



                        //$("#txtFdPClosedate").datepicker("option", "minDate", frmdate1);       
                        //$("#txtfdpPaymentDate").datepicker("option", "minDate", frmdate1);       

                        $("#txtfdPcloseFromdate").val(frmdate);
                        $("#txtfdPcloseTodate").val(todate);
                        $("#txtfdPclOpenAmount").val(this['FDRAmount']);
                        $("#txtfdPclOpenRoi").val(this['FDRROI']);
                        $("#txtfdPclosebalamount").val(this['FDRBalanceAmount']);
                        $("#txtfdParcloseMaturityAmount").prop('disabled', false);
                        //$("#txtfdopenpaymod").val(this['PaymentModeofPay']);
                        //$("#txtfdopenpayno").val(this['PaymentNo']);
                        //$("#txtfdopendate").val(paydate1);

                        $("#divparfddetails").removeClass("hidden");
                        $("#divparfdDed").removeClass("hidden");
                        $("#divparfdpayment").removeClass("hidden");

                        $("#divparfdopendetails").removeClass("hidden");

                        BindDeductionDCA();
                        GetLastTransction();
                        $("#chkDedFDPerY").prop("checked", false);
                        $("#chkDedFDPerN").prop("checked", true);
                        ClearFDDeductions();
                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
    }
}

function GetLastTransction() {
    var fdno = $('#ddlFdNos option:selected').text();
    cleartransactionModel();
    $.ajax({
        type: "POST",
        url: "/Accounts/GetFDLastTransactionDetails",
        data: '{fdno:"' + fdno + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            $.each(response, function () {
                //alert(this['PaymentModeofPay'] + "===" + this['PaymentNo'] + "===" + this['FDRPaymentDate']);
                $("#txtfdPclPayBank").val(this['PaymentBankName']);
                $("#txtfdpclBank1").val(this['PaymentBankName']);
                $("#txtfdpclPaymode1").val(this['PaymentModeofPay']);

                //alert($("#txtfdpclPaymode1").val());
                $("#txtfdpclno1").val(this['PaymentNo']);
                $("#txtfdpclamount1").val(this['PaymentAmount']);
                var paydate = this['FDRPaymentDate'];
                ////alert(paydate);
                //var pdate = paydate.match(/\d+/g); //regex to extract numbers 
                //var date2 = new Date(parseFloat(pdate)); //converting to date
                //var pdate1 = date2.getMonth() + 1 + "-" + date2.getDate() + '-' + date2.getFullYear();
                //var paydate1 = moment(pdate1, "MM-D-YYYY").format('DD-MMM-YYYY');  
                $("#txtfdpcldate1").val(paydate);
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });


}

function cleartransactionModel() {
    $("#txtfdpclBank1").val("");
    $("#txtfdpclPaymode1").val("");
    $("#txtfdpclno1").val("");
    $("#txtfdpclamount1").val("");
    $("#txtfdpcldate1").val("");

}
function BindDeductionDCA() {

    var closedate = $("#txtFdPClosedate").val();
    if (closedate === "") {
        ClearFDDeductions();
        //$("#divFDPArClInfoMsg").text("");
        //$("#divFDPArClInfoMsg").append("<div>Select Closing Date</div>");
        //$("#divFDPArClInfoMsg").addClass("alert-danger");
        //$("#divFDPArClInfoMsg").removeClass("hidden alert-success");
        //return false;
        //$("#FDParCloseDedTable tbody tr:not(:first)").remove();   
        //$("#FDParCloseDedTable tbody tr").each(function () {
        //    var currentRow = $(this);
        //    var dcaddl = currentRow.find("td").eq(1).find("select");
        //    var ddlSubDCA = currentRow.find('.fdpSubDCA'); // get the other select in the same row
        //    var amount = currentRow.find('.fdpDcaAmount');
        //    dcaddl.empty().append('<option selected="selected" value="Select"-Select</option>');
        //    ddlSubDCA.empty().append('<option selected="selected" value="Select">Select</option>');
        //    amount.val("");
        //    currentRow.find("td").eq(4).find('input[type="checkbox"]').prop("checked", false);
        //    CountPerFdDedTotal();
        //});

        //$("#txtFdPClosedate").datepicker("option", "disabled", false);
        //$("#FDParCloseDedTable tfoot tr").each(function () {
        //    var currentRow = $(this);
        //    currentRow.find("td").eq(2).html(0);
        //});
    }
    else {
        var selecteddcalist = [];
        $("#FDParCloseDedTable tbody tr").each(function () {
            var currentRow = $(this);
            var DedDCA = currentRow.find("td").eq(1).find("select option:selected").index();
            var DedSDCA = currentRow.find("td").eq(2).find("select option:selected").index();
            if (DedDCA !== 0 && DedSDCA !== 0) {
                selecteddcalist.push(DedDCA + ',' + DedSDCA);
                //alert(currentRow.find("td").eq(1).find("select option:selected").val());
            }
        });

        $("#divFDPArClInfoMsg").text("");
        $("#divFDPArClInfoMsg").addClass("hidden");
        $.ajax({
            type: "POST",
            url: "/Accounts/GetFDDeductionDCA",
            data: '{closingdate:"' + closedate + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $("#FDParCloseDedTable tbody tr").each(function () {
                    var currentRow = $(this);
                    var dcaddl = currentRow.find("td").eq(1).find("select");
                    dcaddl.empty().append('<option selected="selected" value="Select">-Select-</option>');
                    $.each(response, function () {
                        //  var status = checkValueInArray(this['DCACode'], selecteddcalist);
                        // if (status === false) {
                        dcaddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                        //}
                    });
                    var ddlSubDCA = currentRow.find('.fdpSubDCA'); // get the other select in the same row
                    var amount = currentRow.find('.fdpDcaAmount');
                    ddlSubDCA.empty().append('<option selected="selected" value="Select">Select</option>');
                    amount.val("");
                    currentRow.find("td").eq(4).find('input[type="checkbox"]').prop("checked", false);
                });
                $("#txtFdPClosedate").datepicker("option", "disabled", true);
                CountPerFdDedTotal();
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });

    }
}
function SubmitPartialFDData() {

    isValid = true;
    var errorMsg = "";
    var closedate = $("#txtFdPClosedate").val();
    var maturityamount = $("#txtfdParcloseMaturityAmount").val();
    var interst = $("#txtfdParcloseInterest").val();
    var modepay = $("#ddlFdpclPayMode option:selected").index();
    var paymentdate = $("#txtfdpPaymentDate").val();
    var no = $("#txtfdpclchqNo").val();
    var remarks = $("#txtFDpclRemarks").val();
    var frmdate = $("#txtfdPcloseFromdate").val();
    var balance = $("#txtfdPclosebalamount").val();
    var fdtranstype = $('#ddl_FDTransactiontype option:selected').index();
    var totaldedamount = 0;
    if ($("#chkDedFDPerY").is(':checked') === true) {
        $("#FDParCloseDedTable tbody tr").each(function () {
            var currentRow = $(this);
            var deddca = currentRow.find("td").eq(1).find("select option:selected").val();
            var dedsdca = currentRow.find("td").eq(2).find("select option:selected").val();
            var dedamount = currentRow.find("td").eq(3).find("input[type='text']").val();
            var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
            if (deddca != 0 && dedsdca != 0 && dedamount != "" && checkbox == true) {

                totaldedamount += dedamount + ",";
            }
        });
    }
    if (closedate == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Closing Date</p>";
        isValid = false;
    }
    //else {       
    //var pdate = paydate.match(/\d+/g); //regex to extract numbers 
    //var date2 = new Date(parseFloat(pdate)); //converting to date
    //var pdate1 = date2.getMonth() + 1 + "-" + date2.getDate() + '-' + date2.getFullYear();
    // var closedate1 = moment(closedate, "DD-MMM-YYYY").format('YYYY-MM-DD');  
    // var frmdate1 = moment(frmdate, "DD-MMM-YYYY").format('YYYY-MM-DD');  
    //debugger;
    //var date1 = Date.parse(closedate1);
    //var date2 = Date.parse(frmdate1);
    //if (date2 > date1) {
    ////if (closedate1 < frmdate1) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Closing Date Must Be Greater Than FD Open Date</p>";
    //    isValid = false;
    //}
    //}
    if (maturityamount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Maturity Amount</p>";
        isValid = false;
    }
    else {
        if ((parseFloat(balance) <= parseFloat(maturityamount)) && fdtranstype === 'Partial') {
            errorMsg += "<p style='margin-top:-5px!important;'>Invalid Maturity Amount</p>";
            isValid = false;
        }
        if (fdtranstype === 'Close' && parseFloat(balance) !== (parseFloat(maturityamount) + parseFloat(totaldedamount))) {
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
    //    var closedate2 = moment(closedate, "DD-MMM-YYYY").format('MM-DD-YYYY');
    //    var paymentdate1 = moment(paymentdate, "DD-MMM-YYYY").format('MM-DD-YYYY');
    //    debugger;
    //    var date11 = Date.parse(closedate2);
    //    var date21 = Date.parse(paymentdate1);
    //    if (date21 > date11) {       
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
                if (amount == "") { amountcount = amountcount + 1; }
                if (dca == 0) { dcacount = dcacount + 1; }
                if (sdca == 0) { sdcacount = sdcacount + 1; }
                if (checkbox == false) { chkcount = chkcount + 1; }
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
                var fdtranstype1 = $('#ddl_FDTransactiontype option:selected').index();
                var selecteddcalist = [];
                $("#FDParCloseDedTable tbody tr").each(function () {
                    var currentRow = $(this);
                    var deddca = currentRow.find("td").eq(1).find("select option:selected").val();
                    var dedsdca = currentRow.find("td").eq(2).find("select option:selected").val();
                    //if (deddca !== 0 && dedsdca) {
                    selecteddcalist.push(deddca + ',' + dedsdca);
                    // alert(currentRow.find("td").eq(2).find("select option:selected").val());
                    // }
                });
                var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    var finalerror21 = "<div style='align:center'><p> Duplicate AccountHead for Deduction</p>";
                    $("#divFDPArClInfoMsg").text("");
                    $("#divFDPArClInfoMsg").append(finalerror21 + "</div>");
                    $("#divFDPArClInfoMsg").addClass("alert-danger");
                    $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
                else {
                    AddPartialFD();
                }
            }
        }
        else {
            AddPartialFD();
        }
    }
}

function AddPartialFD() {
    var DeductionDca = "", DeductionSdca = "", DeductionAmount = "";
    if ($("#chkDedFDPerY").is(':checked') === true) {
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
    }
    //var capitalcc = 'CCC', Paymenttype = '', typefd = '';
    var Paymenttype = '', typefd = '';
    //var ParIntCC , ParIntdca , ParIntsdca , ParIntITcod;
    //var Principledca, Principlesdca, PrincipleITcode;
    var savePartialFD = {};
    var fdtranstype = $('#ddl_FDTransactiontype option:selected').index();
    if (fdtranstype === 2) {
        //Submit Close FD Data
        //////debugger;
        typefd = 'Close'; Paymenttype = 'FDClose';
        savePartialFD = {
            FDRNo: $("#ddlFdNos option:selected").text(),
            Createdby: $("#txtFDCreatedby").val(),
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
            Fdtype: typefd,
            //ParIntcc: $("#txtfdIntCC").val(),
            //ParIntdca: $("#txtfdIntDca").val(),
            //ParIntsdca: $("#txtfdIntSdca").val(),
            //ParIntitcode: $("#txtfdIntIt").val(),
            //Principledca: $("#txtfdPriDca").val(),
            //Principlesdca: $("#txtfdPriSdca").val(),
            //Principleitcode: $("#txtfdPriIt").val(),
            Roleid: $("#txtpartialRoleId").val(),
            PaymentAmount: $("#txtFDpclAmount").val()
        };
        addFailMsg = "Error Occurred While Closing FD";
        addSuccessMsg = "FD closed Saved Successfully.";
    }
    else if (fdtranstype === 3) {
        //Submit Partial FD Data
        typefd = 'Partial';
        Paymenttype = 'FDPartial';
        savePartialFD = {
            FDRNo: $("#ddlFdNos option:selected").text(),
            Createdby: $("#txtFDCreatedby").val(),
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
            Fdtype: typefd,
            //ParIntcc: $("#txtfdIntCC").val(),
            //ParIntdca: $("#txtfdIntDca").val(),
            //ParIntsdca: $("#txtfdIntSdca").val(),
            //ParIntitcode: $("#txtfdIntIt").val(),
            //Principledca: $("#txtfdPriDca").val(),
            //Principlesdca: $("#txtfdPriSdca").val(),
            Roleid: $("#txtpartialRoleId").val(),
            //Principleitcode: $("#txtfdPriIt").val(),
            PaymentAmount: $("#txtFDpclAmount").val()
        };
        addFailMsg = "Error Occurred While Adding Parial FD";
        addSuccessMsg = "Partial FD Detials Saved Successfully.";
    }
    //debugger;
    $.ajax({
        type: "POST",
        url: "/Accounts/SaveParitalFD",
        data: JSON.stringify({ fdPay: savePartialFD }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.saveStatus == "Submitted") {
                $("#btnParFDSubmit").prop('disabled', true);
                $("#divFDPArClInfoMsg").text(addSuccessMsg);
                $("#divFDPArClInfoMsg").removeClass("hidden alert-danger");
                $("#divFDPArClInfoMsg").addClass("alert-success");
            }
            else if (response.saveStatus == "NotEnough") {
                $("#btnEdbtnParFDSubmititUser").prop('disabled', true);
                $("#divFDPArClInfoMsg").text("Insufficient Deduction DCA Balance");
                $("#divFDPArClInfoMsg").addClass("alert-danger");
                $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#btnParFDSubmit").prop('disabled', true);
                $("#divFDPArClInfoMsg").text(response.saveStatus);
                $("#divFDPArClInfoMsg").addClass("alert-danger");
                $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnParFDSubmit").prop('disabled', true);
            $("#divFDPArClInfoMsg").text(addFailMsg);
            $("#divFDPArClInfoMsg").addClass("alert-danger");
            $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
        }
    });

}
function ShowFDBankDetailsModel() {
    GetLastTransction();
    $('#ParFDBankDetailsModal').modal('show');
    //$("#txtfdpclBank1").val($("#txtfdPclPayBank").val());
    //$("#txtfdpclPaymode1").val($("#txtfdopenpaymod").val());
    //$("#txtfdpclno1").val($("#txtfdopenpayno").val());
    //$("#txtfdpclamount1").val($("#txtfdPclOpenAmount").val());
    ////var opendate = $("#txtfdopendate").val();
    ////var num = opendate.match(/\d+/g); //regex to extract numbers 
    ////var date = new Date(parseFloat(num)); //converting to date
    ////var last = date.getMonth() + 1 + "-" + date.getDate() + '-' + date.getFullYear();
    ////var frmdate1 = moment(last, "MM-D-YYYY").format('DD-MMM-YYYY');  
    //$("#txtfdpcldate1").val($("#txtfdopendate").val());

}
function FdparClDeductionGridNewRow() {
    isValid = true;
    var errorMsg = "";
    var dcacount = 0, sdcacount = 0, amountcount = 0, chkcount = 0;
    $("#FDParCloseDedTable tbody tr").each(function () {
        var currentRow = $(this);

        var dca = currentRow.find("td").eq(1).find("select option:selected").index();
        var sdca = currentRow.find("td").eq(2).find("select option:selected").index();
        var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
        var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
        //if (dca != 0 || sdca != 0 || amount != "" || checkbox == true) {
        if (amount == "") { amountcount = amountcount + 1; }
        if (dca == 0) { dcacount = dcacount + 1; }
        if (sdca == 0) { sdcacount = sdcacount + 1; }
        if (checkbox == false) { chkcount = chkcount + 1; }
        //}
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
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divFDPArClInfoMsg").text("");
        $("#divFDPArClInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divFDPArClInfoMsg").addClass("alert-danger");
        $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        //var selecteddcalist = [];
        //$("#FDParCloseDedTable tbody tr").each(function () {
        //    var currentRow = $(this);
        //    var DedDCA = currentRow.find("td").eq(1).find("select option:selected").index();
        //    if (DedDCA !== 0) {
        //        selecteddcalist.push(currentRow.find("td").eq(1).find("select option:selected").val());
        //        alert(currentRow.find("td").eq(1).find("select option:selected").val());
        //    }
        //});
        $("#divFDPArClInfoMsg").text("");
        $("#divFDPArClInfoMsg").addClass("hidden");
        var closedate = $("#txtFdPClosedate").val();
        if (closedate == "") {
            $("#FDParCloseDedTable tbody tr").each(function () {
                var currentRow = $(this);
                var dcaddl = currentRow.find("td").eq(1).find("select");
                dcaddl.empty().append('<option selected="selected" value="Select">-Select-</option>');
            });
            $("#txtFdPClosedate").datepicker("option", "disabled", false);
        }
        else {
            $("#divFDPArClInfoMsg").text("");
            $("#divFDPArClInfoMsg").addClass("hidden");
            $.ajax({
                type: "POST",
                url: "/Accounts/GetFDDeductionDCA",
                data: '{closingdate:"' + closedate + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var count = $("#FDParCloseDedTable tbody tr").length;
                    var rowno = count + 1;
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center;width:20%" class="hidden">' + rowno + '</td>';
                    cols += '<td style="text-align:center;width:20%"><select class="form-control dropdown-toggle fdpDCA"><option selected="selected" value="Select">Select</option>';

                    $.each(response, function () {
                        //var status = checkValueInArray(this['DCACode'], selecteddcalist);
                        //if (status === false) {
                        cols += '<option value="' + this['DCACode'] + '">' + this['DCAIDSTR'] + '</option>';
                        //}
                    });
                    cols += '</select></td>';
                    cols += '<td style="text-align:center;width:20%"><select class="form-control dropdown-toggle fdpSubDCA"><option selected="selected" value="Select">Select</option></select></td>';
                    cols += '<td style="text-align:center;width:20%"><input type="text" value="" class="form-control fdpDcaAmount" onkeypress="return ValidateAmount(this,event);" onkeyup="CountPerFdDedTotal()"/></td>';
                    cols += '<td  style="text-align:center;width:20%"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">';
                    cols += '<input type="checkbox" class="eagle-check-input" id="chkfdpDeduction" name="chkfdpDeduction">';
                    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span>';
                    cols += ' </label> </li></ul>';
                    cols += '</td>';
                    cols += '<td style="text-align:center;width:5%"><input type="button" class="ibtnfdparclDel btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.fdpclgrid").append(newRow);
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }



    }
}
function CountFdPerTotal() {
    var maturityamount = $("#txtfdParcloseMaturityAmount").val();
    var balance = $("#txtfdPclosebalamount").val();
    var dedtotal = 0, Total = 0;
    if (parseFloat(maturityamount) > parseFloat(balance)) {
        $("#divFDPArClInfoMsg").text("");
        $("#divFDPArClInfoMsg").append("<div>Maturity amount is greater than Balance</div>");
        $("#divFDPArClInfoMsg").addClass("alert-danger");
        $("#divFDPArClInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divFDPArClInfoMsg").text("");
        $("#divFDPArClInfoMsg").addClass("hidden");
        if (maturityamount !== "" && !isNaN(maturityamount)) {
            Total = parseFloat(Total) + parseFloat(maturityamount);
        }
        if ($("#chkDedFDPerY").is(':checked') === true) {
            $("#FDParCloseDedTable tbody tr").each(function () {
                var currentRow = $(this);
                var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
                if (amount !== "") { dedtotal = parseFloat(dedtotal) + parseFloat(amount); }

            });
        }
        if (!isNaN(dedtotal) > 0) { Total = parseFloat(Total) - parseFloat(dedtotal); }
        $("#txtFDpclAmount").val(Total);
    }

}

function CountPerFdDedTotal() {

    var dedtotal = 0;
    if ($("#chkDedFDPerY").is(':checked') === true) {

        $("#FDParCloseDedTable tbody tr").each(function () {
            var currentRow = $(this);
            var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
            if (amount != "") { dedtotal = parseFloat(dedtotal) + parseFloat(amount); }
        });

        $("#FDParCloseDedTable tfoot tr").each(function () {

            var footerRow = $(this);
            //foottotal = footerRow.find("td").eq(3);
            if (!isNaN(dedtotal)) {
                footerRow.find("td").eq(1).html("<b>Total</b>");
                footerRow.find("td").eq(2).html("<b>" + dedtotal + "</b>");
            }
            else {
                footerRow.find("td").eq(1).html("<b>Total</b>");
                footerRow.find("td").eq(2).html("");
            }

        });
    }
    var maturityamount = $("#txtfdParcloseMaturityAmount").val();
    var interst = $("#txtfdParcloseInterest").val();
    var Total = 0;
    if (maturityamount != "" && !isNaN(maturityamount)) {
        Total = parseFloat(Total) + parseFloat(maturityamount);
    }
    //if (interst != "" && !isNaN(interst)) {
    //    Total = parseFloat(Total) + parseFloat(interst);
    //}
    if (!isNaN(dedtotal) > 0) { Total = parseFloat(Total) - parseFloat(dedtotal); }
    $("#txtFDpclAmount").val(parseFloat(Total).toFixed(2));

}
function IntFDNochnage() {
    $("#divfdinterest").removeClass("hidden");
    $("#divfdinterestDed").removeClass("hidden");
    $("#divIntfdpayment").removeClass("hidden");
    ClearFDInt();

    //var intdate = $("#txtFdIntdate").val();
    //if (intdate != "") {
    //$.ajax({
    //    type: "POST",
    //    url: "/Accounts/GetFDIntCC",
    //    data: '{}',
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        ClearFDInt();
    //        $("#FDIntDedTable tbody tr").each(function () {
    //            var currentRow = $(this);
    //            var ccddl = currentRow.find("td").eq(1).find("select");
    //            ccddl.empty().append('<option selected="selected" value="Select">-Select-</option>');
    //            $.each(response, function () {
    //                ccddl.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
    //            });
    //        });
    //        $("#ddlIntFdNos").prop('disabled', true);
    //        $("#divFDIntInfoMsg").text("");
    //        $("#divFDIntInfoMsg").addClass("hidden");
    //    },
    //    failure: function (response) {
    //    },
    //    error: function (response) {
    //    }
    //});
    //}
    //else {
    //    $("#divFDIntInfoMsg").text("");
    //    $("#divFDIntInfoMsg").append("<div>Select Interest Date</div>");
    //    $("#divFDIntInfoMsg").addClass("alert-danger");
    //    $("#divFDIntInfoMsg").removeClass("hidden alert-success");
    //    return false;

    //}

}
function CountFdIntTotal() {
    var IntAmount = $("#txtFDIntAmount").val();
    var dedamount = 0, Total = 0;

    //$("#FDIntDedTable tbody tr").each(function () {
    //   var currentRow = $(this);      
    //    var amount = currentRow.find("td").eq(4).find("input[type='text']").val();
    //    if (amount!=="") { 
    //        dedamount = amount;
    //    }
    //});
    if ($("#chkDedFDIntY").is(':checked') === true) {
        dedamount = $("#txtDedAmt").val();
    }
    if (IntAmount !== "") {
        Total = parseFloat(IntAmount) + parseFloat(Total);
    }
    if (!isNaN(dedamount) && dedamount > 0) {
        Total = parseFloat(Total) - parseFloat(dedamount);
    }
    //alert(Total != 0 );
    if (Total !== 0 && !isNaN(Total)) {
        $("#txtFDIPayAmount").val(parseFloat(Total).toFixed(2));
    }
    else {
        $("#txtFDIPayAmount").val(0);

    }
}
function SubmitFDIntData() {
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

        if ($("#chkDedFDIntY").is(':checked') === true) {

            if (dedamount == "" || dedamount === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
                isValid = false;
            }
        }
        // var ccount=0,dcacount = 0, sdcacount = 0, amountcount = 0;
        //$("#FDIntDedTable tbody tr").each(function () {
        //    var currentRow = $(this);
        //    var cc = currentRow.find("td").eq(1).find("select option:selected").index();
        //    var dca = currentRow.find("td").eq(2).find("select option:selected").index();
        //    var sdca = currentRow.find("td").eq(3).find("select option:selected").index();
        //    var amount = currentRow.find("td").eq(4).find("input[type='text']").val(); 
        //    var check = currentRow.find("td").eq(5).find('input[type="checkbox"]').is(':checked');
        //    if (dca != 0 || sdca != 0 || amount != "" || cc != 0  || check==true) {
        //        if (amount == "") { amountcount = amountcount + 1; }
        //        if (dca == 0) { dcacount = dcacount + 1; }
        //        if (sdca == 0) { sdcacount = sdcacount + 1; }
        //        if (cc ==0) { ccount = ccount + 1; }
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

            var deductioncc = $("#txtDedCC").val();
            var deductiondca = $("#txtDedDca").val();
            var deductionsdca = $("#txtDedSdca").val();
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
            var saveFDIntrest = {
                FDRNo: $("#ddlIntFdNos option:selected").text(),
                IntDate: $("#txtFdIntdate").val(),
                IntAmount: $("#txtFDIntAmount").val(),
                Capitalcc: deductioncc,
                DedDcas: deductiondca,
                DedSDcas: deductionsdca,
                DedAmounts: dedamount,
                Bankid: $("#ddlfdIntpaymentbank option:selected").val(),
                Remarks: $("#txtFDIntRemarks").val(),
                PaymentModeofPay: $("#ddlFdIntPayMode option:selected").val(),
                PaymentNo: $("#txtfdIntchqNo").val(),
                PaymentDate: $("#txtFDIPayDate").val(),
                Createdby: $("#txtFDCreatedby").val(),
                Status: 1,
                PaymenttypeName: 'FDInterest',
                RoleID: $("#txtpartialRoleId").val(),
                Action: 'New',
                PaymentAmount: $("#txtFDIPayAmount").val()
            };
            addFailMsg = "Error Occurred While Adding FD Interest";
            addSuccessMsg = "FD Interest Detials Saved Successfully.";

            debugger;
            $.ajax({
                type: "POST",
                url: "/Accounts/SaveFDInterest",
                data: JSON.stringify({ fdPay: saveFDIntrest }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.saveStatus == "Submitted") {
                        $("#btnFDIntSubmit").prop('disabled', true);
                        $("#divFDIntInfoMsg").text(addSuccessMsg);
                        $("#divFDIntInfoMsg").removeClass("hidden alert-danger");
                        $("#divFDIntInfoMsg").addClass("alert-success");
                    }
                    else if (response.saveStatus == "NotEnough") {
                        $("#btnFDIntSubmit").prop('disabled', true);
                        $("#divFDIntInfoMsg").text("Insufficient Deduction DCA Balance");
                        $("#divFDIntInfoMsg").addClass("alert-danger");
                        $("#divFDIntInfoMsg").removeClass("hidden alert-success");
                    }
                    else {
                        $("#btnFDIntSubmit").prop('disabled', true);
                        $("#divFDIntInfoMsg").text(response.saveStatus);
                        $("#divFDIntInfoMsg").addClass("alert-danger");
                        $("#divFDIntInfoMsg").removeClass("hidden alert-success");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $("#btnFDIntSubmit").prop('disabled', true);
                    $("#divFDIntInfoMsg").text(addFailMsg);
                    $("#divFDIntInfoMsg").addClass("alert-danger");
                    $("#divFDIntInfoMsg").removeClass("hidden alert-success");
                }
            });

        }
    }
}
function ResetFDIntData() {
    $('#ddlIntFdNos').prop('disabled', false);
    $("#divfdrno").addClass("hidden");
    $("#divfdinterest").addClass("hidden");
    $("#divfdinterestDed").addClass("hidden");
    $("#divIntfdpayment").addClass("hidden");
    $("#divOpenFD").addClass("hidden");
    $("#divFdInterest").addClass("hidden");
    $("#divFdPartialFD").addClass("hidden");
    // $('#ddl_FDTransactiontype').prop('disabled', false);
    $('#ddl_FDTransactiontype').prop('selectedIndex', 0);
    ClearFDInt();
}

function ClearFDInt() {
    $("#txtFdIntdate").val("");
    $("#txtFDIntAmount").val("");
    $("#ddlfdIntpaymentbank").prop('selectedIndex', 0);
    $("#ddlFdIntPayMode").prop('selectedIndex', 0);
    $("#txtfdIntchqNo").val("");
    $("#txtFDIntAmount").val("");
    $("#txtFDIntRemarks").val("");
    $("#txtFdIntdate").datepicker("option", "disabled", false);
    //$("#txtFdIntdate").prop('disabled',false);
    $("#FDIntDedTable tbody tr").each(function () {
        var currentRow = $(this);
        var ccddl = currentRow.find("td").eq(1).find("select");
        var dcaddl = currentRow.find("td").eq(2).find("select");
        var sdcaddl = currentRow.find("td").eq(3).find("select");
        currentRow.find("td").eq(4).find("input[type='text']").val("");
        ccddl.empty().append('<option selected="selected" value="Select">-Select-</option>');
        dcaddl.empty().append('<option selected="selected" value="Select">-Select-</option>');
        sdcaddl.empty().append('<option selected="selected" value="Select">-Select-</option>');
    });
    $("#txtDedCC").val("");
    $("#txtDedDca").val("");
    $("#txtDedSdca").val("");
    $("#divparfdDedGrid").addClass("hidden");
    //ClearDeductionTable();
    $("#divfdinterestDedGrid").addClass("hidden");
}

function CountOpenFdTotal() {
    var Rateofint = $("#txtfdrroi").val();
    var FdValue = $("#txtfdramount").val();
    var total = 0;
    if (FdValue != "") {
        total = parseFloat(total) + parseFloat(FdValue);
    }
    //if (Rateofint != "") {
    //    total = parseFloat(total) + parseFloat(Rateofint);
    //}
    if (!isNaN(total)) {
        $("#txtFDRAmount").val(parseFloat(total).toFixed(2));
    }
    else {
        $("#txtFDRAmount").val(0);
    }

}

function ResetfdrData() {
    $("#btnFDRSubmit").prop('disabled', false);
    //$("#ddl_FDTransactiontype").prop('disabled', false);
    $("#ddl_FDTransactiontype").prop('selectedIndex', 0);
    $("#txtfdrnos").val("");
    $("#txtfdfromdate").datepicker("setDate", "");
    $("#txtfdtodate").datepicker("setDate", "");
    $("#txtfdrroi").val(0);
    $("#txtfdramount").val(0);
    $("#ddl_fdrpaymentbank").prop('selectedIndex', 0);
    $("#ddl_FDPaymentMode").prop('selectedIndex', 0);
    $("#txtFDRPaymentDate").datepicker("setDate", "");
    $("#txtFDRRemarks").val("");
    $("#txtFDRAmount").val("");
    $("#txtfdchqNo").val("");

    $("#divFDIntInfoMsg").text("");
    $("#divFDIntInfoMsg").addClass("hidden");

    $("#divOpenFD").addClass("hidden");
    $("#divFdPartialFD").addClass("hidden");
    $("#divFdInterest").addClass("hidden");

}
//Script Ends for FD

//script for REFUND Starts
function GetRefDca() {
    ////////debugger;
    var index = $("#ddl_Refundcccode option:selected").index();
    var CCVal = $("#ddl_Refundcccode option:selected").val();
    var Date = $("#txtRefundDate").val();
    if ($("#txtRefundDate").val() != "") {
        if (index != 0) {
            $.ajax({
                type: "POST",
                url: "/Accounts/BindMiscDCA",
                data: '{CC_code:"' + CCVal + '",date:"' + Date + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var dca = $("#ddl_RefDCACode");
                    dca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        dca.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
    }
    else {
        alert("Please Select Date");
        $('#ddl_Refundcccode').get(0).selectedIndex = 0;
        return false;
    }
}
function Refpaymentcategorychange() {
    //debugger;
    var IntrestModeval = $("#ddlpaymentcategory option:selected").val();
    if ($("#txtRefundDate").val() == "") {
        alert("Select Date");
        $('#ddlpaymentcategory').get(0).selectedIndex = 0
        return false;
    }
    else if (IntrestModeval == "1") {
        $("#divclientandsunclient").removeClass("hidden");
        //$('#ddl_Miscclient').get(0).selectedIndex = 0;
        //$('#ddl_MiscSubclient').get(0).selectedIndex = 0;
        $("#txtRefundDate").datepicker("disable");
        $("#divIntrestTables").addClass("hidden");
        //GetMiscDedCC();
    }
    else if (IntrestModeval == "2") {
        $("#divclientandsunclient").addClass("hidden");
        $("#txtRefundDate").datepicker("disable");
        $("#divIntrestTables").removeClass("hidden");
        //GetMiscDedNormalCC();
    }
    //else if (IntrestModeval == "Intrest From Clients" || IntrestModeval == "Intrest From Others") {
    //    var errorMsg = "";
    //    isValid = true;
    //    if ($("#txtMiscDate").val() == "") {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Date</p>";
    //        $('#ddl_MiscIntrestType').get(0).selectedIndex = 0
    //        isValid = false;
    //    }
    //    else {
    //        $("#txtMiscDate").datepicker("disable");
    //        isValid = true;
    //    }
    //    if (!isValid) {
    //        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
    //        $("#divMiscInfoMsg1").text("");
    //        $("#divMiscInfoMsg1").append(finalerror + errorMsg + "</div>");
    //        $("#divMiscInfoMsg1").addClass("alert-danger");
    //        $("#divMiscInfoMsg1").removeClass("hidden alert-success");
    //        return false;
    //    }
    //    else {
    //        $("#divMiscInfoMsg1").text("");
    //        $("#divMiscInfoMsg1").addClass("hidden");
    //    }
    //}
    else {
        $("#txtRefundDate").datepicker("enable");
        return true;
    }
}
function GetRefSDca() {
    var index = $("#ddl_RefDCACode option:selected").index();
    var DCAVal = $("#ddl_RefDCACode option:selected").val();
    if (index != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindMiscSDCA",
            data: '{DCA:"' + DCAVal + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var sdca = $("#ddl_RefSubDcaCode");
                sdca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    sdca.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function GetRefDedDca() {
    var index = $("#ddl_RefintrestCCCode option:selected").index();
    var CCVal = $("#ddl_RefintrestCCCode option:selected").val();
    var Date = $("#txtRefundDate").val();
    if ($("#txtRefundDate").val() != "") {
        if (index != 0) {
            $.ajax({
                type: "POST",
                url: "/Accounts/BindMiscDCA",
                data: '{CC_code:"' + CCVal + '",date:"' + Date + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var dca = $("#ddl_RefintrestDCACode");
                    dca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        dca.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                    });
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
    }
    else {
        alert("Please Select Date");
        $('#ddl_RefintrestCCCode').get(0).selectedIndex = 0;
        return false;
    }
}
function GetRefDedSDca() {
    var index = $("#ddl_RefintrestDCACode option:selected").index();
    var DCAVal = $("#ddl_RefintrestDCACode option:selected").val();
    if (index != 0) {
        $.ajax({
            type: "POST",
            url: "/Accounts/BindMiscSDCA",
            data: '{DCA:"' + DCAVal + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var sdca = $("#ddl_RefintrestSDCACode");
                sdca.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    sdca.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function CountRefTotal() {
    var amount = $("#txtPrincipleAmount").val();
    var final = $("#txtRefFinalAmount").val();
    var InterestExist = $("#txRefundIntrestAmount").val();
    var total = 0;
    if (InterestExist != "" && amount != "") {
        $("#IntrestTables tbody tr").each(function () {
            var currentRow = $(this);
            var Interest = currentRow.find("td").eq(3).find("input[type='text']").val();
            if (Interest != "") {
                total = parseFloat(amount) + parseFloat(Interest);
            }
            else {
                total = parseFloat(amount);
            }
        });
    }
    if (InterestExist == 0 && amount != "") {
        total = parseFloat(amount);
    }
    if (InterestExist == "" && amount != "") {
        total = parseFloat(amount);
    }
    if (InterestExist != "" && amount == "") {
        $("#IntrestTables tbody tr").each(function () {
            var currentRow = $(this);
            var Interest = currentRow.find("td").eq(3).find("input[type='text']").val();
            total = parseFloat(Interest);
            if (Interest != "") {
                total = parseFloat(Interest);
            }
            else {
                total = 0;
            }
        });
    }
    if (InterestExist == 0 && amount == "") {
        total = 0;
    }
    $("#txtRefFinalAmount").val(total);

}
function btnSubmitRefundData() {
    var errorMsg = "";
    isValid = true;
    var PaymentCategory = $("#ddlpaymentcategory option:selected").index();
    var RefundType = $("#ddltype option:selected").index();
    var CC = $("#ddl_Refundcccode option:selected").index();
    var DCA = $("#ddl_RefDCACode option:selected").index();
    var SDCA = $("#ddl_RefSubDcaCode option:selected").index();
    var Amount = $("#txtPrincipleAmount").val();
    var IntCC = $("#ddl_RefintrestCCCode option:selected").index();
    var IntDCA = $("#ddl_RefintrestDCACode option:selected").index();
    var IntSDCA = $("#ddl_RefintrestSDCACode option:selected").index();
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
                return false;
            }
            else {
                if ($('#txtclickcheckref').val() == "YES") {
                    if (IntCC == 0 || IntDCA == 0 || IntSDCA == 0 || IntAmount == "") {
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
                else {
                    $("#ddl_RefintrestCCCode option:selected").val("");
                    $("#ddl_RefintrestDCACode option:selected").val("");
                    $("#ddl_RefintrestSDCACode option:selected").val("");
                    $("#txRefundIntrestAmount").val("");

                }
            }
        }
    }
    if (!isValid) {

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divRefInfoMsg").text("");
        $("#divRefInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divRefInfoMsg").addClass("alert-danger");
        $("#divRefInfoMsg").removeClass("hidden alert-success");
        return false;

    }
    else {
        $("#divRefInfoMsg").text("");
        $("#divRefInfoMsg").addClass("hidden");
        $('#RefundIntrestConfirmModel').modal('hide');
        SaveRefunddata();
    }

}
var chkstring = "";
function ContinueSubmitRefData() {
    $('#txtclickcheckref').val("NO");
    $('#RefundIntrestConfirmModel').modal('hide');
    $("#divIntrestTables").addClass("hidden");
}
function CancelSubmitRefData() {
    $('#txtclickcheckref').val("YES");
    $('#RefundIntrestConfirmModel').modal('hide');
    $("#divIntrestTables").removeClass("hidden");
}
function btnResetRefundData() {
    //debugger;
    //$("#txtRefundDate").prop("disabled", false);  
    $("#txtRefundDate").datepicker("enable");
    $("#ddlpaymentcategory").prop('selectedIndex', 0);
    $("#ddltype").prop('selectedIndex', 0);
    $("#ddl_Refundcccode").prop('selectedIndex', 0);
    $("#ddl_RefDCACode").prop('selectedIndex', 0);
    $("#ddl_RefSubDcaCode").prop('selectedIndex', 0);
    $("#txtPrincipleAmount").val("");
    $("#txtRefundName").val("");
    $("#ddl_RefBank").prop('selectedIndex', 0);
    $("#ddl_RefPayMode").prop('selectedIndex', 0);
    $("#txtrefundNo").val("");
    $("#txtRefundRemarks").val("");
    $("#txtRefPayDate").val("");
    $("#IntrestTables tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(3).find("input[type='text']").val("");
        currentRow.find("td").eq(0).find("select option").prop('selected', false).filter(function () {
            return $(this).text() == '-Please Select-';
        }).prop('selected', true);
        currentRow.find("td").eq(1).find("select option").prop('selected', false).filter(function () {
            return $(this).text() == '-Please Select-';
        }).prop('selected', true);
        currentRow.find("td").eq(2).find("select option").prop('selected', false).filter(function () {
            return $(this).text() == '-Please Select-';
        }).prop('selected', true);
    });
    $("#txtRefFinalAmount").val(0);
    $("#divRefInfoMsg").text("");
    $("#divRefInfoMsg").addClass("hidden");
    $("#btnRefSubmit").prop("disabled", false);
    $('#txtclickcheckref').val("");
    $("#divIntrestTables").addClass("hidden");
    //Refpaymentcategorychange();

}

function SaveRefunddata() {
    ////////debugger;

    var RefundPayment = {
        Date: $("#txtRefundDate").val(),
        paymentcategory: $("#ddlpaymentcategory option:selected").val(),
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
        RoleID: $("#txtRefundRoleId").val(),
        RefCreatedby: $("#txtCreatedby").val(),

    };

    addFailMsg = "Error Occurred While inserting Refund Details";
    addSuccessMsg = "Refund Details Added Successfully.";
    //////debugger;
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/SaveRefund',
        data: { Refnf: RefundPayment },
        success: function (Data) {
            if (Data.saveStatus == "Successfull") {
                //////debugger;
                $("#btnRefSubmit").prop("disabled", true);
                $("#divRefInfoMsg").text(addSuccessMsg);
                $("#divRefInfoMsg").removeClass("hidden alert-danger");
                $("#divRefInfoMsg").addClass("alert-success");
                $('#ajax-container').html('');
                removeSpinner($('#Refajax-container'), function () {
                    $('#Refajax-container').html('Content loaded.');
                });
            }
            else {
                $("#btnRefSubmit").prop("disabled", true);
                $("#divRefInfoMsg").text(addFailMsg);
                $("#divRefInfoMsg").addClass("alert-danger");
                $("#divRefInfoMsg").removeClass("hidden alert-success");
                removeSpinner($('#Refajax-container'), function () {
                    $('#Refajax-container').html('Content loaded.');
                });

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnRefSubmit").prop("disabled", true);
            $("#divRefInfoMsg").text(addFailMsg);
            $("#divRefInfoMsg").addClass("alert-danger");
            $("#divRefInfoMsg").removeClass("hidden alert-success");
            removeSpinner($('#Refajax-container'), function () {
                $('#Refajax-container').html('Content loaded.');
            });
        }
    });

}
//Script for REFUND Ends

/* Scripts For Adding New DCA */

function ResetEditGeneralDCA() {

    $("#txtAddGenerelDCACode").val("");
    $("#txtAddGenerelDCAName").val("");
    $("#addGeneralDCACCtypeMLID").val("");
    $("#Additcheck").prop('selectedIndex', 0);

    $("#ITCodeddlID").prop('selectedIndex', 0);
    $("#divAddGeneralDCAInfoMsg").addClass("hidden");

    $('#addGeneralDCACCtypeMLID').multiselect("refresh");

}
function ResetSubDCA() {
    $("#SubDCAddlCodeID").prop('selectedIndex', 0);
    $("#txtAddEditSubDCACode").val("");
    $("#txtAddEditSubDCAName").val("");
    $("#SubDCAITCodeddlID").prop('selectedIndex', 0);
    $("#divAddSubDCAInfoMsg").text("");
    $("#divAddSubDCAInfoMsg").addClass("hidden");

}
var $selectAll = $("input:radio[name=AddDCARd]");
$selectAll.on("change", function () {
    var selectedDCAType = $("input[name='AddDCARd']:checked").val();
    //////debugger;
    if (selectedDCAType == 1) {
        $("#divitcode").hide();
    }
    else if (selectedDCAType == 2) {
        ResetAddTaxDCA();
    }
    else if (selectedDCAType == 3) {
        ResetSubDCA();
    }
    var urlpattern = "/Home/AddDCAView";
    $.ajax({
        url: urlpattern,
        data: { typeOfDCA: selectedDCAType },
        cache: false,
        type: "GET",
        success: function (data) {

            $('#divDCATypeForm').html('');
            $('#divDCATypeForm').html(data);
            $("#divDCATypeForm").fadeIn('slow');
            if (selectedDCAType == 1) {
                //alert($('#addGeneralDCACCtypeMLID option').length);
                $('#addGeneralDCACCtypeMLID').multiselect('rebuild');

                //$('#addGeneralDCAPaymenttypeMLID').multiselect('rebuild');
            }
            else if (selectedDCAType == 2) {
                $('#addTaxDCATaxNosMLID').multiselect('rebuild');
                $('#addTaxDCACCTypeMLID').multiselect('rebuild');
                $('#addTaxDCAPaymenttypeMLID').multiselect('rebuild');
            }
        },
        error: function () {
        }
    });
});
function ResetAddTaxDCA() {
    // alert();
    $("#txtAddTaxDCACode").val("");
    $("#txtAddTaxDCAName").val("");

    $("#AddTaxDCATypeOfTaxID").prop('selectedIndex', 0);
    $("#AddTaxDCANatureOfTaxID").prop('selectedIndex', 0);
    $("#AddTaxDCAITCodeID").prop('selectedIndex', 0);
    $("#hdnTaxDCAID").val("");
    $("#divAddTaxDCAInfoMsg").addClass("hidden");
    //$("#addTaxDCATaxNosMLID").val("");
    // $('#addTaxDCATaxNosMLID').multiselect("refresh");
    //$("#AddTaxitcheck").prop('selectedIndex', 0);
    $("#addTaxDCACCTypeMLID").val("");
    $('#addTaxDCACCTypeMLID').multiselect("refresh");
    //$("#Additcheck").prop('selectedIndex', 0);

}
//Adding or Editing General DCA.
function DcaITCheck(txt) {
    ////////debugger;
    DCACodeID: $("#hdnGeneralDCAID").val();

}
function AddEditGeneralDCA(Status) {
    var checkAction = '';
    var isValid = false;
    if (Status === 'Approved' || Status === '0') {
        isValid = ValidateGeneralDCADetailsEdit();
        if (!isValid) return false;

    }
    else {
        isValid = ValidateGeneralDCADetails();
        if (!isValid) return false;
    }
    if (Status === 'Approved') { checkAction = 'Insert'; }
    else if (Status === '0') { checkAction = 'ReturnUpdate'; }


    //var CheckUpdationAction = '';
    //if (status === "0") {
    //    CheckUpdationAction = 'ReturnUpdate';
    //}
    //else{
    //    CheckUpdationAction = 'Insert';
    //}

    ////////debugger;
    var addGeneralDCADetails = {
        DCACodeID: $("#hdnGeneralDCAID").val(),
        DCACode: $("#txtAddGenerelDCACode").val(),
        DCAName: $("#txtAddGenerelDCAName").val(),
        CCTypeIDs: $("#addGeneralDCACCtypeMLID").val(),
        //ITCheck: $("#Additcheck").val(),
        ITCodeID: 0,
        DCATypeID: 1,
        CheckUpdationType: checkAction
    };
    var addFailMsg = "Error Occurred While Adding General DCA.";
    var addSuccessMsg = "General DCA Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveDCA',
        data: { dcaDetails: addGeneralDCADetails },
        success: function (Data) {
            if (Data.saveStatus === 'Submited') {
                $("#divAddGeneralDCAInfoMsg").text(addSuccessMsg);
                $("#divAddGeneralDCAInfoMsg").removeClass("hidden alert-danger");
                $("#divAddGeneralDCAInfoMsg").addClass("alert-success");
            }
            else {
                $("#divAddGeneralDCAInfoMsg").text(Data.saveStatus);
                $("#divAddGeneralDCAInfoMsg").addClass("alert-danger");
                $("#divAddGeneralDCAInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divAddGeneralDCAInfoMsg").text(addFailMsg);
            $("#divAddGeneralDCAInfoMsg").addClass("alert-danger");
            $("#divAddGeneralDCAInfoMsg").removeClass("hidden alert-success");
        }
    });
}

function ValidateGeneralDCADetails() {
    var isValid = true;
    var errorMsg = "Please enter all required fields!\n";
    var DCACode = $("#txtAddGenerelDCACode").val();
    var DCAName = $("#txtAddGenerelDCAName").val();
    var CCType = $("#addGeneralDCACCtypeMLID").val();
    //var sdcacheck = $("#Additcheck").val();
    //var ITCode = $("#ITCodeddlID").val();
    if (CCType == "" || CCType == null || DCACode == "" || DCACode == null || DCAName == "" || DCAName == null) {
        isValid = false;
    }
    //if (sdcacheck == "1") {
    //    if (ITCode == "" || ITCode == null) {
    //        isValid = false;
    //    }       
    //}
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
function ValidateGeneralDCADetailsEdit() {
    var isValid = true;
    var errorMsg = "Please enter all required fields!\n";
    var DCACode = $("#txtAddGenerelDCACode").val();
    var DCAName = $("#txtAddGenerelDCAName").val();
    var CCType = $("#addGeneralDCACCtypeMLID").val();

    if (CCType == "" || CCType == null || DCACode == "" || DCACode == null || DCAName == "" || DCAName == null) {
        isValid = false;
    }

    if (!isValid) {
        $("#divAddGeneralDCAInfoMsg").text(errorMsg);
        $("#divAddGeneralDCAInfoMsg").addClass("alert-danger");
        $("#divAddGeneralDCAInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divAddGeneralDCAInfoMsg").addClass("hidden");
        $("#divAddGeneralDCAInfoMsg").text("");
    }

    return isValid;
}

// Adding or Editing Tax DCA.
function AddEditTaxDCA() {
    var isValid = ValidateTaxDCADetails();
    if (!isValid) return false;
    ////////debugger;
    //var addTaxDCADetails = {
    //    DCACodeID: $("#hdnTaxDCAID").val(),
    //    TypeOfTax: $("#AddTaxDCATypeOfTaxID").val(),
    //    NatureOfTax: $("#AddTaxDCANatureOfTaxID").val(),
    //    DCACode: $("#txtAddTaxDCACode").val(),
    //    DCAName: $("#txtAddTaxDCAName").val(),
    //    TaxNoIDs: $("#addTaxDCATaxNosMLID").val(),
    //    CCTypeIDs: $("#addTaxDCACCTypeMLID").val(),      
    //    ITCodeID: 0,
    //    DCATypeID: 2
    //};

    var addTaxDCADetails = {
        DCACodeID: $("#hdnTaxDCAID").val(),
        TypeOfTax: $("#AddTaxDCATypeOfTaxID").val(),
        NatureOfTax: $("#AddTaxDCANatureOfTaxID").val(),
        DCACode: $("#txtAddTaxDCACode").val(),
        DCAName: $("#txtAddTaxDCAName").val(),
        CCTypeIDs: $("#addTaxDCACCTypeMLID").val(),
        ITCodeID: 0,
        DCATypeID: 2
    };

    var addFailMsg = "Error Occurred While Adding Tax DCA.";
    var addSuccessMsg = "Tax DCA Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveDCA',
        data: { dcaDetails: addTaxDCADetails },
        success: function (Data) {

            if (Data.saveStatus === 'Submited') {
                $("#divAddTaxDCAInfoMsg").text(addSuccessMsg);
                $("#divAddTaxDCAInfoMsg").removeClass("hidden alert-danger");
                $("#divAddTaxDCAInfoMsg").addClass("alert-success");
            }
            else {
                $("#divAddTaxDCAInfoMsg").text(Data.saveStatus);
                $("#divAddTaxDCAInfoMsg").addClass("alert-danger");
                $("#divAddTaxDCAInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divAddTaxDCAInfoMsg").text(addFailMsg);
            $("#divAddTaxDCAInfoMsg").addClass("alert-danger");
            $("#divAddTaxDCAInfoMsg").removeClass("hidden alert-success");
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
    var sdcacheck = $("#AddTaxitcheck").val();
    var ITCodeID = $("#AddTaxDCAITCodeID").val();


    if (CCTypeIDs == "" || CCTypeIDs == null || DCACode == "" || DCACode == null || DCAName == "" || DCAName == null
        || TypeOfTax == "" || TypeOfTax == null || NatureOfTax == "" || NatureOfTax == null || sdcacheck == ""
    ) {
        isValid = false;
    }
    //if (sdcacheck == "1") {
    //    if (ITCodeID == "" || ITCodeID == null) {
    //        isValid = false;
    //    }
    //}

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
/* Scripts for Adding New DCA */



function EditGeneralDCA(DCAID, DCATypeID, DCACode, DCAName, CCTypes, PaymentTypes, ITCodeID) {
    //General DCA PopUp Initiation       

    //var existingDcaDetails = {
    //    DCACode: DCACode,
    //    DCAName: DCAName,
    //    ITCodeID: ITCodeID,
    //    CCTypeIDs: CCTypes,
    //    PaymentTypeIDs: PaymentTypes
    //}

    var title = "Edit General DCA";
    $.ajax({
        type: 'POST',
        url: "/Home/GetEditGeneralDCA/",
        data: { DcaId: DCAID, Dcatypeid: DCATypeID },
        cache: false,
        success: function (response) {
            EditGeneralDCAPopUp = $("#divEditGeneralDCAPopup").dialog({
                title: title,
                modal: true,
                autoOpen: true,
                stack: true,
                width: 900,
                height: 500,
                resizable: true,
                draggable: true,
                close: function (event, ui) {
                    $(this).dialog('close');
                }
            });
            $(EditGeneralDCAPopUp).html("");
            $(EditGeneralDCAPopUp).html(response);
            $(EditGeneralDCAPopUp).fadeIn('slow');
            $('#hdnGeneralDCAID').val(DCAID);
            $('#addGeneralDCACCtypeMLID').multiselect('rebuild');
            $('#addGeneralDCAPaymenttypeMLID').multiselect('rebuild');
        },
        error: function () {
        }
    });
}

function EditTaxDCA(DCAID, DCATypeID, DCACode, DCAName, CCTypes, PaymentTypes, ITCodeID, TaxNos, TypeOfTaxID, NatureOfTaxID) {
    // Tax DCA PopUp Initiation
    //var existingTaxDcaDetails = {
    //    DCACode: DCACode,
    //    DCAName: DCAName,
    //    ITCodeID: ITCodeID,
    //    CCTypeIDs: CCTypes,
    //    PaymentTypeIDs: PaymentTypes,
    //    TaxNoIDs: TaxNos,
    //    TypeOfTax: TypeOfTaxID,
    //    NatureOfTax: NatureOfTaxID
    //};

    var title = "Edit Tax DCA";
    $.ajax({
        type: 'POST',
        url: "/Home/GetEditTaxDCA/",
        data: { dcaDetails: existingTaxDcaDetails },
        cache: false,
        success: function (response) {
            EditTaxDCAPopUp = $("#divEditTaxDCAPopup").dialog({
                title: title,
                modal: true,
                autoOpen: true,
                stack: true,
                width: 900,
                height: 500,
                resizable: true,
                draggable: true,
                close: function (event, ui) {
                    $(this).dialog('close');
                }
            });
            $(EditTaxDCAPopUp).html("");
            $(EditTaxDCAPopUp).html(response);
            $(EditTaxDCAPopUp).fadeIn('slow');
            $('#hdnTaxDCAID').val(DCAID);
            $('#addTaxDCATaxNosMLID').multiselect('rebuild');
            $('#addTaxDCACCTypeMLID').multiselect('rebuild');
            $('#addTaxDCAPaymenttypeMLID').multiselect('rebuild');
        },
        error: function () {
        }
    });
}
function DCAActionschange(Dcaid, Dcatypid, Dcacode, Dcaname, itcodeid, Dcatypename, txt) {
    var action = txt.value;

    if (action === 'Edit') {

        if (Dcatypid === 2) {
            //Update DCaTax
            $.ajax({
                type: 'POST',
                url: "/Home/GetEditTaxDCA/",
                data: { DcaId: Dcaid, Dcatypeid: Dcatypid },
                cache: false,
                success: function (response) {
                    EditTaxDCAPopUp = $("#divEditTaxDCAPopup").dialog({
                        title: title,
                        modal: true,
                        autoOpen: true,
                        stack: true,
                        width: 900,
                        height: 500,
                        resizable: true,
                        draggable: true,
                        close: function (event, ui) {
                            $(this).dialog('close');
                        }
                    });

                    $(EditTaxDCAPopUp).html("");
                    $(EditTaxDCAPopUp).html(response);
                    $(EditTaxDCAPopUp).fadeIn('slow');
                    $('#hdnTaxDCAID').val(Dcaid);
                    //$('#addTaxDCATaxNosMLID').multiselect('rebuild');
                    //$('#addTaxDCACCTypeMLID').multiselect('rebuild');
                    //$('#addTaxDCAPaymenttypeMLID').multiselect('rebuild');
                },
                error: function () {
                }
            });
        } else {
            var title = "Edit General DCA";
            $.ajax({
                type: 'POST',
                url: "/Home/GetEditGeneralDCA/",
                data: { DcaId: Dcaid, Dcatypeid: Dcatypid },
                cache: false,
                success: function (response) {
                    // $("#AddNewHierarchyModal").modal('show');
                    EditGeneralDCAPopUp = $("#divEditGeneralDCAPopup").dialog({
                        title: title,
                        modal: true,
                        autoOpen: true,
                        stack: true,
                        width: 900,
                        height: 500,
                        resizable: true,
                        draggable: true,
                        close: function (event, ui) {
                            $(this).dialog('close');
                        }
                    });
                    $(EditGeneralDCAPopUp).html("");
                    $(EditGeneralDCAPopUp).html(response);
                    $(EditGeneralDCAPopUp).fadeIn('slow');
                    $('#hdnGeneralDCAID').val(Dcaid);
                    //$('#addGeneralDCACCtypeMLID').multiselect('rebuild');
                    //$('#addGeneralDCAPaymenttypeMLID').multiselect('rebuild');
                    //$("#btnResettaxdca").addClass('hidden');
                },
                error: function () {
                }
            });
        }

    }
    if (action === 'Close') {
        $.ajax({
            type: "POST",
            url: "/Home/ViewCloseDCA",
            data: '{DcaId:"' + Dcaid + '",DCAType:"' + Dcatypename + '",DCACode:"' + Dcacode + '",DCAName:"' + Dcaname + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {

                $('#closeDCAConfirmation').html(data);
                $('#closeDCAConfirmation').modal();
                $("#divClsoeDcaInfoMsg").text("");
                $("#divClsoeDcaInfoMsg").addClass("hidden");
            }
        });
    }

}
function NotifyDcaPendings(Dcaid, Dcacode, Accessname) {
    ////////debugger;
    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtDcaCloseNote").val();
    var closingdate = $("#txtDcaClosingAson").val();
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

        if (closingdate === "" || closingdate === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
            isValid = false;
        }
    }
    if (Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
        var ddlaction = $("#ddlCloseDcaStatus option:selected").index();
        if (ddlaction === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
            isValid = false;
        }

    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClsoeDcaInfoMsg").text("");
        $("#divClsoeDcaInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClsoeDcaInfoMsg").addClass("alert-danger");
        $("#divClsoeDcaInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClsoeDcaInfoMsg").text("");
        var sendNotificationDetails = {};
        $("#divClsoeDcaInfoMsg").addClass("hidden");
        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                Action: Accessname,
                DCACode: Dcacode,
                Remarks: $("#txtDcaCloseNote").val(),
                CloseDate: $("#txtDcaClosingAson").val(),
                Status: $("#ddlCloseDcaStatus option:selected").val()
            };
        }
        else {
            sendNotificationDetails = {
                Action: Accessname,
                DCACode: Dcacode,
                Remarks: $("#txtDcaCloseNote").val(),
                CloseDate: $("#txtDcaClosingAson").val(),
                Status: ''
            };

        }

        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/CloseDcaNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divClsoeDcaInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divClsoeDcaInfoMsg").text('Closing Account Head Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseDcaStatus option:selected").val();
                        if (type === 'Reject')
                            $("#divClsoeDcaInfoMsg").text('Closing Account Head  Rejected Successfully');
                        else
                            $("#divClsoeDcaInfoMsg").text('Closing Account Head  Approved Successfully');
                    }
                    $("#divClsoeDcaInfoMsg").removeClass("hidden alert-danger");
                    $("#divClsoeDcaInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divClsoeDcaInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divClsoeDcaInfoMsg").addClass("alert-danger");
                    $("#divClsoeDcaInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divClsoeDcaInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divClsoeDcaInfoMsg").addClass("alert-danger");
                $("#divClsoeDcaInfoMsg").removeClass("hidden alert-success");
            }
        });
    }


}

// Start of Sub DCA Functionalities //
function AddEditSubDCA() {
    var isValid = ValidateAddEditSubDCA();
    if (!isValid) return false;
    var addEditSubDCADetails = {
        SubDCACodeID: $("#hdnSubDCAID").val(),
        DCACodeID: $("#SubDCAddlCodeID").val(),
        SubDCACode: $("#txtAddEditSubDCACode").val(),
        SubDCAName: $("#txtAddEditSubDCAName").val(),
        ITCodeID: $("#SubDCAITCodeddlID").val()
    }
    //var addFailMsg = "Error Occurred While Adding Sub DCA.";
    var addFailMsg = "SubDCA Already Exist";
    var addSuccessMsg = "Sub DCA Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveSubDCA',
        data: { subDCADetails: addEditSubDCADetails },
        success: function (Data) {
            if (Data.saveStatus == 'Submited') {
                $("#divAddSubDCAInfoMsg").text(addSuccessMsg);
                $("#divAddSubDCAInfoMsg").removeClass("hidden alert-danger");
                $("#divAddSubDCAInfoMsg").addClass("alert-success");
            }
            else {

                $("#divAddSubDCAInfoMsg").text(Data.saveStatus);
                $("#divAddSubDCAInfoMsg").addClass("alert-danger");
                $("#divAddSubDCAInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divAddSubDCAInfoMsg").text(addFailMsg);
            $("#divAddSubDCAInfoMsg").addClass("alert-danger");
            $("#divAddSubDCAInfoMsg").removeClass("hidden alert-success");
        }
    });
}
function UpdaeSubDCA() {
    var isValid = ValidateAddEditSubDCA();
    if (!isValid) return false;
    ////////debugger;
    var addEditSubDCADetails = {
        SubDCACodeID: $("#hdnSubDCAID").val(),
        DCACodeID: $("#SubDCAddlCodeID").val(),
        SubDCACode: $("#txtAddEditSubDCACode").val(),
        SubDCAName: $("#txtAddEditSubDCAName").val(),
        ITCodeID: $("#SubDCAITCodeddlID").val(),
        CheckUpdationType: 'Insert'
    }
    var addFailMsg = "Error Occurred While Adding Sub DCA.";
    var addSuccessMsg = "Sub DCA Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveSubDCA',
        data: { subDCADetails: addEditSubDCADetails },
        success: function (Data) {
            if (Data.saveStatus == 'Updated') {
                $("#divAddSubDCAInfoMsg").text(addSuccessMsg);
                $("#divAddSubDCAInfoMsg").removeClass("hidden alert-danger");
                $("#divAddSubDCAInfoMsg").addClass("alert-success");
            }
            else {
                $("#divAddSubDCAInfoMsg").text(Data.saveStatus);
                $("#divAddSubDCAInfoMsg").addClass("alert-danger");
                $("#divAddSubDCAInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divAddSubDCAInfoMsg").text(addFailMsg);
            $("#divAddSubDCAInfoMsg").addClass("alert-danger");
            $("#divAddSubDCAInfoMsg").removeClass("hidden alert-success");
        }
    });
}


function ValidateAddEditSubDCA() {
    var isValid = true;

    var errorMsg = "Please enter all required fields!\n";
    var DCACodeID = $("#SubDCAddlCodeID").val();
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



function EditSubDCA(SubDCACodeID, DCACodeID, SubDCAName, ITCodeID, DCAName) {
    //Sub DCA PopUp Initiation       

    var existingSubDcaDetails = {
        SubDCACodeID: DCAName,
        DCACodeID: DCAName,
        SubDCAName: ITCodeID,
        ITCodeID: ITCodeID
    }

    var title = "Edit Sub DCA";
    $.ajax({
        type: 'POST',
        url: "/Home/GetEditSubDCA/",
        data: { subDcaDetails: existingSubDcaDetails },
        cache: false,
        success: function (response) {
            EditSubDCAPopUp = $("#divEditSubDCAPopup").dialog({
                title: title,
                modal: true,
                autoOpen: true,
                stack: true,
                width: 900,
                height: 500,
                resizable: true,
                draggable: true,
                close: function (event, ui) {
                    $(this).dialog('close');
                }
            });
            $(EditSubDCAPopUp).html("");
            $(EditSubDCAPopUp).html(response);
            $(EditSubDCAPopUp).fadeIn('slow');
            $('#hdnSubDCAID').val(SubDCACodeID);
        },
        error: function () {
        }
    });
}

function SubDCAActionschange(SubDcaid, Dcacodeid, Subdcaname, Subdcacode, Dcaname, ITCodeID, status, itdesc, txt) {
    var selectedaction = txt.value;
    //alert(status + "==" + itdesc);
    if (selectedaction === 'Edit') {

        var existingSubDcaDetails = {
            SubDCACodeID: SubDcaid,
            DCACodeID: Dcacodeid,
            SubDCAName: Subdcaname,
            SubDCACode: Subdcacode,
            ITCodeID: ITCodeID,
            DCACode: Dcaname,
            Status: status,
            ITCodeDescription: itdesc
        };

        var title = "Edit Sub DCA";
        $.ajax({
            type: 'POST',
            url: "/Home/GetEditSubDCA",
            data: { subDcaDetails: existingSubDcaDetails },
            cache: false,
            success: function (response) {
                EditSubDCAPopUp = $("#divEditSubDCAPopup").dialog({
                    title: title,
                    modal: true,
                    autoOpen: true,
                    stack: true,
                    width: 900,
                    height: 500,
                    resizable: true,
                    draggable: true,
                    close: function (event, ui) {
                        $(this).dialog('close');
                    }
                });
                $(EditSubDCAPopUp).html("");
                $(EditSubDCAPopUp).html(response);
                $(EditSubDCAPopUp).fadeIn('slow');
                $('#hdnSubDCAID').val(SubDcaid);
            },
            error: function () {
            }
        });
    }
    else if (selectedaction === 'Close') {
        $.ajax({
            type: "POST",
            url: "/Home/ViewCloseSubDCA",
            data: '{Subdcaid:"' + SubDcaid + '",SubDcacode:"' + Subdcacode + '",Dcaid:"' + Dcacodeid + '",Sdcaname:"' + Subdcaname + '",Dcaname:"' + Dcaname + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {

                $('#closeSDCAConfirmation').html(data);
                $('#closeSDCAConfirmation').modal();
                //$("#divClsoeDcaInfoMsg").text("");
                //$("#divClsoeDcaInfoMsg").addClass("hidden");
            }
        });
    }
}
function NotifySubDcaPendings(SubDCACode, Accessname) {
    ////////debugger;
    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtSDcaCloseNote").val();
    var closingdate = $("#txtSDcaClosingAson").val();
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

        if (closingdate === "" || closingdate === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
            isValid = false;
        }
    }
    if (Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
        var ddlaction = $("#ddlCloseSDcaStatus option:selected").index();
        if (ddlaction === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
            isValid = false;
        }

    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClsoeSDcaInfoMsg").text("");
        $("#divClsoeSDcaInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClsoeSDcaInfoMsg").addClass("alert-danger");
        $("#divClsoeSDcaInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClsoeSDcaInfoMsg").text("");
        var sendNotificationDetails = {};
        $("#divClsoeSDcaInfoMsg").addClass("hidden");
        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                Action: Accessname,
                SubDCACode: SubDCACode,
                CloseRemarks: $("#txtSDcaCloseNote").val(),
                ClosingDate: closingdate,
                Status: $("#ddlCloseSDcaStatus option:selected").val()
            };
        }
        else {
            sendNotificationDetails = {
                Action: Accessname,
                SubDCACode: SubDCACode,
                CloseRemarks: $("#txtSDcaCloseNote").val(),
                ClosingDate: closingdate,
                Status: ''
            };
        }

        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/CloseSubDcaNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divClsoeSDcaInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divClsoeSDcaInfoMsg").text('Closing SubAccount Head Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseDcaStatus option:selected").val();
                        if (type === 'Reject')
                            $("#divClsoeSDcaInfoMsg").text('Closing SubAccount Head Rejected Successfully');
                        else
                            $("#divClsoeSDcaInfoMsg").text('Closing SubAccount Head Approved Successfully');
                    }
                    $("#divClsoeSDcaInfoMsg").removeClass("hidden alert-danger");
                    $("#divClsoeSDcaInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divClsoeSDcaInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divClsoeSDcaInfoMsg").addClass("alert-danger");
                    $("#divClsoeSDcaInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divClsoeSDcaInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divClsoeSDcaInfoMsg").addClass("alert-danger");
                $("#divClsoeSDcaInfoMsg").removeClass("hidden alert-success");
            }
        });
    }

}
// End of Sub DCA Functionalities //

//Start of Saving Basic Business Info//
function binEncode(data) {
    var binArray = [];
    var datEncode = "";

    for (i = 0; i < data.length; i++) {
        binArray.push(data[i].charCodeAt(0).toString(2));
    }
    for (j = 0; j < binArray.length; j++) {
        var pad = padding_left(binArray[j], '0', 8);
        datEncode += pad + ' ';
    }
    function padding_left(s, c, n) {
        if (!s || !c || s.length >= n) {
            return s;
        }
        var max = (n - s.length) / c.length;
        for (var i = 0; i < max; i++) {
            s = c + s;
        } return s;
    }
    //console.log(binArray);
    return binArray;
}
function SaveBasicFirmInfo() {

    var isValid = ValidateBasicFirmInfo();
    if (!isValid) return false;
    //////debugger;
    var imgpath = $("#BusInfoFirmLogoId").val(); var imgbytes = "";
    if (imgpath != null || imgpath != "") {
        var myCanvas = $('<canvas/>');
        var myImageSrc = myCanvas.attr('src', imgpath);
        myCanvas.attr('src', myImageSrc);
        var dataInBase64 = $(myCanvas)[0].toDataURL('image/png').replace(/data\:image\/png;base64,/, '');
        imgbytes = binEncode(dataInBase64);
        //$('#user_img1').attr('src', 'data:image/gif;base64,' + imgbytes);   
        ////var img = document.createElement('img');
        ////img.src = 'data:image/jpeg;base64,' + btoa(imgbytes);
        //$('#user_img1').attr('src', 'data:image/jpeg;base64,' + btoa(imgbytes));
        // alert(imgbytes);


    }



    var basicFirmDetails = {
        firmName: $("#BusInfofirmNameId").val(),
        firmDescription: $("#BusInfoFirmDescId").val(),
        firmFunctionalAreaID: $("#BusInfoFirmfnAreaId").val(),
        firmRegionId: $("#BusInfoFirmRegionId").val(),
        firmLogo: imgbytes
    }
    var addFailMsg = "Error Occurred While Adding Firm Information.";
    var addSuccessMsg = "Firm Information Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveFirmInfo',
        data: { basicFirmInfo: basicFirmDetails },
        success: function (Data) {
            if (Data.saveStatus == true) {
                $("#divFirmInfoMsg").text(addSuccessMsg);
                $("#divFirmInfoMsg").removeClass("hidden alert-danger");
                $("#divFirmInfoMsg").addClass("alert-success");
            }
            else {
                $("#divFirmInfoMsg").text(addFailMsg);
                $("#divFirmInfoMsg").addClass("alert-danger");
                $("#divFirmInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divFirmInfoMsg").text(addFailMsg);
            $("#divFirmInfoMsg").addClass("alert-danger");
            $("#divFirmInfoMsg").removeClass("hidden alert-success");
        }
    });
}

function ValidateBasicFirmInfo() {
    var isValid = true;

    var errorMsg = "Please enter all required fields!\n";
    var firmName = $("#BusInfofirmNameId").val();
    // var firmAddress = $("#BusInfofirmAddressId").val();
    var firmDescription = $("#BusInfoFirmDescId").val();
    var firmFunctionalAreaID = $("#BusInfoFirmfnAreaId").val();
    var firmRegionId = $("#BusInfoFirmRegionId").val();
    var firmLogo = $("#BusInfoFirmLogoId").val();
    //if (firmName == "" || firmName == null || firmAddress == "" || firmAddress == null || firmDescription == "" || firmDescription == null
    //    || firmFunctionalAreaID == "" || firmFunctionalAreaID == null || firmRegionId == "" || firmRegionId == null
    //) {
    if (firmName == "" || firmName == null || firmDescription == "" || firmDescription == null
        || firmFunctionalAreaID == "" || firmFunctionalAreaID == null || firmRegionId == "" || firmRegionId == null
    ) {
        isValid = false;
    }

    if (!isValid) {
        $("#divFirmInfoMsg").text(errorMsg);
        $("#divFirmInfoMsg").addClass("alert-danger");
        $("#divFirmInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divFirmInfoMsg").addClass("hidden");
    }

    return isValid;
}
// End of Saving Basic Business Info//

//Start Approval Hierarchy script//
function MasterOperationChange() {
    var index = $("#ddlApprovalHierMasterOper option:selected").index();
    var masteroper = $("#ddlApprovalHierMasterOper option:selected").val();
    if (index !== 0) {
        $("#divapprovalHierachy").removeClass("hidden");
        //if (masteroper === 102 && masteroper === 104 && masteroper === 190 && masteroper === 192 && masteroper === 194) {
        //    //$("#tblapprovalHierachy tfoot tr").hide();
        //}
        //else {
        //   // $("#tblapprovalHierachy tfoot tr").show();
        //}
    }

}
function SubmitApprovalHierarchy() {
    var isValid = true;
    var errorMsg = "";
    var index = $("#ddlApprovalHierMasterOper option:selected").index();
    var masteroper = $("#ddlApprovalHierMasterOper option:selected").val();
    if (index === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Master Operation</p>";
        isValid = false;
    }
    else {
        var listboxemptycount = 0;
        $("#tblapprovalHierachy tbody tr").each(function () {
            var currentRow = $(this);
            var selectedroles = [];
            var selected = currentRow.find("td").eq(2).find("select option:selected").index();
            var message = "";
            if (selected === 0) {
                listboxemptycount += 1;
            }
        });

        if (listboxemptycount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Roles for Verification</p>";
            isValid = false;
        }

    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divApprHierarchyInfoMsg").text("");
        $("#divApprHierarchyInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divApprHierarchyInfoMsg").addClass("alert-danger");
        $("#divApprHierarchyInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divApprHierarchyInfoMsg").text("");
        $("#divApprHierarchyInfoMsg").addClass("hidden");

        var selectedrolelist = [];
        $("#tblapprovalHierachy tbody tr").each(function () {
            var currentRow = $(this);
            var role = currentRow.find("td").eq(2).find("select option:selected").val();
            if (role !== 0) {
                selectedrolelist.push(role);
                //alert(role);
            }
        });
        var duplicatelist = selectedrolelist.filter(i => selectedrolelist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            $("#divApprHierarchyInfoMsg").text("");
            $("#divApprHierarchyInfoMsg").append("<div><p>Duplicate roles Selected</p></div>");
            $("#divApprHierarchyInfoMsg").addClass("alert-danger");
            $("#divApprHierarchyInfoMsg").removeClass("hidden alert-success");

        }
        else {
            $("#divApprHierarchyInfoMsg").text("");
            $("#divApprHierarchyInfoMsg").addClass("hidden");
            SaveApprovalHierarchy();
        }
    }
    return isValid;


}

function SaveApprovalHierarchy() {

    var Masteropers = "", Roles = "", Levels = "";
    var masteroperid = $("#ddlApprovalHierMasterOper option:selected").val();
    $("#tblapprovalHierachy tbody tr").each(function () {

        var currentRow = $(this);
        var rowno = currentRow.find("td").eq(3).html();
        var selected = currentRow.find("td").eq(2).find("select option:selected").index();
        var selectedRole = currentRow.find("td").eq(2).find("select option:selected").val();
        Masteropers += masteroperid + ',';
        Levels += rowno + ',';
        Roles += selectedRole + ',';
        // var message = "";
        //selected.each(function () {
        //    message += $(this).text() + " " + $(this).val() + "\n";
        //    Masteropers += masteroperid + ',';
        //    Levels += rowno + ',';
        //    Roles += $(this).val() + ',';           
        //});       
    });

    var saveHierarchy = {
        MasterIds: Masteropers,
        RoleIds: Roles,
        LevelIds: Levels,
        //Createdby:'Admin',
    };
    var addFailMsg = "Error Occurred While Adding Approval Hierarchy.";
    var addSuccessMsg = "Approval Hierarchy Saved Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveApprovalHierarchy',
        data: { businessApprHier: saveHierarchy },
        success: function (Data) {
            if (Data.saveStatus == "Submitted") {
                $("#divApprHierarchyInfoMsg").text(addSuccessMsg);
                $("#divApprHierarchyInfoMsg").removeClass("hidden alert-danger");
                $("#divApprHierarchyInfoMsg").addClass("alert-success");
            }
            else {
                $("#divApprHierarchyInfoMsg").text(Data.saveStatus);
                $("#divApprHierarchyInfoMsg").addClass("alert-danger");
                $("#divApprHierarchyInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divApprHierarchyInfoMsg").text(addFailMsg);
            $("#divApprHierarchyInfoMsg").addClass("alert-danger");
            $("#divApprHierarchyInfoMsg").removeClass("hidden alert-success");
        }
    });
}


function ResetMasterOperationddl() {
    $.ajax({
        type: "POST",
        url: "/Home/GetMasterOperationNotInWorkFlow",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddlMasters = $("#ddlApprovalHierMasterOper");
            ddlMasters.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddlMasters.append($("<option></option>").val(this['MasterOperationID']).html(this['MasterOperationDescription']));
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });

}
function ViewAddNewHierarchyModel() {
    $('#AddNewHierarchyModal').on('hidden.bs.modal', function () {
        $(this).removeData();
    });
    $.get("/Home/AddNewHierarchy", null, function (data) {
        $('#AddNewHierarchy').html(data);
        $("#AddNewHierarchyModal").modal('show');

    });



}
function InitializeHierachyGrid() {
    var hierGrid = $('#tblWorkFlowLevel').DataTable({
        info: false,
        destroy: false,
        paging: false,
        lengthChange: false,
        searching: false,
        ordering: false,
        pagingType: false,

        language: {
            "emptyTable": "No Hierachy Found"
        },
        "createdRow": function (row, data, index) {
        },
        //pageLength: 10
    });

}


function WorkFlowActionChange(ModelData, txt) {

    var title = "Edit Approval Hierarchy";
    var selectedaction = txt.value;

    var Masterid = ModelData.MasterOperationID;
    var mastecode = ModelData.MasterOperationDescription;
    //alert(selectedaction);
    if (selectedaction === "E") {
        $("#tblUpHierarchy tbody tr").remove();
        $.ajax({
            type: 'POST',
            url: "/Home/UpdateHierarchy/",
            data: { objWFL: ModelData },
            cache: false,
            success: function (response) {
                $('#UpdateWorkflow').html(response);
                $('#UpdateWorkflow').modal();
                $("#divUpHierarchyInfoMsg").text("");
                $("#divUpHierarchyInfoMsg").addClass("hidden");
                $("#btnWFupdate").prop('disabled', false);
            },
            error: function () {
            }
        });
    }
    else if (selectedaction === "D") {

        DeleteWorkFlowDetails(Masterid, mastecode);



    }
}
function DeleteHierarchy() {

    var updateHierarchy = {
        MasterID: $("#txtdeleteMasterid").val()


    };
    var addFailMsg = "Error Occurred While Deleting Approval Hierarchy.";
    var addSuccessMsg = "Approval Hierarchy Deleted Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/UpdateMasterOperaionStatus',
        data: { businessApproval: updateHierarchy },
        success: function (Data) {

            if (Data.saveStatus === true) {
                $("#divDeleteHierarchyInfoMsg").text(addSuccessMsg);
                $("#divDeleteHierarchyInfoMsg").removeClass("hidden alert-danger");
                $("#divDeleteHierarchyInfoMsg").addClass("alert-success");
                $("#confirmmsg").addClass('hidden');
                $("#confirmbtn").addClass('hidden');
                $("#confirmms1").addClass('hidden');

            }
            else {
                $("#divDeleteHierarchyInfoMsg").text(addFailMsg);
                $("#divDeleteHierarchyInfoMsg").addClass("alert-danger");
                $("#divDeleteHierarchyInfoMsg").removeClass("hidden alert-success");
                $("#confirmmsg").addClass('hidden');
                $("#confirmbtn").addClass('hidden');
                $("#confirmms1").addClass('hidden');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divDeleteHierarchyInfoMsg").text(addFailMsg);
            $("#divDeleteHierarchyInfoMsg").addClass("alert-danger");
            $("#divDeleteHierarchyInfoMsg").removeClass("hidden alert-success");
            $("#confirmmsg").addClass('hidden');
            $("#confirmbtn").addClass('hidden');
            $("#confirmms1").addClass('hidden');
        }
    });
}


function SaveUpdatedWorkFlow() {

    var masteroperid = $("#ddlApprovalHierMasterOper option:selected").val();


    var isValid = true;
    var errorMsg = "";
    var Masteropers = "", Roles = "", Levels = "", NotSelectedcount = 0;
    $("#tblUpHierarchy tbody tr").each(function () {
        var currentRow = $(this);
        var levelid = currentRow.find("td").eq(7).html();
        var str = levelid.trim();
        if (str === "00") {
            var selected = currentRow.find("td").eq(5).find("select option:selected").index();
            if (selected === 0) {
                NotSelectedcount = NotSelectedcount + 1;
            }
        }

    });

    if (NotSelectedcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Roles for Verification</p>";
        isValid = false;
    }
    if (!isValid) {

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpHierarchyInfoMsg").text("");
        $("#divUpHierarchyInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpHierarchyInfoMsg").addClass("alert-danger");
        $("#divUpHierarchyInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divUpHierarchyInfoMsg").text("");
        $("#divUpHierarchyInfoMsg").addClass("hidden");
        $("#tblUpHierarchy tbody tr").each(function () {

            var currentRow = $(this);
            var selectedRole = 0;
            var levelno = currentRow.find("td").eq(3).html();
            selectedRole = currentRow.find("td").eq(2).html();
            selectedRole = selectedRole.trim();

            Levels += levelno.trim() + ',';
            Roles += selectedRole.trim() + ',';
        });

        var saveHierarchy = {
            MasterID: $("#txtupmasterid").val(),
            RoleIds: Roles,
            LevelIds: Levels
        };

        var addFailMsg = "Error Occurred While Adding Approval Hierarchy.";
        var addSuccessMsg = "Approval Hierarchy Saved Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/UpdateApprovalHierarchy',
            data: { businessApprHier: saveHierarchy },
            success: function (Data) {
                if (Data.saveStatus === "Updated") {
                    $("#divUpHierarchyInfoMsg").text(addSuccessMsg);
                    $("#divUpHierarchyInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpHierarchyInfoMsg").addClass("alert-success");
                    $("#btnWFupdate").prop('disabled', true);
                }
                else {
                    $("#divUpHierarchyInfoMsg").text(addFailMsg);
                    $("#divUpHierarchyInfoMsg").addClass("alert-danger");
                    $("#divUpHierarchyInfoMsg").removeClass("hidden alert-success");
                    $("#btnWFupdate").prop('disabled', true);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divUpHierarchyInfoMsg").text(addFailMsg);
                $("#divUpHierarchyInfoMsg").addClass("alert-danger");
                $("#divUpHierarchyInfoMsg").removeClass("hidden alert-success");
                $("#btnWFupdate").prop('disabled', true);
            }
        });
    }
    //}
}
//function AddnewRowForUpdateHierarchy() {
//    //////debugger;
//    $("#mdlcode").val("");
//    $("#divUpHierarchyInfoMsg").text("");
//    $("#divUpHierarchyInfoMsg").addClass("hidden");
//    var isValid = true;
//    var errorMsg = "";
//    var NotSelectedcount = 0;


//    $("#tblUpHierarchy tbody tr").each(function () {
//        var currentRow = $(this);
//        var levelid = currentRow.find("td").eq(7).html();
//        var str = levelid.trim();
//        if (str === "00") {
//            var selected = currentRow.find("td").eq(5).find("select option:selected").index();
//            if (selected === 0) {
//                NotSelectedcount = NotSelectedcount + 1;
//            }

//        }

//    });

//    if (NotSelectedcount > 0) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Select Roles for Verification</p>";
//        isValid = false;
//    }
//    if (!isValid) {
//        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//        $("#divUpHierarchyInfoMsg").text("");
//        $("#divUpHierarchyInfoMsg").append(finalerror + errorMsg + "</div>");
//        $("#divUpHierarchyInfoMsg").addClass("alert-danger");
//        $("#divUpHierarchyInfoMsg").removeClass("hidden alert-success");
//    }
//    else {


//        var rows = $("#tblUpHierarchy tbody tr").length;
//        var counter = parseInt(rows) - parseInt(1);
//        var selectedroles = [];
//        var idvalues = '';

//        $("#tblUpHierarchy tbody tr").each(function () {

//            var currentRow = $(this);
//            var selected = currentRow.find("td").eq(2).html();
//            selected = selected.trim();
//            idvalues += selected + ',';
//        });
//        //alert(idvalues);
//        if (idvalues != '') {
//            var rowno = rows + 1;
//            $.ajax({
//                type: 'POST',
//                dataType: 'html',
//                url: '/Home/ShowUpdateHierachyDDLView',
//                data: { iddata: idvalues },
//                success: function (Data) {
//                    $("#mdlcode").val(Data);
//                },
//                error: function (XMLHttpRequest, textStatus, errorThrown) {
//                    alert("error");
//                }
//            });
//            $.ajax({
//                type: "POST",
//                url: "/Home/GetAllUserRoles",
//                data: '',
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function (response) {
//                    var newRow = $("<tr>");
//                    var cols = "";
//                    cols += '<td style="text-align:center"  class="hidden">' + $("#txtupmasterid").val() + '</td>'
//                    cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
//                    cols += '<td style="text-align:center"  class="hidden">' + 0 + '</td>';
//                    cols += '<td style="text-align:center"  class="hidden">' + (parseInt(counter) + 1) + '</td>';
//                    if (counter == 0) {
//                        cols += '<td style="text-align:center"><Label type="text" class="control-label" name="hierarchy' + counter + '">' + (parseInt(counter) + 1) + 'st Level of Verification</Label></td>';
//                    }
//                    else if (counter == 1) {
//                        cols += '<td style="text-align:center"><Label type="text" class="control-label" name="hierarchy' + counter + '">' + (parseInt(counter) + 1) + 'nd Level of Verification</Label></td>';
//                    }
//                    else if (counter == 2) {
//                        cols += '<td style="text-align:center"><Label type="text" class="control-label" name="hierarchy' + counter + '">' + (parseInt(counter) + 1) + 'rd Level of Verification</Label></td>';
//                    }
//                    else {
//                        cols += '<td style="text-align:center"><Label type="text" class="control-label" name="hierarchy' + counter + '">' + (parseInt(counter) + 1) + 'th Level of Verification</Label></td>';
//                    }
//                    cols += '<td style="text-align:center">';
//                    cols += $("#mdlcode").val();
//                    cols += '</td ><td style="text-align:center">  <input type="button" class="ibtnUpDelRole btn btn-md btn-danger" value="Delete" /></td>';
//                    cols += '<td style="text-align:center" class="hidden" >00</td>';
//                    newRow.append(cols);
//                    $("table.order-list.updatehier").append(newRow);
//                    counter++;

//                },
//                failure: function (response) {
//                    alert(response.responseText);
//                },
//                error: function (response) {
//                    alert(response.responseText);
//                }
//            });
//        }
//    }
//}
//End Approval Hierarchy script//

//Start Role Operation script//
function RoleOperationMasterChange() {
    //alert("Changed");
    try {
        var index = $("#ddlRoleOperationMaster option:selected").index();
        var masteroper = $("#ddlRoleOperationMaster option:selected").val();
        var Masterid = masteroper;

        if (index !== 0) {
            var ismasterworkflow = 0;

            $.ajax({
                type: "POST",
                url: "/Home/GetRoleOperationRoles",
                data: '{Masterid:"' + masteroper + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    $("#tblRoleOperations tbody tr").remove();
                    $("#divroleoperaiondetails").addClass("hidden");
                    $("#divRoleoperationInfoMsg").text("");
                    var counter = 1;
                    var currentlevel = 0;
                    var Maxlevel = 0;
                    $.each(response.WorlkFlowData, function () {
                        var dblevel = this['LevelofVerification'];
                        if (dblevel > currentlevel) {
                            currentlevel = dblevel;
                            Maxlevel = dblevel;
                        }

                    });
                    //debugger;
                    var workflowlist = response.WorlkFlowData;
                    var functionalarea = response.FirmFunctionalAreaName;

                    //only for master view work flows for inserting close workflows at the time of submit
                    //if (Masterid === "104" || Masterid === "106" || Masterid === "108" || Masterid === "110" || Masterid === "176" || Masterid === "114" || Masterid === "116" || Masterid === "216" || Masterid === "240") {
                    if (functionalarea === "Master Configuration") {
                        $("#ismasterworkflow").val('1');
                        ismasterworkflow = 1;
                    }
                    else {
                        $("#ismasterworkflow").val('0');
                        ismasterworkflow = 0;
                    }

                    $.each(workflowlist, function () {

                        var level = this['LevelofVerification'];
                        var newRow = $("<tr>");
                        var cols = "";
                        cols += '<td style="text-align:center" class="hidden">' + counter + '</td>';
                        cols += '<td style="text-align:center"  class="hidden">' + level + '</td>';
                        cols += '<td style="text-align:center"  class="hidden">' + this['RoleID'] + '</td>';
                        cols += '<td style="text-align:center"><label>' + this['RoleCode'] + '</label></td>';
                        cols += '<td style="text-align:center">';

                        if (functionalarea === 'Reports') {
                            //create disable

                            cols += '<ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                '<input type="checkbox" name="" value="" class="create  eagle-check-input" disabled>' +
                                '<span class="eagle-check-indicator"></span> </label></li></ul></td>';

                            //read enable

                            cols += '<td  style="text-align:center"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                '<input type="checkbox" name="" value="" class="read eagle-check-input" checked>' +
                                '<span class="eagle-check-indicator"></span> </label></li></ul></td>';

                            //update disable

                            cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                '<input type="checkbox" name="" value="" class="update eagle-check-input" disabled>' +
                                '<span class="eagle-check-indicator" ></span > </label ></li ></ul ></td > ';

                            //delete disable

                            cols += '<td  style="text-align:center"> <li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                '<input type="checkbox" name="" value="" class="delete eagle-check-input"  disabled>' +
                                '<span class="eagle-check-indicator"></span> </label></li></ul></td>';
                        }
                        else {

                            //create only for first level checked disabled
                            if (level === "1") {
                                cols += '<ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox" >' +
                                    '<input type="checkbox" name="" value="" class="create  eagle-check-input" disabled="disabled"  checked>' +
                                    '<span class="eagle-check-indicator" style="background-color:#202447 !important;border-color:#202447"></span> </label></li></ul></td>';
                            }
                            else {

                                //create except first remaining levels unchecked  disabled
                                cols += '<ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                    '<input type="checkbox" name="" value="" class="create  eagle-check-input" disabled>' +
                                    '<span class="eagle-check-indicator"></span> </label></li></ul></td>';
                            }

                            //read checked unabled
                            if (level === "1") { //disbled

                                cols += '<td  style="text-align:center"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                    '<input type="checkbox" name="" value="" class="read eagle-check-input"   disabled="disabled"  checked>' +
                                    '<span class="eagle-check-indicator" style="background-color:#202447 !important;border-color:#202447"></span> </label></li></ul></td>';
                            }
                            else {
                                cols += '<td  style="text-align:center"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                    '<input type="checkbox" name="" value="" class="read eagle-check-input"   checked>' +
                                    '<span class="eagle-check-indicator" ></span> </label></li></ul></td>';
                            }
                            //update checked unabled
                            if (level === "1") { //disbled
                                cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                    '<input type="checkbox" name="" value="" class="update eagle-check-input"  disabled="disabled"  checked>' +
                                    '<span class="eagle-check-indicator" style="background-color:#202447 !important;border-color:#202447"></span > </label ></li ></ul ></td > ';
                            }
                            else {
                                cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                    '<input type="checkbox" name="" value="" class="update eagle-check-input"  checked>' +
                                    '<span class="eagle-check-indicator" ></span > </label ></li ></ul ></td > ';
                            }
                            //read checked unabled 
                            if (level === "1") {
                                //disbled
                                cols += '<td  style="text-align:center"> <li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                    '<input type="checkbox" name="" value="" class="delete eagle-check-input" disabled="disabled"  checked>' +
                                    '<span class="eagle-check-indicator" style="background-color:#202447 !important;border-color:#202447"></span> </label></li></ul></td>';
                            }
                            else {
                                cols += '<td  style="text-align:center"> <li class="eagle-checkbox"><label class="eagle-check custom-checkbox">' +
                                    '<input type="checkbox" name="" value="" class="delete eagle-check-input"  checked>' +
                                    '<span class="eagle-check-indicator" ></span> </label></li></ul></td>';
                            }
                        }
                        newRow.append(cols);
                        $("#tblRoleOperations").append(newRow);
                        counter++;
                    });
                    $("#divroleoperaiondetails").removeClass("hidden");
                    removeSpinner($('#roleoperation-container'), function () {
                        $('#roleoperation-container').html('Content loaded.');
                    });
                },
                failure: function (response) {
                    removeSpinner($('#roleoperation-container'), function () {
                        $('#roleoperation-container').html('Content loaded.');
                    });
                    alert(response.responseText);
                },
                error: function (response) {
                    removeSpinner($('#roleoperation-container'), function () {
                        $('#roleoperation-container').html('Content loaded.');
                    });
                    alert(response.responseText);
                }
            });
        }
    }
    catch (err) {  //We can also throw from try block and catch it here
        alert("error");
    }
}
function SubmitRoleOperaion() {
    var isValid = true;
    var errorMsg = "";
    var index = $("#ddlRoleOperationMaster option:selected").index();
    var masteroper = $("#ddlRoleOperationMaster option:selected").val();
    if (index == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Role Operation</p>";
        isValid = false;
    }
    else {
        var permissioncount = 0;
        // alert($("#tblRoleOperations tbody tr").length);
        $("#tblRoleOperations tbody tr").each(function () {
            var currentRow = $(this);
            var levelno = currentRow.find("td").eq(1).html();
            if (levelno !== 0) {
                var readcheckbox = currentRow.find("td").eq(5).find("input[type='checkbox']").is(":checked");
                var updatecheckbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
                var deletecheckbox = currentRow.find("td").eq(7).find("input[type='checkbox']").is(":checked");
                //var nacheckbox = currentRow.find("td").eq(8).find("input[type='checkbox']").is(":checked");
                if (readcheckbox == false && updatecheckbox == false && deletecheckbox == false) {
                    permissioncount = parseInt(permissioncount) + 1;
                }
            }
        });
        if (permissioncount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Role Permissions</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divRoleoperationInfoMsg").text("");
            $("#divRoleoperationInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divRoleoperationInfoMsg").addClass("alert-danger");
            $("#divRoleoperationInfoMsg").removeClass("hidden alert-success");
        }
        else {
            $("#divRoleoperationInfoMsg").text("");
            $("#divRoleoperationInfoMsg").addClass("hidden");
            SaveRoleOperation();
        }

    }

}
function SaveRoleOperation() {
    var masteroper = $("#ddlRoleOperationMaster option:selected").val();
    var createstatus = 0, updatestatus = 0, readstatus = 0, deletestatus = 0, nastatus = 0;
    var createroelids = '', updateroleids = '', readroleids = '', deleteroleids = '';
    $("#tblRoleOperations tbody tr").each(function () {
        var currentRow = $(this);
        var roleid = currentRow.find("td").eq(2).html();
        var createcheckbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
        var readcheckbox = currentRow.find("td").eq(5).find("input[type='checkbox']").is(":checked");
        var updatecheckbox = currentRow.find("td").eq(6).find("input[type='checkbox']").is(":checked");
        var deletecheckbox = currentRow.find("td").eq(7).find("input[type='checkbox']").is(":checked");
        //var nacheckbox = currentRow.find("td").eq(8).find("input[type='checkbox']").is(":checked");
        if (createcheckbox == true) {
            createstatus = '1';
            createroelids += roleid + ',';
        }
        if (readcheckbox == true) {
            readstatus = '1';
            readroleids += roleid + ',';
        }
        if (updatecheckbox == true) {
            updatestatus = '1';
            updateroleids += roleid + ',';
        }
        if (deletecheckbox == true) {
            deletestatus = '1';
            deleteroleids += roleid + ',';
        }
        //if (nacheckbox == true) {
        //    nastatus = '1';               
        //}

    });
    var saveroleopetaions = {
        MasterOperationId: masteroper,
        Createstatus: createstatus,
        Updatestatus: updatestatus,
        Readstatus: readstatus,
        Deletestatus: deletestatus,
        Createoperroleids: createroelids,
        Updateoperroleids: updateroleids,
        Readoperroleids: readroleids,
        Deleteoperroleids: deleteroleids,
        Createdby: 'Admin',
        WorkFlowType: $("#ismasterworkflow").val()
    };
    var addFailMsg = "Error Occurred While Adding Role Operations.";
    var addSuccessMsg = "Role Operations Saved Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/SaveRoleOperaions',
        data: { roleOperation: saveroleopetaions },
        success: function (Data) {
            if (Data.saveStatus === "Submitted") {
                $("#divRoleoperationInfoMsg").text(addSuccessMsg);
                $("#divRoleoperationInfoMsg").removeClass("hidden alert-danger");
                $("#divRoleoperationInfoMsg").addClass("alert-success");
            }
            else {
                $("#divRoleoperationInfoMsg").text(Data.saveStatus);
                $("#divRoleoperationInfoMsg").addClass("alert-danger");
                $("#divRoleoperationInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divRoleoperationInfoMsg").text(addFailMsg);
            $("#divRoleoperationInfoMsg").addClass("alert-danger");
            $("#divRoleoperationInfoMsg").removeClass("hidden alert-success");
        }
    });

}
function ResetRoleOperation() {
    $("#ddlRoleOperationMaster").prop('selectedIndex', 0);
    $("#divroleoperaiondetails").addClass("hidden");
    $("#divRoleoperationInfoMsg").text("");
    $("#divRoleoperationInfoMsg").addClass("hidden");
    $("#tblRoleOperations tbody tr").remove();
    $("#ismasterworkflow").val('0');
}
//End  Role Operation script//

//Role Design Script Statr//

function RoleDesignGridchange(Roleid, RoleCode, Status, ApplForCC, ApplCCTypes, txt) {
    //debugger;
    //alert('hi');
    var action = txt.value;
    //alert(Roleid + "," + RoleCode + "," + action + "," + Status);
    if (action === 'E') {
        //  $("#UpdateRoleModal").show();
        // $("#UpdateRoleModal").modal('show');
        //$("#txtupRolecode").val(RoleCode);
        //$("#txtuproleid").val(Roleid);
        //var ddlstatus = $("#ddlupRoleStatus");
        //$("#divUpRoleInfoMsg").text("");
        //$("#divUpRoleInfoMsg").addClass("hidden");
        //if (Status.trim() === 'Approved') {
        //    ddlstatus.prop('selectedIndex', 1);
        //}
        //else { ddlstatus.prop('selectedIndex', 2); }
        //debugger;
        //if (ApplForCC === 'Yes') {
        //    $("#chkUpApplforCC").prop("checked", true);            
        //    var appliccctypeslist = ApplCCTypes;

        //}
        //else {
        //    $("#chkUpApplforCC").prop("checked", false);
        //}
        // debugger;
        //var roledetails = {
        //    UserRoleID: Roleid,
        //    RoleName: RoleCode,
        //    Status: Status,
        //    ApplicableForCC: ApplForCC,
        //    CCTypeIDs: CCTypeIDs,
        //    CCTypeNames:CCTypeNames

        //};
        var roledetails = {
            UserRoleID: Roleid,
            RoleName: RoleCode,
            Status: Status,
            ApplicableForCC: ApplForCC,
            ApplicableCCTypes: ApplCCTypes

        };

        $.ajax({
            type: "POST",
            url: "/Home/ViewUpdateRole",
            //data: { Roledetails: roledetails },
            data: JSON.stringify({ Roledetails: roledetails }),
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {

                $('#UpdateRoleModal').html(data);
                $('#UpdateRoleModal').modal();

                //$("#txtNRolecode").val("");
                //$("#divNewRoleInfoMsg").text("");
                //$("#divNewRoleInfoMsg").addClass("hidden");
                //$("#chkApplforCC").prop("checked", false);
                //$("#divClsoeDcaInfoMsg").text("");
                //$("#divClsoeDcaInfoMsg").addClass("hidden");
            }
        });

    }
    else if (action === 'D') {

        $("#deleteRole").modal('show');
        $("#txtdeleteRoleid").val(Roleid);
        //alert(ccid + "-" +cccode+"-"+ccname,);
        $("#lblRoleName").html(RoleCode);
        $("#confirmmsgrole").removeClass('hidden');
        $("#confirmbtnrole").removeClass('hidden');
        $("#confirmms1role").removeClass('hidden');

        $("#divDeleteroleInfoMsg").text("");
        $("#divDeleteroleInfoMsg").addClass("hidden");
    }
}
function SubmitRoleStatus() {

    var isValid = true;
    var errorMsg = "";
    var Rolecode = $("#txtupRolecode").val();
    var index = $("#ddlupRoleStatus option:selected").index();
    if (Rolecode === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Role Code</p>";
        isValid = false;
    }

    if (index === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Role Status</p>";
        isValid = false;
    }
    var Applicablforcc = ' ';
    if ($('#chkUpApplforCC').is(":checked") === true) {
        ApplicableForCC = 'Yes';
    }
    else {
        ApplicableForCC = 'No';
    }

    if (ApplicableForCC === 'Yes') {
        var options = $('#UpRoleCCtypes > option:selected');
        if (options.length === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center Types</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpRoleInfoMsg").text("");
        $("#divUpRoleInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpRoleInfoMsg").addClass("alert-danger");
        $("#divUpRoleInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divUpRoleInfoMsg").text("");
        $("#divUpRoleInfoMsg").addClass("hidden");
        var currentroleid = $("#txtuproleid").val();

        //if (index === 1) {
        //        UpdateRoleDesign();
        //}
        //else {
        $.ajax({
            type: "POST",
            url: "/Home/GetVerificationPendingRoleDesign",
            data: '{Roleid:"' + currentroleid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    var Masteridarray = [];
                    var msg = "<div style='text-align:center;margin-left:15%'><table cellspacing='2px' style='border:1px solid gray'><tbody>";
                    var msg1 = "Verifications are in Pending";
                    var code = "";

                    $.each(response, function () {

                        Masteridarray.push(this['Code']);

                        //code = this['Code'];
                        //msg += " " + this['PendingNo'] + ",";
                    });
                    Masteridarray = $.unique(Masteridarray);
                    Masteridarray.forEach(function (element, index) {

                        var code = element;
                        msg += "<tr><td style='width:30%;border:1px solid gray'><b>";
                        msg += element + "</b></td><td style='width:30%;border:1px solid gray'><div  style='width:70%;overflow-wrap:break-word;margin-left:15%'>";
                        $.each(response, function () {
                            if (this['Code'] === code) {
                                msg += "<p>" + this['PendingNo'] + " </p> ";
                            }

                        });
                        msg += "</div></td></tr>";

                    });
                    msg += "</tbody></table></div>";
                    var finalerror = "<div style='align:center'><p>Please Complete the fallowing Verifications!</p><br/>";
                    $("#divUpRoleInfoMsg").text("");
                    $("#divUpRoleInfoMsg").append(finalerror + "<div>" + msg + "</div>");
                    $("#divUpRoleInfoMsg").addClass("alert-danger");
                    $("#divUpRoleInfoMsg").removeClass("hidden alert-success");

                }
                else {
                    UpdateRoleDesign();

                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
        //}

    }
}

function UpdateRoleDesign() {

    var roleid = $("#txtuproleid").val();
    var selectedrolestatus = $("#ddlupRoleStatus option:selected").val();
    var rolestatus;
    if (selectedrolestatus === "0") {
        rolestatus = 'Rejected';
    } else {
        rolestatus = 'Approved';
    }

    var Applicablforcc = ' ';
    if ($('#chkUpApplforCC').is(":checked") === true) {
        ApplicableForCC = 'Yes';
    }
    else {
        ApplicableForCC = 'No';
    }

    if (ApplicableForCC === 'Yes') {
        //var CCTypes = $("#NewRoleCCtypes option:selected").index();
        //if (CCTypes === 0) {
        var options = $('#UpRoleCCtypes > option:selected');
        if (options.length === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center Types</p>";
            isValid = false;
        }
    }

    var ApplicableTypes = "";
    if (ApplicableForCC === 'Yes') {
        ApplicableTypes = $('#UpRoleCCtypes option:selected').toArray().map(item => item.value).join();
    }


    var updateRole = {
        Action: 'Update',
        UserRoleID: roleid,
        RoleName: $("#txtupRolecode").val(),
        Status: rolestatus,
        ApplicableForCC: ApplicableForCC,
        ApplicableCCTypes: ApplicableTypes
    };




    var addFailMsg = "Error Occurred While Updating Role";
    var addSuccessMsg = "Role Details Updated Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/UpdateUserRole',
        data: { businessRole: updateRole },
        success: function (Data) {
            if (Data.saveStatus === "Updated") {
                $("#divUpRoleInfoMsg").text(addSuccessMsg);
                $("#divUpRoleInfoMsg").removeClass("hidden alert-danger");
                $("#divUpRoleInfoMsg").addClass("alert-success");
            }
            else {
                $("#divUpRoleInfoMsg").text(Data.saveStatus);
                $("#divUpRoleInfoMsg").addClass("alert-danger");
                $("#divUpRoleInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divUpRoleInfoMsg").text(addFailMsg);
            $("#divUpRoleInfoMsg").addClass("alert-danger");
            $("#divUpRoleInfoMsg").removeClass("hidden alert-success");
        }
    });


}

function DeleteRole() {
    var roleid = $("#txtdeleteRoleid").val();
    var updateRole = {
        Action: 'Delete',
        UserRoleID: roleid,
        RoleName: $("#lblRoleName").html()
    };
    var addFailMsg = "Error Occurred While Deleting Role";
    var addSuccessMsg = "Role Deleted Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Home/UpdateUserRole',
        data: { businessRole: updateRole },
        success: function (Data) {

            if (Data.saveStatus === 'Updated') {
                $("#divDeleteroleInfoMsg").text(addSuccessMsg);
                $("#divDeleteroleInfoMsg").removeClass("hidden alert-danger");
                $("#divDeleteroleInfoMsg").addClass("alert-success");
                $("#confirmmsgrole").addClass('hidden');
                $("#confirmbtnrole").addClass('hidden');
                $("#confirmms1role").addClass('hidden');

            }
            else {
                $("#divDeleteroleInfoMsg").text(addFailMsg);
                $("#divDeleteroleInfoMsg").addClass("alert-danger");
                $("#divDeleteroleInfoMsg").removeClass("hidden alert-success");
                $("#confirmmsgrole").addClass('hidden');
                $("#confirmbtnrole").addClass('hidden');
                $("#confirmms1role").addClass('hidden');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divDeleteroleInfoMsg").text(addFailMsg);
            $("#divDeleteroleInfoMsg").addClass("alert-danger");
            $("#divDeleteroleInfoMsg").removeClass("hidden alert-success");
            $("#confirmmsgrole").addClass('hidden');
            $("#confirmbtnrole").addClass('hidden');
            $("#confirmms1role").addClass('hidden');
        }
    });


}
//Role Design Script End//

function ViewITCloseDetails(id, code, name) {

    alert(id);
    $.ajax({
        type: "POST",
        url: "/Home/ViewCloseITCode",
        data: '{ItId:"' + id + '",ItCode:"' + code + '",Itname:"' + name + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {

            $('#closeITcodeConfirmationVerification').html(data);
            $('#closeITcodeConfirmationVerification').modal();
            $("#divClsoeITInfoMsg").text("");
            $("#divClsoeITInfoMsg").addClass("hidden");
        }
    });
}
//CC Close for Verification/Appproval
function ViewCCCloseDetails(ccid, cccode, cctype, ccname) {
    $.ajax({
        type: "POST",
        url: "/Home/ViewCloseCostCenter",
        data: '{CCId:"' + ccid + '",CCCode:"' + cccode + '",CCType:"' + cctype + '",CCName:"' + ccname + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {
            $('#closeConfirmationForVerifyAppr').html(data);
            $('#closeConfirmationForVerifyAppr').modal();
            $("#divClsoeCCInfoMsg").text("");
            $("#divClsoeCCInfoMsg").addClass("hidden");
        }
    });

}
function ViewBankCloseDetails(bankid, bankname, accno) {
    $.ajax({
        type: "POST",
        url: "/Home/ViewCloseBankAccount",
        data: '{BankId:"' + bankid + '",BankName:"' + bankname + '",Accno:"' + accno + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {
            $('#closeBankcodeConfirmationVerification').html(data);
            $('#closeBankcodeConfirmationVerification').modal();
            $("#divCloseBankDetilsInfoMsg").text("");
            $("#divCloseBankDetilsInfoMsg").addClass("hidden");
        }
    });
}
function ViewDCACloseDetails(Dcaid, Dcatypid, Dcacode, Dcaname, Dcatypename) {

    $.ajax({
        type: "POST",
        url: "/Home/ViewCloseDCA",
        data: '{DcaId:"' + Dcaid + '",DCAType:"' + Dcatypename + '",DCACode:"' + Dcacode + '",DCAName:"' + Dcaname + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {

            $('#closeDCAConfirmationForVerifyAppr').html(data);
            $('#closeDCAConfirmationForVerifyAppr').modal();
            $("#divClsoeDcaInfoMsg").text("");
            $("#divClsoeDcaInfoMsg").addClass("hidden");
        }
    });

}

function ViewSubDCACloseDetails(SubDcaid, Dcacodeid, Subdcaname, Subdcacode, Dcaname, ITCodeID, status, itdesc) {
    $.ajax({
        type: "POST",
        url: "/Home/ViewCloseSubDCA",
        data: '{Subdcaid:"' + SubDcaid + '",SubDcacode:"' + Subdcacode + '",Dcaid:"' + Dcacodeid + '",Sdcaname:"' + Subdcaname + '",Dcaname:"' + Dcaname + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {

            $('#closeSDCAConfirmationForVerifyAppr').html(data);
            $('#closeSDCAConfirmationForVerifyAppr').modal();
            //$("#divClsoeDcaInfoMsg").text("");
            //$("#divClsoeDcaInfoMsg").addClass("hidden");
        }
    });
}
//Role Permission
function ClearRolePermission() {
    $("#ddlRoleOperationMaster").prop('selectedIndex', 0);
    $("#divroleoperaiondetails").addClass("hidden");
    $("#divRoleoperationInfoMsg").text("");
    $("#divRoleoperationInfoMsg").addClass("hidden");
    $("#tblRoleOperations tbody tr").remove();
    $("#ismasterworkflow").val('0');
    RebindWorkflowsforPermissions();

}

function RebindWorkflowsforPermissions() {
    $.ajax({
        type: "POST",
        url: "/Home/GetWorkflowsforPermissions",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddlMasters = $("#ddlRoleOperationMaster");
            ddlMasters.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddlMasters.append($("<option></option>").val(this['MasterOperationID']).html(this['MasterOperationDescription']));
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });

}
//User Creation
function ddlNUserRoleChange() {

    var Roleid = $("#ddlNUserRole  option:selected").val();

    //for accountant  bind all for prj mgr bind only performing cc
    $("#txtSelectedrole").val(Roleid);
    //if (Roleid === "100") {
    //if (Roleid === "110" || Roleid === "100") {
    $("#ddlMultiCCCode option:selected").prop("selected", false);
    $("#ddlMultiCCCode option").remove();
    $('#ddlMultiCCCode').multiselect('rebuild');
    $.ajax({
        type: "POST",
        url: "/Home/GetUserCCByRoleid",
        data: '{Roleid:"' + Roleid + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ApplCC = response["ApplicableforCC"];
            var AppUserCCList = response["UserCC"];

            if (ApplCC === 'Yes') {

                //var ddlAccCCCode = $("#ddlNAccCCCode");
                //ddlAccCCCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $("#ddlMultiCCCode").multiselect();
                var AppUserCCCount = AppUserCCList.length;
                $("#txtCCExist").val(AppUserCCCount);
                $.each(AppUserCCList, function () {
                    $('#ddlMultiCCCode').append('<option value="' + this['CC_Code'] + '">' + this['CC_Name'] + '</option>').multiselect('rebuild');
                    //ddlAccCCCode.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
                //$.each(response, function () {
                // $('#ddlMultiCCCode').append('<option value="' + this['CC_Code'] + '">' + this['CC_Name'] + '</option>').multiselect('rebuild');
                //});
                $("#divCCCodes").removeClass('hidden');
            }
            else {
                $("#divCCCodes").addClass('hidden');
                $("#txtCCExist").val(0);
            }
        },
        failure: function (response) {


        },
        error: function (response) {

            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});
        }
    });
    //}
    //else {
    //    //$("#ddlMultiCCCode option:selected").prop("selected", false);
    //    //$("#ddlMultiCCCode option").remove();
    //    //$('#ddlMultiCCCode').multiselect('rebuild');


    //    $("#divCCCodes").addClass('hidden');
    //}
}
//User Update


function ddlUpUserRoleChange() {

    var roleindex = $("#ddlUpUserRole option:selected").index();
    if (roleindex !== 0) {
        var Roleid = $("#ddlUpUserRole  option:selected").val();
        //for all roles bind cccodes based on Applicable for CC in UserRole Table
        $("#ddlUpMultiCCCode option:selected").prop("selected", false);
        $("#ddlUpMultiCCCode option").remove();
        $('#ddlUpMultiCCCode').multiselect('rebuild');
        $.ajax({
            type: "POST",
            url: "/Home/GetUserCCByRoleid",
            data: '{Roleid:"' + Roleid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var ApplCC = response["ApplicableforCC"];
                var AppUserCCList = response["UserCC"];
                if (ApplCC === 'Yes') {
                    //var ddlAccCCCode = $("#ddlNAccCCCode");
                    //ddlAccCCCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $("#ddlUpMultiCCCode").multiselect();
                    var AppUserCCCount = AppUserCCList.length;
                    $("#txtUpCCExist").val(AppUserCCCount);
                    $.each(AppUserCCList, function () {
                        $('#ddlUpMultiCCCode').append('<option value="' + this['CC_Code'] + '">' + this['CC_Name'] + '</option>').multiselect('rebuild');
                        //ddlAccCCCode.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                    });
                    //$.each(response, function () {
                    // $('#ddlMultiCCCode').append('<option value="' + this['CC_Code'] + '">' + this['CC_Name'] + '</option>').multiselect('rebuild');
                    //});
                    $("#divPMCCCodes").removeClass('hidden');
                }
                else {
                    $("#divPMCCCodes").addClass('hidden');
                    $("#txtUpCCExist").val(0);
                }
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
        $("#divPMCCCodes").addClass('hidden');
        $("#txtUpCCExist").val(0);
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
    if (pwd !== Confpwd) {
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




function UpdateWorkFlowDetails(Masterid) {
    //alert();
    $.ajax({
        type: "POST",
        url: "/Home/GetVerificationPendingForMasterid",
        data: '{Masterid:"' + Masterid + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            ////debugger;
            var count1 = Object.keys(response).length;

            if (count1 > 0) {
                var msg = "";
                var msg1 = "Verifications are in Pending";
                var code = "";
                $.each(response, function () {
                    code = this['Code'];
                    msg += " " + this['PendingNo'] + ",";
                });
                var newmsg = msg.slice(0, -1);
                newmsg += "<br/>";
                $("#divUpHierarchyInfoMsg").text("");
                $("#divUpHierarchyInfoMsg").append("<div>" + code + newmsg + msg1 + "</div>");
                $("#divUpHierarchyInfoMsg").addClass("alert-danger");
                $("#divUpHierarchyInfoMsg").removeClass("hidden alert-success");
                $("#divUpHierarchyInfoMsg").removeClass("hidden");
            }
            else {
                // alert('inserting');

                var selectedrolelist = [];
                $("#tblUpHierarchy tbody tr").each(function () {
                    debugger;
                    var currentRow = $(this);
                    var levelid = currentRow.find("td").eq(7).html();
                    var str = levelid.trim();
                    var role = 0;
                    if (str === "00") {

                        role = currentRow.find("td").eq(5).find("select option:selected").text();
                    }
                    else {
                        role = $.trim(currentRow.find("td").eq(5).html());
                    }

                    selectedrolelist.push(role);
                    //alert(role);

                });
                var duplicatelist = selectedrolelist.filter(i => selectedrolelist.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    $("#divUpHierarchyInfoMsg").text("");
                    $("#divUpHierarchyInfoMsg").append("<div><p>Duplicate roles Selected</p></div>");
                    $("#divUpHierarchyInfoMsg").addClass("alert-danger");
                    $("#divUpHierarchyInfoMsg").removeClass("hidden alert-success");

                }
                else {
                    $("#divUpHierarchyInfoMsg").text("");
                    $("#divUpHierarchyInfoMsg").addClass("hidden");
                    SaveUpdatedWorkFlow();
                }

                //SaveUpdatedWorkFlow();

            }
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
}

function DeleteWorkFlowDetails(Masterid, mastecode) {
    $.ajax({
        type: "POST",
        url: "/Home/GetVerificationPendingForMasterid",
        data: '{Masterid:"' + Masterid + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            ////debugger;
            var count1 = Object.keys(response).length;

            if (count1 > 0) {
                var msg = "";
                var msg1 = "Verifications are in Pending";
                var code = "";
                $.each(response, function () {
                    code = this['Code'];
                    msg += " " + this['PendingNo'] + ",";
                });
                var newmsg = msg.slice(0, -1);
                newmsg += "<br/>";
                //$("#divUpHierarchyInfoMsg").text("");
                //$("#divUpHierarchyInfoMsg").append("<div>" + code + newmsg + msg1 + "</div>");
                //$("#divUpHierarchyInfoMsg").addClass("alert-danger");
                //$("#divUpHierarchyInfoMsg").removeClass("hidden alert-success");
                //$("#divUpHierarchyInfoMsg").removeClass("hidden");
                $("#deleteVerifypendingHierarchy").modal('show');
                $("#txtdeleteMasterid").val(Masterid);
                $("#lblMastercode").html(mastecode);
                $("#confirmmsgpending").removeClass('hidden');
                $("#confirmbtn").addClass('hidden');
                $("#confirmms1").addClass('hidden');
                $("#divDeleteHierarchyInfoMsg").text("");
                $("#divDeleteHierarchyInfoMsg").addClass("hidden");
                $("#confirmmsgpending").text("");
                $("#divDeletePeningsHierarchyInfoMsg").append("<div>" + code + newmsg + msg1 + "</div>");
                $("#divDeletePeningsHierarchyInfoMsg").addClass("alert-danger");
                $("#divDeletePeningsHierarchyInfoMsg").removeClass("hidden alert-success");
                $("#divDeletePeningsHierarchyInfoMsg").removeClass("hidden");
            }
            else {
                $("#deleteHierarchy").modal('show');
                $("#txtdeleteMasterid").val(Masterid);
                $("#lblMastercode").html(mastecode);
                $("#confirmmsg").removeClass('hidden');
                $("#confirmbtn").removeClass('hidden');
                $("#confirmms1").removeClass('hidden');
                $("#divDeleteHierarchyInfoMsg").text("");
                $("#divDeleteHierarchyInfoMsg").addClass("hidden");
            }
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
}
//update Subclient
function UpdateSClientBindNewRowForGST() {
    var list = [];
    isValid = true;
    var errorMsg = "";
    var ddlcount = 0;
    var amountcount = 0;
    var checkcount = 0;
    var i = 0;
    $("#UpSClientGstTable tbody tr").each(function () {
        var currentRow = $(this);
        var col2_value = currentRow.find("td").eq(1).find("select option:selected").val();
        var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
        var col3_value = currentRow.find("td").eq(1).find("select option:selected").val();
        var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
        var stateid = currentRow.find("td").eq(1).find("select option:selected").val();
        var check = currentRow.find('input[type="checkbox"]').is(':checked');
        list.push(stateid);
        //alert(stateid);
        if (col3_value == "" || col3_value == "0") {
            checkcount = checkcount + 1;
        }
        if (col1_value == "" || col1_value == "0") {
            amountcount = amountcount + 1;
        }
        if (check == false) {
            checkcount = checkcount + 1;
        }
    });

    if (amountcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter GSTNo</p>";
        isValid = false;
    }
    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Check</p>";
        isValid = false;
    }

    if (!isValid) {

        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSubClientInfoMsg").text("");
        $("#divUpSubClientInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpSubClientInfoMsg").addClass("alert-danger");
        $("#divUpSubClientInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
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
            list = $.unique(list);

            $("#divUpSubClientInfoMsg").text("");
            $("#divUpSubClientInfoMsg").addClass("hidden");

            $.ajax({
                type: "POST",
                url: "/Home/GetAllStates",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var count = $("#UpSClientGstGrid tbody tr").length;
                    var rowno = parseInt(count) + parseInt(1);
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
                    cols += '<td  class="statetd"><select class="form-control dropdown-toggle" ><option value="">-Please Select-</option>';
                    $.each(response, function () {
                        var status = checkValueInArray(this['State_ID'], list);
                        if (status == false) {
                            cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                        }
                    });

                    cols += '</select>';
                    cols += '</td><td style="text-align:center"  class="gst"><input class="form-control" data-val="true"  name="txtupGSTNo" type="text" /></td >';
                    cols += '<td style="text-align:center"  class="gstcheckbox"><ul class="list-inline">';
                    cols += '<li class="eagle-checkbox">';
                    cols += '<label class="eagle-check custom-checkbox">';
                    cols += '<input type="checkbox" class="eagle-check-input">';
                    cols += '<span class="eagle-check-indicator"></span>  </label>';
                    cols += '</li>';
                    cols += '</ul ></td>';
                    cols += '<td style="text-align:center"><input type="button" class="ibtnUpSClientDel btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.UpSClientGstGrid").append(newRow);
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }

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

//function ViewAddNewRoleModel() {
//    $("#AddNewRoleModal").modal('show');
//    $("#txtNRolecode").val("");
//    $("#divNewRoleInfoMsg").text("");
//    $("#divNewRoleInfoMsg").addClass("hidden");
//    $("#chkApplforCC").prop("checked", false);
//}

function SubmitNewRole() {

    isValid = true;
    var errorMsg = "";
    var rolename = $("#txtNRolecode").val();
    if (rolename === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Role</p>";
        isValid = false;
    }
    var ApplicableForCC = '';
    if ($('#chkApplforCC').is(":checked") === true) {
        ApplicableForCC = 'Yes';
    }
    else {
        ApplicableForCC = 'No';
    }

    if (ApplicableForCC === 'Yes') {
        //var CCTypes = $("#NewRoleCCtypes option:selected").index();
        //if (CCTypes === 0) {
        var options = $('#NewRoleCCtypes > option:selected');
        if (options.length === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center Types</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewRoleInfoMsg").text("");
        $("#divNewRoleInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divNewRoleInfoMsg").addClass("alert-danger");
        $("#divNewRoleInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewRoleInfoMsg").text("");
        $("#divNewRoleInfoMsg").addClass("hidden");

        var ApplicableTypes = "";
        if (ApplicableForCC === 'Yes') {
            ApplicableTypes = $('#NewRoleCCtypes option:selected').toArray().map(item => item.value).join();
        }

        var newRole = {
            Action: 'Add',
            RoleName: $("#txtNRolecode").val(),
            ApplicableForCC: ApplicableForCC,
            ApplicableCCTypes: ApplicableTypes
        };

        var addFailMsg = "Error Occurred While Adding Role";
        var addSuccessMsg = "Role Details Added Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/SaveNewUserRole',
            data: { businessRole: newRole },
            success: function (Data) {
                if (Data.saveStatus === "Submited") {
                    $("#divNewRoleInfoMsg").text(addSuccessMsg);
                    $("#divNewRoleInfoMsg").removeClass("hidden alert-danger");
                    $("#divNewRoleInfoMsg").addClass("alert-success");
                }
                else {
                    $("#divNewRoleInfoMsg").text(Data.saveStatus);
                    $("#divNewRoleInfoMsg").addClass("alert-danger");
                    $("#divNewRoleInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divNewRoleInfoMsg").text(addFailMsg);
                $("#divNewRoleInfoMsg").addClass("alert-danger");
                $("#divNewRoleInfoMsg").removeClass("hidden alert-success");
            }
        });


    }
}

function NewITNatureofGrpChange() {
    var natureidIndex = $("#ddlNewITNature option:selected").index();
    var natureid = $("#ddlNewITNature option:selected").val();
    var mastergrupddl = $("#ddlNewITMastergroup");
    var subgrupddl = $("#ddlNewITSubgroup");
    if (natureidIndex === 0) {
        mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetMasterGroupbsbyNature",
            data: '{NatureGroupId:"' + natureid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        mastergrupddl.append($("<option></option>").val(this['GroupId']).html(this['GroupName']));
                    });
                    $("#divAddItCodeInfoMsg").text("");
                    $("#divAddItCodeInfoMsg").addClass("hidden");
                    $("#txtsubgrpexist").val('0');
                }
                else {
                    $("#divAddItCodeInfoMsg").text("");
                    $("#divAddItCodeInfoMsg").append("<div>Groups Does Not Exist</div>");
                    $("#divAddItCodeInfoMsg").addClass("alert-danger");
                    $("#divAddItCodeInfoMsg").removeClass("hidden alert-success");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $("#txtsubgrpexist").val('0');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });

    }

}
function NewITMasterGrpChange() {
    var mastergrpIndex = $("#ddlNewITMastergroup option:selected").index();
    var mastergrp = $("#ddlNewITMastergroup option:selected").val();
    var subgrupddl = $("#ddlNewITSubgroup");
    if (mastergrpIndex === 0) {
        subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetAllSubGroupsbyGroupid",
            data: '{GropupId:"' + mastergrp + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    $("#divITSubGroup").removeClass("hidden");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
                    });
                    $("#txtsubgrpexist").val('1');
                }
                else {
                    $("#divITSubGroup").addClass("hidden");
                    $("#txtsubgrpexist").val('0');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }



}

function NewBANKNatureofGrpChange() {
    var natureidIndex = $("#ddlBankNaturegroup option:selected").index();
    var natureid = $("#ddlBankNaturegroup option:selected").val();
    var mastergrupddl = $("#ddlNewBANKMastergroup");

    if (natureidIndex == 0) {
        mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpbnkexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetMasterGroupbsbyNature",
            data: '{NatureGroupId:"' + natureid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        mastergrupddl.append($("<option></option>").val(this['GroupId']).html(this['GroupName']));
                    });
                    $("#divAddBankDetilsInfoMsg").text("");
                    $("#divAddBankDetilsInfoMsg").addClass("hidden");
                    $("#txtsubgrpbnkexist").val('0');
                }
                else {
                    $("#divAddBankDetilsInfoMsg").text("");
                    $("#divAddBankDetilsInfoMsg").append("<div>Groups Does Not Exist</div>");
                    $("#divAddBankDetilsInfoMsg").addClass("alert-danger");
                    $("#divAddBankDetilsInfoMsg").removeClass("hidden alert-success");
                }
            },
            failure: function (response) {

            },
            error: function (response) {
            }
        });

    }

}
function NewBANKMasterGrpChange() {
    var mastergrpIndex = $("#ddlNewBANKMastergroup option:selected").index();
    var mastergrp = $("#ddlNewBANKMastergroup option:selected").val();
    var subgrupddl = $("#ddlNewBANKSubgroup");
    if (mastergrpIndex === 0) {
        subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpbnkexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetAllSubGroupsbyGroupid",
            data: '{GropupId:"' + mastergrp + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    $("#divBankSubGroup").removeClass("hidden");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
                    });
                    $("#txtsubgrpbnkexist").val('1');
                }
                else {
                    $("#divBankSubGroup").addClass("hidden");
                    $("#txtsubgrpbnkexist").val('0');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }



}

function NewclientNatureofGrpChange() {
    var natureidIndex = $("#ddlClientNatureGroup option:selected").index();
    var natureid = $("#ddlClientNatureGroup option:selected").val();
    var mastergrupddl = $("#ddlNewclientMastergroup");

    if (natureidIndex == 0) {
        mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpclientexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetMasterGroupbsbyNature",
            data: '{NatureGroupId:"' + natureid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        mastergrupddl.append($("<option></option>").val(this['GroupId']).html(this['GroupName']));
                    });
                    $("#divAddClientInfoMsg").text("");
                    $("#divAddClientInfoMsg").addClass("hidden");
                    $("#txtsubgrpclientexist").val('0');
                }
                else {
                    $("#divAddClientInfoMsg").text("");
                    $("#divAddClientInfoMsg").append("<div>Groups Does Not Exist</div>");
                    $("#divAddClientInfoMsg").addClass("alert-danger");
                    $("#divAddClientInfoMsg").removeClass("hidden alert-success");
                }
            },
            failure: function (response) {
                ;
            },
            error: function (response) {
            }
        });

    }

}
function NewCLIENTMasterGrpChange() {
    var mastergrpIndex = $("#ddlNewclientMastergroup option:selected").index();
    var mastergrp = $("#ddlNewclientMastergroup option:selected").val();
    var subgrupddl = $("#ddlNewclientSubgroup");
    if (mastergrpIndex === 0) {
        subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpclientexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetAllSubGroupsbyGroupid",
            data: '{GropupId:"' + mastergrp + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    $("#divCLIENTSubGroup").removeClass("hidden");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
                    });
                    $("#txtsubgrpclientexist").val('1');
                }
                else {
                    $("#divCLIENTSubGroup").addClass("hidden");
                    $("#txtsubgrpclientexist").val('0');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }



}
function JVRow_BindNewRowtoGrid() {

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
    //var selectedldrlist = [];
    //var Action = $("#txtlAction").val();
    //$("#JVTable tbody tr").each(function () {
    //    var currentRow = $(this);
    //    var led = currentRow.find("td").eq(1).find("select option:selected").index();
    //    if (led !== 0) {
    //        selectedldrlist.push(currentRow.find("td").eq(1).find("select option:selected").val());
    //    }
    //});

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
        $("#divJournalCreationInfoMsg").text("");
        $("#divJournalCreationInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divJournalCreationInfoMsg").addClass("alert-danger");
        $("#divJournalCreationInfoMsg").removeClass("hidden alert-success");
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
            $("#divJournalCreationInfoMsg").text("");
            $("#divJournalCreationInfoMsg").append(finalerror2 + "</div>");
            $("#divJournalCreationInfoMsg").addClass("alert-danger");
            $("#divJournalCreationInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divInvoiceCreationInfoMsg").text("");
            $("#divInvoiceCreationInfoMsg").addClass("hidden");
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
                        cols += '<td style="text-align:center"  class="hidden">' + rowno + '</td>';
                        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle ctaxtype" id="ddlLedger">';
                        cols += '<option selected="selected" value="Select">-Select-</option>';
                        $.each(response, function (index, value) {
                            var status = checkValueInArray(this['LedgerId'], selectedledgerlist1);
                            if (status === false) {
                                cols += '<option value=' + this['LedgerId'] + '>' + this['LedgerName'] + '</option>';
                            }

                        });
                        cols += '</select></td>';
                        cols += ' <td style="text-align:center"><select class="form-control dropdown-toggle ctrantype" id="ddlTranType" onchange="Ledgercount();">';
                        cols += '<option selected="selected" value="Select">-Select-</option><option value="Credit">Credit</option><option value="Debit">Debit</option></select></td>';
                        cols += '<td style="text-align:center"><input type="text" class="form-control ctaxamount" value="" id="txttranAmount"   onkeypress="return ValidateAmount(this,event);" onkeyup="Ledgercount()" /></td>';
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
function Ledgercount() {
    //debugger;
    var creditamount = $("#txtsumcreditamount").val();
    var debitamount = $("#txtsumdebitamount").val();
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
            $("#txtsumcreditamount").val(credittotal);
        }
        else {
            $("#txtsumcreditamount").val("");
        }
        if (debittotal != 0) {
            $("#txtsumdebitamount").val(debittotal);
        }
        else {
            $("#txtsumdebitamount").val("");
        }
    }
    //else {
    //    $("#txtsumcreditamount").val("");
    //    $("#txtsumdebitamount").val("");
    //}
}
function SubmitJournal() {
    var date = $("#txtjvcreationDate").val();
    var Remarks = $("#txtJVDescription").val();
    var Creditsum = $("#txtsumcreditamount").val();
    var Debitsum = $("#txtsumdebitamount").val();
    isValid = true;
    var errorMsg = "";

    if (date == "" || date == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select JV Creation Date</p>";
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
        $("#divJournalCreationInfoMsg").text("");
        $("#divJournalCreationInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divJournalCreationInfoMsg").addClass("alert-danger");
        $("#divJournalCreationInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divJournalCreationInfoMsg").text("");
        $("#divJournalCreationInfoMsg").addClass("hidden");
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
            $("#divJournalCreationInfoMsg").text("");
            $("#divJournalCreationInfoMsg").append(finalerror1 + errorMsg + "</div>");
            $("#divJournalCreationInfoMsg").addClass("alert-danger");
            $("#divJournalCreationInfoMsg").removeClass("hidden alert-success");
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
                $("#divJournalCreationInfoMsg").text("");
                $("#divJournalCreationInfoMsg").append(finalerror2 + "</div>");
                $("#divJournalCreationInfoMsg").addClass("alert-danger");
                $("#divJournalCreationInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divJournalCreationInfoMsg").text("");
                $("#divJournalCreationInfoMsg").addClass("hidden");
                SaveJournal();
            }
        }
    }

}
function SaveJournal() {
    var createdby = $("#txtJournalCreatedby").val();
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
        JVCreationDate: $("#txtjvcreationDate").val(),
        JVRemarks: $("#txtJVDescription").val(),
        Amount: $("#txtsumcreditamount").val(),
        CreatedBy: createdby,
        Ledgers: ledgers,
        Trantypes: trantypes,
        Ledgeramounts: ledAmounts
    };
    addFailMsg = "Error Occurred While Creating Journal.";
    addSuccessMsg = "Journal Voucher Created Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Accounts/Savejournal',
        data: { Journal: Journaldetails },
        success: function (Data) {
            if (Data.saveStatus == "Successfull") {
                $("#btnSubmitjvCreation").prop("disabled", true);
                $("#divJournalCreationInfoMsg").text(addSuccessMsg);
                $("#divJournalCreationInfoMsg").removeClass("hidden alert-danger");
                $("#divJournalCreationInfoMsg").addClass("alert-success");
            }
            else {
                $("#btnSubmitjvCreation").prop("disabled", true);
                $("#divJournalCreationInfoMsg").text(Data.saveStatus);
                $("#divJournalCreationInfoMsg").addClass("alert-danger");
                $("#divJournalCreationInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnSubmitjvCreation").prop("disabled", true);
            $("#divInvoiceCreationInfoMsg").text(addFailMsg);
            $("#divInvoiceCreationInfoMsg").addClass("alert-danger");
            $("#divInvoiceCreationInfoMsg").removeClass("hidden alert-success");

        }
    });
}
function ResetJournal() {
    location.reload();
}
function LoadAddNewagencyModel() {
    $("#txtAgencyName").val("");
    $("#txtTLAaddress").val("");
    $("#lblTLExist").text("");
    $("#divAddTLAInfoMsg").text("");
    $("#ddlNewTLANature").prop('selectedIndex', 0);
    $("#divAddTLAInfoMsg").addClass("hidden");
    $("#btnaddnewTLA").prop('disabled', false);

    $("#AddNewTLAModal").modal('show');
    $.ajax({
        type: "POST",
        url: "/Home/GetNatureOfGroups",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddl = $("#ddlNewTLANature");
            ddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddl.append($("<option></option>").val(this['NatureGroupId']).html(this['NatureGroupName']));
            });
            $("#txtAgencyName").val();
            $("#txtTLAaddress").val();
            $("#lblTLExist").text("");
            $("#divAddTLAInfoMsg").text("");
            $("#divAddTLAInfoMsg").addClass("hidden");
            $("#btnaddnewTLA").prop('disabled', false);
            $("#divTLASubGroup").addClass("hidden");
            $("#txtsubgrpexist").val('0');
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });


}
function NewTLANatureofGrpChange() {
    var natureidIndex = $("#ddlNewTLANature option:selected").index();
    var natureid = $("#ddlNewTLANature option:selected").val();
    var mastergrupddl = $("#ddlNewTLAMastergroup");

    if (natureidIndex == 0) {
        mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetMasterGroupbsbyNature",
            data: '{NatureGroupId:"' + natureid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        mastergrupddl.append($("<option></option>").val(this['GroupId']).html(this['GroupName']));
                    });
                    $("#divAddTLAInfoMsg").text("");
                    $("#divAddTLAInfoMsg").addClass("hidden");
                    $("#txtsubgrpexist").val('0');
                }
                else {
                    $("#divAddTLAInfoMsg").text("");
                    $("#divAddTLAInfoMsg").append("<div>Groups Does Not Exist</div>");
                    $("#divAddTLAInfoMsg").addClass("alert-danger");
                    $("#divAddTLAInfoMsg").removeClass("hidden alert-success");
                }
            },
            failure: function (response) {
                ;
            },
            error: function (response) {
            }
        });

    }

}
function NewTLAMasterGrpChange() {
    var mastergrpIndex = $("#ddlNewTLAMastergroup option:selected").index();
    var mastergrp = $("#ddlNewTLAMastergroup option:selected").val();
    var subgrupddl = $("#ddlNewTLASubgroup");
    if (mastergrpIndex === 0) {
        subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpexist").val('0');
    } else {
        $.ajax({
            type: "POST",
            url: "/Home/GetAllSubGroupsbyGroupid",
            data: '{GropupId:"' + mastergrp + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    $("#divTLASubGroup").removeClass("hidden");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
                    });
                    $("#txtsubgrpexist").val('1');
                }
                else {
                    $("#divTLASubGroup").addClass("hidden");
                    $("#txtsubgrpexist").val('0');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function AddNewAgencyCode() {
    isValid = true;
    var errorMsg = "";
    var temloanname = $("#txtAgencyName").val();
    var temloanaddress = $("#txtTLAaddress").val();
    var itnature = $("#ddlNewTLANature option:selected").index();
    var mastergrpindex = $("#ddlNewTLAMastergroup option:selected").index();
    var subgrpexist = $("#txtsubgrpexist").val();
    if (temloanname == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Agency Name</p>";
        isValid = false;
    }
    if (temloanaddress == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Address</p>";
        isValid = false;
    }
    if (itnature == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Nature of Group</p>";
        isValid = false;
    }
    if (mastergrpindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Group</p>";
        isValid = false;
    }
    if (subgrpexist === '1') {
        var Subgroupindex = $("#ddlNewTLASubgroup option:selected").index();
        if (Subgroupindex == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Group</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAddTLAInfoMsg").text("");
        $("#divAddTLAInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divAddTLAInfoMsg").addClass("alert-danger");
        $("#divAddTLAInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divAddTLAInfoMsg").text("");
        $("#divAddTLAInfoMsg").addClass("hidden");

        var subgrp = '';
        if (subgrpexist === '1') { subgrp = $("#ddlNewTLASubgroup option:selected").val(); }
        else { subgrp = 0; }
        var saveAgency = {
            AgencyName: $("#txtAgencyName").val(),
            CreatedBy: $("#txttlaCreatedby").val(),
            AgencyAddress: $("#txtTLAaddress").val(),
            Action: 'Add',
            GroupId: $("#ddlNewTLAMastergroup option:selected").val(),
            SubGroupId: subgrp,
            NatureGroupId: $("#ddlNewTLANature option:selected").val(),
        };
        addFailMsg = "Error Occurred While Adding Agency Details.";
        addSuccessMsg = "Agency Details Added Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            //url: '/Home/SaveITCode',
            url: '/Home/SaveAgency',
            data: { agency: saveAgency },
            success: function (Data) {
                // alert("Hi");
                if (Data.saveStatus == "Submitted") {
                    $("#btnaddnewTLA").prop('disabled', true);
                    $("#divAddTLAInfoMsg").text(addSuccessMsg);
                    $("#divAddTLAInfoMsg").removeClass("hidden alert-danger");
                    $("#divAddTLAInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnaddnewTLA").prop('disabled', true);
                    $("#divAddTLAInfoMsg").text(Data.saveStatus);
                    $("#divAddTLAInfoMsg").addClass("alert-danger");
                    $("#divAddTLAInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnaddnewTLA").prop('disabled', true);
                $("#divAddTLAInfoMsg").text(addFailMsg);
                $("#divAddTLAInfoMsg").addClass("alert-danger");
                $("#divAddTLAInfoMsg").removeClass("hidden alert-success");
            }
        });

    }
}
function ResetAddNewagencyCode() {
    $.ajax({
        type: "POST",
        url: "/Home/GetNatureOfGroups",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddl = $("#ddlNewTLANature");
            ddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddl.append($("<option></option>").val(this['NatureGroupId']).html(this['NatureGroupName']));
            });
            $("#txtAgencyName").val();
            $("#txtTLAaddress").val();
            $("#divAddTLAInfoMsg").text("");
            $("#divAddTLAInfoMsg").addClass("hidden");
            $("#btnaddnewTLA").prop('disabled', false);
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });
}
function TLAgencygridActionChange(id, agencycode, agencyname, agencyaddress, Naturegroupname, grpid, grpname, subgrpid, sungrpname, txt) {
    var rowid = id;
    var agencycode = agencycode;
    var agencyname = agencyname;
    var agencyaddress = agencyaddress;
    var naturename = Naturegroupname;
    var groupname = grpname;
    var subgroupname = sungrpname;
    var Action = txt.value;

    if (Action == "Edit") {
        $("#EditTLAgencyModal").modal('show');
        $("#txtUPDAgencycode").val(agencycode);
        $("#txtUPDAgencyName").val(agencyname);
        $("#txtUPDTLAaddress").val(agencyaddress);
        $("#txtUpTLNature").val(naturename);
        $("#txtTLUpIDId").val(rowid);
        $("#divUpdateTLInfoMsg").text("");
        $("#divUpdateTLInfoMsg").addClass("hidden");
        $("#btnUpdateTL").prop('disabled', false);
        $("#txtUpTLgrpname").val(groupname);
        $("#txtTLupGroupid").val(grpid);
        $("#txtTLupSubGroupid").val(subgrpid);

        if (subgrpid !== 0) {
            $("#txtUpTLsubgrpname").val(subgroupname);
            $("#divupSubgrp").removeClass('hidden');
        }
        else {
            $("#divupSubgrp").addClass('hidden');
        }
    }
    else if (Action === "Close") {
        $.ajax({
            type: "POST",
            url: "/Home/ViewCloseAgency",
            data: '{AgencyId:"' + id + '",AgencyCode:"' + agencycode + '",AgencyName:"' + agencyname + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {

                $('#closeAgencycodeConfirmation').html(data);
                $('#closeAgencycodeConfirmation').modal();
                $("#divClsoeAgencyInfoMsg").text("");
                $("#divClsoeAgencyInfoMsg").addClass("hidden");
            }
        });
    }


}
function UpdateTLAgency() {
    debugger;
    isValid = true;
    var errorMsg = "";
    var agencycode = $("#txtUPDAgencycode").val();
    var Agencyname = $("#txtUPDAgencyName").val();
    var Agencyaddress = $("#txtUPDTLAaddress").val();
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
            AgencyId: agencycode,
            RoleId: $("#roleid").val(),
            Createdby: $("#txttlaCreatedby").val(),
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
                if (Data.saveStatus === "Submitted") {
                    $("#btnUpdateTL").prop('disabled', true);
                    $("#divUpdateTLInfoMsg").text(addSuccessMsg);
                    $("#divUpdateTLInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpdateTLInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpdateTL").prop('disabled', true);
                    $("#divUpdateTLInfoMsg").text(Data.saveStatus);
                    $("#divUpdateTLInfoMsg").addClass("alert-danger");
                    $("#divUpdateTLInfoMsg").removeClass("hidden alert-success");
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnUpdateTL").prop('disabled', true);
                $("#divUpdateTLInfoMsg").text(addFailMsg);
                $("#divUpdateTLInfoMsg").addClass("alert-danger");
                $("#divUpdateTLInfoMsg").removeClass("hidden alert-success");
            }
        });

    }

}

function NotifyAgencyPendings(Agncycode, Accessname) {

    var errorMsg = "";
    isValid = true;
    var Remarks = $("#txtAgencyCloseNote").val();
    var closingdate = $("#txtAgencyClosingAson").val();
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'ApproveLevel' || Accessname === 'Creation') {

        if (closingdate === "" || closingdate === null) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Closing As On Date</p>";
            isValid = false;
        }
    }
    if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
        var ddlaction = $("#ddlCloseAgencyStatus option:selected").index();
        if (ddlaction === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
            isValid = false;
        }

    }
    if (Remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divClsoeAgencyInfoMsg").text("");
        $("#divClsoeAgencyInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divClsoeAgencyInfoMsg").addClass("alert-danger");
        $("#divClsoeAgencyInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divClsoeAgencyInfoMsg").text("");
        var sendNotificationDetails = {};
        $("#divClsoeAgencyInfoMsg").addClass("hidden");
        if (Accessname === 'FirstAndLastLevel' || Accessname === 'VerificationLevel' || Accessname === 'ApproveLevel') {
            sendNotificationDetails = {
                Action: Accessname,
                AgencyId: Agncycode,
                CloseRemarks: $("#txtAgencyCloseNote").val(),
                ClosingDate: $("#txtAgencyClosingAson").val(),
                CloseStatus: $("#ddlCloseAgencyStatus option:selected").val()
            };
        }
        else {
            sendNotificationDetails = {
                Action: Accessname,
                AgencyId: Agncycode,
                CloseRemarks: $("#txtAgencyCloseNote").val(),
                ClosingDate: $("#txtAgencyClosingAson").val(),
                CloseStatus: ''
            };

        }


        addFailMsg = "Error Occurred While Sending Notification.";
        addSuccessMsg = "Notification Sent Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Home/CloseAgencyNotifications',
            data: { saveNotification: sendNotificationDetails },
            success: function (Data) {
                if (Data.saveStatus === 'Notified') {
                    $("#btnNotify").prop('disabled', true);
                    if (Accessname === 'Creation' || Accessname === 'FirstAndLastLevel') {
                        $("#divClsoeAgencyInfoMsg").text(addSuccessMsg);
                    }
                    else if (Accessname === 'VerificationLevel') {
                        $("#divClsoeAgencyInfoMsg").text('Closing Agency Code Verified Successfully');
                    }
                    else {
                        var type = $("#ddlCloseAgencyStatus option:selected").val();
                        if (type === 'Reject')
                            $("#divClsoeAgencyInfoMsg").text('Closing Agency Code  Rejected Successfully');
                        else
                            $("#divClsoeAgencyInfoMsg").text('Closing  Agency Code  Approved Successfully');
                    }
                    $("#divClsoeAgencyInfoMsg").removeClass("hidden alert-danger");
                    $("#divClsoeAgencyInfoMsg").addClass("alert-success");

                }
                else {
                    $("#btnNotify").prop('disabled', true);
                    $("#divClsoeAgencyInfoMsg").append("<div>" + addFailMsg + "</div>");
                    $("#divClsoeAgencyInfoMsg").addClass("alert-danger");
                    $("#divClsoeAgencyInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnNotify").prop('disabled', true);
                $("#divClsoeAgencyInfoMsg").append("<div>" + addFailMsg + "</div>");
                $("#divClsoeAgencyInfoMsg").addClass("alert-danger");
                $("#divClsoeAgencyInfoMsg").removeClass("hidden alert-success");
            }
        });
    }

}

function ViewAgencyCloseDetails(id, agencycode, agencyname) {

    // alert(id);
    $.ajax({
        type: "POST",
        url: "/Home/ViewCloseAgency",
        data: '{AgencyId:"' + id + '",AgencyCode:"' + agencycode + '",AgencyName:"' + agencyname + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {

            $('#closeAgencycodeConfirmation').html(data);
            $('#closeAgencycodeConfirmation').modal();
            $("#divClsoeAgencyInfoMsg").text("");
            $("#divClsoeAgencyInfoMsg").addClass("hidden");
        }
    });
}
function TypeChange() {

    var invtype = $("#ddlReportType option:selected").val();

    var invtypeindex = $("#ddlReportType option:selected").index();
    if (invtypeindex !== 0) {
        alert(invtype);

        $.ajax({
            type: "POST",
            url: "/Home/GetAccurateDepreciationCC",
            data: '{Type:"' + invtype + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var CostCenterddl = $("#ddlCC");
                CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    CostCenterddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function BindAccurate() {
    $("#txtcurrenttype").val("Accrued");
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/Home/CCOverheadAndDepreciationGrid',
        data: { Type: "Accrued" },
        success: function (Data) {
            var count1 = Object.keys(Data).length;
            var msg = "";
            if (count1 > 0) {
                $("#divGrid").html(Data);
            }
            else {
                $("#divGrid").html('No Data Found');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            alert("error");
        }
    });

}
function BindDepreciation() {
    $("#txtcurrenttype").val("Depreciation");
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/Home/CCOverheadAndDepreciationGrid',
        data: { Type: "Depreciation" },
        success: function (Data) {
            var count1 = Object.keys(Data).length;
            var msg = "";
            if (count1 > 0) {
                $("#divGrid").html(Data);
            }
            else {
                $("#divGrid").html('No Data Found');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            alert("error");
        }
    });

}
function RebindBindGridAfterupdate() {
    var type = $("#txtcurrenttype").val();
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/Home/CCOverheadAndDepreciationGrid',
        data: { Type: type },
        success: function (Data) {
            var count1 = Object.keys(Data).length;
            var msg = "";
            if (count1 > 0) {
                $("#divGrid").html(Data);
            }
            else {
                $("#divGrid").html('No Data Found');
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            alert("error");
        }
    });
}
function RebindBindGridaccruedupdate(ConType) {
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/Home/CCOverheadAndDepreciationGrid',
        data: {
            Type: ConType
        },
        success: function (Data) {
            var count1 = Object.keys(Data).length;
            var msg = "";
            if (count1 > 0) {
                $("#divGrid").html(Data);
            }
            else {
                $("#divGrid").html('No Data Found');
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            alert("error");
        }
    });
}



