export default function blogItem({ blogData }) {

  const renderImg = () => {
    if (blogData.article_picture)
    {
      return <img src={blogData.article_picture} alt={blogData.article_picture_alt} className="img-fluid" />;
    }
  }
  return (
    <>
      
      <div className="row">
        <div className="col-12 blog-post">
          <div>
            <div>
            {renderImg()}
              <div
                className="content clearfix"
                dangerouslySetInnerHTML={{
                  __html: blogData.body,
                }}
              ></div>

              <div className="content clearfix"></div>
            </div>
            <span
              property="dc:title"
              content={blogData.title}
              className="rdf-meta element-hidden"
            ></span>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
