var moreCreditorCount = 1;
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIbhNLWBt-GCkYn6NNhqAEJlBw_J9-H75_kFBhjAXXgZ7GZf4HKzaiWLIAdrHrvVKOFg/exec'
const googleForm = document.forms['google-sheet']

googleForm.addEventListener('submit', e => {
    e.preventDefault()

    // if (signaturePad.isEmpty()) {
    //    console.log("Please provide a signature first."); return;
    //  } else {
    //  var dataURL = signaturePad.toDataURL("image/jpeg", 1.0);
    //}
    var googleFormData = new FormData(googleForm);

    if(validateSignUpForm(googleFormData)) {

      console.log('sign-up form validated');
      var canvas = document.getElementById("client-sign");
      var dataURL = canvas.toDataURL("image/png");
      //document.write('<img src="'+dataURL+'"/>');

      var user_name = jQuery('#user-name').val();
      saveImageInDB(googleFormData, user_name, dataURL, function(data) {
        console.log(data);
        googleFormData.append('ip-address', data.user_ip);
        googleFormData.append('signature', data.sign_file_name);

        // unbid signature png-image being send to google form 
        googleFormData.delete('sigImage');

        storeDataInGoogleSheet(scriptURL, googleFormData);
      });

    }

})

function validateSignUpForm(formData) {

    var validateMsg = '';
    console.log('return data');

    if(formData.get('payment-type') == 'Bank' && formData.get('account-holder-name') == '') {
      validateMsg = '* Please provide "Bank account details"';openPaymentTab('account-holder-name');
    } else if(formData.get('payment-type') == 'Bank' && formData.get('bank-name') == '') {
      validateMsg = '* Please enter "Bank name"';openPaymentTab('bank-name');
    } else if(formData.get('payment-type') == 'Bank' && formData.get('bank-account-no') == '') {
      validateMsg = '* Please provide "Bank account number"';openPaymentTab('bank-account-no');
    } else if(formData.get('payment-type') == 'Bank' && formData.get('bank-routing-no') == '') {
      validateMsg = '* Please provide "Bank routing number"';openPaymentTab('bank-routing-no');
    } else if(formData.get('payment-type') == 'Card' && formData.get('credit-card-number') == '') {
      validateMsg = '* Please provide "Credit card number"';openPaymentTab('credit-card-number');
    } else if(formData.get('payment-type') == 'Card' && formData.get('card-expiration') == '') {
      validateMsg = '* Please provide "Credit card expiration"';openPaymentTab('card-expiration');
    } else if(formData.get('payment-type') == 'Card' && formData.get('cvv-code') == '') {
      validateMsg = '* Please provide "Credit card CVV code"';openPaymentTab('cvv-code');
    } else if(formData.get('payment-type') == 'Card' && formData.get('credit-card-owner') == '') {
      validateMsg = '* Please provide "Credit card owner name"';openPaymentTab('credit-card-owner');
    } else if(formData.get('terms-check') == null) {
      validateMsg = '* Please accept terms';
      $( "input[name='terms-check']").focus();
    } else {
      validateMsg = '';
    }

  if(validateMsg != '') {
    $("#validateMsg").html(validateMsg).addClass('show');
    return false;
  } else {
    $("#validateMsg").html(validateMsg).removeClass('show');
    return true;
  }
}

function openPaymentTab(elm) {
  $('#flush-collapseFour').collapse('show');
  $( "input[name='"+elm+"']").focus();
}


function storeDataInGoogleSheet(scriptURL, googleFormData) {

  fetch(scriptURL, {
      method: 'POST',
      body: googleFormData
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
    $("#validateMsg").html('<strong>Thank you.</strong> Your information is successfully submitted for review.')
    .removeClass('alert-danger').addClass('alert-success show');
    $('#client_info_submit').addClass('disabled');
  })
  .catch(
    error => console.error('Error!', error.message)
  )

}


function saveImageInDB(googleFormData, user_name, user_sign, callback) {

  // Create a FormData object.
  //var formData = new FormData();
  // Add the file to the AJAX request.
  //formData.append('sigImage', user_sign);
  //formData.append('fileName', user_name.replace(' ', '_')+'.png');


  googleFormData.append('sigImage', user_sign);
  googleFormData.append('fileName', user_name.replace(' ', '_').replace(/[^a-zA-Z\-]/g, "") + '.png');

  jQuery.ajax({
      url: 'https://www.ovlg.com/v3/api/start/public/index.php/api/save-sign',
      data: googleFormData,
      processData: false,
      cache: false,
      contentType : false,
      type: 'POST',
      success: function ( data ) {
          callback(data);
      }
  });
  //e.preventDefault();

}

function getRowId() {
  var curTime =  new Date().getTime();
  jQuery('#row_id').val(curTime);
}

jQuery("#add-creditor").on('click', function()
{
  moreCreditorCount++;
  var moreCretorContent ='<div class="row"><div class="col-12 mt-3"><label htmlFor="creditor-name" class="form-label">'+moreCreditorCount+'. <b>Creditor name</b></label><input type="text" class="form-control" placeholder="Creditor name" name="creditor-name-'+moreCreditorCount+'" /></div><div class="col-12 mt-3"><label htmlFor="notes" class="form-label"><b>Notes</b></label><textarea class="form-control" placeholder="Creditor notes" name="creditor-notes-'+moreCreditorCount+'"></textarea></div></div>';
  if(moreCreditorCount <= 5) {
    jQuery("#more_creditor_section").append(moreCretorContent);
  }
  if(moreCreditorCount >= 5) {
    jQuery(this).addClass('disabled');
  }
});


window.onload = getRowId;

// Swal.fire({
//   position: 'center',
//   icon: 'success',
//   title: 'Registration Successful',
//   showConfirmButton: false,
//   timer: 2000
// }) 