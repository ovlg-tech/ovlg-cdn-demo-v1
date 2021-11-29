import blogCss from "../../styles/blog.module.css";
export default function BlogSidebarDeatils({ blogDatasideBar }) {
  return (
    <>
      <div className="region region-sidebar-second">
        <div id="block-manage-blog-latest-post" className={"block " + blogCss["block-manage-blog"]}>
          <div className="content">
            <aside className="col-12">
              <div className="header-h2 header-under-line mb-5 text-capitalize"><span className="colr-brown">Related Articles</span></div>
                <ul className="list-style-none ps-1">
                
                {blogDatasideBar.map((DatasideBar) => (

                  <li key={DatasideBar.nid} className="border-bottom-grey mb-4 row">
                    <div className="col-12"><a href={`/${DatasideBar.url}`}><img src={DatasideBar.article_img} alt={DatasideBar.alt} className="img-fluid"/></a></div>
                    <div className="col-12 py-2">
                      <a href={`/${DatasideBar.url}`} className="text-capitalize">{DatasideBar.title}</a>
                    </div>
                    <div className="col-12">{DatasideBar.date}</div>
                   </li>
                 ))}
                   
                </ul>              
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
