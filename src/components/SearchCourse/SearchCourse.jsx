import { useEffect, useState } from "react";
import "./SearchCourse.scss";
import { coursesData } from "../../constants/Courses";

function SearchCourse() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [courseFound, setCourseFound] = useState([]);
  const [tableShown, setTableShown] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Simulated data for auto-suggestions (replace with your own data or API calls)
  const allSuggestions = [
    "DREADLOCKS",
    "USUSI NA UREMBO (MWAKA)",
    "MAPAMBO (MIAKA MITATU)",
    "DREADLOCKS (BWENI)",
    "NATURAL HAIR (BWENI)",
    "NATURAL HAIR (KUTWA)",
    "MAKE UP (BWENI)",
    "MAKE UP (KUTWA)",
    "HENNA",
  ];

  useEffect(() => {
    // Filter suggestions based on the input value
    const filteredSuggestions = allSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  }, [inputValue]);
  const filterCourse = () => {
    console.log("input value", inputValue);
    const course = coursesData.filter((course) => {
      return course.title.toLowerCase() === inputValue.toLowerCase();
    });
    setCourseFound(course);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };
  const handleSearch = () => {
    filterCourse();
    setShowSuggestions(false);
    setTableShown(true);
    // if (courseFound.length === 0) {
    //   setTableShown(false);
    // } else {
    //   setTableShown(true);
    // }
    console.log(courseFound);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    filterCourse();
    console.log(courseFound);
    setShowSuggestions(false);
  };

  const renderSuggestions = () => {
    if (showSuggestions && inputValue) {
      return (
        <div className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <span key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </span>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="course-search-container">
      <p className="search-title">Search course here:</p>
      {/* <p>{courseFound}</p> */}
      <div className="search-button-holder">
        <div className="search-div">
          <input
            type="text"
            placeholder="search course, eg Ususi"
            name="course"
            value={inputValue}
            onChange={handleInputChange}
            className="search"
            id=""
          />
          <div className="suggestion-div">{renderSuggestions()}</div>
        </div>
        <div className="button-search-div">
          <button onClick={handleSearch} className="button-search">
            Search
          </button>
        </div>
      </div>
      {tableShown && (
        <div className="course-table-container">
          <h3 className="table-title">
            {courseFound !== undefined &&
              courseFound.length !== 0 &&
              courseFound[0].title}
          </h3>
          {/* <table className="course-table" border={1}>
          <tr>
            <th>MAELEZO</th>
            <th>MUDA</th>
            <th rowSpan={2} colSpan={2}>
              <td>
                {" "}
                GHARAMA <td>SIKU</td> <td>BWENI</td>
              </td>
            </th>
          </tr>
          <tbody>
            <tr>
              <td>Gharama ya mafunzo</td>
              <td>miezi mitatu</td>
              <td>80,000</td>
              <td>600,000/=</td>
            </tr>
          </tbody>
        </table> */}
          {courseFound.length !== 0 && courseFound !== undefined ? (
            <table>
              <tr>
                <th rowspan="2">MAELEZO</th>
                <th rowspan="2">MUDA</th>
                <th colspan="2">GHARAMA</th>
              </tr>
              <tr>
                <th>KUTWA</th>
                <th>BWENI</th>
              </tr>
              {courseFound[0].description.map((description, index) => {
                return (
                  <tr key={index}>
                    <td>{description.title}</td>
                    <td>{description.time}</td>
                    <td>{description.fees.day[0].cost}</td>
                    <td>{description.fees.hostel[0].cost}</td>
                  </tr>
                );
              })}
              {/* <tr>
                <td colSpan={2} className="total">
                  TOTAL
                </td>
                <td colSpan={2} className="total">
                  789,000/=
                </td>
              </tr> */}
            </table>
          ) : (
            <div>No Data found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchCourse;
