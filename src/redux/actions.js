import axios from 'axios';
import {
  SEARCH_NEWS_LIST_REQUEST,
  SEARCH_NEWS_LIST_SUCCESS,
  SEARCH_NEWS_LIST_FAILURE,
  GET_KEYWORD_LIST_REQUEST,
  GET_KEYWORD_LIST_SUCCESS,
  GET_KEYWORD_LIST_FAILURE
} from '../redux/actionTypes';

export const KeywordList = function getKeywordList() {
  return (dispatch) => {
    dispatch(getKeywordListRequest());
    const host = process.env.REACT_APP_HOST;
    const url = (`${host}/tags?show-references=all&api-key=test&type=keyword`);
    return axios.get(url)
      .then((response) => {
        const allKeywords = response.data.response.results;
        const allKeywordData = allKeywords.map((keyword) => ({
          id: keyword.id,
          webTitle: keyword.webTitle
        }));
        dispatch(getKeywordListSuccess(allKeywordData));
      })
      .catch((error) => {
        dispatch(getKeywordListFailure(error));
      })
  }
}

function getKeywordListRequest() {
  return {
    type: GET_KEYWORD_LIST_REQUEST,
    isGettingKeywords: true
  };
}

function getKeywordListSuccess(data) {
  return {
    type: GET_KEYWORD_LIST_SUCCESS,
    isGettingKeywords: false,
    payload: data
  };
}

function getKeywordListFailure(error) {
  return {
    type: GET_KEYWORD_LIST_FAILURE,
    isGettingKeywords: false,
    error
  };
}


export const NewsList = function searchNewsLists(searchTerm, page = 1, pageSize = 10) {
  return (dispatch) => {
    dispatch(searchNewsListRequest());
    const host = process.env.REACT_APP_HOST;
    const url = (`${host}/search?api-key=test&q=${searchTerm}&show-fields=thumbnail,headline&show-tags=keyword&page=${page}&page-size=${pageSize}`)
    return axios.get(url)
      .then((response) => {
        const allNews = response.data.response.results;
        const results = allNews.map((news) => ({
          id: news.id,
          headline: news.fields.headline,
          thumbnail: news.fields.thumbnail,
          url: news.webUrl,
          keywords: news.tags
        }));
        const allNewsData = {
          results: results,
          totalItems: response.data.response.total,
          currentPage: response.data.response.currentPage,
          searchTerm: searchTerm
        };
        dispatch(searchNewsListSuccess(allNewsData));
      })
      .catch((error) => {
        dispatch(searchNewsListFailure(error));
      })
  };
}

function searchNewsListRequest() {
  return {
    type: SEARCH_NEWS_LIST_REQUEST,
    isSearchingNews: true
  };
}

function searchNewsListSuccess(data) {
  return {
    type: SEARCH_NEWS_LIST_SUCCESS,
    isSearchingNews: false,
    payload: data
  };
}

function searchNewsListFailure(error) {
  return {
    type: SEARCH_NEWS_LIST_FAILURE,
    isSearchingNews: false,
    error
  };
}