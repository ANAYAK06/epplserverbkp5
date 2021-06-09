
$(document).ready(function () {
    //Groups
    $("table.order-list.addmastergbtable").on("click", ".ibtnMasterGroupDel", function (event) {
        var row = $(this).closest("tr");
        row.remove();
        $("#divNewMasterGroupInfoMsg").text("");
        $("#divNewMasterGroupInfoMsg").addClass("hidden");

        //var sno = row.find("td").eq(0).html();
        //    var calc = row.find("td").eq(2).find("select");
        //    calc.empty().append('<option selected="selected" value="0">Select</option>');
        //    calc.append('<option  value="Y">Yes</option>');
        //    calc.append('<option  value="N">No</option>'); 
        //    row.find("td").eq(1).find("input[type='text']").val("");   

    });

    //$('#AddMasterGroupTable').on('change', '.pcapplicable2', function () {
    //    var row = $(this).closest("tr");
    //});
    $("#AddNewGroupModal").on("hidden.bs.modal", function () {

        $("#divMasterGroupGrid").load('/Ledger/ViewGroupsGrid');
    });
    $("#deleteMasterGroup").on("hidden.bs.modal", function () {

        $("#divMasterGroupGrid").load('/Ledger/ViewGroupsGrid');
    });
    $("#EditMasterGroupModal").on("hidden.bs.modal", function () {

        $("#divMasterGroupGrid").load('/Ledger/ViewGroupsGrid');
    });

    $("table.order-list.addsubgrptable").on("click", ".ibtnAddSubGroupDel", function (event) {
        $(this).closest("tr").remove();
        $("#divNewSubGroupInfoMsg").text("");
        $("#divNewSubGroupInfoMsg").addClass("hidden");

    });

    $("#deleteSubGroup").on("hidden.bs.modal", function () {

        $("#divSubGroupGrid").load('/Ledger/ViewSubGroupsGrid');
    });
    $("#EditSubGroupModal").on("hidden.bs.modal", function () {

        $("#divSubGroupGrid").load('/Ledger/ViewSubGroupsGrid');
    });
    $("#AddNewSubGroupModal").on("hidden.bs.modal", function () {

        $("#divSubGroupGrid").load('/Ledger/ViewSubGroupsGrid');
    });

    $("table.order-list.addchildgrptable").on("click", ".ibtnAddChildGroupDel", function (event) {
        $(this).closest("tr").remove();
        $("#divNewChildGroupInfoMsg").text("");
        $("#divNewChildGroupInfoMsg").addClass("hidden");

    });
    $("#deleteChildGroup").on("hidden.bs.modal", function () {

        $("#divChildGroupGrid").load('/Ledger/ViewChildGroupsGrid');
    });
    $("#EditChildGroupModal").on("hidden.bs.modal", function () {

        $("#divChildGroupGrid").load('/Ledger/ViewChildGroupsGrid');
    });
    $("#AddNewChildGroupModal").on("hidden.bs.modal", function () {

        $("#divChildGroupGrid").load('/Ledger/ViewChildGroupsGrid');
    });
    //ledger creation
    $("#chkCredit").prop("checked", true);
    $("#chkDebit").prop("checked", false);
    $("#txtNLedgBalanceDate").val(""); 
    $("#txtNLedgBalanceDate").datepicker({
        dateFormat: 'dd-M-yy',
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        maxDate: 'dateToday',
        buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",
        onClose: function (selectedDate) {
           
        }
    }).datepicker("setDate", new Date());
    $("#txtUpledgBalDate").datepicker({
        dateFormat: 'dd-M-yy',
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        maxDate: 'dateToday',
        buttonText: "<i class ='glyphicon glyphicon-calendar'></i>",
        onClose: function (selectedDate) {

        }
    }).datepicker("setDate", new Date());
    $("#AddNewLedgerModal").on("hidden.bs.modal", function () {

        $("#divLedgerDetailsGrid").load('/Ledger/ViewLedgerDetailsGrid');
    });
    $("#EditLedgerModal").on("hidden.bs.modal", function () {

        $("#divLedgerDetailsGrid").load('/Ledger/ViewLedgerDetailsGrid');
    });
    $("#deleteLedger").on("hidden.bs.modal", function () {

        $("#divLedgerDetailsGrid").load('/Ledger/ViewLedgerDetailsGrid');
    });

});
    function ViewAddNewLedgerModel() {
        $("#AddNewLedgerModal").modal('show');
        clearNewLedgerCreation();
}
function clearNewLedgerCreation() {
    $("#chkCredit").prop("checked", true);
    $("#chkDebit").prop("checked", false);
    $("#btnNewLedger").prop("disabled", false);
    $("#ddlNLedgType").prop('selectedIndex', 0); 
    $("#ddlNLedgGroupId").prop('selectedIndex', 0); 
    $("#ddlNLedgSGroupId").empty().append('<option selected="selected" value="0">-Please Select-</option>');
    $("#ddlNLedgAccHead").empty().append('<option selected="selected" value="0">-Please Select-</option>');
    $("#txtNLedgName").val("");
    $("#txtNLedgBalance").val("0");
    $("#txtNLedgBalanceDate").val(""); 
    $("#txtCreatedby").val("");
    $("#divNewLedgerInfoMsg").text("");
    $("#divNewLedgerInfoMsg").addClass("hidden");
    $("#txtNLsgrpexist").val("0");
}
function NewLedgerGroupChange() {
    var ledgertype = $("#ddlNLedgType option:selected").text();
    var accheadindex = $("#ddlNLedgAccHead option:selected").index();
    var accheadVal = $("#ddlNLedgAccHead option:selected").val();
    var accheadName = $("#ddlNLedgAccHead option:selected").text();
    var typeArr = accheadVal.split('-');
    var acf = typeArr[1];
    var accheadid = typeArr[0];
    var grpindex = $("#ddlNLedgGroupId option:selected").index();
    var group = $("#ddlNLedgGroupId option:selected").val();
    var sgrpddl = $("#ddlNLedgSGroupId");
    if (grpindex === 0) {
        sgrpddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
       // $("#divgroups").addClass("hidden");
        $("#divsubgroup").addClass("hidden");
    } else {
        //alert(group);
        $.ajax({
            type: "POST",
            url: "/Ledger/GetSubGroupsForLedger",
            data: '{Ledgertype:"' + ledgertype + '",AccHead:"' + accheadid + '",AccHeadRef:"' + acf + '",Groupid:"' + group + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    sgrpddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        sgrpddl.append($("<option></option>").val(this['Id']).html(this['Name']));
                    });
                    $("#divsubgroup").removeClass("hidden");
                    $("#divNewLedgerInfoMsg").text("");
                    $("#divNewLedgerInfoMsg").addClass("hidden");
                    $("#txtNLsgrpexist").val("1");
                }
                else {
                    $("#divsubgroup").addClass("hidden");
                    //$("#divNewLedgerInfoMsg").text("");
                    //$("#divNewLedgerInfoMsg").append("<div>Sub Groups Does Not Exist</div>");
                    //$("#divNewLedgerInfoMsg").addClass("alert-danger");
                    //$("#divNewLedgerInfoMsg").removeClass("hidden alert-success");
                    $("#txtNLsgrpexist").val("0");
                }
            },
            failure: function (response) {
       
            },
            error: function (response) {
          
            }
        });
    }
}

