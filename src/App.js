import "./App.css";
import CoursesCardsSection from "./components/CoursesCardsSection";

function App() {
  const coursesData = [
    {
      id: 1,
      image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
      title: "Learn Python: The Complete Python Programmming Course",
      author: "Avinash Jain, The Codex",
      rating: 4.4,
      students: 2845,
      price: 199.99,
      old_price: 679.99,
      bestSeller: false,
    },
    {
      id: 2,
      image: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      rating: 5,
      students: 17956,
      price: 269.99,
      old_price: 1599.99,
      bestSeller: true,
    },
    {
      id: 3,
      image: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz, Coding Faculty Solutions",
      rating: 3.2,
      students: 1734,
      price: 199.99,
      old_price: 679.99,
      bestSeller: false,
    },
    {
      id: 4,
      image: "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      rating: 2.5,
      students: 2759,
      price: 199.99,
      old_price: 319.99,
      bestSeller: false,
    },
    {
      id: 5,
      image: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      rating: 1,
      students: 2927,
      price: 229.99,
      old_price: 519.99,
      bestSeller: false,
    },
  ];

  const title = "Expand your career opportunities with Python";

  const description =
    "Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...";

  const exploreButton = "Explore Python";

  return (
    <main className="main">
      <CoursesCardsSection
        title={title}
        description={description}
        exploreButton={exploreButton}
        coursesDataArray={coursesData}
      ></CoursesCardsSection>
    </main>
  );
}

export default App;
