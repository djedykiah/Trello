// Core
import { List } from 'immutable';

// Types
import { types } from './types';

let listID = 2;

let cardID = 2;

const initialState = List([
    {
        title: 'title',
        id:    0,
        cards: [
            {
                text: 'text1',
                id:   0,
            },
            {
                text: 'text2',
                id:   1,
            },
            {
                text: 'text3',
                id:   2,
            }
        ],
    },
    {
        title: 'title2',
        id:    1,
        cards: [
            {
                text: 'text1',
                id:   0,
            },
            {
                text: 'text2',
                id:   1,
            },
            {
                text: 'text3',
                id:   2,
            }
        ],
    }
]
);

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_LIST:
            listID += 1;

            return state.push({
                title: action.payload,
                id:    listID,
                cards: [],
            });
        case types.ADD_CARD:
            cardID += 1;

            return state.setIn([ action.payload.index, 'cards' ],
                [ ...state.get(action.payload.index).cards,
                    {
                        text: action.payload.data,
                        id:   cardID,
                    }
                ]);
        default:
            return state;
    }
};
