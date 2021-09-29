import React, { useEffect } from "react";

export default function TrustlinkWindowOpener() {

  useEffect(function onFirstMount() {
    function openTrustlinkWindow(e) {
      e.preventDefault();
      window.open('https://www.trustlink.org/WriteReviewP.aspx?CompanyID=%2frlCIdTp%2bzkm1VWxYRRkYw%3d%3d',
        'Write Review for Oak View Law Group, APC',
        'scrollbars=yes,width=750px,height=750px,left=' + ((screen.width - 750) / 2) + ',top=' + (screen.height - 750) / 2 + '');
      return false;
    }
    const trustlink_sec_btn = document.querySelector('#trustlink_sec')

    trustlink_sec_btn.addEventListener("click", openTrustlinkWindow);
  }, []);

  return null;
}