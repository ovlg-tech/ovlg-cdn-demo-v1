jQuery(function () {

  jQuery("#archive_dropdown").on('change',function(){
    var page_url = $(this).val();
    window.location.href = page_url;
  });

});
