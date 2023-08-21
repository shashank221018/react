import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import BannerLeft from "../images/Home-page/banner-left.png"
import Graph from "../images/Home-page/graph.png";
import Icon1 from "../images/Home-page/icon-1.png";
import Icon2 from "../images/Home-page/icon-2.png";
import Icon3 from "../images/Home-page/icon-3.png";
import Icon4 from "../images/Home-page/icon-4.png";
import Icon5 from "../images/Home-page/icon-5.png";
import AccessApi from "../images/Home-page/access-api.png"
import GetAccess from "../images/Home-page/get-access.png"
import BuildApp from "../images/Home-page/build-app-icon.png"
import GoLive from "../images/Home-page/go-live-icon.png"
import "../css/home.css";

const Home = () => {
	return (
		<div className="service-home">
			<div className="container">
			<section className="service__banner">
                <div className="service__banner__img">
                    <img className="img-fluid" src={BannerLeft} alt="banner-left" />
                </div>
                <div className="service__banner__content">
                    <h1 className="service__banner__content--title">
                        ESP <span className="text-default-color">
                            APIs
                        </span>
                    </h1>
                    <h4 className="service__banner__content--subtitle">
                        now available to explore
                    </h4>
                    <p className="service__banner__content--desc">
                        Welcome to the world of REST API. Discover, build and empower yur apps with ESB APIs. Explore wide range of APIs, comprehensive documentation. Service portal provides you sandbox setup to test the APIs instantly. You can now accelerate your development with EBS APIs. Let’s collaborate and co-create delightful developer experiences.
                    </p>
                    <a className="btn btn-login" href="/signin">Login Now</a>
                </div>
            </section>
			</div>
			<section className="multiple-product">
				<div className="container">
					<div className="multiple-product__content">
						<h4 className="multiple-product__title">
							ESB Provides multiple financial and <br/> non-finincial APIs across <span className="text-default-color">
								multiple products.
							</span>.
						</h4>
						<a className="btn btn-explore" href="http://design.neosofttech.in/192/service-portal/API-product/Home%20page/">Explore APIs</a>
		
					</div>
					<div className="hex-1 hex">
						<p className="api-name text-default-color">Finacle 1.0.0</p>
						<h6 className="hex-1__title text-default-color">
							234 APIs
						</h6>
						<p className="hex-1__subtitle text-default-color">
							(Included)
						</p>
					</div>
					<div className="hex-2 hex">
						<p className="api-name text-default-color">Finacle 1.0.0</p>
						<h6 className="hex-2__title text-default-color">
							25 APIs
						</h6>
						<p className="hex-2__subtitle text-default-color">
							(Included)
						</p>
					</div>
					<div className="hex-3 hex">
						<p className="api-name text-default-color">C24 1.0.0</p>
						<h6 className="hex-3__title text-default-color">
							16 APIs
						</h6>
						<p className="hex-3__subtitle text-default-color">
							(Included)
						</p>
					</div>
					<div className="hex-4 hex">
						<p className="api-name text-default-color">Exacc 1.0.0</p>
						<h6 className="hex-4__title text-default-color">
							16 APIs
						</h6>
						<p className="hex-4__subtitle text-default-color">
							(Included)
						</p>
					</div>
					<div className="hex-5 hex">
						<p className="api-name text-default-color">IB-MB (1.0.0)</p>
						<h6 className="hex-5__title text-default-color">
							15 APIs
						</h6>
						<p className="hex-5__subtitle text-default-color">
							(Included)
						</p>
					</div>            
					<div className="hex-6 hex">
						<p className="api-name text-default-color">Prime (1.0.0)</p>
						<h6 className="hex-6__title text-default-color">
							54 APIs
						</h6>
						<p className="hex-6__subtitle text-default-color">
							(Included)
						</p>
					</div>            
					<div className="hex-7 hex">
						<p className="api-name text-default-color">LOS (1.0.0)</p>
						<h6 className="hex-7__title text-default-color">
							10 APIs
						</h6>
						<p className="hex-7__subtitle text-default-color">
							(Included)
						</p>
					</div>            
					<div className="hex-8 hex">
						<p className="api-name text-default-color">LMS (1.0.0)</p>
						<h6 className="hex-8__title text-default-color">
							11 APIs
						</h6>
						<p className="hex-8__subtitle text-default-color">
							(Included)
						</p>
					</div>           
					<div className="hex-9 hex">
						<p className="api-name text-default-color">Others (1.0.0)</p>
						<h6 className="hex-9__title text-default-color">
							221 APIs
						</h6>
						<p className="hex-9__subtitle text-default-color">
							(Included)
						</p>
					</div>
				</div>
			</section>
			<section className="graph">
				<div className="container">
					<h3 className="graph__title">
						Real time & Historical Data <span className="text-default-color">APIs</span> Axis Bank
					</h3>
					<h6 className="graph__subtitle">
						Let our APIs help you build and launch your products faster.
					</h6>
					<div className="graph__content d-flex flex-wrap">
						<div className="graph__content__left">
							<img className="img-fluid" src={Graph} alt="graph"/>
						</div>
						<div className="graph__content__right">
							<div className="card card-total">
								<img className="card-img" src={Icon1} alt=""/>
								<h6 className="card-title">Total APIs</h6>
								<p className="card-value">876</p>
								<p className="card-rate"><FontAwesomeIcon icon={faCaretUp} /> %20</p>
							</div>
							<div className="card card-download">
								<img className="card-img" src={Icon2} alt=""/>
								<h6 className="card-title">Total API Download</h6>
								<p className="card-value">2k</p>
								<p className="card-rate"><FontAwesomeIcon icon={faCaretUp} /> %20</p>
							</div>
							<div className="card card-subscribe">
								<img className="card-img" src={Icon3} alt=""/>
								<h6 className="card-title">New Subscribe</h6>
								<p className="card-value">102</p>
								<p className="card-rate"><FontAwesomeIcon icon={faCaretDown} /> %10</p>
							</div>
							<div className="card card-partner">
								<img className="card-img" src={Icon4} alt=""/>
								<h6 className="card-title">New Partner</h6>
								<p className="card-value">89</p>
								<p className="card-rate"><FontAwesomeIcon icon={faCaretDown} /> %10</p>
							</div>
							<div className="card card-account">
								<img className="card-img" src={Icon5} alt=""/>
								<h6 className="card-title">New Account</h6>
								<p className="card-value">14</p>
								<p className="card-rate"><FontAwesomeIcon icon={faCaretUp} /> %10</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="access-api">
				<div className="container">
					<h3 className="access-api__title">
						How to access your <span className="text-default-color">APIs</span>
					</h3>
					<div className="d-flex flex-wrap">
						<div className="access-api__img">
							<img className="img-fluid" src={AccessApi} alt=""/>
							<a className="btn btn-get-start" href="/">Get Started</a>
						</div>
						<div className="access-api__content">
							<h6 className="access-api__subtitle">
								To create innovative application
							</h6>
							<p className="access-api__desc">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<ul className="list-unstyled access-api__list">
								<li className="access-api__list-item d-flex flex-wrap">
									<img className="img-fluid list-item__img" src={GetAccess} alt=""/>
									<div className="list-item__content">
										<h6 className="list-item__title">
											Get Access
										</h6>
										<p className="list-item__desc">
											Login with your AD details, create app then search & subscribe the API for your app.
										</p>
									</div>
								</li>
								<li className="access-api__list-item d-flex flex-wrap">
									<img className="img-fluid list-item__img" src={BuildApp} alt=""/>
									<div className="list-item__content">
										<h6 className="list-item__title">
											Build your app
										</h6>
										<p className="list-item__desc">
											Use sandbox to experiment & develop; test your development
										</p>
									</div>
								</li>
								<li className="access-api__list-item d-flex flex-wrap">
									<img className="img-fluid list-item__img" src={GoLive} alt=""/>
									<div className="list-item__content">
										<h6 className="list-item__title">
											Go Live
										</h6>
										<p className="list-item__desc">
											Apply for production access & go live
										</p>
									</div>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</section>
			<section className="footer--ad">
				<div className="container">
					<div className="d-flex flex-wrap">
						<div className="footer--ad__content">
							<h3 className="footer--ad__title">
								Get Started with ESB services and boost your application development
							</h3>
							<p className="footer--ad__desc">
								Sign in as with your AD details get access to API documentaion and use cases.
							</p>
						</div>
						<div className="footer--ad__btn">
							<a className="btn footer--ad__login" href="http://design.neosofttech.in/192/service-portal/sign-in/">Login</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;