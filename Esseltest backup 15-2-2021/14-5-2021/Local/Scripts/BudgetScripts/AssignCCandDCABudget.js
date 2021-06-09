

function btnCCSubmitData() {
    //alert('button click');  
    var isValid = ValidateCCBudgetDetails();
    if (!isValid) return false;
}
function ValidateCCBudgetDetails() {

    var isValid = true;
    var errorMsg = "Please enter all required fields!\n";
    var CCType = $("#CCTypeddl option:selected").text();
    var subType = $("#SubTypeddl option:selected").text();
    var ccddl = $("#CostCenterddl option:selected").text();
    var year = $("#Yearddl option:selected").text();
    var amount = $("#txtAmount").val();
   // alert(CCType);
    if (CCType == "-Please Select-" || CCType == null) {
        isValid = false;
    }
    else if (CCType == "Performing") {
        if (subType == "-Please Select-") {
            isValid = false;
        }
        else {
            if (ccddl == "-Please Select-") {
                isValid = false;
            }
            else if (amount == "0" || amount == null) {
                isValid = false;
            }

        }

    }
    else if (CCType == "Non Performing" || CCType == "Capital") {

        if (year == "-Please Select-") {
            isValid = false;
        }
        else{
            if(ccddl == "-Please Select-") {
            isValid = false;
        }
        else if (amount == "0" || amount == null) {
            isValid = false;
        }
    }

    }
    if (!isValid) {
        $("#divCCInfoMsg").text(errorMsg);
        $("#divCCInfoMsg").addClass("alert-danger");
        $("#divCCInfoMsg").removeClass("hidden alert-success");
    }    
    else {
        $("#divCCInfoMsg").addClass("hidden");
    }
    //alert(isValid);
    return isValid;

}
function btnDCASubmitData() {
   // alert('button click');
    var isValid = ValidateDCADetails();
    if (!isValid) return false;
}
function ValidateDCADetails() {

    var isValid = true;
    var errorMsg = "Please enter all required fields!\n";
    var DCATypeddl = $("#DCATypeddl option:selected").text();
    var subType = $("#DCASubTypeddl option:selected").text();
    var ccddl = $("#DCACostCenterddl option:selected").text();
    var year = $("#DCAYearddl option:selected").text();
      
    if (DCATypeddl == "-Please Select-" || DCATypeddl == null) {
        isValid = false;
    }
    else if (DCATypeddl == "Performing") {
        if (subType == "-Please Select-") {
            isValid = false;
        }
        else {
            if (ccddl == "-Please Select-") {
                isValid = false;
            }           

        }

    }
    else if (DCATypeddl == "Non Performing" || DCATypeddl == "Capital") {
        if (year == "-Please Select-") {
            isValid = false;
        }
        else {
            if (ccddl == "-Please Select-") {
                isValid = false;
            }
        }      

    }
    if (!isValid) {
        $("#divDCAInfoMsg").text(errorMsg);
        $("#divDCAInfoMsg").addClass("alert-danger");
        $("#divDCAInfoMsg").removeClass("hidden alert-success");
    }
    else {
        $("#divDCAInfoMsg").addClass("hidden");
    }
    return isValid;

}