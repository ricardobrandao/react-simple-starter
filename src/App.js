import React from 'react';
import { Provider } from 'mobx-react';
import ExampleStore from '~/ExampleStore.js';
import TodosList from '~/TodosList.js';

const App = () => (
	<Provider store={new ExampleStore()}>
		<div>
			<h1>Hello, World!</h1>
			<TodosList />
		</div>
	</Provider>
);

export default App;
