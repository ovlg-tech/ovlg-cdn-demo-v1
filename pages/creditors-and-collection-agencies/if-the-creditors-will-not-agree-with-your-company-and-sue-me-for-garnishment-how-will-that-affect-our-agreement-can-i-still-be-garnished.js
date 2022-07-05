import Head from "next/head";
import React, { useEffect } from 'react'
import Link from 'next/link'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import WinningTheUser from '../../components/banner-section/winning-the-user'
// import dynamic from 'next/dynamic'

// const Bootstrap = dynamic(
//   () => import('../../node_modules/bootstrap'),
//   { ssr: false }
// )

export default function index({ BannerInfo, FooterInfo }) {
  
  return (
    <div>
      <Head>
        <title>Debt consolidation attorneys - Fee on success - A on BBB </title>

        <meta name="keywords" content="debt consolidation ,debt consolidation reviews,debt consolidation programs,debt consolidation services,consolidate debt,debt consolidation companies" />
        <meta name="description" content="Over 6500 people have benefited from Atty. Solomon's debt consolidation and interest rate reduction services. Call one of our 8 law offices to consolidate your debts" />
        <meta name="title" content="Debt consolidation attorneys - Fee on success - A on BBB " />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" /><meta property="fb:admins" content="1455754854606012" />
        <meta name="twitter:title" content="Debt consolidation attorneys - Fee on success - A on BBB " />
        <meta name="twitter:description" content="Over 6500 people have benefited from Atty. Solomon's debt consolidation and interest rate reduction services. Call one of our 8 law offices to consolidate your debts" />
        <meta name="twitter:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta property="og:title" content="Debt consolidation attorneys - Fee on success - A on BBB " />
        <meta property="og:description" content="Over 6500 people have benefited from Atty. Solomon's debt consolidation and interest rate reduction services. Call one of our 8 law offices to consolidate your debts" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/debt-consolidation" />
        <meta property="og:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta name="ahrefs-site-verification" content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4" />
        <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />
        <link rel="canonical" href="https://www.ovlg.com/debt-consolidation" />
        <link rel="icon" href={`${publicRuntimeConfig.rootPath}/favicon.ico`} />
        {/* <link rel="stylesheet" href={`${publicRuntimeConfig.rootPath}/css/debt-consolidation.css`} /> */}
        {/* <script type="text/javascript" defer src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/js/load_youtube_iframe_api.js"></script> */}
      </Head>

      <Header></Header>
      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <main>

        <WinningTheUser BannerInfo={BannerInfo} />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1  body_bg">
              <div className="row">
                <div className="col-sm-12 mt-4 mb-0 pb-0">
                  <nav aria-label="breadcrumb mb-0 pb-0">
                    <ul className="breadcrumb blog-breadcrumb">
                      <li className="breadcrumb-item pb-0 mb-0"><a href="/"><i className="bi bi-house-door-fill"></i></a></li>
                      <li className="breadcrumb-item pb-0 mb-0"><a href="/practices">Services</a></li>
                      <li className="breadcrumb-item pb-0 mb-0 d-none d-md-inline">Debt consolidation</li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-12 main-container pad-tb-10 ">

                  <h2>test page for build</h2>
                

                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <div className="container">
        <p style={{ fontSize: "13px" }} className="pad-l-20 col-xs-12">Last Updated on: Wed, 28 Apr 2021 </p>
        <div className="clearfix"></div>
      </div>

      <Footer FooterInfo={FooterInfo}></Footer>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      BannerInfo: { pageTopicTitle: 'Debt consolidation' },
      FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
    }
  }
}
