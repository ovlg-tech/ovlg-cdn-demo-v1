import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const EducationArticleItem = ({ article }) => {
    var priority = article.id == 1;
    return (
        <article itemScope="" itemType="http://schema.org/Article">
            <header className="entry-header" style={{ minHeight: '134px' }}>
                <h2 className="entry-title" >
                    <a itemProp="url" className="entry-title-link " href={article.url}>{article.title}</a>
                </h2>
                <p className="entry-meta">By: <span itemProp="author"><a className="" href={article.author.url}>{article.author.name}</a></span> on {article.publishedOn} | Category: <span itemProp="author"><a className="" href={article.category.url}>{article.category.name}</a></span></p>
            </header>
            <div className="entry-content">
                <figure className="">
                    <a className="entry-title-link" itemProp="url" href={article.url}>
                        {String(article.flgLocalImg) == 'true' &&
                            // <img src={`${publicRuntimeConfig.rootPath}/images/education/${article.localImg.src}`} />
                            <Image
                                src={`${publicRuntimeConfig.rootPath}/images/education/${article.localImg.src}`}
                                alt={article.localImg.alt}
                                width={250}
                                height={125}
                                priority={priority}
                            />
                        }
                        {String(article.flgLocalImg) != 'true' &&
                            //<img src={article.img.src} />
                            <Image
                                src={article.img.src}
                                alt={article.img.alt}
                                width={250}
                                height={125}
                            />
                        }
                    </a>
                </figure>
                <div
                    dangerouslySetInnerHTML={{
                        __html: article.excerpt
                    }}></div>
            </div>
        </article >
    )
}

export default EducationArticleItem