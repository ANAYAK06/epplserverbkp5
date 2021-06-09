

$(document).ready(function () {
    $("table.order-list.dcaAmend").on("click", ".ibtnAmendDCADel", function (event) {
       
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
               // ShowAmendDCAGrid();
                var cc = $("#ddlAmendBudgetCC option:selected").val();
                var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
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
                    $("#btnCCSubmit").prop("disabled", true);
                }
                else {
                    $("#divCCInfoMsg").text(Data.saveStatus);
                    $("#divCCInfoMsg").addClass("alert-danger");
                    $("#divCCInfoMsg").removeClass("hidden alert-success");
                    $("#btnCCSubmit").prop("disabled", true);

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divCCInfoMsg").text(addFailMsg);
                $("#divCCInfoMsg").addClass("alert-danger");
                $("#divCCInfoMsg").removeClass("hidden alert-success");
            }
        });

    }

}
function DcaBudgetCcChange() {
  
    var CCindex = $("#ddlCc option:selected").index();
    var cctype; 
    if (CCindex == 0) {
        $("#divDCAYear").addClass('hidden');
        $("#divDCAGrid").addClass('hidden');
        $("#btnDCASubmit").addClass('hidden');
        $("#btnAssignDCAReset").addClass('hidden');
        $("#divDCAInfoMsg").text("");
        $("#divDCAInfoMsg").addClass("hidden");
        $("#txtCCtype").val("");
        $("#txtCCBudget").val("");
        $("#txtDCABudgetSubTotal").val("");
        $("#divDCABudgetRemarks").addClass('hidden');
        $("#ddlCc").prop("disabled", false);
    }
    else {
        
         //Get CC type and Budget amount
        $.ajax({
            type: "POST",
            url: "/Budget/GetCCDetailsbyID",
            data: '{CcCode:"'+$("#ddlCc option:selected").val()+'"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
               
                $.each(response, function () {
                    $("#txtCCtype").val(this['CostCenterTypeID']);
                    $("#txtCCBudget").val(this['AssignedBudget']);   
                    $("#txtcctypename").val(this['CostCenterTypeName']);   
                                       
                });
                $("#DCABudgetTable thead tr:gt(0)").each(function () {
                    var heraderRow = $(this);
                    //heraderRow.find("td").eq(2).html("CostCenter Budget:");
                    heraderRow.find("td").eq(2).html("<b style='color:#fff'>CostCenter Budget:"+ $("#txtCCBudget").val()+"</b>");

                });
                $("#DCABudgetTable tbody").find("tr").remove();                
                //if cctype performing hide year
                if ($("#txtcctypename").val() === "Performing") {
                    $("#divDCAYear").addClass('hidden');

                }
                else {
                    $("#divDCAYear").removeClass('hidden');
                }
                   //Get DCACode for Budget with CC type
                $.ajax({
                    type: "POST",
                    url: "/Budget/GetBudgetDCADetails",
                    data: '{CcTypeID:"' + $("#txtCCtype").val() + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var count1 = Object.keys(response).length;
                       // alert(count1);
                        if (count1>0) {
                            var count = $("#DCABudgetTable tbody tr").length;

                            $.each(response, function () {                                                      
                                var newRow = $("<tr>");
                                var cols = "";
                                count = count + 1;
                                cols += '<td style="text-align:center">' + count + '</td>';
                                cols += '<td style="text-align:center;display:none">' + this['DCACode'] + '</td>';
                                cols += '<td style="text-align:center">' + this['DCACode']+','+this['DCAName'] + '</td>';
                                cols += '<td style="text-align:center"><input class="form-control" data-val="true" id="txtBudgetDCAAmount" name="txtBudgetDCAAmount" type="text" onkeypress = "return ValidateAmount(this,event);" , onKeyup = "DCABudgetChange()"/></td>';
                                cols += '<td style="text-align:center"><input type="checkbox" name="chkDeduction"></td></tr>';
                                newRow.append(cols);
                                $("table.order-list.dcabudget").append(newRow);
                            });
                            //if (CCindex != 6) {
                            //    $("#divDCAYear").removeClass('hidden');
                            //}
                            $("#divDCAGrid").removeClass('hidden');
                            $("#btnDCASubmit").removeClass('hidden');
                            $("#btnAssignDCAReset").removeClass('hidden');
                            $("#divDCABudgetRemarks").removeClass('hidden');
                            $("#DCABudgetTable tfoot tr").each(function () {
                                footerRow = $(this);
                                footerRow.find("td").eq(2).html("Sub Total:<b>0</b>");
                            });
                            $("#divDCAInfoMsg").text("");
                            $("#divDCAInfoMsg").addClass("hidden");
                            $("#ddlCc").prop("disabled", true);
                        }
                        else {

                            $("#divDCAInfoMsg").append("<div>No DCA Found</div>");
                            $("#divDCAInfoMsg").addClass("alert-danger");
                            $("#divDCAInfoMsg").removeClass("hidden alert-success");
                        }
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
function DCASubmitData() {
    
    var tablerowcount = $("#DCABudgetTable tbody tr").length;
    if (tablerowcount > 0) {
    isValid = true;
    var errorMsg = "";

        if ($("#txtcctypename").val() === "Performing") {
            $("#divDCAYear").addClass('hidden');

        }
        else {
            var year = $("#ddlDCAYear option:selected").index();
            if (year == 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Financial Year</p>";
                isValid = false;
            }
        }
   
    //var ccddl = $("#ddlCc option:selected").index();
    //if (ccddl == 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
    //        isValid = false;
    //}
    //if (ccddl != 6) {
    //    var year = $("#ddlDCAYear option:selected").index();
    //    if (year == 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Financial Year</p>";
    //        isValid = false;
    //    }
    //}
    var remarks = $("#txtDCABudgetRemarks").val();
    if (remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
      
        var amountcount = 0,remarkscount=0,checkcount=0,selectedcheck=0,validcount=0;
        $("#DCABudgetTable tbody tr").each(function () {
            var currentRow = $(this);
            var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
           // var remarks = currentRow.find("td").eq(3).find("textarea").val();
            var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
            if (checkbox === false) {
                checkcount = checkcount + 1;
            }
            if (checkbox === false && amount!=="" ) {

                validcount = validcount + 1;
            }
            else {

                selectedcheck = selectedcheck + 1;
            }
        });
       
        if (checkcount === tablerowcount ) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check DCA Code to Assign budget</p>";
            isValid = false;
        }
        else if (validcount >0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check DCA Code to Assign budget</p>";
            isValid = false;
        }
        if (selectedcheck>0) {
           
            $("#DCABudgetTable tbody tr").each(function () {
                var currentRow = $(this);
                var amount = currentRow.find("td").eq(3).find("input[type='text']").val();
                var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
                //alert(amount + "" + checkbox);
                if (checkbox == true) {
                    if (amount == "") {
                        amountcount = amountcount + 1;
                    }                    
                    
                }
            });
            if (amountcount >0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Dca Budget</p>";
                isValid = false;
            }      
        }
        var DCABudget = $("#txtDCABudgetSubTotal").val();
        var CCAmount = $("#txtCCBudget").val();
        if (parseFloat(DCABudget) > parseFloat(CCAmount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Dca Budget is greater than CC Budget</p>";
            isValid = false;
        }
       
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divDCAInfoMsg").text("");
            $("#divDCAInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divDCAInfoMsg").addClass("alert-danger");
            $("#divDCAInfoMsg").removeClass("hidden alert-success");
        }
        else {
            $("#divDCAInfoMsg").text("");
            $("#divDCAInfoMsg").addClass("hidden");
            //Insert DCA Budget in to db
            //SaveDCABudget();
            var totalRowCount = $("#DCABudgetTable tbody tr").length;
            if (totalRowCount > 0) {
                var DcaCodes = '', amounts = '';
                $("#DCABudgetTable tbody tr").each(function () {
                    var currentRow = $(this);
                    var dcacode = currentRow.find("td").eq(1).html();
                    var dcaAmount = currentRow.find("td").eq(3).find("input[type='text']").val();
                    var checkbox = currentRow.find("td").eq(4).find("input[type='checkbox']").is(":checked");
                    if (checkbox == true) {
                        if (dcaAmount != "" && dcaAmount != null) {
                            DcaCodes += dcacode + ",";
                            amounts += dcaAmount + ",";
                            //GstStatids += state + ",";
                            //GstNos += gstno + ",";
                        }
                    }
                });               
                if ($("#txtcctypename").val() === "Performing") {
                    var peryear = '';
                    $.ajax({
                        type: "POST",
                        url: "/Budget/SaveDCABudget",
                        data: '{DCACode:"' + DcaCodes + '",DcaAmounts:"' + amounts + '",CCCode:"' + $("#ddlCc option:selected").val() + '",FYyear:"' + peryear + '",Remarks:"' + $("#txtDCABudgetRemarks").val() + '",Action:"New",OldBudgetAmount:"0",CreatedBy:"' + $("#txtAssignCCBudgetCreatedby").val() + '"}',
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
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.responseText);
                            // alert(thrownError);
                        }
                    });
                }
                else {
                    
                    $.ajax({
                        type: "POST",
                        url: "/Budget/SaveDCABudget",
                        data: '{DCACode:"' + DcaCodes + '",DcaAmounts:"' + amounts + '",CCCode:"' + $("#ddlCc option:selected").val() + '",FYyear:"' + $("#ddlDCAYear option:selected").val() + '",Remarks:"' + $("#txtDCABudgetRemarks").val() + '",Action:"New",OldBudgetAmount:"0",CreatedBy:"' + $("#txtAssignCCBudgetCreatedby").val() + '"}',
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
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.responseText);
                            // alert(thrownError);
                        }
                    });


                }
                //var DCAbudget = {
                //    CCCode: $("#ddlCc option:selected").text(),
                //    FYyear: $("#ddlDCAYear option:selected").val(),
                //    DCACode: DcaCodes,
                //    DcaAmounts: Dcaamounts,
                //    Remarks: $("#txtDCABudgetRemarks").val(),
                //    Action: 'New',                    
                //    CreatedBy: $("#txtAssignCCBudgetCreatedby").val()
                //};
                //var DcaBudgetDetails = {
                //    DCACode: DcaCodes,
                //    CCCode: $("#ddlCc option:selected").text(),
                //    DcaAmounts: amounts,
                //    FYyear: $("#ddlDCAYear option:selected").val(),
                //    Remarks: $("#txtDCABudgetRemarks").val(),
                //    Action:"New",
                //    OldBudgetAmount:0,
                //    CreatedBy: $("#txtAssignCCBudgetCreatedby").val()

                //};

                addFailMsg = "Error Occurred While Adding DCA Budget";
                addSuccessMsg = "DCA Budget Added Successfully.";

                //$.ajax({
                //    type: "POST",
                //    url: "/AccountsApproval/SaveDCABudget",
                //    data: JSON.stringify({ assignDCABudget: DcaBudgetDetails }),                 
                //    contentType: "application/json; charset=utf-8",
                //    dataType: "json",
                //    success: function (response) {
                //        if (response.saveStatus == 'Submited') {
                //            $("#divDCAInfoMsg").text(addSuccessMsg);
                //            $("#divDCAInfoMsg").removeClass("hidden alert-danger");
                //            $("#divDCAInfoMsg").addClass("alert-success");
                //        }
                //        else {
                //            $("#divDCAInfoMsg").text(response.saveStatus);
                //            $("#divDCAInfoMsg").addClass("alert-danger");
                //            $("#divDCAInfoMsg").removeClass("hidden alert-success");
                //        }
                //    },
                //    error: function (xhr, ajaxOptions, thrownError) {
                //        //alert(xhr.status);
                //        alert(xhr.responseText);
                //       // alert(thrownError);
                //    }
                //});


            }
        }
       
    }  
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
    $("#tblDcaBudgetDetails tfoot tr").each(function () {
        var footerRow = $(this);
        footerRow.find("td").eq(0).html("");
        footerRow.find("td").eq(1).html("");
        footerRow.find("td").eq(2).html("");
    });
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

function SubmitAmendCCData() {
    $("#btnAmendCCSubmit").attr("disabled", true);
    isValid = true;
    var errorMsg = "";
    var type = $("#ddlCCAmendType option:selected").val();
    var OldBudget = $("#txtCCBudgetold").val();
    var OldBalance = $("#txtCCBalanceOld").val();
    var extraAmount = $("#AmendCCBudgetAmount").val();
    var amount = $("#AmendCCBudgetAmount").val();
    if (amount === "") {
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
        $("#btnAmendCCSubmit").attr("disabled", false);
    }
    else {
        $("#btnAmendCCSubmit").attr("disabled", true);
        $("#divAmendCCInfoMsg").text("");
        $("#divAmendCCInfoMsg").addClass("hidden");
        $("#btnAmendCCSubmit").attr("disabled", false);
        $("#AmendCCBudgetAmount").attr("disabled", true);
        //Insert Amend CC Budget in to db 

        var nBudget = 0;
        var nBalance = 0;
        var amendAmount = 0;
        var amendcc = null;

        if (type === 'Add') {
            nBudget = parseFloat(OldBudget) + parseFloat(extraAmount);
            nBalance = parseFloat(OldBalance) + parseFloat(extraAmount);
            amendAmount = parseFloat(extraAmount);
            amendcc = {
                CCCode: $("#lblCcAmendCode").text(),
                AmendedValue: amendAmount,
                AmendmentType: "Add",
                BudgetId: $("#txtCCBudgetid").val(),
                NewBudget: nBudget,
                NewBudgetBalance: nBalance,
                CreatedBy: $("#txtAssignCCBudgetCreatedby").val(),
                UID: $("#txtCCBudgetamduid").val(),
                FYYear: $("#txtCCAmendYear").val()
            };
        }
        else if (type === 'Substract') {
            nBudget = parseFloat(OldBudget) - parseFloat(extraAmount);
            nBalance = parseFloat(OldBalance) - parseFloat(extraAmount);
            amendAmount = parseFloat(extraAmount);
            amendcc = {
                CCCode: $("#lblCcAmendCode").text(),
                AmendedValue: amendAmount,
                AmendmentType: "Substract",
                BudgetId: $("#txtCCBudgetid").val(),
                NewBudget: nBudget,
                NewBudgetBalance: nBalance,
                CreatedBy: $("#txtAssignCCBudgetCreatedby").val(),
                UID: $("#txtCCBudgetamduid").val(),
                FYYear: $("#txtCCAmendYear").val()
            };
        }
        //debugger;
        addFailMsg = "Error Occurred While Amending Cost Center Budget.";
        addSuccessMsg = "Budget Amended Successfully.";
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Budget/SaveCCAmendBudget',
            data: { amendCCBudget: amendcc },
            success: function (Data) {
                if (Data.saveStatus === "true") {
                    $("#divAmendCCInfoMsg").text(addSuccessMsg);
                    $("#divAmendCCInfoMsg").removeClass("hidden alert-danger");
                    $("#divAmendCCInfoMsg").addClass("alert-success");
                    $("#btnAmendCCSubmit").prop("disabled", true);
                }
                else {
                    $("#divAmendCCInfoMsg").text(Data.saveStatus);
                    $("#divAmendCCInfoMsg").addClass("alert-danger");
                    $("#divAmendCCInfoMsg").removeClass("hidden alert-success");
                    $("#btnAmendCCSubmit").prop("disabled", false);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divAmendCCInfoMsg").text(addFailMsg);
                $("#divAmendCCInfoMsg").addClass("alert-danger");
                $("#divAmendCCInfoMsg").removeClass("hidden alert-success");
            }
        });

    }

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
function GetBudgetAsignedCCDetails() {
   
    var cc = $("#ddlAmendBudgetCC option:selected").val();
    var ccindex = $("#ddlAmendBudgetCC option:selected").index();
    $("#tblDcaBudgetDetails tfoot tr").each(function () {
        var footerRow = $(this);
        footerRow.find("td").eq(0).html("");
        footerRow.find("td").eq(1).html("");
        footerRow.find("td").eq(2).html("");
    });
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Budget/GetBudgetAssignedCCByID',
        data: { CCCode: cc },
        success: function (Data) {
           
            $.each(Data, function () {
               // alert(this['CC_Code'] + "---" + this['CC_Name']);
                
                
                //$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th></th><th></th><th></th><th></th><th></th>');
                // hidden fields CC Budget details
                $("#txtDCCBudgetold").val(this['BudgetValue']);
                $("#txtDCCBalanceOld").val(this['BalanceBudget']);
                $("#txtDCCBudgetid").val(this['CCBudgetId']);
                //Pop up Budget detailsAmendDCABudget
                $("#lblDCCAmendCCCode").text(this['CC_Code']);
                $("#lblDCCAmendCCodeandName").text(this['CC_Code'] + ',' + this['CC_Name']);
                $("#lblDCCAmendBudget").text(this['BudgetValue']);
                $("#lblDCCAmendBalance").text(this['BalanceBudget']);                
                $("#txtDCAAmendCCName").val(this['CC_Name']);              

                $("#txtTempOldCCBudgetForAmendDCA").val(this['BudgetValue']);
                $("#txtTempOldCCBalanceForAmendDCA").val(this['BalanceBudget']);

                $("#txtBudgetIDForAmendDCA").val(this['CCBudgetId']);
               
            });
            $("#tblDcaBudgetDetails tfoot tr").each(function () {
                var footerRow = $(this);
                if (ccindex !== 0) {
                    footerRow.find("td").eq(0).html("<label>" + cc + "," + $("#txtDCAAmendCCName").val() + "</label>");
                    footerRow.find("td").eq(1).html("Budget Assigned:<label>" + $("#txtTempOldCCBudgetForAmendDCA").val() + "</label>");
                    footerRow.find("td").eq(2).html("Balance:<label>" + $("#txtTempOldCCBalanceForAmendDCA").val() + " </label>");
                }
                else {
                        footerRow.find("td").eq(0).html("");
                        footerRow.find("td").eq(1).html("");
                        footerRow.find("td").eq(2).html("");
                }
            });
            //$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th>' + cc + '</th><th>' + $("#txtDCAAmendCCName").val() + '</th><th>Budget Assigned: ' + $("#txtTempOldCCBudgetForAmendDCA").val() + '</th><th>Balance: ' + $("#txtTempOldCCBalanceForAmendDCA").val() + '</th><th></th><th></th></tr>');

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divMultipleAmendDCAIfoMsg").text(addFailMsg);
            $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
            $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
        }
    });

    
}


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
                    DisableDeleteButtons();
                }
                else {
                    $("#divAmendDCAInfoMsg").text(Data.saveStatus);
                    $("#divAmendDCAInfoMsg").addClass("alert-danger");
                    $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
                    $("#txtdone").val('1');
                    DisableDeleteButtons();
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divAmendDCAInfoMsg").text(addFailMsg);
                $("#divAmendDCAInfoMsg").addClass("alert-danger");
                $("#txtdone").val('1');
                $("#divAmendDCAInfoMsg").removeClass("hidden alert-success");
                DisableDeleteButtons();
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
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Budget/MultipleDCAAmend',
        data: { amendDcaBudget: amend },
        success: function (Data) {
            if (Data.saveStatus === "Submited") {
                $("#btnMultipleAmendDCASubmit").prop("disabled",true);
                $("#divMultipleAmendDCAIfoMsg").text(addSuccessMsg);
                $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-danger");
                $("#divMultipleAmendDCAIfoMsg").addClass("alert-success");
                DisableDeleteButtons();
                $("#txtdone").val('1');
            }
            else {
                $("#btnMultipleAmendDCASubmit").prop("disabled", true);
                $("#divMultipleAmendDCAIfoMsg").text(Data.saveStatus);
                $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
                $("#txtdone").val('1');
                DisableDeleteButtons();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnMultipleAmendDCASubmit").prop("disabled", true);
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
function UnAmendedDCAChange() {

   // alert('dca change');
    var dca = $("#ddlUnAmendedDCA option:selected").val();
    var selectedcc = $("#ddlAmendBudgetCC option:selected").val();
    
 
    $.ajax({
        type: "POST",
        url: "/Budget/GetBudgetAssignedCCByID",
        data: JSON.stringify({CCCode: selectedcc}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { 
            $("#NewAmendDCADetails").removeClass('hidden');
            var balance = 0;
            $.each(data, function () {
                balance = this['BalanceBudget'];
                if (parseFloat(balance) > 0) {
                    //$("#lblNewDCAAmendtype").text('New');
                    $("#lblNewDCCAmendName").text($("#ddlAmendBudgetCC option:selected").text());
                    $("#lblNewDCCAmendBudget").text(this['BudgetValue']);
                    $("#lblNewDCCAmendBalance").text(this['BalanceBudget']);
                    //hidden files
                    $("#txtNewDCCBudgetid").val(this['CCBudgetId']);
                    $("#txtNewDCCBudgetold").val(this['BudgetValue']);
                    $("#txtNewDCCBalanceOld").val(this['BalanceBudget']);

                    $("#divNewAmendDCAInfoMsg").text("");
                    $("#divNewAmendDCAInfoMsg").addClass("hidden");
                    $("#NewAmendDCADetails").removeClass('hidden');

                }
                else {
                    
                    $("#divNewAmendDCAInfoMsg").text("");
                    $("#divNewAmendDCAInfoMsg").append("<div>Cost Center Balance is Not Available</div>");
                    $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
                    $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");
                }


            });
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });

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
    isValid = true;
    var errorMsg = "";
    var amount = $("#NewDCABudgetAmount").val();
    var ccddlindex = $("#ddlAmendBudgetCC option:selected").index();
    if (amount == "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Amount</p>";
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
            }
            else {
                $("#divNewAmendDCAInfoMsg").text(Data.saveStatus);
                $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
                $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divNewAmendDCAInfoMsg").text(addFailMsg);
            $("#divNewAmendDCAInfoMsg").addClass("alert-danger");
            $("#divNewAmendDCAInfoMsg").removeClass("hidden alert-success");
        }

    });
}
}
function RebindBudgetDCAGrid() {
    
    var cc = $("#ddlAmendBudgetCC option:selected").val();
    var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
    if (cctypeid === "6") {
        var Stype = $("#ddlAmendDCASubType option:selected").text();
        var year = '';
        $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + cc + '&Subtype=' + Stype + '&Year=' + year + '&CCTypeId=' + cctypeid + '');
    }
    else {
        var fyear = $("#ddlAmendDCAYear option:selected").val();
        var Stype1 = '';
        $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + cc + '&Subtype=' + Stype1 + '&Year=' + fyear + '&CCTypeId=' + cctypeid + '');
    }
   // $("#divDCADetails").load('/Budget/ViewDCABudgetDetailsGrid?CCCode=' + $("#ddlAmendBudgetCC option:selected").val() + '');
    //ShowAmendDCAGrid();
    GetBudgetAsignedCCDetails();
    BindAmendGrid();
    $("#divMultipleAmendDCAIfoMsg").text("");
    $("#divMultipleAmendDCAIfoMsg").addClass("hidden");
    //alert($("#txtDCAAmendCCName").val());
    //$('#tblDcaBudgetDetails tfoot tr:last').before('<tr><th>' + cc + '</th><th>' + $("#txtDCAAmendCCName").val() + '</th><th>Budget Assigned: ' + $("#txtTempOldCCBudgetForAmendDCA").val() + '</th><th>Balance: ' + $("#txtTempOldCCBalanceForAmendDCA").val() + '</th><th></th><th></th></tr>');


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
function OpenAmendCCBudgetPopup(budgetid, ccid, cccode, ccname, cctype, budgetvalue, budgetbalace, date,year) {
    //clearCCAmend();
    $('#CCAmendModal').modal('show');  
    $("#divAmendCC").addClass('hidden');
    $("#lblCcAmendCode").text(cccode);    
    $("#lblCcAmendName").text(ccname);
    $("#lblCcAmendBudget").text(budgetvalue);
    $("#lblCcAmendBudgetBalance").text(budgetbalace);
    $("#lblCcAmendType").text(cctype);
    $("#txtCCBudgetold").val(budgetvalue);
    $("#txtCCBalanceOld").val(budgetbalace);   
    $("#txtCCBudgetid").val(budgetid);
    $("#txtCCAmendYear").val(year);
    $("#AmendCCBudgetAmount").val("");
    $("#btnAmendCCSubmit").attr("disabled", false);
    $("#divAmendCCInfoMsg").text("");
    $("#divAmendCCInfoMsg").addClass("hidden");
}
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
function AmendDCABudgetCCTypesChange() {

    var cctype = $("#ddlAmendDCABudgetCCTypes option:selected").text();

    var cctypeindex = $("#ddlAmendDCABudgetCCTypes option:selected").index();

    if (cctypeindex !== 0) {
        if (cctype === 'Performing') {

            $("#divAmendCCGrid").addClass('hidden');
            $("#divAmendDCAYear").addClass('hidden');
            $("#divAmendDCASubType").removeClass('hidden');
            $("#divAmenddcagridbtn").removeClass('hidden');
            $("#divAmendBudgetCC").addClass('hidden');
            $("#divDCADetails").addClass('hidden');
        }
        else {

            $("#divAmendCCGrid").addClass('hidden');
            $("#divAmendDCAYear").removeClass('hidden');
            $("#divAmendDCASubType").addClass('hidden');          
            $("#divAmenddcagridbtn").addClass('hidden');
            $("#divAmendBudgetCC").addClass('hidden');
            $("#divDCADetails").addClass('hidden');
        }

    }
    else {
        $("#divAmendCCGrid").addClass('hidden');
        $("#divAmendDCAYear").addClass('hidden');
        $("#divAmendDCASubType").addClass('hidden');
        $("#divAmenddcagridbtn").addClass('hidden');     
        $("#divAmendBudgetCC").addClass('hidden');
        $("#divDCADetails").addClass('hidden');
    }
    //var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
    // $.ajax({
    //    type: "POST",
    //    url: "/Budget/GetBudgetAssignedCCByCCType",
    //    data: '{CCtypeId:"' + cctypeid + '"}',
    //    contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //    success: function (response) {
    //        var CCddl = $("#ddlAmendBudgetCC");
    //        CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //        $.each(response, function () {
    //            CCddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
    //        });          
    //        $("#divAmendBudgetCC").removeClass('hidden');
    //        $("#divDCABudgetDetails").addClass('hidden');
    //    },
    //     failure: function (response) {
    //    },
    //     error: function (response) {
    //    }
    //});

}
function AmendDCABudget(DCABudgetId, DCACode, CCCode, DCABudgetValue, DCABudgetBalance, DCABudgetCreationdate, cctype, Dcaname, CCName, fyear) {
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
}
function CloseDCABudget(DCABudgetId, DCACode, CCCode, DCABudgetValue, DCABudgetBalance, DCABudgetCreationdate) {


}
function DCAAmendTypeChange() {    
    $("#divDCAAmendDetails").removeClass('hidden');
    var type = $("#ddlDCAAmendType option:selected").val();
    var selectedcc = $("#ddlAmendBudgetCC option:selected").val();  

    if (type === "New") {
        $("#divNewDCABudgetAssignInAmend").removeClass('hidden');
        $("#divOldDCABudgetAssignInAmend").addClass('hidden');
        $.ajax({
            type: "POST",
            url: "/Budget/GetUnAmendedDCAByCCID",
            data: JSON.stringify({ CCCode: selectedcc }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {                
                var DCAddl = $("#ddlUnAmendedDCA");
                DCAddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(data, function () {
                    DCAddl.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                });
                $("#NewAmendDCADetails").addClass('hidden');
                $("#ddlDCAAmendType").prop("disabled", "true");
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else {
        $("#divOldDCABudgetAssignInAmend").removeClass('hidden');
        $("#divNewDCABudgetAssignInAmend").addClass('hidden');
        $("#ddlDCAAmendType").prop("disabled", "true");

       
    }
}

function ShowAmendCCGrid() {    
    var cctype1 = $("#ddlAmendCCBType option:selected").text();
    if (cctype1 === 'Performing') {
        var SubType = $("#ddlAmendCCSubType option:selected").val();
        var SubIndex = $("#ddlAmendCCSubType option:selected").index();
        FnYear = '';
        if (SubIndex !== 0) {
            $("#divAmendCCGridInfoMsg").text("");
            $("#divAmendCCGridInfoMsg").addClass("hidden");
            $.ajax({
                type: 'GET',
                dataType: 'html',
                url: '/Budget/ViewCCDetailsGrid',
                data: { CCSubType: SubType, Year: FnYear, CCType: cctype1 },
                beforeSend: function () {
                    $('#ajax-container').html('');
                    addSpinner($('#ajax-container'));
                },
                success: function (Data) {
                    var count1 = Object.keys(Data).length;
                    if (count1 > 0) {
                        $("#divAmendCCGrid").html(Data);
                        $("#divAmendCCGrid").removeClass('hidden');
                        $("#ddlAmendCCSubType").prop("disabled", true);
                        $("#ddlAmendCCBType").prop("disabled", true);

                    }
                    else {
                        $("#divAmendCCGrid").html('No Data Found');
                        $("#divAmendCCGrid").removeClass('hidden');
                        $("#ddlAmendCCSubType").prop("disabled", false);
                        $("#ddlAmendCCBType").prop("disabled", false);
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
        else {
            $("#divAmendCCGridInfoMsg").text("");
            $("#divAmendCCGridInfoMsg").append("<div>Select SubType</div>");
            $("#divAmendCCGridInfoMsg").addClass("alert-danger");
            $("#divAmendCCGridInfoMsg").removeClass("hidden alert-success");
        }
       
    }
    else {
        var FnYear1 = $("#ddlAmendCCYear option:selected").val();
        var YearIndex = $("#ddlAmendCCYear option:selected").index();
        var SubType1 = '';
        if (YearIndex !== 0) {
            $("#divAmendCCGridInfoMsg").text("");
            $("#divAmendCCGridInfoMsg").addClass("hidden");
            $.ajax({
                type: 'GET',
                dataType: 'html',
                url: '/Budget/ViewCCDetailsGrid',
                data: { CCSubType: SubType1, Year: FnYear1, CCType: cctype1 },
                beforeSend: function () {
                    $('#ajax-container').html('');
                    addSpinner($('#ajax-container'));
                },
                success: function (Data) {
                    var count1 = Object.keys(Data).length;
                    if (count1 > 0) {
                        $("#divAmendCCGrid").html(Data);
                        $("#divAmendCCGrid").removeClass('hidden');
                        $("#ddlAmendCCYear").prop("disabled", true);
                        $("#ddlAmendCCBType").prop("disabled", true);
                    }
                    else {
                        $("#divAmendCCGrid").html('No Data Found');
                        $("#divAmendCCGrid").removeClass('hidden');
                        $("#ddlAmendCCYear").prop("disabled", false);
                        $("#ddlAmendCCBType").prop("disabled", false);
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
        else {
            $("#divAmendCCGridInfoMsg").text("");
            $("#divAmendCCGridInfoMsg").append("<div>Select Financial Year</div>");
            $("#divAmendCCGridInfoMsg").addClass("alert-danger");
            $("#divAmendCCGridInfoMsg").removeClass("hidden alert-success");
        }
    }



  
}

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
function AmendDCABudgetYearChange() {
    var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
    var fyearindex = $("#ddlAmendDCAYear option:selected").index();
    var fyear = $("#ddlAmendDCAYear option:selected").val();
    var Subtype = '';
    if (fyearindex !== 0) {
        $.ajax({
            type: "POST",
            url: "/Budget/GetBudgetAssignedCCByCCType",
            data: '{CCtypeId:"' + cctypeid + '",SubType:"' + Subtype + '",FnYear:"' + fyear + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var CCddl = $("#ddlAmendBudgetCC");
                CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    CCddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
                $("#divAmendBudgetCC").removeClass('hidden');
               // $("#divDCABudgetDetails").addClass('hidden');
                //$("#divNewDCABudgetfromAmend").removeClass('hidden');
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else {
        $("#divNewDCABudgetfromAmend").addClass('hidden');       
        $("#divAmendDCASubType").addClass('hidden');
        $("#divAmenddcagridbtn").addClass('hidden');
        $("#divAmendBudgetCC").addClass('hidden');
        $("#divDCADetails").addClass('hidden');

    }

}
function AmendDCABudgetSubTypeChange() {
    var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
    var subtypeindex = $("#ddlAmendDCASubType option:selected").index();
    var SubType = $("#ddlAmendDCASubType option:selected").text();
    var fyear = '';
    if (subtypeindex !== 0) {
        $.ajax({
            type: "POST",
            url: "/Budget/GetBudgetAssignedCCByCCType",
            data: '{CCtypeId:"' + cctypeid + '",SubType:"' + SubType + '",FnYear:"' + fyear + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var CCddl = $("#ddlAmendBudgetCC");
                CCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    CCddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                });
              
                $("#divAmendBudgetCC").removeClass('hidden');
              
                
               // $("#divNewDCABudgetfromAmend").removeClass('hidden');
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    else {
        $("#ddlAmendDCAYear").addClass('hidden');
        $("#divAmenddcagridbtn").addClass('hidden');
        $("#divAmendBudgetCC").addClass('hidden');
        $("#divDCADetails").addClass('hidden');
        $("#divNewDCABudgetfromAmend").addClass('hidden');
    }

}
function ShowAmendDCAGrid() {
    var cc = $("#ddlAmendBudgetCC option:selected").val();
    var ccIndex = $("#ddlAmendBudgetCC option:selected").index();

    var cctypeid = $("#ddlAmendDCABudgetCCTypes option:selected").val();
    var cctypeidindex = $("#ddlAmendDCABudgetCCTypes option:selected").index();
  

    if (ccIndex !== 0) {
        if (cctypeidindex !== 0) {

            if (cctypeid === "6") {
                var subtypeindex = $("#ddlAmendDCASubType option:selected").index();
                var Stype = $("#ddlAmendDCASubType option:selected").text();
                // alert(Stype);
                if (subtypeindex !== 0) {
                    $.ajax({
                        type: 'GET',
                        dataType: 'html',
                        url: '/Budget/ViewDCABudgetDetailsGrid',
                        data: { CCCode: cc, Subtype: Stype, Year: '', CCTypeId: cctypeid },
                        success: function (Data) {
                            GetBudgetAsignedCCDetails();
                            $("#divDCADetails").html(Data);
                            $("#divDCABudgetDetails").removeClass("hidden");
                            $("#divDCADetails").removeClass("hidden");
                            $("#txtamendcctype").val("");
                            $("#txtdone").val('0');
                            $("#divAmendDetails").addClass("hidden");
                            $("#ddlAmendBudgetCC").prop('disabled', true);
                            $("#ddlAmendDCABudgetCCTypes").prop('disabled', true);
                            $("#ddlAmendDCASubType").prop('disabled', true);
                            $("#divMultipleAmendDCAIfoMsg").text("");
                            $("#divMultipleAmendDCAIfoMsg").addClass("hidden");
                            BindAmendGrid();
                            $("#divAmendBudgetCC").removeClass('hidden');
                            $("#divDCADetails").removeClass('hidden');
                            $("#divNewDCABudgetfromAmend").removeClass('hidden');
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                        }
                    });
                }
                else {
                    $("#divMultipleAmendDCAIfoMsg").text("");
                    $("#divMultipleAmendDCAIfoMsg").append("<div>Select Sub Type</div>");
                    $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                    $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");

                }
            }
            else if (cctypeidindex !== 0 && fyearindex !== 0) {
                var fyearindex = $("#ddlAmendDCAYear option:selected").index();
                var fyear = $("#ddlAmendDCAYear option:selected").val();
                $.ajax({
                    type: 'GET',
                    dataType: 'html',
                    url: '/Budget/ViewDCABudgetDetailsGrid',
                    data: { CCCode: cc, Subtype: '', Year: fyear, CCTypeId: cctypeid },
                    success: function (Data) {
                        GetBudgetAsignedCCDetails();
                        $("#divDCADetails").html(Data);
                        $("#divDCABudgetDetails").removeClass("hidden");
                        $("#divDCADetails").removeClass("hidden");
                        $("#txtamendcctype").val("");
                        $("#txtdone").val('0');
                        $("#divAmendDetails").addClass("hidden");
                        $("#ddlAmendBudgetCC").prop('disabled', true);
                        $("#ddlAmendDCABudgetCCTypes").prop('disabled', true);
                        $("#ddlAmendDCAYear").prop('disabled', true);

                        $("#divMultipleAmendDCAIfoMsg").text("");
                        $("#divMultipleAmendDCAIfoMsg").addClass("hidden");
                        BindAmendGrid();
                        $("#divAmendBudgetCC").removeClass('hidden');
                        $("#divDCADetails").removeClass('hidden');
                        $("#divNewDCABudgetfromAmend").removeClass('hidden');
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                    }
                });

            }
            else {
                $("#divMultipleAmendDCAIfoMsg").text("");
                $("#divMultipleAmendDCAIfoMsg").append("<div>Select Financial Year</div>");
                $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
                $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");

            }
        }
        else {
            $("#divMultipleAmendDCAIfoMsg").text("");
            $("#divMultipleAmendDCAIfoMsg").append("<div>Select Cost Center Type</div>");
            $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
            $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");

        }
    }
    else {

        $("#divMultipleAmendDCAIfoMsg").text("");
        $("#divMultipleAmendDCAIfoMsg").append("<div>Select Cost Center</div>");
        $("#divMultipleAmendDCAIfoMsg").addClass("alert-danger");
        $("#divMultipleAmendDCAIfoMsg").removeClass("hidden alert-success");
    }


   
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