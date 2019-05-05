import { combineReducers } from "redux";
import news from "./news";
import keyword from './keyword';

export default combineReducers({ news, keyword });