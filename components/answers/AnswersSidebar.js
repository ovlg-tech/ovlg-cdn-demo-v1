import React, { useEffect } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import styles from '../../styles/Answers.module.css'

const AnswersSidebar = ({ categories, addForm }) => {
    // console.log(categories)

    useEffect(() => {
        const writeQuestionTextArea = document.querySelector('#write-question')
        const questionsubject = document.querySelector('#edit-questionsubject')
        const listener = event => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "ArrowDown" && event.key !== "ArrowUp") {
                // console.log(writeQuestionTextArea.value);
                questionsubject.value = writeQuestionTextArea.value
            }
        };
        writeQuestionTextArea.addEventListener("keyup", listener);
        return () => {
            writeQuestionTextArea.removeEventListener("keyup", listener);
        };
    }, []);

    return (
        <>
            <div className="mar-20 ans_sidebar">
                <div className="region region-sidebar-first well">
                    <div id="block-answers-answers-ask-question" className="block block-answers">
                        <h2 className="block-title"><strong>Ask Question</strong></h2>
                        <div className="content">
                            <div className="left_con">
                                <span className="SpriteImage AskIcon"></span>
                                <div style={{ clear: "both" }}></div>
                                <div className="padding5_0 text_center d-grid gap-2">
                                    <textarea style={{ height: "60px" }} id="write-question" className="input_text form-control"></textarea>
                                    {/* <input onclick="if (!window.__cfRLUnblockHandlers) return false; showquickaddoption();" className="btn btn-primary btn-block btn-lg" type="button" value="Ask" id="answers_ask_question_button" /> */}
                                    <input type="button" className="btn btn-primary bg-gradient btn-block btn-lg text-white rounded" value="Ask" data-bs-toggle="modal" data-bs-target="#askQuestion" id="answers_ask_question_button" />
                                </div>
                            </div>


                            <div id="askQuestion" className="modal fade in" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title m-0">Ask Question</h4>
                                            <button type="button" className="btn-close float-end fs-6" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div dangerouslySetInnerHTML={{
                                                __html: addForm,
                                            }}></div>
                                        </div>
                                        {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="block-answers-answers-waterfall" className="block block-answers">
                        <div className="content">
                            <div className={`${styles["ovlgSidebar"]}`} >
                                <a className="font-size-20 colr-light-blue ff-Oswald" href="/waterfall-approach-debt-free.html">Waterfall approach to debt free ™</a>
                                <p>
                                    Legal debt relief methodology that works based on your financial conditions.
                                    <a href="/waterfall-approach-debt-free.html" className="colr-light-blue">Learn more »</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="block-answers-answers-topics" className="block block-answers">
                        <h2 className="block-title"><strong>Topics</strong></h2>
                        <div className="content">
                            <ul>
                                {categories.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.url}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <script
                        type="text/javascript"
                        defer
                        src={`${publicRuntimeConfig.rootPath}/js/askQuestionForm.js`}
                    ></script>
                </div>
            </div>
        </>
    )
}

export default AnswersSidebar