import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
	const { className, placeHolder, onChangeHandler } = props;
	return <input className={`search-box ${className}`} type='search' placeholder={placeHolder} onChange={onChangeHandler} />;
};
// export class SearchBox extends Component {
// 	constructor(props) {
// 		super();
// 	}
// 	render() {
// 		return <input className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeHolder} onChange={this.props.onChangeHandler} />;
// 	}
// }

export default SearchBox;
