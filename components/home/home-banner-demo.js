import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import homeStyle from '../../styles/Homepage.module.css'
const bannerImgCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/banner-images/${src}?w=${width}&q=${quality || 75}`
}

const smallImgCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/banner-images/small/${src}?w=${width}&q=${quality || 75}`
}

export default function HomeBannerDemo() {
    const [showBannerImg, setShowBannerImg] = useState(false);
    const compressedBannerImage = useRef();
    const handleLoad = () => setShowBannerImg(true)
    const showHighResBanner = () => {
        setShowBannerImg(true)
        console.log('Jai Bholenath!!')
    }
    const imgStyles = {
        minWidth: "398px",
        minHeight: "396px",
        // objectFit: "cover",
        // transition: "opacity 0.5s",
        // "transition": "opacity 0.5s 0s ease-out",
        // opacity: showBannerImg ? 0 : 1
    }
    // const replaceWithBannerImg = () => {
    //     setShowBannerImg(true)
    //     console.log('loaded!!')
    // }
    // const replaceWithBannerImg2 = () => {
    //     setShowBannerImg(true)
    //     console.log('loaded..')
    // }

    // useEffect(() => {
    //     setShowBannerImg(false)
    // }, []);
    const bannerDataUriString = "data:image/webp;base64,UklGRjAEAABXRUJQVlA4ICQEAADwRwCdASqqAagBP/3+/3+/u7+7oPGpU/A/iWlu/HyXDCiHC2gkw/4HpvAntJgg51olvtWlDjvCxxL5Y8sK0tEt9q2Hzq12E6X0UA4s7+yW+1ZEtEt9qyJaJxJb7YYZkS0S32rIlm9AF2fasiWiW+1ZEtFDnAyy9YVV54FpZwL2rIlolw1Fg/AZxqAGEoatNhe1ZEtEt9tt9DwnFYKiocWd8vasiXDU1TXttsfYzDizvl7VsRP455BesoQUYMNBFchxZ3zGqZHGjDI7khe8miL5e1ZEtE4mXnbWxliAYKssd8vasiWjgpebdtO3rrM4iuQ4s75e2/IyIo/pqqC9Aijq3WZF9S7gXtWPVJnxIQr2ngbdz0+ORBJXScOLZIOgTkDII5MZ78UegYeAupJT6W8LkPvJSUDtH1+cjCclSWP+ImRnCEWf1r8RRAmHn51QrHKz9Jw7x3Iz9CmfwvAtBqbOU0u/yfQ7pXQwqwPtWSriztyoq2p/zPQiQgFFKoBazVj218XwmAncvcXNLh/UVP6zsNBp96Jb4OHegVyHFwRqomHBKvhByTOpvfO3pg7NFM8gx6wkuYVTOBoHnyofhtrcXABu6CWMA2YhFLMa6yxGuCSMlXL2rSnlVhwpiJyDb8i3Zst9t1teo8xDw2e0S38Vs+g14U7leOQirmoUPpc7FBfmHU43LKBX6oIl7zyaXgjuOAACV3qRnktRWXNebWQA0lv2S9VNMA0FI0sYEl3IEkNtFBolttCkg5AtMQbUCQV9pqkUWF7EAAD+4BzgGCXYcPUZ8luoX88XBGU4Tq1w0RsjgBelVgw0LulefglsEx0OT3xIG1D2VGe+uDB8n93+tBfcJmYVlt6kJG111SIU4QmfUA/eFElvU+8e4rX/NEXHKYnJ0lYjhzOO0hplclToHQEI6JJcwr5qvoNfnX6D5fY3lOC14K8Xe30NRmr794ZDtzIQOeLKAQ48YF1w8tIjH2KjWrGGk08cAqfFpUDNXClE0VKY3olHF7/ed6AG5cSKYbaRYw2U1HMg7jCqJ1eIsJ6UJgsgRO93cAfUICBLK6V0Ro+q0m06/IzCR/P5lM9cbEVzSOEMHbAutpeCgU+CpMSQkndl8JFSZzePQpYQAAA0bOCf+aiMPY0+5tXo1ZwMABLNWRAyu7JGtfMeCGtYMpZUdhBSaC425EiC42Oy2KPuAwSo66PisTslcAu++wG2g2cIWe1NXzbygUzxAzMhirWH5Xywds1v1qDemIAE7gjzl6IS50BOwKY+sAkuzFa4R06qKa1ebNiSivYuTLEGneUpRlJc+qlcxbEsxeYkFXYebejOC1ZCVbOwAyGi7DRJergGhEaYCdoky3PSs8OauckITZN9WN03M+U/QJ+BAX3QcksKQqCunBirBDggSmooQAAA"

    useEffect(() => {
        if (compressedBannerImage.current.complete) {
            // setShowBannerImg(true)
            const timer = setTimeout(() => {
                showHighResBanner()
            }, 5500);
        }
    }, [])

    return (
        <div >
            <div className="container-fluid">
                <div className={`row ${homeStyle['home-banner-group-bg']}`} >
                    <div className="col-12 col-md-6 col-lg-8 position-relative">
                        <div className={`col-12 ps-0  ${homeStyle['bnner-lyle-inner']}`} style={{ minHeight: '360px' }}>

                            <div style={{ position: 'absolute', bottom: '-10px', left: '0', width: '426px', height: '110%' }}>
                                {showBannerImg &&
                                    <Image
                                        loader={bannerImgCdnLoader}
                                        src="ovlg-hero-banner-lyle-684x680_XHppjdrVTHG.webp"
                                        alt="Attorney Lyle Solomon" layout='fill' objectFit='cover' priority className={`${homeStyle['lyle-img']}`} />
                                }

                                <img
                                    ref={compressedBannerImage}
                                    onLoad={handleLoad}
                                    // src={`${publicRuntimeConfig.rootPath}/images/ovlg-hero-banner-lyle-426x424-1kb.webp`}
                                    src={bannerDataUriString}
                                    // src={`https://ik.imagekit.io/800530ovlg/banner-images/ovlg-hero-banner-lyle-426x424-1kb_ULXecFAw_Ak.webp`}
                                    alt="Attorney Lyle Solomon"
                                    className={`${homeStyle['lyle-img']}`}
                                    style={imgStyles}
                                />
                                {/* https://ik.imagekit.io/800530ovlg/banner-images/ovlg-hero-banner-lyle-426x424-1kb_ULXecFAw_Ak.webp?updatedAt=1634891194924 */}
                                {/* } */}


                                {/* <Image
                                    // loader={bannerImgCdnLoader}
                                    // src="ovlg-hero-banner-lyle-684x680_XHppjdrVTHG.webp"
                                    src="https://picsum.photos/id/237/424/426"
                                    alt="Attorney Lyle Solomon" layout='fill' objectFit='cover' priority className={`${homeStyle['lyle-img']}`} /> */}

                                {/* <Image 
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
                                        <Image
                                            loader={smallImgCdnLoader}
                                            src="picture-382250_I9quaZwWO.webp"
                                            className=""
                                            width={84}
                                            height={100}
                                            alt="Attorney Ivan Raevski"
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                        <Image
                                            loader={smallImgCdnLoader}
                                            src="picture-382277_WP-Vo5qGSt.webp"
                                            className=""
                                            width={84}
                                            height={100}
                                            alt="Attorney Camron Hoorfar"
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                        <Image
                                            loader={smallImgCdnLoader}
                                            src="picture-382251_e7BakZmFOe.webp"
                                            className=""
                                            width={84}
                                            height={100}
                                            alt="Attorney Robert Davis"
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-3 pb-1 img-responsive">
                                        <Image
                                            loader={smallImgCdnLoader}
                                            src="picture-404540_kqy7X1PyJ.webp"
                                            className=""
                                            width={84}
                                            height={100}
                                            alt="Attorney Vincent Adams"
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
