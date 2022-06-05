import React from 'react';
import './cardList.css';
import Card from '../Card/Card';

const CardList = (props, forwardRef) => {
	const { monsters } = props;
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				const { id, name } = monster;
				return <Card key={id} name={name} />;
			})}
		</div>
	);
};

// export class CardList extends Component {
// 	constructor(props) {
// 		super();
// 	}
// 	render() {
// 		// console.log('render from CardList');
// 		const { monsters } = this.props;
// 		return (
// 			<div className='card-list'>
// 				{monsters.map((monster) => {
// 					const { id, name } = monster;
// 					return <Card key={id} name={name} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;
