import Container from "../container/Container";
import "./Education.scss";
import basic from "../../assets/basic.jpg";
import premium from "../../assets/premium.jpg";
import premium_pro from "../../assets/premium_pro.jpg";
import pro from "../../assets/pro.jpg";

function Education() {
  return (
    <div className="mt-[7rem] lg:mt-[8rem] text-white">
      <Container>
        <h1 className="text-center text-3xl lg:text-4xl text-white mb-2">
          Our courses
        </h1>
        <h2 className="text-center md:mb-12 text-lg text-primaryGreen">
          The 4 main training packages from the Milliy Fx Trading Academy offer
          a wide range of opportunities, options and perspectives.
        </h2>

        <div className="relative flex flex-row gap-4">
          <div className="border w-full md:w-[65%]">
            <div className="border-red-500 border flex justify-around">
              <img
                src={premium}
                alt="Premium course"
                width={250}
                className="rounded border border-secondary w-[35%] max-w-[250px]"
              />
              <div className="w-[60%] border">
                <h3 className="text-2xl text-primaryPurple">Premium course</h3>
                <p>
                  <span className="fx_effect">PREMIUM</span> - guarantees a
                  premium approach to each student, where the basic knowledge
                  will be supplemented by the study of effective trading
                  strategies, under the strict guidance of our experienced
                  mentors. The package includes the basic theory and a 2-month
                  intensive course.
                </p>
              </div>
            </div>
          </div>

          <div className="border md:w-[35%] sticky top-[5.5rem] right-0 h-[80vh] comment_hider">
            password
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Education;
