import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()

export default function CreditorList({pageInfo}) {
    return (
        <div className="el-creditor" >
        <div className="col-12 px-3">
            {/* <h4><strong>Limited power of attorney</strong></h4> */}
            <input  value={pageInfo.client} type="hidden" id="user-name" name="Name"/>
            <input  value="" type="hidden" id="row_id" name="id"/>
            <div className="row ">
                <div className="col-12 mt-3">
                <label htmlFor="creditor-name" className="form-label"><b>1. Creditor name</b></label>
                <input type="text" className="form-control" placeholder="Creditor name" name="creditor-name-1" />
                </div>
                <div className="col-12 mt-3">
                    <label htmlFor="notes" className="form-label"><b>Notes</b></label>
                    <textarea className="form-control" placeholder="Creditor notes" name="creditor-notes-1"></textarea>
                </div>
            </div>
            <div id="more_creditor_section"></div>
            <button className="btn btn-outline-primary mt-3" type="button" id="add-creditor" name="add-more">add more</button>
        </div>
    </div>
    )
  }