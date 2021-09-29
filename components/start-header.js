import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export default function Header() {
return (
<header>
<div className="container pt-3">
    <div className="row">
        <a href="/" className="col-9 col-md-6 text-left">
          <img src={`${publicRuntimeConfig.rootPath}/images/ovlg-logo.png`} alt="ovlg brand logo" className="img-fluid"  />
        </a> 
        
       <a className="col-3 col-md-6 pt-2 text-right" target="_blank" href="http://www.bbb.org/sacramento/business-reviews/debt-relief-services/oak-view-law-group-apc-in-citrus-heights-ca-47014743">
        <span className="d-block d-md-none">
         <img src={`${publicRuntimeConfig.rootPath}/images/BBB-A-Rating.png`} alt="ovlg brand logo"  className="img-fluid" height="40" />
        </span>
        <span className="d-none d-md-block">
         <img src={`${publicRuntimeConfig.rootPath}/images/BBB-A-Rating.png`} alt="ovlg brand logo" height="40" />
        </span>
       </a>
</div>
</div>
<hr />
</header>


)
}