function Ledgertypechange() {   
    var ledgertypeindex = $("#ddlNLedgType option:selected").index();
    var ledgertype = $("#ddlNLedgType option:selected").text();
    var Accheadddl = $("#ddlNLedgAccHead");
    var group = $("#ddlNLedgGroupId");
    var subgroup = $("#ddlNLedgSGroupId");
    if (ledgertypeindex === 0) {
        $("#divgroups").addClass("hidden");
        group.empty().append('<option selected="selected" value="0">-Please Select-</option>');
        subgroup.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    }    
    else {
        //var errorurl = '@Url.Action("Error", "Home")';
        $.ajax({
            type: "POST",
            url: "/Ledger/GetLedgerAccHeadsbyType",
            data: '{Ledgertype:"' + ledgertype + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",            
            success: function (response) {
                var count1 = Object.keys(response).length;
                if (count1 > 0) {
                    Accheadddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $.each(response, function () {
                        Accheadddl.append($("<option></option>").val(this['AccHeadVal']).html(this['AccHeadName']));
                    });
                    $("#divNewLedgerInfoMsg").text("");
                    $("#divNewLedgerInfoMsg").addClass("hidden");
                }
                else {
                    $("#divNewLedgerInfoMsg").text("");
                    $("#divNewLedgerInfoMsg").append("<div>Account Heads Does Not Exist</div>");
                    $("#divNewLedgerInfoMsg").addClass("alert-danger");
                    $("#divNewLedgerInfoMsg").removeClass("hidden alert-success");
                    group.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    subgroup.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    Accheadddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
                    $("#divgroups").addClass("hidden");

                }
               
            },
            failure: function (response) {
              

            },
            error: function (response) {
                

            }
        });


    }
}
function NewLedgerSubGroupChange() {
    $("#divNewLedgerInfoMsg").text("");
    $("#divNewLedgerInfoMsg").addClass("hidden");

    //var srgpindex = $("#ddlNLedgGroupId option:selected").index();
    //var group = $("#ddlNLedgGroupId option:selected").val();
    //var subgroup = $("#ddlNLedgSGroupId option:selected").val();
    //var subgrpindex = $("#ddlNLedgSGroupId option:selected").index();
    //var ledgertypeindex = $("#ddlNLedgType option:selected").index();
    //var ledgertype = $("#ddlNLedgType option:selected").text();
    //var Accheadddl = $("#ddlNLedgAccHead");
    //if (srgpindex === 0) {
    //    sgrpddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //}
    //else if (subgrpindex === 0) {
    //    Accheadddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //}
    //else if (ledgertypeindex === 0) {
    //    Accheadddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //}
    //else {
    //    var errorurl = '@Url.Action("Error", "Home")';
    //    $.ajax({
    //        type: "POST",
    //        url: "/Ledger/GetLedgerAccHeads",
    //        data: '{Groupid:"' + group + '",Subgroupid:"' + subgroup + '",Ledgertype:"' + ledgertype + '"}',
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        beforeSend: function () {
    //            $('#ajax-container').html('');
    //            addSpinner($('#ajax-container'));
    //        },
    //        success: function (response) {
    //            Accheadddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
    //            $.each(response, function () {
    //                Accheadddl.append($("<option></option>").val(this['AccHeadVal']).html(this['AccHeadName']));
    //            });
    //            removeSpinner($('#ajax-container'), function () {
    //                $('#ajax-container').html('Content loaded.');
    //            })
    //        },
    //        failure: function (response) {
    //            removeSpinner($('#ajax-container'), function () {
    //                $('#ajax-container').html('Content loaded.');
    //            })

    //        },
    //        error: function (response) {
    //            removeSpinner($('#ajax-container'), function () {
    //                $('#ajax-container').html('Content loaded.');
    //            })

    //        }
    //    });


    //}



}
function NewLedgerAccHeadChange() {
    var ledgertype = $("#ddlNLedgType option:selected").text();
    var accheadindex = $("#ddlNLedgAccHead option:selected").index();
    var accheadVal = $("#ddlNLedgAccHead option:selected").val();
    var accheadName = $("#ddlNLedgAccHead option:selected").text();
    var typeArr = accheadVal.split('-');
    var acf = typeArr[1];
    var accheadid = typeArr[0];
   // alert("val=" + accheadVal + " Name=" + accheadName + " type=" + ledgtype + " Id" + accheadid);
    $("#txtNLAccheadRef").val(acf);
    var mastergrupddl = $("#ddlNLedgGroupId");
    $.ajax({
        type: "POST",
        url: "/Ledger/GetGroupsForLedger",
        data: '{Ledgertype:"' + ledgertype + '",AccHead:"' + accheadid + '",AccHeadRef:"' + acf + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                mastergrupddl.append($("<option></option>").val(this['GroupId']).html(this['GroupName']));
            });
            $("#divgroups").removeClass("hidden");
            $("#divsubgroup").addClass("hidden");
            $("#divNewLedgerInfoMsg").text("");
            $("#divNewLedgerInfoMsg").addClass("hidden");
        },
        failure: function (response) {

        },
        error: function (response) {

        }
    });
}
function NewLedgerValueType(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('LedgerValueType');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}
function UpdateLedgerValueType(checkbox) {
    var selectedIds = [];
    var checkboxes = document.getElementsByName('UpLedgerValueType');
    for (var i in checkboxes)
        checkboxes[i].checked = checkbox.checked;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}
