//import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const imgCdnLoader = ({ src, width, quality }) => {
    return `https://ik.imagekit.io/bvdsyrew4be/${src}?w=${width}&q=${quality || 75}`
}

export default function PersonalConnection({ BannerInfo }) {
    // console.log(BannerInfo);
    const customText = BannerInfo.personalConnectionCustomText ? BannerInfo.personalConnectionCustomText : false
    const refundLink = customText ? customText.refundLink : false
    const bannerRefundLinkTextRender = () => {
        // personalConnectionCustomText defined, refundLink also defined but blank text | show nothing, ie remove
        // personalConnectionCustomText defined, refundLink also defined but has text | show the text
        // otherwise show default msg
        let refundLinkText = '100% refund policy'; // default case
        let showRefundLink = true; // default case

        if (typeof BannerInfo.personalConnectionCustomText !== 'undefined' && typeof BannerInfo.personalConnectionCustomText.refundLink !== 'undefined') {
            refundLinkText = BannerInfo.personalConnectionCustomText.refundLink
            showRefundLink = showRefundLink && BannerInfo.personalConnectionCustomText.refundLink.trim() != '';
        }

        return (
            <p className="mt-3"> {showRefundLink &&
                <a href="/no-results-refund-policy" className="colr-light-blue">{refundLinkText}</a>
            } </p>
        )
    }

    return (
        <>
            <aside className="col-12 col-md-5 col-lg-4">
                <div className="position-relative banner-image-group" style={{ minHeight: '360px' }}>

                    {/* <Image alt="Attorney Lyle Solomon" src={`${publicRuntimeConfig.rootPath}/images/compressed-banner-image-lyle-solomon.webp`}
                        layout="fill" objectFit="cover" priority className="banner-lyle-image" /> */}
                    <img
                        loader={imgCdnLoader}
                        src="https://ik.imagekit.io/bvdsyrew4be/compressed-banner-image-lyle-solomon_v700VjgJP.webp?w=3840&q=75"
                        alt="Attorney Lyle Solomon"
                        layout="fill" objectFit="cover" priority className="banner-lyle-image"
                    />
                    <div className="banner-lyle-image-text">
                        <div className="banner-main-text"><em>"I can make you debt free."</em></div>
                        <div className="colr-orng bold font-size-24"><b>Helped 6700+</b></div>
                        <div className="colr-white">
                            <a href="/attorneys/lyle-david-solomon" className="colr-light-blue">- Attorney Solomon</a>  (Nationally Recognized)
                        </div>

                        {bannerRefundLinkTextRender()}
                    </div>
                </div>
            </aside>
        </>
    )
}