import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export default function Header() {
    return (
        <header className="" >          

            <script type="text/javascript" defer src="https://www.ovlg.com/sites/all/themes/ovlg_bootstrap/ovlg/js/google_analytics.js"></script>
            { process.env.prod &&
            <script dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-3474577-1'); `,
                }} />
            }           
        </header>


    )
}