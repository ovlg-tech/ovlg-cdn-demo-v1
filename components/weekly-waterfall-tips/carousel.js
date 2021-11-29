import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import CarouselItem from './carousel-item';


export default function Carousel({ CarouselData }) {
    const renderEachCarouselItem = (eachItem, index) => {
        return (
            <CarouselItem key={eachItem.id} ItemInfo={eachItem} index={index} />
        )
    }

    return (
        <>
            <div id="waterfallCarousel" className="carousel carousel-darkd slide" data-bs-ride="carousel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carousel-inner">
                                {CarouselData.map(renderEachCarouselItem)}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev d-none" type="button" data-bs-target="#waterfallCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-none" type="button" data-bs-target="#waterfallCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}