import React, { Component } from 'react';
import './List.css';
import Item from './Item'

class List extends Component {
	render() {
		const {lists, onAddScore, onSubScore, onRemove} = this.props;
		return( 
			<div className="List">
				{
					lists.map(list=>{
						return <Item key={list.id} onAddScore={onAddScore} list={list} onSubScore={onSubScore} onRemove={onRemove}/>
					})
				}
			</div>
		)
	}
}

export default List;
