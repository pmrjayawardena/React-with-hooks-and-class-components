import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			name: {
				firstName: 'Prabodha',
				lastName: 'Jaye',
			},

			company: 'eyepax',
		};
	}

	changeName() {
		// {
		// 	name: {
		//     firstName:'Prabodha',
		//     lastName:'Jaye',
		//   },
		// 	company: 'eyepax',
		// }
		//this is shallow merger that means react doesnt care about what the value was before and how complex that is

		//if we change the name like below we no longer has access to firstName and lastName becase it doesnt care about the previus value
		// this.setState({ name: 'Changed name' });

		this.setState(
			(state, props) => {
				return { name: { firstName: 'Changed', lastName: 'Name' }, company: 'eyepax' };
			},
			() => {
				console.log(this.state);
			}
		);
	}
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Hello {this.state.name.firstName}, hi i work at {this.state.company}
					</p>
					<button onClick={this.changeName.bind(this)}>Change Name</button>
				</header>
			</div>
		);
	}
}

export default App;
