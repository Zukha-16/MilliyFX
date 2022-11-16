import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Container from "../container/Container";
// media files and styles
import head from "../../assets/head_mentor.jpg";
import director from "../../assets/director.jpg";
import co_founder from "../../assets/co-founder.jpg";
import promo from "../../assets/promo.mp4";
import "./AboutUs.scss";

function AboutUs() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMemberStyle =
    "mx-auto rounded-full border-8 border-primaryBlue transition-all duration-300 ease-in-out hover:border-primaryGreen hover:cursor-pointer";
  return (
    <main className="mt-[7rem] lg:mt-[8rem] text-white">
      <Container>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between">
          <img
            src={co_founder}
            alt="Co-founder"
            width={400}
            height={400}
            className="rounded-lg border border-secondary m-auto lg:m-0 lg:w-[45%] lg:max-w-[485px] order-2 lg:order-1 mb-8 xl:m-auto"
          />

          <div className="mb-8 lg:mt-0 lg:w-[50%] order-1 lg:order-2 lg:m-0 2xl:w-[40%] 2xl:mx-auto">
            <h1 className="text-3xl text-center mb-4 text-primaryPurple xl:text-4xl">
              About us
            </h1>
            <p className="mb-4">
              <span className="fx_effect text-xl">MilliyFX</span> was built in
              the vision of helping others to reach their potential while
              trading the financial markets.
            </p>
            <p className="mb-4">
              Over the past 5 years , MilliyFX has become market leaders in
              forex education space. With a student base worldwide, MilliyFX is
              one of the most diverse educational platform you will ever see.
            </p>

            <p className="mb-4">
              Since MilliyFX started the founders have grown a team of traders
              who has grown exponentially to help all traders from beginners all
              the way to experienced traders.
            </p>
          </div>
        </div>
      </Container>
      <div className="my-12 gradient_bg py-12 lg:py-16 lg:my-20">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-[45%]">
              <h2 className="text-2xl text-center mb-4 text-primaryPurple lg:text-3xl xl:text-4xl">
                About 5 years of experience
              </h2>
              <p className="mb-4">
                With over +20 years of experience in the markets we can
                confidently say we know what it takes but also the mistakes and
                traps every trader needs to avoid on their trading journey to
                become profitable.
              </p>
              <p className="mb-4">
                We have over 4000 students to date, amassed over 11.2 million
                views on our YouTube market analysis videos and have travelled
                across the world to teach our renowned course.
              </p>

              <p>
                We have since created our Limitless Trader Program which
                provides the education as well as the tools for traders looking
                to start out but also excel in their trading.
              </p>
            </div>

            <video
              autoplay="autoplay"
              loop="loop"
              muted
              defaultMuted
              playsinline
              oncontextmenu="return false;"
              preload="auto"
              id="myVideo"
              className="hidden lg:inline-block lg:w-[50%] rounded"
            >
              <source src={promo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Container>
      </div>
      <div className="my-12 lg:my-20">
        <Container>
          <h2 className="text-3xl text-primaryPurple text-center xl:text-4xl">
            Meet our team
          </h2>
          <div className="flex flex-col gap-4 mt-6 lg:mt-16 md:flex-row">
            <img
              src={head}
              alt="User"
              width={200}
              height={200}
              className={teamMemberStyle + " lg:w-[30%] lg:max-w-[250px]"}
            />
            <img
              src={co_founder}
              alt="User"
              width={200}
              height={200}
              className={teamMemberStyle + " lg:w-[30%] lg:max-w-[250px]"}
            />
            <img
              src={director}
              alt="User"
              width={200}
              height={200}
              className={teamMemberStyle + " lg:w-[30%] lg:max-w-[250px]"}
            />
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center lg:flex-row lg:items-center lg:justify-center lg:gap-12 xl:gap-20">
          <h2 className="text-3xl text-primaryPurple">Speak to our team now</h2>
          <button className="w-full max-w-[350px] border-2 rounded py-2 border-primaryPurple text-primaryPurple hover:bg-primaryPurple transition-all duration-300 ease-in-out hover:text-white mt-4 lg:mt-0 text-xl" type="button" onClick={() => {navigate('/contactus')}}>
            Speak
          </button>
        </div>
      </Container>
    </main>
  );
}

export default AboutUs;
