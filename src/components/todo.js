import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { addTodo }          from 'actions';
import CustomComponent      from './custom-component';
import {Label}  from './labelComponent.js'

export class TODO extends Component {

	render () {
		const { todos, updateTODOList } = this.props;

		const listItems = todos.map((x, i) => {
			return <Label key={i} value={x.text}/>;
		});

		return (
			<div >
				<h1>The todo list app</h1>
				<ul>
					{ listItems }
				</ul>
				<input id="theInput" ref="input" type="text" placeholder="Add Todo" />
				<button onClick={ () => {
					updateTODOList({ text: this.refs.input.value });
				}}>Add Todo</button>

				<CustomComponent name="Edwin Perez as prop" />
				<Label value="Name"/>

			</div>
		);
	}

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateTODOList (todo) { dispatch(addTodo(todo)); }
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TODO)
