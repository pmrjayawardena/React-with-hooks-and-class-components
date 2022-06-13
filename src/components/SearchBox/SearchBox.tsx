import React, { ChangeEventHandler, ChangeEvent } from 'react';
import './SearchBox.css';

//in interfaces we have ability to extends like classes
// interface ISearchBoxProps extends IChangeHandlerProps{
// 	className?:string,
// 	placeHolder?:string,

// }
// interface IChangeHandlerProps{
// 	onChangeHandler:()=>void
// }

type SearchBoxProps = {
	className?: string;
	placeHolder?: string;
	// onChangeHandler: ChangeEventHandler<HTMLInputElement>;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

//in types we don dont have ability to extends
//types allowed to add unions

const SearchBox = (props: SearchBoxProps) => {
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
