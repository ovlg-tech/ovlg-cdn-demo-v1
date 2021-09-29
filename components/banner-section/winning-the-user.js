import PersonalConnection from './personal-connection';
import PageTopic from './page-topic ';
import Credibility from './credibility';
import PageTopicForMobile from './page-topic-for-mobile';


export default function WinningTheUser({ BannerInfo }) {
    return (

        <section className="banner-group-bg">
            <div className="container-fluid">
                <div className="row">

                    <PersonalConnection BannerInfo={BannerInfo} />

                    <PageTopic BannerInfo={BannerInfo} />

                    <Credibility BannerInfo={BannerInfo} />

                    <PageTopicForMobile BannerInfo={BannerInfo} />

                </div>
            </div>
        </section>
    );
}
