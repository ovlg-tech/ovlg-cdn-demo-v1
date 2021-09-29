export default function PageTopic({ BannerInfo }) {
    return (
        <>
            <aside className="col-12 col-md-4 col-lg-4 d-none d-sm-none d-md-block">
                <div className="row text-center">
                    <h1 className="colr-white" style={{ paddingTop: "200px", fontSize: "200%" }}>{BannerInfo.pageTopicTitle}</h1>
                </div>
            </aside>
        </>
    )
}