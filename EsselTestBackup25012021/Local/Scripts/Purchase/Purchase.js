
$(document).ready(function () {

    $("#ApproveVendorMsgModal").on("hidden.bs.modal", function () {
        $("#divApprVendorDtailsGrid").load('/Purchase/ViewApproveVendorGrid');
    });
    $("#EditVendorModel").on("hidden.bs.modal", function () {
        $("#divVendorDetailsGrid").load('/Purchase/ViewVendorGrid');
    });
    $("#ModalNewVendor").on("hidden.bs.modal", function () {
        $("#divVendorDetailsGrid").load('/Purchase/ViewVendorGrid');
    });
    $("#ApprovesppoMsgModal").on("hidden.bs.modal", function () {
        $("#divApprSPPOGrid").load('/Purchase/VerifySPPOGrid');
    });
    $("#ApprovespAmendMsgModal").on("hidden.bs.modal", function () {
        $("#divApprSPAmendGrid").load('/Purchase/VerifySPPOAmendGrid');
    });
    $("#ApprovesppoInvMsgModal").on("hidden.bs.modal", function () {
        $("#divApprSPPOInvGrid").load('/Purchase/VerifySPPOInvoiceGrid');
    });
    $("#ApprovePOMsgModal").on("hidden.bs.modal", function () {
        $("#divApprPODtailsGrid").load('/Purchase/VerifySupplierPOGrid');
    });

});
function IsNumeric(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
    if ((iKeyCode < 48 || iKeyCode > 57))
        return false;
}
function IsNumericdecimal(e) {
    var keyCode = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;
    var str = e.value;
    if ((str.length === 0) && (event.keyCode === 46)) return false; // checking that length ==0 than not allow to enter '.'
    if ((str.indexOf('.') >= 0) && (event.keyCode === 46)) return false; // checking that if user already entered '.' than not allow to enter '.'

    if (keyCode !== 46 && keyCode > 31
        && (keyCode < 48 || keyCode > 57))
        return false;
    return true;

}
function ValidateAmount(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 46) {
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
function RestrictComma(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 44) {
        return false;
    }
    else {
        return true;
    }
}
function RestrictPipeSymbol() {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 124 || charCode === 39) {
        return false;
    }
    else {
        return true;
    }
}
function ViewAddNewVendorModel() {
    $.ajax({
        type: "POST",
        url: "/Purchase/AddNewVendor",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {
            $('#ModalNewVendor').html(data);
            $('#ModalNewVendor').modal();

        }
    });
}
function NVendorTypeChange() {
    var typeIndex = $("#ddlNVendorType option:selected").index();
    var vendrotype = $("#ddlNVendorType option:selected").val();
    if (typeIndex !== 0) {
        if (vendrotype === "Service Provider") {
            $("#divnpanno").removeClass("hidden");
            $("#divnpfregno").removeClass("hidden");
            $("#divncstno").addClass("hidden");
        }
        else {
            $("#divnpanno").addClass("hidden");
            $("#divnpfregno").addClass("hidden");
            $("#divncstno").removeClass("hidden");
        }
    }
    else {
        $("#divnpanno").addClass("hidden");
        $("#divnpfregno").addClass("hidden");
        $("#divncstno").addClass("hidden");
    }
    $("#divNewVendorInfoMsg").text("");
    $("#divNewVendorInfoMsg").addClass("hidden");

}
function NewVedndorNatureofGrpChange() {
    var natureidIndex = $("#ddlNVNatureGroup option:selected").index();
    var natureid = $("#ddlNVNatureGroup option:selected").val();
    var mastergrupddl = $("#ddlNVMasterGroup");
    var subgrupddl = $("#ddlNVSubGroup");
    if (natureidIndex === 0) {
        mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtsubgrpexist").val('0');
        $("#divnvsubgrp").addClass("hidden");
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
                    $("#divNewVendorInfoMsg").text("");
                    $("#divNewVendorInfoMsg").addClass("hidden");
                    $("#txtsubgrpexist").val('0');
                    $("#divnvsubgrp").addClass("hidden");
                }
                else {
                    $("#divNewVendorInfoMsg").text("");
                    $("#divNewVendorInfoMsg").append("<div>Groups Does Not Exist</div>");
                    $("#divNewVendorInfoMsg").addClass("alert-danger");
                    $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $("#txtsubgrpexist").val('0');
                    $("#divnvsubgrp").addClass("hidden");
                }
            },
            failure: function (response) {

            },
            error: function (response) {
            }
        });

    }
}
function NewVedndorGrpChange() {

    var mastergrpIndex = $("#ddlNVMasterGroup option:selected").index();
    var mastergrp = $("#ddlNVMasterGroup option:selected").val();
    var subgrupddl = $("#ddlNVSubGroup");
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
                    $("#divnvsubgrp").removeClass("hidden");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
                    });
                    $("#txtsubgrpexist").val('1');
                }
                else {
                    $("#divnvsubgrp").addClass("hidden");
                    $("#txtsubgrpexist").val('0');
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function NVendorGSTValidation(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('NVGstApplicable');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    var ids = document.getElementsByName('NVGstApplicable');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked === true) {
            // alert(ids[i].value);
            if (ids[i].value === 'Yes') {
                $("#divNVendorGst").removeClass('hidden');
                $("#divNewVendorInfoMsg").text("");
                $("#divNewVendorInfoMsg").addClass("hidden");
            }
            else {
                $("#divNVendorGst").addClass('hidden');
                $("#NewVendorGstTable tbody tr:not(:first)").remove();
                $("#NewVendorGstTable tbody tr:first").each(function () {
                    var currentRow = $(this);
                    var state = currentRow.find("td").eq(1).find("select").prop('selectedIndex', 0);
                    var gstno = currentRow.find("td").eq(2).find("input[type='text']").val("");
                    currentRow.find('input[type="checkbox"]').prop("checked", false);
                });
                $("#divNewVendorInfoMsg").text("");
                $("#divNewVendorInfoMsg").addClass("hidden");
            }
        }
    }
}
function BindNewRowForNVendorGST() {
    var list = [];
    isValid = true;
    var errorMsg = "";
    var ddlcount = 0;
    var amountcount = 0;
    var i = 0;
    var checkcount = 0;
    $("#NewVendorGstTable tbody tr").each(function () {
        var currentRow = $(this);
        var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
        var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
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
        $("#divNewVendorInfoMsg").text("");
        $("#divNewVendorInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divNewVendorInfoMsg").addClass("alert-danger");
        $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var duplicatelist = list.filter(i => list.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Only One GST for One State</p>";
            $("#divNewVendorInfoMsg").text("");
            $("#divNewVendorInfoMsg").append(finalerror2 + "</div>");
            $("#divNewVendorInfoMsg").addClass("alert-danger");
            $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            list = $.unique(list);
            $("#divNewVendorInfoMsg").text("");
            $("#divNewVendorInfoMsg").addClass("hidden");
            $.ajax({
                type: "POST",
                url: "/Home/GetAllStates",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var count = $("#NewVendorGstTable tbody tr").length;
                    var rowno = parseInt(count) + parseInt(1);
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center">' + rowno + '</td>';
                    cols += '<td><select class="form-control dropdown-toggle" ><option value="">-Please Select-</option>';
                    $.each(response, function () {
                        var status = checkValueInArray(this['State_Name'], list);
                        if (status === false) {
                            cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                        }

                    });
                    cols += '</select>';
                    cols += '</td><td style="text-align:center"><input class="form-control" data-val="true"   type="text" /></td >';
                    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNVGstCheck">';
                    cols += '<span class="eagle-check-indicator" ></span ></label></li></ul></td > ';
                    cols += '<td style="text-align:center"><input type="button" class="ibtnNewVGstDel btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.newvendorgst").append(newRow);
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
        }
    }
}
function ReassignrownoafterdeletingforVendorGST() {
    var rowno = 1;
    $("#NewVendorGstTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(0).html(rowno);
        rowno++;
    });
}
function SubmitNewVendorData() {
    isValid = true;
    var errorMsg = "";
    var vtypeIndex = $("#ddlNVendorType option:selected").index();
    var vendrotype = $("#ddlNVendorType option:selected").val();
    var PanNo = $("#txtNPanNo").val();
    var CstNo = $("#txtNCstNo").val();
    var PFRegNo = $("#txtNPFRegNo").val();

    var Vendorname = $("#txtNVendorName").val();
    var PhoneNo = $("#txtNPhoneno").val();
    var MobileNo = $("#txtNMobileNo").val();

    var Bankname = $("#txtNBankName").val();
    var Accno = $("#txtNAccNo").val();
    var IFSCCode = $("#txtNIFSCode").val();

    var natureidIndex = $("#ddlNVNatureGroup option:selected").index();
    var natureid = $("#ddlNVNatureGroup option:selected").val();

    var mastergrpIndex = $("#ddlNVMasterGroup option:selected").index();
    var mastergrp = $("#ddlNVMasterGroup option:selected").val();

    var subgrpidIndex = $("#ddlNVSubGroup option:selected").index();
    var subgrp = $("#ddlNVSubGroup option:selected").val();
    var Address = $("#txtNAddress").val();

    if (vtypeIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select vendor Type</p>";
        isValid = false;
    }
    if (vendrotype === "Service Provider") {
        if (PanNo === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter PAN Number</p>";
            isValid = false;
        }
        if (PFRegNo === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter PF Reg Number</p>";
            isValid = false;
        }
    }
    else if (vendrotype === "Supplier" || vendrotype === "Trading Supply") {
        if (CstNo === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter CST Number</p>";
            isValid = false;
        }
    }
    if (Vendorname === null || Vendorname === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Vendor Name</p>";
        isValid = false;
    }
    if (PhoneNo === null || PhoneNo === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Phone No</p>";
        isValid = false;
    }
    else if (PhoneNo.length !== 10) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter 10 digit Phone No</p>";
        isValid = false;
    }
    if (MobileNo === null || MobileNo === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Mobile No</p>";
        isValid = false;
    }
    else if (MobileNo.length !== 10) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter 10 digit Phone No</p>";
        isValid = false;
    }
    if (Bankname === null || Bankname === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Bank Name</p>";
        isValid = false;
    }
    if (Accno === null || Accno === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Account No</p>";
        isValid = false;
    }
    if (IFSCCode === null || IFSCCode === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter IFSC Code</p>";
        isValid = false;
    }

    if (natureidIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Nature of Group</p>";
        isValid = false;
    }
    if (mastergrpIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Group</p>";
        isValid = false;
    }
    if (Address === null || Address === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Address</p>";
        isValid = false;
    }
    if ($("#txtsubgrpexist").val() === '1' && subgrpidIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Group</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewVendorInfoMsg").text("");
        $("#divNewVendorInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divNewVendorInfoMsg").addClass("alert-danger");
        $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
    }
    else {
        //submit data with gst details       
        if ($('#chkNVCGSTN').is(":checked")) {

            var gst = confirm('Apply GST');
            if (gst === true) {
                //show gst grid
                $("#chkNVCGSTY").prop("checked", true);
                $("#chkNVCGSTN").prop("checked", false);
                $("#divNVendorGst").removeClass('hidden');

                $("#divNewVendorInfoMsg").text("");
                $("#divNewVendorInfoMsg").addClass("hidden");
            }
            else {
                //submit data without gst details
                SaveNewVendor();
                $("#divNewVendorInfoMsg").text("");
                $("#divNewVendorInfoMsg").addClass("hidden");
            }
        } else {
            //alert('is NOT checked!');
            //submit data with gst details
            var ddlcount = 0;
            var amountcount = 0;
            var checkcount = 0;
            var list = [];
            $("#NewVendorGstTable tbody tr").each(function () {
                var currentRow = $(this);
                var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
                var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
                var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
                var check = currentRow.find('input[type="checkbox"]').is(':checked');
                if (col2_value === 0) {
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
                $("#divNewVendorInfoMsg").text("");
                $("#divNewVendorInfoMsg").append(finalerror1 + errorMsg + "</div>");
                $("#divNewVendorInfoMsg").addClass("alert-danger");
                $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divNewVendorInfoMsg").text("");
                $("#divNewVendorInfoMsg").addClass("hidden");

                var duplicatelist = list.filter(i => list.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    var finalerror2 = "<div style='align:center'><p>Only One GST for One State</p>";
                    $("#divNewVendorInfoMsg").text("");
                    $("#divNewVendorInfoMsg").append(finalerror2 + "</div>");
                    $("#divNewVendorInfoMsg").addClass("alert-danger");
                    $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
                else {
                    $("#divNewVendorInfoMsg").text("");
                    $("#divNewVendorInfoMsg").addClass("hidden");

                    SaveNewVendor();
                }
            }
        }
    }
}
function SaveNewVendor() {
    var gstdeals = null;
    var gstApplicatble = 0;
    var rows = [];
    var GstStatids = "", GstNos = "";
    if ($('#chkNVCGSTN').is(":checked")) { gstApplicatble = 0; }
    if ($('#chkNVCGSTY').is(":checked")) {
        gstApplicatble = 1;
        var totalRowCount = $("#NewVendorGstTable tbody tr").length;
        $("#NewVendorGstTable tbody tr").each(function () {
            var currentRow = $(this);
            var state = currentRow.find("td").eq(1).find("select option:selected").val();
            var gstno = currentRow.find("td").eq(2).find("input[type='text']").val();
            GstStatids += state + ",";
            GstNos += gstno + ",";
        });
    }
    var subgroupid = 0;
    var subgroupexist = $("#txtsubgrpexist").val();
    if (subgroupexist === '1') {
        subgroupid = $("#ddlNVSubGroup option:selected").val();
    }
    var addNewVendor = {
        Type: $("#ddlNVendorType option:selected").val(),
        PanNo: $("#txtNPanNo").val(),
        PFRegNo: $("#txtNPFRegNo").val(),
        CstNo: $("#txtNCstNo").val(),
        VendorName: $("#txtNVendorName").val(),
        Phoneno: $("#txtNPhoneno").val(),
        MobileNo: $("#txtNMobileNo").val(),
        BankName: $("#txtNBankName").val(),
        AccountNo: $("#txtNAccNo").val(),
        IFSCode: $("#txtNIFSCode").val(),
        Address: $("#txtNAddress").val(),
        NatureGroupId: $("#ddlNVNatureGroup option:selected").val(),
        GroupId: $("#ddlNVMasterGroup option:selected").val(),
        SubGroupId: subgroupid,
        Action: 'Add',
        GstApplicable: gstApplicatble,
        GSTStatesList: GstStatids,
        GSTNoList: GstNos
    };
    addFailMsg = "Error Occurred While Adding New Vendor";
    addSuccessMsg = "Vendor Details Added Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/SaveNewVendor',
        data: { vendor: addNewVendor },
        success: function (Data) {
            if (Data.saveStatus === 'Submited') {
                $("#divNewVendorInfoMsg").text(addSuccessMsg);
                $("#divNewVendorInfoMsg").removeClass("hidden alert-danger");
                $("#divNewVendorInfoMsg").addClass("alert-success");
                //$("#btnSubmitNewVendor").prop("disabled", true);
            }
            else {
                $("#divNewVendorInfoMsg").text(Data.saveStatus);
                $("#divNewVendorInfoMsg").addClass("alert-danger");
                $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
                //$("#btnSubmitNewVendor").prop("disabled", true);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divNewVendorInfoMsg").text(addFailMsg);
            $("#divNewVendorInfoMsg").addClass("alert-danger");
            $("#divNewVendorInfoMsg").removeClass("hidden alert-success");
        }
    });
}
function VendorgridActionChange(VendorCode, txt) {
    var Action = txt.value;

    if (Action === "Edit") {
        $.ajax({
            type: "POST",
            url: "/Purchase/EditVendor",
            data: '{VendorCode:"' + VendorCode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'html',
            success: function (data) {
                $('#EditVendorModel').html(data);
                $('#EditVendorModel').modal();

            }
        });
    }
    else if (Action === "Close") {
        //$.ajax({
        //    type: "POST",
        //    url: "/Home/ViewCloseITCode",
        //    data: '{ItId:"' + id + '",ItCode:"' + code + '",Itname:"' + name + '"}',
        //    contentType: "application/json; charset=utf-8",
        //    dataType: 'html',
        //    success: function (data) {

        //        $('#closeITcodeConfirmation').html(data);
        //        $('#closeITcodeConfirmation').modal();
        //        $("#divClsoeITInfoMsg").text("");
        //        $("#divClsoeITInfoMsg").addClass("hidden");
        //    }
        //});
    }

}
function ApproveVendor(VendorCode, VendorStatus, Name) {

    var appstatus = $("#Appvendirstatus option:selected").text();
    retnote = $("#AppVendorNote").val();
    msg = $("#divApprVendorInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus === "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote === "") {
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
        var Roleid = '@Session["Roleid"]';
        var ApproveVendor = {
            VendorCode: VendorCode,
            Action: appstatus,
            ApprovalNote: retnote,
            VendorStatus: VendorStatus,
            VendorName: Name

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
            url: "/Purchase/ApproveVendor",
            data: JSON.stringify({ apprVendor: ApproveVendor }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApproveVendorMsgModal').modal('show');
                    var msg = "<div>Vendor " + finalmsg + "</div>";
                    $("#AppVendorMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppVendorMsg").html(msg);
                    $('#ApproveVendorMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppVendorMsg").html(msg);
                $('#ApproveVendorMsgModal').modal('show');
            }
        });
    }
}

function VedndorNatureofGrpChange() {

    var natureidIndex = $("#ddlUpVNatureGroup option:selected").index();
    var natureid = $("#ddlUpVNatureGroup option:selected").val();
    var mastergrupddl = $("#ddlUpVMasterGroup");
    var subgrupddl = $("#ddlUpVSubGroup");

    if (natureidIndex === 0) {
        mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtupsubgrpexist").val('0');

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
                    $("#divUpVendorInfoMsg").text("");
                    $("#divUpVendorInfoMsg").addClass("hidden");
                    $("#txtupsubgrpexist").val('0');
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $("#divUpvsubgrp").addClass("hidden");
                }
                else {
                    $("#divUpVendorInfoMsg").text("");
                    $("#divUpVendorInfoMsg").append("<div>Groups Does Not Exist</div>");
                    $("#divUpVendorInfoMsg").addClass("alert-danger");
                    $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $("#txtupsubgrpexist").val('0');
                    $("#divUpvsubgrp").addClass("hidden");
                }
            },
            failure: function (response) {

            },
            error: function (response) {
            }
        });

    }
}
function VedndorGrpChange() {

    var mastergrpIndex = $("#ddlUpVMasterGroup option:selected").index();
    var mastergrp = $("#ddlUpVMasterGroup option:selected").val();
    var subgrupddl = $("#ddlUpVSubGroup");
    if (mastergrpIndex === 0) {
        subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#txtupsubgrpexist").val('0');
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
                    $("#divUpvsubgrp").removeClass("hidden");
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
                    });
                    $("#txtupsubgrpexist").val('1');
                }
                else {
                    $("#divUpvsubgrp").addClass("hidden");
                    $("#txtupsubgrpexist").val('0');
                    subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $("#txtupsubgrpexist").val('0');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function VendorGSTValidation(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('UpVGstApplicable');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    var ids = document.getElementsByName('UpVGstApplicable');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked === true) {
            // alert(ids[i].value);
            if (ids[i].value === 'Yes') {
                $("#divUpVendorGst").removeClass('hidden');
                $("#divUpVendorInfoMsg").text("");
                $("#divUpVendorInfoMsg").addClass("hidden");
                emptyrowtoUpdatevendorgst();

            }
            else {
                $("#divUpVendorGst").addClass('hidden');
                emptyrowtoUpdatevendorgst();
                //$("#UpVendorGstTable tbody tr:not(:first)").remove();
                //$("#UpVendorGstTable tbody tr:first").each(function () {
                //    var currentRow = $(this);
                //    var state = currentRow.find("td").eq(1).find("select").prop('selectedIndex', 0);
                //    var gstno = currentRow.find("td").eq(2).find("input[type='text']").val("");
                //    currentRow.find('input[type="checkbox"]').prop("checked", false);
                //});
                $("#divUpVendorInfoMsg").text("");
                $("#divUpVendorInfoMsg").addClass("hidden");
            }
        }
    }
}

function emptyrowtoUpdatevendorgst() {

    $.ajax({
        type: "POST",
        url: "/Home/GetAllStates",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#UpVendorGstTable tbody tr").remove();
            var count = $("#UpVendorGstTable tbody tr").length;
            var rowno = parseInt(count) + parseInt(1);
            var newRow = $("<tr>");
            var cols = "";
            cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
            cols += '<td><select class="form-control dropdown-toggle" ><option value="">-Please Select-</option>';
            $.each(response, function () {
                //var status = checkValueInArray(this['State_Name'], list);
                // if (status === false) {
                cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                //}

            });
            cols += '</select>';
            cols += '</td><td style="text-align:center"><input class="form-control" data-val="true"   type="text" /></td >';
            cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNVGstCheck">';
            cols += '<span class="eagle-check-indicator" ></span ></label></li></ul></td > ';
            cols += '<td style="text-align:center"><input type="button" class="ibtnUpGstDel btn btn-md btn-danger" value="Delete"></td>';
            cols += '<td style="text-align:center" class="hidden"><input class="form-control" data-val="true"   type="text" value="0" /></td >';
            newRow.append(cols);
            $("table.order-list.upvendorgst").append(newRow);
        },
        failure: function (response) {
        },
        error: function (response) {
        }
    });
}

function BindNewRowForUpdateVendorGST() {
    var list = [];
    isValid = true;
    var errorMsg = "";
    var ddlcount = 0;
    var amountcount = 0;
    var i = 0;
    var checkcount = 0;
    $("#UpVendorGstTable tbody tr").each(function () {
        var currentRow = $(this);
        var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
        var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
        var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
        var check = currentRow.find('input[type="checkbox"]').is(':checked');
        var stateid = currentRow.find("td").eq(5).find("input[type='text']").val();
        if (col2_value === 0 && stateid === "0") {
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
        $("#divUpVendorInfoMsg").text("");
        $("#divUpVendorInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpVendorInfoMsg").addClass("alert-danger");
        $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var duplicatelist = list.filter(i => list.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Only One GST for One State</p>";
            $("#divUpVendorInfoMsg").text("");
            $("#divUpVendorInfoMsg").append(finalerror2 + "</div>");
            $("#divUpVendorInfoMsg").addClass("alert-danger");
            $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            list = $.unique(list);
            $("#divUpVendorInfoMsg").text("");
            $("#divUpVendorInfoMsg").addClass("hidden");

            $.ajax({
                type: "POST",
                url: "/Home/GetAllStates",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var count = $("#UpVendorGstTable tbody tr").length;
                    var rowno = parseInt(count) + parseInt(1);
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center" class="hidden">' + rowno + '</td>';
                    cols += '<td><select class="form-control dropdown-toggle" ><option value="">-Please Select-</option>';
                    $.each(response, function () {
                        var status = checkValueInArray(this['State_Name'], list);
                        if (status === false) {
                            cols += '<option value=' + this['State_ID'] + '>' + this['State_Name'] + '</option>';
                        }

                    });
                    cols += '</select>';
                    cols += '</td><td style="text-align:center"><input class="form-control" data-val="true"   type="text" /></td >';
                    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox"><label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" >';
                    cols += '<span class="eagle-check-indicator" ></span ></label></li></ul></td > ';
                    cols += '<td style="text-align:center"><input type="button" class="ibtnUpGstDel btn btn-md btn-danger" value="Delete"></td>';
                    cols += '<td style="text-align:center" class="hidden"><input class="form-control" data-val="true"   type="text" value="0" /></td >';
                    newRow.append(cols);
                    $("table.order-list.upvendorgst").append(newRow);
                },
                failure: function (response) {
                },
                error: function (response) {
                }
            });
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

function UpdateVendorData(Vendorcode, type, Status) {
    // alert($("#txtUp0Address").val());
    isValid = true;
    var errorMsg = "";

    var vendrotype = $("#ddlNVendorType option:selected").val();
    var PanNo = $("#txtUpPanNo").val();
    var CstNo = $("#txtUpCstNo").val();
    var PFRegNo = $("#txtUpPFRegNo").val();

    var Vendorname = $("#txtUpVendorName").val();
    var PhoneNo = $("#txtUpPhoneno").val();
    var MobileNo = $("#txtUpMobileNo").val();

    var Bankname = $("#txtUpBankName").val();
    var Accno = $("#txtUpAccNo").val();
    var IFSCCode = $("#txtUpIFSCode").val();

    var natureidIndex = $("#ddlUpVNatureGroup option:selected").index();
    var natureid = $("#ddlUpVNatureGroup option:selected").val();

    var mastergrpIndex = $("#ddlUpVMasterGroup option:selected").index();
    var mastergrp = $("#ddlUpVMasterGroup option:selected").val();

    var subgrpidIndex = $("#ddlUpVSubGroup option:selected").index();
    var subgrp = $("#ddlUpVSubGroup option:selected").val();
    var Address = "";

    if (Status === 'Approved') {

        Address = $("#txtEAddress").val();
    }
    else {
        Address = $("#txtUpAddress").val();
    }
    if (vendrotype === "Service Provider") {
        if (PanNo === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter PAN Number</p>";
            isValid = false;
        }
        if (PFRegNo === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter PF Reg Number</p>";
            isValid = false;
        }
    }
    else if (vendrotype === "Supplier" || vendrotype === "Trading Supply") {
        if (CstNo === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter CST Number</p>";
            isValid = false;
        }
    }
    if (Vendorname === null || Vendorname === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Vendor Name</p>";
        isValid = false;
    }
    if (PhoneNo === null || PhoneNo === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Phone No</p>";
        isValid = false;
    }
    else if (PhoneNo.length !== 10) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter 10 digit Phone No</p>";
        isValid = false;
    }

    if (MobileNo === null || MobileNo === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Mobile No</p>";
        isValid = false;
    }
    else if (MobileNo.length !== 10) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter 10 digit Phone No</p>";
        isValid = false;
    }
    if (Bankname === null || Bankname === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Bank Name</p>";
        isValid = false;
    }
    if (Accno === null || Accno === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Account No</p>";
        isValid = false;
    }
    if (IFSCCode === null || IFSCCode === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter IFSC Code</p>";
        isValid = false;
    }

    if (natureidIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Nature of Group</p>";
        isValid = false;
    }
    if (mastergrpIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Group</p>";
        isValid = false;
    }
    if (Address === null || Address === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Address</p>";
        isValid = false;
    }
    if ($("#txtupsubgrpexist").val() === '1' && subgrpidIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Group</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpVendorInfoMsg").text("");
        $("#divUpVendorInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpVendorInfoMsg").addClass("alert-danger");
        $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
    }
    else {
        //submit data with gst details       
        if ($('#chkUpVCGSTN').is(":checked")) {
            var gst = confirm('Apply GST');
            if (gst === true) {
                //show gst grid
                $("#chkUpVCGSTY").prop("checked", true);
                $("#chkUpVCGSTN").prop("checked", false);
                $("#divNVendorGst").removeClass('hidden');

                $("#divUpVendorInfoMsg").text("");
                $("#divUpVendorInfoMsg").addClass("hidden");
                emptyrowtoUpdatevendorgst();
            }
            else {
                //submit data without gst details
                UpdateVendor(Vendorcode, type, Status);
                $("#divUpVendorInfoMsg").text("");
                $("#divUpVendorInfoMsg").addClass("hidden");
            }
        } else {
            //alert('is NOT checked!');
            //submit data with gst details
            var ddlcount = 0;
            var amountcount = 0;
            var checkcount = 0;
            var list = [];
            $("#UpVendorGstTable tbody tr").each(function () {
                var currentRow = $(this);
                var col2_value = currentRow.find("td").eq(1).find("select option:selected").index();
                var col1_value = currentRow.find("td").eq(2).find("input[type='text']").val();
                var stateName = currentRow.find("td").eq(1).find("select option:selected").text();
                var check = currentRow.find('input[type="checkbox"]').is(':checked');
                var stateid = currentRow.find("td").eq(5).find("input[type='text']").val();
                if (col2_value === 0 && stateid === "0") {

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
                $("#divUpVendorInfoMsg").text("");
                $("#divUpVendorInfoMsg").append(finalerror1 + errorMsg + "</div>");
                $("#divUpVendorInfoMsg").addClass("alert-danger");
                $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
                return false;
            }
            else {
                $("#divUpVendorInfoMsg").text("");
                $("#divUpVendorInfoMsg").addClass("hidden");

                var duplicatelist = list.filter(i => list.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    var finalerror2 = "<div style='align:center'><p>Only One GST for One State</p>";
                    $("#divUpVendorInfoMsg").text("");
                    $("#divUpVendorInfoMsg").append(finalerror2 + "</div>");
                    $("#divUpVendorInfoMsg").addClass("alert-danger");
                    $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
                else {
                    $("#divUpVendorInfoMsg").text("");
                    $("#divUpVendorInfoMsg").addClass("hidden");

                    UpdateVendor(Vendorcode, type, Status);
                }
            }

        }
    }
}

function UpdateVendor(Vendorcode, type, Status) {
    var gstdeals = null;
    var gstApplicatble = 0;
    var rows = [];
    var GstStatids = "", GstNos = "";
    if ($('#chkUpVCGSTN').is(":checked")) { gstApplicatble = 0; }
    if ($('#chkUpVCGSTY').is(":checked")) {
        gstApplicatble = 1;
        var totalRowCount = $("#UpVendorGstTable tbody tr").length;
        $("#UpVendorGstTable tbody tr").each(function () {
            var currentRow = $(this);
            var state = currentRow.find("td").eq(1).find("select option:selected").val();
            var gstno = currentRow.find("td").eq(2).find("input[type='text']").val();
            var stateid = currentRow.find("td").eq(5).find("input[type='text']").val();
            if (stateid === "0") {
                GstStatids += state + ",";//for newly added gst
            }
            else {
                GstStatids += stateid + ",";//for old gst /not updated gst//CheckUpdationType: 'Insert'
            }
            //GstStatids += state + ",";
            GstNos += gstno + ",";

        });
    }
    var Address = "";
    if (Status === 'Approved') {

        Address = $("#txtEAddress").val();
    }
    else {
        Address = $("#txtUpAddress").val();
    }
    var subgroupid = 0;
    var subgroupexist = $("#txtupsubgrpexist").val();
    if (subgroupexist === '1') {
        subgroupid = $("#ddlUpVSubGroup option:selected").val();
    }
    var Vendordata = {};
    if (type === 'Service Provider') {
        Vendordata = {
            VendorCode: Vendorcode,
            Type: type,
            PanNo: $("#txtUpPanNo").val(),
            PFRegNo: $("#txtUpPFRegNo").val(),
            Phoneno: $("#txtUpPhoneno").val(),
            MobileNo: $("#txtUpMobileNo").val(),
            BankName: $("#txtUpBankName").val(),
            AccountNo: $("#txtUpAccNo").val(),
            IFSCode: $("#txtUpIFSCode").val(),
            Address: Address,
            NatureGroupId: $("#ddlUpVNatureGroup option:selected").val(),
            GroupId: $("#ddlUpVMasterGroup option:selected").val(),
            SubGroupId: subgroupid,
            Action: 'Update',
            GstApplicable: gstApplicatble,
            GSTStatesList: GstStatids,
            GSTNoList: GstNos,
            CheckUpdationType: 'ReturnUpdate'
        };
    }
    else {
        Vendordata = {
            VendorCode: Vendorcode,
            Type: type,
            CstNo: $("#txtUpCstNo").val(),
            Phoneno: $("#txtUpPhoneno").val(),
            MobileNo: $("#txtUpMobileNo").val(),
            BankName: $("#txtUpBankName").val(),
            AccountNo: $("#txtUpAccNo").val(),
            IFSCode: $("#txtUpIFSCode").val(),
            Address: Address,
            NatureGroupId: $("#ddlUpVNatureGroup option:selected").val(),
            GroupId: $("#ddlUpVMasterGroup option:selected").val(),
            SubGroupId: subgroupid,
            Action: 'Update',
            GstApplicable: gstApplicatble,
            GSTStatesList: GstStatids,
            GSTNoList: GstNos,
            CheckUpdationType: 'ReturnUpdate'

        };
    }

    addFailMsg = "Error Occurred While Adding New Vendor";
    addSuccessMsg = "Vendor Details Added Successfully.";

    if (Status !== "Approved") {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Purchase/UpdateVendor',
            data: { saveVendor: Vendordata },
            success: function (response) {
                if (response.saveStatus === "Updated") {
                    $('#ApproveVendorMsgModal').modal('show');
                    var msg = "<div>Vendor Updated Successfully</div>";
                    $("#AppVendorMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppVendorMsg").html(msg);
                    $('#ApproveVendorMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppVendorMsg").html(msg);
                $('#ApproveVendorMsgModal').modal('show');
            }
        });
    }
    else {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Purchase/UpdateVendor',
            data: { saveVendor: Vendordata },
            success: function (response) {
                if (response.saveStatus === "Updated") {
                    $("#divUpVendorInfoMsg").text(addSuccessMsg);
                    $("#divUpVendorInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpVendorInfoMsg").addClass("alert-success");
                    //$("#btnSubmitNewVendor").prop("disabled", true);
                }
                else {
                    $("#divUpVendorInfoMsg").text(response.saveStatus);
                    $("#divUpVendorInfoMsg").addClass("alert-danger");
                    $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
                    //$("#btnSubmitNewVendor").prop("disabled", true);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divUpVendorInfoMsg").text(addFailMsg);
                $("#divUpVendorInfoMsg").addClass("alert-danger");
                $("#divUpVendorInfoMsg").removeClass("hidden alert-success");
            }
        });
    }


}
//Sppo Creation script start

function NewSPPOCCChange() {

    var CCindex = $("#ddlNSppoCC option:selected").index();
    var ccode = $("#ddlNSppoCC option:selected").val();
    var ddlNSppoSubDCA = $("#ddlNSppoSubDCA");
    var ddlDcaCode = $("#ddlNSppoDCA");
    if (CCindex === 0) {
        $("#ddlNSppoDCA").prop("disabled", true);
        $("#ddlNSppoSubDCA").prop("disabled", true);
        ddlDcaCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        ddlNSppoSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        //$("#divGeneralPayInfoMsg").text("");
        //$("#divGeneralPayInfoMsg").addClass("hidden");
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Purchase/GetDCAByCCForSPPO",
            data: '{CCCode:"' + ccode + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                ddlDcaCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlDcaCode.append($("<option></option>").val(this['DCACode']).html(this['DCAIDSTR']));
                });
                $("#ddlNSppoDCA").prop("disabled", false);
                $("#ddlNSppoSubDCA").prop("disabled", true);
                //$("#divGeneralPayInfoMsg").text("");
                // $("#divGeneralPayInfoMsg").addClass("hidden");

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }

}
function NewSPPODCAChange() {
    var dcaindex = $("#ddlNSppoDCA option:selected").index();
    var dca = $("#ddlNSppoDCA option:selected").val();
    var ddlNSppoSubDCA = $("#ddlNSppoSubDCA");
    if (dcaindex === 0) {
        $("#ddlNSppoSubDCA").prop("disabled", true);
        ddlNSppoSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        //$("#divGeneralPayInfoMsg").text("");
        //$("#divGeneralPayInfoMsg").addClass("hidden");
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetSubDCAbyDCA",
            data: '{DCACode:"' + dca + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                ddlNSppoSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlNSppoSubDCA.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                });
                $("#ddlNSppoSubDCA").prop("disabled", false);

                //$("#divGeneralPayInfoMsg").text("");
                //$("#divGeneralPayInfoMsg").addClass("hidden");

            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function NewSPPOVendorChange() {
    //var vendorindex = $("#ddlNSppoVendor option:selected").index();
    //var vendor = $("#ddlNSppoVendor option:selected").val();
    //alert(vendor);
    //if (vendorindex === 0) {
    //    $("#txtvendordate").val("");
    //    $("#divNSppoDates").addClass("hidden");     
    //}
    //else {
    //    $.ajax({
    //        type: "POST",
    //        url: "/Purchase/GetDatebyVendorCode",
    //        data: '{VendorCode:"' + vendor + '"}',
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (response) {               
    //            $("#txtvendordate").val(response.VendorDate);
    //           // $("#txtNSppoStartDate").datepicker("minDate", 'dateToday');
    //            $("#txtNSppoStartDate").datepicker("option", "minDate", response.VendorDate);
    //            $("#txtNSppoEndDate").datepicker("option", "minDate", response.VendorDate);
    //            $("#divNSppoDates").removeClass("hidden");     
    //        },
    //        failure: function (response) {

    //        },
    //        error: function (response) {

    //        }
    //    });
    //}
}

function SPPODCAChange() {
    var dcaindex = $("#ddlUpSppoDCA option:selected").index();
    var dca = $("#ddlUpSppoDCA option:selected").val();
    var ddlNSppoSubDCA = $("#ddlUpSppoSubDCA");
    if (dcaindex === 0) {
        $("#ddlUpSppoSubDCA").prop("disabled", true);
        ddlNSppoSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divUpSPPOInfoMsg").text("");
        $("#divUpSPPOInfoMsg").append("<div>Select Sub Account Head</div>");
        $("#divUpSPPOInfoMsg").addClass("alert-danger");
        $("#divUpSPPOInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Accounts/GetSubDCAbyDCA",
            data: '{DCACode:"' + dca + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    ddlNSppoSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        ddlNSppoSubDCA.append($("<option></option>").val(this['SubDCACode']).html(this['SubDCAIDSTR']));
                    });
                    $("#ddlUpSppoSubDCA").prop("disabled", false);
                }
                else {
                    $("#divUpSPPOInfoMsg").text("");
                    $("#divUpSPPOInfoMsg").append("<div>Sub Account Head Does Not Exist</div>");
                    $("#divUpSPPOInfoMsg").addClass("alert-danger");
                    $("#divUpSPPOInfoMsg").removeClass("hidden alert-success");
                    $("#ddlUpSppoSubDCA").prop("disabled", true);
                    ddlNSppoSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                }
            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });

    }
}
function ChangeRatecolor() {
    $("#itemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        var rowPWR = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rowrate = currentRow.find("td").eq(7).find("input[type='text']").val();
        if (parseFloat(rowPWR) < parseFloat(rowrate)) { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'red' }); }
        else { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'black' }); }
    });

}
function CountItemDescAmount() {

    var finalamount = 0;
    $("#itemDescTable tbody tr").each(function () {

        var currentRow = $(this);
        var rowquantity = currentRow.find("td").eq(4).find("input[type='text']").val();
        var rowPWR = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rowrate = currentRow.find("td").eq(7).find("input[type='text']").val();
        var rowamount = currentRow.find("td").eq(8).find("input[type='text']");
        //var rate = currentRow.find("td").eq(7).find("input[type='text']");  
        var rowtotal = 0;

        if (parseFloat(rowPWR) < parseFloat(rowrate)) { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'red' }); }
        else { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'black' }); }

        if (rowquantity !== "" && rowrate !== "") {
            rowtotal = parseFloat(rowquantity) * parseFloat(rowrate);
            rowamount.val(rowtotal);
            finalamount = parseFloat(finalamount) + parseFloat(rowtotal);
        }
        else { rowamount.val(""); }
    });
    $("#itemDescTable tfoot tr").each(function () {
        var footerRow = $(this);
        // foottotal = footerRow.find("td").eq(7).find("input[type='text']");
        if (!isNaN(finalamount)) {
            footerRow.find("td").eq(7).html("<b>" + parseFloat(finalamount).toFixed(2) + "</b>");
        }
        else {
            footerRow.find("td").eq(7).html("");
        }
    });
}


