import React, { Component } from 'react';
import './cardList.css';
import Card from '../Card/Card';
export class CardList extends Component {
	constructor(props) {
		super();
	}
	render() {
		console.log(this.props.monsters);
		// console.log('render from CardList');
		const { monsters } = this.props;
		return (
			<div className='card-list'>
				{monsters.map((monster) => {
					const { id, name } = monster;
					return <Card id={id} name={name} />;
				})}
			</div>
		);
	}
}

export default CardList;
