import { useEffect, useState } from "react";
import "./App.css";
import CoursesCardsSection from "./components/CoursesCardsSection";

function App() {
  const [coursesData, setCoursesData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((json) => setCoursesData(json));
  }, []);

  return (
    <main className="main">
      {coursesData && (
        <CoursesCardsSection coursesData={coursesData.courses[0]} />
      )}
    </main>
  );
}

export default App;
