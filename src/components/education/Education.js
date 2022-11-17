import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Container from "../container/Container";
import basic from "../../assets/basic.jpg";
import premium from "../../assets/premium.jpg";
import premium_pro from "../../assets/premium_pro.jpg";
import pro from "../../assets/pro.jpg";
import student_interview from "../../assets/student_interview.mp4";
import student_case from "../../assets/student_case.mp4";
import poster from "../../assets/poster.png";
import { useSelector } from "react-redux";

function Education() {
  const navigate = useNavigate();
  const { featuredCourse, courses } = useSelector((state) => state.courses);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-diasble-next-line
  }, []);
  return (
    <div className="mt-[7rem] lg:mt-[8rem] text-white">
      <Container>
        <h1 className="text-center text-3xl lg:text-4xl text-white mb-2">
          Our courses
        </h1>
        <h2 className="text-center mb-12 text-lg text-primaryGreen">
          The 4 main training packages from the Milliy Fx Trading Academy offer
          a wide range of opportunities, options and perspectives.
        </h2>

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6">
          <div className="w-full lg:w-[65%] order-2 lg:order-1">
            {courses.map((course) => {
              return (
                <div
                  key={course.id}
                  className={`flex flex-col lg:flex-row justify-around items-center xl:items-start bg-secondaryBg py-8 px-4 rounded border border-secondary ${
                    course.id === 3 ? null : "mb-8"
                  }`}
                >
                  <h3 className="text-2xl text-primaryPurple lg:hidden">
                    {course.name}
                  </h3>
                  <img
                    src={
                      course.image === "premium"
                        ? premium
                        : course.image === "premium_pro"
                        ? premium_pro
                        : pro
                    }
                    alt={course.name}
                    width={250}
                    height={250}
                    className={`rounded border border-secondary w-full lg:w-[35%] lg:max-w-[250px] max-w-[350px] mx-auto ${
                      course.position === "right" ? "lg:order-2" : "lg:order-1"
                    } my-8 lg:my-0`}
                  />
                  <div
                    className={`w-full lg:w-[60%] flex flex-col justify-between ${
                      course.position === "right" ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <h3 className="hidden lg:block text-2xl text-primaryPurple mb-3">
                        {course.name}
                      </h3>
                      <p className=" w-full">
                        <span className="fx_effect">
                          {course.highlightWord}
                        </span>{" "}
                        {course.content}
                      </p>
                    </div>
                    <button
                      className="w-full max-w-[350px] mx-auto lg:mx-0 lg:max-w-[250px] border-2 rounded py-2 border-primaryGreen text-primaryGreen hover:bg-primaryGreen transition-all duration-300 ease-in-out hover:text-white mt-6 text-xl"
                      type="button"
                      onClick={() => {
                        navigate(`/education/${course.id}`);
                      }}
                    >
                      Start learning
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:w-[35%] lg:sticky lg:top-[5.5rem] md:right-0 h-full bg-secondaryBg rounded py-8 px-4 text-center order-1 lg:order-2 border border-secondary">
            <h3 className="text-2xl text-primaryPurple text-left">
              {featuredCourse.name} - COMPLETLY FREE
            </h3>
            <img
              src={basic}
              alt="Basic course"
              className="rounded border border-secondary w-[350px] mx-auto my-8"
            />
            <p className="text-left">
              <span className="fx_effect">{featuredCourse.highlightWord}</span>{" "}
              {featuredCourse.content}
            </p>
            <button
              className="w-full max-w-[350px] border-2 rounded py-2 border-primaryGreen text-primaryGreen hover:bg-primaryGreen transition-all duration-300 ease-in-out hover:text-white mt-6 text-xl"
              type="button"
              onClick={() => {
                navigate("/user");
              }}
            >
              Start learning now
            </button>
          </div>
        </div>
        <div className="my-16 lg:my-20">
          <h2 className="text-center text-3xl lg:text-4xl text-primaryPurple">
            Student interviews
          </h2>
          <div className="bg-secondaryBg border border-secondary py-6 px-4 rounded mt-8 flex flex-col gap-4 lg:flex-row lg:items-start xl:justify-around">
            <video
              poster={poster}
              placeholder="Olga's interview"
              controls
              preload="auto"
              className="lg:w-[40%] lg:max-w-[350px] rounded my-auto h-[350px]"
            >
              <source src={student_interview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className=" xl:w-[45%]">
              <h2 className="text-primaryBlue text-3xl text-center mb-4">
                Olga
              </h2>
              <p className="mb-4">
                We interviewed our student - Olga - and asked her: why did she
                decide to become a trader? And how is her training going?
              </p>
              <p className="mb-4">
                Friends, if you follow our accounts on social networks and you
                are interested in the field of trading, maybe it's time for you
                to change your life dramatically.
              </p>
              <p>
                We have trained and prepared many successful traders and we are
                ready to share all our rich experience with you. Sign up for our
                training course and start earning money for yourself, not for
                your boss!
              </p>
            </div>
          </div>
          <div className="bg-secondaryBg border border-secondary py-6 px-4 rounded mt-8 flex flex-col gap-4 lg:flex-row lg:items-start xl:justify-around">
            <video
              poster={poster}
              placeholder="Anvar's interview"
              controls
              preload="auto"
              className="lg:w-[40%] lg:max-w-[350px] rounded lg:order-2 my-auto h-[350px]"
            >
              <source src={student_case} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="lg:order-1 xl:w-[45%]">
              <h2 className="text-primaryBlue text-3xl text-center mb-4">
                Anvar
              </h2>

              <p className="mb-4">
                Following all the advice of our mentors, Anvar was able to
                achieve high results in a short time.
              </p>
              <p>
                No more working paycheck to paycheck, get trained at MilliyFx
                and make the best changes in your life.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Education;
