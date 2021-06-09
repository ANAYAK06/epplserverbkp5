$(document).ready(function () {
    $("#btnViewCCBudgetRpt").click(function () {
        isValid = true;
        var errorMsg = "";
        var CCTypeindex = $("#ddlBdgRptCCType option:selected").index();
        var CCType = $("#ddlBdgRptCCType option:selected").text();
        if (CCTypeindex !== 0) {
            if (CCType === "Performing") {
                var CCSubTypeindex = $("#ddlBdgRptCCSubType option:selected").index();
                var CCCodeindex = $("#ddlBdgRptPerCCCode option:selected").index();
                var CCCode = $("#ddlBdgRptPerCCCode option:selected").val();
                var CCSubType = $("#ddlBdgRptCCSubType option:selected").val();
                var year = '';
                if (CCSubTypeindex === 0) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Type</p>";
                    isValid = false;
                }
                if (CCCodeindex === 0) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
                    isValid = false;
                }
                if (!isValid) {
                    var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
                    $("#divBudgertReportInfoMsg").text("");
                    $("#divBudgertReportInfoMsg").append(finalerror + errorMsg + "</div>");
                    $("#divBudgertReportInfoMsg").addClass("alert-danger");
                    $("#divBudgertReportInfoMsg").removeClass("hidden alert-success");
                }
                else {
                    $("#divBudgertReportInfoMsg").text("");
                    $("#divBudgertReportInfoMsg").addClass("hidden");
                    $("#divBdgRptGrid").removeClass('hidden');
                    $.ajax({
                        type: 'GET',
                        dataType: 'html',
                        url: '/Reports/ViewDCABudgetReportGrid',
                        data: { CCCode: CCCode, Year: year },
                        beforeSend: function () {
                            $('#ajax-container').html('');
                            addSpinner($('#ajax-container'));
                        },
                        success: function (Data) {      
                            var count1 = Object.keys(Data).length;
                            var msg = "";
                            if (count1 > 0) {
                                $("#divDCABudgetRptDetails").html(Data);
                                $("#divBdgRptGrid").removeClass('hidden');

                                BindClientInvoiceDetailsForCC(CCCode);
                            }
                            else {
                                $("#divDCABudgetRptDetails").html('No Data Found');
                                $("#divBdgRptGrid").removeClass('hidden');}

                            removeSpinner($('#ajax-container'), function () {
                                $('#ajax-container').html('Content loaded.');
                            });
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            removeSpinner($('#ajax-container'), function () {
                                $('#ajax-container').html('Content loaded.');
                            });
                            alert("error");
                        }
                    });
                }

            }
            else {
                var NonperCCCodeindex = $("#ddlBdgRptNonPerCCCode option:selected").index();
                var NonperCCCode = $("#ddlBdgRptNonPerCCCode option:selected").val();

                var Yearindex = $("#ddlBdgRptYear option:selected").index();
                var Year = $("#ddlBdgRptYear option:selected").val();
                if (NonperCCCodeindex === 0) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Select  Cost Center</p>";
                    isValid = false;
                }
                if (Yearindex === 0) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Select Year</p>";
                    isValid = false;
                }
                if (!isValid) {
                    var finalerror2 = "<div style='align:center'><p>Please enter all required fields!</p>";
                    $("#divBudgertReportInfoMsg").text("");
                    $("#divBudgertReportInfoMsg").append(finalerror2 + errorMsg + "</div>");
                    $("#divBudgertReportInfoMsg").addClass("alert-danger");
                    $("#divBudgertReportInfoMsg").removeClass("hidden alert-success");
                }
                else {
                    $("#divBudgertReportInfoMsg").text("");
                    $("#divBudgertReportInfoMsg").addClass("hidden");
                    $("#divBdgRptGrid").removeClass('hidden');
                    $.ajax({
                        type: 'GET',
                        dataType: 'html',
                        url: '/Reports/ViewDCABudgetReportGrid',
                        data: { CCCode: NonperCCCode, Year: Year },
                        beforeSend: function () {
                            $('#ajax-container').html('');
                            addSpinner($('#ajax-container'));
                        },
                        success: function (Data) {
                            //var headerRow = $('#tblDcaBudgetReportGrid thead tr')[0];
                            //headerRow.find("th").eq(0).html(10);
                            $("#divDCABudgetRptDetails").html(Data);
                            $("#divBdgRptGrid").removeClass('hidden');

                            BindClientInvoiceDetailsForCC(NonperCCCode);
                          
                            removeSpinner($('#ajax-container'), function () {
                                $('#ajax-container').html('Content loaded.');
                            });
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            removeSpinner($('#ajax-container'), function () {
                                $('#ajax-container').html('Content loaded.');
                            });
                            alert("error");
                        }
                    });
                }

            }

        }
        else {
            var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divBudgertReportInfoMsg").text("");
            $("#divBudgertReportInfoMsg").append(finalerror1 + errorMsg + "</div>");
            $("#divBudgertReportInfoMsg").addClass("alert-danger");
            $("#divBudgertReportInfoMsg").removeClass("hidden alert-success");
            $("#divBudgertReportInfoMsg").text("");
            $("#divBudgertReportInfoMsg").addClass("hidden");

        }


    });
    //$("#divddlBdgRptCCSubType").addClass('hidden');
    //$("#divddlBdgRptYear").addClass('hidden');
    //$("#divBdgRptBtns").addClass('hidden');
    //$("#divBdgRptGrid").addClass('hidden');
    //$("#divddlBdgRptNonPerCCCode").addClass('hidden');
    //$("#divddlBdgRptPerCCCode").addClass('hidden');    


 
});

