import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

import HomeBanner from "../components/home/home-banner";
import PrincipalAttorneyLetter from "../components/home/principal-attorney-letter";
import StrategiesDebtFree from "../components/home/strategies-debt-free";
import WhyChooseUs from "../components/home/why-choose-us";
//import GetFreeCounseling from "../components/home/get-free-counseling";
import OurReviews from "../components/home/our-reviews";
import ConsumerLawPracticeAreas from "../components/home/consumer-law-practice-areas";

export default function index({ FooterInfo }) {

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />
        <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        <meta name="keywords" content="bankruptcy, debt relief, get out of debt, law firm, lawyers, attorneys" />
        <meta name="description" content="OVLG is a BBB accredited and CalBar registered law firm. It helps consumers get out of debt, file bankruptcy, and protect legal rights. Call 800-530-OVLG." />
        <meta name="title" content="Oak View Law Group - Fee on success - A on BBB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" />
        <meta property="fb:admins" content="1455754854606012" />
        <meta name="twitter:title" content="Oak View Law Group - Fee on success - A on BBB" />
        <meta name="twitter:description" content="OVLG is a BBB accredited and CalBar registered law firm. It helps consumers get out of debt, file bankruptcy, and protect legal rights. Call 800-530-OVLG." />
        <meta name="twitter:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta property="og:title" content="Oak View Law Group - Fee on success - A on BBB" />
        <meta property="og:description" content="OVLG is a BBB accredited and CalBar registered law firm. It helps consumers get out of debt, file bankruptcy, and protect legal rights. Call 800-530-OVLG." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/" />
        <meta property="og:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta name="ahrefs-site-verification" content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4" />
        <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />
        <title>Oak View Law Group - Fee on success - A on BBB</title>
        <link rel="canonical" href="https://www.ovlg.com/" />
        <link rel="icon" href={`${publicRuntimeConfig.rootPath}/favicon.ico`} />
        {/* <link rel="stylesheet" href={`${publicRuntimeConfig.rootPath}/css/home.css`} /> */}

        {/* <!-- connect to domain of font files --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />

        {/* <!-- optionally increase loading priority --> */}
        {/* <link rel="preload" as="style" href="(font CSS URL here)" /> */}

        {/* <!-- async CSS --> */}
        <link rel="stylesheet" id='DeliusFont' media="print" onLoad="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Delius&display=swap" />


        {/* <!-- no-JS fallback --> */}
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Delius&display=swap" />
        </noscript>
      </Head>

      <Header></Header>
      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <HomeBanner></HomeBanner>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-md-0 offset-lg-1 pad-tb-20">
            <PrincipalAttorneyLetter></PrincipalAttorneyLetter>
            <StrategiesDebtFree></StrategiesDebtFree>
          </div>
        </div>
      </div>
      <div className="container-fluid main-container">
        <div className="row">
          <a id="homepageInfoSection" className="AnchorText"></a>
          <WhyChooseUs></WhyChooseUs>
        </div>
        {/* <GetFreeCounseling></GetFreeCounseling> */}
      </div>
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-lg-10 offset-md-0 offset-lg-1 pad-tb-20">
            <a id="homepageTestiSection" className="AnchorText"></a>
            <OurReviews></OurReviews>
            <ConsumerLawPracticeAreas></ConsumerLawPracticeAreas>
          </div>
        </div>
      </div>
      <Footer FooterInfo={FooterInfo}></Footer>
      {/* <script
        defer="defer"
        src={`${publicRuntimeConfig.rootPath}/js/user_signup.js`}
      ></script> */}
      {/* <script
        defer="defer"
        src={`${publicRuntimeConfig.rootPath}/js/reviews.js`}
      ></script> */}
      <script
        defer="defer"
        src={`${publicRuntimeConfig.rootPath}/js/lazy.js`}
      ></script>
    </>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      FooterInfo: { excludeJs: ['jquery', 'global'] }
    }
  }
}
