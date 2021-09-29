import Head from "next/head";
import React, { useEffect } from 'react'
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import WinningTheUserDemo from '../../components/banner-section/winning-the-user-demo'
import dynamic from 'next/dynamic'

const Bootstrap = dynamic(
  () => import('bootstrap'),
  { ssr: false }
)

export default function index({ BannerInfo, FooterInfo }) {
  useEffect(() => {
    const bootstrap = require('bootstrap')
    // modal
    var modalElementList = [].slice.call(document.querySelectorAll('.modal'))
    var modalList = modalElementList.map(function (modalEl) {
      return new bootstrap.Modal(modalEl)
    })

    // accordian 
    var collapseElementList = [].slice.call(document.querySelectorAll('.accordion'))
    var collapseList = collapseElementList.map(function (collapseEl) {
      return new bootstrap.Collapse(collapseEl)
    })
  }, [])
  return (
    <div>
      <Head>
        <title>Payday loan consolidation attorneys - Fee on success - A on BBB</title>

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />

        <meta name="keywords" content="payday loan consolidation, payday loan debt relief, payday loan consolidation process" />
        <meta name="description" content="Atty. Solomon has helped over 3000 people consolidate payday loans and save 53% on their debts. Contact our 8 law offices to get relief from the lenders he has defeated." />
        <meta name="title" content="Payday loan consolidation attorneys - Fee on success - A on BBB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" /><meta property="fb:admins" content="1455754854606012" />
        <meta name="twitter:title" content="Payday loan consolidation attorneys - Fee on success - A on BBB" />
        <meta name="twitter:description" content="Atty. Solomon has helped over 3000 people consolidate payday loans and save 53% on their debts. Contact our 8 law offices to get relief from the lenders he has defeated." />
        <meta name="twitter:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta property="og:title" content="Payday loan consolidation attorneys - Fee on success - A on BBB" />
        <meta property="og:description" content="Atty. Solomon has helped over 3000 people consolidate payday loans and save 53% on their debts. Contact our 8 law offices to get relief from the lenders he has defeated." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/debt-consolidation/payday-loan.html" />
        <meta property="og:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta name="ahrefs-site-verification" content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4" />
        <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />

        <link rel="icon" href={`${publicRuntimeConfig.rootPath}/favicon.ico`} />
      </Head>


      <Header></Header>

      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <main>
        <WinningTheUserDemo BannerInfo={BannerInfo} />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1  body_bg">
              <div className="row">
                <div className="col-md-12 main-container pad-tb-10 ">


                  <h2>My clients have saved over 53% on their payday loans.</h2>
                  <div className="row">
                    <div className="col-md-4 ">
                      <h4>I have won against:</h4>
                      <ul className="list-group">
                        <li className="list-group-item"> <span className="bi bi-check"></span> LoanMe</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Zoca Loans</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Western Sky</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Cash Call</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> American Web Loan</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Great Plains Lending </li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> 500 Fast Cash</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Spotloan</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Castle Payday </li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> United Cash Loans</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Cashjar </li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Clear Loan Solutions</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> West River Cash</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Northcash</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> White Hills </li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Dollar Quick</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> PayDay One</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> River Bend Cash</li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Green Valley Cash </li>
                        <li className="list-group-item"> <span className="bi bi-check"></span> Cash In A Wink</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h4>Testimonials</h4>

                      <div className="mb-3">
                        <div className="px-2 pb-2">
                          <div className="row">
                            <div className="col">
                              <div className=" rounded-circle2">
                                {/* <img
                                  alt="client image"
                                  src={`${publicRuntimeConfig.rootPath}/images/review-images/ThomasM.jpg`} className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                  width="60" /> */}
                                <Image
                                  className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                  alt="client image"
                                  src={`${publicRuntimeConfig.rootPath}/images/review-images/ThomasM.jpg`}
                                  width={60}
                                  height={60}
                                  quality={50}
                                />
                              </div>

                              <div className="ff-Oswald font-size-22"><b>Thomas M.</b></div>
                              <div>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep"></i>
                              </div>
                              <div>
                                <img src={`${publicRuntimeConfig.rootPath}/images/yelp-logo_60x30.png`} alt="yelp" width="60" />
                              </div>
                            </div>
                            <div>Oak View Law Group has been my top choice for consolidating my debt and legal services. I have been with them for about 2 years, and they are always there online, text, chat, voice whenever I need assistance with my creditors.</div>
                          </div>
                        </div>

                      </div>

                      <div className="mb-3">
                        <div className="p-2">
                          <div className="row">
                            <div className="col">

                              {/* <img
                                alt="client image"
                                className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                src={`${publicRuntimeConfig.rootPath}/images/review-images/Cheritta Stewart.png`}
                                width="60" /> */}
                              <Image
                                className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                alt="client image"
                                src={`${publicRuntimeConfig.rootPath}/images/review-images/Cheritta Stewart.png`}
                                width={60}
                                height={60}
                                quality={50}
                              />

                              <div className="ff-Oswald font-size-22"><b>Cheritta Stewart</b></div>
                              <div>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep"></i>
                              </div>
                              <div>
                                <img src={`${publicRuntimeConfig.rootPath}/images/Google_2015_logo_60x20.png`} alt="google" width="60" />
                              </div>
                            </div>
                            <div>I learned about Oak View Law group after I had gotten in over my head with payday loans (don't ever take out payday loans). I contacted them twice before I signed up. Each time the staff was pleasant and helpful. </div>
                          </div>
                        </div>

                      </div>

                      <div className="mb-3">
                        <div className="p-2">
                          <div className="row">
                            <div className="col">
                              {/* <img
                                alt="client image"
                                className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                src={`${publicRuntimeConfig.rootPath}/images/review-images/Client-BC_15826519821396180032897601312014.webp`}
                                width="60" /> */}
                              <Image
                                alt="client image"
                                className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                src={`${publicRuntimeConfig.rootPath}/images/review-images/Client-BC_15826519821396180032897601312014.webp`}
                                width={60}
                                height={60}
                                quality={50}
                              />

                              <div className="ff-Oswald font-size-22"><b>Client BC</b></div>
                              <div>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep pe-1"></i>
                                <i className="bi bi-star-fill colr-yellow-deep"></i>
                              </div>
                              <div>
                                {/* <img src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo_160x30.png`} alt="ovlg" width="160" /> */}
                                <Image
                                  src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo_160x30.png`}
                                  alt="ovlg"
                                  width={160}
                                  height={30}
                                />
                              </div>
                            </div>
                            <div>Ron was great, and I'm happy to be a client to get rid of my payday loans!!!!</div>
                          </div>
                        </div>
                      </div>

                      <a href="/reviews">See More</a>
                    </div>
                    <div className="col-md-4">
                      <h4>Success Stories</h4>

                      <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap mb-3">
                        <div className="row align-items-center">
                          <div className="col col-sm-auto px-2 pb-2">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_1">
                              <Image
                                className="img-responsive story-img border border-secondary"
                                alt="Saved $2148 with LoanMe for Client RL"
                                src={`${publicRuntimeConfig.rootPath}/images/success-stories/RL_LoanMe.jpg`}
                                width={150}
                                height={200}
                                quality={50}
                              />
                            </a>
                          </div>
                          <div className="col px-2">
                            <span className="font-size-24 textUnderline colr-black "> Saved: $2,148</span><br /><br />
                            <span>Client Initials: <b>RL</b></span><br />
                            <span>Debt processed: <b>$4,248</b></span><br />
                            <span>Debt settled: <b>$2,100</b></span><br />
                            <span className="creditor-name" title="LoanMe">LoanMe</span>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" id="successStoriesModal_1" tabIndex="-1" aria-labelledby="successStoriesModalLabel_1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="modal-title" id="successStoriesModalLabel_1">Saved: $2,148</div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                  className="img-responsive pull-left story-img"
                                  placeholder="blur"
                                  alt="Saved $2148 with LoanMe for Client RL"
                                  src={`${publicRuntimeConfig.rootPath}/images/success-stories/RL_LoanMe.jpg`}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap mb-3">
                        <div className="row align-items-center">
                          <div className="col col-sm-auto px-2 pb-2">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_2">
                              <Image
                                className="img-responsive story-img border border-secondary"
                                alt="Saved $1375 with NCB Management Services, INC for Client JL"
                                src={`${publicRuntimeConfig.rootPath}/images/success-stories/JL_NCB-Management.jpg`}
                                width={150}
                                height={200}
                                quality={50}
                              />
                            </a>
                          </div>
                          <div className="col px-2">
                            <span className="font-size-24 textUnderline colr-black "> Saved: $1,375</span><br /><br />
                            <span>Client Initials: <b>JL</b></span><br />
                            <span>Debt processed: <b>$3,306</b></span><br />
                            <span>Debt settled: <b>$1,931</b></span><br />
                            <span className="creditor-name" title="NCB Management Services, INC">NCB Management Services, INC</span>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" id="successStoriesModal_2" tabIndex="-1" aria-labelledby="successStoriesModalLabel_2" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="modal-title" id="successStoriesModalLabel_2">Saved: $1,375</div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                  className="img-responsive pull-left story-img"
                                  placeholder="blur"
                                  alt="Saved $1375 with NCB Management Services, INC for Client JL"
                                  src={`${publicRuntimeConfig.rootPath}/images/success-stories/JL_NCB-Management.jpg`}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap mb-3">
                        <div className="row align-items-center">
                          <div className="col col-sm-auto px-2 pb-2">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_3">
                              <Image
                                className="img-responsive story-img border border-secondary"
                                alt="Saved $1372 with Zoca Loans for Client AG"
                                src={`${publicRuntimeConfig.rootPath}/images/success-stories/AG_ZocaLoans.jpg`}
                                width={150}
                                height={200}
                                quality={50}
                              />
                            </a>
                          </div>
                          <div className="col px-2">
                            <span className="font-size-24 textUnderline colr-black "> Saved: $1,372</span><br /><br />
                            <span>Client Initials: <b>AG</b></span><br />
                            <span>Debt processed: <b>$2,287</b></span><br />
                            <span>Debt settled: <b>$915</b></span><br />
                            <span className="creditor-name" title="Zoca Loans">Zoca Loans</span>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" id="successStoriesModal_3" tabIndex="-1" aria-labelledby="successStoriesModalLabel_3" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="modal-title" id="successStoriesModalLabel_3">Saved: $1,372</div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                  className="img-responsive pull-left story-img"
                                  placeholder="blur"
                                  alt="Saved $1372 with Zoca Loans for Client AG"
                                  src={`${publicRuntimeConfig.rootPath}/images/success-stories/AG_ZocaLoans.jpg`}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a href="/success/stories.php">See More</a>
                    </div>
                  </div>

                  <h2>How does the payday loan consolidation process work?</h2>
                  <p>Once you contact us:</p>
                  <ol>
                    <li>You will work with my <a href="/contact-us/people.html">assistant</a>. He will gather information on all of your debts.</li>
                    <li>I will review your file and contact your payday loan companies. I will inform all of them they cannot harass you anymore.</li>
                    <li>Most payday loan companies, once they know I am representing you, will consolidate your loans at very favorable terms.</li>
                    <li> I will have you work with my assistant to make payments to the lender.</li>
                    <li>You will be debt-free in six to nine months.</li>
                  </ol>

                  <h2>FAQ</h2>
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          How can I give you payday loan relief?
                        </button>
                      </h3>
                      <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" >
                        <div className="accordion-body">
                          <p>I have helped people like you:</p>
                          <ul>
                            <li>Reduce monthly payments</li>
                            <li>Create a single, manageable monthly payment</li>
                            <li>Eliminate late fees, advance fees, extra fees</li>
                            <li>Reduce or eliminate collection calls</li>
                            <li>Reduce interest rates on payday loans </li>
                            <li>Stop automatic debits</li>
                            <li>Avoid lawsuits</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          What other services does my team offer?
                        </button>
                      </h3>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                        <div className="accordion-body">
                          <ul>
                            <li><a href="https://www.ovlg.com/debt-settlement">Debt settlement </a></li>
                            <li><a href="https://www.ovlg.com/debt-management">Debt management</a></li>
                            <li><a href="https://www.ovlg.com/fdcpa.html">Relief from collection abuse</a></li>
                            <li><a href="https://www.ovlg.com/bankruptcy">Consumer bankruptcy</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Why should you choose our law firm for payday loan consolidation?
                        </button>
                      </h3>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                        <div className="accordion-body">
                          <p>Our company provides payday loan debt relief in these ways:</p>
                          <ol>
                            <li>Once you enroll for a debt relief credit counseling session, attorney Lyle Solomon's assistant will explain the payday loan consolidation process, the fee structure, and the No Questions Asked Refund Policy.</li>
                            <li>We will also address any questions you may have. When you feel comfortable moving forward, you will enroll in a debt consolidation program as a client.</li>
                            <li>The assistant will collect certain information needed to start the payday loan consolidation process. This will include: your name, the lender's name, the date the loan was taken out, the loan's terms, the method of payment, the amount you’ve paid so far, and the loan's outstanding balance.</li>
                            <li>The assistant whom Mr. Solomon assigns your case will analyze your debt and verify your loans are legal.</li>
                            <li>If you owe legal payday loans, we will determine the maximum interest you need to pay. And if you owe illegal loans, you will need to pay only the principal amount.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          What are the alternatives to payday loan consolidation?
                        </button>
                      </h3>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
                        <div className="accordion-body">
                          <p>If you want to repay your debts yourself, instead of using the services of a consolidation company, there are other options to consolidate debt. You can take out a personal loan (a debt consolidation loan) with which you repay the outstanding balance on your existing credit cards and other unsecured debt. In this way, you consolidate your current payday loans with one consolidation loan. </p>
                          <p>A personal loan is usually of a lower interest rate than that of short-term loans. The creditor will check your creditworthiness. You can obtain a loan at a relatively lower interest rate if your financial and credit situation is good. The annual percentage rate for payday loans can even go up to 521%. The repayment terms and conditions of consolidation loans are also relatively better. You will have to make fixed payments every month to pay back the new debt consolidation loan.</p>

                          <p>We can help you <a href="https://www.ovlg.com/debt-settlement/payday-loan.html">settle your payday loans</a> if you cannot repay your loans in full. Through the settlement, you can get rid of your unsecured debts fast. </p>

                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                          Can you go to jail over payday loans?
                        </button>
                      </h3>
                      <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" >
                        <div className="accordion-body">Neither authorized payday loan lenders nor illegal lenders can send you to jail when you don’t make a payment. However, authorized lenders can sue you in court. There is a risk of a default judgment if you lose the case. This means your wages can be garnished or liens placed against future earnings.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                          Are you aware of the payday loan laws? Is your loan legal?
                        </button>
                      </h3>
                      <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" >
                        <div className="accordion-body">Check out the <a href="https://www.ovlg.com/payday-loan-laws/">payday loan laws</a> of your state.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                          How can you compare your payday loan relief options?
                        </button>
                      </h3>
                      <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" >
                        <div className="accordion-body">

                          <div className="table-responsive" >
                            <table className="table table-hover table-bordered table-striped">
                              <thead>
                                <tr className="bg-brown colr-white">
                                  <th>Comparison</th>
                                  <th>Payday loan settlement</th>
                                  <th>Payday loan consolidation program</th>
                                  <th>Consolidation loan</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>What it does</th>
                                  <td>Reduces your loan’s payoff amount</td>
                                  <td>Lowers your loan’s interest rate and monthly payment</td>
                                  <td>Transfers your debt to another lender</td>
                                </tr>
                                <tr>
                                  <th>Payoff term</th>
                                  <td>2-4 years</td>
                                  <td>2-5 years</td>
                                  <td>1 -30 yrs</td>
                                </tr>
                                <tr>
                                  <th>Mode of payment</th>
                                  <td>Lump sum payment</td>
                                  <td>Monthly payment</td>
                                  <td>Monthly payment</td>
                                </tr>
                                <tr>
                                  <th>Requirements</th>
                                  <td>Sufficient savings to make the payment </td>
                                  <td>Make monthly payments</td>
                                  <td>Collateral</td>
                                </tr>
                                <tr>
                                  <th>Credit score</th>
                                  <td>Drops initially but improves over time</td>
                                  <td>Gradually improves</td>
                                  <td>Gradually improves</td>
                                </tr>
                                <tr>
                                  <th>Is this the best way to get out of payday loan debt?</th>
                                  <td className="bg-grey">This way is best when you need to pay off multiple payday loans with one lump sum payment.</td>
                                  <td className="bg-grey">This way is best when you can afford a single lower monthly payment.</td>
                                  <td className="bg-grey">This can be a good option when you have collateral and are confident you won’t lose it.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                          Why do you incur a huge amount fast when you take out payday loans?
                        </button>
                      </h3>
                      <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" >
                        <div className="accordion-body">

                          <p>These loans are high-interest short-term loans designed to be paid back with your next paycheck. Usually, the total amount of the loan becomes due within two to three weeks after the loan is issued. Most people make a partial payment and then take out a new payday loan to pay back the existing balance. Thus, they get into the payday loan trap, and it becomes difficult to eliminate such loans and get financial relief.</p>
                          <p>Unfortunately, even the most responsible payday loan borrowers face a situation where they can’t pay back the outstanding amount on the due date. They cannot even secure a new loan to cover the difference.</p>
                          <p>If you can't pay on time, you may start receiving calls from debt collectors. And your outstanding balance will skyrocket due to the very high-interest rates typical to almost all payday loans.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                          How can you pay off payday loans in installments?
                        </button>
                      </h3>
                      <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" >
                        <div className="accordion-body">
                          An Extended Payment Plan, or EPP.
                          <p>An EPP will help you pay off the outstanding balance on your payday loans, usually in four equal installments, without added fees or interest.<br />Under an EPP, if your payday loan company is a member of the Community Financial Services Association of America (CFSA), they can't:</p>
                          <ul>
                            <li>Compel you to repay the loans</li>
                            <li>Threaten or force you to make immediate payments</li>
                            <li>Charge you additional fees for this option. In addition, they will be required to give you your next four paydays to repay them</li>
                          </ul>
                          <p>If you have taken a loan from a CFSA member, then you can ask for an EPP. After you submit your application, you’ll get a new statement detailing your modified loan agreement. The terms will indicate the amount of the four equal payments you will need to make over the next four paydays. There will be no new fees or interest charged for these new terms.</p>
                          <p>You can make payments in cash, or you can use the ACH debit option to have the payments withdrawn automatically from your account on payday. Once you have set up the EPP, you need to inform the lender. Most lenders won’t allow you to change the payment method after you have signed the new agreement.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                          How many times can you apply for an EPP?
                        </button>
                      </h3>
                      <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" >
                        <div className="accordion-body">Under federal law, you can apply for an EPP with each payday lender only once per year. However, state laws vary on this, so you should check the laws in your state. The lender will be obligated to follow the law in your state.<br />Also, remember that you can’t take out another payday loan until you have paid off the entire amount due on your EPP.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingEleven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                          What if you cannot pay off payday loans in installment?
                        </button>
                      </h3>
                      <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" >
                        <div className="accordion-body">The consequences for failing to pay off your EPP loan can be severe. Your lender may be able to charge you an additional EPP fee, along with other charges and penalties. They can also increase the payment amount you must make each pay period. They can sue you for principal, interest, and penalties, as well. So, it can be a financial disaster that you should try to avoid. Before entering into an EPP, be sure that you can make the payments, and make them on time, every time they’re due.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingTwelve">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                          How can you tell if your lender is a member of the CFSA?
                        </button>
                      </h3>
                      <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" >
                        {/* data-bs-parent="#accordionFlushExample" */}
                        <div className="accordion-body">Carefully read the information on the payday loan lender’s website and look for the CFSA logo.<br />If the company has a physical address, then it may be better to go in person to see the blue oval logo yourself. It should be prominently on display somewhere in their office.<br />If the CFSA member agency doesn't agree to give you an Extended Payment Plan, you can call the CFSA Hotline 888-572-9329 between 9 and 5 Eastern Time. You can also register a complaint at the CFSA website.
                        </div>
                      </div>
                    </div>
                  </div>

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
    </div >
  );
}



export const getStaticProps = async () => {

  return {
    props: {
      BannerInfo: { pageTopicTitle: 'Payday loan debt relief through consolidation' },
      FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
    }
  }
}