function BindClientInvoiceDetailsForCC(cccode) {
    var DCATotalBudget = $("#txtTotalDCABudget").val();
    var DCATotalconsumedBudget = $("#txtTotalConsumedDCABudget").val();
    //alert(cccode, DCATotalBudget, DCATotalconsumedBudget);
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/Reports/GetCCInvoiceSummary',
        data: { CCCode: cccode, TotalDCABudget: DCATotalBudget, TotalCosumedDCABudget: DCATotalconsumedBudget },
        beforeSend: function () {
            $('#ajax-container').html('');
            addSpinner($('#ajax-container'));
        },
        success: function (Data) {            
            $("#divBdgRptInvoiceGrid").html(Data);          
            removeSpinner($('#ajax-container'), function () {
                $('#ajax-container').html('Content loaded.');
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            removeSpinner($('#ajax-container'), function () {
                $('#ajax-container').html('Content loaded.');
            });
            alert("error");
        }
    });

}

function BudgetRptCCTypeChange() {
    $("#divBudgertReportInfoMsg").text("");
    $("#divBudgertReportInfoMsg").addClass("hidden");
    var CCTypeindex = $("#ddlBdgRptCCType option:selected").index();
    var CCType = $("#ddlBdgRptCCType option:selected").text();
    if (CCType === "Performing") {
        $.ajax({
            type: "POST",
            url: "/Budget/GetCCSubTypes",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
                $('#ajax-container').html('');
                addSpinner($('#ajax-container'));
            },
            success: function (response) {
                var SubTypeddl = $("#ddlBdgRptCCSubType");
                SubTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    SubTypeddl.append($("<option></option>").val(this['CC_SubType']).html(this['CC_SubType']));
                });

                $("#divddlBdgRptCCSubType").removeClass('hidden');
                $("#divddlBdgRptYear").addClass('hidden');
                $("#divBdgRptBtns").addClass('hidden');
                $("#divBdgRptGrid").addClass('hidden');
                $("#divddlBdgRptNonPerCCCode").addClass('hidden');
                $("#divBdgRptPerCCCode").addClass('hidden');

                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
            },
            failure: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            },
            error: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            }
        });
    }
    else if (CCType === "Non-Performing" || CCType === "Capital") {

        var subtype = '';
        $.ajax({
            type: "POST",
            url: "/Reports/GetCClist",
            data: '{cctype:"' + CCType + '",subtype:"' + subtype + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
                $('#ajax-container').html('');
                addSpinner($('#ajax-container'));
            },
            success: function (response) {
                var SubTypeddl = $("#ddlBdgRptNonPerCCCode");
                SubTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    SubTypeddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });

                $("#divddlBdgRptNonPerCCCode").addClass('hidden');
                $("#divddlBdgRptYear").removeClass('hidden');
                $("#divddlBdgRptYear").addClass('hidden');
                $("#divBdgRptBtns").addClass('hidden');
                $("#divBdgRptGrid").addClass('hidden');
                $("#divddlBdgRptNonPerCCCode").removeClass('hidden');
                $("#divBdgRptPerCCCode").addClass('hidden');
                $("#divddlBdgRptCCSubType").addClass('hidden');

                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
            },
            failure: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            },
            error: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            }
        });
    }
    else if (CCTypeindex === 0) {
        $("#divddlBdgRptCCSubType").addClass('hidden');
        $("#divddlBdgRptYear").addClass('hidden');
        $("#divBdgRptBtns").addClass('hidden');
        $("#divBdgRptGrid").addClass('hidden');
        $("#divddlBdgRptNonPerCCCode").addClass('hidden');
        $("#divBdgRptPerCCCode").addClass('hidden');

    }
}