function SubmitNewLedgerData() {
    var isValid = true;
    var errorMsg = "";
    var groupindex = $("#ddlNLedgGroupId option:selected").index();
    var sgroupindex = $("#ddlNLedgSGroupId option:selected").index();
    var accheadindex = $("#ddlNLedgAccHead option:selected").index();
    var ledgertypeindex = $("#ddlNLedgType option:selected").index();
    var issubgrpexist=$("#txtNLsgrpexist").val();
    
    var name = $("#txtNLedgName").val();
    var balance = $("#txtNLedgBalance").val();
    var balancedate = $("#txtNLedgBalanceDate").val(); 
   
    if (ledgertypeindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select LedgerType</p>";
        isValid = false;
    }
    if (groupindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Group Name</p>";
        isValid = false;
    }
    if (issubgrpexist !== "0") {
        if (sgroupindex === 0) {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Group Name</p>";
            isValid = false;
        }
    }
    if (accheadindex === 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Account Head</p>";
        isValid = false;
    }
    if (name === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Ledger Name</p>";
        isValid = false;
    }
    if (balance !== "" && balance !== "0") {
        if (balancedate === "") {
            errorMsg += "<p style='margin-top:-5px!important;'>Select Balance As on Date</p>";
            isValid = false;
        }
    }  

    if ($('#chkCredit').is(":checked") === false && $('#chkDebit').is(":checked") === false) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Ledger Value Type</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewLedgerInfoMsg").text("");
        $("#divNewLedgerInfoMsg").append(finalerror + errorMsg + "</div>");
        $("#divNewLedgerInfoMsg").addClass("alert-danger");
        $("#divNewLedgerInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divNewLedgerInfoMsg").text("");
        $("#divNewLedgerInfoMsg").addClass("hidden");


        var ledgvaluetype;       
        var accheadVal = $("#ddlNLedgAccHead option:selected").val();
        var accheadName = $("#ddlNLedgAccHead option:selected").text();
        var typeArr = accheadVal.split('-');
        var ledgtype = typeArr[1];
        var accheadid = typeArr[0];
        if ($('#chkCredit').is(":checked") == true) {
            ledgvaluetype = 'Credit';
        }
        else if ($('#chkDebit').is(":checked") == true) {
            ledgvaluetype = 'Debit';
        }
        if (accheadName === 'CashBook') {
            accheadid = 'CashBook';
            
        }
        if (accheadName === 'BankBook') {
            accheadid = 'BankBook';
        }       
        var ledgertypeId = $("#ddlNLedgType option:selected").val();//For Invoice Ledger
     
        if (ledgertypeId === '7') {
            ledgtype = accheadid;
        }
        var baldate = '';
        if (balance === "" || balance === "0") {          
            
           // var tdate = new Date();
            //var dd = tdate.getDate(); //yields day
            //var MM = tdate.getMonth(); //yields month
            //var yyyy = tdate.getFullYear(); //yields year
            //var currentDate = dd + "-" + (MM + 1) + "-" + yyyy;
            //alert(currentDate);
            baldate = '';
            //alert(baldate);
        }
        else {
            baldate = $("#txtNLedgBalanceDate").val();

        }   
        var subgrp = "";
        if (issubgrpexist !== "0") {
            subgrp = $("#ddlNLedgSGroupId option:selected").val();
        }
        else {
            subgrp = "0";

        }
       
        var savenewLedger = {
            GroupId: $("#ddlNLedgGroupId option:selected").val(),
            SubGroupId: subgrp,
            AccountHead: accheadid,
            AccountHeadRef: ledgtype,
            LedgerValueType: ledgvaluetype,
            LedgerName: $("#txtNLedgName").val(),
            OpeningBalance: $("#txtNLedgBalance").val(),
            BalanceAsOnDate: baldate,
            Createdby: $("#txtNLCreatedby").val(),
            LedgerId:0,
            Action: 'Add',
            LedgerTypeId: $("#ddlNLedgType option:selected").val()
        };
        //debugger;
        //console.log(savenewLedger);
        addFailMsg = "Error Occurred While Adding Ledger.";
        addSuccessMsg = "Ledger Details Inserted Successfully.";      
        $("#btnNewLedger").prop("disabled", true);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Ledger/SaveLedger',
            data: { ledg: savenewLedger },
            success: function (Data) {
                if (Data.saveStatus == "Submitted") {
                    
                    $("#divNewLedgerInfoMsg").text(addSuccessMsg);
                    $("#divNewLedgerInfoMsg").removeClass("hidden alert-danger");
                    $("#divNewLedgerInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnNewLedger").prop("disabled", false);
                    $("#divNewLedgerInfoMsg").text(addFailMsg);
                    $("#divNewLedgerInfoMsg").addClass("alert-danger");
                    $("#divNewLedgerInfoMsg").removeClass("hidden alert-success");
                }
               
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
               
                $("#btnNewLedger").prop("disabled", false);
                $("#divNewLedgerInfoMsg").text(addFailMsg);
                $("#divNewLedgerInfoMsg").addClass("alert-danger");
                $("#divNewLedgerInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
function LedgerActionschange(Id, Name, GroupNature, AccHead, GroupName, SubGroup, AccHeadRef, ValueType, Balance, Date, txt) {
    var action = txt.value;
    var bldate = Date;   
    var trimStr = $.trim(bldate);
    var typeArr = trimStr.split(' ');
    var d3 = typeArr[0];
    var t1 = "'" + d3 + "'";
    var bldate1 = moment(t1, "DDMMYYYY").format('DD-MMM-YYYY');   

    if (action == 'Edit') {
        $("#EditLedgerModal").modal('show');
        $("#txtUpledgGroup").val(GroupName);
        $("#txtUpledgSubGroup").val(SubGroup);
        $("#txtUpledgAccHead").val(AccHead);
        $("#txtUpledgName").val(Name);
        $("#txtUpledgBal").val(Balance);
        //$("#txtUpledgBalDate").val(Date);
        $("#txtUpledgBalDate").datepicker("setDate", bldate1);
        $("#txtUpLedgerId").val(Id);
        if (ValueType == 'Credit') {
            $("#chkUpCredit").prop("checked", true);
            $("#chkUpDebit").prop("checked", false);
        } else if (ValueType == 'Debit') {
            $("#chkUpCredit").prop("checked", false);
            $("#chkUpDebit").prop("checked", true);
        }

        $("#divUpdateLedgerInfoMsg").text("");
        $("#divUpdateLedgerInfoMsg").addClass("hidden");
        $("#btnUpLedger").prop('disabled', false);

    }
    else if (action == 'Delete') {
        $("#deleteLedger").modal('show');
        $("#lbldelLedgerName").html('Ledger Name:'+Name);
        $("#lbldelLedgerName1").html('Account Head:'+AccHead);
        $("#txtdeleteledgerid").val(Id);
        $("#confirmbtndeleteledger").removeClass('hidden'); 
        $("#txtdeleteledgdate").val(bldate1);
        $("#divDeletecLedgerInfoMsg").text("");
        $("#divDeletecLedgerInfoMsg").addClass("hidden");
    }

}
function UpdateLedger() {
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
            Createdby: $("#txtNLCreatedby").val(),
            LedgerId: $("#txtUpLedgerId").val(),
            Action: 'Update'
        };
        $("#btnUpLedger").prop("disabled", "true");
        addFailMsg = "Error Occurred While Editing Ledger.";
        addSuccessMsg = "Ledger Details Edited Successfully.";
        //alert('submit');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Ledger/EditLedger',
            data: { ledg: savenewLedger },
            success: function (Data) {
                if (Data.saveStatus == "Submitted") {
                   
                    $("#divUpdateLedgerInfoMsg").text(addSuccessMsg);
                    $("#divUpdateLedgerInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpdateLedgerInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpLedger").prop("disabled", false);
                    $("#divUpdateLedgerInfoMsg").text(addFailMsg);
                    $("#divUpdateLedgerInfoMsg").addClass("alert-danger");
                    $("#divUpdateLedgerInfoMsg").removeClass("hidden alert-success");
                }
             
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
               
                $("#btnUpLedger").prop("disabled", false);
                $("#divUpdateLedgerInfoMsg").text(addFailMsg);
                $("#divUpdateLedgerInfoMsg").addClass("alert-danger");
                $("#divUpdateLedgerInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
function DeleteLedger() {

    var savenewLedger = {     
        BalanceAsOnDate:$("#txtdeleteledgdate").val(),
        Createdby: $("#txtNLCreatedby").val(),
        LedgerId: $("#txtdeleteledgerid").val(),
        Action: 'Delete'
    };
    addFailMsg = "Error Occurred While Deleting Ledger.";
    addSuccessMsg = "Ledger Details Deleted Successfully.";
    //alert('submit');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Ledger/EditLedger',
        data: { ledg: savenewLedger },
        success: function (Data) {
            if (Data.saveStatus == "Submitted") {
                $("#confirmbtndeleteledger").addClass('hidden');
                $("#divDeletecLedgerInfoMsg").text(addSuccessMsg);
                $("#divDeletecLedgerInfoMsg").removeClass("hidden alert-danger");
                $("#divDeletecLedgerInfoMsg").addClass("alert-success");
            }
            else {
                $("#confirmbtndeleteledger").addClass('hidden');
                $("#divDeletecLedgerInfoMsg").text(addFailMsg);
                $("#divDeletecLedgerInfoMsg").addClass("alert-danger");
                $("#divDeletecLedgerInfoMsg").removeClass("hidden alert-success");
            }
          
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          
            $("#confirmbtndeleteledger").addClass('hidden');
            $("#divDeletecLedgerInfoMsg").text(addFailMsg);
            $("#divDeletecLedgerInfoMsg").addClass("alert-danger");
            $("#divDeletecLedgerInfoMsg").removeClass("hidden alert-success");
        }
    });
}
//Groups scripts starting
function ShowGroupTreeModel() {

    $("#GrouptreeModal").modal('show');

}

function LoadMasterGroupCode() {
    $("#divMasterGroupCode").removeClass("hidden");
    $("#divSubGroupCode").addClass("hidden");
    $("#divChildGroupCode").addClass("hidden");

}
function LoadSubGroupCode() {
    $("#divMasterGroupCode").addClass("hidden");
    $("#divSubGroupCode").removeClass("hidden");
    $("#divChildGroupCode").addClass("hidden");

}
function LoadChildGroupCode() {
    $("#divMasterGroupCode").addClass("hidden");
    $("#divSubGroupCode").addClass("hidden");
    $("#divChildGroupCode").removeClass("hidden");

}
function mastergrpActionChange(id, gpid, groupname, naturename, txt) {
    var rowid = id;
    var groupid = gpid;
    var name = groupname
    var Action = txt.value;
    var nature = naturename;

    if (Action == "E") {

        $("#EditMasterGroupModal").modal('show');
        $("#txtUpMasterGpName").val(name);
        $("#txtUpMasterGpId").val(rowid);
        $("#divUpdateMasterGroupInfoMsg").text("");
        $("#divUpdateMasterGroupInfoMsg").addClass("hidden");
        $("#txtUpMasterGrpNature").val(nature);
    }
    else if (Action == "D") {
        // alert(Action);
        $("#deleteMasterGroup").modal('show');
        $("#lbldelMasterGroupname").html(name);
        $("#txtdeleteGroupid").val(rowid);
        $("#confirmbtndeletegrp").removeClass('hidden');
        $("#divDeleteMastergroupInfoMsg").text("");
        $("#divDeleteMastergroupInfoMsg").addClass("hidden");
    }


}
function MasterGroupNatureChange() {
    $("#divAddMasterGroupGrid").removeClass("hidden");
    $("#btnSubmitNewMasterGroup").prop('disabled', false);
    $("#divNewMasterGroupInfoMsg").text("");
    $("#divNewMasterGroupInfoMsg").addClass("hidden");
    $("#AddMasterGroupTable tbody tr:first").each(function () {
        var currentRow = $(this);
        var calc = currentRow.find("td").eq(2).find("select");
        calc.empty().append('<option selected="selected" value="0">Select</option>');
        calc.append('<option  value="Y">Yes</option>');
        calc.append('<option  value="N">No</option>');
        currentRow.find("td").eq(1).find("input[type='text']").val("");
    });
}
function ViewAddNewGroupModel() {
    $("#divAddMasterGroupGrid").addClass("hidden");
    $("#AddNewGroupModal").modal('show');
    $("#ddlMGroupNature").prop('selectedIndex', 0);
    $("#btnSubmitNewMasterGroup").prop('disabled', false);
    $("#divNewMasterGroupInfoMsg").text("");
    $("#divNewMasterGroupInfoMsg").addClass("hidden");
}

function Addmastergroupgridnewrow() {

    isValid = true;
    var errorMsg = "";
    var countgroupname = 0, countcalc = 0, incexpedcount = 0;
    $("#AddMasterGroupTable tbody tr").each(function () {
        var currentRow = $(this);
        var groupname = currentRow.find("td").eq(1).find("input[type='text']").val();
        var calc = currentRow.find("td").eq(2).find("select option:selected").index();
        //var incexp = currentRow.find("td").eq(3).find("select option:selected").index();   
        if (groupname == "") { countgroupname = countgroupname + 1; }
        if (calc == 0) { countcalc = countcalc + 1; }
        //if (incexp == 0) { incexpedcount = incexpedcount + 1; }


    });

    if (countgroupname > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Group Name</p>";
        isValid = false;
    }
    if (countcalc > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Gross Profit Calculation Applicable or not</p>";
        isValid = false;
    }   

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewMasterGroupInfoMsg").text("");
        $("#divNewMasterGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewMasterGroupInfoMsg").addClass("alert-danger");
        $("#divNewMasterGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewMasterGroupInfoMsg").text("");
        $("#divNewMasterGroupInfoMsg").addClass("hidden");
        var count = $("#AddMasterGroupTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center" class="addmgsno">' + rowno + '</td>';
        cols += '<td style="text-align:center" class="addmgname"><input type = "text" class="form-control mgpname" style = "text-transform:uppercase" /></td>';
        cols += '<td style="text-align:center"><select class="form-control dropdown-toggle pcapplicable" >';
        cols += '<option selected="selected" value="Select">Select</option> <option  value="Y">Yes</option><option value="N">No</option ></select ></td>';
        cols += '<td><input type="button" class="ibtnMasterGroupDel btn btn-md btn-danger" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list.addmastergbtable").append(newRow);

    }


}
function SubmitNewMasterGroup() {
    isValid = true;
    var errorMsg = "";
    var countgroupname = 0, countcalc = 0, IncExpcount = 0;;
    $("#AddMasterGroupTable tbody tr").each(function () {
        var currentRow = $(this);
        var groupname = currentRow.find("td").eq(1).find("input[type='text']").val();
        var calc = currentRow.find("td").eq(2).find("select option:selected").index();
        // var IncExp = currentRow.find("td").eq(3).find("select option:selected").index();

        if (groupname == "") { countgroupname = countgroupname + 1; }
        if (calc == 0) { countcalc = countcalc + 1; }
        // if (IncExp == 0) { IncExpcount = IncExpcount + 1; }

    });

    if (countgroupname > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Group Name</p>";
        isValid = false;
    }
    if (countcalc > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Gross Profit Calculation Applicable or not</p>";
        isValid = false;
    }
    //if (IncExpcount > 0) {
    //    errorMsg += "<p style='margin-top:-5px!important;'>Select Income Expenditure Account Head</p>";
    //    isValid = false;
    //}

    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewMasterGroupInfoMsg").text("");
        $("#divNewMasterGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewMasterGroupInfoMsg").addClass("alert-danger");
        $("#divNewMasterGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divNewMasterGroupInfoMsg").text("");
        $("#divNewMasterGroupInfoMsg").addClass("hidden");

        var groupnames = "", profitCal = "", incomeExp = "";
        $("#AddMasterGroupTable tbody tr").each(function () {
            var currentRow = $(this);
            var groupname = currentRow.find("td").eq(1).find("input[type='text']").val();
            var calc = currentRow.find("td").eq(2).find("select option:selected").val();
            //  var ieah = currentRow.find("td").eq(3).find("select option:selected").val();
            groupnames += groupname + ",";
            profitCal += calc + ",";
            //  incomeExp += ieah + ",";
        });

        var mGroup = {
            GroupNameList: groupnames,
            NatureGroupId: $("#ddlMGroupNature option:selected").val(),
            Createdby: $("#txtCreatedby").val(),
            Action: "Add",
            GrossProfitCalcList: profitCal,


        };
        $("#btnSubmitNewMasterGroup").prop('disabled', true);
        addFailMsg = "Error Occurred While Adding Master Group";
        addSuccessMsg = "Master Group Added Successfully.";
        $.ajax({
            type: "POST",
            url: "/Ledger/SaveUpdateMasterGroup",
            data: JSON.stringify({ masterGroup: mGroup }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {                
                if (response.saveStatus == "Submitted") {
                   
                    $("#divNewMasterGroupInfoMsg").text(addSuccessMsg);
                    $("#divNewMasterGroupInfoMsg").removeClass("hidden alert-danger");
                    $("#divNewMasterGroupInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnSubmitNewMasterGroup").prop('disabled', false);
                    $("#divNewMasterGroupInfoMsg").text(response.saveStatus);
                    $("#divNewMasterGroupInfoMsg").addClass("alert-danger");
                    $("#divNewMasterGroupInfoMsg").removeClass("hidden alert-success");
                }
             
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             
                $("#btnSubmitNewMasterGroup").prop('disabled', false);
                $("#divNewMasterGroupInfoMsg").text(addFailMsg);
                $("#divNewMasterGroupInfoMsg").addClass("alert-danger");
                $("#divNewMasterGroupInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}
function ResetNewMasterGroup() {
    $("#ddlMGroupNature").prop('selectedIndex', 0);
    $("#divAddMasterGroupGrid").addClass("hidden");
    $("#btnSubmitNewMasterGroup").prop('disabled', false);
    var count = $("#AddMasterGroupTable tbody tr").length;
    if (count > 1) {
        $("#AddMasterGroupTable tbody tr:not(:first)").remove();
        $("#AddMasterGroupTable tbody tr").each(function () {
            var currentRow = $(this);
            var calc = currentRow.find("td").eq(2).find("select");
            calc.empty().append('<option selected="selected" value="0">Select</option>');
            calc.append('<option  value="Y">Yes</option>');
            calc.append('<option  value="N">No</option>');
            currentRow.find("td").eq(1).find("input[type='text']").val("");
        });
    }
    else {
        $("#AddMasterGroupTable tbody tr").each(function () {
            var currentRow = $(this);
            var calc = currentRow.find("td").eq(2).find("select");
            calc.empty().append('<option selected="selected" value="0">Select</option>');
            calc.append('<option  value="Y">Yes</option>');
            calc.append('<option  value="N">No</option>');
            currentRow.find("td").eq(1).find("input[type='text']").val("");
        });

    }
    $("#divNewMasterGroupInfoMsg").text("");
    $("#divNewMasterGroupInfoMsg").addClass("hidden");
}

function UpdateMasterGroup() {
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
            Createdby: $("#txtCreatedby").val(),
            Action: "Update",
            GroupIdList: $("#txtUpMasterGpId").val(),

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
                    $("#divUpdateMasterGroupInfoMsg").text(addSuccessMsg);
                    $("#divUpdateMasterGroupInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpdateMasterGroupInfoMsg").addClass("alert-success");
                }
                else {
                    $("#divUpdateMasterGroupInfoMsg").text(response.saveStatus);
                    $("#divUpdateMasterGroupInfoMsg").addClass("alert-danger");
                    $("#divUpdateMasterGroupInfoMsg").removeClass("hidden alert-success");
                }
               
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                
                $("#divUpdateMasterGroupInfoMsg").text(addFailMsg);
                $("#divUpdateMasterGroupInfoMsg").addClass("alert-danger");
                $("#divUpdateMasterGroupInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}

function DeleteMasterGroup() {
    var mGroup = {
        Createdby: $("#txtCreatedby").val(),
        Action: "Delete",
        GroupIdList: $("#txtdeleteGroupid").val(),

    };

    addFailMsg = "Error Occurred While Deleting Master Group";
    addSuccessMsg = "Master Group Deleted Successfully.";
    $.ajax({
        type: "POST",
        url: "/Ledger/UpdateMasterGroup",
        data: JSON.stringify({ masterGroup: mGroup }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.saveStatus == "Submitted") {
                $("#divDeleteMastergroupInfoMsg").text(addSuccessMsg);
                $("#divDeleteMastergroupInfoMsg").removeClass("hidden alert-danger");
                $("#divDeleteMastergroupInfoMsg").addClass("alert-success");
                $("#confirmbtndeletegrp").addClass('hidden');
            }
            else {
                $("#divDeleteMastergroupInfoMsg").text(addFailMsg);
                $("#divDeleteMastergroupInfoMsg").addClass("alert-danger");
                $("#divDeleteMastergroupInfoMsg").removeClass("hidden alert-success");
                $("#confirmbtndeletegrp").addClass('hidden');
            }
          
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          
            $("#divDeleteMastergroupInfoMsg").text(addFailMsg);
            $("#divDeleteMastergroupInfoMsg").addClass("alert-danger");
            $("#divDeleteMastergroupInfoMsg").removeClass("hidden alert-success");
            $("#confirmbtndeletegrp").addClass('hidden');
        }
    });


}

//Sub Groups
function ViewAddNewSubGroupModel() {

    $("#AddNewSubGroupModal").modal('show');

    var mastergrupddl = $("#ddlNewSGMasterGroups");
    $.ajax({
        type: "POST",
        url: "/Ledger/GetGroups",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                mastergrupddl.append($("<option></option>").val(this['GroupId']).html(this['GroupName']));
            });
            $("#divaddsubgrpdetails").addClass("hidden");
            $("#divAddSubGroupGrid").addClass("hidden");
            $("#divNewSubGroupInfoMsg").text("");
            $("#divNewSubGroupInfoMsg").addClass("hidden");
            $("#btnSubmitNewSubGroup").prop('disabled', false);

            var count = $("#AddSubGroupTable tbody tr").length;
            if (count > 1) {
                $("#AddSubGroupTable tbody tr:not(:first)").remove();
                $("#AddSubGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
            else {
                $("#AddSubGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
          
        },
        failure: function (response) {
            
        },
        error: function (response) {
     
        }
    });

    // $("#ddlMGroupNature").prop('selectedIndex', 0);

}
function NewSGMasterGroupChange() {
    var mastergrupindex = $("#ddlNewSGMasterGroups option:selected").index();
    if (mastergrupindex == 0) {
        $("#divaddsubgrpdetails").addClass("hidden");
        $("#divAddSubGroupGrid").addClass("hidden");
        $("#divNewSubGroupInfoMsg").text("");
        $("#divNewSubGroupInfoMsg").addClass("hidden");
    }

    else {
        $("#divaddsubgrpdetails").removeClass("hidden");
        $("#divAddSubGroupGrid").removeClass("hidden");
        $("#divNewSubGroupInfoMsg").text("");
        $("#divNewSubGroupInfoMsg").addClass("hidden");
    }
}
function AddSubgroupgridnewrow() {
    $("#divNewSubGroupInfoMsg").text("");
    $("#divNewSubGroupInfoMsg").addClass("hidden");
    isValid = true;
    var errorMsg = "";
    var countgroupname = 0;
    $("#AddSubGroupTable tbody tr").each(function () {
        var currentRow = $(this);
        var groupname = currentRow.find("td").eq(1).find("input[type='text']").val();
        if (groupname == "") { countgroupname = countgroupname + 1; }

    });

    if (countgroupname > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Sub Group Name</p>";
        isValid = false;
    }


    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSubGroupInfoMsg").text("");
        $("#divNewSubGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSubGroupInfoMsg").addClass("alert-danger");
        $("#divNewSubGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {

        $("#divNewSubGroupInfoMsg").text("");
        $("#divNewSubGroupInfoMsg").addClass("hidden");
        var count = $("#AddSubGroupTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center"  class="addsubgroupno">' + rowno + '</td>';
        cols += '<td style="text-align:center" class="addsubgrpname"> <input type="text" class="form-control" style="text-transform:uppercase" /></td>';
        cols += '<td><input type="button" class="ibtnAddSubGroupDel btn btn-md btn-danger" value="Delete"></td></tr>';
        newRow.append(cols);
        $("#AddSubGroupTable tbody").append(newRow);

    }
}
function SubmitNewSubGroup() {
    isValid = true;
    var errorMsg = "";
    var countgroupname = 0;
    var mastergrupindex = $("#ddlNewSGMasterGroups option:selected").index();
    if (mastergrupindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Master Group Name</p>";
        isValid = false;
    }
    $("#AddSubGroupTable tbody tr").each(function () {
        var currentRow = $(this);
        var groupname = currentRow.find("td").eq(1).find("input[type='text']").val();
        if (groupname == "") { countgroupname = countgroupname + 1; }

    });

    if (countgroupname > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Sub Group Name</p>";
        isValid = false;
    }


    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewSubGroupInfoMsg").text("");
        $("#divNewSubGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewSubGroupInfoMsg").addClass("alert-danger");
        $("#divNewSubGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {

        $("#divNewSubGroupInfoMsg").text("");
        $("#divNewSubGroupInfoMsg").addClass("hidden");

        var subgrpnames = "";
        $("#AddSubGroupTable tbody tr").each(function () {
            var currentRow = $(this);
            var subgroupname = currentRow.find("td").eq(1).find("input[type='text']").val();
            subgrpnames += subgroupname + ",";
        });

        var savesgrp = {
            SubGroupNameList: subgrpnames,
            MasterGroupId: $("#ddlNewSGMasterGroups option:selected").val(),
            Createdby: $("#txtCreatedby").val(),
            Id: 0,
            Action: 'Add'
        };
        addFailMsg = "Error Occurred While Adding SubGroup";
        addSuccessMsg = "Sub Group Added Successfully.";
        $.ajax({
            type: "POST",
            url: "/Ledger/SaveSubGroup",
            data: JSON.stringify({ subGroup: savesgrp }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $("#btnSubmitNewSubGroup").prop('disabled', true);
                    $("#divNewSubGroupInfoMsg").text(addSuccessMsg);
                    $("#divNewSubGroupInfoMsg").removeClass("hidden alert-danger");
                    $("#divNewSubGroupInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnSubmitNewSubGroup").prop('disabled', true);
                    $("#divNewSubGroupInfoMsg").text(response.saveStatus );
                    $("#divNewSubGroupInfoMsg").addClass("alert-danger");
                    $("#divNewSubGroupInfoMsg").removeClass("hidden alert-success");
                }
             
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
           
                $("#btnSubmitNewSubGroup").prop('disabled', true);
                $("#divNewSubGroupInfoMsg").text(addFailMsg);
                $("#divNewSubGroupInfoMsg").addClass("alert-danger");
                $("#divNewSubGroupInfoMsg").removeClass("hidden alert-success");
            }
        });

    }


}
function ResetNewSubGroup() {
    var mastergrupddl = $("#ddlNewSGMasterGroups");
    $.ajax({
        type: "POST",
        url: "/Ledger/GetGroups",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            mastergrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                mastergrupddl.append($("<option></option>").val(this['GroupId']).html(this['GroupName']));
            });
            $("#divaddsubgrpdetails").addClass("hidden");
            $("#divAddSubGroupGrid").addClass("hidden");
            $("#divNewSubGroupInfoMsg").text("");
            $("#divNewSubGroupInfoMsg").addClass("hidden");
            $("#btnSubmitNewSubGroup").prop('disabled', false);

            var count = $("#AddSubGroupTable tbody tr").length;
            if (count > 1) {
                $("#AddSubGroupTable tbody tr:not(:first)").remove();
                $("#AddSubGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
            else {
                $("#AddSubGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
          
        },
        failure: function (response) {
   
        },
        error: function (response) {

        }
    });

}
function subgrpActionChange(id, gpid, sgroupname, txt) {


    var rowid = id;
    var groupid = gpid;
    var name = sgroupname
    var Action = txt.value;
    if (Action == "E") {
        $("#EditSubGroupModal").modal('show');
        $("#txtUpSubGpName").val(sgroupname);
        $("#txtUpSubGpId").val(rowid);
        $("#divUpdateSubGroupInfoMsg").text("");
        $("#divUpdateSubGroupInfoMsg").addClass("hidden");
        $("#btnUpdateSubGroup").prop('disabled', false);
    }
    else if (Action == "D") {
        //// alert(Action);
        $("#deleteSubGroup").modal('show');
        $("#lbldelSubGroupname").html(sgroupname);
        $("#txtdeleteSubGroupid").val(rowid);
        $("#confirmbtndeletesubgrp").removeClass('hidden');
        $("#divDeleteSubgroupInfoMsg").text("");
        $("#divDeleteSubgroupInfoMsg").addClass("hidden");
    }
}

function UpdateSubGroup() {

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
            MasterGroupId: '',
            Createdby: $("#txtCreatedby").val(),
            Id: $("#txtUpSubGpId").val(),
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
                    $("#btnUpdateSubGroup").prop('disabled', true);
                    $("#divUpdateSubGroupInfoMsg").text(addSuccessMsg);
                    $("#divUpdateSubGroupInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpdateSubGroupInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpdateSubGroup").prop('disabled', true);
                    $("#divUpdateSubGroupInfoMsg").text(response.saveStatus);
                    $("#divUpdateSubGroupInfoMsg").addClass("alert-danger");
                    $("#divUpdateSubGroupInfoMsg").removeClass("hidden alert-success");
                }
            
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
           
                $("#btnUpdateSubGroup").prop('disabled', true);
                $("#divNewSubGroupInfoMsg").text(addFailMsg);
                $("#divNewSubGroupInfoMsg").addClass("alert-danger");
                $("#divNewSubGroupInfoMsg").removeClass("hidden alert-success");
            }
        });
    }

}
function DeleteSubGroup() {

    var savesgrp = {
        Createdby: $("#txtCreatedby").val(),
        Action: "Delete",
        Id: $("#txtdeleteSubGroupid").val(),

    };

    addFailMsg = "Error Occurred While Deleting Sub Group";
    addSuccessMsg = "Sub Group Deleted Successfully.";
    $.ajax({
        type: "POST",
        url: "/Ledger/UpdateSubGroup",
        data: JSON.stringify({ subGroup: savesgrp }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.saveStatus == "Submitted") {

                $("#divDeleteSubgroupInfoMsg").text(addSuccessMsg);
                $("#divDeleteSubgroupInfoMsg").removeClass("hidden alert-danger");
                $("#divDeleteSubgroupInfoMsg").addClass("alert-success");
                $("#confirmbtndeletesubgrp").addClass('hidden');
            }
            else {

                $("#divDeleteSubgroupInfoMsg").text(addFailMsg);
                $("#divDeleteSubgroupInfoMsg").addClass("alert-danger");
                $("#divDeleteSubgroupInfoMsg").removeClass("hidden alert-success");
                $("#confirmbtndeletesubgrp").addClass('hidden');
            }
          
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
       
            $("#divDeleteSubgroupInfoMsg").text(addFailMsg);
            $("#divDeleteSubgroupInfoMsg").addClass("alert-danger");
            $("#divDeleteSubgroupInfoMsg").removeClass("hidden alert-success");
            $("#confirmbtndeletesubgrp").addClass('hidden');
        }
    });
}

//Child Groups
function ViewAddNewChildGroupModel() {

    $("#AddNewChildGroupModal").modal('show');

    var subgrupddl = $("#ddlNewCGSubGroups");
    $.ajax({
        type: "POST",
        url: "/Ledger/BindSubGroupsForChildGroup",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
            });
            $("#divaddchildgrpdetails").addClass("hidden");
            $("#divAddChildGroupGrid").addClass("hidden");
            $("#divNewChildGroupInfoMsg").text("");
            $("#divNewChildGroupInfoMsg").addClass("hidden");
            $("#btnSubmitNewChildGroup").prop('disabled', false);

            var count = $("#AddSubGroupTable tbody tr").length;
            if (count > 1) {
                $("#AddChildGroupTable tbody tr:not(:first)").remove();
                $("#AddChildGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
            else {
                $("#AddChildGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
       
        },
        failure: function (response) {
    
        },
        error: function (response) {
        
        }
    });


}
function NewCGSubGroupChange() {
    var subgrupindex = $("#ddlNewCGSubGroups option:selected").index();
    if (subgrupindex == 0) {
        $("#divaddchildgrpdetails").addClass("hidden");
        $("#divAddChildGroupGrid").addClass("hidden");
        $("#divNewChildGroupInfoMsg").text("");
        $("#divNewChildGroupInfoMsg").addClass("hidden");
    }

    else {
        $("#divaddchildgrpdetails").removeClass("hidden");
        $("#divAddChildGroupGrid").removeClass("hidden");
        $("#divNewChildGroupInfoMsg").text("");
        $("#divNewChildGroupInfoMsg").addClass("hidden");
    }

}

function AddChildgroupgridnewrow() {
    $("#divNewChildGroupInfoMsg").text("");
    $("#divNewChildGroupInfoMsg").addClass("hidden");
    isValid = true;
    var errorMsg = "";
    var countgroupname = 0;
    $("#AddChildGroupTable tbody tr").each(function () {
        var currentRow = $(this);
        var groupname = currentRow.find("td").eq(1).find("input[type='text']").val();
        if (groupname == "") { countgroupname = countgroupname + 1; }

    });

    if (countgroupname > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Child Group Name</p>";
        isValid = false;
    }


    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewChildGroupInfoMsg").text("");
        $("#divNewChildGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewChildGroupInfoMsg").addClass("alert-danger");
        $("#divNewChildGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {

        $("#divNewChildGroupInfoMsg").text("");
        $("#divNewChildGroupInfoMsg").addClass("hidden");
        var count = $("#AddChildGroupTable tbody tr").length;
        var rowno = count + 1;
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td style="text-align:center">' + rowno + '</td>';
        cols += '<td style="text-align:center"> <input type="text" class="form-control" style="text-transform:uppercase" /></td>';
        cols += '<td><input type="button" class="ibtnAddChildGroupDel btn btn-md btn-danger" value="Delete"></td></tr>';
        newRow.append(cols);
        $("#AddChildGroupTable tbody").append(newRow);

    }

}

function SubmitNewChildGroup() {
   // alert('submit');
    isValid = true;
    var errorMsg = "";
    var countgroupname = 0;

    var subgrupindex = $("#ddlNewCGSubGroups option:selected").index();
    if (subgrupindex == 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Select Sub Group Name</p>";
        isValid = false;
    }
    $("#AddChildGroupTable tbody tr").each(function () {
        var currentRow = $(this);
        var groupname = currentRow.find("td").eq(1).find("input[type='text']").val();
        if (groupname == "") { countgroupname = countgroupname + 1; }
    });
    if (countgroupname > 0) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Child Group Name</p>";
        isValid = false;
    }
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divNewChildGroupInfoMsg").text("");
        $("#divNewChildGroupInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divNewChildGroupInfoMsg").addClass("alert-danger");
        $("#divNewChildGroupInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {

        $("#divNewChildGroupInfoMsg").text("");
        $("#divNewChildGroupInfoMsg").addClass("hidden");

        var childgrpnames = "";
        $("#AddChildGroupTable tbody tr").each(function () {
            var currentRow = $(this);
            var childgroupname = currentRow.find("td").eq(1).find("input[type='text']").val();
            childgrpnames += childgroupname + ",";
        });

        var savecgrp = {
            ChildGroupNameList: childgrpnames,
            Id: $("#ddlNewCGSubGroups option:selected").val(),
            Createdby: $("#txtCreatedby").val(),
            ChildGroupid: 0,
            Action: 'Add'
        };
        addFailMsg = "Error Occurred While Adding ChildGroup";
        addSuccessMsg = "Child Group Added Successfully.";
        $.ajax({
            type: "POST",
            url: "/Ledger/SaveChildGroup",
            data: JSON.stringify({ subGroup: savecgrp }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus == "Submitted") {
                    $("#btnSubmitNewChildGroup").prop('disabled', true);
                    $("#divNewChildGroupInfoMsg").text(addSuccessMsg);
                    $("#divNewChildGroupInfoMsg").removeClass("hidden alert-danger");
                    $("#divNewChildGroupInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnSubmitNewChildGroup").prop('disabled', true);
                    $("#divNewChildGroupInfoMsg").text(addFailMsg);
                    $("#divNewChildGroupInfoMsg").addClass("alert-danger");
                    $("#divNewChildGroupInfoMsg").removeClass("hidden alert-success");
                }
             
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             
                $("#btnSubmitNewChildGroup").prop('disabled', true);
                $("#divNewChildGroupInfoMsg").text(addFailMsg);
                $("#divNewChildGroupInfoMsg").addClass("alert-danger");
                $("#divNewChildGroupInfoMsg").removeClass("hidden alert-success");
            }
        });

    }
}
function ResetNewChildGroup() {
    var subgrupddl = $("#ddlNewCGSubGroups");
    $.ajax({
        type: "POST",
        url: "/Ledger/GetSubGroupsForChildGroup",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            subgrupddl.empty().append('<option selected="selected" value="0">-Please Select-</option>');
            $.each(response, function () {
                subgrupddl.append($("<option></option>").val(this['Id']).html(this['Name']));
            });
            $("#divaddchildgrpdetails").addClass("hidden");
            $("#divAddChildGroupGrid").addClass("hidden");
            $("#divNewChildGroupInfoMsg").text("");
            $("#divNewChildGroupInfoMsg").addClass("hidden");
            $("#btnSubmitNewChildGroup").prop('disabled', false);

            var count = $("#AddChildGroupTable tbody tr").length;
            if (count > 1) {
                $("#AddChildGroupTable tbody tr:not(:first)").remove();
                $("#AddChildGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
            else {
                $("#AddChildGroupTable tbody tr").each(function () {
                    var currentRow = $(this);
                    currentRow.find("td").eq(1).find("input[type='text']").val("");
                });
            }
        
        },
        failure: function (response) {
       
        },
        error: function (response) {
         
        }
    });


}
function childgrpActionChange(id, gpid, sgroupname, txt) {
    var rowid = id;
    var groupid = gpid;
    var name = sgroupname;
    var Action = txt.value;

    if (Action == "E") {
        $("#EditChildGroupModal").modal('show');
        $("#txtUpChildGpName").val(name);
        $("#txtUpChildGpId").val(rowid);
        $("#divUpdateChildGroupInfoMsg").text("");
        $("#divUpdateChildGroupInfoMsg").addClass("hidden");
        $("#btnUpdateChildGroup").prop('disabled', false);
    }
    else if (Action == "D") {

        $("#deleteChildGroup").modal('show');
        $("#lbldelChildGroupname").html(sgroupname);
        $("#txtdeleteChildGroupid").val(rowid);
        $("#confirmbtndeletechigrp").removeClass('hidden');
        $("#divDeletechildgroupInfoMsg").text("");
        $("#divDeletechildgroupInfoMsg").addClass("hidden");
    }

}
function UpdateChildGroup() {
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
            ChildGroupid: $("#txtUpChildGpId").val(),
            Createdby: $("#txtCreatedby").val(),
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
                    $("#btnUpdateChildGroup").prop('disabled', true);
                    $("#divUpdateChildGroupInfoMsg").text(addSuccessMsg);
                    $("#divUpdateChildGroupInfoMsg").removeClass("hidden alert-danger");
                    $("#divUpdateChildGroupInfoMsg").addClass("alert-success");
                }
                else {
                    $("#btnUpdateChildGroup").prop('disabled', true);
                    $("#divUpdateChildGroupInfoMsg").text(addFailMsg);
                    $("#divUpdateChildGroupInfoMsg").addClass("alert-danger");
                    $("#divUpdateChildGroupInfoMsg").removeClass("hidden alert-success");
                }
          
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              
                $("#btnUpdateChildGroup").prop('disabled', true);
                $("#divUpdateChildGroupInfoMsg").text(addFailMsg);
                $("#divUpdateChildGroupInfoMsg").addClass("alert-danger");
                $("#divUpdateChildGroupInfoMsg").removeClass("hidden alert-success");
            }
        });
    }
}

