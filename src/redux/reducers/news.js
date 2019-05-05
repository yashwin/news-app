import {
  SEARCH_NEWS_LIST_REQUEST,
  SEARCH_NEWS_LIST_SUCCESS,
  SEARCH_NEWS_LIST_FAILURE
} from '../actionTypes';

const initialState = {
  isSearchingNews: false,
  allNews: [],
  totalItems: 0,
  currentPage: 1,
  searchTerm: '',
};

export default function searchNewsReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_NEWS_LIST_REQUEST:
      return {
        ...state,
        isSearchingNews: action.isSearchingNews
      }
    case SEARCH_NEWS_LIST_SUCCESS:
      return {
        ...state,
        isSearchingNews: action.isSearchingNews,
        allNews: action.payload.results,
        totalItems: action.payload.totalItems,
        currentPage: action.payload.currentPage,
        searchTerm: action.payload.searchTerm
      }    
    case SEARCH_NEWS_LIST_FAILURE:
      return {
        ...state,
        isSearchingNews: action.isSearchingNews
      }   
    default:
      return state; 
  }
}