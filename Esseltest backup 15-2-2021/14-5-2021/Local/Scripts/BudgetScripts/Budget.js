

$(document).ready(function () {
    $("table.order-list.dcaAmend").on("click", ".ibtnAmendDCADel", function (event) {
        //debugger;
        addFailMsg = "Error Occurred";
        var row = $(this).closest("tr");
        var id = row.find(".amendid").html();
        var deletdca = {
            DCABudgetAmendmentId: id,
            AmendmentType: row.find(".type").html(),
            AmendedValue: row.find(".amount").html(),
            CCCode: $("#ddlAmendBudgetCC option:selected").val(),
            DCACode: row.find(".dca").html()
        };
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Budget/DeleteDCAAmendBudget',
            data: { amendDcaBudget: deletdca },
            success: function (Data) {
                if (Data.saveStatus === true) {
                    row.remove();
                    var noofrows = $("#tbDcaAmendDetails tbody tr").length;
                    if (noofrows > 0) {
                        $("#divAmendDetails").removeClass('hidden');
                    }
                    else {
                        $("#divAmendDetails").addClass('hidden');
                    }

                } else {
                    $("#divAmendDCAInfoMsg").text("Error Occured while removing Budget");
                    $("#divAmendDCAInfoMsg").addClass("alert-danger");
                    $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");

                }
                //ShowAmendDCAGrid();
                var cc = $("#ddlAmendBudgetCC option:selected").val();
                var ccindex = $("#ddlAmendBudgetCC option:selected").val();
                var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
                var fyear1 = $("#ddlAmendDCAYear option:selected").val();
                if (cctypeid === "6") {
                    var Stype = $("#ddlAmendDCASubType option:selected").text();
                    var year = '';
                    $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + cc + '&Subtype=' + Stype + '&Year=' + year+'&CCTypeId=' + cctypeid+'');
                }
                else {
                    var fyear = $("#ddlAmendDCAYear option:selected").val();
                    var Stype1 = '';
                    $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + cc + '&Subtype=' + Stype1 + '&Year=' + fyear + '&CCTypeId=' + cctypeid + '');
                }
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Budget/GetBudgetAssignedCCByID',
                    data: { CCCode: cc, Year: fyear1 },
                    success: function (Data) {
                        //debugger;
                        if (cc !== "") {
                            $("#budgetvalue").text(Data[0].BudgetValue);
                            $("#balbudgetvalue").text(Data[0].BalanceBudget);

                        }
                        else {
                            $("#budgetvalue").text('0');
                            $("#balbudgetvalue").text('0');
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
                        $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                        $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
                    }
                });
                //$("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + $("#ddlAmendBudgetCC option:selected").val() + '');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divAmendDCAInfoMsg").text(addFailMsg);
                $("#divAmendDCAInfoMsg").addClass("alert-danger");
                $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
            }
        });
    });


    //$("#DCABudgetTable tbody tr input[type=checkbox]").change(function (e) {
    $("#DCABudgetTable").on('change', "input[type='checkbox']", function (e) {  
        var row = $(this).closest("tr");
        rowtotal = row.find("td").eq(2).find("input[type='text']").val();
        //alert(rowtotal);
        DCABudgetChange();
        //if (e.target.checked)
        //   // alert('Checked');
        //else
        if (e.target.checked === false) {
            row.find("td").eq(2).find("input[type='text']").val("");
        }
          //  alert('unChecked');
    });

    //$("#divCCRemarks").addClass('hidden');
    //$("#divCCSubType").addClass('hidden');
    //$("#divCCCostCenter").addClass('hidden');
    //$("#divCCYear").addClass('hidden');DCASubmitData
    //$("#divCCAmount").addClass('hidden');
    //$("#btnCCSubmit").addClass('hidden');
    //$("#btnAssignCCReset").addClass('hidden');
    

    //ClearAssignCC();
    $("#ddlCc").prop("disabled", false);
    $("#btnMultipleAmendDCASubmit").prop("disabled", false);
    $("#divBudgetAssignedDCAGrid").removeClass('hidden');
    $("#txtCCtype").val("0");
    $("#txtCCBudget").val("0");
    $("#txtDCABudgetSubTotal").val("0"); 
    $("#divDCABudgetRemarks").addClass('hidden');

    $("#CCModal").on("hidden.bs.modal", function () {   
        //var id = $("#ddlAmendBudgetCC").val();
        //$("#divCCDetails").load('/Budget/ViewCCDetailsGrid?CCID=' + id+'');
        $("#divAmendCCGrid").addClass('hidden');
        $("#divAmendCCYear").addClass('hidden');
        $("#divAmendCCSubType").addClass('hidden');
        $("#divAmendccgridbtn").addClass('hidden');

        $("#ddlAmendCCSubType").prop("disabled", false);
        $("#ddlAmendCCYear").prop("disabled", false);
        $("#ddlAmendCCBType").prop("disabled", false);

        $("#ddlAmendCCBType").prop('selectedIndex', 0);
        $("#ddlAmendCCYear").prop('selectedIndex', 0);
        $("#ddlAmendCCSubType").prop('selectedIndex', 0);
    });
   
    $("#DCAModal").on("hidden.bs.modal", function () {
        RebindBudgetDCAGrid();
        $("#divBudgetAssignedDCAGrid").removeClass('hidden');
        $("#divDCABudgetDetails").addClass('hidden');
    });
   
    $('#btnAssignCC').click(function () {
      //  alert('showing');
        ClearAssignCC();
        $('#CCModal').modal('show');

        $("#divAmendCCGrid").addClass('hidden');
        $("#divAmendCCYear").addClass('hidden');
        $("#divAmendCCSubType").addClass('hidden');
        $("#divAmendccgridbtn").addClass('hidden');

        $("#ddlAmendCCSubType").prop("disabled", false);
        $("#ddlAmendCCYear").prop("disabled", false);
        $("#ddlAmendCCBType").prop("disabled", false);

        $("#ddlAmendCCBType").prop('selectedIndex', 0);
        $("#ddlAmendCCYear").prop('selectedIndex', 0);
        $("#ddlAmendCCSubType").prop('selectedIndex', 0);
      
        //$.ajax({
        //    type: "POST",
        //    url: "/Budget/GetAssignCCTypes",
        //    data: '{}',
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (response) {
        //        var CCTypeddl = $("#CCTypeddl");
        //        CCTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        //        $.each(response, function () {
        //            CCTypeddl.append($("<option></option>").val(this['CCTypeID']).html(this['CCTypeDescription']));
        //        });
        //        $("#divCCInfoMsg").text("");
        //        $("#divCCInfoMsg").addClass("hidden");
        //    },
        //    failure: function (response) {
        //        alert(response.responseText);
        //    },
        //    error: function (response) {
        //        alert(response.responseText);
        //    }
        //});

    });

    $('#btnAssignDCA').click(function () {        
        $('#DCAModal').modal('show');
        ClearAssignDCA();
        //$.ajax({
        //    type: "POST",
        //    url: "/Budget/GetBudgetCCDetails",
        //    data: '{}',
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    beforeSend: function () {
        //        $('#ajax-container').html('');
        //        addSpinner($('#ajax-container'));
        //    },
        //    success: function (response) {
        //        var CCddl = $("#ddlCc");
        //        CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        //        $.each(response, function () {
        //            CCddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
        //        });
        //        $("#divDCAYear").addClass('hidden');
        //        $("#divDCAGrid").addClass('hidden');
        //        $("#btnDCASubmit").addClass('hidden');
        //        $("#btnAssignDCAReset").addClass('hidden');
        //        $("#divDCAInfoMsg").text("");
        //        $("#divDCAInfoMsg").addClass("hidden");
        //        $("#txtCCtype").val("0");
        //        $("#txtCCBudget").val("0");
        //        $("#txtDCABudgetSubTotal").val("0");
        //        $("#divDCABudgetRemarks").addClass('hidden');
        //        removeSpinner($('#ajax-container'), function () {
        //            $('#ajax-container').html('Content loaded.');
        //        })
        //    },
        //    failure: function (response) {
        //        removeSpinner($('#ajax-container'), function () {
        //            $('#ajax-container').html('Content loaded.');
        //        })
        //        alert(response.responseText);
        //    },
        //    error: function (response) {
        //        removeSpinner($('#ajax-container'), function () {
        //            $('#ajax-container').html('Content loaded.');
        //        })
        //        alert(response.responseText);
        //    }
        //});

    });
   // Assign CC and DCA Budget page load
   
    //CC tab page load
   
    ////DCA tab page load 
    //$("#divDCARemarks").addClass('hidden');
    //$("#divDCASubType").hide();
    //$("#divDCACostCenter").hide();
    //$("#divDCAYear").hide();
    //$("#btnDCASubmit").hide();
    //$("#btnAssignDCAReset").hide();



    $("#CCTypeddl").change(function (event) {
      
        var CCType = $("#CCTypeddl option:selected").text();
     
       
        if (CCType === "Performing") {
            $.ajax({
                type: "POST",
                url: "/Budget/GetCCSubTypes",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var SubTypeddl = $("#SubTypeddl");
                    SubTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        SubTypeddl.append($("<option></option>").val(this['CC_SubType']).html(this['CC_SubType']));
                    });
                    
                    $("#divCCSubType").removeClass('hidden');
                    $("#divCCRemarks").addClass('hidden');                  
                    $("#divCCCostCenter").addClass('hidden');                   
                    $("#divCCYear").addClass('hidden'); 
                    $("#divCCAmount").addClass('hidden'); 
                    $("#btnCCSubmit").addClass('hidden'); 
                    $("#btnAssignCCReset").addClass('hidden'); 
                    $("#divCCInfoMsg").text("");
                    $("#divCCInfoMsg").addClass("hidden");
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
        else if (CCType === "Non-Performing" || CCType === "Capital") {       
            $.ajax({
                type: "POST",
                url: "/Budget/GetAssignCCFinancialYear",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var Yearddl = $("#Yearddl");
                    Yearddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        Yearddl.append($("<option></option>").val(this['CC_FinYear']).html(this['CC_FinYear']));
                    });
                    $("#divCCSubType").addClass('hidden');
                    $("#divCCRemarks").addClass('hidden');
                    $("#divCCCostCenter").addClass('hidden');
                    $("#divCCYear").removeClass('hidden');  
                    $("#divCCAmount").addClass('hidden');
                    $("#btnCCSubmit").addClass('hidden');
                    $("#btnAssignCCReset").addClass('hidden');
                    $("#divCCInfoMsg").text("");
                    $("#divCCInfoMsg").addClass("hidden");
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
        else if (CCType === "-Please Select-") {
          
         
            $("#divCCSubType").addClass('hidden');
            $("#divCCRemarks").addClass('hidden');
            $("#divCCCostCenter").addClass('hidden');
            $("#divCCYear").addClass('hidden');
            $("#divCCAmount").addClass('hidden');
            $("#btnCCSubmit").addClass('hidden');
            $("#btnAssignCCReset").addClass('hidden');
            $("#divCCInfoMsg").text("");
            $("#divCCInfoMsg").addClass("hidden");
               ClearAssignCC();
        }
        else {
            ClearAssignCC();
        }
    });
    $("#SubTypeddl").change(function (event) {
        var CCType = $("#CCTypeddl option:selected").text();
        var CCSubType = $("#SubTypeddl option:selected").index();

        if (CCType === "Performing") {
            $.ajax({
                type: "POST",
                url: "/Budget/GetCClist",
                data: '{cctype:"' + CCType + '",subtype:"' + $("#SubTypeddl option:selected").val()+'"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var CostCenterddl = $("#CostCenterddl");
                    CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        CostCenterddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                    });
                    $("#divCCSubType").removeClass('hidden');  
                    $("#divCCRemarks").removeClass('hidden');
                    $("#divCCCostCenter").removeClass('hidden');  
                    $("#divCCYear").addClass('hidden');  
                    $("#divCCAmount").removeClass('hidden');  
                    $("#btnCCSubmit").removeClass('hidden');  
                    $("#btnAssignCCReset").removeClass('hidden');  
                    $("#divCCInfoMsg").text("");
                    $("#divCCInfoMsg").addClass("hidden");
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });


        }



    });
    $("#Yearddl").change(function (event) {
        var CCType = $("#CCTypeddl option:selected").text();
        var CCyear = $("#Yearddl option:selected").index();

        if (CCType != "Performing" && CCyear != 0) {
            $.ajax({
                type: "POST",
                url: "/Budget/GetCClist",
                data: '{cctype:"' + CCType + '",subtype:"No"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var CostCenterddl = $("#CostCenterddl");
                    CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        CostCenterddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                    });
                    $("#divCCSubType").addClass("hidden");
                    $("#divCCRemarks").removeClass('hidden');
                    $("#divCCCostCenter").removeClass('hidden');
                    $("#divCCYear").removeClass('hidden');
                    $("#divCCAmount").removeClass('hidden');
                    $("#btnCCSubmit").removeClass('hidden');
                    $("#btnAssignCCReset").removeClass('hidden');
                    $("#divCCInfoMsg").text("");
                    $("#divCCInfoMsg").addClass("hidden");
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });


        }

       
    //$("#DCATypeddl").change(function (event) {
    //    var ddlvalue = $("#DCATypeddl option:selected").index();
    //    if (ddlvalue == 1) {
    //        $("#divDCACostCenter").show();
    //        $("#divDCASubType").show();
    //        $("#divDCAYear").hide();
    //        $("#btnDCASubmit").show();
    //        $("#divCCRemarks").addClass('hidden');
    //        $("#divDCARemarks").removeClass('hidden');
    //        $("#btnAssignDCAReset").show();
    //    }
    //    else if (ddlvalue > 1) {
    //        $("#divDCACostCenter").show();
    //        $("#divDCASubType").hide();
    //        $("#divDCAYear").show();
    //        $("#btnDCASubmit").show();
    //        $("#divCCRemarks").addClass('hidden');
    //        $("#divDCARemarks").removeClass('hidden');
    //        $("#btnAssignDCAReset").show();
    //    }
    //    else {
    //        ClearAssignDCA();
    //    }

    //});



});
});
//start of Assign CC and DCA Budget scripts
function ValidateAmount(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode;
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


function CCSubmitData() {

    isValid = true;
    var errorMsg = "";
    var CCType = $("#CCTypeddl option:selected").text();
    var subType = $("#SubTypeddl option:selected").index();
    var ccddl = $("#CostCenterddl option:selected").index();
    var year = $("#Yearddl option:selected").index();
    var amount = $("#txtAmount").val();
    var remarks = $("#txtCCReamarks").val();
    var rx = /^\d+(?:\.\d{1,2})?$/;

    if (CCType == 0 || CCType == null) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center Type</p>";
        isValid = false;
    }
    else if (CCType == "Performing") {

        if (subType == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center Sub Type</p>";
            isValid = false;
        }
        if (ccddl == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
            isValid = false;
        }
        if (amount == "0.00" || amount == "" || amount == "0.0" || amount == "0") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        else if (!rx.test(amount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        if (remarks == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }


    }
    else if (CCType != "Performing" || CCType != "-Please Select-") {

        if (year == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Year</p>";
            isValid = false;
        }
        if (ccddl == 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
            isValid = false;
        }
        if (amount == "0.00" || amount == "" || amount == "0.0" || amount == "0") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        else if (!rx.test(amount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        if (remarks == "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
    }
    else {
        $("#divCCInfoMsg").addClass("hidden");
    }

    //alert("Clicked");

    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divCCInfoMsg").text("");
        $("#divCCInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divCCInfoMsg").addClass("alert-danger");
        $("#divCCInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divCCInfoMsg").text("");
        $("#divCCInfoMsg").addClass("hidden");
      
        //submit assign CC Budget data to db
        var assignCCBudget = "";
        if (CCType == "Performing") {
             assignCCBudget = {
                 CCTypeID: CCType,
                 CCType: $("#CCTypeddl option:selected").text(),
                 SubType: $("#SubTypeddl option:selected").text(),
                 CostCenter: $("#CostCenterddl option:selected").val(),
                 Year: "",
                 Remarks: remarks,
                 Amount: amount

            };
        }
        if (CCType != "Performing") {

             assignCCBudget = {
                 CCTypeID: CCType,
                 CCType: $("#CCTypeddl option:selected").text(),
                 SubType: "",
                 CostCenter: $("#CostCenterddl option:selected").val(),
                 Year: $("#Yearddl option:selected").val(),
                 Remarks: remarks,
                 Amount: amount,
                 Createdby: $("#txtAssignCCBudgetCreatedby").val()

            };
        }
        addFailMsg = "Error Occurred While Adding Cost Center Budget.";
        addSuccessMsg = "Cost Center Budget Added Successfully.";
        //alert('submit');
        $("#btnCCSubmit").prop("disabled", true);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Budget/SaveCCAssignedBudget',
            data: { assingCCBudget: assignCCBudget },
            success: function (Data) {
                // alert("Hi");
                if (Data.saveStatus === 'Submitted') {
                    $("#divCCInfoMsg").text(addSuccessMsg);
                    $("#divCCInfoMsg").removeClass("hidden alert-danger");
                    $("#divCCInfoMsg").addClass("alert-success");
                   
                }
                else {
                    $("#divCCInfoMsg").text(Data.saveStatus);
                    $("#divCCInfoMsg").addClass("alert-danger");
                    $("#divCCInfoMsg").removeClass("hidden alert-success");
                    $("#btnCCSubmit").prop("disabled", false);

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divCCInfoMsg").text(addFailMsg);
                $("#divCCInfoMsg").addClass("alert-danger");
                $("#divCCInfoMsg").removeClass("hidden alert-success");
                $("#btnCCSubmit").prop("disabled", false);
            }
        });

    }

}

function DCABudgetChange() {
   
    //$("#DCABudgetTable tfoot tr").each(function () {
    //    alert(0);
    //    var footerRow = $(this);
    //    footerRow.find("td").eq(2).html("Sub Total:<b>00</b>");
    //});
    
    var CCAmount = $("#txtCCBudget").val();    
    var rowtotal = 0;
    var allrows = 0;
    $("#DCABudgetTable tbody tr").each(function () {       
        var currentRow = $(this);
        rowtotal = currentRow.find("td").eq(3).find("input[type='text']").val();
        var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
        if (rowtotal != "" && checkbox==true) {
            allrows = parseFloat(allrows)+ parseFloat(rowtotal);
            $("#txtDCABudgetSubTotal").val(allrows);
        }
        else {
            allrows = parseFloat(allrows) + parseFloat(0);         
            $("#txtDCABudgetSubTotal").val(allrows);
        }
  
    $("#DCABudgetTable tfoot tr").each(function () {
        //alert(allrows);
        if (allrows != 0 || allrows != "NaN") {
            var footerRow = $(this);
            footerRow.find("td").eq(2).html("Sub Total:<b>" + parseFloat($("#txtDCABudgetSubTotal").val()).toFixed(2) + "</b>");
        }
        else {            
            footerRow.find("td").eq(2).html("Sub Total:<b>0</b>");
        }
    });

    $("#DCABudgetTable thead tr:gt(0)").each(function () {
        var heraderRow = $(this);
        var remaining = parseFloat(CCAmount) - parseFloat($("#txtDCABudgetSubTotal").val());
        if (parseFloat(remaining) > 0) {
            heraderRow.find("td").eq(2).html("CostCenter Budget:<b>" + remaining.toFixed(2) + "</b>");
            $("#divDCAInfoMsg").text("");
            $("#divDCAInfoMsg").addClass("hidden");
        }
        else {
            if (parseFloat(remaining) === 0) {
                heraderRow.find("td").eq(2).html("CostCenter Budget:<b>" + 0 + "</b>");               
            }
            else {
                heraderRow.find("td").eq(2).html("CostCenter Budget:<b>" + remaining.toFixed(2) + "</b>");              
                $("#divDCAInfoMsg").text("");
                $("#divDCAInfoMsg").append("<div>DCA Budget is greater than CC Budget</div>");
                $("#divDCAInfoMsg").addClass("alert-danger");
                $("#divDCAInfoMsg").removeClass("hidden alert-success");

            }


          //  heraderRow.find("td").eq(2).html("CostCenter Budget:<b>" + remaining.toFixed(2) + "</b>");
          ////  currentRow.find("td").eq(2).find("input[type='text']").val("");
          //  $("#divDCAInfoMsg").text("");
          //  $("#divDCAInfoMsg").append("<div>DCA Budget is greater than CC Budget</div>");
          //  $("#divDCAInfoMsg").addClass("alert-danger");
          //  $("#divDCAInfoMsg").removeClass("hidden alert-success");
        }

        });
    });

    }


function SaveDCABudget() {
    var ccddlindex = $("#ddlCc option:selected").index();   
    var totalRowCount = $("#DCABudgetTable tbody tr").length;
    if (totalRowCount > 0) {
        var DcaCodes = '', Dcaamounts = '';
        $("#DCABudgetTable tbody tr").each(function () {
            var currentRow = $(this);
            var dcacode = currentRow.find("td").eq(1).html();
            var dcaAmount = currentRow.find("td").eq(2).find("input[type='text']").val();
            var checkbox = currentRow.find("td").eq(3).find("input[type='checkbox']").is(":checked");
            if (checkbox == true) {
                if (dcaAmount != "" && dcaAmount != null) {
                    DcaCodes += dcacode + ",";
                    Dcaamounts += dcaAmount + ",";

                }
            }
        });        
        var DCAbudget = {
            CCCode: $("#ddlCc option:selected").val(),
            FYyear: $("#ddlDCAYear option:selected").val(),
            DCACode: DcaCodes,
            DcaAmounts: Dcaamounts,
            Remarks: $("#txtDCABudgetRemarks").val(),
            Action: 'New',
            OldBudgetAmount: 0,
            CreatedBy: $("#txtAssignCCBudgetCreatedby").val()
        };

        addFailMsg = "Error Occurred While Adding DCA Budget";
        addSuccessMsg = "DCA Budget Added Successfully.";

        $.ajax({
            type: "POST",
            url: "/AccountsApproval/SaveDCABudget",
            data: { assignDCABudget: DCAbudget },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == 'Submited') {
                    $("#divDCAInfoMsg").text(addSuccessMsg);
                    $("#divDCAInfoMsg").removeClass("hidden alert-danger");
                    $("#divDCAInfoMsg").addClass("alert-success");
                }
                else {
                    $("#divDCAInfoMsg").text(response.saveStatus);
                    $("#divDCAInfoMsg").addClass("alert-danger");
                    $("#divDCAInfoMsg").removeClass("hidden alert-success");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + "</div>";
                $("#AppCCMsg").html(msg);
                $('#ApproveCCMsgModal').modal('show');
            }
        });


    }


}

function ClearAssignCC() {   
    $("#divCCSubType").addClass('hidden');    
    $("#divCCCostCenter").addClass('hidden');
    $("#divCCYear").addClass('hidden');
    $("#divCCRemarks").addClass('hidden');
    $("#divCCAmount").addClass('hidden');
    $("#btnCCSubmit").addClass('hidden');
    $("#btnCCSubmit").prop("disabled", false);
    var CCTypeddl = $("#CCTypeddl");
    CCTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    var SubTypeddl = $("#CCTypeddl");
    SubTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    var CostCenterddl = $("#CostCenterddl");
    CostCenterddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    var Yearddl = $("#Yearddl");
    Yearddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');  
    $("#txtAmount").val("");
    $("#txtCCReamarks").val("");
    $("#divCCInfoMsg").text("");
    $("#divCCInfoMsg").addClass("hidden");
    $("#btnAssignCCReset").hide();
    $.ajax({
        type: "POST",
        url: "/Budget/GetAssignCCTypes",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var CCTypeddl = $("#CCTypeddl");
            CCTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                CCTypeddl.append($("<option></option>").val(this['CCTypeID']).html(this['CCTypeDescription']));
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
   // ClearAssignDCA();
}

function ClearAssignDCA() {
    $("#ddlCc").prop("disabled", false);
    $("#ddlCc").prop('selectedIndex', 0);
    $("#divDCAYear").addClass('hidden');
    $("#divDCAGrid").addClass('hidden');
    $("#btnDCASubmit").addClass('hidden');
    $("#btnAssignDCAReset").addClass('hidden');
    $("#divDCAInfoMsg").text("");
    $("#divDCAInfoMsg").addClass("hidden");
    $("#txtCCtype").val("0");
    $("#txtCCBudget").val("0");
    $("#txtDCABudgetSubTotal").val("0");
    $("#divDCABudgetRemarks").addClass('hidden');
    $("#DCABudgetTable tbody").find("tr").remove();
    $("#divAmendBudgetCC").addClass('hidden');
    $("#ddlAmendBudgetCC").prop('disabled', false);
    $("#ddlAmendDCABudgetCCTypes").prop('disabled', false);
    $("#txtdone").val('0'); 
    $('#divDCADetails').addClass('hidden');
    $('#divAmendDetails').addClass('hidden');
    $("#divMultipleAmendDCAIfoMsg").text("");
    $("#divMultipleAmendDCAIfoMsg").addClass("hidden");
    $("#txtDCABudgetRemarks").val(" ");
    $("#ddlDCAYear").prop('selectedIndex', 0);
    $("#DCABudgetTable tbody tr").remove();    
   
    $("#ddlAmendDCASubType").prop('disabled', false);
    $("#ddlAmendDCAYear").prop('disabled', false);

    $("#ddlAmendDCASubType").prop('selectedIndex', 0);
    $("#ddlAmendDCAYear").prop('selectedIndex', 0);

    $("#divAmendDCAYear").addClass('hidden');
    $("#divAmendDCASubType").addClass('hidden');
    $("#divNewDCABudgetfromAmend").addClass('hidden');

    $.ajax({
        type: "POST",
        url: "/Budget/GetBudgetCCDetails",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var CCddl = $("#ddlCc");
            CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                CCddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
    $.ajax({
        type: "POST",
        url: "/Budget/GetCostCenterTypes",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var CCTypeddl = $("#ddlAmendDCABudgetCCTypes");
            CCTypeddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                CCTypeddl.append($("<option></option>").val(this['CCTypeID']).html(this['CCTypeDescription']));
            });
           // BindBudgetCC();
            var CCddl = $("#ddlAmendBudgetCC");
            CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });

    //var CCddl = $("#ddlCc");
    //CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //$.ajax({
    //    type: "POST",
    //    url: "/Budget/GetBudgetCCDetails",
    //    data: '{}',
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        var CCddl = $("#ddlCc");
    //        CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //        $.each(response, function () {
    //            CCddl.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
    //        });
    //        BindBudgetCC();
            
    //    },
    //    failure: function (response) {
    //        alert(response.responseText);
    //    },
    //    error: function (response) {
    //        alert(response.responseText);
    //    }
    //});
    
    //RebindBudgetDCAGrid();
    //$("#tblDcaBudgetDetails tfoot tr").each(function () {
    //    var footerRow = $(this);
    //    footerRow.find("td").eq(0).html("");
    //    footerRow.find("td").eq(1).html("");
    //    footerRow.find("td").eq(2).html("");
    //});
    $("#budgetvalue").text('0');
    $("#balbudgetvalue").text('0');
    $("#tblDcaBudgetDetails tbody").find("tr").remove();
    $("#tbDcaAmendDetails tbody").find("tr").remove(); 
    $("#divAmendDCAInfoMsg").text("");
    $("#divAmendDCAInfoMsg").addClass("hidden");
  //ClearAssignCC();
}
//Amend CC and DCA

function BindBudgetCC(){
  
    $.ajax({
        type: "POST",
        url: "/Budget/GetBudgetAssignedCC",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {                  
            var CCddl1 = $("#ddlAmendBudgetCC");
            CCddl1.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(data, function () {                
                CCddl1.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
}


function InitializeCCDetailsGrid() {
    ccGrid = $('#tblCCDetails').DataTable({
        info: false,
        destroy: false,
        paging: false,
        lengthChange: false,
        searching: false,
        ordering: false,
        pagingType: false,  
        language: {
            "emptyTable": "No CCs Found"
        },
        pageLength: 50
    });
}
function AddCCBudget(budgetid, ccid, cccode, ccname, cctype, budgetvalue, budgetbalace, date) {
    clearCCAmend();
    $('#CCAmendModal').modal('show');
   // alert(cccode + "-" + ccname + "-" + budgetvalue);
    $("#lblCcAmendCode").text(cccode);
    //$("#lblCcAmendtype").text("Add");
    $("#lblCcAmendName").text(ccname);
    $("#lblCcAmendBudget").text(budgetvalue);
    $("#lblCcAmendBudgetBalance").text(budgetbalace);
   // $("#lblCcAmendType").text(cctype);

    $("#txtCCBudgetold").val(budgetvalue);
    $("#txtCCBalanceOld").val(budgetbalace);
   // alert(budgetid);
    $("#txtCCBudgetid").val(budgetid);
    
}
function SubstracCCBudget(budgetid, ccid, cccode, ccname, cctype, budgetvalue, budgetbalace, date) {
    clearCCAmend();
   
    $('#CCAmendModal').modal('show');
    $("#lblCcAmendCode").text(cccode);
   // $("#lblCcAmendtype").text("Substract");
    $("#lblCcAmendName").text(ccname);
    $("#lblCcAmendBudget").text(budgetvalue);
    $("#lblCcAmendBudgetBalance").text(budgetbalace);
   // $("#lblCcAmendType").text(cctype);

    $("#txtCCBudgetold").val(budgetvalue);
    $("#txtCCBalanceOld").val(budgetbalace);
    $("#txtCCBudgetid").val(budgetid);
}

function AmendCCVerification() {
    
    var type = $("#ddlCCAmendType option:selected").val();   
    var amount = $("#AmendCCBudgetAmount").val();  
    var newbudget = 0, newbalance = 0;
    var oldBudget = $("#txtCCBudgetold").val();
    var oldBalance = $("#txtCCBalanceOld").val();       
    if (amount !== "") {
        
        if (type === 'Add') {
            var addingamount = parseFloat(amount) + parseFloat(oldBalance);
            //if (parseFloat(amount) > parseFloat(oldBudget)) {// ammount+balance is greater than cc budget
            //    $("#divAmendCCInfoMsg").text("");
            //    $("#divAmendCCInfoMsg").append("<div>Amount is greater than Budget</div>");
            //    $("#divAmendCCInfoMsg").addClass("alert-danger");
            //    $("#divAmendCCInfoMsg").removeClass("hidden alert-success");

            //}         
            //else {
                newbudget = parseFloat(oldBudget) + parseFloat(amount);
                newbalance = parseFloat(oldBalance) + parseFloat(amount);
                //  alert(newbudget + "-" + newbalance);
                $("#lblCcAmendBudget").html(newbudget);
                $("#lblCcAmendBudgetBalance").html(newbalance);
            //}

        } else {
            //alert("verifying");
            isValid = true;
            var errorMsg = "";
            //var balance = $("#lblCcAmendBudgetBalance").text();
            if (oldBalance == 0 || oldBalance=="") {
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
                    //newbudget = parseFloat(oldbudget)  parseFloat(amount);
                    newbudget = parseFloat(oldBudget) - parseFloat(amount);
                    newbalance = parseFloat(oldBalance) - parseFloat(amount);
                    $("#lblCcAmendBudget").html(newbudget);
                    $("#lblCcAmendBudgetBalance").text(newbalance);

                }

            }
        }
    }
    else {
        $("#lblCcAmendBudget").html(parseFloat(oldBudget).toFixed(2));
        $("#lblCcAmendBudgetBalance").html(parseFloat(oldBalance).toFixed(2));
    }
    


}
function clearCCAmend() {

    $("#lblCcAmendCode").text('');
   // $("#lblCcAmendtype").text('');
    $("#lblCcAmendName").text('');
    $("#lblCcAmendBudget").text("");
    $("#lblCcAmendBudgetBalance").text('');
   // $("#lblCcAmendType").text("");

    $("#txtCCBudgetold").val('');
    $("#txtCCBalanceOld").val('');
    $("#txtCCBudgetid").val('');
    $("#btnAmendCCSubmit").attr("disabled", false);
    $("#divAmendCCInfoMsg").text("");
    $("#divAmendCCInfoMsg").addClass("hidden");
    $("#AmendCCBudgetAmount").val("");
}
//Amend DCA Scripts
function DCAmendCcCodeChange() {
  
    //alert($("#txtDCAAmendCCName").val());

}
//function AmendDCABudget(DCABudgetId, DCACode, CCCode, DCABudgetValue, DCABudgetBalance, DCABudgetCreationdate) {
//    // alert('clicked----' + DCACode);
//    $("#txtBudgetDCACode").val(DCACode);
//    $('#DCAAmendModal').modal('show');
//}



function AddDCABudget(DCABudgetId, DCACode, CCCode, DCABudgetValue, DCABudgetBalance, DCABudgetCreationdate) {
    $('#DCAAmendModal').modal('show');
    $("#ddlDCAAmendType").prop('selectedIndex',0);
    $("#txtDCABudgetid").val(DCABudgetId);
    $("#txtDCABudgetold").val(DCABudgetValue);
    $("#txtDCABalanceold").val(DCABudgetBalance);

    $("#lblDCANameAmend").html(DCACode);
    $("#lblDCABudgetAmend").html(DCABudgetValue);
    $("#lblDCAAmendBudgetBalance").text(DCABudgetBalance);
   // $("#lblDCAAmendtype").text('Add');

    //hidden field detials

    //alert('Add');
}
function SubstracDCABudget(DCABudgetId, DCACode, CCCode, DCABudgetValue, DCABudgetBalance, DCABudgetCreationdate) {
    $('#DCAAmendModal').modal('show');
    $("#txtDCABudgetid").val(DCABudgetId);
    $("#txtDCABudgetold").val(DCABudgetValue);
    $("#txtDCABalanceold").val(DCABudgetBalance);

    $("#lblDCANameAmend").text(DCACode);
    $("#lblDCABudgetAmend").text(DCABudgetValue);
    $("#lblDCAAmendBudgetBalance").text(DCABudgetBalance);
    //$("#lblDCAAmendtype").text('Substract');
   
}
function AmendDCAVerification() {
    var type = $("#ddlDCAAmendType option:selected").val();
    var amount = $("#AmendDCABudgetAmount").val();
    var newbudget = 0, newbalance = 0;
    var newccbudget = 0, newccbalance = 0;
    //DCA
    var oldBudget = $("#txtDCABudgetold").val();
    var oldBalance = $("#txtDCABalanceold").val();
    //CC
    oldCCBudget = $("#txtDCCBudgetold").val();
    oldCCBalance = $("#txtDCCBalanceOld").val();
    //debugger;
    //alert(amount);
    if (amount != "") {
        if (type == 'Add') { 
            var addingamount = parseFloat(amount);
            if (parseFloat(addingamount) > parseFloat(oldCCBalance)) {//if adding amount is avaible in cc balance
                $("#divAmendDCAInfoMsg").text("");
                $("#divAmendDCAInfoMsg").append("<div>Amount is greater than the CC Balance</div>");
                $("#divAmendDCAInfoMsg").addClass("alert-danger");
                $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
            }            
            else {
                //add balance to dca balance
                newbudget = parseFloat(oldBudget) + parseFloat(amount);  //add amount to dca budget        
                newbalance = parseFloat(oldBalance) + parseFloat(amount);  //add amount to dca balance        
                //reduce cc budget
                newccbalance = parseFloat(oldCCBalance) - parseFloat(amount);
                //alert("new" + newbudget + "-" + newbalance);
                $("#lblDCABudgetAmend").html(parseFloat(newbudget).toFixed(2));
                $("#lblDCAAmendBudgetBalance").html(parseFloat(newbalance).toFixed(2)); 
                $("#lblDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2)); 

            }

        }
        if (type == 'Substract') {            
            isValid = true;
            var errorMsg = "";

            if (parseFloat(amount) > parseFloat(oldBalance)) {//if amount is greater than balance
                $("#divAmendDCAInfoMsg").text("");
                $("#divAmendDCAInfoMsg").append("<div>Amount is greater than the DCA Balance</div>");
                $("#divAmendDCAInfoMsg").addClass("alert-danger");
                $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
            }
            else {
                var substractdca = parseFloat(oldBalance) - parseFloat(amount);
                if (substractdca < 0) {// if substracting amount is available in dca balance
                        $("#divAmendDCAInfoMsg").text("");
                        $("#divAmendDCAInfoMsg").append("<div>Substract Amount is greater than the Balance</div>");
                        $("#divAmendDCAInfoMsg").addClass("alert-danger");
                        $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
                    }
                    else {                       
                       // if  add amount to CC balance and reduce dca balance & dca Budget
                       newbudget = parseFloat(oldBudget) - parseFloat(amount);
                       newccbalance = parseFloat(oldCCBalance) + parseFloat(amount);
                      newbalance = parseFloat(oldBalance) - parseFloat(amount);  
                    
                      $("#lblDCAAmendBudgetBalance").html(parseFloat(newbalance).toFixed(2));
                      $("#lblDCABudgetAmend").html(parseFloat(newbudget).toFixed(2));
                      $("#lblDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2));
                    }
                }            
        }
    
    }
    else {        
        //alert(oldBudget + "" + oldBalance);
        $("#lblDCCAmendBudget").html(parseFloat(oldCCBudget).toFixed(2));
        $("#lblDCCAmendBalance").html(parseFloat(oldCCBalance).toFixed(2));
        $("#lblDCABudgetAmend").html(parseFloat(oldBudget).toFixed(2));
        $("#lblDCAAmendBudgetBalance").html(parseFloat(oldBalance).toFixed(2));
    }    
}

function SubmitAmendDCAData() {    
    isValid = true;
    var errorMsg = "";
    var type = $("#ddlDCAAmendType option:selected").val();
    var amount = $("#AmendDCABudgetAmount").val();
    var newbudget = 0, newbalance = 0;
    var newccbudget = 0, newccbalance = 0;
    //DCA
    var oldBudget = $("#txtDCABudgetold").val();
    var oldBalance = $("#txtDCABalanceold").val();
    //CC
    oldCCBudget = $("#txtDCCBudgetold").val();
    oldCCBalance = $("#txtDCCBalanceOld").val();
    
    if (amount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (type == 'Add') {
        var addingamount = parseFloat(amount);
        if (parseFloat(addingamount) > parseFloat(oldCCBalance)) {//if adding amount is avaible in cc balance
            errorMsg += "<p style='margin-top:-5px!important;'>Amount is not available in CC Balance</p>";
            isValid = false;
        }            

    }
    if (type == 'Substract') {
        var substractdca = parseFloat(oldBalance) - parseFloat(amount);
        if (substractdca < 0) {// if substracting amount is available in dca balance
            errorMsg += "<p style='margin-top:-5px!important;'>Amount is not available in DCA Balance</p>";
            isValid = false;
        }
    }

    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divAmendDCAInfoMsg").text("");
        $("#divAmendDCAInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divAmendDCAInfoMsg").addClass("alert-danger");
        $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
        $("#divAmendDCAInfoMsg").attr("disabled", false);
    }
    else {
        $("#btnAmendDCASubmit").attr("disabled", true);
        $("#divAmendDCAInfoMsg").text("");
        $("#divAmendDCAInfoMsg").addClass("hidden");

        var cctype = $("#ddlAmendDCABudgetCCTypes option:selected").text();
        var fyyear = '';
        if (cctype !== 'Performing') { fyyear = $("#txtDCABudgetfyear").val();}
      
        //submit data to dca amend 
        var amendsingleDCA = null;
        var Stype=$("#txtDCABudgetSubtype").val();
        var cctypeid = $("#txtDCABudgetCCtypeId").val();
        var cc =$("#lblDCCAmendCCCode").text()
        if (type == 'Add') {
            amendsingleDCA = {
                CCCode: $("#lblDCCAmendCCCode").text(),
                DCACode: $("#lblDCANameAmend").text(),
                AmendedValue: $("#AmendDCABudgetAmount").val(),
                AmendmentType: 'Add',
                DCABudgetId: $("#txtDCABudgetid").val(),
                CCBudgetId: $("#txtDCCBudgetid").val(),
                CCBalance: $("#lblDCCAmendBalance").text(),
                DCABudget: $("#lblDCABudgetAmend").text(),
                DCABudgetBalance: $("#lblDCAAmendBudgetBalance").text(),
                FYYear: fyyear
            };
        }
        if (type == 'Substract') {         
            amendsingleDCA = {
                CCCode: $("#lblDCCAmendCCCode").text(),
                DCACode: $("#lblDCANameAmend").text(),
                AmendedValue: $("#AmendDCABudgetAmount").val(),
                AmendmentType: 'Substract',
                DCABudgetId: $("#txtDCABudgetid").val(),
                CCBudgetId: $("#txtDCCBudgetid").val(),
                CCBalance: $("#lblDCCAmendBalance").text(),
                DCABudget: $("#lblDCABudgetAmend").text(),
                DCABudgetBalance: $("#lblDCAAmendBudgetBalance").text() ,           
                FYYear: fyyear

            };
        }       
        addFailMsg = "Error Occurred While Amending DCA Budget.";
        addSuccessMsg = "DCA Budget Amended Successfully.";
        $("#btnAmendDCASubmit").prop("disabled", true);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Budget/SaveSingleDCAAmendBudget',
            data: { amendDcaBudget: amendsingleDCA },
            success: function (Data) {
                if (Data.saveStatus === "Submited") {
                    $("#divAmendDCAInfoMsg").text(addSuccessMsg);
                    $("#divAmendDCAInfoMsg").removeClass("hidden alert-danger");
                    $("#divAmendDCAInfoMsg").addClass("alert-success");
                    $("#txtdone").val('1');
                    $("#btnMultipleAmendDCASubmit").prop("disabled", false);
                    DisableDeleteButtons(); 
                    RebindBudgetDCAGrid();
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: '/Budget/GetBudgetAssignedCCByID',
                        data: { CCCode: $("#lblDCCAmendCCCode").text(), Year: fyyear },
                        success: function (Data) {
                            //debugger;
                            if ($("#lblDCCAmendCCCode").text() !== "") {
                                $("#budgetvalue").text(Data[0].BudgetValue);
                                $("#balbudgetvalue").text(Data[0].BalanceBudget);

                            }
                            else {
                                $("#budgetvalue").text('0');
                                $("#balbudgetvalue").text('0');
                            }
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
                            $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                            $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
                        }
                    });
                }
                else {
                    $("#divAmendDCAInfoMsg").text(Data.saveStatus);
                    $("#divAmendDCAInfoMsg").addClass("alert-danger");
                    $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
                    $("#txtdone").val('1');
                    DisableDeleteButtons();
                    $("#btnAmendDCASubmit").prop("disabled", false);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divAmendDCAInfoMsg").text(addFailMsg);
                $("#divAmendDCAInfoMsg").addClass("alert-danger");
                $("#txtdone").val('1');
                $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
                DisableDeleteButtons();
                $("#btnAmendDCASubmit").prop("disabled", false);
            }
        });

    }
}

function DisableDeleteButtons() {

    var count = $("#tbDcaAmendDetails tbody tr").length;
    if (count > 0) {
        var currentRow = $(this);
        $("#tbDcaAmendDetails tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find('input[type="button"]').prop('disabled',true);
        });
    }
}

function SubmitMultipleAmendDCAData() {   
    var count = $("#tbDcaAmendDetails tbody tr").length;
    var balbudget = $("#balbudgetvalue").text();
    if (count > 0) {
        isValid = true;
        var errorMsg = "";
        var checkcount = 0;
        $("#tbDcaAmendDetails tbody tr").each(function () {
            var currentRow = $(this);
            var check = currentRow.find('input[type="checkbox"]').is(':checked');
            if (check == false) {
                checkcount = checkcount + 1;
            }
        });
        if (checkcount > 0) {    
            errorMsg += "<p style='margin-top:-5px!important;'>Verify Amendmends To Submit</p>";
            isValid = false;
        }
        if (balbudget < 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Insufficient Cost Center Budget</p>";
            isValid = false;
        }
        if (!isValid) {

            var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divMultipleAmendDCAIfoMsg").text("");
            $("#divMultipleAmendDCAIfoMsg").append(finalerror1 + errorMsg + "</div>");
            $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
            $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divMultipleAmendDCAIfoMsg").text("");
            $("#divMultipleAmendDCAIfoMsg").addClass("hidden");
            SaveMultipleDCAAmend();
        }

    }
    
   
}
function SaveMultipleDCAAmend() {
    var amend = {};
    var rows = [];
    var amendids = "";
   
    $("#tbDcaAmendDetails tbody tr").each(function () {     
        var currentRow = $(this);
        var id = currentRow.find("td").eq(1).find("select option:selected").val();
        var type = currentRow.find("td").eq(2).find("input[type='text']").val();  
     
        amendids = amendids + currentRow.find(".amendid").html() + ',';
        //rows.push({
            //    DCABudgetAmendmentId: currentRow.find(".amendid").html()
            //});

    });
     amend = {
         AmendIDs: amendids,
         CCCode:$("#ddlAmendBudgetCC option:selected").val()
    };
    addFailMsg = "Error Occurred While Amending DCA Budget.";
    addSuccessMsg = "DCA Budget Amended Successfully.";
    $("#btnMultipleAmendDCASubmit").prop("disabled", true);
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Budget/MultipleDCAAmend',
        data: { amendDcaBudget: amend },
        success: function (Data) {
            if (Data.saveStatus === "Submited") {
                
                $("#divMultipleAmendDCAIfoMsg").text(addSuccessMsg);
                $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-danger");
                $("#divMultipleAmendDCAIfoMsg").addClass("alert-success");
                DisableDeleteButtons();
                $("#txtdone").val('1');
            }
            else {
                $("#btnMultipleAmendDCASubmit").prop("disabled", false);
                $("#divMultipleAmendDCAIfoMsg").text(Data.saveStatus);
                $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
                $("#txtdone").val('1');
                DisableDeleteButtons();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnMultipleAmendDCASubmit").prop("disabled", false);
            $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
            $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
            $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
            $("#txtdone").val('1');
            DisableDeleteButtons();
        }
    });

}
function AmendNewDCA() {    
    $('#NewDCAAmend').modal('show');
    var selectedcc = $("#ddlAmendBudgetCC").val();
    $.ajax({
        type: "POST",
        url: "/Budget/GetUnAmendedDCAByCCID",     
        data: JSON.stringify({ CCCode: selectedcc  }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var DCAddl = $("#ddlUnAmendedDCA");
            DCAddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(data, function () {
                DCAddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
            });
           $("#NewAmendDCADetails").addClass('hidden');
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
}
function ResetMultipleAmendData() {
    var submit = $("#txtdone").val();
    var noofrows = $("#tbDcaAmendDetails tbody tr").length;
    if (noofrows > 0 && submit==0) {        
        $("#divMultipleAmendDCAIfoMsg").text("Please delete the Amended Budget");
        $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
        $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
    }
    else {
        //location.reload();
        ClearAssignDCA();
    }
   

}

function NewAmendDCAVerification() {
    var amount = $("#NewDCABudgetAmount").val();
    var oldccbalance = $("#txtNewDCCBalanceOld").val();
    if (amount != "") {        
        if (parseFloat(oldccbalance) < parseFloat(amount)) {
            $("#divNewAmendDCAInfoMsg").text("");
            $("#divNewAmendDCAInfoMsg").append("<div>Amount is greater than CC Balance</div>");
            $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
            $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");

        }
        else {
            var newccbalance = parseFloat(oldccbalance) - parseFloat(amount);
            $("#lblNewDCCAmendBalance").html(parseFloat(newccbalance).toFixed(2));
            $("#divNewAmendDCAInfoMsg").text("");
            $("#divNewAmendDCAInfoMsg").addClass("hidden");
        }
    }
    else {
        $("#lblNewDCCAmendBalance").html(parseFloat(oldccbalance).toFixed(2));
        $("#divNewAmendDCAInfoMsg").text("");
        $("#divNewAmendDCAInfoMsg").addClass("hidden");

    }

}
function SubmitNewAmendDCAData() {
    //debugger;
    isValid = true;
    var errorMsg = "";
    var amount = $("#NewDCABudgetAmount").val();
    var ccddlindex = $("#ddlAmendBudgetCC option:selected").index();
    var Year = $("#lblNewCCfyear").text();
    var balbudget = $("#balbudgetvalue").text();
    if (amount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
        isValid = false;
    }
    if (balbudget < 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Insufficent Cost Center Balance</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewAmendDCAInfoMsg").text("");
        $("#divNewAmendDCAInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
        $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewAmendDCAInfoMsg").text("");
        var cc = $("#ddlAmendBudgetCC option:selected").val();
        var ccindex = $("#ddlAmendBudgetCC option:selected").index();
        var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
        var fyear = '';
        if (cctypeid !== "6") {           
            var fyear = $("#ddlAmendDCAYear option:selected").val();        
         
        }
        rows = [];
        rows.push({
            DCACode: $("#ddlUnAmendedDCA option:selected").val(),
            DCABudgetValue: amount
        
        });

        assignDCA = {
            CCCode: $("#ddlAmendBudgetCC option:selected").val(),
            DCABudgetDetails: rows,
            FYyear: fyear
        };

        
    addFailMsg = "Error Occurred While Adding New Budget Details.";
    addSuccessMsg = "Budget Added Successfully.";
        $("#btnNewAmendDCASubmit").prop("disabled", true);
        
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Budget/AssignDCABudgetFromAmendment',
        data: { assignDCABudget: assignDCA },
        success: function (Data) {
            if (Data.saveStatus === "Submited") {                
                $("#divNewAmendDCAInfoMsg").text(addSuccessMsg);
                $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-danger");
                $("#divNewAmendDCAInfoMsg").addClass("alert-success");
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Budget/GetBudgetAssignedCCByID',
                    data: { CCCode: cc, Year: fyear },
                    success: function (Data) {
                        if (ccindex !== "") {
                            $("#budgetvalue").text(Data[0].BudgetValue);
                            $("#balbudgetvalue").text(Data[0].BalanceBudget);

                        }
                        else {
                            $("#budgetvalue").text('0');
                            $("#balbudgetvalue").text('0');
                        }
                        //$("#tblDcaBudgetDetails tfoot tr").each(function () {
                        //    var footerRow = $(this);
                        //    if (ccindex !== 0) {
                               
                        //        //footerRow.find("td").eq(0).html("<label>" + cc + "," + $("#txtDCAAmendCCName").val() + "</label>");
                        //        //footerRow.find("td").eq(1).html("Budget Assigned:<label>" + $("#txtTempOldCCBudgetForAmendDCA").val() + "</label>");
                        //        //footerRow.find("td").eq(2).html("Balance:<label>" + $("#txtTempOldCCBalanceForAmendDCA").val() + " </label>");
                        //    }
                        //    else {                                
                        //        //footerRow.find("td").eq(0).html("");
                        //        //footerRow.find("td").eq(1).html("");
                        //        //footerRow.find("td").eq(2).html("");
                        //    }
                        //});
                        //$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th>' + cc + '</th><th>' + $("#txtDCAAmendCCName").val() + '</th><th>Budget Assigned: ' + $("#txtTempOldCCBudgetForAmendDCA").val() + '</th><th>Balance: ' + $("#txtTempOldCCBalanceForAmendDCA").val() + '</th><th></th><th></th></tr>');
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
                        $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                        $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
                    }
                });
            }
            else {
                $("#divNewAmendDCAInfoMsg").text(Data.saveStatus);
                $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
                $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");
                $("#btnNewAmendDCASubmit").prop("disabled", false);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divNewAmendDCAInfoMsg").text(addFailMsg);
            $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
            $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");
            $("#btnNewAmendDCASubmit").prop("disabled", false);
        }

    });
}
}
function RebindBudgetDCAGrid() {
    //debugger;
    var cc = $("#ddlAmendBudgetCC option:selected").val();
    var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
    if (cctypeid === "6") {
        var Stype = $("#ddlAmendDCASubType option:selected").text();
        var year = '';
        $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + cc + '&Subtype=' + Stype + '&Year=' + year + '&CCTypeId=' + cctypeid + '');
    }
    else {
        var year = $("#ddlAmendDCAYear option:selected").val();
        var Stype1 = '';
        $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + cc + '&Subtype=' + Stype1 + '&Year=' + year + '&CCTypeId=' + cctypeid + '');
    }
   // $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + $("#ddlAmendBudgetCC option:selected").val() + '');
    //ShowAmendDCAGrid();
    
    GetBudgetAsignedCCDetails(cc, year);
    BindAmendGrid();
    $("#divMultipleAmendDCAIfoMsg").text("");
    $("#divMultipleAmendDCAIfoMsg").addClass("hidden");
    //alert($("#txtDCAAmendCCName").val());
    //$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th>' + cc + '</th><th>' + $("#txtDCAAmendCCName").val() + '</th><th>Budget Assigned: ' + $("#txtTempOldCCBudgetForAmendDCA").val() + '</th><th>Balance: ' + $("#txtTempOldCCBalanceForAmendDCA").val() + '</th><th></th><th></th></tr>');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Budget/GetBudgetAssignedCCByID',
        data: { CCCode: cc, Year: year },
        success: function (Data) {
            //debugger;
            if (cc !== "") {
                $("#budgetvalue").text(Data[0].BudgetValue);
                $("#balbudgetvalue").text(Data[0].BalanceBudget);

            }
            else {
                $("#budgetvalue").text('0');
                $("#balbudgetvalue").text('0');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
            $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
            $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
        }
    });

}
function BindAmendGrid() {
    var ccvalue = $("#ddlAmendBudgetCC option:selected").val();
   
    $.ajax({
        type: "POST",
        url: '/Budget/GetAmendedDCA',
        data: JSON.stringify({ CCcode: ccvalue }),
        //data: '{CCcode:' + ccvalue + '}',      
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            // alert("success");   
            $("#tbDcaAmendDetails tbody tr").remove();
            var count1 = Object.keys(response).length;
            var msg = "";            
            if (count1 > 0) {
                $.each(response, function () {
                    var id = this['PendingTransactionId'];
                    if (id !== "") {
                        var newRow = $("<tr>");
                        var cols = "";
                        cols += '<td style="text-align:center" class="amendid">' + this['PendingTransactionId'] + '</td>';
                        cols += '<td style="text-align:center"><input type="checkbox" name="AmendDCACheck" id="AmendDCACheck" /></td>';
                        cols += '<td style="text-align:center;width:10% !important" class="dca">' + this['DCACode'] + '</td>';
                        cols += '<td style="text-align:left;font-weight:bold;word-wrap:break-word;word-break:break-all;white-space:normal;width:25% !important" class="dca">' + this['DCAName'] + '</td>';
                        cols += '<td style="text-align:center" class="amount">' + this['AmendedValue'] + '</td>';
                        var type = this['AmendmentType'];
                        if (type === 'Add') {
                            cols += '<td style="text-align:center" class="type">Add</td>';
                        }
                        if (type === 'Substract') {
                            cols += '<td style="text-align:center" class="type">Substract</td>';
                        }
                        if (type === 'New') {
                            cols += '<td style="text-align:center;" class="type">New</td>';
                        }
                        cols += '<td style="text-align:center"><input type="button" class="ibtnAmendDCADel btn btn-md btn-danger" value="Delete"></td>';
                        newRow.append(cols);
                        $("#tbDcaAmendDetails").append(newRow);
                        $("#tbDcaAmendDetails").removeClass("hidden");

                    }

                });
                $("#divAmendDetails").removeClass("hidden");
            }
            else { $("#divAmendDetails").addClass("hidden"); }
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });

}
//function OpenAmendCCBudgetPopup(budgetid, ccid, cccode, ccname, cctype, budgetvalue, budgetbalace, date, year, subtype) {
//    //clearCCAmend();
//    //debugger;
//    $('#CCAmendModal').modal('show');
//    $("#divAmendCC").addClass('hidden');
//    $("#lblCcAmendCode").text(cccode);
//    $("#lblCcAmendName").text(ccname);
//    $("#lblCcAmendBudget").text(budgetvalue);
//    $("#lblCcAmendBudgetBalance").text(budgetbalace);
//    $("#lblCcAmendType").text(cctype);
//    $("#txtCCBudgetold").val(budgetvalue);
//    $("#txtCCBalanceOld").val(budgetbalace);
//    $("#txtCCBudgetid").val(budgetid);
//    $("#txtCCAmendYear").val(year);
//    $("#AmendCCBudgetAmount").val("");
//    $("#btnAmendCCSubmit").attr("disabled", false);
//    $("#divAmendCCInfoMsg").text("");
//    $("#divAmendCCInfoMsg").addClass("hidden");
//    $("#txtCCAmendSubtype").val(subtype);
//    $("#lblamdccyear").text(year);
//}
function OpenCloseCCBudgetPopup() {


}
function CCAmendTypeChange() {
    $("#divAmendCC").removeClass('hidden');
    $("#AmendCCBudgetAmount").val("");
    $("#btnAmendCCSubmit").attr("disabled", false);
    $("#ddlCCAmendType").attr("disabled", true);
    $("#divAmendCCInfoMsg").text("");
    $("#divAmendCCInfoMsg").addClass("hidden");
}

function AmendDCABudget(DCABudgetId, DCACode, CCCode, DCABudgetValue, DCABudgetBalance, DCABudgetCreationdate, cctype, Dcaname, CCName, fyear, subtype, cctypeid) {
    //alert(fyear);
    $('#DCAAmendModal').modal('show');
    $("#ddlDCAAmendType").prop("disabled", false);
    $("#ddlDCAAmendType").prop('selectedIndex', 0);
    $("#divDCAAmendDetails").addClass('hidden');
    $("#txtDCABudgetid").val(DCABudgetId);
    $("#txtDCABudgetold").val(DCABudgetValue);
    $("#txtDCABalanceold").val(DCABudgetBalance);
    $("#lblDCANameAmend").text(DCACode);
    $("#lblDCABudgetAmend").text(DCABudgetValue);
    $("#lblDCAAmendBudgetBalance").text(DCABudgetBalance);
    $("#txtamendcctype").val(cctype);
    $("#lblDCANameAmendcodeandname").text(DCACode + "," + Dcaname);
    $("#divNewAmendDCAInfoMsg").text("");
    $("#divNewAmendDCAInfoMsg").addClass("hidden");
    $("#divAmendDCAInfoMsg").text("");
    $("#divAmendDCAInfoMsg").addClass("hidden");
    $("#btnAmendDCASubmit").prop("disabled", false);
    $("#btnNewAmendDCASubmit").prop("disabled", false);
    $("#AmendDCABudgetAmount").val("");
    $("#NewDCABudgetAmount").val("");
    $("#txtDCABudgetfyear").val(fyear);
    $("#txtDCABudgetSubtype").val(subtype);
    $("#txtDCABudgetCCtypeId").val(cctypeid);
}
function CloseDCABudget(DCABudgetId, DCACode, CCCode, DCABudgetValue, DCABudgetBalance, DCABudgetCreationdate) {


}
//function DCAAmendTypeChange() {    
//    $("#divDCAAmendDetails").removeClass('hidden');
//    var type = $("#ddlDCAAmendType option:selected").val();
//    var selectedcc = $("#ddlAmendBudgetCC option:selected").val();  

//    if (type === "New") {
//        console.log('HI');
//        $("#divNewDCABudgetAssignInAmend").removeClass('hidden');
//        $("#divOldDCABudgetAssignInAmend").addClass('hidden');
//        $.ajax({
//            type: "POST",
//            url: "/Budget/GetUnAmendedDCAByCCID",
//            data: JSON.stringify({ CCCode: selectedcc }),
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (data) {                
//                var DCAddl = $("#ddlUnAmendedDCA");
//                DCAddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
//                $.each(data, function () {
//                    DCAddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
//                });
//                $("#NewAmendDCADetails").addClass('hidden');
//                $("#ddlDCAAmendType").prop("disabled", "true");
//            },
//            failure: function (response) {
//            },
//            error: function (response) {
//            }
//        });
//    }
//    else {
//        console.log('HI1');
//        $("#divOldDCABudgetAssignInAmend").removeClass('hidden');
//        $("#divNewDCABudgetAssignInAmend").addClass('hidden');
//        $("#ddlDCAAmendType").prop("disabled", "true");

       
//    }
//}



function AmendCCBudgetCCTypesChange() {

    var cctype = $("#ddlAmendCCBType option:selected").text();

    var cctypeindex = $("#ddlAmendCCBType option:selected").index();

    if (cctypeindex !== 0) {
        if (cctype === 'Performing') {

            $("#divAmendCCGrid").addClass('hidden');
            $("#divAmendCCYear").addClass('hidden');
            $("#divAmendCCSubType").removeClass('hidden');    
            $("#divAmendccgridbtn").removeClass('hidden');
        }
        else {

            $("#divAmendCCGrid").addClass('hidden');
            $("#divAmendCCYear").removeClass('hidden');
            $("#divAmendCCSubType").addClass('hidden');    
            $("#divAmendccgridbtn").removeClass('hidden');
        }
       
    }
    else {
        $("#divAmendCCGrid").addClass('hidden');
        $("#divAmendCCYear").addClass('hidden');
        $("#divAmendCCSubType").addClass('hidden');    
        $("#divAmendccgridbtn").addClass('hidden');
    }

}
function ResetAmendCCGrid() {
    $("#divAmendCCGrid").addClass('hidden');
    $("#divAmendCCYear").addClass('hidden');
    $("#divAmendCCSubType").addClass('hidden');
    $("#divAmendccgridbtn").addClass('hidden');

    $("#ddlAmendCCSubType").prop("disabled", false);   
    $("#ddlAmendCCYear").prop("disabled", false);
    $("#ddlAmendCCBType").prop("disabled", false);

    $("#ddlAmendCCBType").prop('selectedIndex', 0);
    $("#ddlAmendCCYear").prop('selectedIndex', 0);
    $("#ddlAmendCCSubType").prop('selectedIndex', 0);
}




function ShowNewAmendDCAModel() {
    var selectedcc = $("#ddlAmendBudgetCC option:selected").val();   
    var cctype = $("#ddlAmendDCABudgetCCTypes option:selected").text();
    if (cctype === "Performing") {
        var Stype = $("#ddlAmendDCASubType option:selected").text();
        var year = '';
        $.ajax({
            type: "POST",
            url: "/Budget/GetUnAmendedDCAByCCID",
            data: JSON.stringify({ CCCode: selectedcc, SubType: Stype, FnYear: '', CCtype: cctype  }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var DCAddl = $("#ddlUnAmendedDCA");
                DCAddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(data, function () {
                    DCAddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                });
                $('#NewDCAAmendModal').modal('show');
                $("#NewAmendDCADetails").addClass('hidden');
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Budget/GetBudgetAssignedCCByID',
                    data: { CCCode: selectedcc, Year: '' },
                    success: function (Data) {     
                        if (selectedcc !== "") {
                            $("#budgetvalue").text(Data[0].BudgetValue);
                            $("#balbudgetvalue").text(Data[0].BalanceBudget);

                        }
                        else {
                            $("#budgetvalue").text('0');
                            $("#balbudgetvalue").text('0');
                        }                      
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
                        $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                        $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
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
        var fyear = $("#ddlAmendDCAYear option:selected").val();
        var Stype1 = '';
        $.ajax({
            type: "POST",
            url: "/Budget/GetUnAmendedDCAByCCID",
            data: JSON.stringify({ CCCode: selectedcc, SubType: Stype1, FnYear: fyear, CCtype: cctype }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var DCAddl = $("#ddlUnAmendedDCA");
                DCAddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(data, function () {
                    DCAddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                });
             
                $('#NewDCAAmendModal').modal('show');
                $("#NewAmendDCADetails").addClass('hidden');
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Budget/GetBudgetAssignedCCByID',
                    data: { CCCode: selectedcc, Year: fyear },
                    success: function (Data) {
                        if (selectedcc !== "") {
                            $("#budgetvalue").text(Data[0].BudgetValue);
                            $("#balbudgetvalue").text(Data[0].BalanceBudget);

                        }
                        else {
                            $("#budgetvalue").text('0');
                            $("#balbudgetvalue").text('0');
                        }
                        //$("#tblDcaBudgetDetails tfoot tr").each(function () {
                        //    var footerRow = $(this);
                        //    if (selectedcc !== "") {
                        //        footerRow.find("td").eq(0).html("<label>" + selectedcc + "," + Data[0].CC_Name + "</label>");
                        //        footerRow.find("td").eq(1).html("Budget Assigned:<label>" + Data[0].BudgetValue + "</label>");
                        //        footerRow.find("td").eq(2).html("Balance:<label>" + Data[0].BalanceBudget + " </label>");
                        //    }
                        //    else {
                        //        footerRow.find("td").eq(0).html("");
                        //        footerRow.find("td").eq(1).html("");
                        //        footerRow.find("td").eq(2).html("");
                        //    }
                        //});
                        ////$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th>' + cc + '</th><th>' + $("#txtDCAAmendCCName").val() + '</th><th>Budget Assigned: ' + $("#txtTempOldCCBudgetForAmendDCA").val() + '</th><th>Balance: ' + $("#txtTempOldCCBalanceForAmendDCA").val() + '</th><th></th><th></th></tr>');
                        //$("#tblDcaBudgetDetails tfoot tr").show();
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
                        $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                        $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
                    }
                });
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
       
    }
        //$("#divNewDCABudgetAssignInAmend").removeClass('hidden');
        //$("#divOldDCABudgetAssignInAmend").addClass('hidden');
  


}

//End of Assign CC and DCA Budget scripts