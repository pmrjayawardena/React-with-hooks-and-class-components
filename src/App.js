import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

import CardList from './components/CardList/CardList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
class App extends Component {
	//constructor runs first at any classes
	//render runs second
	//then componentDidMount

	constructor(props) {
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
		console.log('render from APP');
		const { monsters, searchField } = this.state;
		const { monsterValue } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className='App'>
				<SearchBox onChangeHandler={monsterValue} placeHolder='Search Monster' className='monsters-search-box' />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
