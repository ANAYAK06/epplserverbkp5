$(document).ready(function () {
    $("#divChangePwd").addClass("hidden");
    $("#ModalChangePwdFirsttime").on("hidden.bs.modal", function () {       
        var logintype = $("#session").val();
        //var logintype = '@Request.RequestContext.HttpContext.Session["LoginType"]';
        if (logintype === 'Role') {
            //window.location.href = "https://esselv2.esselprojects.com/Login/EmployeeInformation";
            window.location.href = "http://esseltest.esselprojects.com/Login/EmployeeInformation";
        }
        else {
            //window.location.href = "https://esselv2.esselprojects.com/Login/AuthenticateLogin";
            window.location.href = "http://esseltest.esselprojects.com/Login/AuthenticateLogin";
        }

    });

    $("#ModalEmpChangePwd").on("hidden.bs.modal", function () {
       // var logintype = $("#session").val();
        //var logintype = '@Request.RequestContext.HttpContext.Session["LoginType"]';
        //if (logintype === 'Role') {
        //    window.location.href = "https://esselv2.esselprojects.com/Login/EmployeeInformation";
        //}
        //else {
        //window.location.href = "https://esselv2.esselprojects.com/Login/AuthenticateLogin";
        window.location.href = "http://esseltest.esselprojects.com/Login/AuthenticateLogin";
       // }

    });
    $("#ModalRoleChangePwd").on("hidden.bs.modal", function () {
        var changed = $("#pwdchanged").val();
        // var logintype = '@Request.RequestContext.HttpContext.Session["LoginType"]';
        //if (logintype === 'Role') {
        //    window.location.href = "https://esselv2.esselprojects.com/Login/EmployeeInformation";
        //}
        //else {
        //window.location.href = "https://esselv2.esselprojects.com/Login/RoleLogout";
        // window.location.href = "https://localhost:65438/Login/Rolelogin";
        //}

        //$.ajax({
        //    url: '/Login/Rolelogin',
        //    success: function (data) { /*alert(data);*/ },
        //    statusCode: {
        //        404: function (content) { alert('cannot find resource'); },
        //        500: function (content) { alert('internal server error'); }
        //    },
        //    error: function (req, status, errorObj) {
        //        // handle status === "timeout"
        //        // handle other errors
        //    }
        //});
        //$("#ModalRolelogin1").show();
        //if () { }
        //window.location.href = "@Url.Action("Rolelogin", "Login")";

        //window.location.href = "https://esselv2.esselprojects.com/Login/EmployeeInformation";
        window.location.href = "http://esseltest.esselprojects.com/Login/EmployeeInformation";
    });
});

//Forgot Password
function SubmitForgotPassword() {
    isValid = true;
    var errorMsg = "";
    var logintype = "Role";
    
    var user= $("#txtFPUsername").val();
    if (user === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Username</p>";
        isValid = false;
    }
   
    if (!isValid) {

        $("#divFPInfoMsg").text("");
        $("#divFPInfoMsg").append("<div style='align:center'>" + errorMsg + "</div>");
        $("#divFPInfoMsg").addClass("alert-danger");
        $("#divFPInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divFPInfoMsg").text("");
        $("#divFPInfoMsg").addClass("hidden");

        $.ajax({
            type: "POST",
            url: "/Login/GetUserbyUsername",
            data: '{Username:"' + user + '",LoginType:"' + logintype + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var count1 = Object.keys(response).length;
                var msg = "";
                if (count1 > 0) {
                    var pwd = response.Password;
                    var email = response.workemail;
                    if (pwd !== '' && pwd !== null) {
                        SendEmail(user, pwd, email, logintype);
                    }
                }
                else {
                    $("#divFPInfoMsg").text("");
                    $("#divFPInfoMsg").append("<div style='align:center'>Please Enter Valid Username</div>");
                    $("#divFPInfoMsg").addClass("alert-danger");
                    $("#divFPInfoMsg").removeClass("hidden alert-success");
                }
                
                //removeSpinner($('#ajax-container'), function () {
                //    $('#ajax-container').html('Content loaded.');
                //});
            },
            failure: function (response) {
                $("#divFPInfoMsg").text("");
                $("#divFPInfoMsg").append("<div style='align:center'>Please Enter Valid Username</div>");
                $("#divFPInfoMsg").addClass("alert-danger");
                $("#divFPInfoMsg").removeClass("hidden alert-success");
            },
            error: function (response) {
                $("#divFPInfoMsg").text("");
                $("#divFPInfoMsg").append("<div style='align:center'>Please Enter Valid Username</div>");
                $("#divFPInfoMsg").addClass("alert-danger");
                $("#divFPInfoMsg").removeClass("hidden alert-success");
            }
        });
    }


}



