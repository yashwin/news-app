import {
  GET_KEYWORD_LIST_REQUEST,
  GET_KEYWORD_LIST_SUCCESS,
  GET_KEYWORD_LIST_FAILURE
} from '../actionTypes';

const initialState = {
  isGettingKeywords: false,
  allKeywords: []
};

export default function searchKeywordsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_KEYWORD_LIST_REQUEST:
      return {
        ...state,
        isGettingKeywords: action.isGettingKeywords
      }
    case GET_KEYWORD_LIST_SUCCESS:
      return {
        ...state,
        isGettingKeywords: action.isGettingKeywords,
        allKeywords: action.payload
      }
    case GET_KEYWORD_LIST_FAILURE:
      return {
        ...state,
        isGettingKeywords: action.isGettingKeywords
      }
    default:
      return state;
  }
}