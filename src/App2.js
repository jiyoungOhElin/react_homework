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

	maxNumber = 9.9;

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
	
	discardDecPnt = (num) => {
		const num1 = Number(num);
		const num2 = Number(num1.toFixed(1));
		let numResult;
		if(Number.isInteger(num2)){
			numResult = num2 + '.0' ;
		}else{
			numResult = num2
		}
		return numResult;
	}

	handleAddScore = (id) => {
		const {lists} = this.state;
		this.setState({
			lists: lists.map(item =>{
				if(item.id === id){
					return {
						...item,
						score: item.score < this.maxNumber ? this.discardDecPnt(Number(item.score)+0.1) : item.score
					}
				}else{
					return item;
				}
			})
		})
	}

	handleSubtractScore = (id) => {
		const {lists} = this.state;
		this.setState({
			lists: lists.map(item =>{
				if(item.id === id){
					return {
						...item,
						score: item.score > 0 ? this.discardDecPnt(Number(item.score)-0.1) : item.score
					}
				}else{
					return item;
				}
			})
		})
	}

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
				<List typs={TYPE} lists={this.state.lists} onAddScore={this.handleAddScore} onSubScore={this.handleSubtractScore} onRemove={this.handleRemove}/>
			</div>
		);
	}
}

export default App;
