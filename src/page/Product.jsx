import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Product = () => {

	let [search, serSearch] = useSearchParams();
	console.log(search.get('num'));

	return (
		<>
			<div>Product</div>
			<Link to="/">go to Home</Link>
			<br></br>
			<Link to="/product/:productId">go to ProductDetail</Link>
		</>
	)
}

export default Product