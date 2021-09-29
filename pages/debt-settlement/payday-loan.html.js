import Head from "next/head";
import React, { useEffect } from 'react'
import Image from 'next/image'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
// import WinningTheUser from '../../components/banner-section/winning-the-user'
import WinningTheUserDemo from '../../components/banner-section/winning-the-user-demo'
import dynamic from 'next/dynamic'

const Bootstrap = dynamic(
  () => import('../../node_modules/bootstrap'),
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
        <title>Payday loan settlement attorneys - Fee on success - A on BBB</title>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />
        <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        <meta name="keywords" content="payday loan debt settlement,payday loan settlement,payday loan help,settle payday loans" />
        <meta name="description" content="Atty. Solomon has helped over 3000 people settle payday loan debts with 53% savings. Contact one of our 8 offices for a list of lenders he has defeated." />
        <meta name="title" content="Payday loan settlement attorneys - Fee on success - A on BBB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" />
        <meta property="fb:admins" content="1455754854606012" />
        <meta name="twitter:title" content="Payday loan settlement attorneys - Fee on success - A on BBB" />
        <meta name="twitter:description" content="Atty. Solomon has helped over 3000 people settle payday loan debts with 53% savings. Contact one of our 8 offices for a list of lenders he has defeated." />
        <meta name="twitter:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta property="og:title" content="Payday loan settlement attorneys - Fee on success - A on BBB" />
        <meta property="og:description" content="Atty. Solomon has helped over 3000 people settle payday loan debts with 53% savings. Contact one of our 8 offices for a list of lenders he has defeated." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/debt-settlement/payday-loan.html" />
        <meta property="og:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta name="ahrefs-site-verification" content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4" />
        <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="canonical" href="https://www.ovlg.com/debt-settlement/payday-loan.html" />
        <link rel="icon" href={`${publicRuntimeConfig.rootPath}/favicon.ico`} />
      </Head>


      <Header></Header>
      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <main>
        {/* <WinningTheUser BannerInfo={BannerInfo} /> */}
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
                        <li className="list-group-item bi bi-check"> Cash Net USA</li>
                        <li className="list-group-item bi bi-check"> Plain Green Loans </li>
                        <li className="list-group-item bi bi-check"> Check N Go</li>
                        <li className="list-group-item bi bi-check"> Credit Ninja</li>
                        <li className="list-group-item bi bi-check"> Advance America</li>
                        <li className="list-group-item bi bi-check"> ACE Cash Express</li>
                        <li className="list-group-item bi bi-check"> Bright Lending</li>
                        <li className="list-group-item bi bi-check"> Net Credit</li>
                        <li className="list-group-item bi bi-check"> Check Into Cash</li>
                        <li className="list-group-item bi bi-check"> Money Messiah</li>
                        <li className="list-group-item bi bi-check"> Big Picture Loans</li>
                        <li className="list-group-item bi bi-check"> Mobiloans</li>
                        <li className="list-group-item bi bi-check"> Target Cash Now</li>
                        <li className="list-group-item bi bi-check"> Money Messiah</li>
                        <li className="list-group-item bi bi-check"> Bright Lending</li>
                        <li className="list-group-item bi bi-check"> Balance Credit</li>
                        <li className="list-group-item bi bi-check"> Lending Club</li>
                        <li className="list-group-item bi bi-check"> Green Arrow</li>
                        <li className="list-group-item bi bi-check"> King of Kash</li>
                        <li className="list-group-item bi bi-check"> My Quick Wallet</li>
                        <li className="list-group-item bi bi-check"> Lendumo</li>
                        <li className="list-group-item bi bi-check"> Arrowhead Advance</li>
                        <li className="list-group-item bi bi-check"> Money Key</li>
                        <li className="list-group-item bi bi-check"> Speedy Cash</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h4>Testimonials</h4>

                      <div className="mb-3 p-2">
                        <div className="row">
                          <div className="col">
                            <Image
                              className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                              alt="client image"
                              src={`${publicRuntimeConfig.rootPath}/images/review-images/Julie_A.jpg`}
                              width={60}
                              height={60}
                              quality={50}
                            />
                            <div className="ff-Oswald fs-5 fw-bold">Julie A.</div>
                            <div>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning"></i>
                            </div>
                            <div>
                              <Image
                                alt="yelp"
                                src={`${publicRuntimeConfig.rootPath}/images/yelp-logo_60x30.png`}
                                width={60}
                                height={30}
                              />
                            </div>
                          </div>
                          <div>Sean and the Oak View Law Group have been absolutely fantastic in helping me with my settlement. I am very pleased with their professionalism and the outcome of their diligent work. Much appreciated!</div>
                        </div>
                      </div>

                      <div className="mb-3 p-2">
                        <div className="row">
                          <div className="col">
                            <Image
                              className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                              alt="client image"
                              src={`${publicRuntimeConfig.rootPath}/images/review-images/Arkham_Harlequin.png`}
                              width={60}
                              height={60}
                              quality={50}
                            />

                            <div className="ff-Oswald fs-5 fw-bold">Arkham Harlequin</div>
                            <div>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning"></i>
                            </div>
                            <div>
                              <Image
                                src={`${publicRuntimeConfig.rootPath}/images/Google_2015_logo_60x20.png`}
                                alt="google"
                                width={60}
                                height={20}
                              />
                            </div>
                          </div>
                          <div>I was in a vicious cycle with payday loan companies and struggling so much. But OVLG was able to help me figure out my debt and set a payment schedule that worked for me. </div>
                        </div>

                      </div>

                      <div className="mb-3 p-2">
                        <div className="row">
                          <div className="col">
                            <Image
                              alt="client image"
                              className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                              src={`${publicRuntimeConfig.rootPath}/images/review-images/JJ_IMG_4896.webp`}
                              width={60}
                              height={60}
                              quality={50}
                            />

                            <div className="ff-Oswald fs-5 fw-bold">JJ</div>
                            <div>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning pe-1"></i>
                              <i className="bi bi-star-fill text-warning"></i>
                            </div>
                            <div>
                              <Image
                                src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo_160x30.png`}
                                alt="ovlg"
                                width={160}
                                height={30}
                              />
                            </div>
                          </div>
                          <div>Signing up with Oak View Law Group has been one of the best financial decisions I have ever made. The accounts have been settled quickly and for less than I would have paid on my own.</div>
                        </div>

                      </div>

                      <a href="/reviews" >See More</a>
                    </div>
                    <div className="col-md-4">
                      <h4>Success Stories</h4>

                      <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap mb-5">
                        <div className="p-2">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_1">
                            <Image
                              className="img-responsive story-img border border-secondary"
                              alt="Saved $1840.46 with Cash Net USA for Client AC"
                              src="https://www.ovlg.com/sites/files/success_story/Cash%20Net%20USA_0.jpg"
                              width={150}
                              height={200}
                              quality={50}
                            />
                          </a>
                        </div>
                        <div className="px-2 pb-2">
                          <div className="pb-4"><span className="font-size-24 textUnderline text-dark">Saved: $1,840</span></div>
                          <div>Client Initials: <b>AC</b></div>
                          <div>Debt processed: <b>$3,903</b></div>
                          <div>Debt settled: <b>$1,450</b></div>
                          <div className="creditor-name">Cash Net USA</div>
                        </div>
                      </div>
                      <div className="modal fade" id="successStoriesModal_1" tabIndex="-1" aria-labelledby="successStoriesModalLabel_1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="modal-title" id="successStoriesModalLabel_1">Saved: $1,840</div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                  className="img-responsive pull-left story-img"
                                  placeholder="blur"
                                  alt="Saved $1840.46 with Cash Net USA for Client AC"
                                  src="https://www.ovlg.com/sites/files/success_story/Cash%20Net%20USA_0.jpg"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap my-5">
                        <div className="p-2">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_2">
                            <Image
                              className="img-responsive story-img border border-secondary"
                              alt="Saved $1528.74 with Check N Go Online for Client AB1"
                              src="https://www.ovlg.com/sites/files/Check%20n%20Go%20Online.jpg"
                              width={150}
                              height={200}
                              quality={50}
                            />
                          </a>
                        </div>
                        <div className="px-2 pb-2">
                          <div className="pb-4"><span className="font-size-24 textUnderline text-dark">Saved: $1,528</span></div>
                          <div>Client Initials: <b>AB1</b></div>
                          <div>Debt processed: <b>$3,388</b></div>
                          <div>Debt settled: <b>$1,350</b></div>
                          <div className="creditor-name">Check N Go Online</div>
                        </div>
                      </div>
                      <div className="modal fade" id="successStoriesModal_2" tabIndex="-1" aria-labelledby="successStoriesModalLabel_2" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="modal-title" id="successStoriesModalLabel_2">Saved: $1,528</div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                  className="img-responsive pull-left story-img"
                                  placeholder="blur"
                                  alt="Saved $1528.74 with Check N Go Online for Client AB1"
                                  src="https://www.ovlg.com/sites/files/Check%20n%20Go%20Online.jpg"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap my-5">
                        <div className="p-2">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_3">
                            <Image
                              className="img-responsive story-img border border-secondary"
                              alt="Saved $1417.56 with ACE Cash Express for Client DM2"
                              src="https://www.ovlg.com/sites/files/success_story/ACE%20cash%20express_0.jpg"
                              width={150}
                              height={200}
                              quality={50}
                            />
                          </a>
                        </div>
                        <div className="px-2 pb-2">
                          <div className="pb-4"><span className="font-size-24 textUnderline text-dark">Saved: $1,417</span></div>
                          <div>Client Initials: <b>DM2</b></div>
                          <div>Debt processed: <b>$3,780</b></div>
                          <div>Debt settled: <b>$1,890</b></div>
                          <div className="creditor-name">ACE Cash Express</div>
                        </div>
                      </div>
                      <div className="modal fade" id="successStoriesModal_3" tabIndex="-1" aria-labelledby="successStoriesModalLabel_3" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="modal-title" id="successStoriesModalLabel_3">Saved: $1,417</div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                <Image
                                  className="img-responsive pull-left story-img"
                                  placeholder="blur"
                                  alt="Saved $1417.56 with ACE Cash Express for Client DM2"
                                  src="https://www.ovlg.com/sites/files/success_story/ACE%20cash%20express_0.jpg"
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

                  <h2>How does the payday loan settlement process work?</h2>
                  <p>Once you contact us:</p>
                  <ol>
                    <li> You will work with my <a href="/contact-us/people.html">assistant</a>. He will gather information on all of your debts.</li>
                    <li> I will review your file and contact your payday loan companies. I will inform all of them they cannot harass you anymore.</li>
                    <li> Most payday loan companies, once they know I am representing you, will settle the debt at favorable terms.</li>
                    <li> I will have you work with my assistant to make payments to the payday loan company.</li>
                    <li> You will be debt-free in three to four months.</li>
                  </ol>

                  <h2>FAQ</h2>
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          How can I give you debt relief?
                        </button>
                      </h3>
                      <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" >
                        <div className="accordion-body">
                          <p>I have helped people like you:</p>
                          <ul>
                            <li>Lower your payoff amount</li>
                            <li>Reduce or eliminate collection calls</li>
                            <li>Eliminate late fees, advance fees, extra fees</li>
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
                            <li><a href="/debt-consolidation">Debt consolidation</a></li>
                            <li><a href="/debt-management">Debt management</a></li>
                            <li><a href="/fdcpa.html">Relief from collection abuse</a></li>
                            <li><a href="/bankruptcy">Consumer bankruptcy</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Why do people need help with payday loans?
                        </button>
                      </h3>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                        <div className="accordion-body">
                          <p>
                            Payday loans are predatory. They are allowed to carry very high interest rates - up to 500%! - trapping people in a vicious cycle of debt. It's only natural that once trapped, people want to <a href="https://www.ovlg.com/contact-us/help.html">get payday loan debt relief</a>.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          Why should you choose our law firm to get the best payday loan help?
                        </button>
                      </h3>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
                        <div className="accordion-body">
                          <ol>
                            <li> Our attorneys follow state and federal payday loan laws.</li>
                            <li> Our secure system allows you to monitor your lender accounts closely.</li>
                            <li> We know how to get payday loan companies off your back.</li>
                            <li> We are confident in our work and offer a 100% refund if you are not satisfied.</li>
                            <li> We offer a reasonable fee structure that won't interfere with your journey to financial freedom.</li>
                          </ol>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                          What steps should you take before getting payday loan debt relief?
                        </button>
                      </h3>
                      <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" >
                        <div className="accordion-body">
                          <strong>Step 1: Know how much you owe:</strong>
                          <p>
                            Don't go into debt negotiation blind. Make a list of all your lenders, calculate your outstanding balance for each, and make a note of the interest rates. Then you'll be in a strong position to settle your payday loans.
                          </p>
                          <strong>Step 2: Check whether your lender is licensed in your state:</strong>
                          <p>
                            Most states require payday loan lenders to be licensed. Check your state's laws to make sure your lender is following them. If they're not licensed, you may be able to avoid paying them back the full amount you owe.
                          </p>
                          <strong>Step 3: Cancel ACH authorizations:</strong>
                          <p>
                            If you have authorized your lender to automatically withdraw payments directly from your bank account, cancel it. Without authorization, they can't withdraw payments unless you allow it, putting you in a stronger position when the time comes to negotiate. This also prevents lenders from emptying your account.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                          How can you choose the best payday loan settlement companies?
                        </button>
                      </h3>
                      <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" >
                        <div className="accordion-body">
                          <p>Check the settlement company's fee structure and see if it's affordable.</p>
                          <p>Check if their business is accredited with the Better Business Bureau.</p>
                          <p>Ask if you'll get a refund if they can't help you pay off your payday loans.</p>
                          <p>Ask how they intend to provide you with payday loan relief.</p>
                          <p>Find out if they have good industry experience.</p>
                          <p>Find out how long they've been in business and what their success rate is when settling payday loans.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                          What are the 3 effective ways to get rid of payday loans?
                        </button>
                      </h3>
                      <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" >
                        <div className="accordion-body">
                          <strong>1. Join a payday loan debt settlement program</strong>
                          <p>The payday loan debt settlement company negotiates with your lenders to reduce your outstanding balance to an affordable amount while waiving late penalties and fees. It helps you get payday loan relief fast.</p>

                          <strong>2. Enroll in a payday loan debt consolidation program</strong>
                          <p>Payday loan consolidation companies offer monthly payment plans tailored to your income. Once your <a href="/debt-consolidation/payday-loan.html">loans have been consolidated</a>, you'll enjoy a lower interest rate and a single, affordable monthly payment.</p>

                          <strong>3. Opt for a payday loan debt management plan</strong>
                          <p>With this option, credit counselors will explain how to get out of payday loans legally. They'll negotiate separately with each of your lenders for lower interest rates to create an affordable monthly payment. Then, they'll make a personalized budget plan to keep you on track to eliminate payday loans.</p>
                          <p>Read the features of each program to find the best way to get real payday loan relief.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                          What is the worst way to eliminate payday loan debt?
                        </button>
                      </h3>
                      <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" >
                        <div className="accordion-body">
                          Try to avoid bankruptcy, because it will hurt your credit.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                          Where should you report about a payday loan scam?
                        </button>
                      </h3>
                      <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" >
                        <div className="accordion-body">
                          <a target="_blank" href="https://www.consumerfinance.gov/">The Consumer Financial Protection Bureau (CFPB)</a>
                          <br />
                          <a target="_blank" href="https://www.usa.gov/state-attorney-general">Your state's attorney general</a>
                          <br />
                          <a target="_blank" href="https://www.ftc.gov/">The Federal Trade Commission (FTC)</a>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                          Are payday loans legal?
                        </button>
                      </h3>
                      <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" >
                        <div className="accordion-body">Payday loans aren't legal in every state, but that doesn't stop unscrupulous lenders from offering them. If you took out a loan from a lender operating illegally in your state, you might be able to settle your debt for much less than you realize. Have you explored the payday loan laws in your state? If not, <a href="https://www.ovlg.com/payday-loan-laws/">do it now</a>. It could save you a fortune.</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h3 className="accordion-header" id="flush-headingEleven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                          Can you settle payday loans on your own?
                        </button>
                      </h3>
                      <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" >
                        <div className="accordion-body">
                          It's tough to settle and get out of payday loan debt on your own due to the following reasons:
                          <ul>
                            <li>Not every payday loan lender is legal. An experienced payday loan settlement company will be able to tell right away, potentially saving you thousands.</li>
                            <li>Most people don't have the training or experience necessary to negotiate payday loan settlements successfully.</li>
                            <li>Negotiations with lenders can be stressful and nerve-wracking.</li>
                            <li>Laws on payday loans and collection efforts vary from state to state. If you don't know the laws well, you are unlikely to get the best result.</li>
                            <li>Unless you've done this before, payday loan settlement companies have a much better track record than you.</li>
                          </ul>
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
        <p style={{ fontSize: "13px" }} className="pad-l-20 col-xs-12">Last Updated on: Mon, 19 Jul 2021</p>
        <div className="clearfix"></div>
      </div>

      <Footer FooterInfo={FooterInfo}></Footer>
    </div>
  );
}



export const getStaticProps = async () => {

  return {
    props: {
      BannerInfo: { pageTopicTitle: 'Payday loan settlement' },
      FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
    }
  }
}
