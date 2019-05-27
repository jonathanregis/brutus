import React from 'react';

export default class ShowErrors extends React.Component{
	constructor(props){
	super(props)
	}
	render(){
	return(
	<ul className='error-list'>
	{this.props.list.map((item)=> <li className='error-item'>{item}</li>)}
	</ul>
	)
	}
}