function BindNewRowtoNewSPPOOItemDescGrid() {

    isValid = true;
    var errorMsg = "";
    var checkcount = 0, desccount = 0, unitcount = 0, qtycount = 0, oratecount = 0, prwcount = 0, ratecount = 0;
    $("#itemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var desc = currentRow.find("td").eq(2).find("textarea").val();
        var units = currentRow.find("td").eq(3).find("input[type='text']").val();
        var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
        var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
        var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
        if (check == false) { checkcount = checkcount + 1; }
        if (desc === "") { desccount = desccount + 1; }
        if (units === "") { unitcount = unitcount + 1; }
        if (qty === "") { qtycount = qtycount + 1; }
        if (ourrate === "") { oratecount = oratecount + 1; }
        if (prwrate === "") { prwcount = prwcount + 1; }
        if (rate === "") { ratecount = ratecount + 1; }

    });

    if (desccount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
        isValid = false;
    }
    if (unitcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Units</p>";
        isValid = false;
    }
    if (qtycount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Quantity</p>";
        isValid = false;
    }
    if (oratecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Our Rate</p>";
        isValid = false;
    }
    if (prwcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter PRW Rate</p>";
        isValid = false;
    }
    if (ratecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate</p>";
        isValid = false;
    }
    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Item Description </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSppoInfoMsg").text("");
        $("#divNewSppoInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoInfoMsg").addClass("alert-danger");
        $("#divNewSppoInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewSppoInfoMsg").text("");
        $("#divNewSppoInfoMsg").addClass("hidden");

        var count = $("#itemDescTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td  class="tbodytdcls"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppouitemDesc">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td  class="tbodytdcls"><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td  class="tbodytdcls" ><textarea class="form-control txtitemdesc" rows="1" cols="50" onkeypress="return RestrictComma(this,event);"></textarea></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtUnit" value="" onkeypress="return RestrictComma(this,event);"/></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtQuantity" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountItemDescAmount()" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtOurRate" value="" onkeypress="return ValidateAmount(this,event);" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtPRWRate" value="" onkeypress="return ValidateAmount(this,event);"  onkeyup="ChangeRatecolor()"/></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtRate" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountItemDescAmount()" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtAmount" value="" disabled /></td>';
        cols += '<td  class="tbodytdcls"><input type="button" class="ibtnNsppoItemDescDel btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.itemDesc").append(newRow);
    }
}

function BindEmptyRowtoNewSppoGrid() {
    $("#divNewSppoInfoMsg").text("");
    $("#divNewSppoInfoMsg").addClass("hidden");

    var count = $("#itemDescTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td  class="tbodytdcls"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppouitemDesc">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td  class="tbodytdcls"><label style="margin-top:10%">' + rowno + '</label></td>';
    cols += '<td  class="tbodytdcls" ><textarea class="form-control txtitemdesc" rows="1" cols="50" onkeypress="return RestrictComma(this,event);"></textarea></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtUnit" value="" onkeypress="return RestrictComma(this,event);" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtQuantity" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountItemDescAmount()" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtOurRate" value="" onkeypress="return ValidateAmount(this,event);" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtPRWRate" value="" onkeypress="return ValidateAmount(this,event);"  onkeyup="ChangeRatecolor()"/></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtRate" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountItemDescAmount()" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtAmount" value="" disabled /></td>';
    cols += '<td  class="tbodytdcls"><input type="button" class="ibtnNsppoItemDescDel btn btn-md btn-danger" value="Delete"></td>';
    newRow.append(cols);
    $("table.order-list.itemDesc").append(newRow);


}
function ReassignRowNo() {
    var rowno = 1;
    $("#itemDescTable tbody tr").each(function () {

        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function BindNewRowtoNewSPPOOTACGrid() {
    isValid = true;
    var errorMsg = "";
    var checkcount = 0, tcacount = 0;
    $("#TACTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();
        if (check === false) { checkcount = checkcount + 1; }
        if (tca === "") { tcacount = tcacount + 1; }
    });

    if (tcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
        isValid = false;
    }

    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSppoInfoMsg").text("");
        $("#divNewSppoInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoInfoMsg").addClass("alert-danger");
        $("#divNewSppoInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewSppoInfoMsg").text("");
        $("#divNewSppoInfoMsg").addClass("hidden");

        var count = $("#TACTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppoTAC">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"  onkeypress="return RestrictPipeSymbol(this,event);"></textarea></td>';
        cols += '<td style="text-align:center"><input type="button" class="ibtnNsppoTACDel btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.tactable").append(newRow);
    }
}
function ReassignRowNoTAC() {
    var rowno = 1;
    $("#TACTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function BindEmptyRowtoNewSppoTACGrid() {
    $("#divNewSppoInfoMsg").text("");
    $("#divNewSppoInfoMsg").addClass("hidden");

    var count = $("#TACTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppoTAC">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
    cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"  onkeypress="return RestrictPipeSymbol(this,event);"></textarea></td>';
    cols += '<td style="text-align:center"><input type="button" class="ibtnNsppoItemDescDel btn btn-md btn-danger" value="Delete"></td>';
    newRow.append(cols);
    $("table.order-list.tactable").append(newRow);
}
function SubmitNewSPPOData() {
    isValid = true;
    var errorMsg = "";
    var Vendorcode = $("#ddlNSppoVendor option:selected").index();
    var CCCode = $("#ddlNSppoCC option:selected").index();
    var DcaCode = $("#ddlNSppoDCA option:selected").index();
    var SubDCACode = $("#ddlNSppoSubDCA option:selected").index();
    var StartDate = $("#txtNSppoStartDate").val();
    var EndDate = $("#txtNSppoEndDate").val();
    if (Vendorcode === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Vendor Code</p>";
        isValid = false;
    }
    if (CCCode === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
        isValid = false;
    }
    if (DcaCode === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
        isValid = false;
    }
    if (SubDCACode === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Account Head</p>";
        isValid = false;
    }
    if (StartDate === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select PO Start Date</p>";
        isValid = false;
    }
    if (EndDate === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select PO Completion Date</p>";
        isValid = false;
    }
    var desctablerowcount = $("#itemDescTable tbody tr").length;
    var tactablerowcount = $("#TACTable tbody tr").length;
    if (desctablerowcount > 0) {
        //Desc GRID
        var desccheckcount = 0, desccount = 0, unitcount = 0, qtycount = 0, oratecount = 0, prwcount = 0, ratecount = 0, ratehighcount = 0;
        $("#itemDescTable tbody tr").each(function () {
            var currentRow = $(this);
            var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
            var desc = currentRow.find("td").eq(2).find("textarea").val();
            var units = currentRow.find("td").eq(3).find("input[type='text']").val();
            var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
            var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
            var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
            var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
            if (check === false) { desccheckcount = desccheckcount + 1; }
            if (desc === "") { desccount = desccount + 1; }
            if (units === "") { unitcount = unitcount + 1; }
            if (qty === "") { qtycount = qtycount + 1; }
            if (ourrate === "") { oratecount = oratecount + 1; }
            if (prwrate === "") { prwcount = prwcount + 1; }
            if (rate === "") { ratecount = ratecount + 1; }
            if (prwrate !== "" && rate !== "" && parseFloat(prwrate) < parseFloat(rate)) {
                ratehighcount = ratehighcount + 1;
            }

        });

        if (desctablerowcount === 1 && (desccount > 0 && unitcount > 0 && unitcount > 0 && qtycount > 0 && oratecount > 0 && prwcount > 0 && ratecount > 0 && desccheckcount > 0)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Atleast One Item Description</p>";
            isValid = false;
        }
        else {
            // if (desctablerowcount > 1 && (desccount > 0 && unitcount > 0 && unitcount > 0 && qtycount > 0 && oratecount > 0 && prwcount > 0 && ratecount > 0 && desccheckcount > 0)) {
            if (desccount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
                isValid = false;
            }
            if (unitcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Units</p>";
                isValid = false;
            }
            if (qtycount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Quantity</p>";
                isValid = false;
            }
            if (oratecount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Our Rate</p>";
                isValid = false;
            }
            if (prwcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter PRW Rate</p>";
                isValid = false;
            }
            if (ratecount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate</p>";
                isValid = false;
            }
            if (desccheckcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Check Item Description </p>";
                isValid = false;
            }
            if (ratehighcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Rate is greater than PWR Rate </p>";
                isValid = false;
            }
            //}
        }
    }
    //TAC Grid
    if (tactablerowcount > 0) {
        var checkcount = 0, tcacount = 0;
        $("#TACTable tbody tr").each(function () {
            var currentRow = $(this);
            var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
            var tca = currentRow.find("td").eq(2).find("textarea").val();
            if (check === false) { checkcount = checkcount + 1; }
            if (tca === "") { tcacount = tcacount + 1; }
        });

        if (tactablerowcount === 1 && (checkcount > 0 && tcacount > 0)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Atleast One Terms & Conditions </p>";
            isValid = false;

        }
        else {
            //if (tactablerowcount > 1 && (checkcount > 0 && tcacount > 0)) {
            if (tcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
                isValid = false;
            }

            if (checkcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
                isValid = false;
            }

        }

    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSppoInfoMsg").text("");
        $("#divNewSppoInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoInfoMsg").addClass("alert-danger");
        $("#divNewSppoInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewSppoInfoMsg").text("");
        $("#divNewSppoInfoMsg").addClass("hidden");
        SaveNewSppo();
    }
}

function SaveNewSppo() {
    var Vendorcode = $("#ddlNSppoVendor option:selected").val();
    var CCCode = $("#ddlNSppoCC option:selected").val();
    var DcaCode = $("#ddlNSppoDCA option:selected").val();
    var SubDCACode = $("#ddlNSppoSubDCA option:selected").val();
    var StartDate = $("#txtNSppoStartDate").val();
    var EndDate = $("#txtNSppoEndDate").val();
    var Alldesc = "", Allunit = "", Allqty = "", Allorate = "", Allprw = "", Allrate = "", Allamounts = "", TotalAmount = 0;
    $("#itemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        var desc = currentRow.find("td").eq(2).find("textarea").val();
        var units = currentRow.find("td").eq(3).find("input[type='text']").val();
        var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
        var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
        var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
        var amt = currentRow.find("td").eq(8).find("input[type='text']").val();
        Alldesc += desc + ",";
        Allunit += units + ",";
        Allqty += qty + ",";
        Allorate += ourrate + ",";
        Allprw += prwrate + ",";
        Allrate += rate + ",";
        Allamounts += amt + ",";
        TotalAmount = parseFloat(TotalAmount) + parseFloat(amt);
    });
    var RemarksData = "";
    $("#TACTable tbody tr").each(function () {
        var currentRow = $(this);
        var tca = currentRow.find("td").eq(2).find("textarea").val();
        RemarksData += tca + "|";
    });
    var SpData = {
        VendorCode: Vendorcode,
        CCCode: CCCode,
        DCACode: DcaCode,
        SubDcaCode: SubDCACode,
        SPPOStartDate: StartDate,
        SPPOEndDate: EndDate,
        TotalValue: TotalAmount,
        ItemDescs: Alldesc,
        ItemUnits: Allunit,
        ItemQtys: Allqty,
        ItemClientRates: Allorate,
        ItemPWRRate: Allprw,
        ItemRates: Allrate,
        ItemAmounts: Allamounts,
        Remarks: RemarksData,
        Action: 'Add'
    };
    debugger;
    addFailMsg = "Error Occurred While Adding New Service Provider";
    addSuccessMsg = "Service Provider Details Added Successfully.";

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/SaveNewServiceProvider',
        data: { sppoData: SpData },
        success: function (Data) {
            if (Data.saveStatus === 'Submited') {
                $("#divNewSppoInfoMsg").text(addSuccessMsg);
                $("#divNewSppoInfoMsg").removeClass("hidden alert-danger");
                $("#divNewSppoInfoMsg").addClass("alert-success");
                $("#btnSubmitNewSPPO").prop("disabled", true);
            }
            else {
                $("#divNewSppoInfoMsg").text(Data.saveStatus);
                $("#divNewSppoInfoMsg").addClass("alert-danger");
                $("#divNewSppoInfoMsg").removeClass("hidden alert-success");
                $("#btnSubmitNewSPPO").prop("disabled", true);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divNewSppoInfoMsg").text(addFailMsg);
            $("#divNewSppoInfoMsg").addClass("alert-danger");
            $("#divNewSppoInfoMsg").removeClass("hidden alert-success");
            $("#btnSubmitNewSPPO").prop("disabled", true);
        }
    });
}
function ResetSPPO() {
    location.reload();
    //$("#ddlNSppoDCA").prop("disabled", true);
    //$("#ddlNSppoSubDCA").prop("disabled", true);
    //ddlDcaCode.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //ddlNSppoSubDCA.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //$("#txtNSppoStartDate").datepicker("setDate", 'dateToday');
    //$("#txtNSppoEndDate").datepicker("setDate", 'dateToday');
}
//Verification

function BindNewRowtoApprSPPOOTACGrid() {
    isValid = true;
    var errorMsg = "";
    var checkcount = 0, tcacount = 0;
    $("#ApprTACTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();

        if (check === false) { checkcount = checkcount + 1; }
        if (tca === "") { tcacount = tcacount + 1; }


    });

    if (tcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
        isValid = false;
    }

    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divApprSPPOInfoMsg").text("");
        $("#divApprSPPOInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divApprSPPOInfoMsg").addClass("alert-danger");
        $("#divApprSPPOInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divApprSPPOInfoMsg").text("");
        $("#divApprSPPOInfoMsg").addClass("hidden");

        var count = $("#ApprTACTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppoTAC">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"></textarea></td>';
        cols += '<td style="text-align:center"><input type="button" class="ibtnApprsppoTACDel btn btn-md btn-danger" value="Delete"></td>';
        cols += '<td style="text-align:center">New</td>';
        newRow.append(cols);
        $("table.order-list.apprtactable").append(newRow);
    }
}
function ReassignRowNoApprTAC() {
    var rowno = 1;
    $("#ApprTACTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}

function ApproveSPPO(Vendorcode, sppono, CCCode, totalvalue, postartdate, dcacode) {
    isValid = true;
    var errorMsg = "";
    var desccheckcount = 0;
    $("#itemDescApprTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        if (check === false) { desccheckcount = desccheckcount + 1; }


    });
    if (desccheckcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Item Description </p>";
        isValid = false;
    }
    var checkcount = 0, tcacount = 0;
    $("#ApprTACTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();
        var type = currentRow.find("td").eq(2).html();
        if (check === false) { checkcount = checkcount + 1; }
        if (type !== "old") {
            if (tca === "") { tcacount = tcacount + 1; }
        }
    });
    if (tcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
        isValid = false;
    }
    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
        isValid = false;
    }
    var appstatus = $("#Appsppostatus option:selected").text();
    retnote = $("#AppSPPONote").val();
    msg = $("#divApprSPPOInfoMsg");
    if (appstatus === "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Note</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divApprSPPOInfoMsg").text("");
        $("#divApprSPPOInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divApprSPPOInfoMsg").addClass("alert-danger");
        $("#divApprSPPOInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {       
        $("#divApprSPPOInfoMsg").text("");
        $("#divApprSPPOInfoMsg").addClass("hidden");

        var RemarksData = "";
        $("#ApprTACTable tbody tr").each(function () {
            var currentRow = $(this);
            var tca = currentRow.find("td").eq(2).find("textarea").val();
            RemarksData += tca + "|";
        });
        var SpData = {
            VendorCode: Vendorcode,
            CCCode: CCCode,
            DCACode: dcacode,
            SPPOStartDate: postartdate,
            TotalValue: totalvalue,
            Remarks: RemarksData,
            Action: appstatus,
            ApprovalNote: retnote,
            SPPONo: sppono
        };

        addFailMsg = "Error Occurred While Serivice Provider Verification";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/Purchase/ApproveSPPO",
            data: JSON.stringify({ apprSPPO: SpData }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApprovesppoMsgModal').modal('show');
                    var msg = "<div>Service Provider " + finalmsg + "</div>";
                    $("#AppSPPOMsg").html(msg);
                }
               
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppSPPOMsg").html(msg1);
                    $('#ApprovesppoMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppSPPOMsg").html(msg);
                $('#ApprovesppoMsgModal').modal('show');
            }
        });
    }
}
//Update
function BindNewRowtoUpdateSPPOOItemDescGrid() {
    isValid = true;
    var errorMsg = "";
    var checkcount = 0, desccount = 0, unitcount = 0, qtycount = 0, oratecount = 0, prwcount = 0, ratecount = 0;
    $("#itemDescUpTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var desc = currentRow.find("td").eq(2).find("textarea").val();
        var units = currentRow.find("td").eq(3).find("input[type='text']").val();
        var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
        var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
        var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
        if (check === false) { checkcount = checkcount + 1; }
        if (desc === "") { desccount = desccount + 1; }
        if (units === "") { unitcount = unitcount + 1; }
        if (qty === "") { qtycount = qtycount + 1; }
        if (ourrate === "") { oratecount = oratecount + 1; }
        if (prwrate === "") { prwcount = prwcount + 1; }
        if (rate === "") { ratecount = ratecount + 1; }

    });

    if (desccount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
        isValid = false;
    }
    if (unitcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Units</p>";
        isValid = false;
    }
    if (qtycount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Quantity</p>";
        isValid = false;
    }
    if (oratecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Our Rate</p>";
        isValid = false;
    }
    if (prwcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter PRW Rate</p>";
        isValid = false;
    }
    if (ratecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate</p>";
        isValid = false;
    }
    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Item Description </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSPPOInfoMsg").text("");
        $("#divUpSPPOInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpSPPOInfoMsg").addClass("alert-danger");
        $("#divUpSPPOInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpSPPOInfoMsg").text("");
        $("#divUpSPPOInfoMsg").addClass("hidden");

        var count = $("#itemDescUpTable tbody tr").length;
       // alert(count);
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td  class="tbodytdcls"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppouitemDesc">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td  class="tbodytdcls"><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td  class="tbodytdcls" ><textarea class="form-control txtitemdesc" rows="1" cols="50" onkeypress="return RestrictComma(this,event);"></textarea></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtUnit" value="" onkeypress="return RestrictComma(this,event);"/></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtQuantity" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountUpdateItemDescAmount()" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtOurRate" value="" onkeypress="return ValidateAmount(this,event);" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtPRWRate" value="" onkeypress="return ValidateAmount(this,event);"  onkeyup="ChangeRatecolorforUpSPPO()"/></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtRate" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountUpdateItemDescAmount()" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtAmount" value="" disabled /></td>';
        cols += '<td  class="tbodytdcls"><input type="button" class="ibtnUpsppoItemDescDel btn btn-md btn-danger" value="Delete"></td>';
        cols += '<td  class="tbodytdcls">New</td>';
        newRow.append(cols);
        $("table.order-list.upitemDesc").append(newRow);
    }

}
function CountUpdateItemDescAmount() {

    var finalamount = 0;
    $("#itemDescUpTable tbody tr").each(function () {

        var currentRow = $(this);
        var rowquantity = currentRow.find("td").eq(4).find("input[type='text']").val();
        var rowPWR = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rowrate = currentRow.find("td").eq(7).find("input[type='text']").val();
        var rowamount = currentRow.find("td").eq(8).find("input[type='text']");
        //var rate = currentRow.find("td").eq(7).find("input[type='text']");  
        var rowtotal = 0;
        if (parseFloat(rowPWR) < parseFloat(rowrate)) { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'red' }); }
        else { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'black' }); }

        if (rowquantity !== "" && rowrate !== "") {
            rowtotal = parseFloat(rowquantity) * parseFloat(rowrate);
            rowamount.val(rowtotal);
            finalamount = parseFloat(finalamount) + parseFloat(rowtotal);
        }
        else { rowamount.val(""); }
    });
    $("#itemDescUpTable tfoot tr").each(function () {
        var footerRow = $(this);
        // foottotal = footerRow.find("td").eq(7).find("input[type='text']");
        if (!isNaN(finalamount)) {
            footerRow.find("td").eq(7).html("<b>" + parseFloat(finalamount).toFixed(2) + "</b>");
        }
        else {
            footerRow.find("td").eq(7).html("");
        }
    });
}
function ReassignRowNoforUpSPPO() {
    var rowno = 1;
    $("#itemDescUpTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function BindEmptyRowtoUpSppoGrid() {
    $("#divUpSPPOInfoMsg").text("");
    $("#divUpSPPOInfoMsg").addClass("hidden");

    var count = $("#itemDescUpTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td  class="tbodytdcls"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppouitemDesc">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td  class="tbodytdcls"><label style="margin-top:10%">' + rowno + '</label></td>';
    cols += '<td  class="tbodytdcls" ><textarea class="form-control txtitemdesc" rows="1" cols="50"  onkeypress="return RestrictComma(this,event);"></textarea></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtUnit" value="" onkeypress="return RestrictComma(this,event);" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtQuantity" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountUpdateItemDescAmount()" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtOurRate" value="" onkeypress="return ValidateAmount(this,event);" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtPRWRate" value="" onkeypress="return ValidateAmount(this,event);"  onkeyup="ChangeRatecolorforUpSPPO()"/></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtRate" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountUpdateItemDescAmount()" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtAmount" value="" disabled /></td>';
    cols += '<td  class="tbodytdcls"><input type="button" class="ibtnUpsppoItemDescDel btn btn-md btn-danger" value="Delete"></td>';
    cols += '<td  class="tbodytdcls">New</td>';
    newRow.append(cols);
    $("table.order-list.upitemDesc").append(newRow);
}
function ChangeRatecolorforUpSPPO() {
    $("#itemDescUpTable tbody tr").each(function () {
        var currentRow = $(this);
        var rowPWR = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rowrate = currentRow.find("td").eq(7).find("input[type='text']").val();
        if (parseFloat(rowPWR) < parseFloat(rowrate)) { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'red' }); }
        else { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'black' }); }
    });

}
function BindNewRowtoUpSPPOOTACGrid() {
    isValid = true;
    var errorMsg = "";
    var checkcount = 0, tcacount = 0;
    $("#TACUpTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();

        if (check === false) { checkcount = checkcount + 1; }
        if (tca === "") { tcacount = tcacount + 1; }


    });

    if (tcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
        isValid = false;
    }

    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSPPOInfoMsg").text("");
        $("#divUpSPPOInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpSPPOInfoMsg").addClass("alert-danger");
        $("#divUpSPPOInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpSPPOInfoMsg").text("");
        $("#divUpSPPOInfoMsg").addClass("hidden");

        var count = $("#TACUpTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppoTAC">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"  onkeypress="return RestrictPipeSymbol(this,event);"></textarea></td>';
        cols += '<td style="text-align:center"><input type="button" class="ibtnUpsppoTACDel btn btn-md btn-danger" value="Delete"></td>';
        cols += '<td style="text-align:center">New</td>';
        newRow.append(cols);
        $("table.order-list.uptactable").append(newRow);
    }
}
function ReassignRowNoUpTAC() {
    var rowno = 1;
    $("#TACUpTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function BindEmptyRowtoUpSppoTACGrid() {
    $("#divUpSPPOInfoMsg").text("");
    $("#divUpSPPOInfoMsg").addClass("hidden");

    var count = $("#TACUpTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppoTAC">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
    cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"  onkeypress="return RestrictPipeSymbol(this,event);"></textarea></td>';
    cols += '<td style="text-align:center"><input type="button" class="ibtnUpsppoTACDel btn btn-md btn-danger" value="Delete"></td>';
    cols += '<td style="text-align:center">New</td>';
    newRow.append(cols);
    $("table.order-list.uptactable").append(newRow);
}
function UpdateSPPOData(Vendorcode, Sppono, Cccode) {
    isValid = true;
    var errorMsg = "";


    var DcaCode = $("#ddlUpSppoDCA option:selected").index();
    var SubDCACode = $("#ddlUpSppoSubDCA option:selected").index();
    var StartDate = $("#txtUpSppoStartDate").val();
    var EndDate = $("#txtUpSppoEndDate").val();

    if (DcaCode === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
        isValid = false;
    }
    if (SubDCACode === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Account Head</p>";
        isValid = false;
    }
    if (StartDate === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select PO Start Date</p>";
        isValid = false;
    }
    if (EndDate === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select PO Completion Date</p>";
        isValid = false;
    }
    var desctablerowcount = $("#itemDescUpTable tbody tr").length;
    var tactablerowcount = $("#TACUpTable tbody tr").length;
    if (desctablerowcount > 0) {
        //Desc GRID
        var desccheckcount = 0, desccount = 0, unitcount = 0, qtycount = 0, oratecount = 0, prwcount = 0, ratecount = 0, ratehighcount = 0;
        $("#itemDescUpTable tbody tr").each(function () {
            var currentRow = $(this);
            var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
            var desc = currentRow.find("td").eq(2).find("textarea").val();
            var units = currentRow.find("td").eq(3).find("input[type='text']").val();
            var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
            var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
            var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
            var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
            if (check === false) { desccheckcount = desccheckcount + 1; }
            if (desc === "") { desccount = desccount + 1; }
            if (units === "") { unitcount = unitcount + 1; }
            if (qty === "") { qtycount = qtycount + 1; }
            if (ourrate === "") { oratecount = oratecount + 1; }
            if (prwrate === "") { prwcount = prwcount + 1; }
            if (rate === "") { ratecount = ratecount + 1; }
            if (prwrate !== "" && rate !== "" && parseFloat(prwrate) < parseFloat(rate)) {
                ratehighcount = ratehighcount + 1;
            }
        });
        if (desctablerowcount === 1 && (desccount > 0 && unitcount > 0 && unitcount > 0 && qtycount > 0 && oratecount > 0 && prwcount > 0 && ratecount > 0 && desccheckcount > 0)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Atleast One Item Description</p>";
            isValid = false;
        }
        else {
            // if (desctablerowcount > 1 && (desccount > 0 && unitcount > 0 && unitcount > 0 && qtycount > 0 && oratecount > 0 && prwcount > 0 && ratecount > 0 && desccheckcount > 0)) {
            if (desccount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
                isValid = false;
            }
            if (unitcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Units</p>";
                isValid = false;
            }
            if (qtycount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Quantity</p>";
                isValid = false;
            }
            if (oratecount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Our Rate</p>";
                isValid = false;
            }
            if (prwcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter PRW Rate</p>";
                isValid = false;
            }
            if (ratecount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate</p>";
                isValid = false;
            }
            if (desccheckcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Check Item Description </p>";
                isValid = false;
            }
            if (ratehighcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Rate is greater than PWR Rate </p>";
                isValid = false;
            }

        }
    }
    //TAC Grid
    if (tactablerowcount > 0) {
        var checkcount = 0, tcacount = 0;
        $("#TACUpTable tbody tr").each(function () {
            var currentRow = $(this);
            var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
            var tca = currentRow.find("td").eq(2).find("textarea").val();
            if (check === false) { checkcount = checkcount + 1; }
            if (tca === "") { tcacount = tcacount + 1; }
        });

        if (tactablerowcount === 1 && (checkcount > 0 && tcacount > 0)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Atleast One Terms & Conditions </p>";
            isValid = false;

        }
        else {
            //if (tactablerowcount > 1 && (checkcount > 0 && tcacount > 0)) {
            if (tcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
                isValid = false;
            }

            if (checkcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
                isValid = false;
            }

        }

    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSPPOInfoMsg").text("");
        $("#divUpSPPOInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpSPPOInfoMsg").addClass("alert-danger");
        $("#divUpSPPOInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpSPPOInfoMsg").text("");
        $("#divUpSPPOInfoMsg").addClass("hidden");
        EditSppo(Vendorcode, Sppono, Cccode);
    }

}

function EditSppo(Vendorcode, Sppono, Cccode) {

    var DcaCode = $("#ddlUpSppoDCA option:selected").val();
    var SubDCACode = $("#ddlUpSppoSubDCA option:selected").val();
    var StartDate = $("#txtUpSppoStartDate").val();
    var EndDate = $("#txtUpSppoEndDate").val();


    var Alldesc = "", Allunit = "", Allqty = "", Allorate = "", Allprw = "", Allrate = "", Allamounts = "", TotalAmount = 0;
    $("#itemDescUpTable tbody tr").each(function () {
        var currentRow = $(this);

        var desc = currentRow.find("td").eq(2).find("textarea").val();
        var units = currentRow.find("td").eq(3).find("input[type='text']").val();
        var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
        var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
        var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
        var amt = currentRow.find("td").eq(8).find("input[type='text']").val();
        var type = currentRow.find("td").eq(10).html();
        //if (type === "New") {
        Alldesc += desc + ",";
        Allunit += units + ",";
        Allqty += qty + ",";
        Allorate += ourrate + ",";
        Allprw += prwrate + ",";
        Allrate += rate + ",";
        Allamounts += amt + ",";
        //}
        TotalAmount = parseFloat(TotalAmount) + parseFloat(amt);
    });
    var RemarksData = "";
    $("#TACUpTable tbody tr").each(function () {
        var currentRow = $(this);
        var tca = currentRow.find("td").eq(2).find("textarea").val();
        RemarksData += tca + "|";
    });
    var SpData = {
        VendorCode: Vendorcode,
        CCCode: Cccode,
        DCACode: DcaCode,
        SubDcaCode: SubDCACode,
        SPPOStartDate: StartDate,
        SPPOEndDate: EndDate,
        TotalValue: TotalAmount,
        ItemDescs: Alldesc,
        ItemUnits: Allunit,
        ItemQtys: Allqty,
        ItemClientRates: Allorate,
        ItemPWRRate: Allprw,
        ItemRates: Allrate,
        ItemAmounts: Allamounts,
        Remarks: RemarksData,
        Action: 'Update',
        OldDCACode: $("#txtolddca").val(),
        OldPOValue: $("#txtoldPoValue").val(),
        SPPONo: Sppono
    };
    debugger;
    addFailMsg = "Error Occurred While Updatin Service Provider";
    addSuccessMsg = "Service Provider Details Update Successfully.";

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/UpdateServiceProvider',
        data: { sppoData: SpData },
        success: function (Data) {
            if (Data.saveStatus === 'Submited') {
                $('#ApprovesppoMsgModal').modal('show');
                var msg = "<div>" + addSuccessMsg + "</div>";
                $("#AppSPPOMsg").html(msg);
            }
            else {
                var msg1 = "<div>" + response.saveStatus + "</div>";
                $("#AppSPPOMsg").html(msg1);
                $('#ApprovesppoMsgModal').modal('show');
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var msg2 = "<div>" + addFailMsg + "</div>";
            $("#AppSPPOMsg").html(msg2);
            $('#ApprovesppoMsgModal').modal('show');
        }
    });
}
//Sppo Creation script End

//SPPO Amend Script Start
function NewSPPOAmendVendorChange() {
    var vendoridIndex = $("#ddlNSpAmendVendor option:selected").index();
    var vendorid = $("#ddlNSpAmendVendor option:selected").val();
    var ccddl = $("#ddlNSpAmendCC");
    var poddl = $("#ddlNSpAmendPONo");
    if (vendoridIndex === 0) {
        location.reload();
        //ccddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        //poddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');       
        //$("#divNAmendDates").addClass("hidden");
    } else {
        $.ajax({
            type: "POST",
            url: "/Purchase/GetCCForSPPOAmendbyVendor",
            data: '{VendorCode:"' + vendorid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    ccddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        ccddl.append($("<option></option>").val(this['CC_Code']).html(this['CC_Name']));
                    });
                    $("#divNewSppoAmendInfoMsg").text("");
                    $("#divNewSppoAmendInfoMsg").addClass("hidden");

                    $("#divNAmendDates").addClass("hidden");
                }
                else {
                    $("#divNewSppoAmendInfoMsg").text("");
                    $("#divNewSppoAmendInfoMsg").append("<div>Cost Center Does Not Exist</div>");
                    $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
                    $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");

                    $("#divNAmendDates").addClass("hidden");
                }
            },
            failure: function (response) {

            },
            error: function (response) {
            }
        });

    }

}
function NewSPPOAmendCCChange() {
    var vendoridIndex = $("#ddlNSpAmendVendor option:selected").index();
    var vendorid = $("#ddlNSpAmendVendor option:selected").val();

    var ccIndex = $("#ddlNSpAmendCC option:selected").index();
    var cc = $("#ddlNSpAmendCC option:selected").val();
    var poddl = $("#ddlNSpAmendPONo");
    if (ccIndex === 0) {
        poddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divNAmendDates").addClass("hidden");
        $("#divOlditemDescGrid").addClass("hidden");
        $("#divTotals").addClass("hidden");
        $("#divnewitems").addClass("hidden");
        $("#divitemDescGrid").addClass("hidden");
        $("#txtNSpAemndPOMinusValue").css("color", "green");
        $("#txtNSpAemndPOPlusValue").css("color", "red");
        $("#btnRemovenewitems").addClass("hidden");
        $("#btnSubmitNewSPPOAmend").addClass("hidden");
        $("#divSpAmendTACGrid").addClass("hidden");
    } else {
        $.ajax({
            type: "POST",
            url: "/Purchase/GetPOForSPPOAmend",
            data: '{VendorCode:"' + vendorid + '",CCCode:"' + cc + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    poddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        poddl.append($("<option></option>").val(this['SPPONo']).html(this['SPPONoDesc']));
                    });
                    $("#divNewSppoAmendInfoMsg").text("");
                    $("#divNewSppoAmendInfoMsg").addClass("hidden");
                    $("#divNAmendDates").addClass("hidden");
                }
                else {
                    $("#divNewSppoAmendInfoMsg").text("");
                    $("#divNewSppoAmendInfoMsg").append("<div>PO Does Not Exist</div>");
                    $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
                    $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");

                    $("#divNAmendDates").addClass("hidden");
                }
            },
            failure: function (response) {

            },
            error: function (response) {
            }
        });

    }
}



