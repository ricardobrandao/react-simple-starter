import { action, observable } from 'mobx';

export default class ExampleStore {
	constructor() {
		this.todos = observable([]);

		this.addTodo = action((todo) => this.todos.push(todo));
	}
}
