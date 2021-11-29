export default function OtherServicesItem({ dataPart }) {
  return (
    <div
      className="col-sm-4 col-xs-6 font-size-20 pad-tb-10 wow fadeInUpBig"
      data-wow-duration="1s"
      itemProp="name"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationName: "fadeInUpBig",
      }}
    >
      <br />
      <a className="debt_relief_icon text-decoration-none" href={dataPart.url}>
        <span className={dataPart.iconClass}></span>
        <br />
        {dataPart.title}
      </a>
    </div>
  );
}
