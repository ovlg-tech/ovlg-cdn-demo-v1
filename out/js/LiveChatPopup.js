var LHCChatOptionsPage = {};
LHCChatOptionsPage.opt = {};
(function () {
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src =
    "https://www.ovlg.com/livehelperchat/lhc_web/index.php/chat/getstatusembed/(department)/2";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);
})();

$("#clickmenow").click(function () {
  setTimeout(function () {
    $("#remove_me_after_load").hide();
  }, 5000);
});
