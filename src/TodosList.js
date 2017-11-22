import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoItem from '~/TodoItem';

export default inject('store')(observer(class TodosList extends Component {
	constructor(props) {
		super(props);

		setTimeout(() => this.props.store.addTodo({ title: 'Learn React' }), 1000);
		setTimeout(() => this.props.store.addTodo({ title: 'Learn MobX' }), 2000);
	}

	render() {
		return (
			this.props.store.todos.map((todo, i) => (
				<TodoItem key={`todo-${i}`} todo={todo} />
			))
		);
	}
}));
