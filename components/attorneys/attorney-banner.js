import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()

export default function AttorneyBanner() {
    return (
                  <div className="content">
          <section className="banner-subpages-group-LDS">
            <div className="col-sm-8 col-xs-12 heroBannerAttorney">
                <div className="heroText">
                  <p className="colr-orng bold">~ NATIONALLY RECOGNIZED ~</p>
                  <h2><em>"I can make you debt free"</em></h2>
                  <div className="font-size-20"><a href="/attorneys/lyle-david-solomon" className="colr-white">~ Attorney Solomon</a></div>
                  <p className="pad-t-20 header-h4"><span className="colr-white">Talk to our operation manager <u><a href="/contact-us/people.html" className="colr-white">Nick</a></u> to match your needs with the right attorney.</span></p>
                  <p><a href="no-results-refund-policy" className="colr-light-blue">No questions asked refund policy</a></p>
                </div>
            </div>
            <div>
                <img src={`${publicRuntimeConfig.rootPath}/images/ovlg-hero-banner-lyle.webp`} className="banner-subpages-img" alt="Personal finance education" />
                {/* <Image
                        src={`${publicRuntimeConfig.rootPath}/images/ovlg-attorney-banner.webp`}
                        className="banner-subpages-img" 
                        alt="Personal finance education"
                        width={1620}
                        height={380}
                    /> */}
            </div>
        </section>
            </div>       
      
    )
  }