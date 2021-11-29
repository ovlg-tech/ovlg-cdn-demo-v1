
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export default function NavBar() {
   const [error, setError] = useState(null);
   const [loggedInChecked, setLoggedInChecked] = useState(false);
   const [loggedIn, setLoggedIn] = useState(false);
   const [loggedInUserName, setLoggedInUserName] = useState("");
   
   useEffect(() => {
       // for login status check
       fetch("https://www.ovlg.com/affiliate/logged-in-status/api", { method: "POST" })
       .then(res => res.json())//.json())
       .then(
           (result) => {

               // console.log(result);
               setLoggedInChecked(true);
               if (result.name) {
                   setLoggedIn(result);
                   setLoggedInUserName(result.name);
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
<>
<section className="container-fluid">
<div className="row">
  <div className="col-lg-10 offset-lg-1 pb-md-2">
   <nav className="navbar navbar-expand-sm navbar-light">
      <span className="navbar-brand d-inline d-sm-none"><a href="/affiliate">
            <Image
               src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo.png`}
               alt="OVLG logo"
               className="logo img-responsive"
               width={224}
               height={42}
               priority
               />
         </a></span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               <a href="/affiliate/process.php" title="" itemProp="url">How it works?</a>
            </li>
            <li className="nav-item">
               <a href="/affiliate/faqs.php" title="" itemProp="url">FAQs</a>
            </li>
         </ul>
         <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {loggedInChecked && loggedIn ?
               <li itemprop="name" className="nav-item dropdown" style={{ padding: '0' }}>Welcome
               <a itemprop="url" className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">{loggedInUserName}</a>
               <ul className="dropdown-menu" aria-labelledby="navbarDropdown4" >
                   
                   <li itemprop="name"><a itemprop="url" className="dropdown-item" href="/affiliate/cpanel/myaccount" alt="">My Account</a></li>
                   <li itemprop="name"><a itemprop="url" className="dropdown-item" href="/affiliate/cpanel">Cpanel</a></li>
                   <li itemprop="name"><a itemprop="url" className="dropdown-item" href="/affiliate/logout.php" ><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
               </ul>
               </li>
               :
               <li className="nav-item"><div className="d-inline colr-grey"><b>Affiliate partner?</b></div> <span className="d-inline"><a href="/affiliate/login.php" itemProp="url">Sign In</a></span></li>}
            </ul>
         </span>
      </div> 
  </nav>
</div>

<div className="col-lg-10 offset-lg-1">
   <div className="row">
      <div className="col-md-3 d-none d-sm-block align-self-md-center">
         <a href="/affiliate">
            <Image
               src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo.png`}
               alt="OVLG logo"
               className="logo img-responsive"
               width={293}
               height={55}
               priority
               />
         </a>
      </div>
      <div className="col-md-9 text-end d-none d-sm-block align-self-md-center">
         <div><strong className="GreenText d-none d-sm-inline">Have questions? </strong>Call{" "}<span style={{ fontSize: "20px" }} className="RedText"> 916-745-8160 </span>{" "} <strong>Or</strong> <a href="/affiliate/contact.php"> Contact Us</a> <a
               href="/affiliate/contact.php"></a>
         </div>
      </div>

      <div className="col-12 text-center d-block d-sm-none pb-1 align-self-start pb-3">
         <div><strong>Have questions? <br /></strong>Call{" "}<span style={{ fontSize: "20px" }} className="RedText"> 916-745-8160 </span>{" "} <strong>Or</strong> <a href="/affiliate/contact.php"> Contact Us</a> <a
               href="/affiliate/contact.php"></a>
         </div>
      </div>

   </div>
</div>
</div>
</section>
</>
);
}

