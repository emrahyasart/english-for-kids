import { combineReducers } from "redux";
import { createStore } from "redux";

import quizPage from "../reducers/quizPage";
import landingPage from "../reducers/landingPage";

var combinedReducers = combineReducers({
  quizPage,
  landingPage
});

const store = createStore(combinedReducers);

export default store;
