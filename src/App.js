import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
	//constructor runs first at any classes
	//render runs second
	//then componentDidMount

	constructor(props) {
		console.log('constructor');
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	async getMonsterData() {
		const monsterData = await axios.get('https://jsonplaceholder.typicode.com/users');

		this.setState(
			(state, props) => {
				return { monsters: monsterData.data };
			},
			() => {
				// console.log('hi', this.state);
			}
		);
	}
	componentDidMount() {
		console.log('componentDidMount');
		this.getMonsterData();
	}

	monsterValue = (event) => {
		this.setState(
			(state, props) => {
				return {
					searchField: event.target.value,
				};
			},
			() => {}
		);
	};
	render() {
		console.log('render');
		const { monsters, searchField } = this.state;
		const { monsterValue } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className='App'>
				<input className='search-box' type='search' placeholder='search monsters' onChange={monsterValue} />
				{filteredMonsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
