//import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const logoCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/${src}?w=${width}&q=${quality || 75}`
}

export default function Header() {
    return (
        <header className="fixedHeader" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-xl-10 offset-xl-1">
                        <div className="row">
                            <div className="col-8 col-md-4 col-lg-3 pad-t-10" style={{ paddingRight: "0" }}>
                                <a href="/">
                                    <img
                                        src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo.png`}
                                        alt="OVLG logo"
                                        className="logo img-responsive"
                                        width={293}
                                        height={55}
                                        priority
                                    />
                                   </a>
                            </div>

                            <div className="col-6 col-md-8 col-lg-9 d-none d-md-block d-lg-block d-xl-block d-xxl-block text-right float-end">
                                <div className="ff-Oswald font-size-22 pad-tb-10 pad-lr-20 text-center display-inline-block" >
                                    <span style={{ display: "inline-block", marginRight: "10px" }}>
                                        <a href="/free-consultation" className="rippleCTA">
                                            <span>Free consultation</span>
                                        </a>
                                    </span>
                                    <a href="tel:+18005306854" title="Call Toll Free: (800)-530-OVLG" className="bannerCTAlink colr-brown  d-inline" >
                                        <i className="fa fa-phone" aria-hidden="true"></i> (800)-530-OVLG
                                    </a>
                                </div>

                                <div className="el-inline" >
                                    <a className="el-inline img-bbb-logo" target="_blank"
                                        href="http://www.bbb.org/sacramento/business-reviews/debt-relief-services/oak-view-law-group-apc-in-citrus-heights-ca-47014743">
                                        <img
                                            src={`${publicRuntimeConfig.rootPath}/images/BBB-A-Rating.png`}
                                            alt="BBB-A-Rating"
                                            width={80}
                                            height={41}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none"><hr /></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 ff-Oswald font-size-22 d-lg-none d-md-none">
                        <a href="tel:+18005306854" title="Call Toll Free: (800)-530-OVLG" className="bannerCTAlink colr-grey  d-inline"><i className="fa fa-phone" aria-hidden="true"></i> (800)-530-OVLG
                        </a>
                    </div>
                    <div className="col-5 d-lg-none d-md-none text-right pad-none">
                        <span style={{ display: "inline-block", marginRight: "10px" }}>
                            <a href="/free-consultation" className="rippleCTA">
                                <span>Free consultation</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}