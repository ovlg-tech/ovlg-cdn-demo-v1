import React, { useEffect } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import styles from '../../styles/Answers.module.css'


import AnswersCommentList from '../../components/answers/AnswersCommentList'
import AnswersSidebar from '../../components/answers/AnswersSidebar'

const AnswersSection = ({ article }) => {
   
    return (
        <>
         <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 bg-white my-2">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="row">
                                            <h1>{article.data.meta.title}</h1>
                                        </div>
                                        <div className="region region-content">
                                            <div className="author submitted font-size-13" style={{ lineHeight: "20px" }} >
                                                <div className="float-start pad-5">
                                                    <img src={article.data.user_image} />
                                                </div>
                                                Asked on <span>{article.data.asked_on}</span><br />
                                                <span><span className="username" >{article.data.author}</span></span>
                                            </div>
                                            <div className="content">
                                                <p>{article.data.body}</p>
                                            </div>
                                            <div className="bg-secondary bg-gradient text-white row p-1 my-3">
                                                <div id="h-top-questions" className="col col-xs-5">{article.comments.length} Answers</div>
                                                <div id="tabs" className="col col-xs-7 text-end">
                                                    <a className="colr-light-blue-old link-info" href="?order=asc">Older</a> |
                                                    <a className="colr-light-blue-old link-info" href="">Newer</a> |
                                                    <a className="colr-light-blue-old link-info" href="?order=vote">Votes</a>
                                                </div>
                                            </div>
                                            <div className="comment">
                                                <AnswersCommentList article={article} > </AnswersCommentList>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <AnswersSidebar categories={article.categories} > </AnswersSidebar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AnswersSection