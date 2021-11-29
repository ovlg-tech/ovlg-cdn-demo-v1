import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const logoCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/800530ovlg/${src}?w=${width}&q=${quality || 75}`
}

export default function Header() {
    const logoImgString = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAAA3CAYAAABQMrzdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkMxMURCNDBFNUU2MTFFQkI3OERCNUVFQjAyMjc1QzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkMxMURCM0ZFNUU2MTFFQkI3OERCNUVFQjAyMjc1QzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI1Q0M3RTlFMzIwMTFFQjhBRjJCMUUxMjJCRTcwOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI1Q0M3RUFFMzIwMTFFQjhBRjJCMUUxMjJCRTcwOTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Wn0OwAAAcOklEQVR42uxd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"
    return (
        <header className="fixedHeader" >

            <script type="text/javascript" defer src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/js/google_analytics.js"></script>
            {process.env.prod &&
                <script dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-3474577-1'); `,
                }} />
            }

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-xl-10 offset-xl-1">
                        <div className="row">
                            <div className="col-8 col-md-4 col-lg-3 pad-t-10" style={{ paddingRight: "0" }}>
                                <a href="/">
                                    {/* <Image
                                        src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo.png`}
                                        alt="OVLG logo"
                                        className="logo img-responsive"
                                        width={293}
                                        height={55}
                                        priority
                                    /> */}

                                    {/* <Image
                                        loader={logoCdnLoader}
                                        src="ovlg-logo_0C5iTaB29j.png"
                                        alt="OVLG logo"
                                        className="logo img-responsive"
                                        width={293}
                                        height={55}
                                        priority
                                    /> */}
                                    <Image
                                        src={logoImgString}
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
                                            <span>Free Consultation</span>
                                        </a>
                                    </span>
                                    <a href="tel:+18005306854" title="Call Toll Free: (800)-530-OVLG" className="bannerCTAlink colr-brown  d-inline" >
                                        <i className="fa fa-phone" aria-hidden="true"></i> (800)-530-OVLG
                                    </a>
                                </div>

                                <div className="el-inline" >
                                    <a className="el-inline img-bbb-logo" target="_blank"
                                        href="http://www.bbb.org/sacramento/business-reviews/debt-relief-services/oak-view-law-group-apc-in-citrus-heights-ca-47014743" rel="noopener">
                                        <Image
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
                        <a href="tel:+18005306854" title="Call Toll Free: (800)-530-OVLG" className="bannerCTAlink colr-grey  d-inline"><i className="bi bi-telephone-fill fs-6" aria-hidden="true" style={{ display: 'inline-block', width: '16px', height: '16px' }}></i> (800)-530-OVLG
                        </a>
                    </div>
                    <div className="col-5 d-lg-none d-md-none text-right pad-none">
                        <span style={{ display: "inline-block", marginRight: "10px" }}>
                            <a href="/free-consultation" className="rippleCTA">
                                <span>Free Consultation</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </header>


    )
}