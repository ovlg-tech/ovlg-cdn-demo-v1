import React, { useEffect, useState } from 'react'
import AnswersListItem from './AnswersListItem'
import AnswersPagination from './AnswersPagination';

const AnswersList = ({ articles }) => {
    const [articlesArray, setArticlesArray] = useState([]);
    const [postsPerPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);
    // console.log(articles)
    useEffect(() => {
        const fetchArticles = async () => {
            setArticlesArray(articles);
        };

        fetchArticles();
    }, [articles]);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentArticles = articlesArray.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderArticleList = (eachArticle, index) => {
        let dynamicClassPart = 'views-row-' + (index + 1);
        dynamicClassPart = index % 2 ? dynamicClassPart + ' views-row-even' : dynamicClassPart + ' views-row-odd';
        dynamicClassPart = (index == 0 ? dynamicClassPart + ' views-row-first' : (index + 1 == postsPerPage ? dynamicClassPart + ' views-row-last' : dynamicClassPart));
        return (
            <AnswersListItem key={eachArticle.id} article={eachArticle} dynamicClassPart={dynamicClassPart} />
        )
    }

    return (
        <>
            <div className="view view-social-answers view-id-social_answers view-display-id-page">
                {articlesArray.length > 0 ? (
                    <div className="view-content">
                        {currentArticles.map(renderArticleList)}
                    </div>
                ) : (
                    <div className="view-content pb-3">

                    </div>
                )}
                {articlesArray.length > 0 && (
                    <AnswersPagination postsPerPage={postsPerPage} totalPosts={articlesArray.length} paginate={paginate} PageNum={currentPage} />
                )}

            </div>
        </>
    )
}

export default AnswersList