function BdgRptCCSubTypeChange() {
    $("#divBudgertReportInfoMsg").text("");
    $("#divBudgertReportInfoMsg").addClass("hidden");
    var CCType = $("#ddlBdgRptCCType option:selected").text();
    var CCSubType = $("#ddlBdgRptCCSubType option:selected").text();
    var CCSubTypeindex = $("#ddlBdgRptCCSubType option:selected").index();
    var CCTypeindex = $("#ddlBdgRptCCType option:selected").index();
    if (CCSubTypeindex !== 0 && CCTypeindex !== 0) {
        $.ajax({
            type: "POST",
            url: "/Reports/GetCClist",
            data: '{cctype:"' + CCType + '",subtype:"' + CCSubType + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
                $('#ajax-container').html('');
                addSpinner($('#ajax-container'));
            },
            success: function (response) {
                var CostCenterddl = $("#ddlBdgRptPerCCCode");
                CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    CostCenterddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
                $("#divBdgRptPerCCCode").removeClass('hidden');
                $("#divddlBdgRptNonPerCCCode").addClass('hidden');
                $("#divBdgRptBtns").removeClass('hidden');
                $("#divBdgRptGrid").removeClass('hidden');
                $("#divddlBdgRptYear").addClass('hidden');

                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
            },
            failure: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            },
            error: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            }
        });


    }

}

