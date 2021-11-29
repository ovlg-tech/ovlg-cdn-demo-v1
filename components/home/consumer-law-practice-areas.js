import homeStyle from '../../styles/Homepage.module.css'
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function ConsumerLawPracticeAreas() {
  return (
    <>
    <div className="col-lg-10 offset-md-0 offset-lg-1 pad-tb-20">
    <div
      className="container mt-5"
      itemScope=""
      itemType="http://schema.org/LegalService"
    >
      <h2 className="text-center">Consumer Law Practice Areas</h2>
      <p className="text-center" itemProp="description" style={{ color: "#555" }}>
        Our experts in 18 consumer law practice areas can help you win your
        legal battles.
      </p>
      <div className="row g-4">
        <div className="col-md-4 col-sm-6 col-xs-12" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <div className="header-h4 text-center mb-1">
              <a href="/debt-consolidation" className="colr-brown">
                <span className="fa fa-pie-chart"></span> Debt Consolidation
              </a>
            </div>
            <p className="pb-3">
              Make repayment easy with just one monthly payment you can afford
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <div className="header-h4 text-center mb-1">
              <a
                href="/debt-consolidation/payday-loan.html"
                className="colr-brown"
              >
                <span className="fa fa-money"></span> Payday loan consolidation
              </a>
            </div>
            <p className="pb-3">
              Replace your multiple high-interest payday loans with an
              affordable monthly payment plan.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <div className="header-h4 text-center mb-1">
              <a
                href="/debt-settlement/payday-loan.html"
                className="colr-brown"
              >
                <span className="fa fa-usd"></span> Payday loan settlement
              </a>
            </div>
            <p className="pb-3">
              Break the borrowing cycle with a lump sum payment. Pay less than
              what you owe and save money on fines and late fees.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <div className="header-h4 text-center mb-1">
              <a href="/company-formation" className="colr-brown">
                <span className="fa fa-building-o"></span> Company Formation
              </a>
            </div>
            <p className="pb-3">
              Get expert guidance on the right corporate structure for your
              business: C Corp, S Corp, or an LLC.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <div className="header-h4 text-center mb-1">
              <a href="/wills" className="colr-brown">
                <span className="fa fa-file-text"></span> Wills
              </a>
            </div>
            <p className="pb-3">
              Give your family peace of mind by deciding how your assets will be
              distributed after you’re gone.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <div className="header-h4 text-center mb-1">
              <a href="/trusts" className="colr-brown">
                <span className="fa fa-thumbs-up"></span> Trusts
              </a>
            </div>
            <p className="pb-3">
              Protect your assets and make sure they benefit your loved ones
              with a trust - and a trustee you can trust to manage it.
            </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-sm-12 text-center">
          <a href="/practices" className="btn btn-lg btn-warning">
            See More PRACTICE AREAS
          </a>
        </div>
      </div>
       <meta
        itemProp="address"
        content="Oak View Law Group APC 4966 El Camino Real STE 225, Los Altos, CA 94022, United States"
      />
      <meta itemProp="priceRange" content="$50 to $1500" />
      <meta itemProp="telephone" content="+18005306854" />
    </div>
</div>
    

    </>

  );
}
