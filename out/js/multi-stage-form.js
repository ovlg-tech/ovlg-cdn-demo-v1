


/**
 * signup form multi-stage slider feature.
 * page : https://www.ovlg.com/contact-us/help.html?service_request=bankruptcy
 *
 *
 */

//jQuery time
const email_regx = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
const phone_regx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
var current_fs, next_fs, previous_fs, current_fs_id, next_fs_id, previous_fs_id; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var lead_crm_id;
var dataSet;
var slide_no;

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

jQuery(function() {
    configRangeSlider();
    configDateTimePicker();
    configElementEventListner();

    if (window.location.href.indexOf("?zip=") > -1) {
      var zipCode = getParameterByName('zip');
      jQuery.ajax({
        type: 'GET',
        url: 'https://www.ovlg.com/attorneys/get-state-city/'+zipCode,
        dataType: 'json',
        data: dataSet,
        success: function (data) {
          console.log(data);
          if(data.status=='OK') {
            dataSet = {
              form_stage:'1-location-block',
              zip:data.zip_info.ZipCode,
              city:data.zip_info.City,
              state:data.zip_info.State,
            };
            saveLeadData(dataSet);
            setStateInMapRedirectFromHomePage(data.zip_info.State, data.state_name, data.attorney_count);
            jQuery('#usa_state_map').show();
            jQuery("#1-location-block").css("display","none");
            jQuery("#2-debt-info-block").css("display","block");
          }
        },
      });
    }

    //loadUserData();

    jQuery(".next").on('click', function()  {

        current_fs = jQuery(this).parent();
        next_fs = jQuery(this).parent().nextAll('.active').eq(0);     // next_fs = jQuery(this).parent().next();

        current_fs_id = current_fs.prop('id');
        next_fs_id = next_fs.prop('id');
        //previous_fs_id = previous_fs.prop('id');
        //console.log(current_fs_id, next_fs_id);

        var formValidate = validateMultiStageForm();
        if(formValidate.error == 'error') {
            return;
        }
        // save every form-stage data in DB
        saveLeadData(formValidate.dataSet);

        if(next_fs_id != '1-location-block') {
            jQuery('.progress_set').fadeIn(800);
        }
        else {
            jQuery('.progress_set').fadeOut(800);
        }

        //activate next step on progressbar using the index of next_fs
        jQuery("#progressbar li").removeClass("active");
        if(next_fs_id == '2-debt-info-block' ) {
        slide_no = 0;
        } else if(next_fs_id == '3-other-debt-info-block' || next_fs_id == '4-debt-chapter-info-block' ) {
            slide_no = 1;
        } else if(next_fs_id == '5-personal-info-block') {
            slide_no = 2;
        }
        jQuery("#progressbar li").eq(slide_no).addClass("active");
        //jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");
        //jQuery("#progressbar li").eq(jQuery("fieldset").index(next_fs)).addClass("active");

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale('+scale+')',
                    // 'position': 'absolute'
                });
                next_fs.css({'left': left, 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current_fs.hide();
                animating = false;
                next_fs.fadeIn(800);
            },
            //this comes from the custom easing plugin
            //easing: 'easeInOutBack'
        });
    });

    jQuery(".previous").on('click', function() {
        if(animating) return false;
        animating = true;
        current_fs = jQuery(this).parent();
        previous_fs = jQuery(this).parent().prevAll('.active').eq(0); //previous_fs = jQuery(this).parent().prev();
        current_fs_id = current_fs.prop('id');
        previous_fs_id = previous_fs.prop('id');
        console.log(previous_fs_id);

        if(previous_fs_id != '1-location-block') {
            jQuery('.progress_set').fadeIn(800);
        }
        else {
            jQuery('.progress_set').fadeOut(800);
        }

        //activate next step on progressbar using the index of next_fs
        jQuery("#progressbar li").removeClass("active");
        if(previous_fs_id == '2-debt-info-block' ) {
        slide_no = 0;
        } else if(previous_fs_id == '3-other-debt-info-block' || previous_fs_id == '4-debt-chapter-info-block' ) {
            slide_no = 1;
        } else if(previous_fs_id == '5-personal-info-block') {
            slide_no = 2;
        }
        jQuery("#progressbar li").eq(slide_no).addClass("active");

        //de-activate current step on progressbar
        //jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");
        //jQuery("#progressbar li").eq(jQuery("fieldset").index(previous_fs)).addClass("active");

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current_fs.hide();
                animating = false;
                previous_fs.fadeIn(800);
            },
            //this comes from the custom easing plugin
            //easing: 'easeInOutBack'
        });
    });

    jQuery(".submit").on('click', function() {
        current_fs = jQuery(this).parent();
        current_fs_id = current_fs.prop('id');

        var formValidate = validateMultiStageForm();
        if(formValidate.error == 'error') {
            return;
        }
        // save every form-stage data in DB
        saveLeadData(formValidate.dataSet);
        //return false;
    });
});

