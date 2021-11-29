import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import loadChatCode from './chatcodeLoader';
import TrustlinkWindowOpener from './trustlink_window_opener';
const imagesLoader = ({ src, width, quality }) => {
  return `/images/${src}?w=${width}&q=${quality || 75}`
}

export default function Footer({ FooterInfo }) {
  const excludeJs = FooterInfo ? (FooterInfo.excludeJs ? FooterInfo.excludeJs : []) : []

  const [chatLoaded, setChatLoaded] = useState(false);
  let flgWindowEventListner = false;
  let flgLoadChatCode = false;

  const addChatCodeJs = () => {
    if (!flgLoadChatCode) {
      flgLoadChatCode = true
      loadChatCode(() => {
        setChatLoaded(true);
      });
    }
  }

  const bindWindowScroll = async () => {
    if (!flgWindowEventListner) {
      window.addEventListener('scroll', addChatCodeJs);
      flgWindowEventListner = true;
    }
  }


  // Following 2 useEffect blocks are for setting/loading chat widget for any 2 of following events whichever occurs first.
  // i) a specified amount of time after page loaded, right now it is 15.5s 
  // ii) user scrolles the page.
  // I am doing it to experiment its effect on mobile device page speed. 
  useEffect(() => {
    // bindWindowScroll()
    if (!flgWindowEventListner) {
      window.addEventListener('scroll', addChatCodeJs);
      flgWindowEventListner = true;
    }
    return () => window.removeEventListener('scroll', addChatCodeJs);
  }, [])


  useEffect(() => {
    const timer = setTimeout(() => {
      addChatCodeJs()
    }, 15500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <div className="container-fluid" style={{ boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)" }} id="whiteTopFooterHide">
        <div className="row">
          <div className="col-md-12">
            <div className="pad-tb-20 text-center" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <ul className="footerItem d-flex flex-md-row  flex-wrap flex-column justify-content-center align-items-center">
                <li>
                  <div style={{ position: 'relative', width: '128px', height: '102px' }}>
                    <a href="https://www.expertise.com/ca/sacramento/bankruptcy-attorney" title="expertise badge" target="_blank" rel="noopener">
                      <Image
                        loader={imagesLoader}
                        src="expertise-badge-small.webp"
                        alt="expertise badge"
                        className="img-fluid"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div style={{ position: 'relative', width: '130px', height: '49px' }}>
                    <a href="https://botw.org/listing/oakview-law-group/" title="best of the web trusted badge" target="_blank" rel="noopener" style={{ cursor: 'pointer' }} id="footer_trust_badge">
                      {/* <img
                      src="https://s3.amazonaws.com/botwcdn.org/trustbadges/badge-templates/green/130x49-8.png"
                      alt="This site is verified as a Trusted Site by Best of the Web"
                      useMap="#Map" style={{ aspectRatio: 130 / 49 }}
                    /> */}
                      <Image
                        loader={imagesLoader}
                        src={`amazon-trustbadges-green-130x49-8.png`}
                        alt="This site is verified as a Trusted Site by Best of the Web"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div style={{ position: 'relative', width: '141px', height: '77px' }}>
                    {/* <img src={`${publicRuntimeConfig.rootPath}/images/TrustLink.jpg`} alt="TrustLink logo" useMap="#Map" style={{ aspectRatio: 141 / 77 }} /> */}
                    <Image
                      loader={imagesLoader}
                      src={`TrustLink.jpg`}
                      alt="TrustLink logo"
                      useMap="#Map"
                      layout="fill"
                      objectFit="contain"
                    />
                    <map name="Map" id="Map">
                      <area
                        id="trustlink_sec"
                        alt=""
                        title=""
                        href="https://www.trustlink.org/WriteReviewP.aspx?CompanyID=%2frlCIdTp%2bzkm1VWxYRRkYw%3d%3d"
                        shape="rect"
                        target="_blank"
                        coords="14,56,61,71"
                      />
                      <area
                        alt="TrustLink logo"
                        title=""
                        href="https://www.trustlink.org/Reviews/Oak-View-Law-Group-APC-206054627"
                        target="_blank"
                        shape="rect"
                        coords="82,56,127,71"
                      />
                    </map>
                  </div>
                  <TrustlinkWindowOpener />

                </li>
                <li
                  itemProp="itemReviewed"
                  itemScope
                  itemType="https://schema.org/Organization">
                  <div style={{ position: 'relative', width: '141px', height: '77px' }}>
                    <a href="https://www.bbb.org/us/ca/auburn/profile/debt-relief-services/oak-view-law-group-apc-1156-47014743/customer-reviews" title="BBB review" target="_blank" rel="noopener">
                      {/* <img src={`${publicRuntimeConfig.rootPath}/images/review-bbb.jpg`} alt="Customer ratings on BBB" style={{ aspectRatio: 141 / 77 }} /> */}
                      <Image
                        loader={imagesLoader}
                        src={`review-bbb.jpg`}
                        alt="Customer ratings on BBB"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                    <meta itemProp="name" content="Oak View Law Group" />
                  </div>
                </li>
                <meta itemProp="reviewCount" content="84" />
                <meta itemProp="ratingValue" content="4.95" />
                { /* <li>
                  <a target="_blank" href="http://www.bbb.org/sacramento/business-reviews/debt-relief-services/oak-view-law-group-apc-in-citrus-heights-ca-47014743" rel="nofollow">
                    <Image
                      loader={imagesLoader}
                      src={`BBB-A-Rating.png`}
                      alt="BBB-A-Rating"
                      width={109}
                      height={56}
                    />
                  </a>
                </li>
                <li
                  itemProp="itemReviewed"
                  itemScope
                  itemType="https://schema.org/Organization"
                  style={{
                    position: "relative",
                    top: "10px",
                    marginBottom: "25px",
                  }}
                >
                  <Image
                    loader={imagesLoader}
                    src={`BBB-accredited-rating.jpg`}
                    alt="4.8 rating"
                    width={100}
                    height={20}
                  />
                  <br />
                  <a href="https://www.bbb.org/us/ca/citrus-heights/profile/debt-relief-services/oak-view-law-group-apc-1156-47014743" rel="nofollow" target="_blank">
                    Based on 82 reviews
                  </a>
                  <br />
                  14 Years in Business
                  <meta itemProp="name" content="Oak View Law Group" />
                </li>
                <meta itemProp="reviewCount" content="82" />
                <meta itemProp="ratingValue" content="4.84" /> */}
                <li>
                  <div style={{ position: 'relative', width: '141px', height: '77px' }}>
                    <a href="https://www.credential.net/48ce1e80-ac54-4614-bd1a-0843f19250f1#gs.a5alei" target="_blank" rel="noopener" title="IAPDA">
                      {/* <img src={`${publicRuntimeConfig.rootPath}/images/IAPDA.jpg`} alt="IAPDA logo" style={{ aspectRatio: 141 / 77 }} /> */}
                      <Image
                        loader={imagesLoader}
                        src={`IAPDA.jpg`}
                        alt="IAPDA logo"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>

                <li>
                  <div style={{ position: 'relative', width: '156px', height: '35px' }}>
                    <a href="/calchamber.html" target="_blank" rel="noopener" title="Calchamber Member">
                      {/* <img src={`${publicRuntimeConfig.rootPath}/images/calchamber_Member.jpg`} alt="Calchamber Member" style={{ aspectRatio: 156 / 35 }} /> */}
                      <Image
                        loader={imagesLoader}
                        src={`calchamber_Member.jpg`}
                        alt="Calchamber Member"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>
                {/*  <li>
                  <a href="/calchamber.html" target="_blank" rel="nofollow"><span
                    title="Calchamber Member"
                    name="Calchamber Member"
                    className="common_sprite calchamber_Member"
                    style={{ verticalAlign: "middle" }}
                  ></span></a>
                </li> */}
                <li>
                  <div style={{ position: 'relative', width: '156px', height: '35px' }}>
                    <a href="/state-bar-california-certificate-registration.html" aria-label="Calbar Registered" target="_blank" rel="noopener" title="Calbar Registered">

                      {/* <img src={`${publicRuntimeConfig.rootPath}/images/calbar.jpg`} alt="Calbar Registered" style={{ aspectRatio: 156 / 35 }} /> */}

                      <Image
                        loader={imagesLoader}
                        src={`calbar.jpg`}
                        alt="Calbar Registered"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>
                {/* <li> 
                  <a href="/state-bar-california-certificate-registration.html" target="_blank" rel="nofollow">
                    <span
                      title="Calbar Registered"
                      name="Calbar Registered"
                      className="common_sprite calbar"
                      style={{ verticalAlign: "middle" }}
                    ></span>
                  </a>
                </li> */}

                <li>
                  <div style={{ position: 'relative', width: '184px', height: '40px' }}>
                    <a href="https://www.dnb.com/business-directory/company-profiles.oak_view_law_group_a_professional_corporation.f8da0516c769b409cc43433c0beed5b2.html" target="_blank" aria-label="D&B listed" rel="noopener" title="D&B">
                      {/* <img src={`${publicRuntimeConfig.rootPath}/images/DandB.jpg`} alt="D&B" style={{ aspectRatio: 184 / 40 }} /> */}
                      <Image
                        loader={imagesLoader}
                        src={`DandB.jpg`}
                        alt="D&B"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>
                {/* <li>
                  <a target="_blank" href="https://www.dnb.com/business-directory/company-profiles.oak_view_law_group_a_professional_corporation.f8da0516c769b409cc43433c0beed5b2.html" rel="nofollow">
                    <span
                      title="D&B"
                      name="D&B"
                      className="common_sprite DandB"
                      style={{ verticalAlign: "middle" }}
                    ></span>
                  </a>
                </li>*/}
                <li>
                  <div style={{ position: 'relative', width: '153px', height: '81px' }}>
                    <a href="https://seal.godaddy.com/verifySeal?sealID=soavTJ602i4zePU9VC0bdypC9PUhYG8SMgjj60novyzjcaPxLs" target="_blank" aria-label="go daddy" rel="noopener" title="Godaddy">
                      {/* <img src={`${publicRuntimeConfig.rootPath}/images/go_daddy.jpg`} alt="Godaddy" style={{ aspectRatio: 153 / 81 }} /> */}
                      <Image
                        loader={imagesLoader}
                        src={`go_daddy.jpg`}
                        alt="Godaddy"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>

                {/* <li>
                  <a
                    title="Godaddy"
                    name="Godaddy"
                    href="https://seal.godaddy.com/verifySeal?sealID=soavTJ602i4zePU9VC0bdypC9PUhYG8SMgjj60novyzjcaPxLs" rel="nofollow" className="go_daddy common_sprite"
                    style={{ verticalAlign: "middle" }}
                  ></a>
                </li>*/}
                <li>
                  <div style={{ position: 'relative', width: '128px', height: '67px' }}>
                    <a title="yelp" target="_blank" aria-label="yelp" rel="noopener" href="https://www.yelp.com/biz/oak-view-law-group-auburn-2">
                      {/* <img src={`${publicRuntimeConfig.rootPath}/images/yelp-logo.png`} alt="yelp logo" style={{ aspectRatio: 128 / 67 }} /> */}
                      <Image
                        loader={imagesLoader}
                        src={`yelp-logo.png`}
                        alt="yelp logo"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* footer - start */}

      <footer className="bg-brown-darker colr-white pad-tb-20" id="footer" itemScope itemType="https://schema.org/WPFooter">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-xl-1 col-xl-10 py-0">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  {/* <img src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/images/logo-white.png" alt="ovlg brand logo" className="img-responsive white-logo-footer mar-t-20 pad-t-10" /> */}
                  {/* <img src={`${publicRuntimeConfig.rootPath}/images/logo-white_252x47.png`} alt="ovlg brand logo" className="img-responsive white-logo-footer mar-t-20 pad-t-10" /> */}
                  <div className=" white-logo-footer mt-3 pt-2">
                    <Image
                      loader={imagesLoader}
                      src={`logo-white_252x47.png`}
                      alt="ovlg brand logo"
                      className="img-responsive"
                      width={252}
                      height={47}
                    />
                  </div>
                  <p className="font-size-13">Free Consultations / Fees on Success</p>
                  <p><a href="tel:+18005306854" title="Call Toll Free: (800)-530-OVLG" className="footerPhone colr-beige"><i className="fa fa-phone" aria-hidden="true"></i> (800)-530-OVLG</a></p>
                  <div className="header-h4 colr-white" style={{ marginBottom: "10px", marginTop: "35px" }}><span className="colr-white">Stay Connected</span></div>
                  <div>
                    <a title="Facebook" name="Facebook" href="http://www.facebook.com/OVLGroup" className="font-size-34 colr-white mar-r-10"><em className="fa fa-facebook-square colr-white"></em></a>
                    <a title="Twitter" name="Twitter" href="http://twitter.com/ovlg" className="font-size-34 colr-white mar-r-10"><em className="fa fa-twitter-square colr-white"></em></a>
                    <a title="Pinterest" name="Pinterest" href="http://www.pinterest.com/ovlgroup/" className="font-size-34 colr-white mar-r-10"><em className="fa fa-pinterest-square colr-white"></em></a>
                    <a title="Youtube" name="Youtube" href="https://www.youtube.com/user/OVLGroup" className="font-size-34 colr-white"><em className="fa fa-youtube-square colr-white"></em></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pad-l-20">
                  <div className="footer_content">
                    <div className="header-h4"><span className="colr-white">Important Links</span></div>
                    <div className="row">
                      <ul className="footer-links col-sm-6 mb-0">
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/users/login">Client Login</a></li>
                        <li><a href="/internship/">Scholarship</a></li>
                      </ul>
                      <ul className="footer-links col-sm-6">
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/newsletters">Newsletter</a></li>
                        <li><a href="/transparency">Terms of Use</a></li>
                        <li><a href="/sitemap">Sitemap</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <div className="header-h4"><span className="colr-white">Our Products</span></div>
                  <ul className="footer-links">
                    <li><a href="/debt-relief/process.html">Debt Relief</a></li>
                    <li><a href="/debt-consolidation">Debt consolidation</a></li>
                    <li><a href="/debt-settlement">Debt settlement</a></li>
                    <li><a href="/debt-management">Debt management</a></li>
                    <li><a href="/debt-consolidation/payday-loan.html">Payday loan consolidation</a></li>
                    <li><a href="/bankruptcy">Bankruptcy</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6 pad-b-20">
                  <div className="header-h4 colr-white"><span className="colr-white">Office Locations</span></div>
                  <div><i className="fa fa-check"></i> <b>California Office</b></div>

                  <div itemScope itemType="http://schema.org/PostalAddress" className="font-size-13 colr-beige">
                    <span itemProp="streetAddress">11899 Edgewood Road, Suite L4</span>,&nbsp;
                    <span itemProp="addressLocality">Auburn</span>,&nbsp;
                    <span itemProp="addressRegion">CA</span>&nbsp;
                    <span itemProp="postalCode">95603-3536</span>,&nbsp;
                    <span itemProp="addressCountry">United States</span>&nbsp;
                  </div>
                  {/* <li className="font-size-13 mar-b-20 colr-beige">4966 El Camino Real STE 225<br/>Los Altos, CA, 94022 United States</li> */}

                  <div><i className="fa fa-check"></i> <b>Minnesota Office</b></div>
                  <div className="font-size-13 mar-b-20 colr-beige">2400 Hennepin Ave S.Minneapolis <br />MN 5540 5United States</div>

                  <div><i className="fa fa-check"></i> <b>Illinois Office</b></div>
                  <div className="font-size-13 mar-b-20 colr-beige">3320 West Foster, #171,Chicago <br /> IL 60625 United States</div>

                  <div><i className="fa fa-check"></i> <b>New Jersey Office</b></div>
                  <div className="font-size-13 mar-b-20 colr-beige">246 Bridge St, Metuchen <br />NJ 08840 United States</div>

                  {/*<div><i className="fa fa-check"></i> <b>Missouri Office</b></div>
                    <div className="font-size-13 mar-b-20 colr-beige">202 S.W. Market Street, Lee's Summit <br/>MO 64063 United States</div>

                    <div><i className="fa fa-check"></i> <b>Florida Office</b></div>
                    <div className="font-size-13 mar-b-20">301 W. Bay Street, Suite 14175, Jacksonville <br/>FL 32202 United States</div>

                    <div><i className="fa fa-check"></i> <b>Tennessee Office</b></div>
                <div className="font-size-13 mar-b-20">6078 Tower Road,Tallassee<br/>TN 37878 United States </div>*/}
                  <a href="https://www.ovlg.com/contact-us/address.html">More..</a>

                </div>
              </div>
            </div>

            <hr />
            <div className="offset-lg-1 col-lg-10 mar-b-20">
              <p className="colr-white text-center font-size-16">Copyright &copy; 2021 Oak View Law Group</p>
            </div>
          </div>
        </div>

      </footer>
      {/* <div style={{position:"relative", display:"none"}} className="go-to-top" id="go_top"><a href="#" className="Top fa fa-angle-up"></a></div> */}
      {/* footer-end */}


      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" defer src={`${publicRuntimeConfig.rootPath}/js/global.js`}></script> */}
      {!excludeJs.includes('jquery') &&
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      }
      {/* {!excludeJs.includes('bootstrap') &&
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      } */}
      {!excludeJs.includes('global') &&
        <script type="text/javascript" defer src={`${publicRuntimeConfig.rootPath}/js/global.js`}></script>
      }
      {/* <script type="text/javascript" defer src={`${publicRuntimeConfig.rootPath}/js/chatcode.js`}></script> */}
      {/* <script type="text/javascript" defer src={`${publicRuntimeConfig.rootPath}/js/check-user-logged-in.js`}></script> */}
    </>
  );
}
