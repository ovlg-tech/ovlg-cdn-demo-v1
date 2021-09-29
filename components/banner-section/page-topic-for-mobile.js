export default function PageTopicForMobile({ BannerInfo }) {
    return (
        <>
            <aside className="col-12 col-md-4 col-lg-4 pad-tb-20 d-block d-sm-block d-md-none">
                <div className="row text-center">
                    <h1 className="colr-white">{BannerInfo.pageTopicTitle}</h1>
                </div>
            </aside>
        </>
    )
}