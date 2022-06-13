import './App.css';
import React, { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import { getData } from './utils/fetch.utils';

export type Monster = {
	id: string;
	name: string;
	email: string;
};
const App = () => {
	console.log('render');
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	const [stringField, setStringField] = useState('');

	useEffect(() => {
		getMonsterData();
	}, []);

	useEffect(() => {
		const filteredData = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		});

		setFilteredMonsters(filteredData);
		console.log('effect is firing');
	}, [monsters, searchField]);

	const monsterValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchField(event.target.value.toLowerCase());
	};
	async function getMonsterData() {
		//even though we get same data becase it is diffrent from the array we have in memory this will render over and over again
		//so react think its diffrent value

		const monsterData = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
		setMonsters(monsterData);
	}

	const onStringChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setStringField(event.target.value);
	};
	return (
		<div className='App'>
			<h1 className='app-title'>Monsters App</h1>
			<SearchBox onChangeHandler={monsterValue} placeHolder='Search Monster' className='monsters-search-box' />
			<SearchBox onChangeHandler={onStringChange} placeHolder='setString' />
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	//constructor runs first at any classes
// 	//render runs second
// 	//then componentDidMount

// 	constructor(props) {
// 		super();
// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		};
// 	}

// 	async getMonsterData() {
// 		const monsterData = await axios.get('https://jsonplaceholder.typicode.com/users');

// 		this.setState(
// 			(state, props) => {
// 				return { monsters: monsterData.data };
// 			},
// 			() => {
// 				// console.log('hi', this.state);
// 			}
// 		);
// 	}
// 	componentDidMount() {
// 		this.getMonsterData();
// 	}

// 	monsterValue = (event) => {
// 		this.setState(
// 			(state, props) => {
// 				return {
// 					searchField: event.target.value,
// 				};
// 			},
// 			() => {}
// 		);
// 	};
// 	render() {
// 		console.log('render from APP');
// 		const { monsters, searchField } = this.state;
// 		const { monsterValue } = this;

// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLowerCase().includes(searchField.toLowerCase());
// 		});

// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monsters App</h1>
// 				<SearchBox onChangeHandler={monsterValue} placeHolder='Search Monster' className='monsters-search-box' />
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;
