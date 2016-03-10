import makeStore from './source/store';
import startServer from './source/server';

export const store = makeStore();
startServer(store);

store.dispatch({
	type: 'SET_ENTRIES',
	entries: require('./entries.json')
});

store.dispatch({type: 'NEXT'});
