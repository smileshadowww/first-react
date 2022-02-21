import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import searchingStringReducer from './searchingStringRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
//selectors
// // export const getFilteredCards = ({ cards, searchingString }, columnId) => cards
// //   .filter(card => (card.columnId === columnId && strContains(card.title, searchingString)));
// export const getColumnsByList = ({ columns }, listId ) => columns.filter(column => column.listId === listId)
// export const getAllColumns = state => state.columns;
// export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
// export const getAllLists = ({ lists }) => lists;
// // export const getFavoritesList = ({ cards }) => cards.filter(card => card.isFavorite === true);

// action creators
// export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
// export const addCard = payload => ({ type: 'ADD_CARD', payload });
// export const searchCard = payload => ({ type: 'SEARCH', payload });
// export const addList = payload => ({ type: 'ADD_LIST', payload });
// export const toggleFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchingString: searchingStringReducer
}

const reducer = combineReducers(subreducers);
// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchingString: searchStringReducer(state.searchingString, action)
//   };
//
//   return newState;
// };

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'ADD_COLUMN':
//       return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
//     case 'ADD_CARD':
//       return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
//     case 'ADD_LIST':
//       return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
//     case 'SEARCH':
//       return { ...state, searchingString: [action.payload]};
//     case 'TOGGLE_CARD_FAVORITE':
//       return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//     default:
//       return state;
//   }
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
