import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

// Initial State
const startState = {
  cards: []
};

// Actions
export const initialCards = () => {
  return {
    type: 'INITIAL_CARDS',
    cards: data
  };
};

export const addItem = item => {
  return {
    type: 'ADD_ITEM',
    item
  };
};

// Reducers
export const reducers = (state = initialState, action) => {
  switch (action.type) {
  case 'INITIAL_CARDS':
    return {
      cards: action.cards
    };
  case 'ADD_ITEM':
    return {
      ...state,
      cards: [...state.cards, action.item]
    };
  default:
    return state;
  }
};

// Create Store
export const initStore = (initialState = startState) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};