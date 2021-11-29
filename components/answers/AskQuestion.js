import React, { useEffect } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import styles from '../../styles/Answers.module.css'

const AnswersAskQuestion = ({ categories, addForm }) => {
    // console.log('addForm', addForm)
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
            <div className="row pt-3">
                <div className="col _answers_tab_section">
                    <div className="tab">
                        <ul className="nav nav-pills" role="tablist">
                            <li className="pb-0">
                                <a className="nav-link active" href="#tab_ask_que" role="tab" data-bs-toggle="pill"><strong>Ask</strong></a>
                            </li>
                            <li className="pb-0">
                                <a className="nav-link" href="#tab_topics" role="tab" data-bs-toggle="pill"><strong>Topics</strong></a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-green px-0 py-2 row">
                        <div className="tab-content">
                            <div id="tab_ask_que" role="tabpanel" className="tab-pane active">
                                <div className="input-group form-group-lg">
                                    <input type="text" className="form-control rounded-start" id="write-question" />
                                    <span className="input-group-btn">
                                        <input type="button" className="btn btn-info bg-gradient bold btn-lg text-white rounded-end" value="Ask Questions" data-bs-toggle="modal" data-bs-target="#askQuestion" />
                                    </span>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane sr" id="tab_topics">
                                {categories.sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                                    <div key={item.id} className={styles.tag}>
                                        <a href={item.url}>{item.name}</a>
                                    </div>
                                ))}
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
                <div className="col _answers_waterfall">
                    <div className="p-1 ms-2">
                        <h1>The Waterfall Approach to Debt Free</h1>
                        <p> Legal debt relief methodology that works based on your financial conditions.
                            <br className="clearfix" />
                            <a href="https://www.ovlg.com/waterfall-approach-debt-free.html">Learn more &raquo;</a>
                        </p>
                    </div>
                </div>

                <script
                    type="text/javascript"
                    defer
                    src={`${publicRuntimeConfig.rootPath}/js/askQuestionForm.js`}
                ></script>
            </div>
        </>
    )
}

export default AnswersAskQuestion