import React, { Component } from 'react';
import './SearchBox.css';
export class SearchBox extends Component {
	constructor(props) {
		super();
	}
	render() {
		return <input className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeHolder} onChange={this.props.onChangeHandler} />;
	}
}

export default SearchBox;
