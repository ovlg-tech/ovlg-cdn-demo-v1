//import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig} = getConfig()

const smallImgCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/banner-images/small/${src}?w=${width}&q=${quality || 75}`
}

export default function Credibility({ BannerInfo }) {
    return (
        <>
            <aside className="col-12 col-md-3 col-lg-4 banner-atty-group">
                <div className="row">
                    <div className="col-12 heroForm text-center">
                        <a href="/attorneys"><h3 className="text-center banner-atty-topic-name">Our Attorneys</h3></a>
                        <div className="row">                            
                            <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                <img
                                    loader={smallImgCdnLoader}
                                    src={`${publicRuntimeConfig.attImgPathUrl}/picture-382250_I9quaZwWO.webp`}
                                    className=""
                                    width={84}
                                    height={100}
                                    alt="Attorney Ivan Raevski"
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                <img
                                    loader={smallImgCdnLoader}
                                    src={`${publicRuntimeConfig.attImgPathUrl}/picture-382277_WP-Vo5qGSt.webp`}
                                    className=""
                                    width={84}
                                    height={100}
                                    alt="Attorney Camron Hoorfar"
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                <img
                                    loader={smallImgCdnLoader}
                                    src={`${publicRuntimeConfig.attImgPathUrl}/picture-382251_e7BakZmFOe.webp`}
                                    className=""
                                    width={84}
                                    height={100}
                                    alt="Attorney Robert Davis"
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                <img
                                    loader={smallImgCdnLoader}
                                    src={`${publicRuntimeConfig.attImgPathUrl}/picture-404540_kqy7X1PyJ.webp`}
                                    className=""
                                    width={84}
                                    height={100}
                                    alt="Attorney Vincent Adams"
                                />
                            </div>
                            <div> <a href="/attorneys" className="float-end  pad-5">More..</a></div>
                        </div>
                        <div className="bannerCTAlink banner-cta-mar">
                            <a alt="See what we have done for others" href="/reasons-to-trust.html">Why choose us</a> {/*<span className="d-md-none d-inline d-lg-inline">|</span> <a alt="Hear from people just like you" href="/reviews">Our reviews</a>*/} <span className="d-md-none d-inline d-lg-inline">|</span> <a alt="" href="/reviews">Our Reviews</a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}