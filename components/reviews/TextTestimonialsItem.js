import styleReviews from '../../styles/Reviews.module.css'

export default function TextTestimonialsItem({ txReview }) {
  return (
    <div className={`row ${styleReviews["testimonialItem"]}`}>
      <div className="col-md-2 col-sm-2">
        <div className="header-h4 colr-black" style={{ margin: "0 0 10px 0" }}>
          Review of {txReview.client_initial}
        </div>
        <div className="testimonialImage">
          <div className="pad-l-20">
            <img
              alt={`image of ${txReview.client_initial}`}
              data-src={txReview.image}
              style={{ width: "75px", height: "75px" }}
              src={txReview.image}
            />
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4 pad-t-20">
        <div className={`${styleReviews["testimonialInfo"]}`}>
          <div>
            <b>Debt Processed :</b> {txReview.Debt_Processed}
          </div>
          <div>
            <b>Type of Debt :</b> {txReview.Type_of_Debt}
          </div>
          <div>
            <b>Date:</b> {txReview.Date}
          </div>
        </div>
      </div>
      <div className="col-md-7 col-sm-6 pad-t-20">
        <div className="testimonialContent">
          <span className="testimonialQuote">
            <i className="fa fa-quote-left"></i>
          </span>
          <span>
            <div
              dangerouslySetInnerHTML={{
                __html: txReview.testimonialQuote,
              }}
            ></div>
          </span>
        </div>
      </div>
    </div>
  );
}
