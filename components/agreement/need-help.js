

import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()

export default function NeedHelp() {
    return (
        <div className="col-12">
            <div className="ff-Oswald font-size-28 pt-4 pb-2">Attorney Solomon</div>         
                <div className="ff-Oswald">Phone: <a href="tel:+18005306854" title="Call Toll Free: (800)-530-OVLG" className="start-help-link">(800)-530-OVLG</a>
                </div>
                <div className="ff-Oswald">Text:<a href="sms://+14155345474" title="SMS to: 415-534-5474"> 415-534-5474 </a>
                </div> 
                <div className="ff-Oswald">Email: <a href="mailto:clientintake@oakviewlaw.com" className="start-help-link">clientintake@oakviewlaw.com</a>
                </div>
            <div className="clearfix"></div>
        </div>
    )
  }