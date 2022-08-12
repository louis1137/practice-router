import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {

	const params = useParams();
	
	const {productId} = params;

	console.log(productId)

	return (
		<>
			<div>ProductDetail</div>
			<Link to="/product">go to Product</Link>
		</>
	)
}

export default ProductDetail