function ddlBdgRptNonPerCCCodeChange() {
    $("#divBudgertReportInfoMsg").text("");
    $("#divBudgertReportInfoMsg").addClass("hidden");
    var CCCode = $("#ddlBdgRptNonPerCCCode option:selected").val();
    var CCCodeindex = $("#ddlBdgRptNonPerCCCode option:selected").index();
    if (CCCodeindex !== 0) {
        $.ajax({
            type: "POST",
            url: "/Reports/GetYearsbyCCCode",
            data: '{CCCode:"' + CCCode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
                $('#ajax-container').html('');
                addSpinner($('#ajax-container'));
            },
            success: function (response) {
                var CostCenterddl = $("#ddlBdgRptYear");
                CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    CostCenterddl.append($("<option></option>").val(this['Year']).html(this['YearValue']));
                });
                $("#divddlBdgRptYear").removeClass('hidden');
                $("#divBdgRptBtns").removeClass('hidden');
                $("#divBdgRptGrid").addClass('hidden');

                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
            },
            failure: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            },
            error: function (response) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert(response.responseText);
            }
        });


    }
    else {
        $("#divddlBdgRptYear").addClass('hidden');
        $("#divBdgRptBtns").addClass('hidden');
        $("#divBdgRptGrid").addClass('hidden');

    }
}
function GetBudgetAsignedCCDetailsForReport() {

    var CCTypeindex = $("#ddlBdgRptCCType option:selected").index();
    var CCType = $("#ddlBdgRptCCType option:selected").text();
    var CCCode = '';
    var Year = '';
    if (CCType !== "Performing") {
        Year = $("#ddlBdgRptYear option:selected").val();
        CCCode = $("#ddlBdgRptNonPerCCCode option:selected").val();
    }
    else {
        CCCode = $("#ddlBdgRptPerCCCode option:selected").val();
    }
  
    //alert();
    //$("#tblDcaBudgetDetails thead tr").each(function () {
    //    var footerRow = $(this);
    //    footerRow.find("td").eq(0).html("");
    //    footerRow.find("td").eq(1).html("");
    //    footerRow.find("td").eq(2).html("");
    //});
    //$.ajax({
    //    type: 'POST',
    //    dataType: 'json',
    //    url: '/Budget/GetBudgetAssignedCCByID',
    //    data: { CCCode: cc },
    //    beforeSend: function () {
    //        $('#ajax-container').html('');
    //        addSpinner($('#ajax-container'));
    //    },
    //    success: function (Data) {

    //        $.each(Data, function () {
    //            // alert(this['CC_Code'] + "---" + this['CC_Name']);


    //            //$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th></th><th></th><th></th><th></th><th></th>');
    //            // hidden fields CC Budget details
    //            $("#txtDCCBudgetold").val(this['BudgetValue']);
    //            $("#txtDCCBalanceOld").val(this['BalanceBudget']);
    //            $("#txtDCCBudgetid").val(this['CCBudgetId']);
    //            //Pop up Budget detailsAmendDCABudget
    //            $("#lblDCCAmendCCCode").text(this['CC_Code']);
    //            $("#lblDCCAmendCCodeandName").text(this['CC_Code'] + ',' + this['CC_Name']);
    //            $("#lblDCCAmendBudget").text(this['BudgetValue']);
    //            $("#lblDCCAmendBalance").text(this['BalanceBudget']);
    //            $("#txtDCAAmendCCName").val(this['CC_Name']);

    //            $("#txtTempOldCCBudgetForAmendDCA").val(this['BudgetValue']);
    //            $("#txtTempOldCCBalanceForAmendDCA").val(this['BalanceBudget']);

    //            $("#txtBudgetIDForAmendDCA").val(this['CCBudgetId']);

    //        });

    //        removeSpinner($('#ajax-container'), function () {
    //            $('#ajax-container').html('Content loaded.');
    //        });


    //        $("#tblDcaBudgetDetails tfoot tr").each(function () {
    //            var footerRow = $(this);
    //            if (ccindex !== 0) {
    //                footerRow.find("td").eq(0).html("<label>" + cc + "," + $("#txtDCAAmendCCName").val() + "</label>");
    //                footerRow.find("td").eq(1).html("Budget Assigned:<label>" + $("#txtTempOldCCBudgetForAmendDCA").val() + "</label>");
    //                footerRow.find("td").eq(2).html("Balance:<label>" + $("#txtTempOldCCBalanceForAmendDCA").val() + " </label>");
    //            }
    //            else {
    //                footerRow.find("td").eq(0).html("");
    //                footerRow.find("td").eq(1).html("");
    //                footerRow.find("td").eq(2).html("");
    //            }
    //        });
    //        //$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th>' + cc + '</th><th>' + $("#txtDCAAmendCCName").val() + '</th><th>Budget Assigned: ' + $("#txtTempOldCCBudgetForAmendDCA").val() + '</th><th>Balance: ' + $("#txtTempOldCCBalanceForAmendDCA").val() + '</th><th></th><th></th></tr>');

    //    },
    //    error: function (XMLHttpRequest, textStatus, errorThrown) {
    //        removeSpinner($('#ajax-container'), function () {
    //            $('#ajax-container').html('Content loaded.');
    //        });
    //        $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
    //        $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
    //        $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
    //    }
    //});


}
function ResetBudgetReport() {
    location.reload();

}
function ResetLedgerReport() {
    location.reload();

}


function ShowLedgerReport() {

    
    isValid = true;
    var errorMsg = "";
    var Yearindex = $("#ddlLRptYear option:selected").index();
    var Year = $("#ddlLRptYear option:selected").val();
    var Ledgerindex = $("#ddlLRptLedgername option:selected").index();
    var Ledger = $("#ddlLRptLedgername option:selected").text();
    var LId = $("#ddlLRptLedgername option:selected").val();

    if (Ledgerindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Ledger Name</p>";
        isValid = false;
    }
    if (Yearindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select  Year</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror2 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divLedgerReportInfoMsg").text("");
        $("#divLedgerReportInfoMsg").append(finalerror2 + errorMsg + "</div>");
        $("#divLedgerReportInfoMsg").addClass("alert-danger");
        $("#divLedgerReportInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divLedgerReportInfoMsg").text("");
        $("#divLedgerReportInfoMsg").addClass("hidden");

        var fromdate = $("#txtLRFromDate").val();
        var todate = $("#txtLRToDate").val();

        var yearArr = Year.toString().split('-');
        var Currentyear = yearArr[0];
        var Nextyear = parseInt(yearArr[0]) + 1;

        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: '/Reports/ViewLedgerReportGrid',
            data: { LedgerId: LId, FromDate: fromdate, Todate: todate, CurrentYear: Currentyear, Nextyear: Nextyear, Ledger: Ledger, Year: Year },
            beforeSend: function () {
                $('#ajax-container').html('');
                addSpinner($('#ajax-container'));
            },
            success: function (Data) {
                var count1 = Object.keys(Data).length;
                var msg = "";
                if (count1 > 0) {
                    $("#divLedgerRptDetails").html(Data);
                    $("#divLedgerRptDetails").removeClass('hidden');

                    //BindClientInvoiceDetailsForCC(CCCode);
                    // alert("Success");
                }
                else {
                    //  alert("error");
                    $("#divLedgerRptDetails").html('No Data Found');
                    $("#divLedgerRptDetails").removeClass('hidden');


                }

                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                removeSpinner($('#ajax-container'), function () {
                    $('#ajax-container').html('Content loaded.');
                });
                alert("error");
            }
        });

    }

}

