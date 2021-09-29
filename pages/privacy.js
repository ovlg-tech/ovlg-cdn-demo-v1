import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

import WinningTheUser from "../components/banner-section/winning-the-user";
export default function index({ BannerInfo }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="OVLG Privacy Policy" />
        <meta
          name="description"
          content="Oak View law Group keeps the client information safe and secure. Call at 800-530-OVLG to know more about the privacy policy."
        />
        <meta name="title" content="Oak View Law Group: Privacy Policy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" />
        <meta property="fb:admins" content="1455754854606012" />
        <meta
          name="twitter:title"
          content="Oak View Law Group: Privacy Policy"
        />
        <meta
          name="twitter:description"
          content="Oak View law Group keeps the client information safe and secure. Call at 800-530-OVLG to know more about the privacy policy."
        />
        <meta
          name="twitter:image"
          content="https://www.ovlg.com/sites/files/OVLG-logo.png"
        />
        <meta
          property="og:title"
          content="Oak View Law Group: Privacy Policy"
        />
        <meta
          property="og:description"
          content="Oak View law Group keeps the client information safe and secure. Call at 800-530-OVLG to know more about the privacy policy."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/privacy" />
        <meta
          property="og:image"
          content="https://www.ovlg.com/sites/files/OVLG-logo.png"
        />
        <meta
          name="ahrefs-site-verification"
          content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4"
        />
        <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />
        <title>Oak View Law Group: Privacy Policy</title>
        <link rel="icon" href="/next/favicon.ico" />
        <link rel="canonical" href="https://www.ovlg.com/privacy" />
      </Head>

      <Header></Header>
      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <WinningTheUser BannerInfo={BannerInfo} />
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-lg-10 offset-md-0 offset-lg-1 main-container pad-tb-20">
            <div className="field-item even" property="content:encoded">
              <h1>Privacy Policy</h1>
              <p>
                Learn how OVLG handles your personal information and protects your
                privacy.
              </p>
              <p>
                Like other professionals who advise clients on personal financial
                matters, attorneys are required by federal law to inform their
                clients of their policies regarding the privacy of client
                information. Therefore, we have always protected your privacy and
                will continue to do so.
              </p>
              <p>
                When we do business with our clients, they trust us with
                significant information about their personal finances.
              </p>
              <p>
                We take that trust very seriously. Simply put, if you are our
                client, we hold your personal information in confidence. We will
                not share it outside the firm, except as agreed to by you or as
                required under an applicable law.
              </p>
              <p>
                We retain records relating to professional services that we
                provide so that we are better able to assist you with your
                financial needs and, in some cases, to comply with professional
                standards. In order to guard your non-public personal information,
                we maintain physical, electronic, and procedural safeguards that
                comply with those professional standards.
              </p>
              <p>
                To learn more about OVLG's comprehensive privacy policy as per CA
                B&amp;P 22575 and the Gramm-Leach-Bliley Act, 15 U.S.C. 6801-6810,{" "}
                <a
                  href="/sites/all/themes/ovlg/download/OVLG_Compehensive-Privacy_Policies.pdf"
                  target="_blank"
                >
                  click here
                </a>
                .
              </p>
              <p>
                Your privacy, our professional ethics, and our ability to provide
                you with quality legal services are very important to us. If you
                have any questions about our privacy policy, we invite you to
                contact Nick Denton (Manager) at 800-530-OVLG Ext. 8104 or email
                him at{" "}
                <strong>
                  <a href="mailto:nick@ovlg.com">nick@ovlg.com</a>
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      BannerInfo: { pageTopicTitle: "Privacy" },
    },
  };
};
