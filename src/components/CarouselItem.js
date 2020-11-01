import React from 'react'

export default function CarouselItem({ body, author }) {
	return(
		<div className="carouselItem">
			<h5>{body}</h5>
			<h4>{author}</h4>
		</div>
	)
}