function PLExpandAll() {
    $('#jstreeDirectExpense').jstree('open_all');
    $('#jstreeDirectIncome').jstree('open_all');
    $('#jstreeInDirExpense').jstree('open_all');
    $('#jstreeInDireIncome').jstree('open_all');

}
function PLCollapseAll() {
    $('#jstreeDirectExpense').jstree('close_all');
    $('#jstreeDirectIncome').jstree('close_all');
    $('#jstreeInDirExpense').jstree('close_all');
    $('#jstreeInDireIncome').jstree('close_all');
}
function ShowProfitLossLedgerModel( LId, fromdate,  todate, Currentyear, Nextyear,  Ledger,  year ) {

    $.ajax({
        type: 'POST',
        dataType: 'html',
        url: '/Reports/ViewLedgerReportGrid',
        data: { LedgerId: LId, FromDate: fromdate, Todate: todate, CurrentYear: Currentyear, Nextyear: Nextyear, Ledger: Ledger, Year: year },
        beforeSend: function () {
            $('#ajax-container').html('');
            addSpinner($('#ajax-container'));
        },
        success: function (Data) {
            var count1 = Object.keys(Data).length;
            var msg = "";
            if (count1 > 0) {
                //alert();
                $("#ModelPLLedgerDetails").modal('show');
                $("#divLedgerRptDetails").html(Data);
                $("#divLedgerRptDetails").removeClass('hidden');


            }
            else {

                $("#ModelPLLedgerDetails").html('No Data Found');
                $("#ModelPLLedgerDetails").removeClass('hidden');


            }

            removeSpinner($('#ajax-container'), function () {
                $('#ajax-container').html('Content loaded.');
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            removeSpinner($('#ajax-container'), function () {
                $('#ajax-container').html('Content loaded.');
            });
            alert("error");
        }
    });

}



function BSExpandAll() {
    $('#jstreeLiabilityExpense').jstree('open_all');
    $('#jstreeAssetsIncome').jstree('open_all');
}
function BSCollapseAll() {
    $('#jstreeLiabilityExpense').jstree('close_all');
    $('#jstreeAssetsIncome').jstree('close_all');
  
}

//SPPOInvoiceReport
function ResetSPPOInvoivceReport() {
    location.reload();
}
function ShowSPPOInvoivceReport(Applicablecc) {
    isValid = true;
    var errorMsg = "";
    var ccindex = $("#ddlCC option:selected").index();
    var cc = $("#ddlCC option:selected").val();
    if (ccindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select  Cost Center</p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror2 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divInvReportInfoMsg").text("");
        $("#divInvReportInfoMsg").append(finalerror2 + errorMsg + "</div>");
        $("#divInvReportInfoMsg").addClass("alert-danger");
        $("#divInvReportInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divInvReportInfoMsg").text("");
        $("#divInvReportInfoMsg").addClass("hidden");
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: '/Reports/ViewInvoiceGrid',
            data: { CCCode: cc, ApplicableCC: Applicablecc },
            
            success: function (Data) {
                var count1 = Object.keys(Data).length;
                var msg = "";
                if (count1 > 0) {
                    $("#divSppoInvRptDetails").html(Data);
                    $("#divSppoInvRptGrid").removeClass('hidden');

                }
                else {
                    $("#divSppoInvRptDetails").html('No Data Found');
                    $("#divSppoInvRptGrid").removeClass('hidden');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
               
                alert("error");
            }
        });
    }
}

