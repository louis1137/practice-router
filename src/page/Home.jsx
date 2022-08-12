import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Link to="/about">go to About</Link>
			<br></br>
			<Link to="/product">go to Product</Link>
			<br></br>
			<Link to="/mypage">go to My Page</Link>
		</>
	)
}

export default Home