function BindNewRowtoNewAmendSPPOOItemDescGrid() {

    isValid = true;
    var errorMsg = "";
    var checkcount = 0, desccount = 0, unitcount = 0, qtycount = 0, oratecount = 0, prwcount = 0, ratecount = 0;
    $("#AmenditemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var desc = currentRow.find("td").eq(2).find("textarea").val();
        var units = currentRow.find("td").eq(3).find("input[type='text']").val();
        var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
        var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
        var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
        if (check == false) { checkcount = checkcount + 1; }
        if (desc === "") { desccount = desccount + 1; }
        if (units === "") { unitcount = unitcount + 1; }
        if (qty === "") { qtycount = qtycount + 1; }
        if (ourrate === "") { oratecount = oratecount + 1; }
        if (prwrate === "") { prwcount = prwcount + 1; }
        if (rate === "") { ratecount = ratecount + 1; }

    });

    if (desccount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
        isValid = false;
    }
    if (unitcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Units</p>";
        isValid = false;
    }
    if (qtycount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Quantity</p>";
        isValid = false;
    }
    if (oratecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Our Rate</p>";
        isValid = false;
    }
    if (prwcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter PRW Rate</p>";
        isValid = false;
    }
    if (ratecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate</p>";
        isValid = false;
    }
    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Item Description </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSppoAmendInfoMsg").text("");
        $("#divNewSppoAmendInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
        $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewSppoAmendInfoMsg").text("");
        $("#divNewSppoAmendInfoMsg").addClass("hidden");

        var count = $("#AmenditemDescTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td  class="tbodytdcls"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppouitemDesc">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td  class="tbodytdcls"><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td  class="tbodytdcls" ><textarea class="form-control txtitemdesc" rows="1" cols="50" onkeypress="return RestrictComma(this,event);"></textarea></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtUnit" value="" onkeypress="return RestrictComma(this,event);"/></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtQuantity" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountAmendItemDescAmount()" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtOurRate" value="" onkeypress="return ValidateAmount(this,event);" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtPRWRate" value="" onkeypress="return ValidateAmount(this,event);"  onkeyup="ChangeAmendRatecolor()"/></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtRate" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountAmendItemDescAmount()" /></td>';
        cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtAmount" value="" disabled /></td>';
        cols += '<td  class="tbodytdcls"><input type="button" class="ibtnAmendNsppoItemDescDel btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.AmenditemDesc").append(newRow);
    }
}

function BindEmptyRowtoAmendNewSppoGrid() {
    $("#divNewSppoAmendInfoMsg").text("");
    $("#divNewSppoAmendInfoMsg").addClass("hidden");

    var count = $("#AmenditemDescTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td  class="tbodytdcls"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppouitemDesc">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td  class="tbodytdcls"><label style="margin-top:10%">' + rowno + '</label></td>';
    cols += '<td  class="tbodytdcls" ><textarea class="form-control txtitemdesc" rows="1" cols="50" onkeypress="return RestrictComma(this,event);"></textarea></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtUnit" value="" onkeypress="return RestrictComma(this,event);" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtQuantity" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountAmendItemDescAmount()" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtOurRate" value="" onkeypress="return ValidateAmount(this,event);" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtPRWRate" value="" onkeypress="return ValidateAmount(this,event);"  onkeyup="ChangeAmendRatecolor()"/></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtRate" value="" onkeypress="return ValidateAmount(this,event);" onkeyup="CountAmendItemDescAmount()" /></td>';
    cols += '<td  class="tbodytdcls" ><input type="text" class="form-control txtAmount" value="" disabled /></td>';
    cols += '<td  class="tbodytdcls"><input type="button" class="ibtnAmendNsppoItemDescDel btn btn-md btn-danger" value="Delete"></td>';
    newRow.append(cols);
    $("table.order-list.AmenditemDesc").append(newRow);
}
function ReassignRowNoToAmenditemDescTable() {
    var rowno = 1;
    $("#AmenditemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function AddNewItemsForAmend() {
    $("#AmenditemDescTable tbody tr").remove();
    $("#divitemDescGrid").removeClass("hidden");
    $("#btnRemovenewitems").removeClass("hidden");
    $("#btnAddnewitems").addClass("hidden");
    BindEmptyRowtoAmendNewSppoGrid();
}
function ChangeAmendRatecolor() {
    $("#AmenditemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        var rowPWR = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rowrate = currentRow.find("td").eq(7).find("input[type='text']").val();
        if (parseFloat(rowPWR) < parseFloat(rowrate)) { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'red' }); }
        else { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'black' }); }
    });
}
function RemoveNewItemsForAmend() {
    $("#AmenditemDescTable tbody tr").remove();
    $("#divitemDescGrid").addClass("hidden");
    $("#btnRemovenewitems").addClass("hidden");
    $("#btnAddnewitems").removeClass("hidden");
}
function ResetSPPOAmend() {
    location.reload();
}
function BindNewRowtoAmendSPPOOTACGrid() {
    isValid = true;
    var errorMsg = "";
    var checkcount = 0, tcacount = 0;
    $("#AmendTACTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();
        var type = currentRow.find("td").eq(4).html();
        //alert(type);
        if (type === "New") {
            if (check === false) { checkcount = checkcount + 1; }
            if (tca === "") { tcacount = tcacount + 1; }
        }
    });

    if (tcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
        isValid = false;
    }

    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSppoAmendInfoMsg").text("");
        $("#divNewSppoAmendInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
        $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewSppoAmendInfoMsg").text("");
        $("#divNewSppoAmendInfoMsg").addClass("hidden");

        var count = $("#AmendTACTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" >';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"  onkeypress="return RestrictPipeSymbol(this,event);"></textarea></td>';
        cols += '<td style="text-align:center"><input type="button" class="ibtnNsppoAmendTACDel btn btn-md btn-danger" value="Delete"></td>';
        cols += '<td style="text-align:center" class="hidden">New</td>';
        newRow.append(cols);
        $("table.order-list.amendtactable").append(newRow);
    }

}
function ReassignRowNoAmendTAC() {
    var rowno = 1;
    $("#AmendTACTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}

function ApproveSPPOAmend(AmendId, SPPONo, VCode, CCCode, AmendDate, DCACode, AmendAmount, SubstractAmount) {
    isValid = true;
    var errorMsg = "";
    var appstatus = $("#AppsppoAmendstatus option:selected").text();
    retnote = $("#AppSPPOAmendNote").val();
    msg = $("#divApprSPPOInfoMsg");
    if (appstatus === "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Note</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divApprSPPOAmendInfoMsg").text("");
        $("#divApprSPPOAmendInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divApprSPPOAmendInfoMsg").addClass("alert-danger");
        $("#divApprSPPOAmendInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divApprSPPOAmendInfoMsg").text("");
        $("#divApprSPPOAmendInfoMsg").addClass("hidden");
        var amendData = {
            AmendId: AmendId,
            SPPONo: SPPONo,
            VendorCode: VCode,
            CCCode: CCCode,
            DCACode: DCACode,
            AmendDate: AmendDate,
            Action: appstatus,
            ApprovalNote: retnote,
            AmendAmount: AmendAmount,
            SubstractAmount: SubstractAmount
        };
        addFailMsg = "Error Occurred While SPPO Amend Verification";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/Purchase/ApproveSPPOAmend",
            data: JSON.stringify({ apprSPPOAmend: amendData }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApprovespAmendMsgModal').modal('show');
                    var msg = "<div>SPPO Amend " + finalmsg + "</div>";
                    $("#AppSPAmendMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppSPAmendMsg").html(msg);
                    $('#ApprovespAmendMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppSPAmendMsg").html(msg);
                $('#ApprovespAmendMsgModal').modal('show');
            }
        });
    }

}
function ChangeUpAmendRatecolor() {

    $("#UpAmenditemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        var rowPWR = currentRow.find("td").eq(6).find("input[type='text']").val();
        var rowrate = currentRow.find("td").eq(7).find("input[type='text']").val();
        if (parseFloat(rowPWR) < parseFloat(rowrate)) { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'red' }); }
        else { currentRow.find("td").eq(7).find("input[type='text']").css({ 'color': 'black' }); }
    });
}
function UpdateSPPOAmendData(AmendId, SPPONo, VendorCode, CCCode, AmendDate, DCACode, oldReturnAmount, oldAmendAmount) {

    var errorMsg = "";
    isValid = true;

    var amendqtyccount = 0, amenttypecount = 0, qtyvalidcount = 0;

    $("#UpAmendOlditemDescTable tbody tr").each(function () {

        var currentRow = $(this);
        //var typeindex = currentRow.find("td").eq(6).find("select  option:selected").index();
        var actualqty = currentRow.find("td").eq(4).find("input[type='text']").val();
        var amendQty = currentRow.find("td").eq(7).find("input[type='text']").val();
        //if (typeindex === 0) {
        //    amenttypecount = amenttypecount + 1;
        //}
        if (amendQty === "" || parseInt(amendQty) === 0) {
            amendqtyccount = amendqtyccount + 1;
        }
        if (parseFloat(actualqty) < parseFloat(amendQty)) {
            qtyvalidcount = qtyvalidcount + 1;
        }

    });
    if (amendqtyccount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'> Select Amend Quantity for Old Items</p>";
        isValid = false;
    }
    //if (amenttypecount > 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Amend Type for Old Items</p>";
    //    isValid = false;
    //}
    if (qtyvalidcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Invalid Amend Quantity</p>";
        isValid = false;
    }

    var desctablerowcount = $("#UpAmenditemDescTable tbody tr").length;
    if (desctablerowcount > 0) {
        //Desc GRID
        var desccheckcount = 0, desccount = 0, unitcount = 0, qtycount = 0, oratecount = 0, prwcount = 0, ratecount = 0, ratehighcount = 0;
        $("#UpAmenditemDescTable tbody tr").each(function () {
            var currentRow = $(this);
            var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
            var desc = currentRow.find("td").eq(2).find("textarea").val();
            var units = currentRow.find("td").eq(3).find("input[type='text']").val();
            var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
            var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
            var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
            var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
            if (check === false) { desccheckcount = desccheckcount + 1; }
            if (desc === "") { desccount = desccount + 1; }
            if (units === "") { unitcount = unitcount + 1; }
            if (qty === "") { qtycount = qtycount + 1; }
            if (ourrate === "") { oratecount = oratecount + 1; }
            if (prwrate === "") { prwcount = prwcount + 1; }
            if (rate === "") { ratecount = ratecount + 1; }
            if (prwrate !== "" && rate !== "" && parseFloat(prwrate) < parseFloat(rate)) {
                ratehighcount = ratehighcount + 1;
            }

        });

        if (desccount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
            isValid = false;
        }
        if (unitcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Units</p>";
            isValid = false;
        }
        if (qtycount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Quantity</p>";
            isValid = false;
        }
        if (oratecount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Our Rate</p>";
            isValid = false;
        }
        if (prwcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter PRW Rate</p>";
            isValid = false;
        }
        if (ratecount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Rate</p>";
            isValid = false;
        }
        if (desccheckcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check Item Description </p>";
            isValid = false;
        }
        if (ratehighcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Rate is greater than PWR Rate </p>";
            isValid = false;
        }
    }
    var checkcount = 0, tcacount = 0, newtacrowcount = 0;
    $("#UpTACTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();
        var type = currentRow.find("td").eq(4).html();
        if (check === false) { checkcount = checkcount + 1; }
        if (type !== "Old") {
            if (tca === "") { tcacount = tcacount + 1; }
            newtacrowcount = newtacrowcount + 1;
        }

    });

    if (parseInt(newtacrowcount) === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Atleast One Terms & Conditions </p>";
        isValid = false;
    }
    else {
        if (tcacount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
            isValid = false;
        }
        if (checkcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSppoAmendInfoMsg").text("");
        $("#divUpSppoAmendInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divUpSppoAmendInfoMsg").addClass("alert-danger");
        $("#divUpSppoAmendInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divUpSppoAmendInfoMsg").text("");
        $("#divUpSppoAmendInfoMsg").addClass("hidden");
        UpdateSPPOAmend(AmendId, SPPONo, VendorCode, CCCode, AmendDate, DCACode, oldReturnAmount, oldAmendAmount);
    }
}
function UpdateSPPOAmend(AmendId, SPPONo, VendorCode, CCCode, AmendDate, DCACode, oldAmendAmount, oldReturnAmount) {

    var Returnamount = $("#txtUpSpAemndPOMinusValue").val();
    var Amendamount = $("#txtUpSpAemndPOPlusValue").val();

    var olddescids = "", Oldqty = "", Oldamounts = "", OldType = "";
    //, olddesc = "", Oldunit = "", Oldrate = "",
    $("#UpAmendOlditemDescTable tbody tr").each(function () {
        var currentRow = $(this);
        //var desc = currentRow.find("td").eq(2).find("textarea").val();
        //var units = currentRow.find("td").eq(3).find("input[type='text']").val();
        //var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
        //var rate = currentRow.find("td").eq(5).find("input[type='text']").val();
        //var type = currentRow.find("td").eq(6).find("select  option:selected").val();
        var amendQty = currentRow.find("td").eq(7).find("input[type='text']").val();
        var amt = currentRow.find("td").eq(8).find("input[type='text']").val();
        var id = currentRow.find("td").eq(10).html();
        //olddesc += desc + ",";
        //Oldunit += units + ",";
        Oldqty += amendQty + ",";
        //Oldrate += rate + ",";
        Oldamounts += amt + ",";
        //OldType += type + ",";
        olddescids += id + ",";
    });

    var Newunit = "", Newqty = "", Neworate = "", Newprw = "", Newrate = "", Newamounts = "", Newdescids = "";
    var desctablerowcount = $("#UpAmenditemDescTable tbody tr").length;
    if (desctablerowcount > 0) {
        $("#UpAmenditemDescTable tbody tr").each(function () {
            var currentRow = $(this);
            //var desc = currentRow.find("td").eq(2).find("textarea").val();
            var units = currentRow.find("td").eq(3).find("input[type='text']").val();
            var qty = currentRow.find("td").eq(4).find("input[type='text']").val();
            var ourrate = currentRow.find("td").eq(5).find("input[type='text']").val();
            var prwrate = currentRow.find("td").eq(6).find("input[type='text']").val();
            var rate = currentRow.find("td").eq(7).find("input[type='text']").val();
            var amt = currentRow.find("td").eq(8).find("input[type='text']").val();
            var id = currentRow.find("td").eq(9).html();
            //Newdesc += desc + ",";
            Newunit += units + ",";
            Newqty += qty + ",";
            Neworate += ourrate + ",";
            Newprw += prwrate + ",";
            Newrate += rate + ",";
            Newamounts += amt + ",";
            Newdescids += id + ",";
        });
    }
    var SpData = {
        AmendId: AmendId,
        AmendDate: AmendDate,
        AmendAmount: Amendamount,
        SPPONo: SPPONo,
        SubstractAmount: Returnamount,
        CCCode: CCCode,
        VendorCode: VendorCode,
        OldItemIds: olddescids,
        OldItemQtys: Oldqty,
        OldItemAmounts: Oldamounts,
        NewItemUnits: Newunit,
        NewItemQtys: Newqty,
        NewItemRates: Newrate,
        NewItemAmounts: Newamounts,
        NewItemClientRates: Neworate,
        NewItemPWRRate: Newprw,
        NewItemIds: Newdescids,
        OldReturnAmount: oldReturnAmount,
        OldAmendAmount: oldAmendAmount
    };
    
    addFailMsg = "Error Occurred While Updating SPPO Amend";
    addSuccessMsg = "SPPO Amend Details Updated Successfully.";

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/UpdateSPPOAmemd',
        data: { upSPPOAmend: SpData },
        success: function (Data) {
            if (response.saveStatus === "Submited") {
                $('#ApprovespAmendMsgModal').modal('show');
                var msg = "<div>" + addSuccessMsg + "</div>";
                $("#AppSPAmendMsg").html(msg);
            }
            else {
                var msg1 = "<div>" + Data.saveStatus + "</div>";
                $("#AppSPAmendMsg").html(msg);
                $('#ApprovespAmendMsgModal').modal('show');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var msg = "<div>" + addFailMsg + " </div>";
            $("#AppSPAmendMsg").html(msg);
            $('#ApprovespAmendMsgModal').modal('show');
        }

    });
}
//SPPO Amend Script END
//SPPO Invoice Script Start
function NewSPPOInvVendorChange() {
    var vendorindex = $("#ddlNSpInvVendor option:selected").index();
    var vendor = $("#ddlNSpInvVendor option:selected").val();
    var ddlNSpInvPONo = $("#ddlNSpInvPONo");
    if (vendorindex === 0) {
        location.reload();
        //$("#ddlNSpInvPONo").prop("disabled", true);
        //ddlNSpInvPONo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Purchase/GetPOForSPPOInvoice",
            data: '{VendorCode:"' + vendor + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                ddlNSpInvPONo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                $.each(response, function () {
                    ddlNSpInvPONo.append($("<option></option>").val(this['SPPONo']).html(this['SPPONoDesc']));
                });
                $("#ddlNSpInvPONo").prop("disabled", false);
                GetVendorClientGST(vendor, 'Service Provider');
            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}

function GetVendorClientGST(Vendorcode,type) {    
    $.ajax({
        type: "POST",
        url: "/Purchase/GetVendorClientGSTNos",
        data: '{Taxtype:"' + type + '",Taxfor:"' + Vendorcode + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var ddlgst = $("#ddlPOVendorGST");
            ddlgst.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                ddlgst.append($("<option></option>").val(this['TaxNoID']).html(this['TaxNoName']));
            });
            //$("#ddlPOVendorGST").prop("disabled", false);
        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });
}

function NewSPPOInvPOChange() {
    var poindex = $("#ddlNSpInvPONo option:selected").index();
    var po = $("#ddlNSpInvPONo option:selected").val();
    if (poindex === 0) {
        ClearSPPOInvoice();
    }
    else {
        $.ajax({
            type: "POST",
            url: "/Purchase/GetPODetailsForSPPOInvoice",
            data: '{PNo:"' + po + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $("#txtNSpInvCCCode").val(response.CCCode);
                $("#txtNSpInvDCACode").val(response.DCACode);
                $("#txtNSpInvSubDcaCode").val(response.SubDCACode);
                $("#txtPOStartdate").val(response.POStartDate);
                $("#txtNSpInvDate").datepicker("option", "minDate", response.POStartDate);
                $("#txtNSpInvMakingDate").datepicker("option", "minDate", response.POStartDate);
                $("#divPOData").removeClass("hidden");
                $("#divPOInvDetails").removeClass("hidden");
                $("#TaxGrid").addClass("hidden");
                $("#btnRemoveTaxes").addClass("hidden");
                $("#btnAddTaxes").removeClass("hidden");
                $("#txtNSpInvDate").datepicker("option", "disabled", false);
                $("#divSPInvOtherChargeGrid").removeClass('hidden');
                $("#btnSubmitNewSPPOAmend").removeClass('hidden');
                $("#btnSubmitNewSPPOAmend").prop("disabled", false);
                RemoveTaxesForSPPOInvoice();
                HideOtherChargesGrid();
                HideDeductionGrid();
            },
            failure: function (response) {

            },
            error: function (response) {

            }
        });
    }
}
function ClearSPPOInvoice() {
    $("#txtNSpInvCCCode").val("");
    $("#txtNSpInvDCACode").val("");
    $("#txtNSpInvSubDcaCode").val("");
    $("#divPOInvData").addClass("hidden");
    $("#divPOData").addClass("hidden");
    $("#divPOInvDetails").addClass("hidden");
    $("#TaxGrid").addClass("hidden");
    $("#btnRemoveTaxes").addClass("hidden");
    $("#btnAddTaxes").removeClass("hidden");
    $("#OtherGrid").addClass('hidden');
    $("#DeductionGrid").addClass('hidden');
    $("#divSPInvOtherChargeGrid").addClass('hidden');
    RemoveTaxesForSPPOInvoice();
    HideOtherChargesGrid();
    HideDeductionGrid();
    $("#btnSubmitNewSPPOAmend").addClass('hidden');
    $("#btnSubmitNewSPPOAmend").prop("disabled", false);
    $('#chkSPPOInvOtherchargeY').prop("checked", false);
    $('#chkSPPOInvOtherchargeN').prop("checked", true);
    $('#chkSPPOInvDeductionY').prop("checked", false);
    $('#chkSPPOInvDeductionN').prop("checked", true);

    $("#txtNSpInvNo").val("");
    $("#txtMinus").val("");
    //$("#txtNSpInvMakingDate").val("");
    $("#txtNSpInvBalance").val("");
    $("#txtNSpInvValue").val("");
    $("#txtNSpInvDescription").val("");
    $("#txtNSpInvRetention").val("");
    $("#txtNSpInvHold").val("");
    $("#txtNSpInvNetAmount").val("");
    $("#txtNSpInvDate").datepicker("setDate", 'dateToday');
    $("#txtNSpInvMakingDate").datepicker("setDate", 'dateToday');
    $("#divNewSppoInvInfoMsg").text("");
    $("#divNewSppoInvInfoMsg").addClass("hidden");
}

function BindEmptyRowToSPPOTaxesGrid() {
    var count = $("#SPInvTaxTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td style="text-align:center"  >' + rowno + '</td>';
    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkClientTax">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppotaxtype">';
    cols += '<option selected="selected" value="Select">-Select-</option>';
    cols += '<option value="Creditable">Creditable</option>';
    cols += '<option value="Non-Creditable">Non-Creditable</option></select></td>';
    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppotaxdca" >';
    cols += '<option selected="selected" value="Select" >-Select-</option></select></td>';
    cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle sppotaxsdca" >';
    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
    cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle sppotaxname" >';
    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
    cols += '<td style="text-align:center"><input type="text" class="form-control sppotaxamount" value=""  onkeypress = "return ValidateAmount(this,event);" onkeyup="CountPOInvoiceTotal()"/></td>';

    cols += '<td style="text-align:center"><input type="button" class="ibtnsppoTaxdelete btn btn-md btn-danger" value="Delete"></td>';
    newRow.append(cols);
    $("table.order-list.SPInvTaxTable").append(newRow);
}
function BindNewRowtoSPPOTaxGrid() {
    isValid = true;
    var errorMsg = "";
    var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#SPInvTaxTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');
        var taxtype = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxdca = currentRow.find("td").eq(3).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(4).find("select option:selected").index();
        var taxname = currentRow.find("td").eq(5).find("select option:selected").index();
        var taxamount = currentRow.find("td").eq(6).find("input[type='text']").val();
        if (taxtype === 0) { typecount = typecount + 1; }
        if (taxdca === 0) { dcacount = dcacount + 1; }

        if (taxsdca === 0) { sdcacount = sdcacount + 1; }
        if (taxname === 0) { taxcount = taxcount + 1; }
        if (taxamount === "" || taxamount === "0") { taxvaluecount = taxvaluecount + 1; }
        if (check === false) { taxchkcount = taxchkcount + 1; }

    });

    if (typecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Tax Type</p>";
        isValid = false;
    }
    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Account Head</p>";
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
        $("#divNewSppoInvInfoMsg").text("");
        $("#divNewSppoInvInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoInvInfoMsg").addClass("alert-danger");
        $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var selecteddcalist = [];
        $("#SPInvTaxTable tbody tr").each(function () {
            var currentRow = $(this);
            var taxdca = currentRow.find("td").eq(3).find("select option:selected").val();
            var taxsdca = currentRow.find("td").eq(4).find("select option:selected").val();
            if (taxdca !== 0 && taxsdca!==0) {
                selecteddcalist.push(taxdca + "," + taxsdca);
            }
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Tax</p>";
            $("#divNewSppoInvInfoMsg").text("");
            $("#divNewSppoInvInfoMsg").append(finalerror2 + "</div>");
            $("#divNewSppoInvInfoMsg").addClass("alert-danger");
            $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divNewSppoInvInfoMsg").text("");
            $("#divNewSppoInvInfoMsg").addClass("hidden");
            BindEmptyRowToSPPOTaxesGrid();
        }

    }
}

