//import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import homeStyle from '../../styles/Homepage.module.css'
const bannerImgCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/banner-images/${src}?w=${width}&q=${quality || 75}`
}

const smallImgCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/banner-images/small/${src}?w=${width}&q=${quality || 75}`
}

export default function HomeBanner() {
    return (
        <div >
            <div className="container-fluid">
                <div className={`row ${homeStyle['home-banner-group-bg']}`} >
                    <div className="col-12 col-md-6 col-lg-8 position-relative">
                        <div className={`col-12 ps-0  ${homeStyle['bnner-lyle-inner']}`} style={{ minHeight: '360px' }}>

                            <div style={{ position: 'absolute', bottom: '-10px', left: '0', width: '426px', height: '110%' }}>

                                <img 
                                    loader={bannerImgCdnLoader}
                                    src='https://ik.imagekit.io/800530ovlg/banner-images/ovlg-hero-banner-lyle-684x680_XHppjdrVTHG.webp'
                                    alt="Attorney Lyle Solomon" layout='fill' objectFit='cover' priority className={`${homeStyle['lyle-img']}`} />
                                {/* <img 
                                    src={`${publicRuntimeConfig.rootPath}/images/ovlg-hero-banner-lyle-big.jpg`}
                                    alt="Attorney Lyle Solomon" layout='fill' objectFit='cover' priority className={`${homeStyle['lyle-img']}`} /> 
                                    // https://ik.imagekit.io/800530ovlg/banner-images/ovlg-hero-banner-lyle-big_lFv2j_h5ZNq.jpg?updatedAt=1633011751965
                                    */}
                            </div>

                            {/* <img src={`${publicRuntimeConfig.rootPath}/images/compressed-banner-image-lyle-solomon.webp`} alt="Attorney Lyle Solomon" className={`${homeStyle['lyle-img']}`} /> */}
                            {/* <img src={`https://ik.imagekit.io/bvdsyrew4be/compressed-banner-image-lyle-solomon_v700VjgJP.webp`} alt="Attorney Lyle Solomon" className={`${homeStyle['lyle-img']}`} style={{ minHeight: '360px' }} /> */}
                            {/* <img src={`https://ik.imagekit.io/800530ovlg/banner-images/compressed-banner-image-lyle-solomon_5GSHdGwUv.webp`} alt="Attorney Lyle Solomon" style={{ minHeight: '360px', height: '100%' }} /> */}


                            <div className={`${homeStyle['home-banner-text']}`}>
                                <h2><em>"I can make you debt free."</em></h2>
                                <p className="colr-orng bold font-size-24">Helped 6700+</p>
                                <p className="font-size-20 colr-white"><a href="attorneys/lyle-david-solomon" className="colr-light-blue">- Attorney Solomon</a> (Nationally Recognized)</p>
                                <p><a href="/no-results-refund-policy" className="colr-light-blue">100% refund policy</a></p>
                            </div>
                        </div>
                    </div>

                    <div className={`col-12 col-md-5 col-lg-4 offset-md-1 offset-lg-0 ${homeStyle['home-atty-banner']}`} style={{ zIndex: '1' }}>
                        <div className="col-12 heroForm text-center">
                            <h3 className="text-center pt-3">Our Attorneys</h3>
                            <div className="px-3">
                                <div className="row">
                                    {/* <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-382250.webp`} className="col-3 pb-1 img-responsive" />
                                <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-382277.webp`} className="col-3 pb-1 img-responsive" />
                                <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-382251.webp`} className="col-3 pb-1 img-responsive" />
                                <img src={`${publicRuntimeConfig.rootPath}/images/attorney-images/picture-404540.webp`} className="col-3 pb-1 img-responsive" /> */}
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                        <img 
                                            loader={smallImgCdnLoader}
                                            src={`${publicRuntimeConfig.attImgPathUrl}/picture-382250_I9quaZwWO.webp`}
                                            className=""
                                            width={84}
                                            height={100}
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                        <img 
                                            loader={smallImgCdnLoader}
                                            src={`${publicRuntimeConfig.attImgPathUrl}/picture-382277_WP-Vo5qGSt.webp`}
                                            className=""
                                            width={84}
                                            height={100}
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                        <img 
                                            loader={smallImgCdnLoader}
                                            src={`${publicRuntimeConfig.attImgPathUrl}/picture-382251_e7BakZmFOe.webp`}
                                            className=""
                                            width={84}
                                            height={100}
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                        <img 
                                            loader={smallImgCdnLoader}
                                            src={`${publicRuntimeConfig.attImgPathUrl}/picture-404540_kqy7X1PyJ.webp`}
                                            className=""
                                            width={84}
                                            height={100}
                                        />
                                    </div>
                                    <div><a href="/attorneys" className="float-end  pad-5">More..</a></div>
                                </div>
                            </div>
                            <div className="bannerCTAlink banner-cta-mar"><a alt="See what we have done for others" href="#homepageInfoSection">Why choose us</a> | <a alt="" href="/attorneys">Our Attorneys</a> </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
