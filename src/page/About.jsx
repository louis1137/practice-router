import React from 'react';

import { Navigate, useNavigate } from 'react-router-dom';


const About = () => {
	
	const navigate = useNavigate();
	const goToHome = ()=>{
		navigate('/');
	}
	const goToProduct = ()=>{
		navigate('/product?num=1');
	}

	return (
		<>
			<div>About</div>
			<button onClick={goToHome}>go to Home</button>
			<br></br>
			<button onClick={goToProduct}>go to Product</button>
		</>
	)
}

export default About