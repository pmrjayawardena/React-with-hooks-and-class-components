import React, { Component } from 'react';
import './Card.css';
export class Card extends Component {
	render() {
		const { id, name } = this.props;
		return (
			<>
				<div className='card-container' key={id}>
					<img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
					<h2>{name}</h2>
				</div>
			</>
		);
	}
}

export default Card;
