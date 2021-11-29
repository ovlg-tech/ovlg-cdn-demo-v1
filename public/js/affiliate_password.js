jQuery("#ovlg-affiliate-users-reset-pwd").submit(function (e) {
    e.preventDefault();
    $("#edit-submit").prop("disabled", true);
  
    var email = jQuery("#edit-email").val();
    jQuery.ajax({
      type: "POST",
      url: "https://www.ovlg.com/affiliate/retrieve-password/api",
  
      data: {
        email: email
      },
      success: function (data) {
        var data= JSON.parse(data);
        if (data.success && data.error=='') {
          jQuery("#display_msg").css("color", "green");
          jQuery("#display_msg").html(data.success);
        } else {
          jQuery("#display_msg").css("color", "red");
          jQuery("#display_msg").html(data.error);
        }
      },
      error: function (error) {
        console.log(error);
      },
    });
    $("#edit-submit").prop("disabled", false);
  });
  