
document.write('<script src="../../Scripts/jquery-3.5.1.min.js"></script>');
//document.write('<link href="../../Content/sweetalert.css" rel="stylesheet" />');
//document.write('<link rel="stylesheet" href="../../Content/jquery-ui.css">  ');
//document.write('<script src="../../Scripts/jquery-ui-1.12.1.min.js"></script>');
//document.write('<script src="../../Scripts/bootstrap.min.js"></script>');
//document.write('<script src="../../Scripts/sweetalert.js"></script>');
//document.write('<script src="../../Scripts/sweetalert.min.js"></script>');
//=============================================
// Author        -  <ANIL KUMAR>
// Created On    -  <05/23/2019, Thursday>
// Description   -  <To Clear all fields> 
//=============================================
function ClearCtrls() {
    $("input[type='text']").each(function () {
        $(this).val('');
        $(this).css('border-color', '');
    })

    $("input[type='textarea']").each(function () {
        $(this).val('');
        $(this).css('border-color', '');
    })

    $('select').each(function () {
        $(this).val(0);
        $(this).css('border-color', '');
    })

    $("input[type='password']").each(function () {
        $(this).val('');
        $(this).css('border-color', '');
    })

    $("input[type='email']").each(function () {
        $(this).val('');
        $(this).css('border-color', '');
    })

    $("textarea").each(function () {
        $(this).val('');
        $(this).css('border-color', '');
    })
}

//=============================================
// Author        -  <ANIL KUMAR>
// Created On    -  <05/23/2019, Thursday>
// Description   -  <To disable the Controls> 
//=============================================
function DisableCtrls() {
    $("input[type='text']").each(function () {
        $(this).prop("disabled", true);
        $(this).css('border-color', '');
    })

    $('select').each(function () {
        $(this).prop("disabled", true);
        $(this).css('border-color', '');
    })

    $("input[type='textarea']").each(function () {
        $(this).prop("disabled", true);
        $(this).css('border-color', '');
    })
}
//=============================================
// Author        -  <ANIL KUMAR>
// Created On    -  <05/23/2019, Thursday>
// Description   -  <To enable the Controls> 
//=============================================
function EnableCtrls() {
    $("input[type='text']").each(function () {
        $(this).prop("disabled", false);
    })

    $('select').each(function () {
        $(this).prop("disabled", false);
    })
    $("input[type='textarea']").each(function () {
        $(this).prop("disabled", false);
    })
}

function MakeInputWidth() {
    $("input[type='text']").each(function () {
        $(this).addClass('TextBox form-control input-sm');
    })

    $('select').each(function () {
        $(this).addClass('TextBox form-control input-sm');
        $(this).css('font-size', '11px');
    })

    $("input[type='password']").each(function () {
        $(this).addClass('TextBox form-control input-sm');
    })

    $("input[type='email']").each(function () {
        $(this).addClass('TextBox form-control input-sm');
    })

    $("input[type='file']").each(function () {
        $(this).addClass('TextBox form-control input-sm');
    })
}

//=================================================================
// Author        -  <ANIL KUMAR>
// Created On    -  <05/23/2019, Thursday>
// Description   -  <To Validate E-MailId provided by the Users> 
//=================================================================
function validateEmail(emailField) {
    if (emailField.value == '') { // If the value provided is null the program will return
        return true;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value) == false) { // condition for checking the Invalid Email Id given by the User
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Invalid Email Address'
        })
        emailField.value = '';
        return false;
    }
    return true;
}
//=====================================================================
// Author        -  <ANIL KUMAR>
// Created On    -  <05/23/2019, Thursday>
// Description   -  <To Validate mobile number provided by the Users> 
//======================================================================
function validateMobile(MobileField) {

    if (MobileField.value == '') {
        return true;
    }
    var reg = /^\d{10}$/;
    if (reg.test(MobileField.value) == false) {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Please enter valid Mobile Number'
        })
        MobileField.value = '';
        return false;
    }
    return true;
}

function isOnlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function onlyLetter(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    }
    else {
        var keyChar = String.fromCharCode(charCode);
        var re = /^[a-zA-Z ]+$/
        return re.test(keyChar);
    }
}
function IsAlphaNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode == 32));
    return ret;
}
//=====================================================================
// Author        -  <ANIL KUMAR>
// Created On    -  <05/23/2019, Thursday>
// Description   -  <To check the password strength given by the user> 
//======================================================================
function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }
    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;
    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
        passed++;
    }

    //Display status.
    var color = "";
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strength = "Strong";
            color = "green";
            break;
        case 5:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;

}
//============================================
// Author        -  <PRASANTH>
// Created On    -  <05/22/2019, Wednesday>
// Description   -  <To Enter PickUp Values> 
//============================================

function FILL_PICKUPVALUES(DrpCtrl, PICKUP_TYPE, PARENT_ID) {

    $.ajax({
        type: "POST",
        url: "/Master/FILL_PICKUPVALUES",
        data: "{PICKUP_TYPE:" + PICKUP_TYPE + " ,PARENT_ID:" + PARENT_ID + " }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async:false,
        success: function (data) {
            $('#' + DrpCtrl).empty();
            var Selec = new Option("Select", "0");
            $("#" + DrpCtrl).append(Selec);
            for (var i = 0; i < data.length; i++) {

                var opt = new Option(data[i].PICKUPDESCRIPTION, data[i].PICKUPCODE);
                $("#" + DrpCtrl).append(opt);
            }
        },
        error: function (data, success, error) {

            alert(error);
        }
    });

}
//-----------------------------------------------------------------------------------
//Author : Shyamly
//Created Date : 27-05-2019
//Description : To validate Old Password Input field empty or not
//------------------------------------------------------------------------------------
function VALIDATEOLDPASSWORD() {
    var isValid = true;
    if ($('#txtOldPassword').val().trim() == "") {
        $('#txtOldPassword').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#txtOldPassword').css('border-color', 'lightgrey');
    }
    return isValid;
}
//-----------------------------------------------------------------------------------
//Author : Shyamly
//Created Date : 27-05-2019
//Description : To validate User Old Password
//------------------------------------------------------------------------------------
function VALIDATEUSEROLDPASSWORD() {
    var res = VALIDATEOLDPASSWORD();

    if (res == false) {
        return false;
    }
    var Status = "";
    var StatusCode;
    var OldPassword = $('#txtOldPassword').val();
    var UserType = "B";
    $.ajax({
        //cache: false,
        url: "/ChangePassword/VALIDATEOLDPASSWORD",
        data: "{USERTYPE:'" + UserType + "',OLDPASSWORD:'" + OldPassword + "'}",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        success: function (Result) {

            for (var i in Result) {
                Status = Result[i].STATUS;
                StatusCode = Result[i].STATUSCODE;
            }
            if (StatusCode == "0") {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: Status,
                    focus: $('#txtOldPassword').focus()
                })
                $('#txtOldPassword').val('');
                return false;
            }

        },
        error: function (data, success, error) {

            alert(error);
        },
        complete: function (data) {

        }
    });
}
//-----------------------------------------------------------------------------------
//Author : Shyamly
//Created Date : 26-05-2019
//Description : To validate All the fields are Empty or not in change password Form
//------------------------------------------------------------------------------------
function VALIDATECHANGEPASSWORD() {

    var isValid = true;
    if ($('#txtOldPassword').val().trim() == "") {
        $('#txtOldPassword').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#txtOldPassword').css('border-color', 'lightgrey');
    }

    if ($('#Txtnewpassword').val().trim() == "") {
        $('#Txtnewpassword').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Txtnewpassword').css('border-color', 'lightgrey');
    }
    if ($('#TxtConfirmPassword').val().trim() == "") {
        $('#TxtConfirmPassword').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#TxtConfirmPassword').css('border-color', 'lightgrey');
    }

    return isValid;
}
//-------------------------------------------------
//Author : Shyamly
//Created Date : 26-05-2019
//Description : To Change the User's Password
//--------------------------------------------------
function CHANGEPASSWORD() {

    var res = VALIDATECHANGEPASSWORD();
    if (res == false) {
        return false;
    }
    var Status = "";
    var StatusCode;
    var UserType = "B";
    var Password = $('#Txtnewpassword').val();
    var OldPassword = $('#txtOldPassword').val();

    $.ajax({
        //cache: false,
        url: "/ChangePassword/USERCHANGEPASSWORD",
        data: "{OLDPASSWORD:'" + OldPassword + "',NEWPASSWORD:'" + Password + "',USERTYPE:'" + UserType + "'}",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        success: function (Result) {

            for (var i in Result) {
                Status = Result[i].STATUS;
                StatusCode = Result[i].STATUSCODE;
            }
            if (StatusCode == "1") {
                swal({
                    type: 'success',
                    title: 'Success',
                    text: Status,
                    focus: $('#txtOldPassword').focus()
                })
            }
            else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: Status,
                    focus: $('#txtOldPassword').focus()
                })
            }

        },
        error: function (data, success, error) {

            alert(error);
        },
        complete: function (data) {
            ClearCtrls();
        }
    });
}
//-------------------------------------------------
//Author : Prasanth
//Created Date : 27-05-2019
//Description : To Dilplay Login Info 
//--------------------------------------------------
function USERINFO() {
    $.ajax({
        cache: false,
        url: "/Home/GetUserInfo",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        beforeSend: function (data) {

        },
        success: function (data) {

            for (var i in data) {
                $('#Lbluname').html(data[i].USERNAME);
                $('#LblUserrole').html(data[i].ROLE);
            }

        },
        complete: function (data) {

        },
        error: function (data, success, error) {

            alert(error);
        }

    });
}
//=============================================================
// Author       :   <GOPAKUMAR TV>
// Created On   :   <05/29/2019, Wednesday>
// Description  :   <To authorize email Verification>
//=============================================================
function VERIFYEMAIL(TOKEN) {

    $.ajax({
        cache: false,
        url: "/AccountActivation/VERIFYEMAIL",
        data: "{CODE:'" + TOKEN + "'}",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        beforeSend: function (data) {
            $('#overlay').fadeOut();
        },
        success: function (data) {
            for (var x in data) {
                if (data[x].STATUSCODE == '1') {
                    $("#DivStatusSuccess").show();
                    $("#DivStatusFail").hide();
                    $("#LblStatusSuccess").html(data[x].MSG);
                }
                else {
                    $("#DivStatusFail").show();
                    $("#DivStatusSuccess").hide();
                    $("#LblStatusFail").html(data[x].MSG);
                }
            }
        },
        complete: function (data) {
           
        },
        error: function (data, success, error) {
            alert(error);
        }
    });
}
//====================================================================
// Author       :   <GOPAKUMAR TV>
// Created On   :   <05/29/2019, Thursday>
// Description  :   <To seperate query string from the Current page>
//====================================================================
function GetUrlParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('?');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
//-------------------------------------------------
//Author : Prasanth
//Created Date : 07-07-2019
//Description : To Dilplay DASHBOARD
//--------------------------------------------------
function DASHBOARD() {
    $.ajax({
        cache: false,
        url: "/Home/SHOWDASHBOARD",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        beforeSend: function (data) {

        },
        success: function (data) {

            for (var i in data) {
                $('#UpComing').html(data[i].AUCTION);
                $('#MyBids').html(data[i].BID);
                $('#MyFav').html(data[i].FAV);
            }

        },
        complete: function (data) {
            $.ajax({
                cache: false,
                url: "/Home/SHOWMYFAVOURTES",
                type: "GET",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
                beforeSend: function (data) {
                    $('#Loader').show();
                    $('#TblMyfavourites').empty();
                    if ($.fn.DataTable.isDataTable('#TblMyfavourites')) {
                        $("#TblMyfavourites").DataTable().destroy();
                    }
                },
                success: function (data) {

                    $('#TblMyfavourites').empty();
                    $("#TblMyfavourites").addClass('table table-bordered table-striped');
                    $("#TblMyfavourites").css('width', '100%');
                    $("#TblMyfavourites").append('<thead class="Tblbackclr"></thead>');

                    $("#TblMyfavourites").dataTable({
                        searching: false,
                        "bLengthChange": false,
                        "bInfo": false,
                        "paginate": false,
                        "aaData": data,
                        "columns": [
                                  { "defaultContent": "", title: "SLNO" },
                                    { 'data': 'Auc_TypeDesc', title: "Auction Type" },
                                  { 'data': 'Description', title: "Description" },
                                 
                                  { 'data': 'ReservePrice', title: "Reverse Price " },
                                  { 'data': 'EmdAmount', title: "Emd Amount" },
                                  { 'data': 'EmdDate', title: "EMD Date" },
                                  { 'data': 'AucDate', title: "Auction Date" }
                                
                                
                        ],
                        "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                            var info = $(this).DataTable().page.info();
                            $("td:nth-child(1)", nRow).html(info.start + iDisplayIndex + 1);
                            return nRow;
                        },
                        "columnDefs": [{
                            "targets": [2],
                            "width": "35%"
                        }
                        ]
                    });


                    $('#Loader').hide();
                },
                complete: function (data) {

                },
                error: function (data, success, error) {

                    //alert(error);
                }

            });
        },
        error: function (data, success, error) {

            //alert(error);
        }

    });
}
//-=============================================
// Author       : <ANJU PAUL>
// Created On   : <11/06/2019>
// Description  : <To GET MY BID ETAILS>
//==============================================
function My_BIDDETAILS() {

    if ($.fn.DataTable.isDataTable('#TblMybiddetails')) {
        $("#TblMybiddetails").DataTable().destroy();
    }
    $.ajax({
        cache: false,
        url: "/Bidder/GET_MYBIDDETAILS",
        data: "{}",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        beforesend: function (data) {
            //$('#Loader').show();
            $('#TblMybiddetails').empty();
            if ($.fn.DataTable.isDataTable('#TblMybiddetails')) {
                $("#TblMybiddetails").DataTable().destroy();
            }
        },

        success: function (data) {
            $('#TblMybiddetails').empty();
            $("#TblMybiddetails").addClass('table table-bordered table-striped');
            $("#TblMybiddetails").css('width', '100%');
           // $("#TblMybiddetails").append('<thead class="Tblbackclr"><tr><th>SLNO #</th><th>AUCTION DISCRIPTION </th><th> START DATE </th><th> END DATE </th><th> AVAILABILITY STATUS </th><th>STATUS</th><th></th><th>SELECT</th></tr></thead>');


            $("#TblMybiddetails").dataTable({
                searching: false,
                "bLengthChange": false,
                "bInfo": false,
                "bPaginate": false,
                "pageLength": 10,
                "lengthMenu": [10, 25, 100],
                "aaData": data,
                "columns": [
                          { "defaultContent": "", title: "SLNO" },
                          { 'data': 'AUC_TYPE_DESC', title: "AUCTION TYPE" },
                          { 'data': 'AUC_BREIF', title: "AUCTION DISCRIPTION" },
                         
                          { 'data': 'AUC_START_DATE', title: "START DATE" },
                          { 'data': 'AUC_END_DATE', title: "END DATE" },
                          { 'data': 'AUC_AVAILABILITYSTATUS', title: "AVAILABILITY STATUS" },
                          { 'data': 'AUC_WINNER_STATUS', title: "STATUS" },
                          { 'data': 'AUC_ID', title: "AUC_ID" },
                          { "defaultContent": "", title: "SELECT" },
                          //{ 'data': 'AUC_TYPE', title: "" },
                ],
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                    var info = $(this).DataTable().page.info();
                    $("td:nth-child(1)", nRow).html(info.start + iDisplayIndex + 1);
                    return nRow;
                },
                columnDefs: [
                     {
                         targets: [8],                        
                         render: function (data, type, row, val) {
                             return "<button id='ButView' type='button' class='btn-dark'  ><span class='glyphicon glyphicon-eye-open'></span></button>";


                         }
                     },
                      {
                          "targets": [2],
                          "width": "35%"
                      },
                      {
                          "targets": [7],
                          "visible": false
                      },
                       //{
                       //    "targets": [9],
                       //    "visible": false
                       //},
                ]

            });


        },

        complete: function (data) {

            var t = $('#TblMybiddetails').DataTable();
            $('#TblMybiddetails').on('click', '.btn-dark', function (e) {
               
                var AUC_ID = t.row($(this).parents('tr')).data()["AUC_ID"];
               
                GET_BIDDINGDETAILS(AUC_ID);
            });

        },

        error: function (data, success, error) {

        }
    });
}

