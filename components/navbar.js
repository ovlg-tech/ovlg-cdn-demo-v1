import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import dynamic from 'next/dynamic'

const Bootstrap = dynamic(
    () => import('../node_modules/bootstrap'),
    { ssr: false }
)

export default function NavBar() {
    const [error, setError] = useState(null);
    const [loggedInChecked, setLoggedInChecked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUserName, setLoggedInUserName] = useState("");
    const [loggedInUserAccount, setLoggedInUserAccount] = useState("");

    const fn_get_search_result_mobile = () => {
        // alert('it works!');
        var search_text = document.querySelector('#search_node').value;
        if (search_text !== "") {
            window.location.href = "https://www.ovlg.com/search/node/" + search_text;
        }
    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        // for search feature
        var contentHtml = '<div class="search">  ' +
            '<form onsubmit="return fn_get_search_result_desktop()" method="get" action="">' +
            ' <input title="Enter the terms you wish to search" class="form-control search-node" type="text" id="search_node_desktop" name="search_block" value="" >' +
            ' <button type="submit" class="srch-submit"> ' +
            '    <span class="bi bi-search" aria-hidden="true"></span> ' +
            ' </button> ' +
            '</form>' +
            '</div>';
        const bootstrap = require('bootstrap')
        var popover = new bootstrap.Popover(document.querySelector('#nav_search'), {
            html: true,
            sanitize: false,
            content: function () {
                return contentHtml;
            }
        })

        // for login status check
        fetch("https://www.ovlg.com/users/logged-in-status", { method: "POST" })
            .then(res => res.text())//.json())
            .then(
                (result) => {
                    let string = result.trim();
                    let arrayData = string.split('####');
                    // console.log('array-data');
                    console.log(arrayData);
                    setLoggedInChecked(true);
                    if (arrayData[0] && arrayData[1]) {
                        setLoggedIn(result);
                        setLoggedInUserName(arrayData[0]);
                        setLoggedInUserAccount(arrayData[1]);
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // console.log('api returned but error')
                    // console.log(error)
                    setLoggedInChecked(true);
                    setError(error);
                }
            )
    }, [])


    return (
        <nav className="navbar-expand-md navbar-fixed-top1 navbar-light">
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div style={{ position: "fixed", top: "12px", width: "50px", height: "50px", right: "0", zIndex: "10000" }}>
                            <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>

                    <div className="" className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-lg-0" itemScope itemType="http://www.schema.org/SiteNavigationElement">
                            <li className="search mt-3 d-md-none">
                                <input title="Enter the terms you wish to search" className="form-control search-node" type="text" id="search_node" name="search_block" placeholder="Search here" />
                                <button type="submit" id="srch_submit" className="srch-submit" onClick={fn_get_search_result_mobile}> <span className="bi bi-search" aria-hidden="true"></span> </button>
                            </li>
                            <li itemProp="name" className="first nav-item active-trail active">
                                <a itemProp="url" href="/attorneys" title="" className="active-trail nav-link active">Attorneys</a>
                            </li>
                            <li itemProp="name" className="nav-item">
                                <a itemProp="url" className="nav-link" href="/practices">Our Services</a>
                            </li>
                            <li itemProp="name" className="nav-item">
                                <a itemProp="url" className="nav-link" href="/reviews" title="">Reviews</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tools and Guides </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/education" title="Education">Education</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/letters">Sample Letters</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/weekly-waterfall-tips">Weekly Waterfall Tips</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/payday-loan-laws">Payday Loan Laws</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="https://www.ovlg.com/calculators/" title="">Calculators</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/blog" title="Blog">Blog</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="https://ovlg.teachable.com/" title="Financial Literacy Course">Financial Literacy Course</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/history">Our History</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/no-results-refund-policy">No Questions Asked Refund Policy</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/ftc-disclosures">FTC Disclosure</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/transparency">Transparency Disclosure</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/success/stories.php" title="">Success Stories</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/scam.html">Report Collection Scam</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/privacy">Privacy Policy</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/survey/results.php">Client survey results</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/contact-us" title="">Phone &amp; Emails</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/contact-us/people.html">People</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/contact-us/address.html">Addresses</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="url" className="dropdown-item" href="/complaints">Complaint Box</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/*
                            <ul className="navbar-nav ms-auto mb-lg-0 menu-search-login-icon">
                                <div id="login_logout_area">
                                    <li itemProp="name" className="nav-item dropdown">
                                    <a itemProp="url" className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
                                    <ul  className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                        <li itemProp="name">
                                            <a  itemProp="url" className="dropdown-item" href="#" title="">Profile</a>
                                        </li>
                                        <li itemProp="name">
                                            <a itemProp="url" className="dropdown-item" href="#">Logout</a>
                                        </li>
                                    </ul>
                                </li>
                                </div>
                                <li itemProp="name" className="d-none d-md-block">
                                    <span data-bs-container="body" id="nav_search" data-bs-placement="bottom">
                                        <i className="fa fa-search colr-brown" aria-hidden="true"></i>
                                    </span>  
                                </li>   
                            </ul>
*/}


                        <ul className="navbar-nav ms-auto mb-lg-0 menu-search-login-icon">
                            <div id="login_logout_area" className="nav-login">
                                {loggedInChecked && loggedIn ?
                                    <li itemprop="name" class="nav-item dropdown" style={{ padding: '0' }}>
                                        <a itemprop="url" class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">{loggedInUserName}</a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown4" >
                                            <li itemprop="name"><a itemprop="url" class="dropdown-item" href={loggedInUserAccount} title="">My Account</a></li>
                                            <li itemprop="name"><a itemprop="url" class="dropdown-item" href="/user/logout">Logout</a></li>
                                        </ul>
                                    </li>
                                    :
                                    <li itemProp="name">
                                        <a itemProp="url" className="text-decoration-none" href="/users/login">
                                            <span className="fa fa-sign-in"></span> Login</a> &nbsp;
                                    </li>}
                                {/* <li itemProp="name">
                                    <a itemProp="url" className="text-decoration-none" href="/users/login">
                                        <span className="fa fa-sign-in"></span> Login</a> &nbsp;
                                </li>*/}

                            </div>
                            <li itemProp="name" className="d-none d-md-block pt-2 nav-login">
                                <span data-bs-container="body" id="nav_search" data-bs-placement="bottom">
                                    <i className="fa fa-search colr-brown" aria-hidden="true"></i>
                                </span>
                            </li>
                        </ul>
                        <script dangerouslySetInnerHTML={{
                            __html: `
                            function fn_get_search_result_desktop(){
                                search_text = document.querySelector('#search_node_desktop').value;   
                                // alert(search_text);   
                                if(search_text!==""){
                                    window.location.href = "https://www.ovlg.com/search/node/" + search_text;
                                }
                                return false;
                            }
                            `,
                        }} />
                        <div className="nav-bbb d-block d-md-none">
                            <a className="el-inline img-bbb-logo" target="_blank"
                                href="http://www.bbb.org/sacramento/business-reviews/debt-relief-services/oak-view-law-group-apc-in-citrus-heights-ca-47014743">
                                <Image
                                    src={`${publicRuntimeConfig.rootPath}/images/BBB-A-Rating.png`}
                                    alt="BBB-A-Rating"
                                    width={80}
                                    height={41}
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>

    )
}