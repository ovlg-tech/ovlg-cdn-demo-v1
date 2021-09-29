import homeStyle from '../../styles/Homepage.module.css'

export default function WhyChooseUs() {
  return (
    <section id="infoBoxLight">
      <h2 className="text-center">Why choose us</h2>
      <div className="mar-t-10">
        <div className="row icon-item-block">

          <div className="item-box col-6 col-sm-4 col-md-4" style={{ background: "#e8e2d6", padding: "0" }}>
            <a href="https://www.ovlg.com/success/stories.php">
              <div className="item-box-title">6700+</div>
              <b className={`${homeStyle["highlightBorder"]}`}>People made debt free</b>
            </a>
          </div>

          <div className="item-box col-6 col-sm-4 col-md-4" style={{ background: "#d6cccd", padding: "0" }} >
            <a href="https://www.ovlg.com/reviews">
              <div className="item-box-title">400+</div>
              <b className={`${homeStyle["highlightBorder"]}`}>Video reviews</b>
            </a>
          </div>

          <div className="item-box col-6 col-sm-4 col-md-4" style={{ background: "#e8e2d6", padding: "0" }} >
            <a href="https://www.ovlg.com/no-results-refund-policy">
              <div className="item-box-title">100%</div>
              <b className={`${homeStyle["highlightBorder"]}`}>Refund policy</b>
            </a>
          </div>

          <div className="item-box col-6 col-sm-4 col-md-4" style={{ background: "#d6cccd", padding: "0" }} >
            <a href="https://www.ovlg.com/reasons-to-trust.html">
              <div className="item-box-title">18</div>
              <b className={`${homeStyle["highlightBorder"]}`}>Reasons to trust</b>
            </a>
          </div>

          <div className="item-box col-6 col-sm-4 col-md-4" style={{ background: "#e8e2d6", padding: "0" }}>
            <a href="https://www.ovlg.com/survey/results.php">
              <div className="item-box-title">84%</div>
              <b className={`${homeStyle["highlightBorder"]}`}>Satisfied clients</b>
            </a>
          </div>

          <div className="item-box col-6 col-sm-4 col-md-4" style={{ background: "#d6cccd", padding: "0" }}>
            <a href="https://www.ovlg.com/demo">
              <div className="item-box-title">100%</div>
              <b className={`${homeStyle["highlightBorder"]}`}>Transparency</b>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