//-=============================================
// Author       : <ANIL>
// Created On   : <08/06/2019>
// Description  : <To CHECK IS SESSIONS EXISTS>
//==============================================
function CHECKISSESSIONSEXISTS() {

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
                window.location.href = "/Home/SessionOut";
            }
            else {
                //CreateMenu('');
            }
        },
        error: function (data, success, error) {
            alert(error);
        },
        failure: function (response) {

            alert(response.d);
        }
    });

}

//-=============================================
// Author       : <ANIL>
// Created On   : <08/06/2019>
// Description  : <AUTOSESSIONOUT>
//==============================================

function AUTOSESSIONOUT() {
    var IDLE_TIMEOUT = 1200; //seconds
    $("#Sessiontimeleftspan").hide();

    var _idleSecondsTimer = null;
    var _idleSecondsCounter = 0;

    document.onclick = function () {
        _idleSecondsCounter = 0;
    };

    document.onmousemove = function () {
        _idleSecondsCounter = 0;
    };

    document.onkeypress = function () {
        _idleSecondsCounter = 0;
    };

    _idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);

    function CheckIdleTime() {
        _idleSecondsCounter++;
        //alert(_idleSecondsCounter);

        if (_idleSecondsCounter == 900) {       

            myTimer();        

        }
        if (_idleSecondsCounter < 900) {
            $("#Sessiontimeleftspan").hide();

        }

  if (_idleSecondsCounter >= IDLE_TIMEOUT) {
            window.clearInterval(_idleSecondsTimer);

      document.location.href = encodeURI("/Home/SessionOut");
  }

    //    var oPanel = document.getElementById("SecondsUntilExpire");
    //    if (oPanel)
    //        oPanel.innerHTML = (IDLE_TIMEOUT - _idleSecondsCounter) + "";

      
  }

}

