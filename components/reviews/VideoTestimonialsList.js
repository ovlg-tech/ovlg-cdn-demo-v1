import React, { useEffect, useState } from "react";
import getConfig from "next/config";
import VideoTestimonialsItem from "./VideoTestimonialsItem";
import VideoReviewsData from "../../contents/reviews/video-reviews-data.json";
const { publicRuntimeConfig } = getConfig();
import styleReviews from '../../styles/Reviews.module.css'

export default function VideoTestimonialsList() {
  const perPageVidItem = 8;
  const [vidReviewsArray, setVidReviewsArray] = useState([]);
  const [visible, setVisible] = useState(perPageVidItem);

  const allVidReviewsData = async () => {
    setVidReviewsArray(
      VideoReviewsData.filter((item) => !item.flgDataMalformed)
    );
  };

  const loadMoreVidReview = () => {
    setVisible(visible + perPageVidItem);
  };

  useEffect(() => {
    allVidReviewsData();
  }, []);

  const renderVideoTestimonials = (eachVidReview, index) => {
    return (
      <VideoTestimonialsItem key={eachVidReview.id} vidReview={eachVidReview} />
    );
  };
  return (
    <>
      <section className={`${styleReviews['flex-container']} ${styleReviews['one-row']}`}>
        {vidReviewsArray.slice(0, visible).map(renderVideoTestimonials)}
      </section>

      {visible < vidReviewsArray.length && (
        <p className="text-center">
          <a
            className={`${styleReviews["btn-custom"]}`}
            onClick={loadMoreVidReview}
            style={{ cursor: "pointer" }}
          >
            Load more <span className="fa fa fa-long-arrow-right"></span>
          </a>
        </p>
      )}
    </>
  );
}
