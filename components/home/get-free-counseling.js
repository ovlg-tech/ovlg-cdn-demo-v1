import homeStyle from '../../styles/Homepage.module.css'
import Image from 'next/image'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import SignupForm from './signupForm';

export default function GetFreeCounseling() {

  return (
    <section className="row">
      <div className={`${homeStyle['counseling-main-bg']}`}>
        <div className={`${homeStyle['counseling-image-bg']}`}>
          <Image
            src={`${publicRuntimeConfig.rootPath}/images/ovlg-service-banner.jpg`}
            alt="Attorney Lyle Solomon" layout="fill" objectFit="cover" className="banner-lyle-image" />
        </div>

        <div className={`col-sm-8 offset-sm-2 col-md-6 offset-md-3 my-5 ${homeStyle["homeSignupFormArea"]}`}>
          <h2 className="text-center">Get free counseling</h2>
          <div className={`clearfix ${homeStyle["homeSignupForm"]}`}>
            <span style={{ color: 'red' }} id="error_display"></span>
            <SignupForm />
            {/* <form
              action="/"
              method="post"
              id="ovlg-user-registration-form"
              acceptCharset="UTF-8"
            >
              <div>
                <input
                  type="hidden"
                  name="referral_url"
                  value="https://www.ovlg.com/debt-settlement/california.html"
                />

                <div className="form-item form-item-name form-type-textfield form-group">
                  <input
                    placeholder="Name"
                    required="required"
                    pattern="[a-zA-Z ]+"
                    onInvalid={(e) => e.target.setCustomValidity('Name can only contain alphabet and spaces')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    className="form-control form-text required"
                    type="text"
                    id="edit-name--2"
                    name="name"
                    size="60"
                    style={{ boxShadow: '0 0' }}
                    maxLength="128"
                  />
                </div>

                <div className="form-item form-item-email form-type-textfield form-group my-4">
                  <input
                    placeholder="E-mail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required="required"
                    onInvalid={(e) => e.target.setCustomValidity('Please enter valid email with proper formatting')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    className="form-control form-text required"
                    type="text"
                    id="edit-email"
                    name="email"
                    style={{ boxShadow: '0 0' }}
                    size="60"
                    maxLength="128"
                  />
                </div>

                <div className="form-item form-item-phone form-type-textfield form-group my-4">
                  <input
                    placeholder="Phone No."
                    className="SignupFormPhone form-control form-text"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required="required"
                    onKeyUp={(e) => phoneMask(e.target, e.keyCode)}
                    type="text"
                    id="edit-phone"
                    name="phone"
                    onInvalid={(e) => e.target.setCustomValidity('Please enter with proper formatting 999-999-9999')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    size="60"
                    style={{ boxShadow: '0 0' }}
                    maxLength="128"
                  />
                </div>

                <button
                  className="btn-lg btn-success bold col-12 btn btn-default form-submit mb-2 rounded-0"
                  type="submit"
                  id="edit-submit--2"
                  name="op"
                  value="Get Debt Relief"
                >
                  Get Debt Relief
                </button>
              </div>
            </form>{" "} */}
          </div>
          <p className="bannerCTAlink text-center">
            <a
              href="tel:+18005306854"
              title="Call Toll Free: (800)-530-OVLG"
              className="bannerCTAlink"
            >
              <i className="fa fa-phone"></i> (800)-530-OVLG
            </a>{" "}
            <span className="hidden-xs pad-lr-10"></span>
          </p>
        </div>
      </div>
    </section>
  );
}