var timer;
function myTimer() {
    var sec = 300;
    var minutes,
            seconds;
    clearInterval(timer);
    $("#Sessiontimeleftlbl").html(":");
    timer = setInterval(function () {
        //$('#timer').text(sec--);
        sec--;
        minutes = (sec / 60) | 0;
        seconds = (sec % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#Sessiontimeleftlbl").html(minutes + ":" + seconds);

        if (sec == -1) {
            clearInterval(timer);
            //alert('done');
        }
    }, 1000);

    $("#Sessiontimeleftspan").show();

}


//-=============================================
// Author       : <ANIL>
// Created On   : <08/06/2019>
// Description  : <To CLEAR SESSIONS>
//==============================================
function CLEARSESSIONS() {

    $.ajax({
        type: "POST",
        url: "/Login/CLEARSESSIONS",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {

        },
        complete: function (data) {

        },
        success: function (data) {
            window.location.href = "../../";
        },
        error: function (data, success, error) {
            alert(error);
        },
        failure: function (response) {

            alert(response.d);
        }
    });

}
//-=============================================
// Author       : <ANJU PAUL>
// Created On   : <11/06/2019>
// Description  : <To GET BIDDING ETAILS>
//==============================================
function GET_BIDDINGDETAILS(AUC_ID) {
    $("#dvBiddingDetails").modal('show');
    if ($.fn.DataTable.isDataTable('#TblMybiddingdetails')) {
        $("#TblMybiddingdetails").DataTable().destroy();
    }
    $.ajax({
        cache: false,
        url: "/Bidder/GET_BIDDINGDETAILS",
        data: "{AUC_ID:'" + AUC_ID + "'}",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        beforesend: function (data) {
            //$('#Loader').show();
            $('#TblMybiddingdetails').empty();
            if ($.fn.DataTable.isDataTable('#TblMybiddingdetails')) {
                $("#TblMybiddingdetails").DataTable().destroy();
            }
        },

        success: function (data) {
            
            $('#TblMybiddingdetails').empty();
            if ($.fn.DataTable.isDataTable('#TblMybiddingdetails')) {
                $("#TblMybiddingdetails").DataTable().destroy();
            }
            $("#TblMybiddingdetails").addClass('table table-bordered table-striped');
            $("#TblMybiddingdetails").css('width', '100%');
           // $("#TblMybiddingdetails").append('<thead class="Tblbackclr"><tr><th>SLNO #</th><th>BIDDING AMOUNT </th><th> MAKING TIME </th></tr></thead>');
           

            $("#TblMybiddingdetails").dataTable({
                searching: false,
                "bLengthChange": false,
                "bInfo": false,
                "bPaginate": false,
                "pageLength": 10,
                "lengthMenu": [10, 25, 100],
                "aaData": data,
                "columns": [
                        { "defaultContent": "", title: "SLNO #" },
                          { 'data': 'BIDDING_AMT', title: "BIDDING AMOUNT" },
                          { 'data': 'MAKING_TIME', title: "MAKING TIME" },
                            
                ],
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                    var info = $(this).DataTable().page.info();
                    $("td:nth-child(1)", nRow).html(info.start + iDisplayIndex + 1);
                    return nRow;
                },
              
            });


        },

        complete: function (data) {

           

        },

        error: function (data, success, error) {

        }
    });
}


