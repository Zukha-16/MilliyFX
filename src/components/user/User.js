import Container from "../container/Container";
import Profile from "./profile/Profile";
// import Courses from "./courses/Courses";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
function User() {
  // const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="text-white mt-20 flex flex-col items-center lg:flex-row gap-8 lg:items-start">
        <Profile />
        {/* <Courses /> */}
      </div>
    </Container>
  );
}

export default User;
