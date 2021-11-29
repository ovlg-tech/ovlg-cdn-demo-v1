import Image from "next/image";
import styleReviews from '../../styles/Reviews.module.css'
export default function VideoTestimonialsItem({ vidReview }) {
  // console.log(vidReview)
  switch (vidReview.review_ratings) {
    case '1.5': vidReview.class_part = '1_5'; break;
    case '2.5': vidReview.class_part = '2_5'; break;
    case '3.5': vidReview.class_part = '3_5'; break;
    case '4.5': vidReview.class_part = '4_5'; break;
    default: vidReview.class_part = vidReview.review_ratings
  }
  return (
    <div className={`${styleReviews["review-flex-div"]}`}>
      <div className="text-center pad-b-20">
        <div
          className="client_clicked"
          id={"Review_" + vidReview.review_id}
          onClick={() => {
            showReview("Review_" + vidReview.review_id);
          }}
        >
          <div className="review-heading">
            <div id="address" className="font-size-20">
              <a href={vidReview.review_page_url} className="colr-grey">
                {/* Client <b>{vidReview.client_initial}</b> from{" "}
                <b>{vidReview.creditor_initial}</b> saved{" "}
                <b>${vidReview.total_saved}</b> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: vidReview.review_heading_text,
                  }}
                ></div>
              </a>
            </div>
            <div className="clearfix"></div>
          </div>
          <span id="debt_processed" className="hidden">
            ${vidReview.debt_processed}
          </span>
          <span id="typeofdebt" className="hidden">
            {vidReview.typeofdebt}
          </span>
          <span id="reviewClientInitial" className="hidden">
            {vidReview.client_initial}
          </span>
          <div style={{ position: "relative" }} className="pad-t-20-x">
            <a href="#smallVid">
              <img
                data-src={vidReview.thumbnail_image}
                alt=""
                style={{ width: "100%" }}
                className="flex-div-image ls-is-cached lazyloaded"
                src={vidReview.thumbnail_image}
              />
            </a>
            <p
              style={{ position: "absolute", top: "35%", width: "100%" }}
              className="text-center"
            >
              <a href="#smallVid">
                <i
                  className="bi bi-youtube font-size-32 colr-white"
                  style={{ cursor: "pointer", opacity: "0.5" }}
                ></i>
              </a>
            </p>
          </div>
          <span id="YoutubeTimeDuration" className="hidden">
            {vidReview.YoutubeTimeDuration}
          </span>
          <span id="YoutubePublishedDate" className="hidden">
            {vidReview.YoutubePublishedDate}
          </span>
          <span id="YoutubeNameContent" className="hidden">
            {vidReview.YoutubeNameContent}
          </span>
          <p className={`${styleReviews["review-flex-div-text"]}`}></p>
          <div className={`font-size-20 ${styleReviews["review-flex-div-text"]}`}>
            Client satisfaction level:
          </div>
          <span
            ids="getratings" id={vidReview.review_ratings}
            className={
              `mx-auto ${styleReviews["ratingBG"]} ${styleReviews["rating" + vidReview.class_part]}`
            }
          ></span>
          <span id="review_ratings" className="hidden">
            {vidReview.review_ratings}
          </span>
          <p></p>
          <div className={`${styleReviews["review-flex-div-text"]}`}>
            <b>Post date: </b>
            <span id="date_entered">{vidReview.date_entered}</span>
          </div>
          <span id="review_yt_var" className="hidden">
            {vidReview.review_yt_var}
          </span>
        </div>
        <p
          className="col-md-12 flex-div-address-show"
          id="address_show"
          style={{ display: "none" }}
        >
          <a href={vidReview.client_initial}>
            Client <b>{vidReview.review_page_url}</b> from{" "}
            <b>{vidReview.creditor_initial}</b> saved{" "}
            <b>${vidReview.total_saved}</b>
          </a>
        </p>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
