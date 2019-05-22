import store from "../store";

export function setCurrentWord(currentWord) {
  return store.dispatch({
    type: "UPDATE_CURRENTWORD",
    payload: {
      currentWord
    }
  });
}

export function setImg(img) {
  return store.dispatch({
    type: "UPDATE_IMG",
    payload: {
      img
    }
  });
}

export function setCorrectAnswer(correctAnswer) {
  return store.dispatch({
    type: "UPDATE_CORRECTANSWER",
    payload: {
      correctAnswer
    }
  });
}

export function setWrongAnswer(wrongAnswer) {
  return store.dispatch({
    type: "UPDATE_WRONGANSWER",
    payload: {
      wrongAnswer
    }
  });
}

export function setCompleted(completed) {
  return store.dispatch({
    type: "UPDATE_COMPLETED",
    payload: {
      completed
    }
  });
}

export function setOptions(options) {
  return store.dispatch({
    type: "UPDATE_OPTIONS",
    payload: {
      options
    }
  });
}

export function setScore(score) {
  return store.dispatch({
    type: "UPDATE_SCORE",
    payload: {
      score
    }
  });
}

export function setTotal(total) {
  return store.dispatch({
    type: "UPDATE_TOTAL",
    payload: {
      total
    }
  });
}

export function setDisableButton(disableButton) {
  return store.dispatch({
    type: "UPDATE_DISABLEBUTTON",
    payload: {
      disableButton
    }
  });
}

export function setQuiz(quiz) {
  return store.dispatch({
    type: "UPDATE_QUIZ",
    payload: {
      quiz
    }
  });
}

export function setNr(nr) {
  return store.dispatch({
    type: "UPDATE_NR",
    payload: {
      nr
    }
  });
}
