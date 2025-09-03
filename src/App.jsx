import { CgRadioCheck } from "react-icons/cg";
import { CgRadioChecked } from "react-icons/cg";
import { Link } from "react-router-dom";
import { questions } from "./questions";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="heading-container">
        <h1 className="heading">Machine Coding Questions</h1>
        <p className="sub-heading">
          A collection of solved machine coding problems with clean code,
          explanations, and approaches.
        </p>
      </div>

      <div className="questions-container">
        <div className="questions">
          {questions.map((question, index) => {
            return (
              <div key={index} className="question-wrapper">
                {question.isCompleted ? (
                  <CgRadioChecked className="checked" />
                ) : (
                  <CgRadioCheck className="not-checked" />
                )}
                <Link to={question.path} className={`question ${question.isCompleted && "hoverable"}`}>{question.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