function ReassignRowNoSPPOInvTax() {
    var rowno = 1;
    $("#SPInvTaxTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(0).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function SPPOInvOtherChargeValidation(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('SPPOInvOtherCharges');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    var ids = document.getElementsByName('SPPOInvOtherCharges');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked === true) {
            // alert(ids[i].value);
            if (ids[i].value === 'Yes') {
                ShowOtherChargesGrid();
            }
            if (ids[i].value === 'No') {
                HideOtherChargesGrid();
            }
        }
    }
}
function ShowOtherChargesGrid() {
    $("#SPInvOtherChargeTable tbody tr").remove();
    BindEmptyRowToSPPOInvOtherGrid();
    $("#divNewSppoInvInfoMsg").text("");
    $("#divNewSppoInvInfoMsg").addClass("hidden");
}
function HideOtherChargesGrid() {    
    $("#OtherGrid").addClass('hidden');   
    $("#divNewSppoInvInfoMsg").text("");
    $("#divNewSppoInvInfoMsg").addClass("hidden");
    $("#SPInvOtherChargeTable tfoot tr").each(function () {
        var footerRow = $(this);
               
            footerRow.find("td").eq(4).html("");
       
    });
    $("#SPInvOtherChargeTable tbody tr").remove();
    CountPOInvoiceTotal();
}
function BindEmptyRowToSPPOInvOtherGrid() {
    var ponumber = $("#ddlNSpInvPONo option:selected").index();
    if (ponumber == 0) {
        $("#divNewSppoInvInfoMsg").append("<div>Select PO Number</div>");
        $("#divNewSppoInvInfoMsg").addClass("alert-danger");
        $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divNewSppoInvInfoMsg").text("");
        $("#divNewSppoInvInfoMsg").addClass("hidden");
        var type = 'Other';
        var invdate = $("#txtNSpInvDate").val();
        var cc = $("#txtNSpInvCCCode").val();
        $.ajax({
            type: "POST",
            url: "/Purchase/GetSPPOInvOtherDeductionDCA",
            data: "{CCCode:'" + cc + "' ,TaxType: '" + type + "',Invdate: '" + invdate + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    var count = $("#SPInvOtherChargeTable tbody tr").length;
                    if (count > 0) {
                        var selecteddcalist = [];

                        $("#SPInvOtherChargeTable tbody tr").each(function () {
                            var currentRow = $(this);
                            var otherdcaindex = currentRow.find("td").eq(2).find("select option:selected").index();
                            var othersdcaindex = currentRow.find("td").eq(3).find("select option:selected").index();
                            if (otherdcaindex !== 0 && othersdcaindex !== 0) {
                                var otherdca = currentRow.find("td").eq(2).find("select option:selected").val();
                                var othersdca1 = currentRow.find("td").eq(3).find("select option:selected").val();
                                selecteddcalist.push(otherdca + "," + othersdca1);
                            }
                        });
                    }
                    var rowno = 0;
                    rowno = count + 1;
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center"  >' + rowno + '</td>';
                    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
                    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkClientTax">';
                    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';

                    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppoOtherChargedca" >';
                    cols += '<option selected="selected" value="Select" >-Select-</option>';
                    $.each(response, function () {
                        //if (count > 0) {
                        //    var status = checkValueInArray(this['DCACode'], selecteddcalist);
                        //    if (status === false) {
                        //        cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                        //    }
                        //}
                        //else {
                            cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                        //}
                    });
                    cols += '</select></td><td  style="text-align:center"><select class="form-control dropdown-toggle sppoOtherChargesdca" >';
                    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
                    cols += '<td style="text-align:center"><input type="text" class="form-control sppoOtherChargeamount" value=""  onkeypress = "return ValidateAmount(this,event);" onkeyup="CountPOInvoiceTotal()"/></td>';

                    cols += '<td style="text-align:center"><input type="button" class="ibtnsppoInvOtherChargedelete btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.SPInvOtherChargeTable").append(newRow);

                    $("#OtherGrid").removeClass('hidden');
                }
                else {
                    $("#OtherGrid").addClass('hidden');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function ReassignRowNoSPPOInvOtherCharge() {
    var rowno = 1;
    $("#SPInvOtherChargeTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(0).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function BindNewRowtoSPPOOtherChargeGrid() {

    isValid = true;
    var errorMsg = "";
    var dcacount = 0, sdcacount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#SPInvOtherChargeTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');

        var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();

        var taxamount = currentRow.find("td").eq(4).find("input[type='text']").val();

        if (taxdca === 0) { dcacount = dcacount + 1; }
        if (taxsdca === 0) { sdcacount = sdcacount + 1; }
        if (taxamount === "" || taxamount === "0") { taxvaluecount = taxvaluecount + 1; }
        if (check === false) { taxchkcount = taxchkcount + 1; }

    });


    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Other Charge Account Head</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Other Charge Sub Account Head</p>";
        isValid = false;
    }

    if (taxvaluecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Other Charge Amount</p>";
        isValid = false;
    }
    if (taxchkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Other Charges </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSppoInvInfoMsg").text("");
        $("#divNewSppoInvInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoInvInfoMsg").addClass("alert-danger");
        $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var selecteddcalist = [];
        $("#SPInvOtherChargeTable tbody tr").each(function () {
            var currentRow = $(this);
            //var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
            //if (taxdca !== 0) {
            //    selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
            //}
            var otherdcaindex = currentRow.find("td").eq(2).find("select option:selected").index();
            var othersdcaindex = currentRow.find("td").eq(3).find("select option:selected").index();
            if (otherdcaindex !== 0 && othersdcaindex !== 0) {
                var otherdca = currentRow.find("td").eq(2).find("select option:selected").val();
                var othersdca1 = currentRow.find("td").eq(3).find("select option:selected").val();
                selecteddcalist.push(otherdca + "," + othersdca1);
            }
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Other Cahrge</p>";
            $("#divNewSppoInvInfoMsg").text("");
            $("#divNewSppoInvInfoMsg").append(finalerror2 + "</div>");
            $("#divNewSppoInvInfoMsg").addClass("alert-danger");
            $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divNewSppoInvInfoMsg").text("");
            $("#divNewSppoInvInfoMsg").addClass("hidden");
            BindEmptyRowToSPPOInvOtherGrid();
        }

    }
}
function SPPOInvDeductionValidation(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('SPPOInvDeduction');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    var ids = document.getElementsByName('SPPOInvDeduction');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked === true) {
            if (ids[i].value === 'Yes') {
                ShowDeductionGrid();
            }
            if (ids[i].value === 'No') {
                HideDeductionGrid();
            }

        }

    }
}
function HideDeductionGrid() {
   
    $("#DeductionGrid").addClass('hidden');
    $("#SPInvDeductionTable tfoot tr").each(function () {
        var footerRow = $(this);     
        footerRow.find("td").eq(4).html("");        
    });
    $("#SPInvDeductionTable tbody tr").remove();
    CountPOInvoiceTotal();
}
function ShowDeductionGrid() {
    $("#SPInvDeductionTable tbody tr").remove();
    BindEmptyRowToSPPOInvDeductionGrid();

}


function BindEmptyRowToSPPOInvDeductionGrid() {
    var ponumber = $("#ddlNSpInvPONo option:selected").index();
    if (ponumber == 0) {

        $("#divNewSppoInvInfoMsg").append("<div>Select PO Number</div>");
        $("#divNewSppoInvInfoMsg").addClass("alert-danger");
        $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divNewSppoInvInfoMsg").text("");
        $("#divNewSppoInvInfoMsg").addClass("hidden");

        var type = 'Deduction';
        var invdate = $("#txtNSpInvDate").val();
        var cc = $("#txtNSpInvCCCode").val();
        $.ajax({
            type: "POST",
            url: "/Purchase/GetSPPOInvOtherDeductionDCA",
            data: "{CCCode:'" + cc + "' ,TaxType: '" + type + "',Invdate: '" + invdate + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    var count = $("#SPInvDeductionTable tbody tr").length;
                    if (count > 0) {
                        var selecteddcalist = [];

                        $("#SPInvDeductionTable tbody tr").each(function () {
                            var currentRow = $(this);
                            //var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
                            //if (taxdca !== 0) {
                            //    selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                            //}
                            var otherdcaindex = currentRow.find("td").eq(2).find("select option:selected").index();
                            var othersdcaindex = currentRow.find("td").eq(3).find("select option:selected").index();
                            if (otherdcaindex !== 0 && othersdcaindex !== 0) {
                                var otherdca = currentRow.find("td").eq(2).find("select option:selected").val();
                                var othersdca1 = currentRow.find("td").eq(3).find("select option:selected").val();
                                selecteddcalist.push(otherdca + "," + othersdca1);
                            }
                        });
                    }

                    var rowno = 0;

                    rowno = count + 1;
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center"  >' + rowno + '</td>';
                    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
                    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkClientTax">';
                    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';

                    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppoDeddca" >';
                    cols += '<option selected="selected" value="Select" >-Select-</option>';
                    $.each(response, function () {
                        //if (count > 0) {
                        //    var status = checkValueInArray(this['DCACode'], selecteddcalist);
                        //    if (status === false) {
                        //        cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                        //    }
                        //}
                        //else {
                            cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                        //}
                    });
                    cols += '</select></td><td  style="text-align:center"><select class="form-control dropdown-toggle sppoDedsdca" >';
                    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
                    cols += '<td style="text-align:center"><input type="text" class="form-control sppoDedamount" value=""  onkeypress = "return ValidateAmount(this,event);" onkeyup="CountPOInvoiceTotal()"/></td>';

                    cols += '<td style="text-align:center"><input type="button" class="ibtnsppoInvDeddelete btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.SPInvDeductionTable").append(newRow);

                    $("#DeductionGrid").removeClass('hidden');
                }
                else {
                    $("#DeductionGrid").addClass('hidden');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
    function ReassignRowNoSPPOInvDeduction() {
        var rowno = 1;
        $("#SPInvDeductionTable tbody tr").each(function () {
            var currentRow = $(this);
            currentRow.find("td").eq(0).html('<label style="margin-top:10%">' + rowno + '<label>');
            rowno++;
        });
    }
}
function BindNewRowtoSPPODeductionGrid() {

    isValid = true;
    var errorMsg = "";
    var dcacount = 0, sdcacount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#SPInvDeductionTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');

        var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();

        var taxamount = currentRow.find("td").eq(4).find("input[type='text']").val();

        if (taxdca === 0) { dcacount = dcacount + 1; }
        if (taxsdca === 0) { sdcacount = sdcacount + 1; }
        if (taxamount === "" || taxamount === "0") { taxvaluecount = taxvaluecount + 1; }
        if (check === false) { taxchkcount = taxchkcount + 1; }

    });


    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Sub Account Head</p>";
        isValid = false;
    }

    if (taxvaluecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
        isValid = false;
    }
    if (taxchkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Deduction </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSppoInvInfoMsg").text("");
        $("#divNewSppoInvInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSppoInvInfoMsg").addClass("alert-danger");
        $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var selecteddcalist = [];
        $("#SPInvDeductionTable tbody tr").each(function () {
            var currentRow = $(this);
            var otherdcaindex = currentRow.find("td").eq(2).find("select option:selected").index();
            var othersdcaindex = currentRow.find("td").eq(3).find("select option:selected").index();
            if (otherdcaindex !== 0 && othersdcaindex !== 0) {
                var otherdca = currentRow.find("td").eq(2).find("select option:selected").val();
                var othersdca1 = currentRow.find("td").eq(3).find("select option:selected").val();
                selecteddcalist.push(otherdca + "," + othersdca1);
            }
            //var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
            //if (taxdca !== 0) {
            //    selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
            //}
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Deduction</p>";
            $("#divNewSppoInvInfoMsg").text("");
            $("#divNewSppoInvInfoMsg").append(finalerror2 + "</div>");
            $("#divNewSppoInvInfoMsg").addClass("alert-danger");
            $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divNewSppoInvInfoMsg").text("");
            $("#divNewSppoInvInfoMsg").addClass("hidden");
            BindEmptyRowToSPPOInvDeductionGrid();
        }

    }
}
function ResetSPPOInvoice() {
    location.reload();
}

function ApproveSPPOInvoice(InvoiceData) {
    console.log(InvoiceData);

    var appstatus = $("#AppsppoInvstatus option:selected").text();
    retnote = $("#AppSPPOInvNote").val();
    msg = $("#divApprSPPOInvInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus === "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote === "") {
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
        var TaxTypes = "", Taxdcas = "", TaxAmounts = "";
        var Otherdcas = "", OtherAmounts = "";
        var Deddcas = "", DedAmounts = "";
        //if (InvoiceData.TaxList.length > 0) {
        //    InvoiceData.TaxList.forEach((element, index) => {

        TaxTypes = InvoiceData.GSTType;
        Taxdcas = InvoiceData.Taxdcas ;
        TaxAmounts = InvoiceData.TaxTotal;
        //    });
        //}
        if (InvoiceData.OtherChargeList.length > 0) {
            InvoiceData.OtherChargeList.forEach((element, index) => {

                Otherdcas += element.DCACode + ',';
                OtherAmounts += element.Amount + ',';
            });
        }
        if (InvoiceData.DeductionList.length > 0) {
            InvoiceData.DeductionList.forEach((element, index) => {

                Deddcas += element.DCACode + ',';
                DedAmounts += element.Amount + ',';
            });
        }
        var ApproveInvoice = {
            SPPOInvoiceNo: InvoiceData.SPPOInvoiceNo,
            SPPONo: InvoiceData.SPPONo,
            SPPOInvoiceDate: InvoiceData.SPPOInvoiceDate,
            SPPOBasicValue: InvoiceData.SPPOBasicValue,
            CCCode: InvoiceData.CCCode,
            Action: appstatus,
            ApprovalNote: retnote,
            Taxtypes: TaxTypes,
            Taxdcas: Taxdcas,
            Taxamounts: TaxAmounts,
            Otherchargedcas: Otherdcas,
            Otherchargeamounts: OtherAmounts,
            Deductiondcas: Deddcas,
            Deductionamounts: DedAmounts
        };
        debugger;
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
            url: "/Purchase/ApproveSPPOInvoice",
            data: JSON.stringify({ InvData: ApproveInvoice }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApprovesppoInvMsgModal').modal('show');
                    var msg = "<div>Inovice " + finalmsg + "</div>";
                    $("#AppSPPOInvMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppSPPOInvMsg").html(msg);
                    $('#ApprovesppoInvMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppSPPOInvMsg").html(msg);
                $('#ApprovesppoInvMsgModal').modal('show');
            }
        });
    }
}

//Update 
function AddTaxesForSPPOInvoiceEdit() {
    $("#UpSPInvTaxTable tbody tr").remove();
    BindEmptyRowToEditSPPOTaxesGrid();
    $("#btnRemoveEditTaxes").removeClass("hidden");
    $("#btnAddEditTaxes").addClass("hidden");
    $("#UpTaxGrid").removeClass("hidden");
}
function RemoveTaxesForSPPOInvoiceEdit() {
    $("#UpSPInvTaxTable tbody tr").remove();
    $("#UpSPInvTaxTable thead tr").remove();
    $("#UpSPInvTaxTable tfoot tr").remove();
    $("#UpTaxGrid").addClass("hidden");
    $("#btnRemoveEditTaxes").addClass("hidden");
    $("#btnAddEditTaxes").removeClass("hidden");
    $("#gststatecheck").val("");
    CountEditPOInvoiceTotal();
}
function BindEmptyRowToEditSPPOTaxesGrid() {
    var count = $("#UpSPInvTaxTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td style="text-align:center"  >' + rowno + '</td>';
    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkClientTax">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppotaxtype">';
    cols += '<option selected="selected" value="Select">-Select-</option>';
    cols += '<option value="Creditable">Creditable</option>';
    cols += '<option value="Non-Creditable">Non-Creditable</option></select></td>';
    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppotaxdca" >';
    cols += '<option selected="selected" value="Select" >-Select-</option></select></td>';
    cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle sppotaxsdca" >';
    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
    cols += '<td  style="text-align:center"><select class="form-control dropdown-toggle sppotaxname" >';
    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
    cols += '<td style="text-align:center"><input type="text" class="form-control sppotaxamount" value=""  onkeypress = "return ValidateAmount(this,event);" onkeyup="CountEditPOInvoiceTotal()"/></td>';

    cols += '<td style="text-align:center"><input type="button" class="ibtnsppoTaxdelete btn btn-md btn-danger" value="Delete"></td>';
    newRow.append(cols);
    $("table.order-list.UpSPInvTaxTable").append(newRow);
}
function ReassignRowNoSPPOEditInvTax() {
    var rowno = 1;
    $("#UpSPInvTaxTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(0).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function BindNewRowtoEditSPPOTaxGrid() {

    isValid = true;
    var errorMsg = "";
    var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#UpSPInvTaxTable tbody tr").each(function () {

        var currentRow = $(this);
        var check = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');
        var taxtype = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxdca = currentRow.find("td").eq(3).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(4).find("select option:selected").index();
        var taxname = currentRow.find("td").eq(5).find("select option:selected").index();
        var taxamount = currentRow.find("td").eq(6).find("input[type='text']").val();
        if (taxtype === 0) { typecount = typecount + 1; }
        if (taxdca === 0) { dcacount = dcacount + 1; }

        if (taxsdca === 0) { sdcacount = sdcacount + 1; }
        if (taxname === 0) { taxcount = taxcount + 1; }
        if (taxamount === "" || taxamount === "0") { taxvaluecount = taxvaluecount + 1; }
        if (check === false) { taxchkcount = taxchkcount + 1; }

    });

    if (typecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Tax Type</p>";
        isValid = false;
    }
    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Account Head</p>";
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
        $("#divUpSppoInvInfoMsg").text("");
        $("#divUpSppoInvInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpSppoInvInfoMsg").addClass("alert-danger");
        $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var selecteddcalist = [];
        $("#UpSPInvTaxTable tbody tr").each(function () {
            var currentRow = $(this);
            var taxdca = currentRow.find("td").eq(3).find("select option:selected").val();
            if (taxdca !== 0) {
                selecteddcalist.push(currentRow.find("td").eq(3).find("select option:selected").val());
            }
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Tax</p>";
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").append(finalerror2 + "</div>");
            $("#divUpSppoInvInfoMsg").addClass("alert-danger");
            $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").addClass("hidden");
            BindEmptyRowToEditSPPOTaxesGrid();
        }

    }
}
function BindEmptyRowToEditSPPOInvOtherGrid() {
    var ponumber = $("#txtUpSpInvPO").val();
    if (ponumber === "") {

        $("#divUpSppoInvInfoMsg").append("<div>Select PO Number</div>");
        $("#divUpSppoInvInfoMsg").addClass("alert-danger");
        $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divUpSppoInvInfoMsg").text("");
        $("#divUpSppoInvInfoMsg").addClass("hidden");

        var type = 'Other';
        var invdate = $("#txtUpSpInvDate").val();
        var cc = $("#txtUpSpInvCCCode").val();
        $.ajax({
            type: "POST",
            url: "/Purchase/GetSPPOInvOtherDeductionDCA",
            data: "{CCCode:'" + cc + "' ,TaxType: '" + type + "',Invdate: '" + invdate + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    var count = $("#SPInvOtherChargeTable tbody tr").length;
                    if (count > 0) {
                        var selecteddcalist = [];

                        $("#SPInvOtherChargeTable tbody tr").each(function () {
                            var currentRow = $(this);
                            var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
                            if (taxdca !== 0) {
                                selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                            }
                        });
                    }
                    var rowno = 0;

                    rowno = count + 1;
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center"  >' + rowno + '</td>';
                    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
                    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkClientTax">';
                    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';

                    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppoOtherChargedca" >';
                    cols += '<option selected="selected" value="Select" >-Select-</option>';
                    $.each(response, function () {
                        if (count > 0) {
                            var status = checkValueInArray(this['DCACode'], selecteddcalist);
                            if (status === false) {
                                cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                            }
                        }
                        else {
                            cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                        }
                    });
                    cols += '</select></td><td  style="text-align:center"><select class="form-control dropdown-toggle sppoOtherChargesdca" >';
                    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
                    cols += '<td style="text-align:center"><input type="text" class="form-control sppoOtherChargeamount" value=""  onkeypress = "return ValidateAmount(this,event);" onkeyup="CountEditPOInvoiceTotal()"/></td>';

                    cols += '<td style="text-align:center"><input type="button" class="ibtnsppoInvOtherChargedelete btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.SPInvOtherChargeTable").append(newRow);

                    $("#OtherGrid").removeClass('hidden');
                }
                else {
                    $("#OtherGrid").addClass('hidden');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function SPPOInvEditOtherChargeValidation(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('SPPOInvUpOtherCharges');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    var ids = document.getElementsByName('SPPOInvUpOtherCharges');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked === true) {
            // alert(ids[i].value);
            if (ids[i].value === 'Yes') {
                ShowOtherChargesEditGrid();
            }
            if (ids[i].value === 'No') {

                HideOtherChargesEditGrid();
            }
        }
    }
}
function ShowOtherChargesEditGrid() {
    $("#SPInvOtherChargeTable tbody tr").remove();
    BindEmptyRowToEditSPPOInvOtherGrid();
    $("#divUpSppoInvInfoMsg").text("");
    $("#divUpSppoInvInfoMsg").addClass("hidden");
}
function HideOtherChargesEditGrid() {
    $("#SPInvOtherChargeTable tbody tr").remove();
    $("#OtherGrid").addClass('hidden');
    CountEditPOInvoiceTotal();
    $("#divUpSppoInvInfoMsg").text("");
    $("#divUpSppoInvInfoMsg").addClass("hidden");
}
function BindNewRowtoEditSPPOOtherChargeGrid() {
    isValid = true;
    var errorMsg = "";
    var dcacount = 0, sdcacount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#SPInvOtherChargeTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');

        var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();
        var taxamount = currentRow.find("td").eq(4).find("input[type='text']").val();

        if (taxdca === 0) { dcacount = dcacount + 1; }
        if (taxsdca === 0) { sdcacount = sdcacount + 1; }
        if (taxamount === "" || taxamount === "0") { taxvaluecount = taxvaluecount + 1; }
        if (check === false) { taxchkcount = taxchkcount + 1; }
    });
    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Other Charge Account Head</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Other Charge Sub Account Head</p>";
        isValid = false;
    }
    if (taxvaluecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Other Charge Amount</p>";
        isValid = false;
    }
    if (taxchkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Other Charges </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSppoInvInfoMsg").text("");
        $("#divUpSppoInvInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpSppoInvInfoMsg").addClass("alert-danger");
        $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var selecteddcalist = [];
        $("#SPInvOtherChargeTable tbody tr").each(function () {
            var currentRow = $(this);
            var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
            if (taxdca !== 0) {
                selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
            }
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Other Cahrge</p>";
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").append(finalerror2 + "</div>");
            $("#divUpSppoInvInfoMsg").addClass("alert-danger");
            $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").addClass("hidden");
            BindEmptyRowToEditSPPOInvOtherGrid();
        }
    }
}
function SPPOInvEditDeductionValidation(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('SPPOInvDeduction');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    var ids = document.getElementsByName('SPPOInvDeduction');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].checked === true) {
            if (ids[i].value === 'Yes') {
                ShowEditDeductionGrid();
            }
            if (ids[i].value === 'No') {
                HideEditDeductionGrid();
            }

        }

    }
}
function HideEditDeductionGrid() {
    $("#SPInvDeductionTable tbody tr").remove();
    $("#DeductionGrid").addClass('hidden');
    CountEditPOInvoiceTotal();
    $("#divUpSppoInvInfoMsg").text("");
    $("#divUpSppoInvInfoMsg").addClass("hidden");
}
function ShowEditDeductionGrid() {
    $("#SPInvDeductionTable tbody tr").remove();
    BindEmptyRowToEditSPPOInvDeductionGrid();
    $("#divUpSppoInvInfoMsg").text("");
    $("#divUpSppoInvInfoMsg").addClass("hidden");
}
function BindEmptyRowToEditSPPOInvDeductionGrid() {
    var ponumber = $("#txtUpSpInvPO").val();
    if (ponumber == "") {
        $("#divUpSppoInvInfoMsg").append("<div>Select PO Number</div>");
        $("#divUpSppoInvInfoMsg").addClass("alert-danger");
        $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divUpSppoInvInfoMsg").text("");
        $("#divUpSppoInvInfoMsg").addClass("hidden");

        var type = 'Deduction';
        var invdate = $("#txtUpSpInvDate").val();
        var cc = $("#txtUpSpInvCCCode").val();
        $.ajax({
            type: "POST",
            url: "/Purchase/GetSPPOInvOtherDeductionDCA",
            data: "{CCCode:'" + cc + "' ,TaxType: '" + type + "',Invdate: '" + invdate + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    var count = $("#SPInvDeductionTable tbody tr").length;
                    if (count > 0) {
                        var selecteddcalist = [];

                        $("#SPInvDeductionTable tbody tr").each(function () {
                            var currentRow = $(this);
                            var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
                            if (taxdca !== 0) {
                                selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                            }
                        });
                    }
                    var rowno = 0;
                    rowno = count + 1;
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += '<td style="text-align:center"  >' + rowno + '</td>';
                    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
                    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkClientTax">';
                    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';

                    cols += '<td style="text-align:center"><select class="form-control dropdown-toggle sppoDeddca" >';
                    cols += '<option selected="selected" value="Select" >-Select-</option>';
                    $.each(response, function () {
                        if (count > 0) {
                            var status = checkValueInArray(this['DCACode'], selecteddcalist);
                            if (status === false) {
                                cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                            }
                        }
                        else {
                            cols += '<option value=' + this['DCACode'] + ' select="selected">' + this['DCAIDSTR'] + '</option>';
                        }
                    });
                    cols += '</select></td><td  style="text-align:center"><select class="form-control dropdown-toggle sppoDedsdca" >';
                    cols += '<option selected="selected" value="Select">-Select-</option></select></td>';
                    cols += '<td style="text-align:center"><input type="text" class="form-control sppoDedamount" value=""  onkeypress = "return ValidateAmount(this,event);" onkeyup="CountEditPOInvoiceTotal()"/></td>';

                    cols += '<td style="text-align:center"><input type="button" class="ibtnsppoInvDeddelete btn btn-md btn-danger" value="Delete"></td>';
                    newRow.append(cols);
                    $("table.order-list.SPInvDeductionTable").append(newRow);

                    $("#DeductionGrid").removeClass('hidden');
                }
                else {
                    $("#DeductionGrid").addClass('hidden');
                }
            },
            failure: function (response) {
            },
            error: function (response) {
            }
        });
    }
}
function BindNewRowtoEditSPPODeductionGrid() {

    isValid = true;
    var errorMsg = "";
    var dcacount = 0, sdcacount = 0, taxvaluecount = 0, taxchkcount = 0;
    $("#SPInvDeductionTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');

        var taxdca = currentRow.find("td").eq(2).find("select option:selected").index();
        var taxsdca = currentRow.find("td").eq(3).find("select option:selected").index();

        var taxamount = currentRow.find("td").eq(4).find("input[type='text']").val();

        if (taxdca === 0) { dcacount = dcacount + 1; }
        if (taxsdca === 0) { sdcacount = sdcacount + 1; }
        if (taxamount === "" || taxamount === "0") { taxvaluecount = taxvaluecount + 1; }
        if (check === false) { taxchkcount = taxchkcount + 1; }

    });


    if (dcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head</p>";
        isValid = false;
    }
    if (sdcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Sub Account Head</p>";
        isValid = false;
    }

    if (taxvaluecount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
        isValid = false;
    }
    if (taxchkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Deduction </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSppoInvInfoMsg").text("");
        $("#divUpSppoInvInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpSppoInvInfoMsg").addClass("alert-danger");
        $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var selecteddcalist = [];
        $("#SPInvDeductionTable tbody tr").each(function () {
            var currentRow = $(this);
            var taxdca = currentRow.find("td").eq(2).find("select option:selected").val();
            if (taxdca !== 0) {
                selecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
            }
        });
        var duplicatelist = selecteddcalist.filter(i => selecteddcalist.filter(ii => ii === i).length > 1);
        if (duplicatelist.length > 0) {
            var finalerror2 = "<div style='align:center'><p>Duplicate Accounts Heads for Deduction</p>";
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").append(finalerror2 + "</div>");
            $("#divUpSppoInvInfoMsg").addClass("alert-danger");
            $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").addClass("hidden");
            BindEmptyRowToEditSPPOInvDeductionGrid();
        }

    }
}
function EditSPPOInvoiceData(VCode, SPPONo, SPPOInvoiceNo, CCCode, DCACode, SubDcaCode) {

    isValid = true;
    var errorMsg = "";
    //var vendorIndex = $("#ddlNSpInvVendor option:selected").index();
    //var ponumberIndex = $("#ddlNSpInvPONo option:selected").index();
    //var invoiceno = $("#txtNSpInvNo").val();
    //var invoicedate = $("#txtNSpInvDate").val();
    //var invoiceMakingdate = $("#txtNSpInvMakingDate").val();
    var Balance = $("#txtUpSpInvBalance").val();
    var Description = $("#txtUpSpInvDescription").val();
    var Retention = $("#txtUpSpInvRetention").val();
    var Hold = $("#txtUpSpInvHold").val();
    var AdvanceAmt = $("#txtUpSpInvAdvance").val();

    if (Balance === "" || Balance === "0" || Balance === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Balance</p>";
        isValid = false;
    }
    if (Description === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Description</p>";
        isValid = false;
    }
    if (Retention === "" || Retention === "0" || Retention === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Retention Amount</p>";
        isValid = false;
    }
    if (Hold === "" || Hold === "0" || Hold === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Hold Amount</p>";
        isValid = false;
    }
    if (AdvanceAmt === "" || AdvanceAmt === "0" || AdvanceAmt === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Advance Amount</p>";
        isValid = false;
    }
    else {
        if (parseFloat($("#txtNSpInvValue").val()) < parseFloat(AdvanceAmt)) {
            errorMsg += "<p style='margin-top:-5px!important;'>Advance Should not be greater than Invoice Value</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divUpSppoInvInfoMsg").text("");
        $("#divUpSppoInvInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divUpSppoInvInfoMsg").addClass("alert-danger");
        $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        var Taxcount = $("#UpSPInvTaxTable tbody tr").length;
        if (Taxcount > 0) {
            var typecount = 0, dcacount = 0, sdcacount = 0, taxcount = 0, taxvaluecount = 0, taxchkcount = 0;
            var selectedTaxdcalist = [];
            $("#UpSPInvTaxTable tbody tr").each(function () {
                var currentRow = $(this);
                var check = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');
                var taxtype = currentRow.find("td").eq(2).find("select option:selected").index();
                var taxdca = currentRow.find("td").eq(3).find("select option:selected").index();
                var taxsdca = currentRow.find("td").eq(4).find("select option:selected").index();
                var taxname = currentRow.find("td").eq(5).find("select option:selected").index();
                var taxamount = currentRow.find("td").eq(6).find("input[type='text']").val();
                if (taxtype === 0) { typecount = typecount + 1; }
                if (taxdca === 0) { dcacount = dcacount + 1; }
                else {
                    selectedTaxdcalist.push(currentRow.find("td").eq(3).find("select option:selected").val());
                }

                if (taxsdca === 0) { sdcacount = sdcacount + 1; }
                if (taxname === 0) { taxcount = taxcount + 1; }
                if (taxamount === "" || taxamount === "0") { taxvaluecount = taxvaluecount + 1; }
                if (check === false) { taxchkcount = taxchkcount + 1; }

            });

            if (typecount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Tax Type</p>";
                isValid = false;
            }
            if (dcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
                isValid = false;
            }
            else {
                var duplicatelist = selectedTaxdcalist.filter(i => selectedTaxdcalist.filter(ii => ii === i).length > 1);
                if (duplicatelist.length > 0) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Duplicate Accounts Heads for Tax</p>";
                    isValid = false;
                }
            }
            if (sdcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Account Head</p>";
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

        }
        if ($('#chkUpSPPOInvOtherchargeY').is(":checked")) {
            var Otherselecteddcalist = [];
            var otherdcacount = 0, othersdcacount = 0, othervaluecount = 0, otherchkcount = 0;
            $("#SPInvOtherChargeTable tbody tr").each(function () {
                let currentRow = $(this);
                let othercheck = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');

                let otherdca = currentRow.find("td").eq(2).find("select option:selected").index();
                let othersdca = currentRow.find("td").eq(3).find("select option:selected").index();

                let otheramount = currentRow.find("td").eq(4).find("input[type='text']").val();

                if (otherdca === 0) { otherdcacount = otherdcacount + 1; }
                else {
                    Otherselecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                }
                if (othersdca === 0) { othersdcacount = othersdcacount + 1; }
                if (otheramount === "" || otheramount === "0") { othervaluecount = othervaluecount + 1; }
                if (othercheck === false) { otherchkcount = otherchkcount + 1; }

            });
            if (otherdcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Other Charge Account Head</p>";
                isValid = false;
            }
            else {
                var duplicatelist1 = Otherselecteddcalist.filter(i => Otherselecteddcalist.filter(ii => ii === i).length > 1);
                if (duplicatelist1.length > 0) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Duplicate Accounts Heads for Other Charges</p>";
                    isValid = false;
                }
            }
            if (othersdcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Other Charge Sub Account Head</p>";
                isValid = false;
            }

            if (othervaluecount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Other Charge Amount</p>";
                isValid = false;
            }
            if (otherchkcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Check Other Charges </p>";
                isValid = false;
            }
        }
        if ($('#chkUpSPPOInvDeductionY').is(":checked")) {
            var Deductionselecteddcalist = [];
            var Deddcacount = 0, Dedsdcacount = 0, Dedvaluecount = 0, Dedchkcount = 0;
            $("#SPInvDeductionTable tbody tr").each(function () {
                var currentRow = $(this);
                var Dedcheck = currentRow.find("td").eq(1).find('input[type="checkbox"]').is(':checked');

                var Deddca = currentRow.find("td").eq(2).find("select option:selected").index();
                var Dedsdca = currentRow.find("td").eq(3).find("select option:selected").index();

                var Dedamount = currentRow.find("td").eq(4).find("input[type='text']").val();

                if (Deddca === 0) { Deddcacount = Deddcacount + 1; }
                else {
                    Deductionselecteddcalist.push(currentRow.find("td").eq(2).find("select option:selected").val());
                }

                if (Dedsdca === 0) { Dedsdcacount = Dedsdcacount + 1; }
                if (Dedamount === "" || Dedamount === "0") { Dedvaluecount = Dedvaluecount + 1; }
                if (Dedcheck === false) { Dedchkcount = Dedchkcount + 1; }
            });

            if (Deddcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Account Head</p>";
                isValid = false;
            } else {
                var duplicatelist2 = Deductionselecteddcalist.filter(i => Deductionselecteddcalist.filter(ii => ii === i).length > 1);
                if (duplicatelist2.length > 0) {
                    errorMsg += "<p style='margin-top:-5px!important;'>Duplicate Accounts Heads for Deduction</p>";
                    isValid = false;
                }
            }
            if (Dedsdcacount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Deduction Sub Account Head</p>";
                isValid = false;
            }

            if (Dedvaluecount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Deduction Amount</p>";
                isValid = false;
            }
            if (Dedchkcount > 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Check Deduction </p>";
                isValid = false;
            }

        }
        if (parseFloat(Balance) < parseFloat($("#txtMinus").val())) {
            errorMsg += "<p style='margin-top:-5px!important;'>Sum of [Deduction+Retention+Hold] Should not be Greater than Basic Amount</p>";
            isValid = false;
        }
        if (parseFloat($("#txtNSpInvValue").val()) <= 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amounts</p>";
            isValid = false;
        }
        if (parseFloat($("#txtNSpInvNetAmount").val()) <= 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amounts</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror2 = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").append(finalerror2 + errorMsg + "</div>");
            $("#divUpSppoInvInfoMsg").addClass("alert-danger");
            $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
            return false;
        }
        else {
            $("#divUpSppoInvInfoMsg").text("");
            $("#divUpSppoInvInfoMsg").addClass("hidden");
            //check budget
            var TaxTypes = "", Taxdcas = "", TaxAmounts = "";
            var Otherdcas = "", OtherAmounts = "";
            var result = "";
            if (Taxcount > 0) {
                $("#UpSPInvTaxTable tbody tr").each(function () {
                    var currentRow = $(this);

                    var taxtype = currentRow.find("td").eq(2).find("select option:selected").val();
                    var taxdca = currentRow.find("td").eq(3).find("select option:selected").val();
                    var taxamount = currentRow.find("td").eq(6).find("input[type='text']").val();
                    TaxTypes += taxtype + ',';
                    Taxdcas += taxdca + ',';
                    TaxAmounts += taxamount + ',';
                });
            }
            if ($('#chkUpSPPOInvOtherchargeY').is(":checked")) {
                $("#SPInvOtherChargeTable tbody tr").each(function () {
                    let currentRow = $(this);
                    let otherdca = currentRow.find("td").eq(2).find("select option:selected").val();
                    let otheramount = currentRow.find("td").eq(4).find("input[type='text']").val();
                    Otherdcas += otherdca + ',';
                    OtherAmounts += otheramount + ',';
                });
            }
            var Invdata = {
                SPPOInvoiceDate: $("#txtUpSpInvDate").val(),
                CCCode: $("#txtUpSpInvCCCode").val(),
                Taxtypes: TaxTypes,
                Taxdcas: Taxdcas,
                Taxamounts: TaxAmounts,
                Otherchargedcas: Otherdcas,
                Otherchargeamounts: OtherAmounts
            };
            var addFailMsg = "Error Occured While Submiting Details";

           // alert("Submit");
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/Purchase/CheckSPPOInvoiceBudget',
                data: { sppoInvCheckData: Invdata },
                success: function (response) {
                    result = response.saveStatus;
                    if (result === "Sufficent") {
                        $("#divUpSppoInvInfoMsg").text("");
                        $("#divUpSppoInvInfoMsg").addClass("hidden");

                        UpdateSPPOInvoice(VCode, SPPONo, SPPOInvoiceNo, CCCode, DCACode, SubDcaCode);

                    }
                    else {

                        $("#divUpSppoInvInfoMsg").text("");
                        $("#divUpSppoInvInfoMsg").append("<div>" + response.saveStatus + "</div>");
                        $("#divUpSppoInvInfoMsg").addClass("alert-danger");
                        $("#divUpSppoInvInfoMsg").removeClass("hidden alert-success");
                        return false;
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    $("#divNewSppoInvInfoMsg").text(addFailMsg);
                    $("#divNewSppoInvInfoMsg").addClass("alert-danger");
                    $("#divNewSppoInvInfoMsg").removeClass("hidden alert-success");
                }
            });
        }
    }
}
function UpdateSPPOInvoice(VCode, SPPONo, SPPOInvoiceNo, CCCode, DCACode, SubDcaCode) {
    //var vendor = $("#ddlNSpInvVendor").val();
    //var ponumber = $("#ddlNSpInvPONo option:selected").val();
    //var invoiceno = $("#txtNSpInvNo").val();
    var invoicedate = $("#txtUpSpInvDate").val();
    //var invoiceMakingdate = $("#txtNSpInvMakingDate").val();
    var Basic = $("#txtNSpInvBalance").val();
    var Description = $("#txtNSpInvDescription").val();
    var Retention = $("#txtNSpInvRetention").val();
    var Hold = $("#txtUpSpInvHold").val();
    var InvoiceTotal = $("#txtUpSpInvValue").val();
    var NetAmount = $("#txtUpSpInvNetAmount").val();
    var AdvanceAmt = $("#txtUpSpInvAdvance").val();
    var TaxTypes = "", Taxdcas = "", Taxsdcas = "", Taxnos = "", TaxAmounts = "";
    var Otherdcas = "", OtherSdcas = "", OtherAmounts = "";
    var Deddcas = "", DedSdcas = "", DedAmounts = "";
    var Taxcount = $("#UpSPInvTaxTable tbody tr").length;
    if (Taxcount > 0) {
        $("#UpSPInvTaxTable tbody tr").each(function () {
            var currentRow = $(this);
            var taxtype = currentRow.find("td").eq(2).find("select option:selected").val();
            var taxdca = currentRow.find("td").eq(3).find("select option:selected").val();
            var taxsdca = currentRow.find("td").eq(4).find("select option:selected").val();
            var taxno = currentRow.find("td").eq(5).find("select option:selected").text();
            var taxamount = currentRow.find("td").eq(6).find("input[type='text']").val();
            TaxTypes += taxtype + ',';
            Taxdcas += taxdca + ',';
            Taxsdcas += taxsdca + ',';
            Taxnos += taxno + ',';
            TaxAmounts += taxamount + ',';
        });
    }
    if ($('#chkUpSPPOInvOtherchargeY').is(":checked")) {
        $("#SPInvOtherChargeTable tbody tr").each(function () {
            let currentRow = $(this);
            let otherdca = currentRow.find("td").eq(2).find("select option:selected").val();
            let othersdca = currentRow.find("td").eq(3).find("select option:selected").val();
            let otheramount = currentRow.find("td").eq(4).find("input[type='text']").val();
            Otherdcas += otherdca + ',';
            OtherSdcas += othersdca + ',';
            OtherAmounts += otheramount + ',';
        });
    }
    if ($('#chkUpSPPOInvDeductionY').is(":checked")) {
        $("#SPInvDeductionTable tbody tr").each(function () {
            let currentRow = $(this);
            let ddca = currentRow.find("td").eq(2).find("select option:selected").val();
            let dsdca = currentRow.find("td").eq(3).find("select option:selected").val();
            let damount = currentRow.find("td").eq(4).find("input[type='text']").val();
            Deddcas += ddca + ',';
            DedSdcas += dsdca + ',';
            DedAmounts += damount + ',';
        });
    }
    var sppoInvdata = {
        CCCode: CCCode,
        VendorCode: VCode,
        SPPOInvoiceDate: invoicedate,
        SPPOInvoiceNo: SPPOInvoiceNo,
        SPPOBasicValue: $("#txtUpSpInvBalance").val(),
        DCACode: DCACode,
        SubDCACode: SubDcaCode,
        SPPONo: SPPONo,
        Taxtypes: TaxTypes,
        Taxdcas: Taxdcas,
        Taxsdcas: Taxsdcas,
        Taxnos: Taxnos,
        Taxamounts: TaxAmounts,
        Otherchargedcas: Otherdcas,
        Otherchargesdcas: OtherSdcas,
        Otherchargeamounts: OtherAmounts,
        Deductiondcas: Deddcas,
        Deductionsdcas: DedSdcas,
        Deductionamounts: DedAmounts,
        InvoiceValue: InvoiceTotal,
        Description: $("#txtUpSpInvDescription").val(),
        Retention: $("#txtUpSpInvRetention").val(),
        Hold: $("#txtUpSpInvHold").val(),
        NetAmount: $("#txtUpSpInvNetAmount").val(),
        Advance: AdvanceAmt
    };
   
    addFailMsg = "Error Occurred While Updating SPPO Invoice";
    addSuccessMsg = "SPPO Invoice Updated Successfully.";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/UpdateSPPOInvoice',
        data: { InvData: sppoInvdata },
        success: function (Data) {
            if (Data.saveStatus === 'Submited') {
                $('#ApprovesppoInvMsgModal').modal('show');
                var msg = "<div>" + addSuccessMsg + "</div>";
                $("#AppSPPOInvMsg").html(msg);
            }
            else {
                var msg1 = "<div>" + response.saveStatus + "</div>";
                $("#AppSPPOInvMsg").html(msg1);
                $('#ApprovesppoInvMsgModal').modal('show');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var msg2 = "<div>" + addFailMsg + "</div>";
            $("#AppSPPOInvMsg").html(msg2);
            $('#ApprovesppoInvMsgModal').modal('show');
        }
    });
}

