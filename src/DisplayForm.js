import React from 'react';
import {validLogin} from './constants';

class DisplayForm extends React.Component{
	constructor(props){
	super(props)
	this.state = {loggedIn: false,failedip:{email:null,ip:null,failcount:0},locked: false}
	this.login = this.login.bind(this)
	this.passwordField = React.createRef();
	this.emailField = React.createRef();
	}

	login(e){
		e.preventDefault();
		const {failcount} = this.state.failedip
		let pwd = this.passwordField.current.value
		let usr = this.emailField.current.value
		if(pwd == validLogin.password && usr == validLogin.email){
			console.log('loggedin successfully')
			this.setState({loggedIn: true})
		}
		else{
			var email = this.emailField.current.value
			var password = this.passwordField.current.value

			//mark as first failed attempt
			//using jsonip to get public ip so we dont have to use public-ip library in node, which will take much longer
			fetch('https://jsonip.com/').then((res)=>res.json()).then((result)=>{
				console.log(result.ip)
				if(failcount > 1){
					this.setState({locked: true})
				}
				this.setState({failedip:{email:email,ip:result.ip,failcount: failcount + 1}})
				//setTimeout(()=>{this.setState({locked: false})},5000)
				//we set the timer above to 5 seconds or how long we want
			})

			console.log('login failed for : email '+email + 'and password '+ password + ' count = '+this.state.failedip.failcount)
		}
	}

	render(){
		if(this.state.loggedIn){
			return (<p>Welcome, user</p>)
	}
	if(this.state.locked){
		return (<p>You have been locked out, please wait 5 mins</p>)
	}

	else{return(
	<form className='login-form'>
		<input className='textfield' placeholder='your email' ref={this.emailField} />
		<input className='textfield' ref={this.passwordField} type='password' placeholder='your passwprd'/>
		<button className='submit' onClick={e=>this.login(e)}>Login</button>
	</form>
	)}
	}
}

export default DisplayForm