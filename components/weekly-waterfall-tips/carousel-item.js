import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import React, { useEffect, useState } from 'react'

const CarouselItem = ({ ItemInfo, index }) => {

    const [carouselItemHtml, setCarouselItemHtml] = useState()
    const carouselItemContentFetch = async () => {

        const rawHtmlContent = (await import(`../../contents/weeklyWaterfall/waterfall-details/${ItemInfo.templateFileName}.html`)).default
        setCarouselItemHtml(rawHtmlContent)
    }
    useEffect(() => {
        carouselItemContentFetch()
    }, [])
    return (
        <>
            {/* <div className={`carousel-item ${index == 0 ? "active container" : "container"}`} data-bs-interval="false">
                <div className="row">
                    <div className="col-xs-10 offset-xs-1" dangerouslySetInnerHTML={{ __html: carouselItemHtml }} />
                </div>
            </div> */}
            <div className={`carousel-item ${index == 0 ? "active container" : "container"}`} data-bs-interval="false">
                <div className="row">

                    <h2 className="waterfalltip-h2"><i className="bi bi-info-circle-fill"></i> {ItemInfo.h2}</h2>
                    <div className="slider-height">
                        {/* <img className="img-responsive float-start mar-r-20 border-grey-1 lazyload"
                            alt={ItemInfo.img.alt}
                            title={ItemInfo.img.alt}
                            src={ItemInfo.img.src} /> */}
                        <div className="img-responsive me-3 border border-secondary float-start" style={{ position: 'relative', width: '300px', height: '400px' }}>
                            {ItemInfo.flgLocalImg == '1' &&
                                <Image
                                    src={`${publicRuntimeConfig.rootPath}/images/waterfall/${ItemInfo.img.src}`}
                                    alt={ItemInfo.img.alt}
                                    title={ItemInfo.img.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={50}
                                />
                            }
                            {ItemInfo.flgLocalImg != '1' &&
                                <Image
                                    alt={ItemInfo.img.alt}
                                    title={ItemInfo.img.alt}
                                    src={ItemInfo.img.src}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={50}
                                />
                            }
                        </div>
                        <div className="parent-description" dangerouslySetInnerHTML={{ __html: carouselItemHtml }} />

                        <div className="colr-grey font-size-13 text-end"><strong>Updated on: </strong>{ItemInfo.updatedOn}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselItem