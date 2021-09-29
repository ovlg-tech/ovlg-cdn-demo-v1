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
        <meta
          name="keywords"
          content="ovlg about,about ovlg,about oak view law group"
        />
        <meta
          name="description"
          content="Consider how OVLG arrived at its current form following a series of ups and downs beginning in 2007. Its purpose is to assist individuals in locating suitable debt reduction options."
        />
        <meta
          name="title"
          content="OVLG History - How we reached where we are today"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" />
        <meta property="fb:admins" content="1455754854606012" />
        <meta
          name="twitter:title"
          content="OVLG History - How we reached where we are today"
        />
        <meta
          name="twitter:description"
          content="Consider how OVLG arrived at its current form following a series of ups and downs beginning in 2007. Its purpose is to assist individuals in locating suitable debt reduction options."
        />
        <meta
          name="twitter:image"
          content="https://www.ovlg.com/sites/files/OVLG-logo.png"
        />
        <meta
          property="og:title"
          content="OVLG History - How we reached where we are today"
        />
        <meta
          property="og:description"
          content="Consider how OVLG arrived at its current form following a series of ups and downs beginning in 2007. Its purpose is to assist individuals in locating suitable debt reduction options."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/history" />
        <meta
          property="og:image"
          content="https://www.ovlg.com/sites/files/OVLG-logo.png"
        />
        <meta
          name="ahrefs-site-verification"
          content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4"
        />
        <meta
          name="msvalidate.01"
          content="2EA676DE1B90A35D40CF8FE6C40CA2D0"
        ></meta>
        <title>OVLG History - How we reached where we are today</title>
        <link rel="icon" href={`${publicRuntimeConfig.rootPath}/favicon.ico`} />
        <link rel="canonical" href="https://www.ovlg.com/history" />
        <link rel="stylesheet" href={`${publicRuntimeConfig.rootPath}/css/history.css`} />
      </Head>

      <Header></Header>
      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <WinningTheUser BannerInfo={BannerInfo} />
      <div className="container-fluid main-container">
        <div className="col-lg-10 offset-md-0 offset-lg-1 main-container pad-tb-20">
          <div className="field-item even" property="content:encoded">
            <h1>OVLG History: How we reached where we are today</h1>
            <div className="container">
              <div className="timelinebox">
                <div className="tl-container">
                  <ul className="tl">
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">February 2021</div>
                      <div className="item-title">
                        <b>More than 100 vetted Attorneys</b>Here is a{" "}
                        <a href="https://www.ovlg.com/attorneys">
                          list of attorneys
                        </a>
                        .
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">December 2020</div>
                      <div className="item-title">
                        <b>OVLG launches Bankruptcy Marketplace</b> Amidst the
                        global pandemic crisis, OVLG launches Bankruptcy
                        Marketplace to help consumers find attorneys and get the
                        best legal advice.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">February 2019</div>
                      <div className="item-title">
                        <b>
                          Lyle David Solomon joins OVLG as Principal Attorney
                        </b>
                        <a
                          href="https://www.ovlg.com/attorneys/lyle-david-solomon"
                          target="_blank"
                        >
                          Mr. Solomon
                        </a>{" "}
                        is a lawyer with 21 years of expertise.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">September 2018</div>
                      <div className="item-title">
                        <b>OVLG touches 2127 successful clients</b>OVLG has
                        received over 400 positive{" "}
                        <a href="https://www.ovlg.com/reviews" target="_blank">
                          testimonials
                        </a>{" "}
                        from satisfied clients.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">January 2017</div>
                      <div className="item-title">
                        <b>Introduces an FDCPA legal service</b>OVLG starts
                        helping&nbsp;consumers who are being harassed by debt
                        collectors.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">April 2016</div>
                      <div className="item-title">
                        <b>Receives an 'A' rating from the BBB</b>Over 100{" "}
                        <a
                          href="https://www.bbb.org/us/ca/auburn/profile/debt-relief-services/oak-view-law-group-apc-1156-47014743"
                          target="_blank"
                        >
                          positive&nbsp;customer reviews
                        </a>{" "}
                        and an ‘A' rating from the Better Business Bureau.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">February 2016</div>
                      <div className="item-title">
                        <b>
                          Requests the FBI to safeguard visitors from fraudsters
                        </b>{" "}
                        OVLG asks the Federal Bureau Of Investigations to bring
                        an end to the latest scam wherein fraudsters victimized
                        countless consumers using the domain names
                        'oak-view-law-groups.com' and 'manager-collections.com.'
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">January 2015</div>
                      <div className="item-title">
                        <b>Touches the benchmark of 2000+ successful clients</b>
                        Over 356 positive testimonials from satisfied customers.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">January 2013</div>
                      <div className="item-title">
                        <b>Registers with CalChamber</b>OVLG register with the
                        California Chamber of Commerce, the state's largest
                        broad-based business advocate.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">October 2012</div>
                      <div className="item-title">
                        <b>Establishes a certified team of attorneys</b>OVLG
                        establishes a reputable legal platform&nbsp;for lawyers
                        to assist debtors to find legal solutions.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">January 2012</div>
                      <div className="item-title">
                        <b>
                          Establishes ties with 10&nbsp;additional Attorneys
                        </b>
                        It creates a team of 32 certified attorneys to help
                        clients.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">January 2011</div>
                      <div className="item-title">
                        <b>
                          The firm is pleased to welcome 22 of counsel
                          Attorneys.
                        </b>
                        OVLG has added a team of skilled attorneys to assist
                        customers in determining the best debt solution.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">September 2010</div>
                      <div className="item-title">
                        <b>Implements new FTC rules</b>OVLG is implementing the
                        new telemarketing rules to ensure client transparency
                        and avoid confusion.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">February 2010</div>
                      <div className="item-title">
                        <b>
                          As Community Outreach Manager, Joseph Henry Marman
                          joins.
                          <span
                            style={{
                              fontSize: "14.3088px",
                              fontWeight: "normal",
                            }}
                          ></span>
                        </b>
                        <b> </b>Joseph Henry Marman, a renowned lawyer, joins
                        OVLG as 'Outreach Manager'
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">February 2009</div>
                      <div className="item-title">
                        <b>Gets listed in the BBB</b> OVLG gets listed in the
                        Better Business Bureau (BBB). This portal enables
                        clients to raise grievances and read customer
                        evaluations prior to joining, if necessary.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">May 2007</div>
                      <div className="item-title">
                        <b>
                          Becomes a member of the California Bar Association
                        </b>
                        OVLG gets registered with the State Bar of California -
                        It serves as the Supreme Court of California's
                        administrative branch.
                      </div>
                    </li>
                    <li className="tl-item" ng-repeat="itembx">
                      <div className="timestamp">January 2007</div>
                      <div className="item-title">
                        <b>Foundation of OVLG</b> Virendra Kalani establishes
                        Oak View Law Group (OVLG) in California to help people
                        eliminate debt.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
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
      BannerInfo: { pageTopicTitle: "History" },
    },
  };
};
