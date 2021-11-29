import Image from 'next/image'
import getConfig from 'next/config'
const {publicRuntimeConfig } = getConfig()
export default function DebtCalculator() {
  return (
        <div className="col-md-6 col-sm-4 ovlgSidebar">
            <div className="tex-tcenter" itemScope="" itemType="http://schema.org/FinancialProduct">
                <div className="how_much_save">
                    <div className="font-size-24 ff-Oswald colr-brown mar-b-20">How much can we save you?</div>
                    <form method="post" action="/calculators/debt-payoff.html?redirect-from=payday-loan" onSubmit="return checkCalcInputFrmDebtConsolidation()">
                            <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
                            <div className="input-group">
                                <div className="input-group-addon">$</div>
                                <input type="text" id="MonthlyPayment" name="MonthlyPayment" className="form-control" placeholder="Enter the monthly amount you can pay"/>
                                <input type="hidden" value="debt-settlement" name="debtSettlementCalculatorFlag"/>
                                <div className="input-group-addon">.00</div>
                            </div>
                            </div>
                            <input type="submit" value="Calculate your savings" className="btn btn-primary font-size-20" />
                
                    </form>
                </div>
            </div>
        </div>
  );
}
