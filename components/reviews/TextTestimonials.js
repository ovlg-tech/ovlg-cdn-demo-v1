import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getConfig from 'next/config'
import TextTestimonialsItem from './TextTestimonialsItem'
import TextReviewsData from '../../contents/reviews/text-reviews-data.json'
const { publicRuntimeConfig } = getConfig()
import styleReviews from '../../styles/Reviews.module.css'

export default function TextTestimonials() {


	const perPageTxItem = 4
	const [txReviewsArray, setTxReviewsArray] = useState([]);
	const [visible, setVisible] = useState(perPageTxItem);

	const allTxReviewsData = async () => {

		setTxReviewsArray(TextReviewsData)
	}

	const loadMoreTxReview = () => {
		setVisible(visible + perPageTxItem)
	}

	useEffect(() => {
		allTxReviewsData()
	}, [])



	const renderTextTestimonials = (eachTxReview, index) => {
		return (
			<TextTestimonialsItem key={eachTxReview.id} txReview={eachTxReview} />
		)
	}
	return (
		<>
			<section className="row text-testimonials">

				{txReviewsArray.slice(0, visible).map(renderTextTestimonials)}

			</section>

			{visible < txReviewsArray.length && (
				<p className="text-center"><a className={`${styleReviews["btn-custom"]}`} onClick={loadMoreTxReview} style={{ cursor: 'pointer' }}>Load more <span className="fa fa fa-long-arrow-right"></span></a></p>
			)}
		</>
	);
}
