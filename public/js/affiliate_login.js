jQuery("#ovlg-affiliate-partners-login-form").submit(function (e) {
  e.preventDefault();
  $("#edit-submit").prop("disabled", true);

  var email = jQuery("#edit-email").val();
  var pass = jQuery("#edit-pass").val();
  jQuery.ajax({
    type: "POST",
    url: "https://www.ovlg.com/affiliate/login/api",

    data: {
      email: email,
      pass: pass,
    },
    success: function (data) {
      var data= JSON.parse(data);
      if (data.success!='' && data.error=='') {
        jQuery("#display_msg").css("color", "green");
        jQuery("#display_msg").html(data.success);
        window.location.href='https://www.ovlg.com/'+data.redirect;
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
