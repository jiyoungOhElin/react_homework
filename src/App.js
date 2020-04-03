import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List'; 
class App extends Component {

	state = {
		lists:[]
	}

	id=1;

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

	handleAddScore = (id) => {
		const {lists} = this.state;
		this.setState({
			lists: lists.map(item =>{
				if(item.id === id){
					return {
						...item,
						score: item.score < 5 ? item.score+=1 : item.score
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
						score: item.score > 0 ? item.score-= 1 : item.score
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
		const TYPE="SONG";
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
