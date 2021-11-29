

import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()

export default function PowerOfAttorney() {
    return (

<div className="el-pdf-doc" >
<div className="col-12 px-3">

    <h4><strong>Limited power of attorney</strong></h4>

    <p>To: Any and All of My Creditors:</p>

    <p>I hereby duly authorize, empower and appoint OAK VIEW LAW GROUP, APC (including any of its attorneys, other staff, or other parties it may designate) as my Attorney-in-Fact, to do the following on my behalf:</p>

    <p><b>1.</b> Communicate with any of my creditors, and obtain any requested information regarding any accounts or debts I may owe, including but not limited to the balance of my account, payment history, credit rating, verification of the account, and any other information necessary to settle or make satisfactory arrangement for the payment of any accounts or debts.</p>

    <p><b>2.</b> Make good faith settlement or payment offers on my behalf.</p>

    <p><b>3.</b> Settle, resolve, or arrange payment for any of my debts or accounts.</p>

    <p>I further request that, until I give further notice, any and all of my creditors direct all further telephone calls and correspondence to OAK VIEW LAW GROUP, APC.</p>

    <p>This Limited Power of Attorney shall remain in force until or unless modified or rescinded in writing.</p>

</div>
</div>
      
    )
  }