function validateMultiStageForm() {

    var formValidate = {};
    formValidate.error = '';

    if(current_fs_id == '1-location-block') {
        /*jQuery('#user_state').blur(function(){
            jQuery(this).addClass('input-error');
            return ;
        });*/

        if(jQuery("#zip").val() == '') {
            jQuery("#zip").addClass('input-error');
            formValidate.error = 'error';
        }
        // else if(jQuery("#user_state").val() == '') {
        //     jQuery("#user_state").addClass('input-error');
        //     return ;
        // }

        formValidate.dataSet = {
            form_stage:current_fs_id,
            zip:jQuery("#zip").val(),
            city:jQuery("#city").val(),
            state:jQuery("#user_state").val(),
        };

    } else if(current_fs_id == '2-debt-info-block') {
        // console.log(jQuery("input[name='sued_by']:checked").val());

        if(jQuery("#total_debt").val() == '0' || jQuery("#total_debt").val() == '$0') {
            //jQuery("#total_debt").parent().find(".input-label").addClass('input-error');
            jQuery("#unsecured_debt,  #secured_debt").parent().find(".input-label").addClass('input-error'); //#student_loan_debt,
            //return ;
            formValidate.error = 'error';
        }
        else if(jQuery("input[name='sued_by']:checked").val() == undefined) {
            jQuery("input[name='sued_by']").parent().parent().addClass('input-error');
            formValidate.error = 'error';
        }

        var sued_by = [];
        jQuery("input:checkbox[name=sued_by]:checked").each(function(){
            sued_by.push(jQuery(this).val());
            //console.log(jQuery(this).val());
        });
        //console.log(sued_by);
        formValidate.dataSet = {
            form_stage:current_fs_id,
            unsecured_debt:jQuery("#unsecured_debt").val(),
            student_loan_debt:'0', //jQuery("#student_loan_debt").val(),
            secured_debt:jQuery("#secured_debt").val(),
            total_debt:jQuery("#total_debt").val(),
            sued_by: sued_by,
        };
        getStateCity(jQuery('#zip').val());

    } else if(current_fs_id == '3-other-debt-info-block') {

        if(jQuery("#pre_tax_income").val() == '0') {
            jQuery("#pre_tax_income").parent().find(".input-label").addClass('input-error');
            formValidate.error = 'error';
        } else if(jQuery("#total_cash_available").val() == '0') {
            jQuery("#total_cash_available").parent().find(".input-label").addClass('input-error');
            formValidate.error = 'error';
        }
        formValidate.dataSet = {
            form_stage:current_fs_id,
            unfilled_tax_past_4_year:jQuery("#unfilled_tax_past_4_year").prop('checked'),
            do_own_home:jQuery("#do_own_home").prop('checked'),
            current_creditor_bill:jQuery("#current_creditor_bill").prop('checked'),
            // irs_state_back_tax_g_10k:jQuery("#irs_state_back_tax_g_10k").prop('checked'),
            // effort_payment_300_400_to_start_bankruptcy:jQuery("#effort_payment_300_400_to_start_bankruptcy").prop('checked'),
            pre_tax_income:jQuery("#pre_tax_income").val(),
            total_cash_available:jQuery("#total_cash_available").val(),
            filled_bankruptcy_past_eight_year:jQuery("#filled_bankruptcy_past_eight_year").prop('checked'),
        };

    } else if(current_fs_id == '4-debt-chapter-info-block') {

        if(jQuery("#chapter_7_bankruptcy").prop('checked') == true) {
            if(jQuery("#discharge_date").val() == '') {
                jQuery("#discharge_date").addClass('input-error');
                formValidate.error = 'error';
            } else if(jQuery("#dismissed_date").val() == '') {
                jQuery("#dismissed_date").addClass('input-error');
                formValidate.error = 'error';
            }
        }
        if(jQuery("#chapter_13_bankruptcy").prop('checked') == true) {
            if(jQuery("#discharge_date_13").val() == '') {
                jQuery("#discharge_date_13").addClass('input-error');
                formValidate.error = 'error';
            } else if(jQuery("#dismissed_date_13").val() == '') {
                jQuery("#dismissed_date_13").addClass('input-error');
                formValidate.error = 'error';
            }
        }
        formValidate.dataSet = {
            form_stage:current_fs_id,
            chapter_7_bankruptcy:jQuery("#chapter_7_bankruptcy").prop('checked'),
            discharge_date:jQuery("#discharge_date").val(),
            dismissed_date:jQuery("#dismissed_date").val(),
            chapter_13_bankruptcy:jQuery("#chapter_13_bankruptcy").prop('checked'),
            discharge_date_13:jQuery("#discharge_date_13").val(),
            dismissed_date_13:jQuery("#dismissed_date_13").val(),
            client:jQuery("#chapter_7_bankruptcy").prop('checked'),
            client_13:jQuery("#chapter_13_bankruptcy").prop('checked'),
        };


    } else if(current_fs_id == '5-personal-info-block') {

        if(jQuery("#user_name").val() == '') {
            jQuery("#user_name").addClass('input-error');
            formValidate.error = 'error';
        }
        else if(jQuery("input[name='employment_status']:checked").val() == undefined) {
            jQuery("input[name='employment_status']").parent().parent().addClass('input-error');
            formValidate.error = 'error';
        }
        else if(jQuery("input[name='marital_status']:checked").val() == undefined) {
            jQuery("input[name='marital_status']").parent().parent().addClass('input-error');
            formValidate.error = 'error';
        } else if(jQuery("#email").val() == '') {
            jQuery("#email").addClass('input-error');
            formValidate.error = 'error';
        }  else if(email_regx.exec(jQuery("#email").val()) == null) {
            jQuery("#email").addClass('input-error');
            formValidate.error = 'error';
        } else if(jQuery("#phone").val() == '') {
            jQuery("#phone").addClass('input-error');
            formValidate.error = 'error';
        } else if(phone_regx.exec(jQuery("#phone").val()) == null) {
            jQuery("#phone").addClass('input-error');
            formValidate.error = 'error';
        }
        formValidate.dataSet = {
            form_stage:'5-personal-info-block',
            user_name:jQuery("#user_name").val(),
            employment_status:jQuery("input[name='employment_status']:checked").val(),
            marital_status:jQuery("input[name='marital_status']:checked").val(),
            email:jQuery("#email").val(),
            phone:jQuery("#phone").val(),
        };
    }
    return formValidate;
}

