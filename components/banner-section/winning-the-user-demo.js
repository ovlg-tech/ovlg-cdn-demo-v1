import PersonalConnectionDemo from './personal-connection-demo';
import PageTopic from './page-topic ';
import Credibility from './credibility';
import PageTopicForMobile from './page-topic-for-mobile';


export default function WinningTheUserDemo({ BannerInfo }) {
    return (

        <section className="banner-group-bg">
            <div className="container-fluid">
                <div className="row">

                    <PersonalConnectionDemo BannerInfo={BannerInfo} />

                    <PageTopic BannerInfo={BannerInfo} />

                    <Credibility BannerInfo={BannerInfo} />

                    <PageTopicForMobile BannerInfo={BannerInfo} />

                </div>
            </div>
        </section>
    );
}
