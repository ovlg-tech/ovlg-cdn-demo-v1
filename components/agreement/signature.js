import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()

export default function Signature() {
    return (
        <>
        <div>Submit your signature</div>
        <div id="signature-pad"  className="signature-pad">
        <div  className="signature-pad--body">
          <canvas></canvas>
        </div>
        <div  className="signature-pad--footer">
          <div  className="description">Sign above</div>
          <div  className="signature-pad--actions">
            <div>
              <button type="button"  className="button clear" data-action="clear">Clear</button>
              {/* <button type="button"  className="button" data-action="change-color">Change color</button> */}
              {/* <button type="button"  className="button" data-action="undo">Undo</button> */}
            </div>
            {/* <div>
              <button type="button"  className="button save" data-action="save-png">Save as PNG</button>
              <button type="button"  className="button save" data-action="save-jpg">Save as JPG</button>
              <button type="button"  className="button save" data-action="save-svg">Save as SVG</button>
            </div> */}
          </div>
        </div>
      </div>


      <script type="text/javascript" defer src={`${publicRuntimeConfig.rootPath}/js/signature-pad.umd.js`}></script>
      <script type="text/javascript" defer src={`${publicRuntimeConfig.rootPath}/js/signatue.js`}></script>
      </>
    )
  }



