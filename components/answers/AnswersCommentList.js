import React, { useEffect } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import styles from '../../styles/Answers.module.css'

const AnswersCommentList = ({ article }) => {
    const renderCommentList = (comment, index) => {
        // console.log(comment.comment_body.und[0].safe_value);
        return (
            <div key={comment.cid} className="col-md-12">
                <a id={`comment-${comment.cid}`}></a>
                <div className="">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td width="100" style={{ verticalAlign: "top" }}>
                                    <div className="field field-name-field-votes field-type-vud-field field-label-above">
                                        <div className="field-label" style={{ display: "none" }}>Votes:&nbsp;</div>
                                        <div className="field-items">
                                            <div className="field-item even">
                                                <div className={`${styles["vud-widget"]} ${styles["vud-widget-updown"]} p-0`} id={`widget-comment-${comment.cid}`} >
                                                    <div className={`${styles["updown-score"]}`}>
                                                        <span className={`${styles["updown-current-score"]}`}>{comment.score}</span>
                                                        votes
                                                    </div>
                                                    <div className={`${styles["up-active"]} ${styles["updown-up"]}`} title="Vote up!">+</div>
                                                    <div className={`${styles["element-invisible"]}`}>Vote up!</div>
                                                    <div className={`${styles["down-active"]} ${styles["updown-down"]}`} title="Vote down!">-</div>
                                                    <div className={`${styles["element-invisible"]}`}>Vote down!</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ verticalAlign: "top" }}>
                                    <div className="comment">
                                        <div className="float_left padding5"></div>
                                        <div className="submitted font80">
                                            <span property="dc:date dc:created" content="2011-11-01T10:23:32-07:00" datatype="xsd:dateTime" rel="sioc:has_creator">Submitted by <span className="username" about={`/user/${comment.uid}`} typeof="sioc:UserAccount" datatype="">{comment.name}</span> on {comment.submit_date}</span>
                                        </div>
                                        <div className="content">
                                            <div className="field field-name-comment-body field-type-text-long field-label-hidden">
                                                <div className="field-items">
                                                    <div className="field-item even" property="content:encoded">
                                                        <span dangerouslySetInnerHTML={{
                                                            __html: comment.comment_body.und[0].safe_value,
                                                        }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <>
         {article.comments.map(renderCommentList)}
        </>
    )
}

export default AnswersCommentList