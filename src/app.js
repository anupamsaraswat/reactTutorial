import React           from 'react';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import { render }      from 'react-dom';
import TODO             from 'components/todo';
import Reducers        from 'reducers';

// Store
let store = createStore(Reducers);

window.store = store;

render(
	<Provider store={store} >
		<TODO />
	</Provider>
	, document.getElementById('container'));
