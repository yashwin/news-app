import axios from 'axios';
import {
  SEARCH_NEWS_LIST_REQUEST,
  SEARCH_NEWS_LIST_SUCCESS,
  SEARCH_NEWS_LIST_FAILURE
} from '../redux/actionTypes';


export function searchNewsLists(searchTerm, page = 1, pageSize = 10) {
  return (dispatch) => {
    dispatch(searchNewsListRequest());
    const host = process.env.REACT_APP_HOST
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