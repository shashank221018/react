import React from 'react';
import leftImg from "../images/left-img.png";
import "../css/signin.css"

const SignUp = () => {
	return (
		<div className="sign-in">
			<div className="sign-in__img">
				<img className="img-fluid w-100" src={leftImg} alt="sign-in-illustration" />
			</div>
			<div className="sign-in__left">
				<div className="sign-in__left__form">
					<h3 className="sign-in__left__form__title text-default-color">
						Service Portal
					</h3>
					<h6 className="sign-in__left__form__subtitle">
						Sign-In
					</h6>
					<form action="" className="common-form">
						<div className="form-group">
							<label for="username">
								Username
							</label>
							<input type="text" name="username" id="username" />
							<p className="input-warning">
								Enter your Service portal user name
							</p>
						</div>
						<div className="form-group">
							<label for="password">
								Password
							</label>
							<input type="password" name="password" id="password" />
							<p className="input-warning">
								Enter the password that accompanies your username.
							</p>
						</div>
						<input className="btn sign-in-btn" type="submit" value="SIGN IN" />
					</form>

					<a className="forget-password text-default-color" href="/">
						Forgot password?
					</a>
					<p className="sign-up-msg">
						Don't have an account? 
						<a className="sign-up-link text-default-color" href="/">
							Sign up
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
