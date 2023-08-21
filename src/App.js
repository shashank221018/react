import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/home';
import HowitWerks from './pages/how-it-werks';
import SignIn from './pages/signin';
import Tnc from './pages/tnc';
import Layout from './components/layout';
import Encryption from './pages/encryption';
import './css/common-style/common-form.css'

// CSS import
import "./css/common-style/common-style.css"

function App() {
	return (
		<Router>
			{/* <Navbar /> */}
			<Header />
			<Routes>
				<Route exact element={<Layout />}>
					{/* <Route path='/about' element={<About />} /> */}
					{/* <Route path='/contact' element={<Contact />} /> */}
					{/* <Route path='/blogs' element={<Blogs />} /> */}
				</Route>
					<Route exact path='/' element={<Home />} />
					<Route path='/how-it-werks' element={<HowitWerks />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/encryption' element={<Encryption />} />
					<Route path='/tnc' element={<Tnc />} />

			</Routes>
			<Footer />

		</Router>
	);
}

export default App;
