
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EmpForm from "./components/EmpForm";
import EmpSelect from "./components/EmpSelect";


class App extends Component {

 	render() {      
	  	return (
	      	<div>	        
		       <BrowserRouter>
			      	<Routes>      
			        	<Route path="/" element={<Layout />}>          			        	
			          	<Route path="empform" element={<EmpForm />} />    
			          	<Route path="empselect" element={<EmpSelect />} />                  
			        	</Route>
			      	</Routes>
			    </BrowserRouter>
	      	</div>
	    );
  	}
}

export default App;