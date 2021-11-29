export default function MultiStateSignupForm() {
  return (
    <form id="msform">
      <input id="lead_crm_id" type="hidden" value="" />

      <fieldset  className="active" id="1-location-block">
        <h2  className="fs-title">Your location</h2>
        <div
          id="multi-form-msg"
           className="form-msg"
          style={{ visibility: "hidden" }}
        >
          Zip code does not exist
        </div>

        <input type="text" name="zip" id="zip" placeholder="Zip code" />

        <input type="text" name="city" id="city" placeholder="city" />

        <select name="user_state" id="user_state">
          <option value="" >
            Select State
          </option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WY">Wyoming</option>
        </select>
        <a
          href="javascript:void(0);"
          id="step1-next"
          name="next"
           className="next btn btn-success mar-t-20"
          style={{ padding: "10px 75px" }}
        >
          {" "}
          Next »{" "}
        </a>
      </fieldset>

      <fieldset  className="active" id="2-debt-info-block">
        <h2  className="fs-title">Your debt info</h2>

        <div  className="inputgroup">
          <span  className="input-label">Unsecured debt</span>
          <input
             className="form-control-range" style={{ display: "none !important" }}
            type="range"
            min="0"
            max="100000"
            value="0"
             className="slider"
            id="unsecured_debt"
          />
        </div>

        <div  className="inputgroup">
          <span  className="input-label">Secured debt</span>
          <input
             className="form-control-range" style={{ display: "none !important" }}
            type="range"
            min="0"
            max="100000"
            value="0"
             className="slider"
            id="secured_debt"
          />
        </div>

        <div  className="inputgroup" style={{ textAlign: "left" }}>
          <span
             className="input-label"
            style={{ float: "left", margin: "5px 0 0 0" }}
          >
            Total debt
          </span>
          <input
            type="text"
            id="total_debt"
            placeholder="Total debt"
            value="0"
            disabled="true"
            style={{
              width: "200px",
              border: "none",
              fontWeight: "bold",
              fontSize: "15px",
              background: "#fff",
            }}
          />
        </div>

        <div  className="inputgroup smaller-btn">
          <span  className="input-label">Sued by</span>
          <div  className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" id="option1" name="sued_by" value="creditor" onChange={(e) => getOptionValue(e.target)} className="btn-check" autocomplete="off" />
            <label  className="btn btn-outline-light font-size-80percent" for="option1">Creditor</label>

            <input type="checkbox" className="btn-check" name="sued_by" value="Lien" id="option2" autocomplete="off" onChange={(e) => getOptionValue(e.target)} />
            <label  className="btn btn-outline-light font-size-80percent" for="option2">Lien</label>

            <input type="checkbox" className="btn-check" name="sued_by" value="Levy" id="option3" autocomplete="off" onChange={(e) => getOptionValue(e.target)}/>
            <label  className="btn btn-outline-light font-size-80percent" for="option3">Levy</label>


            <input type="checkbox" className="btn-check" name="sued_by" value="Garnishment" id="option4" autocomplete="off" onChange={(e) => getOptionValue(e.target)} />
            <label  className="btn btn-outline-light font-size-80percent" for="option4">Garnishment</label>

            <input type="checkbox" className="btn-check" name="sued_by" value="None" id="option5" autocomplete="off" onChange={(e) => getOptionValue(e.target)} />
            <label  className="btn btn-outline-light font-size-80percent" for="option5">None</label>

          </div>


         {/* <div
             className="btn-group btn-group-toggle"
            data-toggle="buttons"
            style={{ display: "table" }}
          >
            <label  className="btn btn-secondary ">
              <input
                type="checkbox"
                name="sued_by"
                value="creditor"
                id="option1"
                autocomplete="off"
                onChange={(e) => getOptionValue(e.target)}
              />
              Creditor
            </label>
            <label  className="btn btn-secondary">
              <input
                type="checkbox"
                name="sued_by"
                value="Lien"
                id="option2"
                autocomplete="off"
                onChange={(e) => getOptionValue(e.target)}
              />
              Lien
            </label>
            <label  className="btn btn-secondary">
              <input
                type="checkbox"
                name="sued_by"
                value="Levy"
                id="option3"
                autocomplete="off"
                onChange={(e) => getOptionValue(e.target)}
              />
              Levy
            </label>
            <label  className="btn btn-secondary">
              <input
                type="checkbox"
                name="sued_by"
                value="Garnishment"
                id="option4"
                autocomplete="off"
                onChange={(e) => getOptionValue(e.target)}
              />
              Garnishment
            </label>
            <label  className="btn btn-secondary">
              <input
                type="checkbox"
                name="sued_by"
                value="None"
                id="option4"
                autocomplete="off"
                onChange={(e) => getOptionValue(e.target)}
              />
              None
            </label>
          </div> */}
        </div>
        <br />

        <a href="javascript:void(0);"  className="previous btn btn-secondary me-2">
          &laquo; Previous
        </a>

        <a href="javascript:void(0);"  className="next btn btn-success">
          {" "}
          Next &raquo;
        </a>
      </fieldset>

      <fieldset  className="active" id="3-other-debt-info-block">
        <h2  className="fs-title">Related info</h2>

        <div  className="checkbox col-sm-12">
          <label>
            <input
              id="unfilled_tax_past_4_year"
              name="unfilled_tax_past_4_year"
              type="checkbox" className="me-2"
            />Past due tax returns in the last 4 years
          </label>
        </div>
        <div className="row">
          <div  className="checkbox col-sm-6">
            <label>
              <input id="do_own_home" name="do_own_home" type="checkbox" className="me-2" />
              <span  className="fa fa-home"></span> Own Home
            </label>
          </div>

          <div  className="checkbox col-sm-6">
            <label>
              <input
                id="current_creditor_bill"
                name="current_creditor_bill"
                type="checkbox" className="me-2"
              />
              <span  className="fa fa-list"></span> Current On Bills
            </label> 
          </div>
        </div>
        <div  className="inputgroup">
          <span  className="input-label">Pre-Tax Income</span>
          <input
             className="form-control-range"
            type="range"
            min="0"
            max="100000"
            value="0"
             className="slider"
            id="pre_tax_income"
          />
        </div>

        <div  className="inputgroup">
          <span  className="input-label">Total Cash Available</span>
          <input
             className="form-control-range"
            type="range"
            min="0"
            max="100000"
            value="0"
             className="slider"
            id="total_cash_available"
          />
        </div>

        <div  className="checkbox col-sm-12">
          <label>
            <input
              id="filled_bankruptcy_past_eight_year"
              name="filled_bankruptcy_past_eight_year"
              type="checkbox"
            /> Filed for bankruptcy in last 8 years
          </label>
        </div>

        <a href="javascript:void(0);"  className="previous btn btn-secondary me-2">
          &laquo; Previous
        </a>
        <a href="javascript:void(0);"  className="next btn btn-success">
          Next &raquo;
        </a>
      </fieldset>

      <fieldset  className="inactive" id="4-debt-chapter-info-block">
        <h2  className="fs-title">Filed for bankruptcy in last 8 years</h2>

        <div  className="checkbox col-sm-12">
          <label>
            <input
              id="chapter_7_bankruptcy"
              name="chapter_7_bankruptcy"
              type="checkbox"
              checked="true"
            /> Filed Chapter 7
          </label>
        </div>

        <div  className="row" id="ch7">
          <div  className="col-sm-6 ">
            <p  className="input-label">Discharged date</p>
            <div  className="input-group date" data-provide="datepicker">
              <input
                type="text"
                id="discharge_date"
                 className="form-control"
                value=""
              />
              <div  className="input-group-addon">
                <span  className="fa fa-calendar"></span>
              </div>
            </div>
          </div>

          <div  className="col-sm-6">
            <p  className="input-label">Dismissed date</p>
            <div  className="input-group date" data-provide="datepicker">
              <input
                type="text"
                id="dismissed_date"
                 className="form-control"
                value=""
              />
              <div  className="input-group-addon">
                <span  className="fa fa-calendar"></span>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div  className="checkbox col-sm-12">
          <label>
            <input
              id="chapter_13_bankruptcy"
              name="chapter_13_bankruptcy"
              type="checkbox"
              checked="true"
            /> Filed Chapter 13
          </label>
        </div>

        <div  className="row" id="ch13">
          <div  className="col-sm-6 ">
            <p  className="input-label">Discharged date</p>
            <div  className="input-group date" data-provide="datepicker">
              <input
                type="text"
                id="discharge_date_13"
                 className="form-control"
                value=""
              />
              <div  className="input-group-addon">
                <span  className="fa fa-calendar"></span>
              </div>
            </div>
          </div>

          <div  className="col-sm-6 ">
            <p  className="input-label">Dismissed date</p>
            <div  className="input-group date" data-provide="datepicker">
              <input
                type="text"
                id="dismissed_date_13"
                 className="form-control"
                value=""
              />
              <div  className="input-group-addon">
                <span  className="fa fa-calendar"></span>
              </div>
            </div>
          </div>
        </div>

        <br />
        <a href="javascript:void(0);"  className="previous btn btn-secondary me-2">
          &laquo; Previous
        </a>
        <a href="javascript:void(0);"  className="next btn btn-success">
          Next &raquo;
        </a>
      </fieldset>

      <fieldset  className="active" id="5-personal-info-block">
        <h2  className="fs-title">Personal Details</h2>

        <input type="text" id="user_name" name="name" placeholder="Name" />

        <div  className="row">
          <div  className="inputgroup col-sm-6">
            <span  className="input-label">Employment Status</span>
            <div
               className="btn-group btn-group-toggle"
              data-toggle="buttons"
              style={{ display: "table" }}
            >
              <label  className="btn btn-outline-secondary employment_status em" title="Employed">
                <input
                  type="radio"
                  name="employment_status"
                  value="employed"
                  id="em"
                  autocomplete="off"
                  onChange={(e) => getOptionValue(e.target)}
                />
              </label>
              <label  className="btn btn-outline-secondary employment_status uem" title="Unemployed">
                <input
                  type="radio"
                  name="employment_status"
                  value="unemployed"
                  id="uem"
                  autocomplete="off"
                  onChange={(e) => getOptionValue(e.target)}
                />
              </label>
            </div>
          </div>

          <div  className="inputgroup col-sm-6">
            <span  className="input-label">Marital Status</span>
            <div
               className="btn-group btn-group-toggle"
              data-toggle="buttons"
              style={{ display: "table" }}
            >
              <label  className="btn btn-outline-secondary marital_status mr" title="Married">
                <input
                  type="radio"
                  name="marital_status"
                  value="married"
                  id="mr"
                  autocomplete="off"
                  onChange={(e) => getOptionValue(e.target)}
                />
              </label>
              <label  className="btn btn-outline-secondary marital_status umr" title="Unmarried">
                <input
                  type="radio"
                  name="marital_status"
                  value="unmarried"
                  id="unmr"
                  autocomplete="off"
                  onChange={(e) => getOptionValue(e.target)}
                />
              </label>
            </div>
          </div>
        </div>

        <input type="text" name="email" id="email" placeholder="Email id" />
        <input type="text" name="phone" id="phone" placeholder="Phone no" />

        <a href="javascript:void(0);"  className="previous btn btn-secondary me-2">
          &laquo; Previous
        </a>

        <button  className="submit btn btn-success" name="submit" type="button">
          Submit{" "}
          <i
             className="fa fa-spinner fa-spin fa-fw"
            aria-hidden="true"
            style={{ display: "none" }}
          ></i>
        </button>
      </fieldset>

      <div  className="progress_set" style={{ display: "none" }}>
        <ul id="progressbar">
          <li  className="active">
            <i  className="fa fa-circle-thin" aria-hidden="true"></i>
          </li>
          <li>
            <i  className="fa fa-circle-thin" aria-hidden="true"></i>
          </li>
          <li>
            <i  className="fa fa-circle-thin" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </form>
  );
}
