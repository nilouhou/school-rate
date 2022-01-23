import React from "react";
import "./Login.scss";

const Login = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		emailError,
		passwordError,
		hasAccount,
		setHasAccount,
		handleLogin,
		handleSignUp,
	} = props;
	return (
		<section className="login">
			<div className="login__container">
				<label className="login__label">Email</label>
				<input
					type="text"
					outofocus="true"
					required
					className="login__input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="login__error">{emailError}</p>

				<label className="login__label">Password</label>
				<input
					type="password"
					required
					className="login__input"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="login__error">{passwordError}</p>

				<div className="login__btn-container">
					{hasAccount ? (
						<>
							<button onClick={handleLogin} className="login__button">
								Sign in
							</button>
							<p>
								Don't have an account?{" "}
								<span
									className="login__span"
									onClick={() => setHasAccount(!hasAccount)}
								>
									Sign up
								</span>
							</p>
						</>
					) : (
						<>
							<button onClick={handleSignUp} className="login__button">
								Sign up
							</button>
							<p>
								Have an account?{" "}
								<span
									className="login__span"
									onClick={() => setHasAccount(!hasAccount)}
								>
									Sign in
								</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Login;
