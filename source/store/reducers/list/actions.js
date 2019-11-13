// Types
import { types } from './types';

export const addList = (data) => ({
    type:    types.ADD_LIST,
    payload: data,
});

export const addCard = (index, data) => ({
    type:    types.ADD_CARD,
    payload: { index, data },
});

export const removeCard = (listIndex, cardIndex) => ({
    type:    types.REMOVE_CARD,
    payload: { listIndex, cardIndex },
});
