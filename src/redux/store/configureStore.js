import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import searchNewsReducer from '../reducers/news';
import searchKeywordsReducer from '../reducers/keyword';

export const configureStore = () => {
  const reducer = combineReducers({
    news: searchNewsReducer,
    keywords: searchKeywordsReducer
  });

  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  return store;
};