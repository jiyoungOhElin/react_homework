import React, { Component } from 'react';
import './List.css';
import Item from './Item'
import Item2 from './Item2'

class List extends Component {
	render() {
		const {type, lists, onAddScore, onSubScore, onRemove} = this.props;
		const components = {
			"SONG": Item,
			"MOVIE":Item2
		}
		const ItemTag = components[type];
		return( 
			<div className="List">
				{
					lists.map(list=>{
						return <ItemTag key={list.id} onAddScore={onAddScore} list={list} onSubScore={onSubScore} onRemove={onRemove} type={type}/> 
					})
				}
			</div>
		)
	}
}

export default List;
