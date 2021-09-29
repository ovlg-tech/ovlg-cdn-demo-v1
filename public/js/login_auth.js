jQuery("#client_submit").on('click',function() {
    $('#message_div').hide();
    var client_email = jQuery('#client_email').val();
    var pass = jQuery('#client_password').val();

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(client_email.length < 1 || pass.length < 1 ){
        $('#message_div').html('Email/Password can not be empty');
        $('#message_div').show();
        return false;
    }
    if(!regex.test(client_email)){
        $('#message_div').html('Please put correct email address');
        $('#message_div').show();
        return false;
    }

    console.log(client_email+' '+pass);

    $.ajax({
        type: 'POST',
        url:  'https://www.ovlg.com/clients/ajax_login',
        data: {client_email: client_email, pass: pass,flag: 'client'},
        crossDomain: true,
        dataType: 'json',
        encode: true,
        success: function (data) {
            if (data.status == false) {
                $('#message_div').html(data.message);
                $('#message_div').show();
                console.log(data);
            } else {
                console.log(data);
                if(data.user_type == 'client'){
                    window.location.href = "https://www.ovlg.com/clients/index.php";
                }else if (data.user_type == 'lead') {
                    window.location.href = "https://www.ovlg.com/clients-intake/index.php";
                }else if (data.user_type == 'bankruptcy') {
                    window.location.href = "https://www.ovlg.com/client/bkch7/marketplace";
                }else if (data.user_type == 'attorney') {
                    window.location.href = "https://www.ovlg.com/attorneys/cpanel";
                } else {
                    $('#message_div').html('Something went wrong, please try again later');
                    $('#message_div').show();
                }
                
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(data);
        }
    });
});


jQuery("#attorney_submit").on('click',function() {
    $('#attorney_message_div').hide();
    var client_email = jQuery('#attorney_email').val();
    var pass = jQuery('#attorney_password').val();

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(client_email.length < 1 || pass.length < 1 ){
        $('#attorney_message_div').html('Email/Password can not be empty');
        $('#attorney_message_div').show();
        return false;
    }
    if(!regex.test(client_email)){
        $('#attorney_message_div').html('Please put correct email address');
        $('#attorney_message_div').show();
        return false;
    }

    console.log(client_email+' '+pass);

    $.ajax({
        type: 'POST',
        url:  'https://www.ovlg.com/clients/ajax_login',
        data: {client_email: client_email, pass: pass, flag: 'attorney'},
        crossDomain: true,
        dataType: 'json',
        encode: true,
        success: function (data) {
            if (data.status == false) {
                $('#attorney_message_div').html(data.message);
                $('#attorney_message_div').show();
                console.log(data);
            } else {
                console.log(data);
                if(data.user_type == 'client'){
                    window.location.href = "https://www.ovlg.com/clients/index.php";
                }else if (data.user_type == 'lead') {
                    window.location.href = "https://www.ovlg.com/clients-intake/index.php";
                }else if (data.user_type == 'bankruptcy') {
                    window.location.href = "https://www.ovlg.com/client/bkch7/marketplace";
                }else if (data.user_type == 'attorney') {
                    window.location.href = "https://www.ovlg.com/attorneys/cpanel";
                } else {
                    $('#attorney_message_div').html('Something went wrong, please try again later');
                    $('#attorney_message_div').show();
                }
                
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(data);
        }
    });
});