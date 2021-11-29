import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


const EducationBanner = () => {
    return (
        <section style={{ height: '250px', position: 'relative', width: '100vw', overflow: 'hidden', backgroundColor: '#806459' }} >
            <Image
                src={`${publicRuntimeConfig.rootPath}/images/education/ovlg-education-banner.webp`}
                alt="Personal finance education"
                layout="fill"
                objectFit="cover"
                //objectFit="fill" 
                quality={70}
                placeholder="blur"
                priority
                className="banner-subpages-img"
            />
            <div className="banner-subpages-content">
                <h1 className="colr-white text-center">OVLG Knowledge Center</h1>
                <div className="colr-white font-size-20 text-center">News about debt, taxes and all things personal finance</div>
            </div>
        </section>
    )
}

export default EducationBanner