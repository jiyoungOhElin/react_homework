import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List'; 
class App extends Component {

	state = {
		lists:[
			{id: 0, score: 4, text: "Can't take my eyes off you"},
			{id: 1, score: 1, text: "Sorry"},
		]
	}

	id=2;

	handleInsert = (text)=>{
		this.setState({
			lists: this.state.lists.concat({
				id: this.id,
				text,
				score:0
			})
		})
		this.id++;
	}

	changeScore = (id, sign) => {
		const {lists} = this.state;
		const step = 1;
		const maxNumber = 5;
		const minNumber = 0;

		this.setState({
			lists: lists.map(item =>{
				if(item.id === id){
					const newScore = item.score + sign * step;
					if(newScore <= maxNumber  && newScore >= minNumber){
						return {
							...item,
							score: newScore
						}
					}else{
						return item;
					}
				}else{
					return item;
				}
			})
		})
	}

	handleAddScore = (id) => {
		this.changeScore(id, +1);
	};

	handleSubtractScore = (id) => {
		this.changeScore(id, -1);
	};

	handleRemove=(id)=>{
		this.setState({
			lists: this.state.lists.filter(item=> item.id !== id)
		})
	}

	render() {
		const TYPE="SONG";
		return (
			<div className="App">
				<h3>LIST OF {TYPE}S</h3>
				<Form type={TYPE} onInsert={this.handleInsert}/>
				<List type={TYPE} lists={this.state.lists} onAddScore={this.handleAddScore} onSubScore={this.handleSubtractScore} onRemove={this.handleRemove}/>
			</div>
		);
	}
}

export default App;
