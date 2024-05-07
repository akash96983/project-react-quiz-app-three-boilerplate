// App.jsx
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Quiz from './Component/Quiz';
import Result from './Component/Result';
import questions from './assets/questions.json'

class App extends Component {
  state = {
    score: 0,
    attemptQuiz: 0,
    questions: questions,
  };

  handleScoreUpdate = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  handleAttemptQuizUpdate = () => {
    this.setState((prevState) => ({
      attemptQuiz: prevState.attemptQuiz + 1,
    }));
  };

  render() {
    const { score, attemptQuiz, questions } = this.state;

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz"
            element={<Quiz score={score} questions={questions} updateScore={this.handleScoreUpdate} updateAttemptQuiz={this.handleAttemptQuizUpdate} />}
          />
          <Route path="/result" element={<Result score={score} attemptQuiz={attemptQuiz} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;