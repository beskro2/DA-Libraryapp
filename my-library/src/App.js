import React from "react";
import "./App.css";
import Books from "./Books";
import Events from "./Events";
import LibraryInfo from "./LibraryInfo";

function App() {
  const [currentPage, setCurrentPage] = React.useState("LibraryInfo");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let displayedComponent;
  switch (currentPage) {
    case "LibraryInfo":
      displayedComponent = <LibraryInfo />;
      break;
    case "Books":
      displayedComponent = <Books />;
      break;
    case "Events":
      displayedComponent = <Events />;
      break;
    default:
      displayedComponent = <LibraryInfo />;
  }
  return (
    <div className="App">
      {/* Library Navigation Tabs */}
      <nav>
        <div>
          <a href="#" onClick={() => handlePageChange("LibraryInfo")}>
            About Us
          </a>
        </div>
        <div>
          <a href="#" onClick={() => handlePageChange("Books")}>
            Books
          </a>
        </div>
        <div>
          <a href="#" onClick={() => handlePageChange("Events")}>
            Events
          </a>
        </div>
      </nav>
      {/* Displayed Page Component */}
      <div>{displayedComponent}</div>
    </div>
  );
}

export default App;
