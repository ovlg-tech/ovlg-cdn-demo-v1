jQuery(function () {


  jQuery("#load-more-article").on('click', function () {
    jQuery(this).addClass('disabled');
    jQuery("#more-article").removeClass('hidecontent');
  });

  jQuery("#showbtn").on('click', function () {
    showfun();
  });
  jQuery("#hidebtn").on('click', function () {
    hidefun();
  });

  jQuery("#surveyPointerBox").on('click', function () {
    SurveyPointerBox();
  });
  jQuery("#SurveyPointerTab").on('click', function () {
    FnOpenSurveyPointerBox();
  });
  jQuery("#ovlg_feedback").on('click', function () {
    return SendVisitorToSecureSite('/ovlg_feedback', true);
  });
  jQuery("#ovlg_survey").on('click', function () {
    return SendVisitorToSecureSite('/survey', true);
  });
  jQuery("#ovlg_survey_result").on('click', function () {
    return SendVisitorToSecureSiteForSurvey('/survey/results.php?q=feedback', true);
  });




  function showfun() {
    var element = document.getElementById('moretext');
    element.classList.toggle("hidecontent");
    var showbtn = document.getElementById('showbtn');
    showbtn.classList.add("hidecontent");
    var hidebtn = document.getElementById('hidebtn');
    hidebtn.classList.toggle("hidecontent");
  }

  function hidefun() {
    var element = document.getElementById('moretext');
    element.classList.toggle("hidecontent");
    var showbtn = document.getElementById('showbtn');
    showbtn.classList.remove("hidecontent");
    var hidebtn = document.getElementById('hidebtn');
    hidebtn.classList.toggle("hidecontent");
  }
})
