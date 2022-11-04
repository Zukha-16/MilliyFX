import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import Error from "../notFoundPage/Error";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
};
export default App;
