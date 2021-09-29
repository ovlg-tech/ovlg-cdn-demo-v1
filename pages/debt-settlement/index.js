import Head from "next/head";
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import WinningTheUser from '../../components/banner-section/winning-the-user'
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

                <title>Debt settlement attorneys - Fee on success - A on BBB</title>

                <meta name="keywords" content="debt settlement ,debt settlement reviews,debt settlement programs,debt settlement services,consolidate debt,debt settlement companies" />
                <meta name="description" content="Over 6700 people have saved around 54% on their bills with debt settlement. Call one of our 8 offices to find creditors against whom Atty. Solomon has won." />

                <meta name="title" content="Debt settlement attorneys - Fee on success - A on BBB" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ovlg" />
                <meta property="fb:app_id" content="404180306716557" /><meta property="fb:admins" content="1455754854606012" />
                <meta name="twitter:title" content="Debt settlement attorneys - Fee on success - A on BBB" />
                <meta name="twitter:description" content="Over 6700 people have saved around 54% on their bills with debt settlement. Call one of our 8 offices to find creditors against whom Atty. Solomon has won." />
                <meta name="twitter:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
                <meta property="og:title" content="Debt settlement attorneys - Fee on success - A on BBB" />
                <meta property="og:description" content="Over 6700 people have saved around 54% on their bills with debt settlement. Call one of our 8 offices to find creditors against whom Atty. Solomon has won." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="http://www._/debt-settlement" />
                <meta property="og:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
                <meta name="ahrefs-site-verification" content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4" />
                <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />
                <link rel="canonical" href="https://www.ovlg.com/debt-settlement" />
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

                <div className="container">
                    <div className="row">
                        <div className="col body_bg">
                            <div className="row">
                                <div className="col-md-12 main-container pad-tb-10 ">

                                    <h2>My clients have saved over 54% on their debts.</h2>
                                    <div className="row">
                                        <div className="col-md-4 ">
                                            <h4>I have won against:</h4>
                                            <ul className="list-group">
                                                <li className="list-group-item bi bi-check"> American Express</li>
                                                <li className="list-group-item bi bi-check"> Walmart Credit Card </li>
                                                <li className="list-group-item bi bi-check"> First Bankcard</li>
                                                <li className="list-group-item bi bi-check"> Archer Direct</li>
                                                <li className="list-group-item bi bi-check"> Chase Visa </li>
                                                <li className="list-group-item bi bi-check"> Dell Financial Service</li>
                                                <li className="list-group-item bi bi-check"> Target Cash Now</li>
                                                <li className="list-group-item bi bi-check"> AT&T Mobility</li>
                                                <li className="list-group-item bi bi-check"> Merrick Bank </li>
                                                <li className="list-group-item bi bi-check"> LVNV Funding </li>
                                                <li className="list-group-item bi bi-check"> Barclay Card</li>
                                                <li className="list-group-item bi bi-check"> Wells Fargo </li>
                                                <li className="list-group-item bi bi-check"> Citibank</li>
                                                <li className="list-group-item bi bi-check"> Bank Of America</li>
                                                <li className="list-group-item bi bi-check"> Discover Card</li>
                                                <li className="list-group-item bi bi-check"> Chase Bank </li>
                                                <li className="list-group-item bi bi-check"> Citi Mastercard</li>
                                                <li className="list-group-item bi bi-check"> HSBC Best Buy </li>
                                                <li className="list-group-item bi bi-check"> First Equity Card </li>
                                                <li className="list-group-item bi bi-check"> Apple Credit Card</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Testimonials</h4>

                                            <div className="bd-highlight mb-3">
                                                <div className="p-2 bd-highlight">
                                                    <div className="row">
                                                        <div className="col">
                                                            <Image
                                                                className="img-responsive grayscale-to-normal rounded-circle"
                                                                alt="client image"
                                                                src={`${publicRuntimeConfig.rootPath}/images/review-images/Julie_A.jpg`}
                                                                width={60}
                                                                height={60}
                                                                quality={50}
                                                            />

                                                            <div className="ff-Oswald font-size-22"><b>Julie A.</b></div>
                                                            <div>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
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
                                            </div>

                                            <div className="bd-highlight mb-3">
                                                <div className="p-2 bd-highlight">
                                                    <div className="row">
                                                        <div className="col">
                                                            <Image
                                                                className="img-responsive grayscale-to-normal rounded-circle"
                                                                alt="client image"
                                                                src={`${publicRuntimeConfig.rootPath}/images/review-images/Derrick Hibler.png`}
                                                                width={60}
                                                                height={60}
                                                                quality={50}
                                                            />
                                                            <div className="ff-Oswald font-size-22"><b>Derrick Hibler</b></div>
                                                            <div>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
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
                                                        <div>Oak View Law Group is one of the best and trusted companies you can work with to help eliminate and pay off credit card debt. The Oak View Law Group took all the pressure off me and placed all unwanted calls and conversations from my creditors into their hands.</div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="bd-highlight mb-3">
                                                <div className="p-2 bd-highlight">
                                                    <div className="row">
                                                        <div className="col">
                                                            <Image
                                                                alt="client image"
                                                                className="img-responsive grayscale-to-normal rounded-circle"
                                                                src={`${publicRuntimeConfig.rootPath}/images/review-images/MH_DC345F8F-141A-4656-B9C7-6C4C87FDD267.webp`}
                                                                width={60}
                                                                height={60}
                                                                quality={50}
                                                            />

                                                            <div className="ff-Oswald font-size-22"><b>MH</b></div>
                                                            <div>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
                                                                <i className="bi bi-star-fill text-warning pe-1"></i>
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
                                                        <div>The team is still in negotiations. However, they've been professional and helpful in what they have accomplished for me so far. I would definitely recommend them. They definitely relieved a lot of anxiety and stress in an unfortunate situation that was snowballing out of control.</div>
                                                    </div>
                                                </div>

                                            </div>

                                            <Link href="/reviews"><a>See More</a></Link>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Success Stories</h4>
                                            <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap align-items-center mb-3">
                                                <div className="p-2">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_1">
                                                        {/* <img className="img-responsive story-img lazyloaded" width="150" height="200" alt="Saved $5260 with TD Bank for Client TB1" src="https://www.ovlg.com/sites/files/TD%20Bank.jpg" /> */}
                                                        <Image
                                                            className="img-responsive story-img border border-secondary"
                                                            alt="Saved $5260 with TD Bank for Client TB1"
                                                            src="https://www.ovlg.com/sites/files/TD%20Bank.jpg"
                                                            width={150}
                                                            height={200}
                                                            quality={50}
                                                        />
                                                    </a>
                                                </div>
                                                <div className="p-2 ">
                                                    <div className="pb-4"><span className="font-size-24 textUnderline text-dark">Saved: $5,260</span></div>
                                                    <div>Client Initials: <b>TB1</b></div>
                                                    <div>Debt processed: <b>$12,714</b></div>
                                                    <div>Debt settled: <b>$5,700</b></div>
                                                    <div className="creditor-name">TD Bank</div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id="successStoriesModal_1" tabIndex="-1" aria-labelledby="successStoriesModalLabel_1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <div className="modal-title" id="successStoriesModalLabel_1">Saved: $5,260</div>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {/* <img className="img-responsive story-img lazyloaded" width="100%" height="500" alt="Saved $5260.88 with TD Bank for Client TB1" src="https://www.ovlg.com/sites/files/TD%20Bank.jpg" /> */}
                                                            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                                                <Image
                                                                    className="img-responsive pull-left story-img"
                                                                    placeholder="blur"
                                                                    alt="Saved $5260.88 with TD Bank for Client TB1"
                                                                    src="https://www.ovlg.com/sites/files/TD%20Bank.jpg"
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap align-items-center my-3">
                                                <div className="p-2">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_2">
                                                        {/* <img className="img-responsive story-img lazyloaded" width="150" height="200" alt="Saved $4451 with Washington Mutual(LVNV Funding) for Client SR" src="https://www.ovlg.com/sites/files/success_story/Washington%20Mutual%28LVNV%20Funding%29.jpg" /> */}
                                                        <Image
                                                            className="img-responsive story-img border border-secondary"
                                                            alt="Saved $4451 with Washington Mutual(LVNV Funding) for Client SR"
                                                            src="https://www.ovlg.com/sites/files/success_story/Washington%20Mutual%28LVNV%20Funding%29.jpg"
                                                            width={150}
                                                            height={200}
                                                            quality={50}
                                                        />
                                                    </a>
                                                </div>
                                                <div className="p-2">
                                                    <div className="pb-4"><span className="font-size-24 textUnderline text-dark">Saved: $4,451</span></div>
                                                    <div>Client Initials: <b>SR</b></div>
                                                    <div>Debt processed: <b>$8,479</b></div>
                                                    <div>Debt settled: <b>$2,543</b></div>
                                                    <div className="creditor-name">Washington Mutual(LVNV Funding)</div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id="successStoriesModal_2" tabIndex="-1" aria-labelledby="successStoriesModalLabel_2" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <div className="modal-title" id="successStoriesModalLabel_2">Saved: $4,451</div>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {/* <img className="img-responsive story-img lazyloaded" width="100%" height="500" alt="Saved $4451.73 with Washington Mutual(LVNV Funding) for Client SR" src="https://www.ovlg.com/sites/files/success_story/Washington%20Mutual%28LVNV%20Funding%29.jpg" /> */}
                                                            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                                                <Image
                                                                    className="img-responsive pull-left story-img"
                                                                    placeholder="blur"
                                                                    alt="Saved $4451.73 with Washington Mutual(LVNV Funding) for Client SR"
                                                                    src="https://www.ovlg.com/sites/files/success_story/Washington%20Mutual%28LVNV%20Funding%29.jpg"
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row flex-md-wrap flex-xl-nowrap mt-3">
                                                <div className="p-2 bd-highlight">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#successStoriesModal_3">
                                                        {/* <img className="img-responsive story-img lazyloaded" width="150" height="200" alt="Saved $3935 with Home Depot# 9831 for Client CW1" src="https://www.ovlg.com/sites/files/success_story/Home%20Depot%209831.jpg" /> */}
                                                        <Image
                                                            className="img-responsive story-img border border-secondary"
                                                            alt="Saved $3935 with Home Depot# 9831 for Client CW1"
                                                            src="https://www.ovlg.com/sites/files/success_story/Home%20Depot%209831.jpg"
                                                            width={150}
                                                            height={200}
                                                            quality={50}
                                                        />
                                                    </a>
                                                </div>
                                                <div className="p-2 bd-highlight">
                                                    <div className="pb-4"><span className="font-size-24 textUnderline text-dark">Saved: $3,935</span></div>
                                                    <div>Client Initials: <b>CW1</b></div>
                                                    <div>Debt processed: <b>$9,747</b></div>
                                                    <div>Debt settled: <b>$4,500</b></div>
                                                    <div className="creditor-name">Home Depot# 9831</div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id="successStoriesModal_3" tabIndex="-1" aria-labelledby="successStoriesModalLabel_3" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <div className="modal-title" id="successStoriesModalLabel_3">Saved: $3,935</div>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {/* <img className="img-responsive story-img lazyloaded" width="100%" height="500" alt="Saved $3935 with Home Depot# 9831 for Client CW1" src="https://www.ovlg.com/sites/files/success_story/Home%20Depot%209831.jpg" /> */}
                                                            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                                                                <Image
                                                                    className="img-responsive pull-left story-img"
                                                                    placeholder="blur"
                                                                    alt="Saved $3935 with Home Depot# 9831 for Client CW1"
                                                                    src="https://www.ovlg.com/sites/files/success_story/Home%20Depot%209831.jpg"
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Link href="/success/stories.php"><a>See More</a></Link>
                                        </div>
                                    </div>

                                    <h2>How does our debt settlement process work?</h2>
                                    <p>Once you contact us:</p>
                                    <ol>
                                        <li>My <Link href="/contact-us/people.html"><a>assistant</a></Link> will take down the details of all your unsecured debts.</li>
                                        <li> I will review your file and contact your creditors. I will inform all of them that they cannot harass you anymore.</li>
                                        <li> Most of the creditors, once they know I am representing you, will settle your debt at very favorable terms.</li>
                                        <li> I will have you work with my assistant to make payments to the creditor.</li>
                                        <li> You will be debt-free in three to four months.</li>
                                    </ol>

                                    <h2>FAQ</h2>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    How can I help to settle your debt?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" >
                                                <div className="accordion-body">
                                                    <p>I have helped people like you:</p>
                                                    <ul>
                                                        <li>Reduce total debt amount</li>
                                                        <li>Eliminate late fees, advance fees, extra fees</li>
                                                        <li>Avoid collection calls</li>
                                                        <li>Avoid debt collection lawsuits</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    What other services does my team offer?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li><Link href="/debt-consolidation"><a>Debt consolidation</a></Link></li>
                                                        <li><Link href="/debt-management"><a>Debt management</a></Link></li>
                                                        <li><Link href="/fdcpa.html"><a>Relief from collection abuse</a></Link></li>
                                                        <li><Link href="/bankruptcy"><a>Consumer bankruptcy</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    What is a debt settlement program?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                                                <div className="accordion-body">
                                                    <p>It is a legal bill repayment method that helps consumers pay less than they owe. This program saves creditors time and money because they don't have to go through the complex legal process of bankruptcy. Consumers save a lot of money as well, since they don't have to pay back the full debt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    When should you consider debt settlement?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>When you have credit card debt, payday loans, collection accounts, medical bills, etc.</li>
                                                        <li>When creditors are threatening to file lawsuits against you.</li>
                                                        <li>When you want your creditors to accept less than what you owe.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                    Why should you consult a debt settlement attorney?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" >
                                                <div className="accordion-body">
                                                    <p>A good debt settlement attorney has years of experience settling debt. They have the training, knowledge, and expertise to understand the ins and outs of debt negotiation. A skilled attorney can apply that knowledge and experience to your specific situation.</p>
                                                    <p>And that's just the tip of the iceberg.</p>
                                                    <p>Here are a few other reasons to consult a lawyer to help you settle your debt:</p>
                                                    <ul>
                                                        <li>You won't have to deal with collection calls. The collectors will be required to work with your attorney.</li>
                                                        <li>Attorneys know what creditors can and can't do. They know how to negotiate with creditors to settle your debt in the most challenging situations. </li>
                                                        <li>They know the latest FTC rules by heart, including some you might not know even exist.</li>
                                                        <li>Attorneys are trained negotiators. They are very likely to save more for you than you can save for yourself.</li>
                                                        <li>They know how to negotiate a settlement with credit card companies even if they file a lawsuit against you.</li>
                                                        <li>They can safeguard you from collection harassment and online debt settlement scams.</li>
                                                        <li>If collection agencies try to scam you, an attorney can file a complaint with the state attorney general.</li>
                                                        <li>An attorney will give you the best debt settlement advice.</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                    What are the key debt settlement laws you should be aware of?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" >
                                                <div className="accordion-body">
                                                    <p>When you're looking for debt negotiation services, you should become familiar with the relevant laws to avoid getting scammed. The Telemarketing Sales Rule was introduced in 2010 to safeguard the interests of consumers and prevent debt settlement companies from using fraudulent activities. Here are a few important laws that everyone should know:</p>
                                                    <ol>
                                                        <li><strong>Upfront fees:</strong> Debt settlement companies are not allowed to charge you an upfront fee. They can charge you a fee only after they have settled the debt. To do that, they must submit the complete settlement program to you and also give you proof that the initial payment was made to the creditor.</li>
                                                        <li><strong>Disclosure:</strong> The debt settlement company is required to explain the entire program upfront. They need to inform you when you can expect the debt resolution process to be complete. In addition, they are required to disclose the following facts to you:
                                                            <ol type="a">
                                                                <li>The total cost of maintaining the dedicated account and the program.</li>
                                                                <li>The effect the debt resolution activity is likely to have on your credit score.</li>
                                                            </ol>
                                                        </li>
                                                        <li><strong>Misrepresentation:</strong> The Federal Trade Commission prohibits the misrepresentation of facts regarding debt settlement services. Debt settlement companies and their representatives may not make false promises and must clearly explain the services they offer. They are required to reveal their success rate correctly.</li>
                                                        <li><strong>Dedicated account: </strong>According to debt settlement laws, a settlement company needs to meet the following conditions when setting up the dedicated account:
                                                            <ol type="a">
                                                                <li>They must open an FDIC-insured bank account dedicated to the use of your funds.</li>
                                                                <li>They must provide you with complete ownership of the account.</li>
                                                                <li>You must be able to withdraw money from the account anytime without paying a penalty.</li>
                                                                <li>They can't have a referral fee agreement with the bank maintaining the dedicated account.</li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingSeven">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                                    How can you choose the best debt settlement company?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" >
                                                <div className="accordion-body">
                                                    {/* <h4>Comparison of debt relief options</h4> */}
                                                    <div className="table-responsive" >
                                                        <ul>
                                                            <li>Ask the company how they go about settling debt. A good one will know how it works in detail.</li>
                                                            <li>Ask if they charge an upfront fee. Debt settlement companies aren't allowed to charge upfront fees.</li>
                                                            <li>Check if the company is licensed in your state.</li>
                                                            <li>Find out the company's experience in the industry. The longer it has been in the industry, the better.</li>
                                                            <li>Check the fee structure and find out if it is acceptable.</li>
                                                            <li>Go through the company's reviews on the Better Business Bureau's website.</li>
                                                            <li>Check to see if the debt settlement company follows the FTCs regulations.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingEight">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                                    What should you do before you settle debt with a debt collector?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" >
                                                <div className="accordion-body">
                                                    <p>Settling with debt collectors is not an easy task. You have to be smart, determined, and knowledgeable to deal with them effectively. Specifically, that means you have to: </p>

                                                    <ul>
                                                        <li>Understand the Fair Debt Collections Practices Act (FDCPA) first. This is a consumer protection amendment to the Consumer Credit Protection Act.</li>
                                                        <li>Check if the statute of limitations has expired. Collection agencies can't sue you for the debts after a certain period, depending on your state and the kind of debt you owe. If the statute of limitations has expired, you may not need to pay them a dime.</li>
                                                        <li>Ask the debt collection agency to send you a debt validation letter via certified mail. The letter will lay out the terms of the loan, how much you owe, and the basis of their claim to the debt. It is possible that they don't legally own the debt they're asking you to pay. If this is the case, you don't have an obligation to pay them at all.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingNine">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                                    How much will debt collectors settle for?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" >
                                                <div className="accordion-body">
                                                    <p>The best debt settlement program can help you save a huge amount of money. It can help you save big on the outstanding balance, penalties, and late fees of your debt. If your accounts are more than 180 days past due, collection agencies may agree to cut down the outstanding balance by a big percentage since they are not getting money, anyway.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header mt-0" id="flush-headingTen">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                                    Is debt settlement worth it?
                                                </button>
                                            </h3>
                                            <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" >
                                                <div className="accordion-body">
                                                    {/* <p>Whether you opt for DIY debt settlement or get help from professionals, this debt resolution helps you save money. However, your credit score is likely to drop by a few points after your debt is settled. The drop is marginal because your credit score is already very low due to delinquent accounts. When you're past due on your accounts, your credit score drops significantly. When you miss payments on your accounts, lenders take that as a sign that you are not a responsible borrower - whether that's true or not - take action accordingly.</p> */}
                                                    <p>Whether you opt for DIY debt settlement or get help from professionals, this debt resolution helps you save money. However, your credit score is likely to drop by a few points after your debt is settled. The drop is marginal because your credit score is likely already low due to delinquent accounts.</p>
                                                    <p>When you stop making payments to a credit card company, your credit score drops significantly. When you miss payments on your accounts, lenders take that as a sign that you are not a responsible borrower - whether that's true or not - and take action accordingly.</p>
                                                    <p>You also have to pay tax to the Internal Revenue Service (IRS) when a credit card company agrees to reduce your debt amount by more than $600. So, you may have to set aside money for taxes after settling a credit card.</p>
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
        </div>
    );
}

export const getStaticProps = async () => {
    return {
        props: {
            BannerInfo: { pageTopicTitle: 'Debt settlement' },
            FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
        }
    }
}
