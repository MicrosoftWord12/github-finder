import './App.css';
import Navbar from './components/Layout/Navbar';
import Users from './components/Users/Users';
import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users />
				</div>
			</div>
		);
	}
}

export default App;
