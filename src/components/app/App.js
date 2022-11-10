import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import News from "../news/NewsAndAnalysis";
import Footer from "../footer/Footer";
import Comments from "../comments/Comments";
import Error from "../notFoundPage/Error";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/comments" element={<Comments />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