function SendEmail(Username, Password, email, logintype) {

    ///var decodedpwd = window.atob(Password);
   // alert(decodedpwd);

    $.ajax({
        type: "POST",
        url: "/Login/SendEmail",
        data: '{Username:"' + Username + '",Password:"' + Password + '",email:"' + email + '",logintype:"' + logintype + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.saveStatus === "Sent") {
                $("#btnsendemail").prop('disabled', true);
                $("#divFPInfoMsg").text("Password Sent to Registered Email");
                $("#divFPInfoMsg").removeClass("hidden alert-danger");
                $("#divFPInfoMsg").addClass("alert-success");
            }
           
            else {
                $("#btnsendemail").prop('disabled', true);
                $("#divFPInfoMsg").text(response.saveStatus);
                $("#divFPInfoMsg").addClass("alert-danger");
                $("#divFPInfoMsg").removeClass("hidden alert-success");
            }

            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});

            $("#btnsendemail").prop('disabled', true);
            $("#divFPInfoMsg").text(addFailMsg);
            $("#divFPInfoMsg").addClass("alert-danger");
            $("#divFPInfoMsg").removeClass("hidden alert-success");
        }
    });

}




function SubmitChangePassword(LoginType) {  
    isValid = true;
    var errorMsg = "";
    var oldpwd = $("#txtoldPwd").val();    
    var pwd = $("#txtNewPwd").val();
    var cpwd = $("#txtNewConfPwd").val();
    var CurrentPwd = $("#txtCurrentpwd").val();
    if (oldpwd === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Current Password</p>";
        isValid = false;
    }   
    else if (CurrentPwd !== oldpwd) {
        errorMsg += "<p style='margin-top:-5px!important;'>Incorrect Current Password</p>";
        isValid = false;
    }
    
    if (pwd === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter New Password</p>";
        isValid = false;
    }
    if (cpwd === "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Confirm New Password</p>";
        isValid = false;
    }
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
    if (passed < 3 && pwd !== "") {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Valid New Password</p>";
        isValid = false;
    }
    if (pwd !== "" && cpwd !== ""&& pwd !== cpwd) {
        errorMsg += "<p style='margin-top:-5px!important;'>Enter Confirm Password Not Matching With the new Password</p>";
        isValid = false;
    }    
    if (!isValid) {
        var finalerror1 = "<div style='align:center'><p>Please enter all required fields!</p>";
        $("#divChangePwdInfoMsg").text("");
        $("#divChangePwdInfoMsg").append(finalerror1 + errorMsg + "</div>");
        $("#divChangePwdInfoMsg").addClass("alert-danger");
        $("#divChangePwdInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divChangePwdInfoMsg").text("");
        $("#divChangePwdInfoMsg").addClass("hidden");

        var encodedpwd = window.btoa($("#txtNewPwd").val());      
        var updateUser = {
            Username: $("#txtupUserid").val(),            
            Password: encodedpwd,
            LoginType: LoginType
        };
        $("#btnSubmitNewPwd").prop("disabled", true);
        addFailMsg = "Error Occurred While Updating Password";
        addSuccessMsg = "Password Updated Successfully.";
        $.ajax({
            type: "POST",
            url: "/Login/UpdatePassword",
            data: JSON.stringify({ usr: updateUser }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.saveStatus === "Updated") {                  
                    $("#divChangePwdInfoMsg").text(addSuccessMsg);
                    $("#divChangePwdInfoMsg").removeClass("hidden alert-danger");
                    $("#divChangePwdInfoMsg").addClass("alert-success");
                    $("#pwdchanged").val("1");
                }
                else {              
                    $("#btnSubmitNewPwd").prop("disabled", false);
                    $("#divChangePwdInfoMsg").text(addFailMsg);
                    $("#divChangePwdInfoMsg").addClass("alert-danger");
                    $("#divChangePwdInfoMsg").removeClass("hidden alert-success");
                }                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {  
                $("#btnSubmitNewPwd").prop("disabled", false);
                $("#divChangePwdInfoMsg").text(addFailMsg);
                $("#divChangePwdInfoMsg").addClass("alert-danger");
                $("#divChangePwdInfoMsg").removeClass("hidden alert-success");
            }
        });


    }

}