function configRangeSlider() {

    // rangeSlider configuration
    var rangeSliderConf = {
        skin: "sharp",
        // grid: true,
        min: 0,
        max: 100000,
        prefix: "$",
        step: 100,
        onChange: function(data) {
            //console.log(data);
            jQuery(data.input[0]).prop("value", data.from);
            var sliderId =  jQuery(data.input[0]).prop("id");

            if( sliderId == 'pre_tax_income' || sliderId == 'total_cash_available') { //total_debt unsecured_debt
                if(data.from !=0) {
                    jQuery(data.input[0]).parent().find(".input-label").removeClass('input-error');
                }
                else {
                    jQuery(data.input[0]).parent().find(".input-label").addClass('input-error');
                }
            }
            updateTotalDebt();
        }
    };
    setTimeout(function() {
        jQuery("#unsecured_debt").ionRangeSlider(rangeSliderConf);
        //jQuery("#student_loan_debt").ionRangeSlider(rangeSliderConf);
        jQuery("#secured_debt").ionRangeSlider(rangeSliderConf);

        jQuery("#pre_tax_income").ionRangeSlider(rangeSliderConf);
        jQuery("#total_cash_available").ionRangeSlider(rangeSliderConf);
    }, 3000);

}

function configDateTimePicker() {
     // form slide datepicker configuration
     var options={
        format: 'dd-mm-yyyy',
        //container: container,
        todayHighlight: true,
        autoclose: true,
    };
    //jQuery('#discharge_date').datepicker(options);
    //jQuery('#dismissed_date').datepicker(options);
    //jQuery('#discharge_date_13').datepicker(options);
    //jQuery('#dismissed_date_13').datepicker(options);
     jQuery.fn.datepicker.defaults.format = "dd-mm-yyyy";
     jQuery.fn.datepicker.defaults.autoclose = true;
}

