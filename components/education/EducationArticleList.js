import React, { useEffect, useState } from 'react'
import EducationArticleItem from './EducationArticleItem'

import EducationData from '../../contents/education/education-data.json'

// const EducationArticleList = ({ articles }) => {
const EducationArticleList = () => {

    const [articlesArray, setArticlesArray] = useState([]);
    const [visible, setVisible] = useState(10);

    const allArticlesData = async () => {
        //setArticlesArray(articles)
        setArticlesArray(EducationData)
    }

    const loadMoreArticles = () => {
        setVisible(visible + 10)
    }

    useEffect(() => {
        allArticlesData()
    }, [])

    const renderArticleList = (eachArticle, index) => {
        return (
            <EducationArticleItem key={eachArticle.id} article={eachArticle} />
        )
    }

    return (
        <>
            {articlesArray.slice(0, visible).map(renderArticleList)}
            {visible < articlesArray.length && (
                <a className="bold text-decoration-none" onClick={loadMoreArticles} style={{ cursor: 'pointer' }}>Load more <span className="fa fa fa-long-arrow-right"></span></a>
            )}
        </>
    )
}

export default EducationArticleList