//SPPO Invoice Script END
//SPPO Payment Script Start
function SPPOPaymentTypeChenage() {
    var paymenttypeIndex = $("#ddlPaymentType option:selected").index();
    var payment = $("#ddlPaymentType option:selected").val();
    var vendorddl = $("#ddlPaymentVendor");
    var vendortype = $("#ddlVendorType option:selected").val();
    var TransactionType = $("#txtTransactionType").val();
    var poddl = $("#ddlPaymentPONo");
    if (paymenttypeIndex === 0) {
        $("#btnViewPayment").addClass("hidden");
        $("#divVendor").addClass("hidden");
        $("#divSPPO").addClass("hidden");
        $("#btnResetPayment").removeClass("hidden");
        $("#divPayment").addClass();
        vendorddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        poddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");
        if (TransactionType === "Cash") {
            $("#divCC").addClass("hidden");
            ////$("#ddlVendorPayCC").prop('selectedIndex', 0);
            $("#ddlVendorPayCC").prop('selectedIndex', 0);
            $("#ddlVendorPayCC").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        }
        $("#ddlSinglePO").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ddlMultiPO option:selected").prop("selected", false);
        $("#ddlMultiPO option").remove();
        $('#ddlMultiPO').multiselect('rebuild');
    }
    else {
        if (TransactionType === "Cash") {
            $("#divCashTransMode").removeClass("hidden");
            $("#divCC").addClass("hidden");
            $("#divOtherCC").addClass("hidden");
        }
        else {
            $.ajax({
                type: "POST",
                url: "/Purchase/GetSPPOPaymentVendor",
                data: '{VendorType:"' + vendortype + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var count1 = Object.keys(response).length;
                    if (count1 > 0) {
                        vendorddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            vendorddl.append($("<option></option>").val(this['VendorCode']).html(this['VendorName']));
                        });
                        $("#divVendor").removeClass("hidden");
                        $("#divSppoPayInfoMsg").text("");
                        $("#divSppoPayInfoMsg").addClass("hidden");
                    }
                    else {
                        $("#divSppoPayInfoMsg").text("");
                        $("#divSppoPayInfoMsg").append("<div>Vendor Does Not Exist</div>");
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");

                        $("#btnViewPayment").addClass("hidden");
                        $("#divVendor").addClass("hidden");
                        $("#divSPPO").addClass("hidden");
                        $("#btnResetPayment").removeClass("hidden");
                        $("#divPayment").addClass();
                        poddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    }
                },
                failure: function (response) {

                },
                error: function (response) {
                }
            });
        }

    }

}

function PaymentPOChange() {
    $("#btnViewPayment").removeClass("hidden");
    var ponoindex = $("#ddlPaymentPONo option:selected").index();
    if (ponoindex === 0) {
        $("#btnViewPayment").addClass("hidden");
        $("#btnResetPayment").removeClass("hidden");
        $("#divPayment").addClass("hidden");
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");
    }
}
function ShowSPPOPayment() {
    isValid = true;
    var errorMsg = "";
    var paymenttypeIndex = $("#ddlPaymentType option:selected").index();
    var vendor = $("#ddlPaymentVendor option:selected").val();
    var vendorIndex = $("#ddlPaymentVendor option:selected").index();
    var ponos = $('#ddlMultiPO > option:selected');
    // var ponoindex = $("#ddlPaymentPONo option:selected").index();
    // var pono = $("#ddlPaymentPONo  option:selected").val();
    var payment = $("#ddlPaymentType option:selected").val();
    var vendorname = $("#ddlPaymentVendor option:selected").text();
    
    var vArr = vendorname.split(',');
    vendorname1 = vArr[1];

    if (paymenttypeIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Payment Type</p>";
        isValid = false;
    }
    if (vendorIndex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Vendor</p>";
        isValid = false;
    }
    if (payment !== 0 && payment !== "Vendor Advance") {
        if (ponos.length === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select PO Number</p>";
            isValid = false;
        }
    }
    else if (payment !== 0 && payment === "Vendor Advance") {
        var singlepoddlindex = $("#ddlSinglePO option:selected").index();
        if (singlepoddlindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select PO Number</p>";
            isValid = false;
        }
        else {
            var invddlindex1 = $("#ddlAdvanceInv option:selected").index();
            if (invddlindex1 === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Number</p>";
                isValid = false;
            }
        }
    }

    var transtype = $("#txtTransactionType").val();
    if (transtype === "Cash") {
        var cashmode = $("#ddlGPCPaymentmode option:selected").val();
        var selfcc = $("#ddlVendorPayCC option:selected").val();
        var otherCC = $("#ddlVendorPayOtherCC option:selected").val();

        if (cashmode === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cash Transaction Mode</p>";
            isValid = false;
        }
        if (selfcc === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Accountant Cost Center</p>";
            isValid = false;
        }
        if (otherCC === 0 && cashmode===2) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
            isValid = false;
        }
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divSppoPayInfoMsg").addClass("alert-danger");
        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");
        if (ponos.length === 0 && payment !== "Vendor Advance") {
            $("#btnViewPayment").addClass("hidden");
            $("#btnResetPayment").removeClass("hidden");
            $("#divPayment").addClass("hidden");
        }
        else {
            
            $("#ddlPaymentType").prop("disabled", true);
            $("#ddlPaymentVendor").prop("disabled", true);
            $("#ddlVendorType").prop("disabled", true);
            $("#btnViewPayment").prop("disabled", true);

            if (transtype === "Cash") {
                $("#ddlVendorPayCC").prop("disabled", true);
                $("#ddlVendorPayOtherCC").prop("disabled", true);
                $("#ddlGPCPaymentmode").prop("disabled", true);
            }

            $("#ddlMultiPO").multiselect("disable");
            var vendortype = $("#ddlVendorType option:selected").val();
            var pnos = $('#ddlMultiPO option:selected').toArray().map(item => item.value).join(',');
            //pnos = $("#ddlMultiPO option:selected").map(function () { return this.text }).get().join(',');
            var allpos = pnos + ',';
            //  alert(allpos);

            if (payment === "Vendor Invoice") {

                $.ajax({
                    type: 'GET',
                    dataType: 'html',
                    url: '/Purchase/VendorInvoicePayGrid',
                    data: { VendorCode: vendor, PONo: allpos, PayType: payment, VendorName: vendorname1, Vendortype: vendortype },
                    success: function (Data) {
                        var count1 = Object.keys(Data).length;
                        var msg = "";
                        if (count1 > 0) {
                            $("#divInvPayment").html(Data);
                            $("#divPayment").removeClass('hidden');
                            $("#divInvPayment").removeClass('hidden');
                            $("#divAdvPayment").addClass('hidden');
                            $("#divRetPayment").addClass('hidden');
                            $("#divHoldPayment").addClass('hidden');
                            $("#ddlInvPaymentNo").addClass('hidden');
                            $("#txtInvPayPaymentNo").removeClass('hidden');
                        }
                        else {
                            $("#divInvPayment").html("No Data Found");
                            $("#divPayment").removeClass('hidden');
                            $("#divInvPayment").removeClass('hidden');
                            $("#divAdvPayment").addClass('hidden');
                            $("#divRetPayment").addClass('hidden');
                            $("#divHoldPayment").addClass('hidden');
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("error");
                    }
                });
            }
            if (payment === "Vendor Retention") {
                $.ajax({
                    type: 'GET',
                    dataType: 'html',
                    url: '/Purchase/VendorRetentionPayGrid',
                    data: { VendorCode: vendor, PONo: allpos, PayType: payment, VendorName: vendorname1, Vendortype: vendortype },
                    success: function (Data) {
                        var count1 = Object.keys(Data).length;
                        var msg = "";
                        if (count1 > 0) {
                            $("#divRetPayment").html(Data);
                            $("#divPayment").removeClass('hidden');
                            $("#divInvPayment").addClass('hidden');
                            $("#divAdvPayment").addClass('hidden');
                            $("#divRetPayment").removeClass('hidden');
                            $("#divHoldPayment").addClass('hidden');
                            $("#ddlRetPaymentNo").addClass('hidden');
                            $("#txtRetPayPaymentNo").removeClass('hidden');
                        }
                        else {
                            $("#divRetPayment").html("No Data Found");
                            $("#divPayment").removeClass('hidden');
                            $("#divInvPayment").addClass('hidden');
                            $("#divAdvPayment").addClass('hidden');
                            $("#divRetPayment").removeClass('hidden');
                            $("#divHoldPayment").addClass('hidden');

                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                        alert("error");
                    }
                });
            }
            if (payment === "Vendor Hold") {
                $.ajax({
                    type: 'GET',
                    dataType: 'html',
                    url: '/Purchase/VendorHoldPayGrid',
                    data: { VendorCode: vendor, PONo: allpos, PayType: payment, VendorName: vendorname1, Vendortype: vendortype },
                    success: function (Data) {
                        var count1 = Object.keys(Data).length;
                        var msg = "";
                        if (count1 > 0) {
                            $("#divHoldPayment").html(Data);
                            $("#divPayment").removeClass('hidden');
                            $("#divInvPayment").addClass('hidden');
                            $("#divAdvPayment").addClass('hidden');
                            $("#divRetPayment").addClass('hidden');
                            $("#divHoldPayment").removeClass('hidden');
                            $("#ddlRetPaymentNo").addClass('hidden');
                            $("#txtRetPayPaymentNo").removeClass('hidden');
                        }
                        else {
                            $("#divHoldPayment").html("No Data Found");
                            $("#divPayment").removeClass('hidden');
                            $("#divInvPayment").addClass('hidden');
                            $("#divAdvPayment").addClass('hidden');
                            $("#divRetPayment").addClass('hidden');
                            $("#divHoldPayment").removeClass('hidden');

                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                        alert("error");
                    }
                });

            }
            if (payment === "Vendor Advance") {
                var invddlindex = $("#ddlAdvanceInv option:selected").index();
                var inv = $("#ddlAdvanceInv option:selected").val();
                var singlepo = $("#ddlSinglePO option:selected").val();
                debugger;
                //alert(inv+"----"+ singlepo);
                 $.ajax({
                        type: 'GET',
                        dataType: 'html',
                        url: '/Purchase/VendorAdvancePayGrid',
                        data: { VendorCode: vendor, PONo: singlepo, PayType: payment, VendorName: vendorname1, Vendortype: vendortype, Invno:inv},
                        success: function (Data) {
                            var count1 = Object.keys(Data).length;
                            var msg = "";
                            if (count1 > 0) {
                                $("#divAdvPayment").html(Data);
                                $("#divPayment").removeClass('hidden');
                                $("#divInvPayment").addClass('hidden');
                                $("#divAdvPayment").removeClass('hidden');
                                $("#divRetPayment").addClass('hidden');
                                $("#divHoldPayment").addClass('hidden');
                                $("#ddlAdvPaymentNo").addClass('hidden');
                                $("#txtAdvPayPaymentNo").removeClass('hidden');
                            }
                            else {
                                $("#divAdvPayment").html("No Data Found");
                                $("#divPayment").removeClass('hidden');
                                $("#divInvPayment").addClass('hidden');
                                $("#divAdvPayment").removeClass('hidden');
                                $("#divRetPayment").addClass('hidden');
                                $("#divHoldPayment").addClass('hidden');

                            }
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {

                            alert("error");
                        }
                    });
               

            }

        }
    }
}
function ResetSPPOPayment() {
    location.reload();
}
function VendorinvPayModeChange() {

    var bank = $("#ddlInvBankPayBank option:selected").text();
    var Mode = $("#ddlInvBankPayMode option:selected").text();

    var bankindex = $("#ddlInvBankPayBank option:selected").index();
    var Modeindex = $("#ddlInvBankPayMode option:selected").index();

    if (Modeindex !== 0 && bankindex !== 0) {
        if (Modeindex === 1) {
            $("#txtInvBankPaymentNo").addClass('hidden');
            $("#ddlInvPaymentNo").removeClass('hidden');
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
                    var ddlInvPaymentNo = $("#ddlInvPaymentNo");
                    if (count > 0) {

                        ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            ddlInvPaymentNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
                        });
                        $("#divInvPayInfoMsg").text("");
                        $("#divInvPayInfoMsg").addClass("hidden");
                    } else { ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>'); }

                },
                failure: function (response) {

                },
                error: function (response) {

                }
            });
        }
        else {
            $("#txtInvBankPaymentNo").removeClass('hidden');
            $("#ddlInvPaymentNo").addClass('hidden');
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").addClass("hidden");
        }
    }
    else if (Modeindex === 0 && bankindex !== 0) {
        $("#txtInvBankPaymentNo").removeClass('hidden');
        $("#ddlInvPaymentNo").addClass('hidden');
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");

    }
    else if (Modeindex !== 0 && bankindex === 0) {
        $("#txtInvBankPaymentNo").removeClass('hidden');
        $("#ddlInvPaymentNo").addClass('hidden');

        $("#divSppoPayInfoMsg").text("Select Bank Name");
        $("#divSppoPayInfoMsg").addClass("alert-danger");
        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        $("#divSppoPayInfoMsg").prop('selectedIndex', 0);
    }
    else {
        $("#txtInvBankPaymentNo").removeClass('hidden');
        $("#ddlInvPaymentNo").addClass('hidden');
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");

    }
}
//function SubmitVendorInvoicePayData() {   
//    var tablerowcount = $("#tblInvPayGrid tbody tr").length;
//    if (tablerowcount > 0) {
//        isValid = true;
//        var errorMsg = "";
//        var selectedcheck = 0;
//        var invtotalamount = 0;
//        $("#tblInvPayGrid tbody tr").each(function () {
//            var currentRow = $(this);
//            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//            var rowamount = currentRow.find("td").eq(9).html();
//            if (checkbox === true) {
//                selectedcheck = selectedcheck + 1;
//            }          
//        });
//        if (selectedcheck === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
//            isValid = false;
//        }
//        var Name = $("#txtInvBankPayName").val();
//        var bank = $("#ddlInvBankPayBank option:selected").text();
//        var Mode = $("#ddlInvBankPayMode option:selected").text();
//        var bankindex = $("#ddlInvBankPayBank option:selected").index();
//        var Modeindex = $("#ddlInvBankPayMode option:selected").index();
//        var date = $("#txtInvBankPayDate").val();
//        var remarks = $("#txtInvBankPayReamarks").val();
//        var amount = $("#txtInvBankPayFinalAmount").val();

//        if (Name === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
//            isValid = false;
//        }
//        if (Modeindex === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
//            isValid = false;
//        }
//        if (Modeindex === 1) {
//            var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
//            if (ddlcheque === 0) {
//                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
//                isValid = false;
//            }
//        }
//        else {
//            var cheque = $("#txtInvBankPaymentNo").val();
//            if (cheque === "") {
//                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
//                isValid = false;
//            }

//        }
//        if (date === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
//            isValid = false;
//        }
//        if (remarks === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
//            isValid = false;
//        }
//        if (amount === "" || amount ===0 ) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
//            isValid = false;
//        }
//        $("#tblInvPayGrid tbody tr").each(function () {
//            var currentRow = $(this);
//            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//            var rowamount = currentRow.find("td").eq(9).html();
//            if (checkbox === true) {
//                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
//            }
//        });
//        if (parseFloat(amount) > parseFloat(invtotalamount)) {
//            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
//            isValid = false;
//        }
//        if (!isValid) {
//            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//            $("#divInvPayInfoMsg").text("");
//            $("#divInvPayInfoMsg").append(finalerror + errorMsg + "</div>");
//            $("#divInvPayInfoMsg").addClass("alert-danger");
//            $("#divInvPayInfoMsg").removeClass("hidden alert-success");
//        }
//        else {
//            var paydate = date;
//            $("#tblInvPayGrid tbody tr").each(function () {
//                var currentRow = $(this);
//                var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//                var invdate = currentRow.find("td").eq(3).html();
//                if (checkbox === true) {
//                    if (new Date(paydate) < new Date(invdate)) {
//                        isValid = false;
//                    }
//                }

//            });
//            if (!isValid) {
//                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
//                $("#divInvPayInfoMsg").text("");
//                $("#divInvPayInfoMsg").append(finalerror1 + "</div>");
//                $("#divInvPayInfoMsg").addClass("alert-danger");
//                $("#divInvPayInfoMsg").removeClass("hidden alert-success");
//            }
//            else {
//                $("#divInvPayInfoMsg").text("");
//                $("#divInvPayInfoMsg").addClass("hidden");
//                //Insert DCA Budget in to db
//              // SaveVendorInvoicePayment();
//            }
//        }
//    }
//}
//function SaveVendorInvoicePayment() {
//    var Invnos = "";
//    $("#tblInvPayGrid tbody tr").each(function () {
//        var currentRow = $(this);
//        var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//        var invno= currentRow.find("td").eq(2).html();
//        if (checkbox === true) {
//            Invnos += $.trim(invno) + ',';
//        }
//    });
//    var payno = 0;
//    if ($("#ddlInvPayMode  option:selected").val() == 'Cheque')
//        payno = $("#ddlInvPaymentNo option:selected").val();
//    else
//        payno = $("#txtInvPayPaymentNo").val();

//    var SaveData = {
//        InvoiceNos: Invnos,
//        PONumber: $("#ddlPaymentPONo  option:selected").val(),
//        Name: $("#txtInvPayName").val(),
//        TransactionDate: $("#txtInvPayPayDate").val(),
//        BankName: $("#ddlInvPayBank  option:selected").text(),
//        ModeofPay: $("#ddlInvPayMode  option:selected").val(),
//        BankId: $("#ddlInvPayBank  option:selected").val(),
//        TransactionAmount: $("#txtInvPayFinalAmount").val(),
//        Remarks: $("#txtInvPayReamarks").val(),
//        Number: payno,
//        Paytype:'Vendor Invoice'
//    };
//    debugger;
//    addFailMsg = "Error Occurred While Adding New Payment";
//    addSuccessMsg = "Payment Details Added Successfully.";
//    $.ajax({
//        type: 'POST',
//        dataType: 'json',
//        url: '/Purchase/SaveNewSPPOInvoicePayment',
//        data: { payData: SaveData },
//        success: function (Data) {
//            if (Data.saveStatus === 'Submited') {
//                $("#divInvPayInfoMsg").text(addSuccessMsg);
//                $("#divInvPayInfoMsg").removeClass("hidden alert-danger");
//                $("#divInvPayInfoMsg").addClass("alert-success");
//                $("#btnInvPaySubmit").prop("disabled", true);
//            }
//            else {
//                $("#divInvPayInfoMsg").text(Data.saveStatus);
//                $("#divInvPayInfoMsg").addClass("alert-danger");
//                $("#divInvPayInfoMsg").removeClass("hidden alert-success");
//                $("#btnInvPaySubmit").prop("disabled", true);
//            }
//        },
//        error: function (XMLHttpRequest, textStatus, errorThrown) {
//            $("#divInvPayInfoMsg").text(addFailMsg);
//            $("#divInvPayInfoMsg").addClass("alert-danger");
//            $("#divInvPayInfoMsg").removeClass("hidden alert-success");
//            $("#btnInvPaySubmit").prop("disabled", true);
//        }
//    });

//}

//function SubmitVendorInvoiceCashPayData() {
//    var tablerowcount = $("#tblInvPayGrid tbody tr").length;
//    if (tablerowcount > 0) {
//        isValid = true;
//        var errorMsg = "";
//        var selectedcheck = 0;
//        var invtotalamount = 0;
//        $("#tblInvPayGrid tbody tr").each(function () {
//            var currentRow = $(this);
//            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//            var rowamount = currentRow.find("td").eq(9).html();
//            if (checkbox === true) {
//                selectedcheck = selectedcheck + 1;
//            }
//        });
//        if (selectedcheck === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
//            isValid = false;
//        }
//        var Name = $("#txtInvCashPayName").val();
//        var bank = $("#ddlInvCashPayBank option:selected").text();
//        var Mode = $("#ddlInvCashPayMode option:selected").text();
//        var bankindex = $("#ddlInvCashPayBank option:selected").index();
//        var Modeindex = $("#ddlInvCashPayMode option:selected").index();
//        var date = $("#txtInvCashPayDate").val();
//        var remarks = $("#txtInvCashPayReamarks").val();
//        var amount = $("#txtInvCashPayFinalAmount").val();

//        if (Name === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
//            isValid = false;
//        }
//        if (Modeindex === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
//            isValid = false;
//        }       
//        var cheque = $("#txtInvCashPaymentNo").val();
//        if (cheque === "") {
//          errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
//          isValid = false;
//         }


//        if (date === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
//            isValid = false;
//        }
//        if (remarks === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
//            isValid = false;
//        }
//        if (amount === "" || amount === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
//            isValid = false;
//        }
//        $("#tblInvPayGrid tbody tr").each(function () {
//            var currentRow = $(this);
//            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//            var rowamount = currentRow.find("td").eq(9).html();
//            if (checkbox === true) {
//                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
//            }
//        });
//        if (parseFloat(amount) > parseFloat(invtotalamount)) {
//            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
//            isValid = false;
//        }
//        if (!isValid) {
//            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//            $("#divInvPayInfoMsg").text("");
//            $("#divInvPayInfoMsg").append(finalerror + errorMsg + "</div>");
//            $("#divInvPayInfoMsg").addClass("alert-danger");
//            $("#divInvPayInfoMsg").removeClass("hidden alert-success");
//        }
//        else {
//            var paydate = date;
//            $("#tblInvPayGrid tbody tr").each(function () {
//                var currentRow = $(this);
//                var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//                var invdate = currentRow.find("td").eq(3).html();
//                if (checkbox === true) {
//                    if (new Date(paydate) < new Date(invdate)) {
//                        isValid = false;
//                    }
//                }

//            });
//            if (!isValid) {
//                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
//                $("#divInvPayInfoMsg").text("");
//                $("#divInvPayInfoMsg").append(finalerror1 + "</div>");
//                $("#divInvPayInfoMsg").addClass("alert-danger");
//                $("#divInvPayInfoMsg").removeClass("hidden alert-success");
//            }
//            else {
//                $("#divInvPayInfoMsg").text("");
//                $("#divInvPayInfoMsg").addClass("hidden");
//                //Insert DCA Budget in to db
//               // SaveVendorInvoicePayment();
//            }
//        }
//    }

//}

//function VendorRetPayModeChange() {

//    var bank = $("#ddlRetPayBank option:selected").text();
//    var Mode = $("#ddlRetPayMode option:selected").text();

//    var bankindex = $("#ddlRetPayBank option:selected").index();
//    var Modeindex = $("#ddlRetPayMode option:selected").index();

