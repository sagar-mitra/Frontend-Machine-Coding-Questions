import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const QuestionNavbar = ({ title, to }) => {
  return (
    <div className="question-navbar">
      <p>
        <Link className="home-link" to="/">
          Machine Coding Questions
        </Link>{" "}
        <span style={{ opacity: "50%" }}> {"> "}</span>
        {title}
      </p>

      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className="code-link"
      >
        Source Code <MdArrowOutward className="arrow" />{" "}
      </Link>
    </div>
  );
};

export default QuestionNavbar;