function DeleteChildGroup() {

    var savecgrp = {
        ChildGroupid: $("#txtdeleteChildGroupid").val(),
        Createdby: $("#txtCreatedby").val(),
        Action: 'Delete'
    };

    addFailMsg = "Error Occurred While Deleting Child Group";
    addSuccessMsg = "Child Group Deleted Successfully.";
    $.ajax({
        type: "POST",
        url: "/Ledger/UpdateChildGroup",
        data: JSON.stringify({ subGroup: savecgrp }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.saveStatus == "Submitted") {

                $("#divDeletechildgroupInfoMsg").text(addSuccessMsg);
                $("#divDeletechildgroupInfoMsg").removeClass("hidden alert-danger");
                $("#divDeletechildgroupInfoMsg").addClass("alert-success");
                $("#confirmbtndeletechigrp").addClass('hidden');
            }
            else {

                $("#divDeletechildgroupInfoMsg").text(addFailMsg);
                $("#divDeletechildgroupInfoMsg").addClass("alert-danger");
                $("#divDeletechildgroupInfoMsg").removeClass("hidden alert-success");
                $("#confirmbtndeletechigrp").addClass('hidden');
            }
           
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          
            $("#divDeletechildgroupInfoMsg").text(addFailMsg);
            $("#divDeletechildgroupInfoMsg").addClass("alert-danger");
            $("#divDeletechildgroupInfoMsg").removeClass("hidden alert-success");
            $("#confirmbtndeletechigrp").addClass('hidden');
        }
    });

}