//    if (Modeindex !== 0 && bankindex !== 0) {
//        if (Modeindex === 1) {
//            $("#txtRetPayPaymentNo").addClass('hidden');
//            $("#ddlRetPaymentNo").removeClass('hidden');
//            $.ajax({
//                type: "POST",
//                url: "/Accounts/GetChequeNos",
//                data: '{bankname:"' + bank + '"}',
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function (response) {
//                    var count = Object.keys(response).length;
//                    var rowcount = 0;
//                    //alert("Cheques"+count);
//                    var ddlInvPaymentNo = $("#ddlRetPaymentNo");
//                    if (count > 0) {

//                        ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
//                        $.each(response, function () {
//                            ddlInvPaymentNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
//                        });
//                        $("#divRetPayInfoMsg").text("");
//                        $("#divRetPayInfoMsg").addClass("hidden");
//                    } else { ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>'); }

//                },
//                failure: function (response) {

//                },
//                error: function (response) {

//                }
//            });
//        }
//        else {
//            $("#txtRetPayPaymentNo").removeClass('hidden');
//            $("#ddlRetPaymentNo").addClass('hidden');
//            $("#divRetPayInfoMsg").text("");
//            $("#divRetPayInfoMsg").addClass("hidden");
//        }
//    }
//    else if (Modeindex === 0 && bankindex !== 0) {
//        $("#txtRetPayPaymentNo").removeClass('hidden');
//        $("#ddlRetPaymentNo").addClass('hidden');
//        $("#divRetPayInfoMsg").text("");
//        $("#divRetPayInfoMsg").addClass("hidden");

//    }
//    else if (Modeindex !== 0 && bankindex === 0) {
//        $("#txtRetPayPaymentNo").removeClass('hidden');
//        $("#ddlRetPaymentNo").addClass('hidden');

//        $("#divRetPayInfoMsg").text("Select Bank Name");
//        $("#divRetPayInfoMsg").addClass("alert-danger");
//        $("#divRetPayInfoMsg").removeClass("hidden alert-success");
//        $("#divRetPayInfoMsg").prop('selectedIndex', 0);
//    }
//    else {
//        $("#txtRetPayPaymentNo").removeClass('hidden');
//        $("#ddlRetPaymentNo").addClass('hidden');
//        $("#divRetPayInfoMsg").text("");
//        $("#divRetPayInfoMsg").addClass("hidden");

//    }
//}
//function SubmitVendorRetentionPayData() {
//    var tablerowcount = $("#tblRetentionPayGrid tbody tr").length;
//    if (tablerowcount > 0) {
//        isValid = true;
//        var errorMsg = "";
//        var selectedcheck = 0;
//        var invtotalamount = 0;
//        $("#tblRetentionPayGrid tbody tr").each(function () {
//            var currentRow = $(this);
//            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//            var rowamount = currentRow.find("td").eq(9).html();
//            if (checkbox === true) {
//                selectedcheck = selectedcheck + 1;
//            }
//        });
//        if (selectedcheck === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
//            isValid = false;
//        }
//        var Name = $("#txtRetPayName").val();
//        var bank = $("#ddlRetPayBank option:selected").text();
//        var Mode = $("#ddlRetPayMode option:selected").text();
//        var bankindex = $("#ddlRetPayBank option:selected").index();
//        var Modeindex = $("#ddlRetPayMode option:selected").index();
//        var date = $("#txtRetPayDate").val();
//        var remarks = $("#txtRetPayReamarks").val();
//        var amount = $("#txtRetPayFinalAmount").val();
//        if (Name === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
//            isValid = false;
//        }
//        if (bankindex === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
//            isValid = false;
//        }
//        if (Modeindex === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
//            isValid = false;
//        }
//        if (Modeindex === 1) {
//            var ddlcheque = $("#ddlRetPaymentNo option:selected").index();
//            if (ddlcheque === 0) {
//                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
//                isValid = false;
//            }
//        }
//        else {
//            var cheque = $("#txtRetPayPaymentNo").val();
//            if (cheque === "") {
//                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
//                isValid = false;
//            }
//        }
//        if (date === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
//            isValid = false;
//        }
//        if (remarks === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
//            isValid = false;
//        }
//        if (amount === "" || amount === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
//            isValid = false;
//        }
//        $("#tblRetentionPayGrid tbody tr").each(function () {
//            var currentRow = $(this);
//            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//            var rowamount = currentRow.find("td").eq(9).html();
//            if (checkbox === true) {
//                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
//            }
//        });
//        if (parseFloat(amount) > parseFloat(invtotalamount)) {
//            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
//            isValid = false;
//        }
//        if (!isValid) {
//            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//            $("#divRetPayInfoMsg").text("");
//            $("#divRetPayInfoMsg").append(finalerror + errorMsg + "</div>");
//            $("#divRetPayInfoMsg").addClass("alert-danger");
//            $("#divRetPayInfoMsg").removeClass("hidden alert-success");
//        }
//        else {
//            var paydate = date;
//            $("#tblRetentionPayGrid tbody tr").each(function () {
//                var currentRow = $(this);
//                var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//                var invdate = currentRow.find("td").eq(3).html();
//                if (checkbox === true) {
//                    if (new Date(paydate) < new Date(invdate)) {
//                        isValid = false;
//                    }
//                }

//            });
//            if (!isValid) {
//                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
//                $("#divRetPayInfoMsg").text("");
//                $("#divRetPayInfoMsg").append(finalerror1 + "</div>");
//                $("#divRetPayInfoMsg").addClass("alert-danger");
//                $("#divRetPayInfoMsg").removeClass("hidden alert-success");
//            }
//            else {
//                $("#divRetPayInfoMsg").text("");
//                $("#divRetPayInfoMsg").addClass("hidden");
//                //Insert DCA Budget in to db
//               SaveRetentionPayment();
//            }
//        }
//    }
//}
//function SaveRetentionPayment() {
//    var Modeindex = $("#ddlRetPayMode option:selected").index();
//    var chequeno;
//    if (Modeindex == 1) {
//        var ddlcheque = $("#ddlRetPaymentNo option:selected").val();
//        chequeno = ddlcheque;
//    }
//    else {
//        var cheque = $("#txtRetPayPaymentNo").val();
//        chequeno = cheque;

//    }
//    var selecetedinvnos = "";

//    $("#tblRetentionPayGrid tbody tr").each(function () {

//        var currentRow = $(this);
//        var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
//        var ino = currentRow.find("td").eq(1).html();      
//        if (checkbox === true) {
//          //  selecetedinvnos += ino + ","; 
//            selecetedinvnos += $.trim(ino) + ",";
//        }
//    });

//    var saveRetPay = {
//        InvoiceNos: selecetedinvnos,
//        PONumber: $("#ddlPaymentVendor option:selected").val(),
//        BankId: $("#ddlRetPayBank option:selected").val(),
//        Name: $("#txtRetPayName").val(),
//        TransactionDate: $("#txtRetPayDate").val(),
//        Number: chequeno,
//        Remarks: $("#txtRetPayReamarks").val(),
//        TransactionAmount: $("#txtRetPayFinalAmount").val(),
//        BankName: $("#ddlRetPayBank option:selected").text(),
//        ModeofPay: $("#ddlRetPayMode option:selected").text(),
//        Paytype:'Vendor Retention',        
//        Action: 'New'
//    };
//    debugger;

//    addFailMsg = "Error Occurred While Adding Retention Payment";
//    addSuccessMsg = "Retention Payment Added Successfully.";

//    $.ajax({
//        type: 'POST',
//        dataType: 'json',
//        url: '/Purchase/SaveNewSPPORetentionPayment',
//        data: { payData: saveRetPay },
//        success: function (Data) {
//            $("#btnRetPaySubmit").prop('disabled', true);
//            if (Data.saveStatus == "Submited") {
//                $("#divRetPayInfoMsg").text(addSuccessMsg);
//                $("#divRetPayInfoMsg").removeClass("hidden alert-danger");
//                $("#divRetPayInfoMsg").addClass("alert-success");
//            }
//            else {
//                $("#btnRetPaySubmit").prop('disabled', true);
//                $("#divRetPayInfoMsg").text(addFailMsg);
//                $("#divRetPayInfoMsg").addClass("alert-danger");
//                $("#divRetPayInfoMsg").removeClass("hidden alert-success");
//            }

//        },
//        error: function (XMLHttpRequest, textStatus, errorThrown) {

//            $("#btnRetPaySubmit").prop('disabled', true);
//            $("#divRetPayInfoMsg").text(addFailMsg);
//            $("#divRetPayInfoMsg").addClass("alert-danger");
//            $("#divRetPayInfoMsg").removeClass("hidden alert-success");
//        }
//    });



//}

//function VendorHoldPayModeChange() {

//    var bank = $("#ddlHoldPayBank option:selected").text();
//    var Mode = $("#ddlHoldPayMode option:selected").text();

//    var bankindex = $("#ddlHoldPayBank option:selected").index();
//    var Modeindex = $("#ddlHoldPayMode option:selected").index();

//    if (Modeindex !== 0 && bankindex !== 0) {
//        if (Modeindex === 1) {
//            $("#txtHoldPayPaymentNo").addClass('hidden');
//            $("#ddlHoldPaymentNo").removeClass('hidden');
//            $.ajax({
//                type: "POST",
//                url: "/Accounts/GetChequeNos",
//                data: '{bankname:"' + bank + '"}',
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function (response) {
//                    var count = Object.keys(response).length;
//                    var rowcount = 0;
//                    //alert("Cheques"+count);
//                    var ddlInvPaymentNo = $("#ddlHoldPaymentNo");
//                    if (count > 0) {

//                        ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
//                        $.each(response, function () {
//                            ddlInvPaymentNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
//                        });
//                        $("#divHoldPayInfoMsg").text("");
//                        $("#divHoldPayInfoMsg").addClass("hidden");
//                    } else { ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>'); }

//                },
//                failure: function (response) {

//                },
//                error: function (response) {

//                }
//            });
//        }
//        else {
//            $("#txtHoldPayPaymentNo").removeClass('hidden');
//            $("#ddlHoldPaymentNo").addClass('hidden');
//            $("#divHoldPayInfoMsg").text("");
//            $("#divHoldPayInfoMsg").addClass("hidden");
//        }
//    }
//    else if (Modeindex === 0 && bankindex !== 0) {
//        $("#txtHoldPayPaymentNo").removeClass('hidden');
//        $("#ddlHoldPaymentNo").addClass('hidden');
//        $("#divHoldPayInfoMsg").text("");
//        $("#divHoldPayInfoMsg").addClass("hidden");

//    }
//    else if (Modeindex !== 0 && bankindex === 0) {
//        $("#txtHoldPayPaymentNo").removeClass('hidden');
//        $("#ddlHoldPaymentNo").addClass('hidden');

//        $("#divHoldPayInfoMsg").text("Select Bank Name");
//        $("#divHoldPayInfoMsg").addClass("alert-danger");
//        $("#divHoldPayInfoMsg").removeClass("hidden alert-success");
//        $("#divHoldPayInfoMsg").prop('selectedIndex', 0);
//    }
//    else {
//        $("#txtHoldPayPaymentNo").removeClass('hidden');
//        $("#ddlHoldPaymentNo").addClass('hidden');
//        $("#divHoldPayInfoMsg").text("");
//        $("#divHoldPayInfoMsg").addClass("hidden");

//    }
//}

function SubmitVendorHoldPayData() {
    var tablerowcount = $("#tblHoldPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(9).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        var Name = $("#txtHoldPayName").val();
        var bank = $("#ddlHoldPayBank option:selected").text();
        var Mode = $("#ddlHoldPayMode option:selected").text();
        var bankindex = $("#ddlHoldPayBank option:selected").index();
        var Modeindex = $("#ddlHoldPayMode option:selected").index();
        var date = $("#txtHoldPayDate").val();
        var remarks = $("#txtHoldPayReamarks").val();
        var amount = $("#txtHoldPayFinalAmount").val();
        if (Name === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
            isValid = false;
        }
        if (bankindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Modeindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex === 1) {
            var ddlcheque = $("#ddlRetPaymentNo option:selected").index();
            if (ddlcheque === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtRetPayPaymentNo").val();
            if (cheque === "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
                isValid = false;
            }

        }
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(9).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
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
            $("#tblHoldPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(3).html();
                if (checkbox === true) {
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
}

function SaveHoldPayment() {
    var Modeindex = $("#ddlHoldPayMode option:selected").index();
    var chequeno;
    if (Modeindex === 1) {
        var ddlcheque = $("#ddlHoldPaymentNo option:selected").val();
        chequeno = ddlcheque;
    }
    else {
        var cheque = $("#txtHoldPayPaymentNo").val();
        chequeno = cheque;
    }
    var selecetedinvnos = "";

    $("#tblHoldPayGrid tbody tr").each(function () {
        var currentRow = $(this);
        var checkbox = currentRow.find("td").eq(10).find("input[type='checkbox']").is(":checked");
        var ino = currentRow.find("td").eq(1).html();
        if (checkbox === true) {
            //  selecetedinvnos += ino + ","; 
            selecetedinvnos += $.trim(ino) + ",";
        }
    });

    var saveHoldPay = {
        InvoiceNos: selecetedinvnos,
        PONumber: $("#ddlPaymentVendor option:selected").val(),
        BankId: $("#ddlHoldPayBank option:selected").val(),
        Name: $("#txtHoldPayName").val(),
        TransactionDate: $("#txtHoldPayDate").val(),
        Number: chequeno,
        Remarks: $("#txtHoldPayReamarks").val(),
        TransactionAmount: $("#txtHoldPayFinalAmount").val(),
        BankName: $("#ddlHoldPayBank option:selected").text(),
        ModeofPay: $("#ddlHoldPayMode option:selected").text(),
        Paytype: 'Vendor Hold',
        Action: 'New'
    };
   
    addFailMsg = "Error Occurred While Adding Hold Payment";
    addSuccessMsg = "Hold Payment Added Successfully.";

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/SaveNewSPPOHoldPayment',
        data: { payData: saveHoldPay },
        success: function (Data) {
            $("#btnHoldPaySubmit").prop('disabled', true);
            if (Data.saveStatus == "Submited") {
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

//function VendorAdvPayModeChange() {
//    var bank = $("#ddlAdvPayBank option:selected").text();
//    var Mode = $("#ddlAdvPayMode option:selected").text();

//    var bankindex = $("#ddlAdvPayBank option:selected").index();
//    var Modeindex = $("#ddlAdvPayMode option:selected").index();

//    if (Modeindex !== 0 && bankindex !== 0) {
//        if (Modeindex === 1) {
//            $("#txtAdvPayPaymentNo").addClass('hidden');
//            $("#ddlAdvPaymentNo").removeClass('hidden');
//            $.ajax({
//                type: "POST",
//                url: "/Accounts/GetChequeNos",
//                data: '{bankname:"' + bank + '"}',
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function (response) {
//                    var count = Object.keys(response).length;
//                    var rowcount = 0;
//                    //alert("Cheques"+count);
//                    var ddlInvPaymentNo = $("#ddlAdvPaymentNo");
//                    if (count > 0) {

//                        ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>');
//                        $.each(response, function () {
//                            ddlInvPaymentNo.append($("<option></option>").val(this['Cheque_Id']).html(this['Cheque_No']));
//                        });
//                        $("#divAdvPayInfoMsg").text("");
//                        $("#divAdvPayInfoMsg").addClass("hidden");
//                    } else { ddlInvPaymentNo.empty().append('<option selected="selected" value="0">-Please Select-</option>'); }

//                },
//                failure: function (response) {

//                },
//                error: function (response) {

//                }
//            });
//        }
//        else {
//            $("#txtAdvPayPaymentNo").removeClass('hidden');
//            $("#ddlAdvPaymentNo").addClass('hidden');
//            $("#divAdvPayInfoMsg").text("");
//            $("#divAdvPayInfoMsg").addClass("hidden");
//        }
//    }
//    else if (Modeindex === 0 && bankindex !== 0) {
//        $("#txtAdvPayPaymentNo").removeClass('hidden');
//        $("#ddlAdvPaymentNo").addClass('hidden');
//        $("#divAdvPayInfoMsg").text("");
//        $("#divAdvPayInfoMsg").addClass("hidden");

//    }
//    else if (Modeindex !== 0 && bankindex === 0) {
//        $("#txtAdvPayPaymentNo").removeClass('hidden');
//        $("#ddlAdvPaymentNo").addClass('hidden');

//        $("#divAdvPayInfoMsg").text("Select Bank Name");
//        $("#divAdvPayInfoMsg").addClass("alert-danger");
//        $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
//        $("#divAdvPayInfoMsg").prop('selectedIndex', 0);
//    }
//    else {
//        $("#txtAdvPayPaymentNo").removeClass('hidden');
//        $("#ddlAdvPaymentNo").addClass('hidden');
//        $("#divAdvPayInfoMsg").text("");
//        $("#divAdvPayInfoMsg").addClass("hidden");
//    }

//}

//function SubmitVendorAdvancePayData() {
//    isValid = true;
//    var errorMsg = "";
//    var Name = $("#txtAdvPayName").val();
//    var bank = $("#ddlAdvPayBank option:selected").text();
//    var Mode = $("#ddlAdvPayMode option:selected").text();
//    var bankindex = $("#ddlAdvPayBank option:selected").index();
//    var Modeindex = $("#ddlAdvPayMode option:selected").index();
//    var date = $("#txtAdvPayDate").val();
//    var remarks = $("#txtAdvPayReamarks").val();
//    var amount = $("#txtAdvPayFinalAmount").val();
//    var balanceAmount = $("#txtAdvanceBalance").val();
//    if (Name === "") {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Name</p>";
//        isValid = false;
//    }
//    if (bankindex === 0) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
//        isValid = false;
//    }
//    if (Modeindex === 0) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
//        isValid = false;
//    }
//    if (Modeindex === 1) {
//        var ddlcheque = $("#ddlAdvPaymentNo option:selected").index();
//        if (ddlcheque === 0) {
//            errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
//            isValid = false;
//        }
//    }
//    else {
//        var cheque = $("#txtAdvPayPaymentNo").val();
//        if (cheque === "") {
//            errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
//            isValid = false;
//        }

//    }
//    if (date === "") {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
//        isValid = false;
//    }
//    if (remarks === "") {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
//        isValid = false;
//    }
//    if (amount === "" || amount === 0) {
//        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
//        isValid = false;
//    }
//    else if (parseFloat(balanceAmount) < parseFloat(amount)) {
//        errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Advance Amount</p>";
//        isValid = false;
//    }
//    var maxinvdate = $("#txtadvinvdate").val();  
//    if (new Date(date) < new Date(maxinvdate)) {      
//        errorMsg += "<p style='margin-top:-5px!important;'>Payment Date must be greater than Invoice Date</p>";
//        isValid = false;
//    }
//    if (!isValid) {
//        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
//        $("#divAdvPayInfoMsg").text("");
//        $("#divAdvPayInfoMsg").append(finalerror + errorMsg +  "</div>");
//        $("#divAdvPayInfoMsg").addClass("alert-danger");
//        $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
//    }
//    else {
//        $("#divAdvPayInfoMsg").text("");
//        $("#divAdvPayInfoMsg").addClass("hidden");
//        var payno = 0;
//        if ($("#ddlAdvPayMode  option:selected").val() == 'Cheque')
//            payno = $("#ddlAdvPaymentNo option:selected").val();
//        else
//            payno = $("#txtAdvPayPaymentNo").val();
//        var pnos = $('#ddlMultiPO option:selected').toArray().map(item => item.value).join(',');       
//        var allpos = pnos + ',';

//        var AdvanceData = {
//            PONumber: allpos,            
//            TransactionDate: $("#txtAdvPayDate").val(),
//            BankName: $("#ddlAdvPayBank  option:selected").text(),
//            ModeofPay: $("#ddlAdvPayMode  option:selected").val(),
//            BankId: $("#ddlAdvPayBank  option:selected").val(),
//            TransactionAmount: $("#txtAdvPayFinalAmount").val(),
//            Remarks: $("#txtAdvPayReamarks").val(),
//            Number: payno,
//            Paytype: 'Vendor Advance',
//            BankorCash:'Bank',

//        };
//        debugger;
//        addFailMsg = "Error Occurred While Adding New Payment";
//        addSuccessMsg = "Payment Details Added Successfully.";

//    //$.ajax({
//    //    type: 'POST',
//    //    dataType: 'json',
//    //    url: '/Purchase/SaveNewSPPOAdvancePayment',
//    //    data: { payData: AdvanceData },
//    //    success: function (Data) {
//    //        if (Data.saveStatus === 'Submited') {
//    //            $("#divAdvPayInfoMsg").text(addSuccessMsg);
//    //            $("#divAdvPayInfoMsg").removeClass("hidden alert-danger");
//    //            $("#divInvPayInfoMsg").addClass("alert-success");
//    //            $("#btnAdvPaySubmit").prop("disabled", true);
//    //        }
//    //        else {
//    //            $("#divAdvPayInfoMsg").text(Data.saveStatus);
//    //            $("#divAdvPayInfoMsg").addClass("alert-danger");
//    //            $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
//    //            $("#btnAdvPaySubmit").prop("disabled", true);
//    //        }
//    //    },
//    //    error: function (XMLHttpRequest, textStatus, errorThrown) {
//    //        $("#divAdvPayInfoMsg").text(addFailMsg);
//    //        $("#divAdvPayInfoMsg").addClass("alert-danger");
//    //        $("#divAdvPayInfoMsg").removeClass("hidden alert-success");
//    //        $("#btnAdvPaySubmit").prop("disabled", true);
//    //    }SPPOPaymentTypeChenage
//    //});

//    }
//}
function VendorTypeChange() {
    var vendortypeindex = $("#ddlVendorType  option:selected").index();
    var vendortype = $("#ddlVendorType  option:selected").val();
    var payddl = $("#ddlPaymentType");
    if (vendortypeindex !== 0) {
        $.ajax({
            type: "POST",
            url: "/Purchase/GetSPPOPaymentType",
            data: '{VendorType:"' + vendortype + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    payddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        payddl.append($("<option></option>").val(this['Type']).html(this['TypeDesc']));
                    });
                    $("#sppopaytypes").removeClass("hidden");
                }

            },
            failure: function (response) {

            },
            error: function (response) {
            }
        });
    }
    else {
        location.reload();
    }

}

//Save Bank  payments
function SubmitVendorSPPOInvoiceBankPayData() {
    //  alert('SPPOInvoiceBank');

    var tablerowcount = $("#tblInvPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        // var Name = $("#txtInvBankPayName").val();
        var bank = $("#ddlInvBankPayBank option:selected").text();
        var Mode = $("#ddlInvBankPayMode option:selected").text();
        var bankindex = $("#ddlInvBankPayBank option:selected").index();
        var Modeindex = $("#ddlInvBankPayMode option:selected").index();
        var date = $("#txtInvBankPayDate").val();
        var remarks = $("#txtInvBankPayReamarks").val();
        var amount = $("#txtInvBankPayFinalAmount").val();

        if (bankindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
            isValid = false;
        }
        if (Modeindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex === 1) {
            var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
            if (ddlcheque === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtInvBankPaymentNo").val();
            if (cheque === "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
                isValid = false;
            }

        }
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblInvPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(4).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                // SaveVendorInvoicePayment();


                var Invnos = "", Ponos = "";
                $("#tblInvPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                    var invno = currentRow.find("td").eq(3).html();
                    var po = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        Invnos += $.trim(invno) + ',';
                        Ponos += $.trim(po) + ',';
                    }
                });
                var payno = 0;
                if ($("#ddlInvBankPayMode  option:selected").val() === 'Cheque')
                    payno = $("#ddlInvPaymentNo option:selected").text();
                else
                    payno = $("#txtInvBankPaymentNo").val();

                var SaveData = {
                    InvoiceNos: Invnos,
                    PONumber: Ponos,
                    TransactionDate: $("#txtInvBankPayDate").val(),
                    BankName: $("#ddlInvBankPayBank  option:selected").text(),
                    ModeofPay: $("#ddlInvBankPayMode  option:selected").val(),
                    BankId: $("#ddlInvBankPayBank  option:selected").val(),
                    TransactionAmount: $("#txtInvBankPayFinalAmount").val(),
                    Remarks: $("#txtInvBankPayReamarks").val(),
                    Number: payno,
                    Paytype: 'Vendor Invoice',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Bank',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val()
                };
                debugger;
                addFailMsg = "Error Occurred While Adding New Payment";
                addSuccessMsg = "Payment Details Added Successfully.";
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOInvoicePayment',
                    data: { payData: SaveData },
                    success: function (Data) {
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {      
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1]+' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                             $("#btnSPPOInvBankPaySubmit").prop("disabled", true);
                        }
                        else {
                            $("#divSppoPayInfoMsg").text(Data.saveStatus);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                            $("#btnSPPOInvBankPaySubmit").prop("disabled", true);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        $("#btnSPPOInvBankPaySubmit").prop("disabled", true);
                    }
                });
            }
        }
    }
}
function SubmitVendorSPPOAdvanceBankPayData() {
    alert('SPPOAdvanceBank');
    isValid = true;
    var errorMsg = "";
    var bank = $("#ddlInvBankPayBank option:selected").text();
    var Mode = $("#ddlInvBankPayMode option:selected").text();
    var bankindex = $("#ddlInvBankPayBank option:selected").index();
    var Modeindex = $("#ddlInvBankPayMode option:selected").index();
    var date = $("#txtInvBankPayDate").val();
    var remarks = $("#txtInvBankPayReamarks").val();
    var amount = $("#txtInvBankPayFinalAmount").val();
    var balanceAmount = $("#txtAdvanceBalance").val();
   
    if (bankindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        isValid = false;
    }
    if (Modeindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        isValid = false;
    }
    if (Modeindex === 1) {
        var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
        if (ddlcheque === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
            isValid = false;
        }
    }
    else {
        var cheque = $("#txtInvBankPaymentNo").val();
        if (cheque === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
            isValid = false;
        }

    }
    if (date === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
        isValid = false;
    }
    if (remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (amount === "" || amount <= 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
        isValid = false;
    }
    else if (parseFloat(balanceAmount) < parseFloat(amount)) {
        errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Advance Amount</p>";
        isValid = false;
    }
    var maxinvdate = $("#txtadvinvdate").val();
    if (new Date(date) < new Date(maxinvdate)) {
        errorMsg += "<p style='margin-top:-5px!important;'>Payment Date must be greater than Invoice Date</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divSppoPayInfoMsg").addClass("alert-danger");
        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");

        var payno = 0;
        if ($("#ddlInvBankPayMode  option:selected").val() === 'Cheque')
            payno = $("#ddlInvPaymentNo option:selected").text();
        else
            payno = $("#txtInvBankPaymentNo").val();

        //var pnos = $('#ddlMultiPO option:selected').toArray().map(item => item.value).join(',');
        //var allpos = pnos + ',';
        var singlepo = $("#ddlSinglePO option:selected").val();

        var AdvanceData = {
            PONumber: singlepo,
            TransactionDate: $("#txtInvBankPayDate").val(),
            BankName: $("#ddlInvBankPayBank  option:selected").text(),
            ModeofPay: $("#ddlInvBankPayMode  option:selected").val(),
            BankId: $("#ddlInvBankPayBank  option:selected").val(),
            TransactionAmount: $("#txtInvBankPayFinalAmount").val(),
            Remarks: $("#txtInvBankPayReamarks").val(),
            Number: payno,
            Paytype: 'Vendor Advance',
            BankorCash: 'Bank',
            VendorType: $("#ddlVendorType  option:selected").val(),
            VendorCode: $("#ddlPaymentVendor  option:selected").val(),
            InvoiceNo: $("#ddlAdvanceInv option:selected").val()
        };
        debugger;
        addFailMsg = "Error Occurred While Adding New Payment";
        addSuccessMsg = "Payment Details Added Successfully.";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Purchase/SaveNewSPPOAdvancePayment',
            data: { payData: AdvanceData },
            success: function (Data) {
                var typeArr = Data.saveStatus.toString().split('$');
                var result = typeArr[0];
                if (result === 'Submited') {
                    addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                    $("#divSppoPayInfoMsg").text(addSuccessMsg);
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divSppoPayInfoMsg").addClass("alert-success");
                     $("#btnSPPOInvBankAdvPaySubmit").prop("disabled", true);
                }
                else {
                    $("#divSppoPayInfoMsg").text(Data.saveStatus);
                    $("#divSppoPayInfoMsg").addClass("alert-danger");
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                     $("#btnSPPOInvBankAdvPaySubmit").prop("disabled", true);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divSppoPayInfoMsg").text(addFailMsg);
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                 $("#btnInvBankAdvPaySubmit").prop("disabled", true);
            }
        });

    }

}
function SubmitVendorSPPORetentionBankPayData() {
    //  alert('SPPORetentionBank');
    var tablerowcount = $("#tblRetentionPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblRetentionPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        var bank = $("#ddlInvBankPayBank option:selected").text();
        var Mode = $("#ddlInvBankPayMode option:selected").text();
        var bankindex = $("#ddlInvBankPayBank option:selected").index();
        var Modeindex = $("#ddlInvBankPayMode option:selected").index();
        var date = $("#txtInvBankPayDate").val();
        var remarks = $("#txtInvBankPayReamarks").val();
        var amount = $("#txtInvBankPayFinalAmount").val();

        if (bankindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Modeindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex === 1) {
            var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
            if (ddlcheque === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtInvBankPaymentNo").val();
            if (cheque === "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
                isValid = false;
            }
        }
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        $("#tblRetentionPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblRetentionPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(3).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                // var Modeindex = $("#ddlInvBankPayMode option:selected").index();
                var chequeno;
                if (Modeindex === 1) {
                    chequeno = $("#ddlInvPaymentNo option:selected").text();
                }
                else {
                    chequeno = $("#txtInvBankPaymentNo").val();
                }
                var selecetedinvnos = "", Ponos = "";

                $("#tblRetentionPayGrid tbody tr").each(function () {

                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var pno = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        //  selecetedinvnos += ino + ","; 
                        selecetedinvnos += $.trim(ino) + ",";
                        Ponos += $.trim(pno) + ",";
                    }
                });
                var saveRetPay = {
                    InvoiceNos: selecetedinvnos,
                    PONumber: Ponos,
                    BankId: $("#ddlInvBankPayBank option:selected").val(),
                    TransactionDate: $("#txtInvBankPayDate").val(),
                    Number: chequeno,
                    Remarks: $("#txtInvBankPayReamarks").val(),
                    TransactionAmount: $("#txtInvBankPayFinalAmount").val(),
                    BankName: $("#ddlInvBankPayBank option:selected").text(),
                    ModeofPay: $("#ddlInvBankPayMode option:selected").text(),
                    Paytype: 'Vendor Retention',
                    Action: 'New',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Bank',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val()
                };
                debugger;
                addFailMsg = "Error Occurred While Adding Retention Payment";
                addSuccessMsg = "Retention Payment Added Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPORetentionPayment',
                    data: { payData: saveRetPay },
                    success: function (Data) {
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                            $("#btnSPPOInvBankRetPaySubmit").prop('disabled', true);
                        }
                        else {
                            $("#btnSPPOInvBankRetPaySubmit").prop('disabled', true);
                            $("#divSppoPayInfoMsg").text(addFailMsg);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                        $("#btnSPPOInvBankRetPaySubmit").prop('disabled', true);
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    }
                });

            }
        }
    }

}
function SubmitVendorSPPOHoldBankPayData() {
    // alert('SPPOHoldBank');
    var tablerowcount = $("#tblHoldPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        var bank = $("#ddlInvBankPayBank option:selected").text();
        var Mode = $("#ddlInvBankPayMode option:selected").text();
        var bankindex = $("#ddlInvBankPayBank option:selected").index();
        var Modeindex = $("#ddlInvBankPayMode option:selected").index();
        var date = $("#txtInvBankPayDate").val();
        var remarks = $("#txtInvBankPayReamarks").val();
        var amount = $("#txtInvBankPayFinalAmount").val();

        if (bankindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Modeindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex === 1) {
            var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
            if (ddlcheque === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtInvBankPaymentNo").val();
            if (cheque === "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
                isValid = false;
            }

        }
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblHoldPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(3).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                //  SaveHoldPayment();



                var chequeno;
                if (Modeindex === 1) {
                    chequeno = $("#ddlInvPaymentNo option:selected").text();
                }
                else {
                    chequeno = $("#txtInvBankPaymentNo").val();
                }
                var selecetedinvnos = "", ponos = "";

                $("#tblHoldPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var pno = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        //  selecetedinvnos += ino + ","; 
                        selecetedinvnos += $.trim(ino) + ",";
                        ponos += $.trim(pno) + ",";
                    }
                });

                var saveHoldPay = {
                    InvoiceNos: selecetedinvnos,
                    PONumber: ponos,
                    BankId: $("#ddlInvBankPayBank option:selected").val(),
                    TransactionDate: $("#txtInvBankPayDate").val(),
                    Number: chequeno,
                    Remarks: $("#txtInvBankPayReamarks").val(),
                    TransactionAmount: $("#txtInvBankPayFinalAmount").val(),
                    BankName: $("#ddlInvBankPayBank option:selected").text(),
                    ModeofPay: $("#ddlInvBankPayMode option:selected").text(),
                    Paytype: 'Vendor Hold',
                    Action: 'New',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Bank',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val()
                };
                debugger;

                addFailMsg = "Error Occurred While Adding Hold Payment";
                addSuccessMsg = "Hold Payment Added Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOHoldPayment',
                    data: { payData: saveHoldPay },
                    success: function (Data) {
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                        }
                        else {
                            $("#divSppoPayInfoMsg").prop('disabled', true);
                            $("#divSppoPayInfoMsg").text(addFailMsg);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        }
                        $("#btnSPPOInvBankHoldPaySubmit").prop('disabled', true);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                        $("#btnSPPOInvBankHoldPaySubmit").prop('disabled', true);
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    }
                });
            }
        }
    }
}
function SubmitVendorSupplierInvoiceBankPayData() {
    // alert('SupplierInvoiceBank');
    var tablerowcount = $("#tblInvPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        // var Name = $("#txtInvBankPayName").val();
        var bank = $("#ddlInvBankPayBank option:selected").text();
        var Mode = $("#ddlInvBankPayMode option:selected").text();
        var bankindex = $("#ddlInvBankPayBank option:selected").index();
        var Modeindex = $("#ddlInvBankPayMode option:selected").index();
        var date = $("#txtInvBankPayDate").val();
        var remarks = $("#txtInvBankPayReamarks").val();
        var amount = $("#txtInvBankPayFinalAmount").val();

        if (bankindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
            isValid = false;
        }
        if (Modeindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex === 1) {
            var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
            if (ddlcheque === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtInvBankPaymentNo").val();
            if (cheque === "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
                isValid = false;
            }

        }
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblInvPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(4).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                // SaveVendorInvoicePayment();


                var Invnos = "", Ponos = "";
                $("#tblInvPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                    var invno = currentRow.find("td").eq(3).html();
                    var po = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        Invnos += $.trim(invno) + ',';
                        Ponos += $.trim(po) + ',';
                    }
                });
                var payno = 0;
                if ($("#ddlInvBankPayMode  option:selected").val() === 'Cheque')
                    payno = $("#ddlInvPaymentNo option:selected").text();
                else
                    payno = $("#txtInvBankPaymentNo").val();

                var SaveData = {
                    InvoiceNos: Invnos,
                    PONumber: Ponos,
                    TransactionDate: $("#txtInvBankPayDate").val(),
                    BankName: $("#ddlInvBankPayBank  option:selected").text(),
                    ModeofPay: $("#ddlInvBankPayMode  option:selected").val(),
                    BankId: $("#ddlInvBankPayBank  option:selected").val(),
                    TransactionAmount: $("#txtInvBankPayFinalAmount").val(),
                    Remarks: $("#txtInvBankPayReamarks").val(),
                    Number: payno,
                    Paytype: 'Vendor Invoice',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Bank',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val()
                };
                debugger;
                addFailMsg = "Error Occurred While Adding New Payment";
                addSuccessMsg = "Payment Details Added Successfully.";
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOInvoicePayment',
                    data: { payData: SaveData },
                    success: function (Data) {
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                            $("#btnSupplerInvBankPaySubmit").prop("disabled", true);
                        }
                        else {
                            $("#divSppoPayInfoMsg").text(Data.saveStatus);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                            $("#btnSupplerInvBankPaySubmit").prop("disabled", true);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        $("#btnSupplerInvBankPaySubmit").prop("disabled", true);
                    }
                });
            }
        }
    }

}
function SubmitVendorSupplierAdvanceBankPayData() {
    // alert('SupplierAdvanceBank');
    isValid = true;
    var errorMsg = "";
    var bank = $("#ddlInvBankPayBank option:selected").text();
    var Mode = $("#ddlInvBankPayMode option:selected").text();
    var bankindex = $("#ddlInvBankPayBank option:selected").index();
    var Modeindex = $("#ddlInvBankPayMode option:selected").index();
    var date = $("#txtInvBankPayDate").val();
    var remarks = $("#txtInvBankPayReamarks").val();
    var amount = $("#txtInvBankPayFinalAmount").val();
    var balanceAmount = $("#txtAdvanceBalance").val();
    if (bankindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        isValid = false;
    }
    if (Modeindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        isValid = false;
    }
    if (Modeindex === 1) {
        var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
        if (ddlcheque === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
            isValid = false;
        }
    }
    else {
        var cheque = $("#txtInvBankPaymentNo").val();
        if (cheque === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
            isValid = false;
        }

    }
    if (date === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
        isValid = false;
    }
    if (remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (amount === "" || amount <= 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
        isValid = false;
    }
    else if (parseFloat(balanceAmount) < parseFloat(amount)) {
        errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Advance Amount</p>";
        isValid = false;
    }
    var maxinvdate = $("#txtadvinvdate").val();
    if (new Date(date) < new Date(maxinvdate)) {
        errorMsg += "<p style='margin-top:-5px!important;'>Payment Date must be greater than Invoice Date</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divSppoPayInfoMsg").addClass("alert-danger");
        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");

        var payno = 0;
        if ($("#ddlInvBankPayMode  option:selected").val() === 'Cheque')
            payno = $("#ddlInvPaymentNo option:selected").text();
        else
            payno = $("#txtInvBankPaymentNo").val();

        var pnos = $('#ddlMultiPO option:selected').toArray().map(item => item.value).join(',');
        var allpos = pnos + ',';

        var AdvanceData = {
            PONumber: allpos,
            TransactionDate: $("#txtInvBankPayDate").val(),
            BankName: $("#ddlInvBankPayBank  option:selected").text(),
            ModeofPay: $("#ddlInvBankPayMode  option:selected").val(),
            BankId: $("#ddlInvBankPayBank  option:selected").val(),
            TransactionAmount: $("#txtInvBankPayFinalAmount").val(),
            Remarks: $("#txtInvBankPayReamarks").val(),
            Number: payno,
            Paytype: 'Vendor Advance',
            BankorCash: 'Bank',
            VendorType: $("#ddlVendorType  option:selected").val(),
            VendorCode: $("#ddlPaymentVendor  option:selected").val()
        };
        debugger;
        addFailMsg = "Error Occurred While Adding New Payment";
        addSuccessMsg = "Payment Details Added Successfully.";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Purchase/SaveNewSPPOAdvancePayment',
            data: { payData: AdvanceData },
            success: function (Data) {
                var typeArr = Data.saveStatus.toString().split('$');
                var result = typeArr[0];
                if (result === 'Submited') {
                    addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                    $("#divSppoPayInfoMsg").text(addSuccessMsg);
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divSppoPayInfoMsg").addClass("alert-success");
                    $("#btnSupplerAdvBankPaySubmit").prop("disabled", true);
                }
                else {
                    $("#divSppoPayInfoMsg").text(Data.saveStatus);
                    $("#divSppoPayInfoMsg").addClass("alert-danger");
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    $("#btnSupplerAdvBankPaySubmit").prop("disabled", true);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divSppoPayInfoMsg").text(addFailMsg);
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                $("#btnSupplerAdvBankPaySubmit").prop("disabled", true);
            }
        });

    }

}
function SubmitVendorSupplierHoldBankPayData() {
    // alert('SupplierHoldBank');
    var tablerowcount = $("#tblHoldPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        var bank = $("#ddlInvBankPayBank option:selected").text();
        var Mode = $("#ddlInvBankPayMode option:selected").text();
        var bankindex = $("#ddlInvBankPayBank option:selected").index();
        var Modeindex = $("#ddlInvBankPayMode option:selected").index();
        var date = $("#txtInvBankPayDate").val();
        var remarks = $("#txtInvBankPayReamarks").val();
        var amount = $("#txtInvBankPayFinalAmount").val();

        if (bankindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
            isValid = false;
        }
        if (Modeindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
            isValid = false;
        }
        if (Modeindex === 1) {
            var ddlcheque = $("#ddlInvPaymentNo option:selected").index();
            if (ddlcheque === 0) {
                errorMsg += "<p style='margin-top:-5px!important;'>Select Cheque No</p>";
                isValid = false;
            }
        }
        else {
            var cheque = $("#txtInvBankPaymentNo").val();
            if (cheque === "") {
                errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
                isValid = false;
            }

        }
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblHoldPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(3).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                //  SaveHoldPayment();



                var chequeno;
                if (Modeindex === 1) {
                    chequeno = $("#ddlInvPaymentNo option:selected").text();
                }
                else {
                    chequeno = $("#txtInvBankPaymentNo").val();
                }
                var selecetedinvnos = "", ponos = "";

                $("#tblHoldPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var pno = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        //  selecetedinvnos += ino + ","; 
                        selecetedinvnos += $.trim(ino) + ",";
                        ponos += $.trim(pno) + ",";
                    }
                });

                var saveHoldPay = {
                    InvoiceNos: selecetedinvnos,
                    PONumber: ponos,
                    BankId: $("#ddlInvBankPayBank option:selected").val(),
                    TransactionDate: $("#txtInvBankPayDate").val(),
                    Number: chequeno,
                    Remarks: $("#txtInvBankPayReamarks").val(),
                    TransactionAmount: $("#txtInvBankPayFinalAmount").val(),
                    BankName: $("#ddlInvBankPayBank option:selected").text(),
                    ModeofPay: $("#ddlInvBankPayMode option:selected").text(),
                    Paytype: 'Vendor Hold',
                    Action: 'New',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Bank',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val()
                };
                debugger;

                addFailMsg = "Error Occurred While Adding Hold Payment";
                addSuccessMsg = "Hold Payment Added Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOHoldPayment',
                    data: { payData: saveHoldPay },
                    success: function (Data) {
                        $("#btnInvSupplerHoldBankPaySubmit").prop('disabled', true);
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                        }
                        else {
                            $("#divSppoPayInfoMsg").prop('disabled', true);
                            $("#divSppoPayInfoMsg").text(addFailMsg);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                        $("#btnInvSupplerHoldBankPaySubmit").prop('disabled', true);
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    }
                });
            }
        }
    }
}
//Cash payments
function SubmitVendorSPPOInvoiceCashPayData() {
    //alert('SPPOInvoiceCash');
    var tablerowcount = $("#tblInvPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        // var Name = $("#txtInvBankPayName").val();
        //var bank = $("#ddlInvCashPayBank option:selected").text();
        //var Mode = $("#ddlInvCashPayMode option:selected").text();
        //var bankindex = $("#ddlInvCashPayBank option:selected").index();
        //var Modeindex = $("#ddlInvCashPayMode option:selected").index();
        var date = $("#txtInvCashPayDate").val();
        var remarks = $("#txtInvCashPayReamarks").val();
        var amount = $("#txtInvCashPayFinalAmount").val();
        var transactionmode = $("#ddlGPCPaymentmode option:selected").index();
        // if (transactionmode === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        //    isValid = false;
        //}
        //if (bankindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        //    isValid = false;
        //}
        //if (Modeindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        //    isValid = false;
        //}        
        //var cheque = $("#txtInvCashPaymentNo").val();
        //if (cheque === "") {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
        //    isValid = false;
        //}       
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        
        // if (transactionmode === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        //    isValid = false;
        //}

        //if ($('#chkPaidtootherCC').is(":checked") === true) {
        //    var paidagainstCC = $("#ddlVendorPayOtherCC option:selected").index();
        //    if (paidagainstCC === 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Against Cost Center</p>";
        //        isValid = false;
        //    }
        //}
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblInvPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(4).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }
            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                // SaveVendorInvoicePayment();
                var Invnos = "", Ponos = "";
                $("#tblInvPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                    var invno = currentRow.find("td").eq(3).html();
                    var po = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        Invnos += $.trim(invno) + ',';
                        Ponos += $.trim(po) + ',';
                    }
                });
                var paidagainstCCCode = "";
                var index = $("#ddlGPCPaymentmode option:selected").index();
                if (index === 2) {
                    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
                }
                //if ($('#chkPaidtootherCC').is(":checked") === true) {
                //    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
                //}
                var SaveData = {
                    InvoiceNos: Invnos,
                    PONumber: Ponos,
                    TransactionDate: $("#txtInvCashPayDate").val(),
                    TransactionAmount: $("#txtInvCashPayFinalAmount").val(),
                    Remarks: $("#txtInvCashPayReamarks").val(),
                    Paytype: 'Vendor Invoice',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Cash',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val(),
                    OtherCCCode: paidagainstCCCode,
                    CCCode: $("#ddlVendorPayCC option:selected").val(),
                    CashTransMode: index
                };
                debugger;
                addFailMsg = "Error Occurred While Adding New Payment";
                addSuccessMsg = "Payment Details Added Successfully.";
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOInvoicePayment',
                    data: { payData: SaveData },
                    success: function (Data) {
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                            $("#btnInvSPPOCashPaySubmit").prop("disabled", true);
                        }
                        else {
                            $("#divSppoPayInfoMsg").text(Data.saveStatus);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                            $("#btnInvSPPOCashPaySubmit").prop("disabled", true);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        $("#btnInvSPPOCashPaySubmit").prop("disabled", true);
                    }
                });
            }
        }
    }
}
function SubmitVendorSPPOAdvanceCashPayData() {
    // alert('SPPOAdvanceCash');
    isValid = true;
    var errorMsg = "";
    //var bank = $("#ddlInvCashPayBank option:selected").text();
    //var Mode = $("#ddlInvCashPayMode option:selected").text();
    //var bankindex = $("#ddlInvCashPayBank option:selected").index();
    //var Modeindex = $("#ddlInvCashPayMode option:selected").index();
    var date = $("#txtInvCashPayDate").val();
    var remarks = $("#txtInvCashPayReamarks").val();
    var amount = $("#txtInvCashPayFinalAmount").val();
    var balanceAmount = $("#txtAdvanceBalance").val();
    //if (bankindex === 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
    //    isValid = false;
    //}
    //if (Modeindex === 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
    //    isValid = false;
    //}   
    // var cheque = $("#txtInvCashPaymentNo").val();
    // if (cheque === "") {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
    //        isValid = false;
    // }    
    if (date === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
        isValid = false;
    }
    if (remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (amount === "" || amount <= 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
        isValid = false;
    }
    else if (parseFloat(balanceAmount) < parseFloat(amount)) {
        errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Advance Amount</p>";
        isValid = false;
    }
    var maxinvdate = $("#txtadvinvdate").val();
    if (new Date(date) < new Date(maxinvdate)) {
        errorMsg += "<p style='margin-top:-5px!important;'>Payment Date must be greater than Invoice Date</p>";
        isValid = false;
    }
    //if ($('#chkPaidtootherCC').is(":checked") === true) {
    //    var paidagainstCC = $("#ddlVendorPayOtherCC option:selected").index();
    //    if (paidagainstCC === 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Against Cost Center</p>";
    //        isValid = false;
    //    }
    //}
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divSppoPayInfoMsg").addClass("alert-danger");
        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");
        // var  payno = $("#txtInvCashPaymentNo").val();
        var pnos = $('#ddlMultiPO option:selected').toArray().map(item => item.value).join(',');
        var allpos = pnos + ',';

        var paidagainstCCCode = "";
        //if ($('#chkPaidtootherCC').is(":checked") === true) {
        //    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();

        //}       
        var index = $("#ddlGPCPaymentmode option:selected").index();
        if (index === 2) {
            paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
        }
        var AdvanceData = {
            PONumber: allpos,
            TransactionDate: $("#txtInvCashPayDate").val(),
            TransactionAmount: $("#txtInvCashPayFinalAmount").val(),
            Remarks: $("#txtInvCashPayReamarks").val(),
            Paytype: 'Vendor Advance',
            BankorCash: 'Cash',
            VendorType: $("#ddlVendorType  option:selected").val(),
            VendorCode: $("#ddlPaymentVendor  option:selected").val(),
            OtherCCCode: paidagainstCCCode,
            CCCode: $("#ddlVendorPayCC option:selected").val(),
            CashTransMode: index
        };
        debugger;
        addFailMsg = "Error Occurred While Adding New Payment";
        addSuccessMsg = "Payment Details Added Successfully.";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Purchase/SaveNewSPPOAdvancePayment',
            data: { payData: AdvanceData },
            success: function (Data) {
                var typeArr = Data.saveStatus.toString().split('$');
                var result = typeArr[0];
                if (result === 'Submited') {
                    addSuccessMsg = 'Transaction Ref No. " + typeArr[1]+" Created Successfully';
                    $("#divSppoPayInfoMsg").text(addSuccessMsg);
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divSppoPayInfoMsg").addClass("alert-success");
                    $("#btnInvSPPOCashAdvPaySubmit").prop("disabled", true);
                }
                else {
                    $("#divSppoPayInfoMsg").text(Data.saveStatus);
                    $("#divSppoPayInfoMsg").addClass("alert-danger");
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    $("#btnInvSPPOCashAdvPaySubmit").prop("disabled", true);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divSppoPayInfoMsg").text(addFailMsg);
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                $("#btnInvSPPOCashAdvPaySubmit").prop("disabled", true);
            }
        });

    }
}
function SubmitVendorSPPORetentionCashPayData() {
    // alert('SPPORetentionCash');
    var tablerowcount = $("#tblRetentionPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblRetentionPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        //var bank = $("#ddlInvCashPayBank option:selected").text();
        //var Mode = $("#ddlInvCashPayMode option:selected").text();
        //var bankindex = $("#ddlInvCashPayBank option:selected").index();
        //var Modeindex = $("#ddlInvCashPayMode option:selected").index();
        var date = $("#txtInvCashPayDate").val();
        var remarks = $("#txtInvCashPayReamarks").val();
        var amount = $("#txtInvCashPayFinalAmount").val();

        //if (bankindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        //    isValid = false;
        //}
        //if (Modeindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        //    isValid = false;
        //}        
        //var cheque = $("#txtInvCashPaymentNo").val();
        // if (cheque === "") {
        //  errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
        //    isValid = false;
        // }

        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        //if ($('#chkPaidtootherCC').is(":checked") === true) {
        //    var paidagainstCC = $("#ddlVendorPayOtherCC option:selected").index();
        //    if (paidagainstCC === 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Against Cost Center</p>";
        //        isValid = false;
        //    }
        //}
        $("#tblRetentionPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblRetentionPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(3).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                // var Modeindex = $("#ddlInvBankPayMode option:selected").index();
                //var chequeno;               
                //chequeno = $("#txtInvCashPaymentNo").val();

                var selecetedinvnos = "", Ponos = "";

                $("#tblRetentionPayGrid tbody tr").each(function () {

                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var pno = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        //  selecetedinvnos += ino + ","; 
                        selecetedinvnos += $.trim(ino) + ",";
                        Ponos += $.trim(pno) + ",";
                    }
                });

                var paidagainstCCCode = "";
                
                var index = $("#ddlGPCPaymentmode option:selected").index();
                if (index === 2) {
                    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
                }
                //if ($('#chkPaidtootherCC').is(":checked") === true) {
                //    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();

                //}

                var saveRetPay = {
                    InvoiceNos: selecetedinvnos,
                    PONumber: Ponos,
                    TransactionDate: $("#txtInvCashPayDate").val(),
                    Remarks: $("#txtInvCashPayReamarks").val(),
                    TransactionAmount: $("#txtInvCashPayFinalAmount").val(),
                    Paytype: 'Vendor Retention',
                    Action: 'New',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Cash',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val(),
                    OtherCCCode: paidagainstCCCode,
                    CCCode: $("#ddlVendorPayCC option:selected").val(),
            CashTransMode: index
                };
                debugger;
                addFailMsg = "Error Occurred While Adding Retention Payment";
                addSuccessMsg = "Retention Payment Added Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPORetentionPayment',
                    data: { payData: saveRetPay },
                    success: function (Data) {

                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + 'Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                            $("#btnInvSPPOCashRetPaySubmit").prop('disabled', true);
                        }
                        else {
                            $("#btnInvSPPOCashRetPaySubmit").prop('disabled', true);
                            $("#divSppoPayInfoMsg").text(addFailMsg);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                        $("#btnInvSPPOCashRetPaySubmit").prop('disabled', true);
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    }
                });

            }
        }
    }
}
function SubmitVendorSPPOHoldCashPayData() {
    // alert('SPPOHoldCash');
    var tablerowcount = $("#tblHoldPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        //var bank = $("#ddlInvCashPayBank option:selected").text();
        //var Mode = $("#ddlInvCashPayMode option:selected").text();
        //var bankindex = $("#ddlInvCashPayBank option:selected").index();
        //var Modeindex = $("#ddlInvCashPayMode option:selected").index();
        var date = $("#txtInvCashPayDate").val();
        var remarks = $("#txtInvCashPayReamarks").val();
        var amount = $("#txtInvCashPayFinalAmount").val();

        //if (bankindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank Name</p>";
        //    isValid = false;
        //}
        //if (Modeindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        //    isValid = false;
        //}

        //var cheque = $("#txtInvCashPaymentNo").val();
        //    if (cheque === "") {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Enter Cheque No</p>";
        //        isValid = false;
        //    }


        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        //if ($('#chkPaidtootherCC').is(":checked") === true) {
        //    var paidagainstCC = $("#ddlVendorPayOtherCC option:selected").index();
        //    if (paidagainstCC === 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Against Cost Center</p>";
        //        isValid = false;
        //    }
        //}
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblHoldPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(3).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                //  SaveHoldPayment();
                //   var  chequeno = $("#txtInvCashPaymentNo").val();

                var selecetedinvnos = "", ponos = "";

                $("#tblHoldPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var pno = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        //  selecetedinvnos += ino + ","; 
                        selecetedinvnos += $.trim(ino) + ",";
                        ponos += $.trim(pno) + ",";
                    }
                });

                var paidagainstCCCode = "";
                var index = $("#ddlGPCPaymentmode option:selected").index();
                if (index === 2) {
                    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
                }
                //if ($('#chkPaidtootherCC').is(":checked") === true) {
                //    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();

                //}

                var saveHoldPay = {
                    InvoiceNos: selecetedinvnos,
                    PONumber: ponos,
                    TransactionDate: $("#txtInvCashPayDate").val(),
                    Remarks: $("#txtInvCashPayReamarks").val(),
                    TransactionAmount: $("#txtInvCashPayFinalAmount").val(),
                    Paytype: 'Vendor Hold',
                    Action: 'New',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Cash',
                    VendorCode: $("#ddlPaymentVendor option:selected").val(),
                    OtherCCCode: paidagainstCCCode,
                    CCCode: $("#ddlVendorPayCC option:selected").val(),
                    CashTransMode: index
                };
                debugger;

                addFailMsg = "Error Occurred While Adding Hold Payment";
                addSuccessMsg = "Hold Payment Added Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOHoldPayment',
                    data: { payData: saveHoldPay },
                    success: function (Data) {
                        $("#btnInvSPPOCashHoldPaySubmit").prop('disabled', true);
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                        }
                        else {
                            $("#divSppoPayInfoMsg").prop('disabled', true);
                            $("#divSppoPayInfoMsg").text(addFailMsg);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                       $("#btnInvSPPOCashHoldPaySubmit").prop('disabled', true);
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    }
                });
            }
        }
    }

}
function SubmitVendorSupplierInvoiceCashPayData() {
    //alert('SupplierInvoiceCash');
    var tablerowcount = $("#tblInvPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        // var Name = $("#txtInvBankPayName").val();
        //var bank = $("#ddlInvCashPayBank option:selected").text();
        //var Mode = $("#ddlInvCashPayMode option:selected").text();
        //var bankindex = $("#ddlInvCashPayBank option:selected").index();
        //var Modeindex = $("#ddlInvCashPayMode option:selected").index();
        var date = $("#txtInvCashPayDate").val();
        var remarks = $("#txtInvCashPayReamarks").val();
        var amount = $("#txtInvCashPayFinalAmount").val();

        //if (bankindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
        //    isValid = false;
        //}
        //if (Modeindex === 0) {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
        //    isValid = false;
        //}

        //var cheque = $("#txtInvCashPaymentNo").val();
        //if (cheque === "") {
        //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
        //    isValid = false;
        //}


        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        //if ($('#chkPaidtootherCC').is(":checked") === true) {
        //    var paidagainstCC = $("#ddlVendorPayOtherCC option:selected").index();
        //    if (paidagainstCC === 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Against Cost Center</p>";
        //        isValid = false;
        //    }
        //}
        $("#tblInvPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblInvPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(4).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date(invdate)) {
                        isValid = false;
                    }
                }

            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                // SaveVendorInvoicePayment();
                var Invnos = "", Ponos = "";
                $("#tblInvPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(2).find("input[type='checkbox']").is(":checked");
                    var invno = currentRow.find("td").eq(3).html();
                    var po = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        Invnos += $.trim(invno) + ',';
                        Ponos += $.trim(po) + ',';
                    }
                });
                var paidagainstCCCode = "";
                var index = $("#ddlGPCPaymentmode option:selected").index();
                if (index === 2) {
                    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
                }
                //if ($('#chkPaidtootherCC').is(":checked") === true) {
                //    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();

                //}

                var SaveData = {
                    InvoiceNos: Invnos,
                    PONumber: Ponos,
                    TransactionDate: $("#txtInvCashPayDate").val(),
                    TransactionAmount: $("#txtInvCashPayFinalAmount").val(),
                    Remarks: $("#txtInvCashPayReamarks").val(),
                    Paytype: 'Vendor Invoice',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Cash',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val(),
                    OtherCCCode: paidagainstCCCode,
                    CCCode: $("#ddlVendorPayCC option:selected").val(),
                    CashTransMode: index
                };
                debugger;
                addFailMsg = "Error Occurred While Adding New Payment";
                addSuccessMsg = "Payment Details Added Successfully.";
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOInvoicePayment',
                    data: { payData: SaveData },
                    success: function (Data) {
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                            $("#btnInvSupplierCashPaySubmit").prop("disabled", true);
                        }
                        else {
                            $("#divSppoPayInfoMsg").text(Data.saveStatus);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                             $("#btnInvSupplierCashPaySubmit").prop("disabled", true);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        $("#btnInvSupplierCashPaySubmit").prop("disabled", true);
                    }
                });
            }
        }
    }
}
function SubmitVendorSupplierAdvanceCashPayData() {
    // alert('SupplierAdvanceCash');
    isValid = true;
    var errorMsg = "";
    //var bank = $("#ddlInvCashPayBank option:selected").text();
    //var Mode = $("#ddlInvCashPayMode option:selected").text();
    //var bankindex = $("#ddlInvCashPayBank option:selected").index();
    //var Modeindex = $("#ddlInvCashPayMode option:selected").index();
    var date = $("#txtInvCashPayDate").val();
    var remarks = $("#txtInvCashPayReamarks").val();
    var amount = $("#txtInvCashPayFinalAmount").val();
    var balanceAmount = $("#txtAdvanceBalance").val();
    //if (bankindex === 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Bank</p>";
    //    isValid = false;
    //}
    //if (Modeindex === 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Mode Of Pay</p>";
    //    isValid = false;
    //}
    //var cheque = $("#txtInvCashPaymentNo").val();
    //if (cheque === "") {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter Transaction No</p>";
    //    isValid = false;
    //}
    if (date === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
        isValid = false;
    }
    if (remarks === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
        isValid = false;
    }
    if (amount === "" || amount <= 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
        isValid = false;
    }
    //if ($('#chkPaidtootherCC').is(":checked") === true) {
    //    var paidagainstCC = $("#ddlVendorPayOtherCC option:selected").index();
    //    if (paidagainstCC === 0) {
    //        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Against Cost Center</p>";
    //        isValid = false;
    //    }
    //}
    if (parseFloat(balanceAmount) < parseFloat(amount)) {
        errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Advance Amount</p>";
        isValid = false;
    }
    var maxinvdate = $("#txtadvinvdate").val();
    if (new Date(date) < new Date(maxinvdate)) {
        errorMsg += "<p style='margin-top:-5px!important;'>Payment Date must be greater than Invoice Date</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divSppoPayInfoMsg").addClass("alert-danger");
        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");

        //var payno = $("#txtInvCashPaymentNo").val();

        var pnos = $('#ddlMultiPO option:selected').toArray().map(item => item.value).join(',');
        var allpos = pnos + ',';

        var paidagainstCCCode = "";
        var index = $("#ddlGPCPaymentmode option:selected").index();
        if (index === 2) {
            paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
        }
        //if ($('#chkPaidtootherCC').is(":checked") === true) {
        //    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();

        //}

        var AdvanceData = {
            PONumber: allpos,
            TransactionDate: $("#txtInvCashPayDate").val(),
            TransactionAmount: $("#txtInvCashPayFinalAmount").val(),
            Remarks: $("#txtInvCashPayReamarks").val(),
            Paytype: 'Vendor Advance',
            BankorCash: 'Cash',
            VendorType: $("#ddlVendorType  option:selected").val(),
            VendorCode: $("#ddlPaymentVendor  option:selected").val(),
            OtherCCCode: paidagainstCCCode,
            CCCode: $("#ddlVendorPayCC option:selected").val(),
            CashTransMode: index
        };
        debugger;
        addFailMsg = "Error Occurred While Adding New Payment";
        addSuccessMsg = "Payment Details Added Successfully.";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Purchase/SaveNewSPPOAdvancePayment',
            data: { payData: AdvanceData },
            success: function (Data) {
                var typeArr = Data.saveStatus.toString().split('$');
                var result = typeArr[0];
                if (result === 'Submited') {
                    addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                    $("#divSppoPayInfoMsg").text(addSuccessMsg);
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                    $("#divSppoPayInfoMsg").addClass("alert-success");
                    $("#btnInvSupplierAdvCashPaySubmit").prop("disabled", true);
                }
                else {
                    $("#divSppoPayInfoMsg").text(Data.saveStatus);
                    $("#divSppoPayInfoMsg").addClass("alert-danger");
                    $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    $("#btnInvSupplierAdvCashPaySubmit").prop("disabled", true);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#divSppoPayInfoMsg").text(addFailMsg);
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                $("#btnInvSupplierAdvCashPaySubmit").prop("disabled", true);
            }
        });
    }
}
function SubmitVendorSupplierHoldCashPayData() {
    //alert('SupplierHoldCash');
    var tablerowcount = $("#tblHoldPayGrid tbody tr").length;
    if (tablerowcount > 0) {
        isValid = true;
        var errorMsg = "";
        var selectedcheck = 0;
        var invtotalamount = 0;
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                selectedcheck = selectedcheck + 1;
            }
        });
        if (selectedcheck === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Invoice Numbers</p>";
            isValid = false;
        }
        //var bank = $("#ddlInvCashPayBank option:selected").text();
        //var Mode = $("#ddlInvCashPayMode option:selected").text();
        //var bankindex = $("#ddlInvCashPayBank option:selected").index();
        //var Modeindex = $("#ddlInvCashPayMode option:selected").index();
        var date = $("#txtInvCashPayDate").val();
        var remarks = $("#txtInvCashPayReamarks").val();
        var amount = $("#txtInvCashPayFinalAmount").val();
        if (date === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Date</p>";
            isValid = false;
        }
        if (remarks === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Remarks</p>";
            isValid = false;
        }
        if (amount === "" || amount === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid Amount</p>";
            isValid = false;
        }
        //if ($('#chkPaidtootherCC').is(":checked") === true) {
        //    var paidagainstCC = $("#ddlVendorPayOtherCC option:selected").index();
        //    if (paidagainstCC === 0) {
        //        errorMsg += "<p style='margin-top:-5px!important;'>Select Paid Against Cost Center</p>";
        //        isValid = false;
        //    }
        //}
        $("#tblHoldPayGrid tbody tr").each(function () {
            var currentRow = $(this);
            var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
            var rowamount = currentRow.find("td").eq(10).html();
            if (checkbox === true) {
                invtotalamount = parseFloat(invtotalamount) + parseFloat(rowamount);
            }
        });
        if (parseFloat(amount) > parseFloat(invtotalamount)) {
            errorMsg += "<p style='margin-top:-5px!important;'>You are excessing the Invoice Amount</p>";
            isValid = false;
        }
        if (!isValid) {
            var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append(finalerror + errorMsg + "</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
        }
        else {
            var paydate = date;
            $("#tblHoldPayGrid tbody tr").each(function () {
                var currentRow = $(this);
                var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                var invdate = currentRow.find("td").eq(3).html();
                if (checkbox === true) {
                    if (new Date(paydate) < new Date($.trim(invdate))) {
                        isValid = false;
                    }
                }
            });
            if (!isValid) {
                var finalerror1 = "<div style='align:center'><p>Payment date must be greater than invoice Date</p>";
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").append(finalerror1 + "</div>");
                $("#divSppoPayInfoMsg").addClass("alert-danger");
                $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            }
            else {
                $("#divSppoPayInfoMsg").text("");
                $("#divSppoPayInfoMsg").addClass("hidden");
                //Insert DCA Budget in to db
                //  SaveHoldPayment();
                //  var chequeno = $("#txtInvCashPaymentNo").val();

                var selecetedinvnos = "", ponos = "";

                $("#tblHoldPayGrid tbody tr").each(function () {
                    var currentRow = $(this);
                    var checkbox = currentRow.find("td").eq(1).find("input[type='checkbox']").is(":checked");
                    var ino = currentRow.find("td").eq(2).html();
                    var pno = currentRow.find("td").eq(11).html();
                    if (checkbox === true) {
                        //  selecetedinvnos += ino + ","; 
                        selecetedinvnos += $.trim(ino) + ",";
                        ponos += $.trim(pno) + ",";
                    }
                });
                var paidagainstCCCode = "";
                var index = $("#ddlGPCPaymentmode option:selected").index();
                if (index === 2) {
                    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();
                }
                //if ($('#chkPaidtootherCC').is(":checked") === true) {
                //    paidagainstCCCode = $("#ddlVendorPayOtherCC option:selected").val();

                //}

                var saveHoldPay = {
                    InvoiceNos: selecetedinvnos,
                    PONumber: ponos,
                    TransactionDate: $("#txtInvCashPayDate").val(),
                    Remarks: $("#txtInvCashPayReamarks").val(),
                    TransactionAmount: $("#txtInvCashPayFinalAmount").val(),
                    Paytype: 'Vendor Hold',
                    Action: 'New',
                    VendorType: $("#ddlVendorType  option:selected").val(),
                    BankorCash: 'Cash',
                    VendorCode: $("#ddlPaymentVendor  option:selected").val(),
                    OtherCCCode: paidagainstCCCode,
                    CCCode: $("#ddlVendorPayCC option:selected").val(),
                    CashTransMode: index
                };
                debugger;

                addFailMsg = "Error Occurred While Adding Hold Payment";
                addSuccessMsg = "Hold Payment Added Successfully.";

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/Purchase/SaveNewSPPOHoldPayment',
                    data: { payData: saveHoldPay },
                    success: function (Data) {
                        $("#btnInvSupplierHoldCashPaySubmit").prop('disabled', true);
                        var typeArr = Data.saveStatus.toString().split('$');
                        var result = typeArr[0];
                        if (result === 'Submited') {
                            addSuccessMsg = 'Transaction Ref No. ' + typeArr[1] + ' Created Successfully';
                            $("#divSppoPayInfoMsg").text(addSuccessMsg);
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-danger");
                            $("#divSppoPayInfoMsg").addClass("alert-success");
                        }
                        else {
                            $("#divSppoPayInfoMsg").prop('disabled', true);
                            $("#divSppoPayInfoMsg").text(addFailMsg);
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $("#btnInvSupplierHoldCashPaySubmit").prop('disabled', true);
                        $("#divSppoPayInfoMsg").text(addFailMsg);
                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
                    }
                });
            }
        }
    }
}

