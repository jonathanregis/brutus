import React from 'react';
import ShowErrors from './showerrors';

export default class RegisterForm extends React.Component{
	constructor(props){
	super(props);
	this.state = {success: false,message: null}
	this.nameField = React.createRef()
	this.emailField = React.createRef()
	this.passwordField = React.createRef()
	this.confirmField = React.createRef()
	this.register = this.register.bind(this)
	}

	register(e){
		e.preventDefault()
		let name = this.nameField.current.value
		let email = this.emailField.current.value
		let password = this.passwordField.current.value
		let confirmPass = this.confirmField.current.value
		var validation = this.validate({name: name,email:email,password:password,confirm:confirmPass})
		if(validation.length > 0){
			this.setState({message: <ShowErrors list={validation}/>})
		}
		else this.setState({success: true})

	}

	validate(obj){
		var pwd = obj.password
		var errors = []
			let startsWithCaps = pwd.match(/^[A-Z]{2,}/) //starts with 2 capital letters
			let hasLowercase = pwd.match(/[a-z]/g) //contains lowercase letters
			let hasDigits = pwd.match(/[0-9]{3,}/) //contains 3 numbers or digits
			let isLongEnough = pwd.length >= 16
			let hasSymbols = pwd.match(/[^\w]{2,}/) //check for at least 2 symbols (special chars)
			let emailHasAt = obj.email.match('@')
			if(startsWithCaps === null) errors.push("Password should start with two capital letters")
			if(hasLowercase === null) errors.push("Password should have at least one lowercase character")
			if(hasDigits === null) errors.push("Password should have at least 3 numbers")
			if(hasSymbols === null) errors.push("Password should have at least 2 special characters")
			if(!isLongEnough) errors.push("Password be at least 16 characters long")
			if(emailHasAt === null) errors.push("Email does not contain @")
			if(obj.password != obj.confirm) errors.push("Passwords do not match")
			if(obj.name == '') errors.push("Name field is empty")

		return errors
	}

	render(){
		if(this.state.success) return(<p>Thanks for registering.</p>)

		else{
			return(
				<div className="register">
				<div className="error-box">
				<p>{this.state.message}</p>
				</div>
				<form className='login-form'>
					<input className='textfield' placeholder='Full name' ref={this.nameField} />
					<input className='textfield' placeholder='Email' ref={this.emailField} />
					<input className='textfield' ref={this.passwordField} type='password' placeholder='your password'/>
					<input className='textfield' ref={this.confirmField} type='password' placeholder='retype password'/>
					<button className='submit' onClick={e=>this.register(e)}>Register</button>
				</form>
				</div>
			)
		}
	}
}