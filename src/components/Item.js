import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.list !== nextProps.list){
			return true;
		}else return false;
	}

	render() {
		const {list, onAddScore, onSubScore, onRemove} = this.props;
		return (
			<div className="Item">
				<div className="text">{list.text}</div>

				<div className="remove" onClick={()=>onRemove(list.id)}>[x]</div>
				<div className="subtract" onClick={()=>onSubScore(list.id)} name="minus">[-]</div>
				<div className="add" onClick={()=>onAddScore(list.id)}  name="plus">[+]</div>

				<div className="score">{"★".repeat(list.score) }</div>
			</div>
		);
	}
}


export default Item;
