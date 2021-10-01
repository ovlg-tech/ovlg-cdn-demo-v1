//import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()
export default function ServciePageBanner({ BannerInfo }) {
  return (

<section className="banner-group-bg">
<div className="container-fluid">
 <div className="row">
    
    <aside className="col-12 col-md-5 col-lg-4">
      <div className="position-relative banner-image-group" style={{minHeight:'450px'}}>
              
        <img alt="Attorney Lyle Solomon" src={`${publicRuntimeConfig.rootPath}/images/banner-image-lyle-solomon.webp`}
        layout="fill" objectFit="cover" priority className="banner-lyle-image" />
         <div className="banner-lyle-image-text">
            <div className="banner-main-text"><em>"I can make you debt free."</em></div>
            <div className="colr-orng bold font-size-24"><b>Helped 6700+</b></div>
            <div className="colr-white">
              <a href="attorneys/lyle-david-solomon" className="colr-light-blue">- Attorney Solomon</a>  (Nationally Recognized)
              </div>
            <p className="mar-t-20"><a href="no-results-refund-policy" className="colr-light-blue">100% refund policy</a></p>
          </div>
      </div>
    </aside>

    <aside className="col-12 col-md-3 col-lg-4 d-none d-sm-none d-md-block">
      <div className="row text-center">
          <h1 className="colr-white" style={{ paddingTop:"200px" }}>{BannerInfo.title}</h1>
        </div>
    </aside>

    <aside className="col-12 col-md-4 col-lg-4 pad-lr-20">
      <div className="row">
        <div className="col-xs-12 heroForm text-center">
            <a href="/attorneys"><h3 className="text-center">Our Attorneys</h3></a>
            {/* <img src={`${publicRuntimeConfig.rootPath}/images/Howard-S-Kleyman.webp`} alt="Attorney Howard S Kleyman" className="col-3 img-responsive" /> */}
            <div className="row">
              <img src="https://www.ovlg.com/attorneys/images/attorney-images/picture-382277.jpg" className="col-md-3 col-sm-3 col-3 img-responsive" />
              <img src="https://www.ovlg.com/attorneys/images/attorney-images/picture-404540.jpg" className="col-md-3 col-sm-3 col-3 img-responsive" />
              <img src="https://www.ovlg.com/attorneys/images/attorney-images/picture-382130.jpg" className="col-md-3 col-sm-3 col-3 img-responsive" />
              <img src="https://www.ovlg.com/attorneys/images/attorney-images/picture-382129.jpg" className="col-md-3 col-sm-3 col-3 img-responsive" />
             
              <div> <a href="/attorneys" className="float-end  pad-5">More..</a></div>
            </div>

        
            <p className="bannerCTAlink mar-b-20"><a alt="See what we have done for others" href="/reasons-to-trust.html">Why choose us</a></p>
            <p className="bannerCTAlink mar-b-20"><a alt="Hear from people just like you" href="/reviews">Our reviews</a></p>
            <p><a alt="Free Consultation" href="/contact-us/help.html" className="btn btn-success btn-lg">Get Free Consultation <span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
        </div>
      </div>
    </aside>

    <aside className="col-12 col-md-4 col-lg-4 d-block d-sm-block d-md-none">
      <div className="row text-center">
          <h1 className="colr-white">Payday loan debt relief through consolidation</h1>
      </div>
    </aside>
      

   </div> 
  </div>
</section>
  );
}