function ApproveVendorPayment(TransactionRefNo, VendorCode, PaymentTypeName, TransactionType) {

    var appstatus = $("#Appvendorpaystatus option:selected").text();
    retnote = $("#AppVendorPayNote").val();
    msg = $("#divApprVendorPayInfoMsg");

    isValid = true;
    var errorMsg = "";
    if (appstatus === "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote === "") {
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
        addFailMsg = "Error Occurred";
        var ApproveVendorPay = {
            TransactionRefNo: TransactionRefNo,
            Action: appstatus,
            ApprovalNote: retnote,
            PaymentType: PaymentTypeName,
            TransactionType: TransactionType
        };
        debugger;
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';
        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        $.ajax({
            type: "POST",
            url: "/Purchase/ApproveVendorPayment",
            data: JSON.stringify({ apprVendor: ApproveVendorPay }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApproveVendorPayMsgModal').modal('show');
                    var msg = "<div>Vendor " + finalmsg + "</div>";
                    $("#AppVendorPayMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppVendorPayMsg").html(msg);
                    $('#ApproveVendorPayMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppVendorPayMsg").html(msg);
                $('#ApproveVendorPayMsgModal').modal('show');
            }
        });
    }
}

function VendorPayCCChange() {
    var CCIndex = $("#ddlVendorPayCC option:selected").index();
    var CC = $("#ddlVendorPayCC option:selected").val();
    var vendorddl = $("#ddlPaymentVendor");
    var vendortype = $("#ddlVendorType option:selected").val();
   // var poddl = $("#ddlPaymentPONo");
    if (CCIndex === 0) {
        $("#btnViewPayment").addClass("hidden");
        $("#divVendor").addClass("hidden");
        $("#divSPPO").addClass("hidden");
        $("#btnResetPayment").removeClass("hidden");
        $("#divPayment").addClass();
        vendorddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        //poddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#divSppoPayInfoMsg").text("");
        $("#divSppoPayInfoMsg").addClass("hidden");

        $("#ddlSinglePO").empty().append('<option selected="selected" value="0">-Please Select-</option>');
        $("#ddlMultiPO option:selected").prop("selected", false);
        $("#ddlMultiPO option").remove();
        $('#ddlMultiPO').multiselect('rebuild');
        $("#divOtherCC").addClass("hidden");
        $("#ddlVendorPayOtherCC").empty().append('<option selected="selected" value="0">-Please Select-</option>');
    }
    else {
        var index = $("#ddlGPCPaymentmode option:selected").index();       
        if (index !== 0) {
            if (index === 1) {
                $.ajax({
                    type: "POST",
                    url: "/Purchase/GetPendingVendorsForPayment",
                    data: '{VendorType:"' + vendortype + '",CCCode:"' + CC + '",Transtype:"Cash"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var pendingcount1 = Object.keys(response).length;
                        //alert(pendingcount1);
                        if (pendingcount1 > 0) {
                            $("#divSppoPayInfoMsg").text("");
                            $("#divSppoPayInfoMsg").append("<div>Vendor Invoices are in Verification pending</div>");
                            $("#divSppoPayInfoMsg").addClass("alert-danger");
                            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");

                            $("#btnViewPayment").addClass("hidden");
                            $("#divVendor").addClass("hidden");
                            $("#divSPPO").addClass("hidden");
                            $("#btnResetPayment").removeClass("hidden");
                            $("#divPayment").addClass();

                            $("#ddlSinglePO").empty().append('<option selected="selected" value="0">-Please Select-</option>');
                            $("#ddlMultiPO option:selected").prop("selected", false);
                            $("#ddlMultiPO option").remove();
                            $('#ddlMultiPO').multiselect('rebuild');
                        }
                        else {
                            $.ajax({
                                type: "POST",
                                url: "/Purchase/GetSPPOPaymentVendorbyCC",
                                data: '{VendorType:"' + vendortype + '",CCCode:"' + CC + '"}',
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function (response) {
                                    var count1 = Object.keys(response).length;
                                    if (count1 > 0) {
                                        vendorddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                                        $.each(response, function () {
                                            vendorddl.append($("<option></option>").val(this['VendorCode']).html(this['VendorName']));
                                        });
                                        $("#divVendor").removeClass("hidden");
                                        $("#divSppoPayInfoMsg").text("");
                                        $("#divSppoPayInfoMsg").addClass("hidden");
                                    }
                                    else {
                                        $("#divSppoPayInfoMsg").text("");
                                        $("#divSppoPayInfoMsg").append("<div>Vendor Does Not Exist</div>");
                                        $("#divSppoPayInfoMsg").addClass("alert-danger");
                                        $("#divSppoPayInfoMsg").removeClass("hidden alert-success");

                                        $("#btnViewPayment").addClass("hidden");
                                        $("#divVendor").addClass("hidden");
                                        $("#divSPPO").addClass("hidden");
                                        $("#btnResetPayment").removeClass("hidden");
                                        $("#divPayment").addClass();

                                        $("#ddlSinglePO").empty().append('<option selected="selected" value="0">-Please Select-</option>');
                                        $("#ddlMultiPO option:selected").prop("selected", false);
                                        $("#ddlMultiPO option").remove();
                                        $('#ddlMultiPO').multiselect('rebuild');

                                    }
                                },
                                failure: function (response) {

                                },
                                error: function (response) {
                                }
                            });
                        }
                    },
                    failure: function (response) {

                    },
                    error: function (response) {
                    }
                });
            }
            else {
                var otehrCCddl = $("#ddlVendorPayOtherCC");
                $.ajax({
                    type: "POST",
                    url: "/Accounts/GetAllCashCC",
                    data: '{cc:"' + CC + '" ,Type:"' + index + '" }',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        otehrCCddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                        $.each(response, function () {
                            otehrCCddl.append($("<option></option>").val(this['CC_Id']).html(this['CC_Code']));
                        });
                        $("#divCC").removeClass("hidden");
                        $("#divOtherCC").removeClass("hidden");
                    },
                    failure: function (response) {


                    },
                    error: function (response) {


                    }

                });


            }
           
        }
        else {
            $("#divSppoPayInfoMsg").text("");
            $("#divSppoPayInfoMsg").append("<div>Select Transaction Mode</div>");
            $("#divSppoPayInfoMsg").addClass("alert-danger");
            $("#divSppoPayInfoMsg").removeClass("hidden alert-success");
            $("#divCC").addClass("hidden");
            $("#divOtherCC").addClass("hidden");
        }

    }
}
//SPPO Payment Script end
//Supplier PO Script start

