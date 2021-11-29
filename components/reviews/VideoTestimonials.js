import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import styleReviews from '../../styles/Reviews.module.css'

export default function VideoTestimonials() {
    return (
        <section className="content">

            <h2 className="text-center">Video testimonials </h2>

            <div className="main_element" itemProp="video" itemScope="" itemType="http://schema.org/VideoObject">
                <div className="show_client_details">
                    <span className="meta_tags">
                        <meta itemProp="duration" content="PT23S" />
                        <meta itemProp="thumbnailUrl" content="https://img.youtube.com/vi/IyPSEkexbg0/hqdefault.jpg" />
                        <meta itemProp="embedURL" content="//www.youtube.com/embed/IyPSEkexbg0" />
                        <meta itemProp="uploadDate" content="2013-10-16T08:36:35Z" />
                        <meta itemProp="name" content="Client RC from MI" />
                    </span>
                    <div id="smallVid"></div>
                    <section className="row mar-tb-20">
                        <div className="col-md-8 pad-none-lr-mob pad-b-10">
                            <div className="tab-design-vertical">
                                <div className="embed-responsive embed-responsive-16by9" id="ytb_src" onClick={() => { loadYoutubeVideoThroughYTApi(ytb_src) }} data-src-id="player-1" data-yut-var="IyPSEkexbg0">

                                    <div className="yt_iframe_img">
                                        <div id="player-1">
                                            <i aria-hidden="true" className="fa fa-play-circle yt-icon"></i>
                                            <img className=" ls-is-cached lazyloaded" id="yt-data-img" data-src="https://i.ytimg.com/vi/IyPSEkexbg0/hqdefault.jpg" src="https://i.ytimg.com/vi/IyPSEkexbg0/hqdefault.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4 ${styleReviews["ovlgSidebar"]}`} style={{ margin: '0' }}>
                            <div>
                                <div className="bold mar-tb-10">
                                    <a className="font-size-24 colr-green" id="client_address_whole_href" href="https://www.ovlg.com/reviews/RC.html">
                                        <span id="client_address_whole" itemProp="name">

                                            <a href="http://www.ovlg.com/reviews/RC.html" className="colr-grey">Client <b>RC</b> from <b>MI</b> saved <b>$8,873.10</b>
                                            </a>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="bold mar-tb-10">Client satisfaction level:</div>
                                <span id="getratings" className={`mx-auto ${styleReviews["ratingBG"]} pull-left ${styleReviews["rating5"]}`} title="5 out of 5"></span>
                            </div>
                            <div>
                                <span id="eliminate_description" itemProp="description">
                                    <div className="bold mar-tb-10">Debt processed: </div>
                                    <span id="total_debt_processed">$19,116.34</span>
                                </span>
                            </div>
                            <div>
                                <div className="bold mar-tb-10">Type of Debt: </div>
                                <span id="type_of_debt_big">Accounts in Collection, Credit Card</span>
                            </div>
                            <div>
                                <div className="bold mar-tb-10">Post Date:</div>
                                <span id="date" className="text-right">03 Nov, 2010</span>
                            </div>
                            <div><a id="sign_link" className={`btn ${styleReviews["btn-custom"]} mar-tb-20`} href="https://www.ovlg.com/reviews/RC.html"><span id="clientInitial">Read RC's case study </span></a></div>
                        </div>
                        <div className="clearfix"></div>
                    </section>
                </div>
            </div>
        </section>
    );
}
