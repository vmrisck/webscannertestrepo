

$(document).ready(function () {

   // var session = '<%=Session["USERID"] != null%>';  


    $.ajax({
        type: "POST",
        url: "/Login/CHECKISSESSIONSEXISTS",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {

        },
        complete: function (data) {

        },
        success: function (data) {

            if (data.toString() == 1) {

                $("#BtnLoginNav").show();
                $("#liSignup").show();
                $("#BtnLogOutNav").hide();
                $("#ViewHomeBtn").hide();

            }
            else {

                $("#BtnLoginNav").hide();
                $("#liSignup").hide();
                $("#BtnLogOutNav").show();
                $("#ViewHomeBtn").show();

            }
        },
        error: function (data, success, error) {
            alert(error);
        },
        failure: function (response) {

            alert(response.d);
        }
    });

    //if (session == 'False') {
    //    $("#BtnLoginNav").show();
    //    $("#liSignup").show();
    //    $("#BtnLogOutNav").hide();
    //    $("#ViewHomeBtn").hide();
    //} else {
    //    $("#BtnLoginNav").hide();
    //    $("#liSignup").hide();
    //    $("#BtnLogOutNav").show();
    //    $("#ViewHomeBtn").show();
    //}

    $("#ALogout").click(function () {

        CLEARSESSIONS();
    });
});
$(document).contextmenu(function () {
    return false;
});





