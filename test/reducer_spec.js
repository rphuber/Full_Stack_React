import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../source/reducer';

describe('reducer', () => {

	it('Handles SET_ENTRIES', () => {
		const initialState = Map();
		const action = { type: 'SET_ENTRIES', entries: ['Trainspotting'] };
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			entries: ['Trainspotting']
		}));
	});

	it('Handles NEXT', () => {
		const initialState = fromJS({
			entries: ['Trainspotting', '28 Days Later']
		});
		const action = { type: 'NEXT' };
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later']
			},
			entries: []
		}));
	});

	it('Handles VOTE', () => {
		const initialState = fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later']
			},
			entries: []
		});
		const action = { type: 'VOTE', entry: 'Trainspotting' };
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: { Trainspotting: 1 }
			},
			entries: []
		}));
	});
});
