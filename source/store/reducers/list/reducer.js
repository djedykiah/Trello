// Core
import { List } from 'immutable';

// Types
import { types } from './types';

const initialState = List([
    {
        title: 'title',
        id:    0,
        cards: [
            {
                title: 'card title',
                text:  'text1',
                id:    0,
            },
            {
                title: 'card title',
                text:  'text2',
                id:    1,
            },
            {
                title: 'card title',
                text:  'text3',
                id:    2,
            }
        ],
    },
    {
        title: 'title2',
        id:    1,
        cards: [
            {
                title: 'card title',
                text:  'text1',
                id:    0,
            },
            {
                title: 'card title',
                text:  'text2',
                id:    1,
            },
            {
                title: 'card title',
                text:  'text3',
                id:    2,
            }
        ],
    }
]
);

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
