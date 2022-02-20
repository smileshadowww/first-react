import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import {strContains} from '..//utils/strContains';
import { useSelector } from 'react-redux'
//selectors
export const getFilteredCards = ({ cards, searchingString }, columnId) => cards
  .filter(card => (card.columnId === columnId && strContains(card.title, searchingString)));
export const getAllColumns = state => state.columns;
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const searchCard = payload => ({ type: 'SEARCH', payload });

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
    case 'SEARCH':
      return { ...state, searchingString: [action.payload]};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