//===========================================================
// Author       :   <ANIL>
// Created On   :   <14/06/2019>
// Description  :   <To CHECK DUPLICATE LOGGIN>
//===========================================================   
function CHECKDUPLICATELOGIN() {

    $.ajax({
        type: "POST",
        url: "/Login/CHECKDUPLICATELOGIN",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {

        },
        complete: function (data) {

        },
        success: function (data) {

            if (data == false) {
                window.location.href = "../../";
            }


        },
        error: function (data, success, error) {
            alert(error);
        },
        failure: function (response) {

            alert(response.d);
        }
    });

}

//===========================================================
// Author       :   <ANIL>
// Created On   :   <14/06/2019>
// Description  :   <CLOSE ALL DUPLICATE LOGGIN>
//===========================================================   
function DUPLICATELOGIN() {
    $.ajax({
        type: "POST",
        url: "/Login/DUPLICATELOGIN",
        data: "{ }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
        },
        complete: function (data) {
            window.location.href = "/Login/Login";
            return;
        },
        error: function (data, success, error) {
            alert(error);
        }
    });
}


//===========================================================
// Author       :   <ANIL>
// Created On   :   <14/06/2019>
// Description  :   <To GET LAST LOGINED IP ADDRES OF CURRENT USER>
//===========================================================  
function GETLASTIPADDRESS() {
    $.ajax({
        type: "POST",
        url: "/Login/GETLASTIPADDRESS",
        data: "{USERTYPE:'B'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
            for (var i in data) {
                $('#lblipaddress').html(data[i].STATUS);
            }
        },
        complete: function (data) {

        },
        error: function (data, success, error) {
            alert(error);
        }
    });
}
//===========================================================
// Author       :   <SHYAMLY>
// Created On   :   <11/07/2019>
// Description  :   <To fill All Bank ID and NAME>
//===========================================================  
function FILL_ALLBANK(DrpCtrl) {

    $.ajax({
        type: "POST",
        url: "/Master/FILL_ALLBANK",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: { '__RequestVerificationToken': $('[name= "__RequestVerificationToken"]').val() },
        async: false,
        success: function (data) {
            $('#' + DrpCtrl).empty();
            var Selec = new Option("Select", "0");
            $("#" + DrpCtrl).append(Selec);
            for (var i = 0; i < data.length; i++) {

                var opt = new Option(data[i].BANKNAME, data[i].BANKID);
                $("#" + DrpCtrl).append(opt);
            }
        },
        error: function (data, success, error) {

            alert(error);
        }
    });
}