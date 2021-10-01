function phoneMask(e,keyCode) {
  //console.log(keyCode);
  if (keyCode == 8 || keyCode == 46) {
    // Do stuff...
  }
  else
  {
    var getthevalue = jQuery(e).attr("id");
    var num = jQuery("#" + getthevalue)
      .val()
      .replace(/\D/g, "");
    var newnum =
      num.substring(0, 3) + "-" + num.substring(3, 6) + "-" + num.substring(6, 10);
  
    if (newnum == "--") {
      newnum = "";
    }
    jQuery("#" + getthevalue).val(newnum);
  }

}

jQuery('#ovlg-user-registration-form').submit(function(e) 
{
  e.preventDefault();
  $("#edit-submit--2").prop('disabled', true);
 var name =jQuery('#edit-name--2').val();
 var arrayName=name.split(' ');
 var FirstName='';
 var MiddleName='';
 var LastName='';
 var StartUrl='';
 if(typeof arrayName[0]!=="undefined"){
  FirstName=arrayName[0];
  StartUrl=ucFirst(FirstName);
  }
  if(typeof arrayName[2]!=="undefined"){
  MiddleName=arrayName[1];
  LastName=arrayName[2];
  StartUrl=StartUrl+'-'+ucFirst(MiddleName)+'-'+ucFirst(LastName);
  }
  if(typeof arrayName[1]!=="undefined" && typeof arrayName[2]==="undefined"){
    LastName=arrayName[1];
    StartUrl=StartUrl+'-'+ucFirst(LastName);
  }

  //console.log(StartUrl);
 var email =jQuery('#edit-email').val();
 var phone =jQuery('#edit-phone').val();
 jQuery.ajax({
    type: 'POST',
    url: 'https://www.ovlg.com/lead/signup/ajax-next',
    
    data: {name:name,email:email,phone:phone},
    success: function (data) {
      if (data.toLocaleLowerCase().indexOf("https://www.ovlg.com/contact-us/people.html")!=-1)
      {
        $('#error_display').html('Thank You! User already exists to activate it, send an email to nick@ovlg.com.');
      }
      else if(data.toLocaleLowerCase().indexOf("https://www.ovlg.com/clients-intake/client-schedule-metting.php?uid=")!=-1)
      {
        var url = new URL(data.toLocaleLowerCase());
        var uid = url.searchParams.get("uid");
        window.location.href='https://www.ovlg.com/start/client-schedule-meeting?uid='+uid + '&start_url='+StartUrl; //'https://www.ovlg.com/start/'+StartUrl;
      }
      else
      {
        if(data=='')
        {
          $('#error_display').html('Some thing went worng');
        }
        else
        {
          $('#error_display').html(data);
        }
      }
    },
     error:function(error)
     {
      console.log(error);
     }
  });
  $("#edit-submit--2").prop('disabled', false);
});
function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

