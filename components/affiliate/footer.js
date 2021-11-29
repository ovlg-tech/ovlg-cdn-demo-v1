

import Image from "next/image";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export default function Footer() {
return (
<>
<div className="container-fluid"  style={{ boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)", position: "relative", zIndex: "1"}} id="whiteTopFooterHide" >
<div className="row">
   <div className="col-md-12">
      <div className="pad-tb-20 text-center">
         <ul className="footerItem">
            <li>
               <Image
                  src={`${publicRuntimeConfig.rootPath}/images/TrustLink.jpg`}
                  alt="TrustLink logo"
                  useMap="#Map"
                  width={141}
                  height={77}
                  />
               <map name="Map" id="Map">
                  <area
                     id="trustlink_sec"
                     alt=""
                     title=""
                     href="#"
                     shape="rect"
                     coords="14,56,61,71"
                     />
                  <area
                     alt="TrustLink logo"
                     title=""
                     href="https://www.trustlink.org/Reviews/Oak-View-Law-Group-APC-206054627"
                     target="_blank"
                     shape="rect"
                     coords="82,56,127,71"
                     />
               </map>
            </li>
            <li>
               <span
               title="Calchamber Member"
               name="Calchamber Member"
               className="common_sprite calchamber_Member"
               style={{ verticalAlign: "middle" }}
               ></span>
            </li>
            <li>
               <span
               title="Calbar Registered"
               name="Calbar Registered"
               className="common_sprite calbar"
               style={{ verticalAlign: "middle" }}
               ></span>
            </li>
            <li>
               <a title="yelp" target="_blank" href="https://www.yelp.com/biz/oak-view-law-group-los-altos-2" ><img src={`${publicRuntimeConfig.rootPath}/images/yelp-logo.png`} alt="yelp logo"/></a>
            </li>
         </ul>
      </div>
   </div>
</div>
</div>
<div className="bg-brown-darker">
   <footer className="container">
      <div className="row">
         <div className="col-md-4">
            <img src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/images/logo-white.png" alt="ovlg brand logo" className="img-fluid white-logo-footer mar-t-20 pad-t-10" />
         </div>
         <div className="colr-white col-12 font-size-18 mt-4 mb-2">
            <div itemScope="" itemType="http://schema.org/PostalAddress">
               <span itemProp="streetAddress">
               11899 Edgewood Road, Suite L4
               </span>
               ,<span itemProp="addressLocality">Auburn</span>,
               <span itemProp="addressRegion">CA</span>
               <span itemProp="postalCode">95603-3536</span>,
               <span itemProp="addressCountry">United States</span>
            </div>
         </div>
         <div className="colr-white col-12 font-size-14 mb-2 mt-4">                    
            The services of Oak View Law Group (OVLG) and its
            affiliates may not be available in all states. OVLG along
            with its Of Counsel attorneys may also be referred to as
            "Oak View Law Group", "we", "us" or "the firms".  <br /><br />            
            <strong>Disclaimer:</strong> The contents of this web site
            are not intended to establish an attorney-client
            relationship, provide the reader with legal advice, or
            substitute for legal advice from an attorney.
         </div>
      </div>
   </footer>
   <div className="colr-white">
      <hr />
   </div>
   <div className="container">
      <div className="col pt-3 pb-5 colr-white font-size-14">Copyright © 2021 Oak View Law Group</div>
   </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<script
   type="text/javascript"
   defer
   src={`${publicRuntimeConfig.rootPath}/js/global.js`}
   ></script>
<script
   type="text/javascript"
   defer
   src={`${publicRuntimeConfig.rootPath}/js/chatcode.js`}
   ></script>
</>
);
}

