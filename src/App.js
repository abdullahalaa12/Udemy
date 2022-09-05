import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {
  const [coursesData, setCoursesData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((json) => setCoursesData(json));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={coursesData && <HomePage courses={coursesData.courses[0]} />}
        />
        <Route
          path="/course/:courseId"
          element={
            coursesData && (
              <CoursePage
                courses={coursesData.courses[0]}
                content={coursesData.contents}
                reviews={coursesData.reviews}
              />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
