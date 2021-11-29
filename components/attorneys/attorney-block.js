import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()

const AttorneyBlock = ({ Attorney }) => {
   return (
      <>
        <div className="col-md-4 col-lg-3 mar-tb-30" itemScope="" itemType="http://schema.org/Attorney">
               <div className="attorney_card">
                  <div className="banner d-block atty-image">
                     <a href={Attorney.url}>
                     <img alt={Attorney.img.alt} src={`${publicRuntimeConfig.rootPath}/images/attorney-images/${Attorney.img.src}`} className="img-fluid" />
                     {/* <Image itemProp="image" 
                           alt={Attorney.img.alt} 
                           src={`${publicRuntimeConfig.rootPath}/images/attorney-images/${Attorney.img.src}`} 
                           width={250}
                           height={300}
                        /> */}
                        { (Attorney.attorneyId == 432357 || Attorney.attorneyId == 382175) ? ( '' ) : 
                         ( <span class="atty-cog"><a href={`${publicRuntimeConfig.rootPath}/attorneys-consent-doc/${Attorney.consent_document_to_allow_display_on_website}`}  target="_blank"><i class="fa fa-cog" aria-hidden="true"></i></a></span> )
                        }
                     </a>
                  </div>
                  <div className="name">
                     <a href={Attorney.url} title={Attorney.name}>
                        <span itemProp="name">{Attorney.name}</span>
                     </a>
                  </div>
                  <div className="follow-info"> 
                  <p>
                     { (Attorney.attorneyId == 382175) ? 
                        ( <span className="textUnderline">Founder</span> ) 
                        :
                        ( <span className="textUnderline" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">
                                <b>State: </b><small itemProp="name">{Attorney.state}</small>
                          </span> )
                     }
                  </p>
                  </div>
               </div>
               <meta itemProp="paymentAccepted" content="Debit Card, Credit Card" />
               <meta itemProp="currenciesAccepted" content="USD" />
               <meta itemProp="priceRange" content="$50 to $1500" />
               <meta itemProp="telephone" content="800-530-OVLG" />
         </div> 
      </>
  )
}

export default AttorneyBlock