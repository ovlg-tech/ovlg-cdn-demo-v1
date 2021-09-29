import Image from 'next/image'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function PrincipalAttorneyLetter() {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-sm-12">
          <h2 style={{ margin: "0" }}>A letter from our Principal Attorney</h2>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div style={{ fontFamily: "'Delius', cursive", fontSize: "19px" }}>
            <p>
              My name is Lyle Solomon. I have worked with law firms in
              California, Nevada, and Arizona since 1991.
            </p>
            <p>I have helped people like you to:</p>
            <div>
              - Reduce monthly payments
              <br />- Waive late fees
              <br />- Create a single, manageable monthly payment
              <br />- Reduce or eliminate collection calls
              <br />- Reduce interest rates
            </div>

            <p>
              I charge fees on success. I've already helped 6700+ people become
              debt-free with the right strategies.{" "}
            </p>

            <p>
              Sincerely,
              <br />
              Lyle Solomon
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 col-sm-12 mar-tb-20"
          itemScope=""
          itemType="http://schema.org/VideoObject"
        >
          <div className="tab-design-vertical">
            <div
              className="embed-responsive embed-responsive-16by9 video"
              onClick={(e) => loadYoutubeVideoThroughYTApi(e.target.offsetParent)}
              data-src-id="vid_interview_attorney"
              data-yut-var="iANWSQtx-ZQ"
            >
              <div className="yt_iframe_img">
                <div id="vid_interview_attorney">
                  {/* <img
                    data-src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/images/solomon-interview-max.webp"
                    alt="Attorney youtube video thumbnail"
                    className="width100 ls-is-cached lazyloaded"
                    src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/images/solomon-interview-max.webp"
                  /> */}
                  <Image
                    src={`${publicRuntimeConfig.rootPath}/images/solomon-interview-max.png`}
                    alt="Attorney youtube video thumbnail"
                    className="width100 ls-is-cached lazyloaded"
                    layout="responsive"
                    width={448}
                    height={252}
                  />
                  <i className="fa fa-youtube-play" aria-hidden="true" style={{ boxShadow: 'none' }}></i>
                </div>
              </div>
              <div className="meta-itemprop">
                <meta
                  itemProp="name"
                  content="Video on: Interview with Principal Attorney Lyle David Solomon"
                />
                <meta
                  itemProp="description"
                  content="Interview with Principal Attorney Lyle David Solomon on - How to manage debt during the pandemic. /"
                />
                <meta
                  itemProp="embedURL"
                  content="https://www.youtube.com/embed/iANWSQtx-ZQ?rel=0"
                />
                <meta
                  itemProp="thumbnailUrl"
                  content="https://i.ytimg.com/vi/iANWSQtx-ZQ/maxresdefault.jpg"
                />
                <meta
                  itemProp="uploadDate"
                  content="2021-01-04T11:00:43.000Z"
                />
                <meta itemProp="duration" content="PT29M11S" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
