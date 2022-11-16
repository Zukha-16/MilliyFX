import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSingleCourse } from "../coursesSlice";
import Container from "../../container/Container";
import Loader from "../../loader/Loader";
import basic from "../../../assets/basic.jpg";
import premium from "../../../assets/premium.jpg";
import premium_pro from "../../../assets/premium_pro.jpg";
import pro from "../../../assets/pro.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiInputChecked } from "react-icons/ti";
import "./SingleCourse.scss";
import CheckOut from "./checkOut/CheckOut";

function SingleCourse() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleCourse } = useSelector((state) => state.courses);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleCourse(id));
  }, []);

  return (
    <div className="text-white mt-[8rem]">
      <Container>
        {singleCourse ? (
          <>
            <h1 className="text-3xl md:text-4xl text-center mb-8 text-primaryPurple">
              {singleCourse.name}
            </h1>
            <div className="flex flex-col gap-6 bg-secondaryBg py-8 px-4 rounded-lg border border-secondary md:flex-row">
              <img
                src={
                  singleCourse.image === "basic"
                    ? basic
                    : singleCourse.image === "premium"
                    ? premium
                    : singleCourse.image === "premium_pro"
                    ? premium_pro
                    : pro
                }
                width={350}
                height={350}
                alt={singleCourse.name}
                className="border border-secondary rounded-md mx-auto"
              />
              <div className="md:flex flex-col justify-between">
                <div className="flex flex-col gap-4 green_check mb-6">
                  <p>{singleCourse.description}</p>
                  <p>{singleCourse.target}</p>
                  <ul>
                    {singleCourse.includedItems ? (
                      singleCourse.includedItems.map((item) => {
                        return (
                          <li key={item} className="flex flex-row gap-2">
                            <TiInputChecked size={25} />
                            {item}
                          </li>
                        );
                      })
                    ) : (
                      <Loader />
                    )}
                  </ul>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <h4 className="text-xl text-green-600 xl:text-2xl">
                    £{" "}
                    {singleCourse.price === 0
                      ? "Completely free"
                      : singleCourse.price}
                  </h4>
                  <GetRate rate={singleCourse.rate} />
                  <div className="hidden lg:block">
                    <CheckOut />
                  </div>
                </div>
                <div className="lg:hidden">
                  <CheckOut checkoutUrl={singleCourse.checkoutUrl} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
}

export default SingleCourse;

const GetRate = ({ rate }) => {
  switch (rate) {
    case 1:
      return (
        <div className="flex flex-row">
          <AiFillStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
        </div>
      );
    case 2:
      return (
        <div className="flex flex-row">
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
        </div>
      );
    case 3:
      return (
        <div className="flex flex-row">
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
        </div>
      );
    case 4:
      return (
        <div className="flex flex-row">
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiOutlineStar color="yellow" size={25} />
        </div>
      );
    case 5:
      return (
        <div className="flex flex-row">
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
          <AiFillStar color="yellow" size={25} />
        </div>
      );

    default:
      break;
  }
};
