import blogCss from "../../styles/blog.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function BlogList({ totalPost }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(totalPost);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderUrl = (url_alias) => {
    var old_url = url_alias;
    var new_url = old_url.replace("education", "blog");
    return new_url;
  }
  const renderAuthorUrl = (url_alias) => {
    let new_url = '/author/'+url_alias;
    if(url_alias=='lyle-david-solomon')
    {
      new_url = '/attorneys/'+url_alias;
    }
    return new_url;
  }
  return (
    <>
      <div id="block-system-main" className="block block-system">
        <div className="content" style={{ minHeight: "360px" }}>
          {currentPosts.map((post) => (
            <div key={post.id} className="row">
              <section class="row shadow-sm mb-4 py-4">
                  <div class="col-md-5">
                    <figure className="img-fluid mt-2">
                    {post.img.src ? (
                              <Image
                                src={post.img.src}
                                title=""
                                alt={post.img.alt}
                                itemProp="image"
                                width={384}
                                height={192}
                              />
                              ) : (
                                ''
                              )}
                      </figure>  
                      <div className="col-12 font-size-15">By <a href={renderAuthorUrl(post.author.url)}>{post.author.name}</a> <span className="px-3">|</span> {post.month} {post.date} {post.year}   </div>                 
                  </div>
                  <div class="col-md-7">
                    <h2 className="mt-0 header-h3"><a className="text-decoration-none" href={renderUrl(post.url)}>{post.title}</a></h2>
                    <div className="entry-content">                  
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </section>
                
            </div>
          ))}
        </div>
        <div className="content">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            current_Page={currentPage}
          />
        </div>
      </div>
    </>
  );
}