function configElementEventListner() {

    // form active element validation
    jQuery('select').on("change", function() {
        if(jQuery(this).val() !='') {
            jQuery(this).removeClass('input-error');
        }
    });
    jQuery('input').on("keyup mouseover", function(e) {
        if(jQuery(this).val() !='') {
            jQuery(this).removeClass('input-error');
        }
    });

    jQuery('#zip').on("keyup mouseleave", function(e) {
        if(jQuery(this).val().length >= 5 ) {
            //console.log(jQuery(this).val().length);
            getStateCity(jQuery(this).val());
       }
    });

    jQuery('#filled_bankruptcy_past_eight_year').on("change", function() {
        if(jQuery("#filled_bankruptcy_past_eight_year").prop('checked') == true) {
            jQuery('#4-debt-chapter-info-block').addClass('active').removeClass('inactive');
        } else {
            jQuery('#4-debt-chapter-info-block').addClass('inactive').removeClass('active');
        }
    });

    jQuery('#chapter_7_bankruptcy').on("change", function() {
        if(jQuery("#chapter_7_bankruptcy").prop('checked') == true) {
            jQuery("#discharge_date, #dismissed_date").prop('disabled', false);
            jQuery("#ch7 .input-group-addon").css({'visibility': 'visible'});
        }
        else {
            jQuery("#discharge_date, #dismissed_date").prop('disabled', true).val('');
            jQuery("#ch7 .input-group-addon").css({'visibility': 'hidden'});
        }
    });

    jQuery('#chapter_13_bankruptcy').on("change", function() {
        if(jQuery("#chapter_13_bankruptcy").prop('checked') == true) {
            jQuery("#discharge_date_13, #dismissed_date_13").prop('disabled', false);
            jQuery("#ch13 .input-group-addon").css({'visibility': 'visible'});
        }
        else {
            jQuery("#discharge_date_13, #dismissed_date_13").prop('disabled', true).val('');
            jQuery("#ch13 .input-group-addon").css({'visibility': 'hidden'});
        }
    });

}

