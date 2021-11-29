import React, { useState } from 'react';
import Image from 'next/image'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

// import Reviewsfn from "./fn_reviews";
import YouTube from "react-youtube";

export default function PrincipalAttorneyLetter() {
  const [showVid, setShowVid] = useState(false);
  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0
    },
  };
  const ytOnReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.playVideo();
  }
  const loadYoutubeVideo = () => {
    setShowVid(true)
  }

  return (
    <>    
      <div className="col-lg-10 offset-md-0 offset-lg-1 pad-t-20">
        <div className="row">          
          <div className="col-lg-12 featured-logos mt-4 d-flex flex-md-row flex-column align-items-center justify-content-between flex-wrap">
                <div className="featured-text header-h4 border-end pe-4">Featured In</div>
                <div className="grayscale py-3" style={{opacity: '70%'}}>
                  <img src={`${publicRuntimeConfig.rootPath}/images/yahoo.jpg`} alt="yahoo logo" className="img-fluid" style={{ aspectRatio: 118/36 }}/>
                </div>
     
                <div className="grayscale opacity-75 py-3">
                  <img src={`${publicRuntimeConfig.rootPath}/images/fox-News.jpg`} alt="foxnews logo" className="img-fluid" style={{ aspectRatio: 40/40 }}/>
                </div>

                <div className="grayscale opacity-75 py-3">
                  <img src={`${publicRuntimeConfig.rootPath}/images/msn-logo.jpg`} alt="msn logo" className="img-fluid" style={{ aspectRatio: 76/33 }} />
                </div>

                <div className="grayscale opacity-75 py-3">
                  <img src={`${publicRuntimeConfig.rootPath}/images/ENT-India.jpg`} alt="entrepreneur logo" className="img-fluid" style={{ aspectRatio: 143/37 }} />
                </div>     

                <div className="grayscale py-3">
                  <img src={`${publicRuntimeConfig.rootPath}/images/Thrive-global.jpg`} alt="Thrive global logo" className="img-fluid" style={{ aspectRatio: 214/24 }}/>
                </div>

              {/*  <div className="grayscale opacity-75 py-3">
                  <img src={`${publicRuntimeConfig.rootPath}/images/centsai.jpg`} alt="Centsai logo" className="img-fluid" style={{ aspectRatio: 63/49 }}/>
                </div> */}

                <div className="grayscale opacity-75 py-3">
                  <img src={`${publicRuntimeConfig.rootPath}/images/markets-businessinsider.jpg`} alt="Markets business insider logo"  className="img-fluid" style={{ aspectRatio: 94/36 }}/>
                </div>               

                <div className="grayscale py-3">
                  <img src={`${publicRuntimeConfig.rootPath}/images/gobankingrates.jpg`} alt="go banking rates logo" className="img-fluid" style={{ aspectRatio: 218/33 }}/>
                </div>

                
              </div>
        </div>
      </div>
      

    <div className="col-lg-10 offset-md-0 offset-lg-1 pad-tb-20">
      <div className="row my-5">
        <div className="col-sm-12">
          <h2 style={{ margin: "0" }}>A letter from our Principal Attorney</h2>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div style={{ fontFamily: "'Delius', cursive", fontSize: "19px" }}>
            <p>
              My name is Lyle Solomon. I have worked with people like you since 1991.
            </p>
            <p>I have helped:</p>
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
              onClick={loadYoutubeVideo}
            >
              <div className="yt_iframe_img">
                <div id="vid_interview_attorney">
                  {showVid ?
                    <YouTube videoId="iANWSQtx-ZQ" opts={opts} onReady={ytOnReady} />
                    :
                    <>
                      <img src={`${publicRuntimeConfig.rootPath}/images/solomon-interview-max.png`} alt="Attorney youtube video thumbnail" className="w-100" />

                    {/*  < Image
                        src={`${publicRuntimeConfig.rootPath}/images/solomon-interview-max.png`}
                        alt="Attorney youtube video thumbnail"
                        className="width100 ls-is-cached lazyloaded"
                        layout="responsive"
                        width={448}
                        height={252}
                      /> */}
                      <i className="fa fa-youtube-play" aria-hidden="true" style={{ boxShadow: 'none' }}></i>
                    </>

                  }
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

    </>
  );
}
