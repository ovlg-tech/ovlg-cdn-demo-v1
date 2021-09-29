import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import homeStyle from '../../styles/Homepage.module.css'

const smallImgCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/banner-images/small/${src}?w=${width}&q=${quality || 75}`
}

export default function HomeBanner() {
    return (
        <div className="">
            <div className="container-fluid">

                <div className={`row ${homeStyle['home-banner-group']}`}>
                    <div className={`${homeStyle['home-banner-image']} ps-0`}>
                        <img src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/images/ovlg-hero-banner-lyle.jpg" style={{ height: '450px' }} />
                    </div>

                    <div className="col-sm-8 col-12">
                        <div className={`${homeStyle['home-banner-text']}`}>
                            <h2><em>"I can make you debt free."</em></h2>
                            <p className="colr-orng bold font-size-24">Helped 6700+</p>
                            <p className="font-size-20 colr-white"><a href="attorneys/lyle-david-solomon" className="colr-light-blue">- Attorney Solomon</a> (Nationally Recognized)</p>
                            <p><a href="/no-results-refund-policy" className="colr-light-blue">100% refund policy</a></p>
                        </div>
                    </div>

                    <div className={`col-md-4 col-12 ${homeStyle['home-atty-banner']}`}>
                        <div className={`col-12 heroForm text-center`}>
                            <h3 className="text-center pt-3">Our Attorneys</h3>
                            <div className="row">
                                {/* <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-382250.webp`} className="col-3 pb-1 img-responsive" />
                                <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-382277.webp`} className="col-3 pb-1 img-responsive" />
                                <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-382251.webp`} className="col-3 pb-1 img-responsive" />
                                <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-404540.webp`} className="col-3 pb-1 img-responsive" /> */}
                                <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                    <Image
                                        loader={smallImgCdnLoader}
                                        src="picture-382250_I9quaZwWO.webp"
                                        className=""
                                        width={84}
                                        height={100}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                    <Image
                                        loader={smallImgCdnLoader}
                                        src="picture-382277_WP-Vo5qGSt.webp"
                                        className=""
                                        width={84}
                                        height={100}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                    <Image
                                        loader={smallImgCdnLoader}
                                        src="picture-382251_e7BakZmFOe.webp"
                                        className=""
                                        width={84}
                                        height={100}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                    <Image
                                        loader={smallImgCdnLoader}
                                        src="picture-404540_kqy7X1PyJ.webp"
                                        className=""
                                        width={84}
                                        height={100}
                                    />
                                </div>
                                <div><a href="/attorneys" className="float-end  pad-5">More..</a></div>
                            </div>
                            <div className="bannerCTAlink banner-cta-mar"><a alt="See what we have done for others" href="#homepageInfoSection">Why choose us</a> | <a alt="" href="/attorneys">Our Attorneys</a> </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
