import "@stripe/stripe-js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import {
  userLogging,
  userLogged,
  userLoggingError,
  userLogOut,
} from "../user/userSlice";
import { auth } from "../../firebase";
import { fetchUser } from "../../firebase";
import Header from "../header/Header";
import Home from "../home/Home";
import News from "../news/NewsAndAnalysis";
import Footer from "../footer/Footer";
import Comments from "../comments/Comments";
import User from "../user/User";
import Login from "../user/login/Login";
import Register from "../user/register/Register";
import Reset from "../user/reset/Reset";
import AboutUs from "../aboutUs/AboutUs";
import Education from "../education/Education";
import FindUs from "../findUs/FindUs";
import ContactUs from "../contactUs/ContactUs";
import SingleCourse from "../education/singleCourse/SingleCourse";
import Error from "../notFoundPage/Error";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userLogging());
        fetchUser(user.uid)
          .then((res) => dispatch(userLogged(res)))
          .catch((error) => dispatch(userLoggingError(error.message)));
      } else {
        dispatch(userLogOut());
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/comments" element={<Comments />} />

        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/reset" element={<Reset />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/:id" element={<SingleCourse />} />
        <Route path="/findus" element={<FindUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
