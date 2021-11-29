import DebtServicesItem from "./DebtServicesItem";
export default function DebtServicesList() {
  return (
    <div
      className="services row text-center"
      itemScope=""
      itemType="http://schema.org/FinancialService"
    >
      <h2 className="text-center">
        <a
          href="/debt-relief/"
          className="text-decoration-none
"
        >
          Debt relief services
        </a>
      </h2>
      <p className="font-size-20">Pick a practice area to learn more.</p>
      <DebtServicesItem
        dataPart={{
          title: "Debt Settlement",
          iconClass: "fa fa-handshake-o",
          url: "/debt-settlement/",
        }}
      />

      <DebtServicesItem
        dataPart={{
          title: "Debt Consolidation",
          iconClass: "fa fa-pie-chart",
          url: "/debt-consolidation/",
        }}
      />
      <DebtServicesItem
        dataPart={{
          title: "Debt Management",
          iconClass: "fa fa-calendar",
          url: "/debt-management/",
        }}
      />
      <DebtServicesItem
        dataPart={{
          title: "Credit Card Settlement",
          iconClass: "fa fa-cc",
          url: "/debt-settlement/credit-card.html",
        }}
      />
      <DebtServicesItem
        dataPart={{
          title: "Credit Card Consolidation",
          iconClass: "fa fa-credit-card",
          url: "/debt-consolidation/credit-card.html",
        }}
      />

      <DebtServicesItem
        dataPart={{
          title: "Medical Bill Payment",
          iconClass: "fa fa-medkit",
          url: "/medical-bills",
        }}
      />

      <DebtServicesItem
        dataPart={{
          title: "Payday Loan Consolidation",
          iconClass: "fa fa-money",
          url: "/debt-consolidation/payday-loan.html",
        }}
      />
      <DebtServicesItem
        dataPart={{
          title: "Payday Loan Settlement",
          iconClass: "fa fa-usd",
          url: "/debt-settlement/payday-loan.html",
        }}
      />
      <DebtServicesItem
        dataPart={{
          title: "Budget and Bill Payments",
          iconClass: "fa fa-calculator",
          url: "/bill-payment/",
        }}
      />

      <DebtServicesItem
        dataPart={{
          title: "Collection Abuse",
          iconClass: "fa fa-volume-control-phone",
          url: "/fdcpa.html",
        }}
      />
    </div>
  );
}
