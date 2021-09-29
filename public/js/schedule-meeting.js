var url = new URL(window.location.href);
var crm_id = url.searchParams.get("uid");
var start_url = url.searchParams.get("start_url");

$(function () {
    $(function () {
      $('#datepicker').datetimepicker({
          daysOfWeekDisabled: [0, 6],
          sideBySide: true,
          minDate: new Date(),
          //disabledDates: ["08/21/2020 00:53"],
          //inline: true,
      });
  });


    jQuery('#client_area_link').attr("href", 'https://www.ovlg.com/start/'+start_url);
});
  

jQuery('#UpdateSchedule').submit(function(e) 
{
  e.preventDefault();
  $("#submitSchedule").prop('disabled', true);
  //console.log(StartUrl);
 var schedule_date =jQuery('#schedule_date').val();
 var schedule_zone =jQuery('#schedule_zone').val();


 jQuery.ajax({
    type: 'POST',
    url: 'https://www.ovlg.com/clients-intake/client-schedule-metting.php?uid=' + crm_id,
    data: {
      schedule_date:schedule_date, 
      schedule_zone:schedule_zone,
      submitSchedule:'Done',
      isAjax: true
    },
    success: function (data) {
      var crm_id = data.crm_id;
      var StartUrl = data.start_url;
      //window.location.href='https://www.ovlg.com/start/'+StartUrl;

      $("#UpdateSchedule").addClass('d-none');
      $("#scheduled_msg").removeClass('d-none');

    },
     error:function(error)
     {
      console.log(error);
     }
  });
  $("#submitSchedule").prop('disabled', false);
});