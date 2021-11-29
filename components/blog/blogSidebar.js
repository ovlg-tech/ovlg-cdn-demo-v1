import blogCss from "../../styles/blog.module.css";
export default function BlogSidebar({ categories }) {

  const renderUrl = (url_alias) => {
      var old_url = url_alias;
      var new_url = old_url.replace("education", "blog");
      return new_url;
  }
  return (
    <>
      <div className="region region-sidebar-second">
        <div id="block-manage-blog-latest-post" className={"block " + blogCss["block-manage-blog"]}>
          <div className="content">
          {categories.map((catData) => (
          <aside key={catData.id} className="col-12 mt-4 pt-4">
            <div className="header-h2 header-under-line mb-5 text-capitalize"><span className="colr-brown">{catData.name}</span></div>
            <ul className="list-style-none ps-1">
            {catData.node_list.map((NodeData) => (
                <li key={NodeData.nid} className="border-bottom-grey pt-3">                  
                  <a className="text-decoration-none colr-black"
                    href={renderUrl(NodeData.alias)}
                    title= {NodeData.title}>
                    {NodeData.title}
                  </a>
                </li>
               ))}
            </ul>
          </aside>
         ))}
          </div>
        </div>
      </div>
    </>
  );
}
