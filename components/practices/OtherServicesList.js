import OtherServicesItem from "./OtherServicesItem";
export default function OtherServices() {
  return (
    <div
      className="services row text-center"
      itemScope=""
      itemType="http://schema.org/LegalService"
    >
      <h2 className="text-center">Other legal services</h2>

      <OtherServicesItem
        dataPart={{
          title: "Bankruptcy",
          iconClass: "fa fa-university",
          url: "/bankruptcy",
        }}
      />

      <OtherServicesItem
        dataPart={{
          title: "Chapter 13 Bankruptcy",
          iconClass: "fa fa-balance-scale",
          url: "/bankruptcy/chapter13.html",
        }}
      />

      <OtherServicesItem
        dataPart={{
          title: "Chapter 7 Bankruptcy",
          iconClass: "fa fa-gavel",
          url: "/bankruptcy/chapter7.html",
        }}
      />
      <OtherServicesItem
        dataPart={{
          title: "Wills",
          iconClass: "fa fa-file-text",
          url: "/wills/",
        }}
      />

      <OtherServicesItem
        dataPart={{
          title: "Trust",
          iconClass: "fa fa-thumbs-up",
          url: "/trusts/",
        }}
      />

      <OtherServicesItem
        dataPart={{
          title: "Automatic Stay Violation Protection",
          iconClass: "fa fa-shield",
          url: "/automatic-stay-violation/",
        }}
      />
      <OtherServicesItem
        dataPart={{
          title: "Defamation Protection",
          iconClass: "fa fa-lock",
          url: "/reputation-protection/",
        }}
      />
      <OtherServicesItem
        dataPart={{
          title: "Company Formation",
          iconClass: "fa fa-building-o",
          url: "/company-formation/",
        }}
      />
    </div>
  );
}
