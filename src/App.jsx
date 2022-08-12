

import './App.css';

import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './page/Home';
import About from './page/About';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import MyPage from './page/MyPage';

function App() {

	const [isUser, setIsUser] = useState(false);
	const PrivateRoute = ()=>{

		return isUser ? <MyPage/> : <Navigate to="/login"/>
	}

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/product" element={<Product/>}/>
				<Route path="/product/:productId" element={<ProductDetail/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/mypage" element={<PrivateRoute/>}/>
			</Routes>
		</div>
	);
}

export default App;
