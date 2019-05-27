import React from 'react';
import './App.css';
import DisplayForm from './DisplayForm';
import RegisterForm from './register';

function App() {
		
  return (
    <div className="App">
      <div className="main-wrapper">
      	<div className="tabs">
      	<div class="tab">
	       <input type="radio" id="tab-1" name="tab-group-1" checked />
	       <label for="tab-1">Login</label>
	       
	       <div class="content">
	           <DisplayForm />
	       </div> 
	   </div>
    
	   <div class="tab">
	       <input type="radio" id="tab-2" name="tab-group-1" />
	       <label for="tab-2">Register</label>
	       
	       <div class="content">
	      	<RegisterForm />
	       </div> 
	   </div>
	   </div>
    
      </div>
    </div>
  )
}

export default App;
