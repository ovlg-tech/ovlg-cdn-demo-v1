import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()
export default function PracticesBanner() {
  return (

<section className="banner-group-bg">
<div className="container-fluid">
 <div className="row">
    
    <aside className="col-12 col-md-5 col-lg-4">
      <div className="position-relative banner-image-group" style={{minHeight:'450px'}}>
              
        <Image alt="Attorney Lyle Solomon" src={`${publicRuntimeConfig.rootPath}/images/banner-image-lyle-solomon.webp`}
        layout="fill" objectFit="cover" priority className="banner-lyle-image" />
         <div className="banner-lyle-image-text">
            <div className="banner-main-text"><em>"I can make you debt free."</em></div>
            <div className="colr-orng bold font-size-24"><b>Helped 6700+</b></div>
            <div className="colr-white">
              <a href="attorneys/lyle-david-solomon" class="colr-light-blue">- Attorney Solomon</a>  (Nationally Recognized)
              </div>
            <p className="mar-t-20"><a href="no-results-refund-policy" className="colr-light-blue">100% refund policy</a></p>
          </div>
      </div>
    </aside>

    <aside className="col-12 col-md-3 col-lg-4 d-none d-sm-none d-md-block">
      <div className="row banner-only-heading header-h1 text-center">
          <span className="colr-white">Practices</span>
        </div>
    </aside>

    <aside className="col-12 col-md-4 col-lg-4 pad-lr-20">
      <div className="row">
        <div className="col-xs-12 heroForm text-center">
            <a href="/attorneys"><h3 className="text-center">Our Attorneys</h3></a>
            <div className="row">
                <img src={`${publicRuntimeConfig.rootPath}/images/Howard-S-Kleyman.webp`} alt="Attorney Howard S Kleyman" className="col-3 img-responsive" />
                <img src={`${publicRuntimeConfig.rootPath}/images/Samuel-M-DiFatta.webp`} alt="Attorney Samuel M DiFatta" className="col-3 img-responsive" />
                <img src={`${publicRuntimeConfig.rootPath}/images/Robert-C-Montgomery.webp`} alt="Attorney Robert C Montgomery" className="col-3 img-responsive" />
                <img src={`${publicRuntimeConfig.rootPath}/images/Loretta-Kilday.webp`} alt="Attorney Loretta Kilday" className="col-3 img-responsive" />
            </div>
            <p className="bannerCTAlink mar-b-20"><a alt="See what we have done for others" href="/reasons-to-trust.html">Why choose us</a></p>
            <p className="bannerCTAlink mar-b-20"><a alt="Hear from people just like you" href="/reviews">Our reviews</a></p>
            <p><a alt="Free Consultation" href="/contact-us/help.html" className="btn btn-success btn-lg">Get Free Consultation <span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
        </div>
      </div>
    </aside>

      <aside className="col-12 col-md-4 col-lg-4 d-block d-sm-block d-md-none">
      <div className="row banner-only-heading header-h1 text-center">
          <span className="colr-white">Practices</span>
        </div>
    </aside>

   </div> 
  </div>
</section>
  );
}
