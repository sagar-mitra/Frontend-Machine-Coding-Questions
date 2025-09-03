import { useState } from "react";
import "./star-rating.css";
import QuestionNavbar from "../QuestionNavbar";

const StarRating = ({ starCount = 5 }) => {
  const [starVlaue, setStarValue] = useState(0);
  const [starHoverValue, setStarHoverValue] = useState(0);

  return (
    <div className="star-rating">
      <QuestionNavbar
        title="Star Rating"
        to="https://github.com/sagar-mitra/Frontend-Machine-Coding-Questions/blob/main/src/Questions/01-Star-Rating/StarRating.jsx"
      />
      <div className="star-container">
        {new Array(starCount).fill("").map((item, index) => {
          return (
            <span
              className={`star ${
                starHoverValue === 0 && index < starVlaue && "gold"
              } ${index < starHoverValue && "gold"} `}
              onClick={() => setStarValue(index + 1)}
              onMouseEnter={() => setStarHoverValue(index + 1)}
              onMouseLeave={() => setStarHoverValue(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
