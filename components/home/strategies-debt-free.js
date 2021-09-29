import homeStyle from '../../styles/Homepage.module.css'

export default function StrategiesDebtFree() {
  return (
    <div
      className="row" itemScope="" itemType="http://schema.org/LegalService">
      <h2 className="text-center">Strategies to Become Debt Free</h2>
      <div className="col-md-4 col-sm-6 col-12" itemProp="name">
        <div className={`${homeStyle["homepageStrategyBox"]}`} style={{ minHeight: "270px" }}>
          <div className="header-h4 text-center">
            <a href="/bill-payment" className="colr-brown">
              1. Bill payments
            </a>
          </div>
          <p>Repay your bills with smart budgeting and bill consolidation.<br /><br /></p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12" itemProp="name">
        <div className={`${homeStyle["homepageStrategyBox"]}`} style={{ minHeight: "270px" }}>
          <div className="header-h4 text-center">
            <a href="/debt-management" className="colr-brown">
              2. Debt Management
            </a>
          </div>
          <p>
            Lower your interest rates and free up cash to make reduced monthly
            payments on your debt.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12" itemProp="name">
        <div className={`${homeStyle["homepageStrategyBox"]}`} style={{ minHeight: "270px" }}>
          <div className="header-h4 text-center">
            <a href="/debt-settlement" className="colr-brown">
              3. Debt Settlement
            </a>
          </div>
          <p>
            Get out of debt with one lump sum payment to save money on late
            fees, fines, interest, and the total amount you owe.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12" itemProp="name">
        <div className={`${homeStyle["homepageStrategyBox"]}`} style={{ minHeight: "270px" }}>
          <div className="header-h4 text-center">
            <a href="/bankruptcy/chapter7.html" className="colr-brown">
              4. Chapter 7 bankruptcy
            </a>
          </div>
          <p>
            Become debt free in 3 to 4 months while keeping some of your assets.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12" itemProp="name">
        <div className={`${homeStyle["homepageStrategyBox"]}`} style={{ minHeight: "270px" }}>
          <div className="header-h4 text-center">
            <a href="/bankruptcy/chapter13.html" className="colr-brown">
              5. Chapter 13 bankruptcy
            </a>
          </div>
          <p>
            Become debt free in three to five years without losing your assets.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12" itemProp="name">
        <div className={`${homeStyle["homepageStrategyBox"]}`} style={{ minHeight: "270px", background: "#ac8160" }}>
          <div className="header-h4 text-center">
            <span className="colr-white">Financial Literacy Course</span>
          </div>
          <p className="colr-white">
            <span>It's never too late to learn how to manage money well</span>
            <a href="https://ovlg.teachable.com/" className="link-light d-block" target="_blank">
              <b> Get started for free</b> <i className="bi bi-arrow-right-circle"></i>
            </a>
          </p>
        </div>
      </div>

    </div>
  );
}
