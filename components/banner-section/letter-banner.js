export default function LetterBanner({ BannerInfo }) {
    return (
        <>
            <div data-include="banner">
                <section className="ovlg-sample-letters-banner row">
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                    <div className="header-h1 colr-white text-center">{BannerInfo.pageTopicTitle}</div>
                    </div>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
}