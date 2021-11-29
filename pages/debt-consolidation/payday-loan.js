import Head from "next/head";
import React, { useEffect } from 'react'
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
//import WinningTheUser from '../../components/banner-section/winning-the-user';
import WinningTheUserMobCredibilityOff from '../../components/banner-section/winning-the-user-mob-credibility-off';
import dynamic from 'next/dynamic'

const imagesLoader = ({ src, width, quality }) => {
  return `/images/${src}?w=${width}&q=${quality || 75}`
}

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

    const timer = setTimeout(() => {
      dataLayer.push({ 'event': 'optimize.activate' });
    }, 500);
    return () => clearTimeout(timer);

  }, [])
  return (
    <div>
      <Head>
        <title>Payday loan consolidation attorneys - Fee on success - A on BBB</title>

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />

        <meta name="keywords" content="payday loan consolidation, payday loan debt relief, payday loan consolidation process" />
        <meta name="description" content="Read payday loan consolidation reviews to know how Atty.Solomon helped over 3000 clients get payday loan relief. To consolidate payday loans, give us a call." />
        <meta name="title" content="Payday loan consolidation attorneys - Fee on success - A on BBB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" /><meta property="fb:admins" content="1455754854606012" />
        <meta name="twitter:title" content="Payday loan consolidation attorneys - Fee on success - A on BBB" />
        <meta name="twitter:description" content="Read payday loan consolidation reviews to know how Atty.Solomon helped over 3000 clients get payday loan relief. To consolidate payday loans, give us a call." />
        <meta name="twitter:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta property="og:title" content="Payday loan consolidation attorneys - Fee on success - A on BBB" />
        <meta property="og:description" content="Read payday loan consolidation reviews to know how Atty.Solomon helped over 3000 clients get payday loan relief. To consolidate payday loans, give us a call." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/debt-consolidation/payday-loan.html" />
        <meta property="og:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta name="ahrefs-site-verification" content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4" />
        <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />
        <link rel="canonical" href="https://www.ovlg.com/debt-consolidation/payday-loan.html" />
        <link rel="icon" href={`${publicRuntimeConfig.rootPath}/favicon.ico`} />
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-MZV37V3"></script>
      </Head>

      <Header></Header>

      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <main>
        <WinningTheUserMobCredibilityOff BannerInfo={BannerInfo} />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1  body_bg">
              <div className="row">
                <div className="col-sm-12 mt-4 mb-0 pb-0">
                  <nav aria-label="breadcrumb mb-0 pb-0">
                    <ul className="breadcrumb blog-breadcrumb">
                      <li className="breadcrumb-item pb-0 mb-0"><a href="/"><i className="bi bi-house-door-fill"></i></a></li>
                      <li className="breadcrumb-item pb-0 mb-0"><a href="/practices">Services</a></li>
                      <li className="breadcrumb-item pb-0 mb-0"><a href="/debt-consolidation">Debt consolidation</a></li>
                      <li className="breadcrumb-item pb-0 mb-0 d-none d-md-inline">Payday loan consolidation</li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-12 main-container pad-tb-10 ">

                  <div id="sec-1-payday-loans"></div>
                  <div id="sec-2-payday-loans">
                    <h2>My clients have saved over 53% on their payday loans.</h2>

                    <div className="row px-2 pb-2 mb-3" >
                      <div className="col-md-4">

                        <div className=" rounded-circle2">
                          <Image
                            loader={imagesLoader}
                            className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                            alt="client image"
                            src={`review-images/ThomasM.jpg`}
                            width={60}
                            height={60}
                            quality={50}
                          />
                        </div>

                        <div className="ff-Oswald font-size-22"><b>Thomas M.</b></div>
                        <div>
                          <i className="bi bi-star-fill text-warning pe-1"></i>
                          <i className="bi bi-star-fill text-warning pe-1"></i>
                          <i className="bi bi-star-fill text-warning pe-1"></i>
                          <i className="bi bi-star-fill text-warning pe-1"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <div>
                          <img src={`${publicRuntimeConfig.rootPath}/images/yelp-logo_60x30.png`} alt="yelp" width="60" />
                        </div>

                        <div>Oak View Law Group has been my top choice for consolidating my debt and legal services. I have been with them for about 2 years, and they are always there online, text, chat, voice whenever I need assistance with my creditors.</div>
                      </div>

                      <div className="col-md-4">
                        <div className="col">

                          {/* <img
                                  alt="client image"
                                  className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                  src={`${publicRuntimeConfig.rootPath}/images/review-images/Cheritta Stewart.png`}
                                  width="60" /> */}
                          <Image
                            loader={imagesLoader}
                            className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                            alt="client image"
                            src={`review-images/Cheritta Stewart.png`}
                            width={60}
                            height={60}
                            quality={50}
                          />

                          <div className="ff-Oswald font-size-22"><b>Cheritta Stewart</b></div>
                          <div>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                          </div>
                          <div>
                            <img src={`${publicRuntimeConfig.rootPath}/images/Google_2015_logo_60x20.png`} alt="google" width="60" />
                          </div>
                        </div>
                        <div>I learned about Oak View Law group after I had gotten in over my head with payday loans (don't ever take out payday loans). I contacted them twice before I signed up. Each time the staff was pleasant and helpful. </div>
                      </div>

                      <div className="col-md-4">
                        <div className="col">
                          {/* <img
                                  alt="client image"
                                  className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                                  src={`${publicRuntimeConfig.rootPath}/images/review-images/Client-BC_15826519821396180032897601312014.webp`}
                                  width="60" /> */}
                          <Image
                            loader={imagesLoader}
                            alt="client image"
                            className="img-responsive grayscale-to-normal lazyloaded rounded-circle"
                            src={`review-images/Client-BC_15826519821396180032897601312014.webp`}
                            width={60}
                            height={60}
                            quality={50}
                          />

                          <div className="ff-Oswald font-size-22"><b>Client BC</b></div>
                          <div>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning pe-1"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                          </div>
                          <div>
                            {/* <img src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo_160x30.png`} alt="ovlg" width="160" /> */}
                            <Image
                              loader={imagesLoader}
                              src={`ovlg-logo_160x30.png`}
                              alt="ovlg"
                              width={160}
                              height={30}
                            />
                          </div>
                        </div>
                        <div>Ron was great, and I'm happy to be a client to get rid of my payday loans!!!!</div>
                      </div>

                    </div>

                    <div className="">
                      <a href="/reviews" className="btn btn-outline-secondary rounded-0" >Read More Reviews</a>
                    </div>


                  </div>

                  <div id="sec-3-payday-loans">

                    <h2>What is payday loan consolidation?</h2>
                    <p>Payday loan consolidation helps you consolidate and repay your high-interest, short-term loans with a single affordable monthly payment plan.</p>

                    <h2>How does the payday loan consolidation process work?</h2>
                    <p>Once you contact us:</p>
                    <ol>
                      <li>You will work with my <a href="/contact-us/people.html">assistant</a>. He will gather information on all of your debts.</li>
                      <li>I will review your file and contact your payday loan companies. I will inform all of them they cannot harass you anymore.</li>
                      <li>Most payday loan companies, once they know I am representing you, will consolidate your loans at very favorable terms.</li>
                      <li> I will have you work with my assistant to make payments to the lender.</li>
                      <li>You will be debt-free in six to nine months.</li>
                    </ol>
                  </div>
                  <div id="sec-4-payday-loans">

                    <h2>How can this program help you save money?</h2>
                    <p><strong>I have helped people like you:</strong></p>
                    <ul>
                      <li>Reduce monthly payments</li>
                      <li>Create a single, manageable monthly payment plan</li>
                      <li>Eliminate late fees, advance fees, and extra fees</li>
                      <li>Reduce interest rates on payday loans</li>
                      <li>Stop automatic debits and overdraft fees</li>
                      <li>Avoid court fees, wage garnishments, and judgments</li>
                    </ul>
                    <h2>Why should you choose our law firm for payday loan consolidation?</h2>
                    <p>Our company provides payday loan debt relief in the following ways:</p>
                    <ol>
                      <li>Once you enroll for a debt relief credit counseling session, attorney Lyle Solomon’s assistant will explain the payday loan consolidation process, the fee structure, and the <a href="/no-results-refund-policy">No Questions Asked Refund Policy</a>.</li>
                      <li>We will also address any questions you may have. When you feel comfortable moving forward, you will enroll in a debt consolidation program as a client.</li>
                      <li>The assistant will collect certain information needed to start the payday loan consolidation process. This will include your name, the lender’s name, and the date the loan was taken out, the loan’s terms, the method of payment, the amount you’ve paid so far, and the loan’s outstanding balance.</li>
                      <li>The assistant whom Mr. Solomon assigns your case will analyze your debt and verify your loans are legal.</li>
                      <li>If you owe legal payday loans, we will determine the maximum interest you need to pay. And if you owe illegal loans, you will need to pay only the principal amount.</li>
                    </ol>
                    <h2>What other services does my team offer?</h2>
                    <ul>
                      <li><a href="/debt-settlement">Debt settlement</a></li>
                      <li><a href="/debt-management">Debt management</a></li>
                      <li><a href="/fdcpa.html">Relief from collection abuse</a></li>
                      <li><a href="/bankruptcy">Consumer bankruptcy</a></li>
                    </ul>
                    <h2>What are the pros and cons of payday loan debt consolidation?</h2>
                    <p><strong>Pros</strong></p>
                    <ul>
                      <li>No advance fees, late fees, extra fees, high-interest rates</li>
                      <li>Fewer collection calls</li>
                      <li>Lower risk of getting sued</li>
                      <li>One budget-friendly monthly payment</li>
                      <li>Reduced mental stress</li>
                    </ul>
                    <p><strong>Cons</strong></p>
                    <ul>
                      <li>Have to pay professional fees</li>
                      <li>Missing payments can delay the process</li>
                    </ul>

                  </div>
                  <div id="sec-5-payday-loans-faq">

                  </div>
                  <div id="sec-6-payday-loans-faq">
                    <h2>FAQ</h2>

                    <div className="accordion accordion-flush" id="accordionFlushExample">

                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Why do you incur a considerable amount fast when you take out payday loans?
                          </button>
                        </h3>
                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" >
                          <div className="accordion-body">
                            <p>These loans are high-interest, short-term loans designed to be paid back with your next paycheck. Usually, the total amount of the loan becomes due within two to three weeks after the loan is issued. Most people make a partial payment and then take out a new payday loan to repay the existing balance. This gets them into the payday loan trap, and it becomes difficult to eliminate these loans and find financial relief.</p>
                            <p>Unfortunately, even the most responsible payday loan borrowers face a situation where they can’t pay back the outstanding amount by the due date. They can’t even secure a new loan to cover the difference.</p>
                            <p>If you can’t pay on time, you may start receiving calls from debt collectors. And your outstanding balance will skyrocket due to the very high interest rates typical to almost all payday loans.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingFourteen">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
                            What are the alternatives to the payday loan consolidation program?
                          </button>
                        </h3>
                        <div id="flush-collapseFourteen" className="accordion-collapse collapse" aria-labelledby="flush-headingFourteen" >
                          <div className="accordion-body">
                            <p>If you want to repay your debts without using the services of a consolidation company, there are other options to consolidate debt. You can take out a personal loan (a debt consolidation loan) with which you repay your existing credit card debt and other unsecured debts. This allows you to consolidate your current payday loans with one consolidation loan.</p>
                            <p>The creditor will perform a credit check to assess your creditworthiness. A personal loan usually has a lower interest rate than a short-term loan. You can get a personal loan at a relatively lower interest rate if your financial and credit situation is good. The annual percentage rate for payday loans can even go up to 521%. The repayment terms and conditions of consolidation loans are also relatively better. You will have to make fixed payments every month to repay the new debt consolidation loan.</p>
                            <p>We can help you settle your payday loans if you cannot repay your loans in full. Through the settlement, you can get rid of your unsecured debts fast.</p>
                          </div>
                        </div>
                      </div>



                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Does payday loan consolidation affect your credit?
                          </button>
                        </h3>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                          <div className="accordion-body">
                            <p>Usually, the payday loan companies do not convey any information about you to the credit bureaus. Your consolidation program also does not appear on your credit report. Therefore, enrolling in a consolidation program won’t affect your credit score. Your credit score may improve after you repay all your debts.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Are you aware of the payday loan laws? Is your loan legal?
                          </button>
                        </h3>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                          <div className="accordion-body">
                            <p>Check out the <a href="/payday-loan-laws">payday loan laws</a> of your state.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            How can you compare your payday loan relief options?
                          </button>
                        </h3>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
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
                                    <td>It drops initially but improves over time</td>
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
                        <h3 className="accordion-header mt-0" id="flush-headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            How can you pay off payday loans in installments?
                          </button>
                        </h3>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" >
                          <div className="accordion-body">
                            <p>An Extended Payment Plan, or EPP.</p>
                            <p>An EPP will help you pay off the outstanding balance on your payday loans, usually in four equal installments, without added fees or interest.</p>
                            <p>Under an EPP, if your payday loan company is a member of the Community Financial Services Association of America (CFSA), they can’t:</p>
                            <ul>
                              <li>Compel you to repay the loans</li>
                              <li>Threaten or force you to make immediate payments</li>
                              <li>Charge you additional fees for this option. In addition, they will be required to give you your next four paydays to repay them.</li>
                            </ul>
                            <p>If you have taken a loan from a CFSA member, then you can ask for an EPP. After you submit your application, you’ll get a new statement detailing your modified loan agreement. The terms will indicate the amount of the four equal payments you will need to make over the next four paydays. There will be no new fees or interest charged for these new terms.</p>
                            <p>You can make payments in cash or use the ACH debit option to have the charges withdrawn automatically from your account on payday. Once you have set up the EPP, you need to inform the lender. Most lenders won’t allow you to change the payment method after you have signed the new agreement.</p>
                          </div>
                        </div>


                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingSix">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            How many times can you apply for an EPP?
                          </button>
                        </h3>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" >
                          <div className="accordion-body">
                            <p>Under federal law, you can apply for an EPP with each payday lender only once per year. However, state laws vary on this, so you should check the laws in your state. The lender will be obligated to follow the law in your state.</p>
                            <p>Also, remember that you can’t take out another payday loan until you have paid off the entire amount due on your EPP.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingEight">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            What if you cannot pay off payday loans in installment?
                          </button>
                        </h3>
                        <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" >
                          <div className="accordion-body">
                            <p>The consequences of failing to pay off your EPP loan can be severe. Your lender may charge you an additional EPP fee, along with other charges and penalties. They can also increase the payment amount you must make each pay period. They can sue you for principal, interest, and penalties, as well. So, it can be a financial disaster that you should try to avoid. Before entering into an EPP, be sure that you can make the payments, and make them on time, every time they’re due.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header mt-0" id="flush-headingNine">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                            How can you tell if your lender is a member of the CFSA?
                          </button>
                        </h3>
                        <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" >
                          <div className="accordion-body">
                            <p>Carefully read the information on the payday loan lender’s website and look for the CFSA logo.</p>
                            <p>If the company has a physical address, then it may be better to go in person to see the blue oval logo yourself. It should be prominently on display somewhere in their office.</p>
                            <p>If the CFSA member agency doesn’t agree to give you an Extended Payment Plan, you can call the CFSA Hotline 888-572-9329 between 9 and 5 Eastern Time. You can also register a complaint at the CFSA website.</p>
                          </div>
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
