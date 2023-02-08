
$(".errorMsgs").hide();
var regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])(.{8,20}$)/;
$(document).ready(function () {
    $("#submitForm").click(function () {
        var isFormValid = true;
        if ($("#user_name").val() == "") {
            $("#userErrorDiv").show(); 
            isFormValid = false;           
        } else {
            $("#userErrorDiv").hide();            
        }
        if (!regEx.test($("#password").val())) {
            isFormValid = false;
            $("#passErrorDiv").show();
        } else {
            $("#passErrorDiv").hide();
        }
        return isFormValid;
        //todo submit form when the data is valid
     });
});

