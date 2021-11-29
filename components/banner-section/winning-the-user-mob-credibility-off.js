import PersonalConnection from './personal-connection';
import PageTopic from './page-topic ';
import Credibility from './credibility';
import PageTopicForMobile from './page-topic-for-mobile';


export default function WinningTheUserMobCredibilityOff({ BannerInfo }) {
    return (

        <section className="banner-group-bg">
            <div className="container-fluid">
                <div className="row">

                    <PersonalConnection BannerInfo={BannerInfo} />

                    <PageTopic BannerInfo={BannerInfo} />

                    <div className="col-12 col-md-3 col-lg-4 d-none d-sm-inline"><Credibility BannerInfo={BannerInfo} /></div>

                    <div style={{background: '#1f1413'}}><PageTopicForMobile BannerInfo={BannerInfo} /></div>

                </div>
            </div>
        </section>
    );
}
