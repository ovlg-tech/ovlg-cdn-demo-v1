  jQuery('#ovlg-affiliate-partners-registration-form').submit(function(e) 
  {
    e.preventDefault();
    $("#edit-submit").prop('disabled', true);
   var name =jQuery('#edit-name').val();
   var email =jQuery('#edit-email').val();
   var phone =jQuery('#edit-phone').val();
   var pass =jQuery('#edit-pass').val();
   var retypepassword =jQuery('#edit-retypepassword').val();
   jQuery.ajax({
      type: 'POST',
      url: 'https://www.ovlg.com/affiliate/signup/ajax-next',
      
      data: {name:name,email:email,phone:phone,pass:pass,retypepassword:retypepassword},
      success: function (data) {
        if(data.toLocaleLowerCase().indexOf("success")!=-1)
        {
            jQuery('#display_msg').css("color", "green");
            jQuery('#display_msg').html('Successfully Signed up<br \>Affiliate Status : Under Moderation');
        }
        else
        {
            jQuery('#display_msg').css("color", "red");
            jQuery('#display_msg').html(data);
        }
      },
       error:function(error)
       {
        console.log(error);
       }
    });
    $("#edit-submit").prop('disabled', false);
  });

  