function IndentNoChange() {

    var newindentindext = $("#ddlIndentNo option:selected").index();
    var newindentno = $("#ddlIndentNo option:selected").text();
    $('#ApproveCCMsgModal').modal('show');

    if (newindentindext !== 0) {

        $.ajax({
            type: "POST",
            url: "/Purchase/CheckIfPartIndentExistForIndentNo",
            data: '{IndentNo:"' + newindentno + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
               // alert(response.POExist);
                var msg = "";
                if (response.POExist === true) {//second time po and qty exist ---part indent PO
                    msg = "Some Part Indents are already waiting for raising PO against this CC, Do you want to raise a PO against Part Indent..?";
                    $("#confirmmsg").html(msg);
                    //show  remaind me and partindent "Yes"
                    $("#btnRemaindMe").removeClass("hidden");
                    $("#btnGoforPartIndent").removeClass("hidden");
                    $("#btnFirsttTimePO").addClass("hidden");
                    $("#btnCancelorResetPO").addClass("hidden");
                }
                else if (response.POExist === false) {//first time po and qty exist---new indent PO
                    msg = "Do You Really Want to Raise PO Against This New Indent No:-" + newindentno;
                    $("#confirmmsg").html(msg);
                    //show  new indent "Yes" and cancel "No"
                    $("#btnRemaindMe").addClass("hidden");
                    $("#btnGoforPartIndent").addClass("hidden");
                    $("#btnFirsttTimePO").removeClass("hidden");
                    $("#btnCancelorResetPO").removeClass("hidden");
                }
                $('#ModalNewIndentconfirm').modal('show');


            },
            failure: function (response) {

            },
            error: function (response) {
            }
        });
    }
    else {
        $("#divSppPoInfoMsg").text("");
        $("#divSppPoInfoMsg").append("<div>Select New Indent</div>");
        $("#divSppPoInfoMsg").addClass("alert-danger");
        $("#divSppPoInfoMsg").removeClass("hidden alert-success");

    }
}
function PartIndentNoChange() {      
    //Show pop up to create partindent or close the indent completely
    var partindentno = $("#ddlPartIndentNo option:selected").text();
  //  msg = "Do You Really Want to Raise PO Against Part Indent No:-" + partindentno;
    $("#lblNewIndentNo").html(partindentno);
    $('#ModalPartIndentconfirm').modal('show');
}
//qty or po already exist against creation po --remainde me later
function ShowNewPOGrid() {
    //alert("again po");
    $("#txtPOType").val("NewIndentPO");   
    var newindentno = $("#ddlIndentNo option:selected").text();
    $.ajax({
        type: "POST",
        url: "/Purchase/GetSupplerPOGridData",
        data: '{IndentNo:"' + newindentno + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {
            $('#divPOGrid').html(data);
            $("#divPO").removeClass("hidden");
            $('#ModalNewIndentconfirm').modal('toggle');
            $("#ddlIndentNo").prop("disabled", true);
            $("#ddlPartIndentNo").prop("disabled", true);
        }
    });
}

//Part indent and qty exist 
function ShowPartIndent() {
    //alert("partindent po second time po");
    $("#txtPOType").val("PartIndentPO");
    //enable partindent ddl and close popup
    $("#ddlPartIndentNo").prop("disabled", false);
    $('#ModalNewIndentconfirm').modal('toggle');
    $("#ddlIndentNo").prop("disabled", true);
}
//No Qty new po or complete new po
function ShowCompleteNewIndentPO() {
    //alert("first time po");
    $("#txtPOType").val("NewIndentPO");
    var newindentno = $("#ddlIndentNo option:selected").text();

    $.ajax({
        type: "POST",
        url: "/Purchase/GetSupplerPOGridData",
        data: '{IndentNo:"' + newindentno + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {
            $('#divPOGrid').html(data);
            $("#divPO").removeClass("hidden");
            $('#ModalNewIndentconfirm').modal('toggle');
            $("#ddlIndentNo").prop("disabled", true);
            $("#ddlPartIndentNo").prop("disabled", true);
        }
    });
    //$.ajax({
    //    type: "POST",
    //    url: "/Purchase/CheckIfPartIndentExistForIndentNo",
    //    data: '{IndentNo:"' + newindentno + '"}',
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        var count1 = Object.keys(response).length;
    //        alert(response.POExist);
    //    },
    //    failure: function (response) {

    //    },
    //    error: function (response) {
    //    }
    //});
}
//cancel creation po
function CancelNewIndent() {
   // alert("Cancel");
    location.reload();
}
function BindNewRowtoNewSupplierPOTACGrid() {
    isValid = true;
    var errorMsg = "";
    var checkcount = 0, tcacount = 0;
    $("#POTACTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();

        if (check === false) { checkcount = checkcount + 1; }
        if (tca === "") { tcacount = tcacount + 1; }

    });

    if (tcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
        isValid = false;
    }

    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSppPoInfoMsg").text("");
        $("#divSppPoInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divSppPoInfoMsg").addClass("alert-danger");
        $("#divSppPoInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divSppPoInfoMsg").text("");
        $("#divSppPoInfoMsg").addClass("hidden");

        var count = $("#POTACTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
        cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppoTAC">';
        cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
        cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
        cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"  onkeypress="return RestrictPipeSymbol(this,event);"></textarea></td>';
        cols += '<td style="text-align:center"><input type="button" class="ibtsupplierpoTACDel btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.sptactable").append(newRow);
    }
}
function ReassignRowNosuplierPOTAC() {
    var rowno = 1;
    $("#POTACTable tbody tr").each(function () {
        var currentRow = $(this);
        currentRow.find("td").eq(1).html('<label style="margin-top:10%">' + rowno + '<label>');
        rowno++;
    });
}
function BindEmptyRowSuplierpoTACGrid() {
    $("#divSppPoInfoMsg").text("");
    $("#divSppPoInfoMsg").addClass("hidden");

    var count = $("#POTACTable tbody tr").length;
    var rowno = count + 1;
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td style="text-align:center"><ul class="list-inline"><li class="eagle-checkbox">';
    cols += '<label class="eagle-check custom-checkbox"><input type="checkbox" class="eagle-check-input" id="chkNSppoTAC">';
    cols += '<span class="eagle-check-indicator"></span><span class="eagle-check-description"></span></label></li></ul></td>';
    cols += '<td style="text-align:center" ><label style="margin-top:10%">' + rowno + '</label></td>';
    cols += '<td style="text-align:center" ><textarea class="form-control txttac" rows="1" cols="50"  onkeypress="return RestrictPipeSymbol(this,event);"></textarea></td>';
    cols += '<td style="text-align:center"><input type="button" class="ibtsupplierpoTACDel btn btn-md btn-danger" value="Delete"></td>';
    newRow.append(cols);
    $("table.order-list.sptactable").append(newRow);
}

function CountSupplierPOAmount() {

    var moreqtycount = 0;
    var finalamount = 0;
    $("#tblPOGrid tbody tr").each(function () {
        let rowAmount = 0;
        let rowstandardamount = 0;
        let currentRow = $(this);
        let checkbox = currentRow.find("td").eq(3).find("input[type='checkbox']").is(":checked");
        let poqty = currentRow.find("td").eq(13).find("input[type='text']").val();
        let purchaseprice = currentRow.find("td").eq(14).find("input[type='text']").val();
        let standredprice =$.trim(currentRow.find("td").eq(12).html());
        let initialqty = currentRow.find("td").eq(10).html();
        if (poqty !== "" && purchaseprice !== "" && checkbox == true) {
            rowAmount = parseFloat(poqty) * parseFloat(purchaseprice);
            currentRow.find("td").eq(15).find("input[type='text']").val(parseFloat(rowAmount).toFixed(2));
            finalamount = parseFloat(finalamount) + parseFloat(rowAmount);
            rowstandardamount = parseFloat(poqty) * parseFloat(standredprice);
            currentRow.find("td").eq(16).html(parseFloat(rowstandardamount).toFixed(2));
            
            if (parseFloat(poqty) > parseFloat($.trim(initialqty))) {
                moreqtycount = moreqtycount + 1;
            }
        }
        else { currentRow.find("td").eq(15).find("input[type='text']").val(""); }


    });
    $("#tblPOGrid tfoot tr").each(function () {
        var footerRow = $(this);
        if (!isNaN(finalamount)) {
            footerRow.find("td").eq(14).html("<b>" + parseFloat(finalamount).toFixed(2) + "</b>");
        }
        else {
            footerRow.find("td").eq(14).html("");
        }
    });
    if (moreqtycount > 0) {
        $("#divSppPoInfoMsg").text("");
        $("#divSppPoInfoMsg").append("<div>PO Quantity is greater than Initial Quantity</div>");
        $("#divSppPoInfoMsg").addClass("alert-danger");
        $("#divSppPoInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divSppPoInfoMsg").text("");
        $("#divSppPoInfoMsg").addClass("hidden");
    }
}
function SubmitSupplierPOData() {
    isValid = true;
    var errorMsg = "";
    var vendorcodeindex = $("#ddlpoVendor option:selected").index();
   // var pono = $("#txtPONo").val();
    var podate = $("#txtPODate").val();
    var poexpiredate = $("#txtPOExpireDate").val();
    var Refno = $("#txtRefNo").val();
    var Refdate = $("#txtRefDate").val();
    var vendorcode = $("#ddlpoVendor option:selected").val();
    if (vendorcodeindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Vendor Name</p>";
        isValid = false;
    }
    //if (pono === "") {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Enter PO Number</p>";
    //    isValid = false;
    //}
    if (podate === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select PO Date</p>";
        isValid = false;
    }
    if (poexpiredate === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select PO  Expire Date</p>";
        isValid = false;
    }
    if (Refno === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Ref Number</p>";
        isValid = false;
    }
    if (Refdate === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Ref Date</p>";
        isValid = false;
    }

    var quotedcount = 0, poqtycount = 0, purchasepricecount = 0, notcheckcount = 0, moreqtycount = 0, cantrisecount = 0;
    $("#tblPOGrid tbody tr").each(function () {

        let currentRow = $(this);
        let checkbox = currentRow.find("td").eq(3).find("input[type='checkbox']").is(":checked");
        let poqty = currentRow.find("td").eq(13).find("input[type='text']").val();
        let purchaseprice = currentRow.find("td").eq(14).find("input[type='text']").val();
        let quotedprice = currentRow.find("td").eq(11).find("input[type='text']").val();
        let initialqty = currentRow.find("td").eq(10).html();
        if (checkbox === false) {
            notcheckcount += 1;
        }
        else {
            if (poqty === "" || poqty === 0) {
                poqtycount = poqtycount + 1;
            }
            if (purchaseprice === "" || purchaseprice === 0) {
                purchasepricecount = purchasepricecount + 1;
            }
            if (quotedprice === "" || quotedprice === 0) {
                quotedcount = quotedcount + 1;
            }
            if (poqty !== "" && poqty !== 0) {
                if (parseFloat(poqty) > parseFloat($.trim(initialqty))) {
                    moreqtycount = moreqtycount + 1;
                }
                if (parseFloat($.trim(initialqty)) <= 0 && parseFloat($.trim(initialqty) !== "")) {
                    cantrisecount = cantrisecount + 1;
                }
            }

        }

    });
    var count = $("#tblPOGrid tbody tr").length;
    if (notcheckcount === count) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Atleast One Item</p>";
        isValid = false;
    }
    else {
        if (quotedcount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter Quoted Price</p>";
            isValid = false;
        }
        if (purchasepricecount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter PurchasePrice</p>";
            isValid = false;
        }
        if (poqtycount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Enter PO Quantity</p>";
            isValid = false;
        }
        if (moreqtycount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>PO Quantity is greater than Initial Quantity</p>";
            isValid = false;
        }
        if (cantrisecount > 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>You Cannot raise PO</p>";
            isValid = false;
        }
    }
    var checkcount = 0, tcacount = 0;
    $("#POTACTable tbody tr").each(function () {
        var currentRow = $(this);
        var check = currentRow.find("td").eq(0).find('input[type="checkbox"]').is(':checked');
        var tca = currentRow.find("td").eq(2).find("textarea").val();

        if (check === false) { checkcount = checkcount + 1; }
        if (tca === "") { tcacount = tcacount + 1; }

    });

    if (tcacount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Terms and Conditions</p>";
        isValid = false;
    }

    if (checkcount > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Check Terms & Conditions </p>";
        isValid = false;
    }

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divSppPoInfoMsg").text("");
        $("#divSppPoInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divSppPoInfoMsg").addClass("alert-danger");
        $("#divSppPoInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divSppPoInfoMsg").text("");
        $("#divSppPoInfoMsg").addClass("hidden");
        var StandardTotal = 0, NewPOTotal = 0;
        var ids = "", Qtys = "", codes = "", purchaseprices = "", stndrdprices = "", newpricerowTotal = "", standardpricerowtotal = "", quotedprices = "";
        $("#tblPOGrid tbody tr").each(function () {
           
            let currentRow = $(this);
            //let currentRow = $(this);
            let checkbox = currentRow.find("td").eq(3).find("input[type='checkbox']").is(":checked");
            let id = $.trim(currentRow.find("td").eq(1).html());
            let code = $.trim(currentRow.find("td").eq(4).html());
            let stndprice = $.trim(currentRow.find("td").eq(12).html());
            let poqty = currentRow.find("td").eq(13).find("input[type='text']").val();
            let purchaseprice = currentRow.find("td").eq(14).find("input[type='text']").val();
            let quotedprice = currentRow.find("td").eq(11).find("input[type='text']").val();
            let initialqty = currentRow.find("td").eq(10).html();
            let newporowprice = currentRow.find("td").eq(15).find("input[type='text']").val();
            let standardrowamount = currentRow.find("td").eq(16).html();
            if (checkbox === true) {
                NewPOTotal = parseFloat(NewPOTotal) + parseFloat($.trim(newporowprice));
                StandardTotal = parseFloat(StandardTotal) + parseFloat($.trim(standardrowamount));
                ids += id + ',';
                //Qtys += poqty + ',';
                //codes += code + ',';
                //purchaseprices += purchaseprice + ',';
                //stndrdprices += stndprice + ',';
                //newpricerowTotal += newporowprice + ',';
                //standardpricerowtotal += standardrowamount + ',';
                //quotedprices += quotedprice + ',';
            }

        });        
        var indentno = ""; var potype = $("#txtPOType").val();
        if (potype === "NewIndentPO" || potype === "SecondTimePO") {
            indentno = $("#ddlIndentNo option:selected").text();
        }
        else {
            indentno = $("#ddlPartIndentNo  option:selected").text();
        }        
        if (parseFloat(NewPOTotal) > parseFloat(StandardTotal)) {
            //check budget

            var addFailMsg = "Error Occured While Submiting Details";
            var addedpo = parseFloat(NewPOTotal) - parseFloat(StandardTotal);
            var podata = {
                Indentlistids: ids,
                ExtraPOAmt: addedpo,
                IndentNo: indentno
            };
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/Purchase/CheckBudgetForSupplierPO',
                data: { supplierPO: podata },
                success: function (response) {
                    if (response.saveStatus === "Sufficient") {
                        result = response.saveStatus;
                        if (result === "Sufficient") {
                            //alert("Submiting");
                            $("#divNewSppoAmendInfoMsg").text("");
                            $("#divNewSppoAmendInfoMsg").addClass("hidden");

                            SaveSupplierPO();
                        }
                        else {
                            msg = result;
                            $("#divNewSppoAmendInfoMsg").text("");
                            $("#divNewSppoAmendInfoMsg").append("<div>" + msg + "</div>");
                            $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
                            $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");
                            return false;
                        }
                    }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                        $("#divNewSppoAmendInfoMsg").text(addFailMsg);
                        $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
                        $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");
                    }
                });
        }
        else {
            //save data
            SaveSupplierPO();
        }
    }
}
function SaveSupplierPO() {
    var StandardTotal = 0, NewPOTotal = 0;
    var ids = "", Qtys = "", codes = "", purchaseprices = "", stndrdprices = "", newpricerowTotal = "", standardpricerowtotal = "", quotedprices = "";
    $("#tblPOGrid tbody tr").each(function () {      
        let currentRow = $(this);
        let checkbox = currentRow.find("td").eq(3).find("input[type='checkbox']").is(":checked");
        let id = $.trim(currentRow.find("td").eq(1).html());
        let code = $.trim(currentRow.find("td").eq(4).html());
        let stndprice = $.trim(currentRow.find("td").eq(12).html());
        let poqty = currentRow.find("td").eq(13).find("input[type='text']").val();
        let purchaseprice = currentRow.find("td").eq(14).find("input[type='text']").val();
        let quotedprice = currentRow.find("td").eq(11).find("input[type='text']").val();
        let initialqty = currentRow.find("td").eq(10).html();
        let newporowprice = currentRow.find("td").eq(15).find("input[type='text']").val();
        let standardrowamount = currentRow.find("td").eq(16).html();
        if (checkbox === true) {
            NewPOTotal = parseFloat(NewPOTotal) + parseFloat($.trim(newporowprice));
            StandardTotal = parseFloat(StandardTotal) + parseFloat($.trim(standardrowamount));
            ids += id + ',';
            Qtys += poqty + ',';
            codes += code + ',';
            purchaseprices += purchaseprice + ',';
            stndrdprices += stndprice + ',';
            newpricerowTotal += newporowprice + ',';
            standardpricerowtotal += standardrowamount + ',';
            quotedprices += quotedprice + ',';
        }

    });
    var potype = $("#txtPOType").val();
    var singlemrr = 0;
    if ($('#chkSingle').is(":checked")) {
        singlemrr = 1;
    }
    else { singlemrr = 0; }
    var indentno = "";
    if (potype === "NewIndentPO" || potype === "SecondTimePO") {
        indentno = $("#ddlIndentNo option:selected").text();
    }
    else {
        indentno = $("#ddlPartIndentNo  option:selected").text();
    }
    var RemarksData = "";
    $("#POTACTable tbody tr").each(function () {
        var currentRow = $(this);
        var tca = currentRow.find("td").eq(2).find("textarea").val();
        RemarksData += tca + "|";
    });
    //var vendorcodeindex = $("#ddlpoVendor option:selected").index();
    //var pono = $("#txtPONo").val();
    //var podate = $("#txtPODate").val();
    //var poexpiredate = $("#txtPOExpireDate").val();
    //var Refno = $("#txtRefNo").val();
    //var Refdate = $("#txtRefDate").val();
    //var vendorcode = $("#ddlpoVendor option:selected").val();

    var addPOData = {
        PODate: $("#txtPODate").val(),
        RefNo: $("#txtRefNo").val(),
        RefDate: $("#txtRefDate").val(),
        IndentNo: indentno,
        VendorCode: $("#ddlpoVendor option:selected").val(),
        Issinglemrr: singlemrr,
        POExpireDate: $("#txtPOExpireDate").val(),
        Remarks: RemarksData,
        NewpricePOTotal: NewPOTotal,
        StandardpricePOtotal: StandardTotal,
        Indentlistids: ids,
        POQtys: Qtys,
        Itemcodes: codes,
        Purchaseprices: purchaseprices,
        Standardprices: stndrdprices,
        Indentliststandardamount: standardpricerowtotal,
        Indentlistidnewamount: newpricerowTotal,
        Quotedprices: quotedprices,
        SiteAddress1: $("#txtSiteAddress1").val(),
        SiteAddress2: $("#txtSiteAddress2").val(),
        Contact: $("#txtSiteContact").val(),
        SiteMobileNo: $("#txtSiteMobileNo").val(),
        InvAddress1: $("#txtInvAdd1").val(),
        InvAddress2: $("#txtInvAdd2").val(),
        GstNo: $("#txtInvGstNo").val(),
        MobileNo: $("#txtInvMobileNo").val()
    };
    debugger;
    addFailMsg = "Error Occurred While Adding PO";
    addSuccessMsg = "PO  Details Added Successfully.";

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/SaveSupplierPO',
        data: { poData: addPOData },
        success: function (Data) {
            debugger;
            var typeArr = Data.saveStatus.toString().split('$');
            var result = typeArr[0];
            if (result === 'Submited') {
                $("#divSppPoInfoMsg").text("PO Number " + typeArr[1]+" Created Successfully");
                $("#divSppPoInfoMsg").removeClass("hidden alert-danger");
                $("#divSppPoInfoMsg").addClass("alert-success");
                //$("#btnSubmitSuplierPO").prop("disabled", true);
            }
            else {
                $("#divSppPoInfoMsg").text(Data.saveStatus);
                $("#divSppPoInfoMsg").addClass("alert-danger");
                $("#divSppPoInfoMsg").removeClass("hidden alert-success");
                //$("#btnSubmitSuplierPO").prop("disabled", true);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divSppPoInfoMsg").text(addFailMsg);
            $("#divSppPoInfoMsg").addClass("alert-danger");
            $("#divSppPoInfoMsg").removeClass("hidden alert-success");
             //$("#btnSubmitSuplierPO").prop("disabled", true);
        }
    });


}

function CheckPOBudget() {
    var result = "";
    var desctablerowcount = $("#AmenditemDescTable tbody tr").length;
    var NewDescriptions = "";
    if (desctablerowcount > 0) {
        $("#AmenditemDescTable tbody tr").each(function () {
            var currentRow = $(this);
            var desc = currentRow.find("td").eq(2).find("textarea").val();
            NewDescriptions += desc + ",";
        });
    }
    var itemdata = {
        VendorCode: $("#ddlNSpAmendVendor option:selected").val(),
        CCCode: $("#ddlNSpAmendCC option:selected").val(),
        SPPONo: $("#ddlNSpAmendPONo option:selected").val(),
        SubstractAmount: $("#txtNSpAemndPOMinusValue").val(),
        NewItemDescriptions: NewDescriptions
    };
    var addFailMsg = "Error Occured While Submiting Details";
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Purchase/CheckBudgetForSupplierPO',
        data: { sppoData: itemdata },
        success: function (response) {
            if (response.saveStatus === "Exists" || response.saveStatus === "NotExists" || response.saveStatus === "Substract PO Value is Invalid") {
                result = response.saveStatus;
                if (result === "NotExists") {
                    //alert("Submiting");
                    $("#divNewSppoAmendInfoMsg").text("");
                    $("#divNewSppoAmendInfoMsg").addClass("hidden");

                    SaveSPPOAmend();
                }
                else {
                    var msg = "";
                    if (result === "Exists") {
                        msg = "Some of New Item Descriptions Already Exists";
                    }
                    else {
                        msg = result;
                    }
                    $("#divNewSppoAmendInfoMsg").text("");
                    $("#divNewSppoAmendInfoMsg").append("<div>" + msg + "</div>");
                    $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
                    $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");
                    return false;
                }
            }
            else {
                $("#divNewSppoAmendInfoMsg").text(addFailMsg);
                $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
                $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            $("#divNewSppoAmendInfoMsg").text(addFailMsg);
            $("#divNewSppoAmendInfoMsg").addClass("alert-danger");
            $("#divNewSppoAmendInfoMsg").removeClass("hidden alert-success");
        }
    });
    //alert(result);
    //return result;
}
function ResetSupplierPO() {
    location.reload();

}


//Part Indent
function ShowPartIndentGrid() {
    var partindentno = $("#ddlPartIndentNo option:selected").text();
    $.ajax({
        type: "POST",
        url: "/Purchase/GetSupplerPOGridData",
        data: '{IndentNo:"' + partindentno + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        success: function (data) {
            $('#divPOGrid').html(data);
            $("#divPO").removeClass("hidden");
            $('#ModalPartIndentconfirm').modal('toggle');
            $("#ddlIndentNo").prop("disabled", true);
            $("#ddlPartIndentNo").prop("disabled", true);
        }
    });
}
function ShowIndentCancelPopup() {
    $("#txtPOType").val("CancelIndent");
    //ask for partindent close and show cancel popup
    var partindentno = $("#ddlPartIndentNo").text();
    msg = "Do You Really Want to Close Indent No:-" + partindentno;
    $("#confirmmsg").html(msg);
    $('#ModalPartIndentconfirm').modal('toggle');
    $('#ModalCancelIndent').modal('show');       
}
//Cancel Indent

function CloseIndent() {
    var partindentno = $("#ddlPartIndentNo").text();
    var addSuccessMsg = "Indent Successfully Clsoed";
    $.ajax({
        type: "POST",
        url: "/Purchase/CancelIndent",
        data: '{IndentNo:"' + partindentno + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var count1 = Object.keys(response).length;
            //alert(response.CancelResult);
            var msg = "";
            if (response.CancelResult === "Closed") {
                $("#divSppCancelPoInfoMsg").text(addSuccessMsg);
                $("#divSppCancelPoInfoMsg").removeClass("hidden alert-danger");
                $("#divSppCancelPoInfoMsg").addClass("alert-success");
                $("#btnCloseIndent").addClass("hidden");
                $("#btnCancelCloseIndent").addClass("hidden");
               
            }
            else  {//first time po and qty exist---new indent PO
                $("#divSppCancelPoInfoMsg").text(response.CancelResult );
                $("#divSppCancelPoInfoMsg").removeClass("hidden alert-danger");
                $("#divSppCancelPoInfoMsg").addClass("alert-success");
                $("#btnCloseIndent").addClass("hidden");
                $("#btnCancelCloseIndent").addClass("hidden");
            }
            //$('#ModalNewIndentconfirm').modal('show');
        },
        failure: function (response) {

        },
        error: function (response) {
        }
    });
}
function CancelCloseIndent() {
    location.reload();
}
function ApproveSupplierPO(Pono,IndNo) {
    var appstatus = $("#Appsuppostatus option:selected").text();
    retnote = $("#AppPONote").val();
    msg = $("#divApprPOInfoMsg");
    isValid = true;
    var errorMsg = "";
    if (appstatus === "Select") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Status</p>";
        isValid = false;
    }
    if (retnote === "") {
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
        var ApprovePO = {
            PONo: Pono,
            IndentNo: IndNo,
            Action: appstatus,
            ApprovalNote: retnote  
        };
        addFailMsg = "Error Occurred";
        var finalmsg;
        if (appstatus === 'Verify') {
            finalmsg = 'Verified Successfully';        }
        else if (appstatus === 'Approve') { finalmsg = 'Approved  Successfully'; }
        else if (appstatus === 'Return') { finalmsg = 'Returned for Update '; }
        else if (appstatus === 'Reject') { finalmsg = 'Rejected  Successfully'; }
        debugger;
        $.ajax({
            type: "POST",
            url: "/Purchase/ApproveSupplierPO",
            data: JSON.stringify({ poData: ApprovePO }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Submited") {
                    $('#ApprovePOMsgModal').modal('show');
                    var msg = "<div>PO " + finalmsg + "</div>";
                    $("#AppPOMsg").html(msg);
                }
                else {
                    var msg1 = "<div>" + response.saveStatus + "</div>";
                    $("#AppPOMsg").html(msg);
                    $('#ApprovePOMsgModal').modal('show');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var msg = "<div>" + addFailMsg + " </div>";
                $("#AppPOMsg").html(msg);
                $('#ApprovePOMsgModal').modal('show');
            }
        });
    }
}
function ResetSupplierReport() {
    location.reload();
}
function ShowSupplierReport() {
    isValid = true;
    var errorMsg = "";
    var CCCodeindex = $("#ddlSuppoCC option:selected").index();
    var CCCode = $("#ddlSuppoCC  option:selected").val();
    var from = $("#txtPOFromDate").val();
    var To = $("#txtPOToDate").val();
    if (CCCodeindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Cost Center</p>";
        isValid = false;
    }
    if (from === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select From Date</p>";
        isValid = false;
    }
    if (from === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Select To Date</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divPORptInfoMsg").text("");
        $("#divPORptInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divPORptInfoMsg").addClass("alert-danger");
        $("#divPORptInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divPORptInfoMsg").text("");
        $("#divPORptInfoMsg").addClass("hidden");

        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: '/Reports/SupplierPOReportGrid',
            data: { CCCode: CCCode, FromDate: from, ToDate:To},
          
            success: function (Data) {
                var count1 = Object.keys(Data).length;
                var msg = "";
                if (count1 > 0) {
                    $("#divPOGrid").html(Data);
                    $("#divPOGrid").removeClass('hidden');

                }
                else {
                    $("#divPOGrid").html('No Data Found');
                    $("#divPOGrid").removeClass('hidden');
                }
             
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              
                alert("error");
            }
        });
    }
}

//Supplier PO Script end