function getOptionValue(elm) {
    console.log(jQuery(elm).val());
   var fld_id= jQuery(elm).attr('id');
   if(fld_id== 'em' || fld_id== 'uem')
   {
    _parent = $(elm).parent();
    jQuery(".employment_status").removeClass("active");
    if($(elm).is(':checked'))  {
       _parent.addClass('active');
    } 
   }

   if(fld_id== 'mr' || fld_id== 'unmr')
   {
    _parent = $(elm).parent();
    jQuery(".marital_status").removeClass("active");
    if($(elm).is(':checked'))  {
       _parent.addClass('active');
    } 
   }

    if(jQuery(elm).val() !='') {
        jQuery(elm).parent().parent().removeClass('input-error');
    }
}

function updateTotalDebt() {
    var unsecured_debt =  jQuery("#unsecured_debt").val();
    //var student_loan_debt =  jQuery("#student_loan_debt").val();
    var secured_debt =  jQuery("#secured_debt").val();
    var total_debt = parseInt(unsecured_debt) +  parseInt(secured_debt); // + parseInt(student_loan_debt)
    jQuery("#total_debt").val('$'+total_debt);
    if(total_debt !=0) {
        jQuery("#unsecured_debt, #secured_debt").parent().find(".input-label").removeClass('input-error'); // #student_loan_debt,
    }
    else {
        jQuery("#unsecured_debt, #secured_debt").parent().find(".input-label").addClass('input-error'); // #student_loan_debt,
    }

}

function loadUserData() {
    jQuery.ajax({
        type: 'POST',
        url: 'https://www.ovlg.com/attorneys/get-lead-info',
        dataType: 'json',
        data: dataSet,
        success: function (data) {
            //animating = false;
            console.log(data);
        },
    });
}

function saveLeadData(dataSet) {
	if(animating) return false;
    animating = true;
    if(dataSet.form_stage == '5-personal-info-block') {
        jQuery(".submit").prop('disabled', true);
        jQuery(".submit i").show();
    }

    dataSet.lead_crm_id = jQuery("#lead_crm_id").val();
    console.log(dataSet);

    jQuery.ajax({
        type: 'POST',
        url: 'https://www.ovlg.com/attorneys/store-lead-info',
        dataType: 'json',
        data: dataSet,
        success: function (data) {
            animating = false;
            console.log(data);
            if(data.status=='OK') {
                if(data.lead_crm_id != null) {
                    lead_crm_id = data.lead_crm_id;
                    jQuery("#lead_crm_id").val(data.lead_crm_id);
                }
                if(dataSet.form_stage == '5-personal-info-block') {
                    jQuery(".submit").prop('disabled', false);
                    jQuery(".submit i").hide();
                        window.location.href = 'https://www.ovlg.com/client/bkch7/marketplace';
                }
            }
        },
    });
}

function getStateCity(zipCode) {

    jQuery.ajax({
        type: 'GET',
        url: 'https://www.ovlg.com/attorneys/get-state-city/'+zipCode,
        dataType: 'json',
        data: dataSet,
        success: function (data) {
            console.log(data);
            if(data.status=='OK') {
               jQuery('#city').val(data.zip_info.City);
               jQuery('#user_state').val(data.zip_info.State);
               var idOfState = data.zip_info.State;
               var ZipCode = data.zip_info.ZipCode;
               var previous_zip = jQuery('#previous_zip').val();
               // var previous_val = jQuery('#user_state').val();
               if(ZipCode != previous_zip) {
                jQuery('#previous_zip').val(ZipCode)

                // called function for runenvs/ovlg.com/public_html/sites/all/themes/ovlg_bootstrap/ovlg/js/usa-state-map.js:l151
                 setStateInMap(idOfState);
               }
            }
        },
    });
}

function getCity(zipCode) {

    jQuery.ajax({
        type: 'POST',
        url: 'https://www.ovlg.com/attorneys/get-city',
        dataType: 'json',
        data: dataSet,
        success: function (data) {
            console.log(data);
            if(data.status=='OK') {
                //if(data.lead_crm_id != null) {
                //    lead_crm_id = data.lead_crm_id;
                //    jQuery("#lead_crm_id").val(data.lead_crm_id);
                //}
            }
        },
    });
}

//jQuery(document).ready(function() {
//});
