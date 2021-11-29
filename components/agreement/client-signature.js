import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()

export default function ClientSignature({pageInfo}) {
    return (
    <>
    <div className="col-12 px-3">
        <p><b>Your signature</b></p>
        <p >Client Name: <b><span id="client-name">{pageInfo.clientName}</span></b><span className="DCWFont"></span></p>
        <div id="client-signature-pad"  className="signature-pad">
        <div  className="signature-pad--body">
          <canvas id="client-sign"></canvas>
        </div>
      </div>
    </div>
      <script type="text/javascript" defer src={`${publicRuntimeConfig.rootPath}/js/client-signatue.js`}></script>
      </>
    )
  }



