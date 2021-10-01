jQuery(function () {

  // var contentHtml = '<div class="search">  ' + 
  // '<form onsubmit="return get_search_result_desktop()" method="get" action="" id="">'+ 
  // ' <input title="Enter the terms you wish to search" class="form-control search-node" type="text" id="search_node_desktop" name="search_block" value="" >' +
  // ' <button type="submit" id="" class="srch-submit"> '+
  // '    <span class="bi bi-search" aria-hidden="true"></span> ' +
  // ' </button> '+
  // '</form>'+
  // ' </div>';

  // jQuery("#nav_search").popover({
  //     html: true,
  //     sanitize: false,
  //     content: function() {
  //           return contentHtml; //$('#popover-content').html();
  //     }
  // });

  // jQuery("#trustlink_sec").on('click', function () {
  //   window.open('https://www.trustlink.org/WriteReviewP.aspx?CompanyID=%2frlCIdTp%2bzkm1VWxYRRkYw%3d%3d',
  //     'Write Review for Oak View Law Group, APC',
  //     'scrollbars=yes,width=750px,height=750px,left=' + ((screen.width - 750) / 2) + ',top=' + (screen.height - 750) / 2 + '');
  //   return false;
  // });



  // jQuery("#vid_debt_consolidation_base").on('click', function () {
  //   loadYoutubeVideoThroughYTApi(this);
  // });

  // jQuery("#vid_debt_settlement_base").on('click', function () {
  //   loadYoutubeVideoThroughYTApi(this);
  // });



  // jQuery("#vid_principal_attorney_base").on('click', function () {
  //   loadYoutubeVideoThroughYTApi(this);
  // });

  // jQuery("#vid_consolidate_payday_loans_base").on('click', function () {
  //   loadYoutubeVideoThroughYTApi(this);
  // });

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

  // jQuery(document).on("click", "#srch_submit", function () {
  //   //alert('it works!');
  //   var search_text = jQuery('#search_node').val();
  //   if (search_text === "") {
  //     search_text = jQuery('#search_node_desktop').val();
  //   }
  //   fnHeaderSearch(search_text);
  // });

  jQuery("#SearchAttorney").on('click', function () {
    var practice_area = ('#practice_area').val();
    var attorney_state = ('#attorney_state').val();
    fnAttorneySearch(practice_area, attorney_state);
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
  // jQuery(window).on('scroll', function () {
  //   jQuery(this).scrollTop() > 100 ? jQuery('.go-to-top').fadeIn() : jQuery('.go-to-top').fadeOut();
  // });

  // function fnHeaderSearch(search_text) {
  //   window.location.href = "https://www.ovlg.com/search/node/" + search_text;
  // }

  function fnAttorneySearch(practice_area, attorney_state) {

    $.ajax({
      type: "POST",
      url: "https://www.ovlg.com/attorneys/search.php",
      data: { practice_area: practice_area, AttorneysState: attorney_state },
      dataType: "text",
      success: function (data, textStatus) {
        if (data.redirect) {
          // data.redirect contains the string URL to redirect to
          window.location.href = data.redirect;
        } else {
          // data.form contains the HTML for the replacement form
          //$("#myform").replaceWith(data.form);
        }
      }
    });

  }



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

  // function get_search_result_desktop(){
  //   search_text = jQuery('#search_node_desktop').val();
  //   //alert(search_text);
  //   window.location.href = "https://www.ovlg.com/search/node/" + search_text;
  //   return false;
  // }


  