import { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {
  const [coursesData, setCoursesData] = useState(null);
  const [searchParam] = useSearchParams();

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
          element={
            <HomePage
              searchQuery={searchParam.get("searchQuery")}
              courses={coursesData}
            />
          }
        />
        <Route
          path="/course/:courseCategoryId/:courseId"
          element={
            coursesData && (
              <CoursePage
                courses={coursesData.courses}
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
