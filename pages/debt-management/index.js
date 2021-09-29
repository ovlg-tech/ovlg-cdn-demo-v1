import Head from "next/head";

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

import Header from "../../components/header";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import WinningTheUser from '../../components/banner-section/winning-the-user'

export default function index({ BannerInfo }) {
  return (
    <div>
      <Head>
        <title>Debt management lawyers - Fee on success - A on BBB</title>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />
        <link rel="canonical" href="https://www.ovlg.com/debt-management" />
        <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        <meta name="keywords" content="debt management, debt management program, debt management plan, debt management services" />
        <meta name="description" content="Attorney Lyle Solomon has helped over 6000 people combine multiple debts into an affordable monthly payment plan. Call or visit one of our 8 offices." />
        <meta name="title" content="Debt management lawyers - Fee on success - A on BBB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ovlg" />
        <meta property="fb:app_id" content="404180306716557" />
        <meta property="fb:admins" content="1455754854606012" />
        <meta name="twitter:title" content="Debt management lawyers - Fee on success - A on BBB" />
        <meta name="twitter:description" content="Attorney Lyle Solomon has helped over 6000 people combine multiple debts into an affordable monthly payment plan. Call or visit one of our 8 offices." />
        <meta name="twitter:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta property="og:title" content="Debt management lawyers - Fee on success - A on BBB" />
        <meta property="og:description" content="Attorney Lyle Solomon has helped over 6000 people combine multiple debts into an affordable monthly payment plan. Call or visit one of our 8 offices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www._/debt-management/" />
        <meta property="og:image" content="https://www.ovlg.com/sites/files/OVLG-logo.png" />
        <meta name="ahrefs-site-verification" content="26b8346eae89a03e97b91d7b3a40ddd7e19e5a58c403cde6f7016ae987847ff4" />
        <meta name="msvalidate.01" content="2EA676DE1B90A35D40CF8FE6C40CA2D0" />

        <link rel="icon" href={`${publicRuntimeConfig.rootPath}/favicon.ico`} />
        <link rel="stylesheet" href={`${publicRuntimeConfig.rootPath}/css/debt-consolidation.css`} />
        <script type="text/javascript" defer src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/js/load_youtube_iframe_api.js"></script>

      </Head>

      <Header></Header>
      <div className="col-md-12 col-xl-10 offset-xl-1">
        <NavBar></NavBar>
      </div>

      <main>
        <WinningTheUser BannerInfo={BannerInfo} />
        <div className="container">
          <div className="row">
            <div className="col main-container py-3">
              <section className="col-xs-12">
                <h2> How can I help you manage your debts? </h2>
                <p>Once you contact us:</p>
                <ul>
                  <li>You will start working with my <a href="/contact-us/people.html" target="_blank">assistants</a>, and he will gather all the necessary information on your personal finance, including debts.</li>
                  <li>I will review your files and contact your creditors and lenders. I will help you set up an agreement with your creditors and inform them to stop collection calls.</li>
                  <li>Most of your lenders and creditors will agree to participate in a program at favorable terms with you once they know I am representing you.</li>
                  <li>I will have you work with my assistant to make one lump payment to the lenders and creditors each month.</li>
                  <li>Participating in our program may help you reduce interest or waive fees. Your accounts will be paid off completely using the amount you send in.</li>
                  <li>According to the plan, once your debts are paid in full, it will help you re-establish credit.</li>
                  <li>You will be debt-free in six to nine months.</li>
                </ul>
                <h2> What other services can we provide you? </h2>
                <ul>
                  <li><a href="/debt-settlement" target="_blank">Debt settlement</a></li>
                  <li><a href="/debt-consolidation" target="_blank">Debt consolidation</a></li>

                  <li><a href="/debt-settlement/credit-card.html" target="_blank">Credit card settlement</a></li>
                  <li><a href="/debt-consolidation/payday-loan.html" target="_blank">Payday loan consolidation</a></li>
                  <li><a href="/fdcpa.html" target="_blank">Relief from collection abuse</a></li>
                  <li><a href="/bankruptcy" target="_blank">Bankruptcy</a></li>

                </ul>
                <p>Call us to find out more about our services, our affordable fees, and payment structures.</p>
                <h2> How our debt management program can help you save more </h2>
                <p>Our program can help you reduce interest, remove fines, late fees, and penalties. It reduces your monthly payments, enables you to make affordable debt repayment, and save money.</p>
                <p>The program helps you to get into a personalized budget plan through credit counseling. It allows you to get out of a critical financial situation by providing better money management strategies, so that you can achieve debt relief as soon as possible. The program also helps you to stop collection calls.</p>
                <h2> Why should you choose our law firm to manage your debts? </h2>
                <p>OVLG is a law firm registered in 45 states all over the country. So, you can reach us anytime you want; we are just a phone call away. We have been in this service for over 14 years and successfully managing debts with an 84% client satisfaction rate. Only we can provide you debt management services with the policy of fees on success and a 100% refund if we can’t manage your debts.</p>
                <p>As a debt management company, we follow FTC laws and protect your privacy. That’s why we are successfully helping over 6000 people become debt free. We have an A rating on the Better Business Bureau and more than 300 positive live reviews.</p>

                <h2>FAQ</h2>

                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        1. What Is a debt management plan?
                      </button>
                    </h3>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" >
                      <div className="accordion-body">
                        <p>A debt management plan is a skillfully planned payment schedule that combines consumer debt payments into an affordable single monthly payment.</p>
                        <p>There isn’t a loan involved, and credit scores aren’t taken into consideration.</p>
                        <p>Participants typically pay lower interest rates on their consumer debt. Creditors require you to close your accounts when you enroll in the program to avoid incurring further debt.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        2. How does a debt management program work?
                      </button>
                    </h3>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                      <div className="accordion-body">
                        <p>A debt management plan (DMP) is a contract between you and your creditors to help you repay your debt. A credit counseling company or a debt management company usually sets up and manages a DMP. They’ll assist you in analyzing your financial situation and help you create a budget. They will also provide financial education. In some cases, they suggest you close your credit accounts while enrolling in the program to avoid incurring more debt.</p>
                        <p>As a nonprofit debt management company, we will assist you in evaluating how much you can afford to pay toward your debts after paying all the priority payments and living expenses. If you have any money left over after covering those expenses, you’ll divide it evenly among your creditors. Typically, you’ll make a monthly payment to us, which we will send to your creditors as per the agreement.</p>
                        <p>Secured loans, such as a mortgage, homeowner loan, or car loan, are not covered by a debt management plan. Student loan debts are also not included.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        3. How can you choose the best debt management program?
                      </button>
                    </h3>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                      <div className="accordion-body">
                        <p>Before choosing the perfect program for managing debts, you must consider a few things first.</p>
                        <p>You should ask a few questions before enrolling.</p>
                        <ul>
                          <li>Is your company registered and a member of a professional association?</li>
                          <li>What kind of certification do your credit counselors have?</li>
                          <li>How would a debt management plan assist me in repaying my debts?</li>
                          <li>How well has the program worked for other clients?</li>
                          <li>What kind of financial education will I get while I’m enrolled in the program?</li>
                          <li>How much will it cost you to enroll in the program?</li>
                        </ul>
                        <p>The National Foundation for Credit Counseling and the Association of Independent Consumer Credit Counselors can help you locate a nonprofit credit counseling company. Select a counselor that provides services in a feasible way. Many credit counseling agencies do meetings over the phone or online. Ask if the counselor is available to speak on the phone or meet outside of regular business hours.</p>
                        <p>Do your own research. Your creditors may be able to refer you to a nonprofit counseling company. You can also look for credit counselors on the internet.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        4. What type of debts do we manage for you?
                      </button>
                    </h3>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
                      <div className="accordion-body">
                        <p>Through the OVLG debt management plan, a consumer can manage most of the consumer credits, such as personal loans, unpaid credit card accounts, medical bills, utility bills, and payday loans.</p>

                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        5. Which creditor do you work with?
                      </button>
                    </h3>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" >
                      <div className="accordion-body">
                        <p>OVLG, being a debt management company, can deal with any creditor who provides unsecured debts. Credit card companies, payday loan lenders, personal loan lenders, and medical bill creditors are some examples.</p>

                      </div>
                    </div>


                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        6. How much should you pay for a debt management program?
                      </button>
                    </h3>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" >
                      <div className="accordion-body">
                        <p>Fees vary by the state you live in and your financial situation. Before you sign up, you must check how much it’ll cost you each month toward your debt payments by checking our <a href="/services/fees.html" target="_blank">affordable fee structure</a>.</p>

                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        7. Will a debt management program hurt your credit score?
                      </button>
                    </h3>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" >
                      <div className="accordion-body">
                        <p>Although a debt management plan impacts your credit history, it has no long-term effects on your credit score.</p>
                        <p>Your DMP activity has no impact on your credit score in the future; in fact, it may suggest to lenders that you are actively working to pay off all of your debts to the best of your ability.</p>
                        <p>DMPs are also typically paid off over six to nine months with regular monthly payments. When you sign up for a DMP, your monthly payments are deducted from your bank account automatically each month. These on-time payments will have a significant beneficial impact on your payment history over time.</p>

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                        8. Can you use your credit cards on a debt management plan?
                      </button>
                    </h3>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" >
                      <div className="accordion-body">

                        <p>Your credit history comes to an end when you agree to close all of your credit accounts. Credit scores are calculated by credit reporting agencies, such as FICO and VantageScore, based on your credit history. The freeze on your credit is lifted once you’ve completed your DMP, and you can apply for and use credit cards again.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header mt-0" id="flush-headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                        9.  What are the things you should look for a debt management plan?
                      </button>
                    </h3>
                    <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" >
                      <div className="accordion-body">
                        <ul>
                          <li>Check the types of debt that can be included in the plan</li>
                          <li>Don’t stop your payments until the plan is approved</li>
                          <li>Check the online reviews</li>
                          <li>Live within your budget</li>
                          <li>Earn more money to make extra payments</li>
                          <li>Read your monthly account statements</li>
                          <li>Contact a debt management company when you can’t make payments</li>
                          <li>Check and confirm if creditors have accepted the plan</li>
                          <li>Don’t pay upfront fees</li>
                          <li>Don’t sign up if you can’t make the monthly payments</li>
                          <li>Don’t get swayed by false promises</li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>


              </section>
            </div>
          </div>
        </div>

      </main>

      <div className="container">
        <p style={{ fontSize: "13px" }} className="pad-l-20 col-12">Last Updated on: Thu, 02 Sep 2021 </p>
        <div className="clearfix"></div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      BannerInfo: { pageTopicTitle: 'Debt Management' },
    }
  }
}
