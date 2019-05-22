const INITIAL_STATE = {
  currentWord: "quiz[nr].word",
  img: "quiz[nr].img",
  correctAnswer: "false",
  wrongAnswer: "false",
  completed: "false",
  options: "this.shuffle(quiz[nr].options)",
  score: 0,
  total: "quiz.length",
  disableButton: "false",
  quiz: "section(newQuiz)",
  nr: 0
};

const quizPage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_CURRENTWORD":
      return Object.assign({}, state, {
        currentWord: action.payload.currentWord
      });

    case "UPDATE_IMG":
      return Object.assign({}, state, { img: action.payload.img });

    case "UPDATE_CORRECTANSWER":
      return Object.assign({}, state, {
        correctAnswer: action.payload.correctAnswer
      });

    case "UPDATE_WRONGANSWER":
      return Object.assign({}, state, {
        wrongAnswer: action.payload.wrongAnswer
      });

    case "UPDATE_COMPLETED":
      return Object.assign({}, state, { completed: action.payload.completed });

    case "UPDATE_OPTIONS":
      return Object.assign({}, state, { options: action.payload.options });

    case "UPDATE_SCORE":
      return Object.assign({}, state, { score: state.score+1 });

    case "UPDATE_TOTAL":
      return Object.assign({}, state, { total: action.payload.total });

    case "UPDATE_DISABLEBUTTON":
      return Object.assign({}, state, {
        disableButton: action.payload.disableButton
      });

    case "UPDATE_QUIZ":
      return Object.assign({}, state, { quiz: action.payload.quiz });

    case "UPDATE_NR":
      return Object.assign({}, state, { nr: action.payload.nr });

    default:
      return state;
  }
};

export default quizPage;
