import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signUp(this.state);
	};

	render() {
		const { authError } = this.props;

		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Sign Up</button>
						<div className="pink-text center">
							{authError && (
								<p>
									<b>{authError}</b>
								</p>
							)}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	authError: auth.authError,
});

const mapDispatchToProps = (dispatch) => ({
	signUp: (newUser) => dispatch(signUp(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
