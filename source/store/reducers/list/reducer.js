// Core
import { List } from 'immutable';

// Types
import { types } from './types';

let listID = 2;

let cardID = 6;

const initialState = List([
    {
        title: 'title',
        id:    `listID-${0}`,
        cards: [
            {
                text: 'text1',
                id:   `cardID-${0}`,
            },
            {
                text: 'text2',
                id:   `cardID-${1}`,
            },
            {
                text: 'text3',
                id:   `cardID-${2}`,
            }
        ],
    },
    {
        title: 'title2',
        id:    `listID-${1}`,
        cards: [
            {
                text: 'text1',
                id:   `cardID-${3}`,
            },
            {
                text: 'text2',
                id:   `cardID-${4}`,
            },
            {
                text: 'text3',
                id:   `cardID-${5}`,
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
                id:    `listID-${listID}`,
                cards: [],
            });
        case types.ADD_CARD:
            cardID += 1;

            return state.setIn([ action.payload.index, 'cards' ],
                [ ...state.get(action.payload.index).cards,
                    {
                        text: action.payload.data,
                        id:   `listID-${cardID}`,
                    }
                ]);
        case types.REMOVE_CARD:
            return state.setIn([ action.payload.listIndex, 'cards' ],
                [
                    ...state.get(action.payload.listIndex).cards.slice(0, action.payload.cardIndex),
                    ...state.get(action.payload.listIndex).cards.slice(action.payload.cardIndex + 1)
                ]
            );
        default:
            return state;
    }
};
