import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

	state = {
		input:''
	}

	handleSubmit =  (e) => {
		e.preventDefault();
		this.props.onInsert(this.state.input);
		this.setState({input:''});
	}

	handleChange = (e) => {
		this.setState({'input':e.target.value});
	}

	render() {
		return (
			<div className="Form" onSubmit={this.handleSubmit}>
				<form className="form_container">
					<input placeholder={`add a(n) ${this.props.type}`} value={this.state.input} onChange={this.handleChange}/>
					<button>추가</button>
				</form>
			</div>
		);
	}
}

export default Form;
