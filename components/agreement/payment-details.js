

import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()
export default function PaymentDetails() {
return (
<div className="el-payment" >
   <ul className={`nav nav-pills mb-3`} role="tablist">
      <li className={`nav-item ps-2`}  role="presentation">
         <input className="nav-link btn-check" name="payment-type" id="bank-tab"  data-bs-toggle="tab" data-bs-target="#bank" type="radio"
            role="tab" aria-controls="bank" aria-selected="true" value="Bank" defaultChecked  />
         <label className="btn btn-outline-primary" htmlFor="bank-tab">Bank Account details</label>
      </li>
      <li className={`nav-item ps-2`} role="presentation">
         <input className="nav-link btn-check " name="payment-type" id="card-tab" data-bs-toggle="tab" data-bs-target="#card" type="radio"
            role="tab" aria-controls="card" aria-selected="true"  value="Card" /> 
         <label className="btn btn-outline-primary" htmlFor="card-tab">Credit Card Details</label>
      </li>
   </ul>
   <div className="tab-content px-3" id="myTabContent">
      <div className="tab-pane active" id="bank" role="tabpanel" aria-labelledby="bank-tab">
         <div className="el-bank-detail">
            <div className="row mb-3">
               <div className="col-12 col-md-6">
                  <label htmlFor="account-holder-name" className="form-label"><b>Your name (as on bank account):</b></label>
                  <input type="text" className="form-control" name="account-holder-name"/>
               </div>
               <div className="col-12 mb-3 col-md-6">
                  <label htmlFor="bank-name" className="form-label"><b>Bank name</b></label>
                  <input type="text" className="form-control" placeholder="" name="bank-name" />
               </div>
               <div className="col-12 col-md-6">
                  <label htmlFor="bank-account-no" className="form-label"><b>Account number</b></label>
                  <input type="number" className="form-control" placeholder="" name="bank-account-no" />
               </div>
               <div className="col-12 col-md-6">
                  <label htmlFor="bank-routing-no" className="form-label"><b>Routing number</b></label>
                  <input type="number" className="form-control" placeholder="" name="bank-routing-no" />
               </div>
               <div className="col-12 col-md-6 mt-4">
                  <label htmlFor="bank-account-type" className="form-label"><b>Bank account type</b></label>
                  <div className="d-flex">
                     <div className="form-check">
                        <input className="form-check-input" type="radio" value="Checking" name="bank-account-type" id="radioChecking" defaultChecked />
                        <label className="form-check-label" htmlFor="radioChecking">Checking</label>
                     </div>
                     <div className="form-check ms-4">
                        <input className="form-check-input" type="radio" value="Savings"  name="bank-account-type" id="radioSavings"  />
                        <label className="form-check-label" htmlFor="radioSavings">Savings</label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tab-pane" id="card" role="tabpanel" aria-labelledby="card-tab">
         <div className="el-credit-card row">
            <div className="col-12 col-md-6">
               <label htmlFor="credit-card-number" className="form-label"><b>Card Number</b> <span className="fa fa-credit-card"></span></label>
               <input type="number" className="form-control" name="credit-card-number"/>
            </div>
            <div className="col-12 col-md-6">
               <label htmlFor="card-expiration" className="form-label"><b>Expiration</b></label>
               <input type="text" className="form-control" placeholder="MM / YY" name="card-expiration" />
            </div>
            <div className="col-12 col-md-6 mt-4">
               <label htmlFor="cvv-code" className="form-label"><b>CVV Code</b></label>
               <input type="number" className="form-control" placeholder="cvv" name="cvv-code" />
            </div>
            <div className="col-12 col-md-6 mt-4">
               <label htmlFor="credit-card-owner" className="form-label"><b>Card Owner</b></label>
               <input type="text" className="form-control" placeholder="Card Owner Name" name="credit-card-owner" />
            </div>
         </div>
      </div>
   </div>
</div>
)
}