function ValidateConfirmPassword() {
    var pwd = $("#txtNewPwd").val();
    var Confpwd = $("#txtNewConfPwd").val();
    if (pwd != Confpwd) {
        $("#divChangePwdInfoMsg").text("");
        $("#divChangePwdInfoMsg").append("<div>Confirm Password not matching with Password</div>");
        $("#divChangePwdInfoMsg").addClass("alert-danger");
        $("#divChangePwdInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else {
        $("#divChangePwdInfoMsg").text("");
        $("#divChangePwdInfoMsg").addClass("hidden");
    }

}

function ChngPasswordValidator(txt) {
   
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
        $("#divChangePwdInfoMsg").text("");
        $("#divChangePwdInfoMsg").append("<div>Password must contain atleast 6 characters</div>");
        $("#divChangePwdInfoMsg").addClass("alert-danger");
        $("#divChangePwdInfoMsg").removeClass("hidden alert-success");
        return false;
    }
    else if (passed > 3) {
        //alert("Valid");
        $("#divChangePwdInfoMsg").text("");
        $("#divChangePwdInfoMsg").addClass("hidden");
    }
    else {
        $("#divChangePwdInfoMsg").text("");
        $("#divChangePwdInfoMsg").append("<div>Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,></div>");
        $("#divChangePwdInfoMsg").addClass("alert-danger");
        $("#divChangePwdInfoMsg").removeClass("hidden alert-success");
        //alert("Password must contain at least 1 capital letter,\n\n1 small letter, 1 number and 1 special character.\n\nFor special characters you can pick one of these -,(,!,@,#,$,),%,<,>");
        return false;
    }
}
function SubmitLogin() {

    var username = $("#txtLoginUsername").val();
    var password = $("#txtLoginPwd").val();

    //if (username === "") {
    //    //errorMsg += "<p style='margin-top:-5px!important;'>Enter New Password</p>";
    //    //isValid = false;
    //    alert('Enter Username');
    //}
    //if (password === "") {
    //    //errorMsg += "<p style='margin-top:-5px!important;'>Enter New Password</p>";
    //    //isValid = false;
    //    alert('Enter Passwrod');
    //}
    var isfirsttime = false;
    $.ajax({
        type: "POST",
        url: "/Login/CheckUser",
        data: '{Username:"' + username + '", Pwd:"' + password + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
           
            var userstatus = response.UserStatus;
            var isfirsttimelogin = response.Isfirsttimelogin;
            var isfirmexist = response.Isfirmexist;         
            //if (userstatus === false) {
            //    alert("Username and/or password is incorrect.");
               
            //}
           
                if (isfirsttimelogin === true) {
                    $("#divChangePwd").removeClass("hidden");
                   
                    $("#txtfirstime").val("true");
                   
                }
                else {
                    $("#divChangePwd").addClass("hidden");                   
                    $("#txtfirstime").val("false");
                      
                    //RedirectAfterLogin();                  
                }

            //}
           
            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});
        },
        failure: function (response) {
            alert(response.responseText);
            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});
        },
        error: function (response) {
            alert(response.responseText);
            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});
        }
    });
   
    var submit = true;
    var first = $("#txtfirstime").val();
    if (first === "true")
        submit = false;
    else
        submit = true;

    //alert(submit);
    return submit;
}

function RedirectAfterLogin() {
    var username = $("#txtLoginUsername").val();
    var password = $("#txtLoginPwd").val();
    $.ajax({
        type: "POST",
        url: "/Login/AuthenticateLogin",
        data: '{Username:"' + username + '", Pwd:"' + password + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
           
            
            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});
        },
        failure: function (response) {
            alert(response.responseText);
            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});
        },
        error: function (response) {
            alert(response.responseText);
            //removeSpinner($('#ajax-container'), function () {
            //    $('#ajax-container').html('Content loaded.');
            //});
        }
    });
}