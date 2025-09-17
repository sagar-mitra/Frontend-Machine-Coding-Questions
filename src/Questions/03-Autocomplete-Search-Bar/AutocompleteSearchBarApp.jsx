import "./autocomplete-search-bar.css";
import QuestionNavbar from "../../Components/QuestionNavbar";
import { useEffect, useState } from "react";
import searchIcon from "./icons/searchIcon.png";

const AutocompleteSearchBarApp = () => {
  const [recipe, setRecipe] = useState([]);
  const [inputData, setInputData] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputData}`
    );
    const data = await res.json();
    if (data) setRecipe(data.recipes);
    console.log("Api called", inputData);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputData]);

  return (
    <div className="autocomplete-container">
      <QuestionNavbar title="Autocomplete Search Bar" />

      <div className="autocomplete-search-container">
        <h1>Autocomplete Search Bar</h1>

        {/* Search Box */}
        <div className="search-box">
          <img className="search-icon" src={searchIcon} alt="search-icon" />
          <input
            type="text"
            value={inputData}
            placeholder="search recipes here"
            onChange={(e) => setInputData(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="autocomplete-input"
          />
        </div>

        {/* Suggerstions */}
        {showSuggestions && (
          <ul className="recipes">
            {recipe.length > 0 &&
              recipe.map((r) => (
                <li className="recipe" key={r.id}>
                  <span>
                    <img
                      className="search-icon-suggestion"
                      src={searchIcon}
                      alt="search-icon"
                    />
                  </span>
                  {r.name}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutocompleteSearchBarApp;
