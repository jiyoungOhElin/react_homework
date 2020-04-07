import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List'; 
class App extends Component {

	state = {
		lists:[
			{id: 0, score: 9.8, text: "Inception"},
			{id: 1, score: 0.1, text: "NoteBook"},
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
	
	// discardDecPnt = (num) => {
	// 	const num1 = Number(num);
	// 	const num2 = Number(num1.toFixed(1));
	// 	let numResult;
	// 	if(Number.isInteger(num2)){
	// 		numResult = num2 + '.0' ;
	// 	}else{
	// 		numResult = num2
	// 	}
	// 	return numResult;
	// }

	changeScore = (id, sign) => {
		const {lists} = this.state;
		const step = 0.1;
		const maxNumber = 9.9;
		const minNumber = 0;

		this.setState({
			lists: lists.map(item =>{
				if(item.id === id){
					const score =item.score + sign * step; 
					const newScore = Number(score.toFixed(1));
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
		const TYPE="MOVIE";
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
