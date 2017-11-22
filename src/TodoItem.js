import React from 'react';
import { inject, observer } from 'mobx-react';

const TodoItem = inject('store')(observer(({ store, todo }) => (
	<div>
		<h2>{todo.title}</h2>
		<h4>{store.todos.length}</h4>
	</div>
)));

export default TodoItem;
