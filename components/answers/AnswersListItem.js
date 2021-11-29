import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import styles from '../../styles/Answers.module.css'

const AnswersListItem = ({ article, dynamicClassPart }) => {
    // console.log(dynamicClassPart)
    return (
        <div className={`views-row ${dynamicClassPart}`}>
            <table className="box-highlight my-2" width="100%">
                <tbody>
                    <tr>
                        <td className={styles.answer_vote}>
                            <div className={styles.votes}>
                                <div className="fs-5">{article.votes}</div>
                                <div>Votes</div>
                            </div>
                            <div className={styles.answered}>
                                <div className="fs-5"><span className="field-content">{article.answers}</span></div>
                                <div>Answers</div>
                            </div>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="row">
                            <div className=" col-sm-8">
                                <div className="fs-5 pad-tb-10">
                                    <span className="field-content">
                                        <a href={`/${article.content_link.url}`}>{article.content_link.text}</a>
                                    </span>
                                </div>
                                <div className="font-size-15">
                                    <strong className="text-secondary">Category:</strong>
                                    <span className="field-content">
                                        <a href={article.category.url} typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype=""> {article.category.text}</a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-4 font-size-15 text-secondary">
                                <table className="float-end">
                                    <tbody>
                                        <tr>
                                            <td className="text-right">
                                                <span className="bold"><span className="field-content"><span className="username" typeof="sioc:UserAccount" property="foaf:name" datatype="">{article.info.asked_by}</span></span></span><br />
                                                <span className="font-size-13">Asked on <span className="field-content">{article.info.asked_on}</span></span>
                                            </td>
                                            <td><img src={article.info.user_image} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br className="clear" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default AnswersListItem