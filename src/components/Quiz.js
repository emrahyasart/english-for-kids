import React from "react";

import { colors } from "../data/data";
import Question from "./Question";

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nr: 0,
			total: colors.length,
			score: 0
			completed: false
		};
		this.checkAnswer = this.checkAnswer.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
	}

	componentWillMount() {
		let { nr } = this.state;
		this.createNewQuestion(nr);
	}

	createNewQuestion(nr) {
		console.log("newquestion");
		this.setState({
			currentWord: colors[nr].word,
			img: colors[nr].img,
			correctAnswer: false,
			wrongAnswer: false,
			options: this.shuffle(colors[nr].options),
			nr: this.state.nr + 1
		});
	}

	// Shuffle the array of options:
	shuffle(arr) {
		let j, x, i;
		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = arr[i];
			arr[i] = arr[j];
			arr[j] = x;
		}
		return arr;
	}

	checkAnswer(e) {
		let answer = e.currentTarget.innerText,
			element = document.getElementById(answer),
			{ currentWord } = this.state;

		if (answer === currentWord) {
			this.setState({ correctAnswer: true });
			setTimeout(() => {
				element.classList.toggle("correct-answer");
				this.nextQuestion();
			}, 750);
			element.classList.toggle("correct-answer");
		} else {
			this.setState({ wrongAnswer: true });
			setTimeout(() => {
				element.classList.toggle("wrong-answer");
				this.setState({ wrongAnswer: false });
			}, 1000);
			element.classList.toggle("wrong-answer");
		}
	}

	nextQuestion() {
		let { nr, total } = this.state;

		// Check if quiz is completed:
		if (nr === total) {
			this.setState({
				completed: true
			});
		} else {
			// Assign values to state for the next word:
			this.createNewQuestion(nr);
		}
	}

	render() {
		const {
			currentWord,
			img,
			correctAnswer,
			wrongAnswer,
			completed,
			options
		} = this.state;

		if (completed)
			return (
				<div className="resultImage">
					<br style={{ marginBottom: "10em" }} />
					<div>
						<br />
						Quiz completed!
					</div>
				</div>
			);

		return (
			<Question
				word={currentWord}
				imgUrl={img}
				options={options}
				correctAnswer={correctAnswer}
				wrongAnswer={wrongAnswer}
				checkAnswer={this.checkAnswer}
			/>
		);
	}
}

export default Quiz;
