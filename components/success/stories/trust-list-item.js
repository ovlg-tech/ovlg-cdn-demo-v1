import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function TrustListItem({ trustItem }) {

    return (
        <>
            <div className="col-sm-6 col-lg-4">

                <div className="row">

                    <div className="col-xs-12 text-center mb-3 clearfix">
                        <span className="fs-4 textUnderline colr-black "> {trustItem.saved_amount_label} </span>
                    </div>
                    <div className="col-xs-12 my-3">
                        <div className="row">
                            <div className="col-auto nego-img-sect">
                                <a href="#" data-bs-toggle="modal" data-bs-target={`#trustItemModal_${trustItem.id}`}>
                                    {/* <img
                                        className="img-responsive pull-left story-img lazyloaded"
                                        width="150"
                                        height="200"
                                        alt={trustItem.img.alt_text}
                                        src={trustItem.img.src} /> */}
                                    <Image
                                        className="img-responsive pull-left story-img border border-secondary"
                                        alt={trustItem.img.alt_text}
                                        src={trustItem.img.src}
                                        width={150}
                                        height={200}
                                        quality={50}
                                    />
                                </a>
                            </div>
                            <div className="col nego-info-sect ps-0">
                                <div>Client Initials: <b>{trustItem.client_initials}</b></div>
                                <div>Debt processed: <b>{trustItem.debt_processed_label}</b></div>
                                <div>Debt settled: <b>{trustItem.debt_settled_lebel}</b></div>
                                <div className="creditor-name" title="Bank Of America(cavalry)">{trustItem.creditor_name}</div>
                            </div>
                        </div>
                        <div className="modal fade" id={`trustItemModal_${trustItem.id}`} tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <img
                                            width="100%"
                                            height="500"
                                            alt={trustItem.img.alt_text}
                                            src={trustItem.img.src}
                                            className="lazyload org_img img-responsive" /> */}
                                        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                            <Image
                                                className="img-responsive pull-left story-img border"
                                                placeholder="blur"
                                                alt={trustItem.img.alt_text}
                                                src={trustItem.img.src}
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}