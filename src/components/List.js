import React, { Component } from 'react';
import './List.css';
import Item from './Item'
import Item2 from './Item2'

class List extends Component {
	render() {
		const {type, lists, onAddScore, onSubScore, onRemove} = this.props;
		return( 
			<div className="List">
				{
					type === "SONGS" ?
					lists.map(list=>{
						return <Item key={list.id} onAddScore={onAddScore} list={list} onSubScore={onSubScore} onRemove={onRemove}/> 
					})
					:lists.map(list=>{
						return <Item2 key={list.id} onAddScore={onAddScore} list={list} onSubScore={onSubScore} onRemove={onRemove}/> 
					})
				}
			</div>
		)
	}
}

export default List;
