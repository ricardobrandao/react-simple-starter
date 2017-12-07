import React from 'react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import MobxDevTools from 'mobx-react-devtools';
import ExampleStore from '~/ExampleStore.js';
import TodosList from '~/TodosList.js';

useStrict(true);

const App = () => (
	<Provider store={new ExampleStore()}>
		<div>
			<h1>Hello, World!</h1>
			<TodosList />
			<MobxDevTools />
		</div>
	</Provider>
);

export default App;
