import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QuestionList } from "./components/Question";
import Question1 from "./pages/Question1";
import Result from "./pages/Result";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      nowQuestion: 0,
    }
  }
  handleClick(score) {
    const total = this.state.total + score;
    this.setState({
      total:total,
      nowQuestion: this.state.nowQuestion+1
    });
  }
  render() {
    return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/test" element={<Question1 now={this.state.nowQuestion} question1={QuestionList} onClick={this.handleClick.bind(this)}/>} /> */}
        <Route path="/test:id" element={<Question1 now={this.state.nowQuestion} question1={QuestionList} onClick={this.handleClick.bind(this)}/>} />
        <Route path="/result" element={<Result totalScore={this.state.total}/>} />
      </Routes>
    </BrowserRouter>
  </div>
  }
}

export default App;
