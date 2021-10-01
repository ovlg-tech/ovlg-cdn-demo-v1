import React, { useEffect } from "react";

export default function Reviewsfn() {
    var currentid;
    var youtubeid;
    function loadYoutubeVideoThroughYTApi(element) {
        currentid = element.getAttribute('data-src-id');
        youtubeid = element.getAttribute('data-yut-var');

        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        else {
            inititalizePlayerObject(currentid, youtubeid);
        }
    }

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player(currentid, {
            videoId: youtubeid,
            playerVars: { 'autoplay': 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

    }

    function inititalizePlayerObject(currentid, youtubeid) {
        player = new YT.Player(currentid, {
            videoId: youtubeid,
            playerVars: { 'autoplay': 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        document.getElementById(currentid).classList.add("embed-responsive-item");
        event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            // if (jQuery("#myCarousel").length) {
            //     jQuery("#myCarousel").carousel('pause');
            // }
            if (document.getElementById('myCarousel')) {
                document.getElementById('myCarousel').carousel('pause');
            }
        }
        else if (event.data == YT.PlayerState.PAUSED) {
            // if (jQuery("#myCarousel").length) {
            //     jQuery("#myCarousel").carousel('pause');
            // }
            if (document.getElementById('myCarousel')) {
                document.getElementById('myCarousel').carousel('pause');
            }
        }
        else if (event.data == YT.PlayerState.ENDED) {
            // if (jQuery("#myCarousel").length) {
            //     jQuery('#myCarousel').carousel();
            // }
            if (document.getElementById('myCarousel')) {
                document.getElementById('myCarousel').carousel();
            }
        }
    }
    function stopVideo() {
        player.stopVideo();
    }
    function pauseVideo() {
        player.pauseVideo()
    }

    var old_id = ""; // to stop after first click
    function showReview(getID) {
        console.log(getID);
        if (old_id === getID) // if old id got matched with the current id then it will return false
        {
            return;
        }
        else // else it will run
        {
            var parentID = document.getElementById(getID);

            console.log(parentID);

            document.getElementsByClassName('show_client_details')[0].setAttribute('id', getID);
            var tag_engine = parentID.getElementsByTagName('span');

            var childAddress = "Not Specified";
            var childDebtProcessed = "Debt Processed : Not Specified";
            var childTypeOfDebt = "Not Specified";
            var childClientInitial = "Not Specified";
            var childGetRating = 5;
            var ytb_var = "";
            var date_var = "";
            for (var i = 1; i < tag_engine.length; i++) {
                var a = parentID.getElementsByTagName('span')[i].id;
                if (a == 'address') {
                    childAddress = tag_engine[i].innerHTML;
                }
                else if (a == 'debt_processed') {
                    childDebtProcessed = tag_engine[i].innerHTML;
                }
                else if (a == 'reducedpayment') {
                    childDebtProcessed = tag_engine[i].innerHTML;
                }
                else if (a == 'typeofdebt') {
                    childTypeOfDebt = tag_engine[i].innerHTML;
                }
                else if (a == 'reviewClientInitial') {
                    childClientInitial = tag_engine[i].innerHTML;
                }
                else if (a == 'review_ratings') {
                    childGetRating = tag_engine[i].innerHTML;
                }
                else if (a == 'review_yt_var') {
                    ytb_var = tag_engine[i].innerHTML;
                }
                else if (a == 'date_entered') {
                    date_var = tag_engine[i].innerHTML;
                }
            }

            var signature = "Read " + childClientInitial + "'s case study ";

            document.getElementById('client_address_whole').innerHTML = childAddress;

            document.getElementById('total_debt_processed').innerHTML = childDebtProcessed;

            document.getElementById('type_of_debt_big').innerHTML = childTypeOfDebt;

            document.getElementById('clientInitial').innerHTML = signature;

            var getUrl = window.location;

            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1] + "/" + childClientInitial + ".html";

            document.getElementById("sign_link").href = baseUrl;

            document.getElementById("client_address_whole_href").href = baseUrl;

            var childGetReview = "rating" + parseInt(childGetRating);

            var getClass = document.getElementById('getratings').classList[2];

            document.getElementById('getratings').classList.remove(getClass);

            document.getElementById('getratings').classList.add(childGetReview.replace(" ", ""));

            //document.getElementById('ytb_src').src="https://www.youtube.com/embed/"+ytb_var+"?autoplay=1&rel=0&amp;showinfo=0";
            document.getElementById("ytb_src").setAttribute("data-yut-var", ytb_var);
            document.getElementsByClassName("yt_iframe_img")[0].innerHTML = "<div id='player-1'></div>";
            //document.getElementById("yt-data-img").setAttribute("data-src","https://i1.ytimg.com/vi/"+ytb_var+"/default.jpg");

            document.getElementById('date').innerHTML = date_var;

            emptyMetaTags();


            document.getElementById("client_address_whole").removeAttribute("itemprop");
            document.getElementById("eliminate_description").removeAttribute("itemprop");

            old_id = getID; // stored the current id after first click
            document.getElementById("ytb_src").click();
        }
    }
    function emptyMetaTags() {
        // jQuery(function () {
        // // jQuery(".meta_tags").empty();
        // // jQuery(".main_element").removeAttr('itemprop');
        // // jQuery(".main_element").removeAttr('itemscope');
        // // jQuery(".main_element").removeAttr('itemtype');
        document.querySelectorAll('.meta_tags').forEach((el) => (el.innerHTML = ''))
        document.querySelectorAll('.main_element').forEach((el) => {
            el.removeAttribute('itemprop')
            el.removeAttribute('itemscope')
            el.removeAttribute('itemtype')
        })
        // });

    }

    useEffect(() => {
        window.currentid = currentid;
        window.youtubeid = youtubeid;
        window.loadYoutubeVideoThroughYTApi = loadYoutubeVideoThroughYTApi;
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        window.onPlayerReady = onPlayerReady;
        window.onPlayerStateChange = onPlayerStateChange;
        window.stopVideo = stopVideo;
        window.pauseVideo = pauseVideo;
        window.showReview = showReview;
        window.emptyMetaTags = emptyMetaTags;
    }, []);

    return null;
}
