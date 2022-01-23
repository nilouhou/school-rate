import React from "react";
import "./Login.scss";

const Login = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		emailError,
		setEmailError,
		passwordError,
		setPasswordError,
		hasAccount,
		setHasAccount,
		handleLogin,
		handleSignUp,
	} = props;
	return (
		<section className="login">
			<div className="login__container">
				<label className="login__label">Username</label>
				<input
					type="text"
					autoFocus
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
				<p className="login__error">{emailError}</p>

				<div className="login__btn-container">
					{hasAccount ? (
						<>
							<button onClick={handleLogin}>Sign in</button>
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
							<button onClick={handleSignUp}>Sign up</button>
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
