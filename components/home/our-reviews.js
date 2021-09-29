import Image from 'next/image'
import homeStyle from '../../styles/Homepage.module.css'

export default function OurReviews() {
  return (
    <section className="container mar-b-20">
      <h2 className="text-center">Our reviews</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="http://www.ovlg.com/reviews/AC3.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/CNzMCfj6sAA/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/CNzMCfj6sAA/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/CNzMCfj6sAA/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                AC3 from NJ
                <br />
                saved $47,629
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="https://www.ovlg.com/reviews/TE.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/wgiUALcfF5M/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/wgiUALcfF5M/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/wgiUALcfF5M/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                TE from TX
                <br />
                saved $13,105
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="http://www.ovlg.com/reviews/DR2.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/aYrtqaPrZMI/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/aYrtqaPrZMI/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/aYrtqaPrZMI/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                DR2 from IL
                <br />
                saved $31,420
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="http://www.ovlg.com/reviews/RC.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/IyPSEkexbg0/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/IyPSEkexbg0/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/IyPSEkexbg0/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                RC from MI
                <br />
                saved $8,873
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="http://www.ovlg.com/reviews/KD.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/vWP0be_NwEE/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/vWP0be_NwEE/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/vWP0be_NwEE/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                KD from RI
                <br />
                saved $7,645
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="http://www.ovlg.com/reviews/BM.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/e_7DVaDwVrA/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/e_7DVaDwVrA/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/e_7DVaDwVrA/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                BM from NJ
                <br />
                saved $12,708
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="http://www.ovlg.com/reviews/SR3.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/du9sK7XYAwY/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/du9sK7XYAwY/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/du9sK7XYAwY/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                SR3 from MA
                <br />
                saved $22,242.37
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" itemProp="name">
          <div className={`${homeStyle["homepageServiceBox"]}`}>
            <a
              href="http://www.ovlg.com/reviews/JC3.html"
              className="text-center"
            >
              {/* <img
                data-src="https://i1.ytimg.com/vi/cWSbEilyVDs/hqdefault.jpg"
                alt=""
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                src="https://i1.ytimg.com/vi/cWSbEilyVDs/hqdefault.jpg"
              /> */}
              <Image
                src="https://i1.ytimg.com/vi/cWSbEilyVDs/hqdefault.jpg"
                className="img-fluid grayscale-to-normal center-block lazyloaded"
                layout="responsive"
                width={208}
                height={156}
              />
              <div className="header-h4 colr-brown text-center">
                JC3 from IL
                <br />
                saved $10,292.30
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col-sm-12 text-center">
          <a href="/reviews" className="btn btn-lg btn-warning">
            See More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
