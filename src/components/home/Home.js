import { useEffect } from "react";

import { HiUserAdd } from "react-icons/hi";
import { MdPlayLesson, MdCastForEducation } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

import Container from "../container/Container";
import "./Home.scss";
import logoWithLabel from "../../assets/logo_with_label.png";
import coFounder from "../../assets/co-founder.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="w-screen h-[50vh] xl:h-screen bg-[rgba(0,0,0,0.4)] bg-origin-border bg-center bg-no-repeat bg-cover bg-blend-multiply"
        style={{
          backgroundImage: "url('/imgs/compressed_bg.jpg')",
        }}
      >
        <Container>
          <div className="h-[50vh] xl:h-screen text-white flex flex-col justify-center items-center lg:items-end text-center">
            <div className="xl:w-[40%] gap-2 flex flex-col">
              <h1
                className="text-7xl"
                style={{
                  textShadow: "5px 5px 10px black",
                }}
              >
                Milliy{" "}
                <span className="fx_effect" style={{ textShadow: "none" }}>
                  FX
                </span>
              </h1>
              <h2
                className="text-xl text-primaryGreen"
                style={{
                  textShadow: "5px 5px 10px black",
                }}
              >
                Your key to success
              </h2>
              <p
                className="hide_text"
                style={{
                  textShadow: "5px 5px 10px black",
                }}
              >
                Our main goal is to provide people with the necessary skills,
                knowledge and experience. So that absolutely everyone can
                gradually learn all the subtleties of Forex and start making
                money on the stock exchange.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-20 flex flex-col text-white lg:flex-row gap-8 items-center justify-evenly">
          <div className="text-left lg:w-[50%]">
            <h2 className="text-3xl">About Us</h2>
            <h3 className="text-primaryPurple text-sm mb-4">
              Forex Trading Firm
            </h3>
            <p className="text-lg">
              We are an experienced Forex Trading Firm committed to helping
              clients strategize and invest for their future financial security.
              We specialize in assessing each of our client's unique needs and
              creating a personalized trading plan that will work best for their
              interests. Since 2018, we have gained invaluable experience
              working in a variety of markets, guaranteeing you get the guidance
              needed to achieve investment success.
            </p>
          </div>
          <img
            src={logoWithLabel}
            alt="Logo"
            className=" w-full sm:w-[50%] xl:w-[30%]"
          />
        </div>
        <div className="mt-20 lg:mt-32 lg:flex ">
          <div className="relative text-center lg:w-[50%]">
            <img
              src={coFounder}
              alt="logo"
              className="sticky top-20 z-10 sm:w-[60%] m-auto"
            />
          </div>

          <div className="mt-12 flex flex-col gap-8 lg:w-[50%] lg:mt-0">
            <div className="text-white text-center">
              <h3 className="text-sm text-primaryPurple">Training course</h3>
              <h2 className="text-2xl mb-4">Basic course</h2>
              <p className="text-base mb-4">
                The basic package helps to get acguainted with the basics of the
                market and has fundemental knowledge in trading.
              </p>
              <button className="text-lg border-2 rounded py-2 px-5 mb-8 text-primaryPurple border-primaryPurple hover:bg-primaryPurple hover:text-white transition-all duration-300 ease-in-out hover:scale-110">
                READ MORE
              </button>
              <hr className="w-[80%] m-auto" />
            </div>

            <div className="text-white text-center">
              <h3 className="text-sm text-primaryPurple">Training course</h3>
              <h2 className="text-2xl mb-4">Premium course</h2>
              <p className="text-base mb-4">
                The package guarantees an individual approach to each client. In
                addition to the fundamental concept of the market, our mentors
                will also teach you trading strategies and introduce you to
                topics for in-depth market research.
              </p>
              <button className="text-lg border-2 rounded py-2 px-5 mb-8 text-primaryPurple border-primaryPurple hover:bg-primaryPurple hover:text-white transition-all duration-300 ease-in-out hover:scale-110">
                READ MORE
              </button>
              <hr className="w-[80%] m-auto" />
            </div>

            <div className="text-white text-center">
              <h3 className="text-sm text-primaryPurple">Training course</h3>
              <h2 className="text-2xl mb-4">Basic course</h2>
              <p className="text-base mb-4">
                Ready made strategies and personal mentoring, which you will
                receive in the Pro package. This will help you get maximum
                results in the shortest time.
              </p>
              <button className="text-lg border-2 rounded py-2 px-5 mb-8 text-primaryPurple border-primaryPurple hover:bg-primaryPurple hover:text-white transition-all duration-300 ease-in-out hover:scale-110">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="text-white mt-20 lg:mt-32 ">
          <h2 className="text-3xl text-center text-primaryGreen md:mb-12">
            Start trading in 4 easy steps
          </h2>
          <div className="flex flex-col md:flex-row icon_size gap-6 md:justify-evenly ">
            <div className="flex flex-col md:flex-col md:w-1/2 md:max-w-sm">
              <div className="py-6 my-6 custom_bg rounded-xl text-center hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out sm:w-[60%] sm:ml-[40%] md:w-full md:ml-0 ">
                <HiUserAdd className="m-auto" />
                <h3
                  className="text-xl"
                  style={{
                    textShadow: "2px 2px 15px black",
                  }}
                >
                  Create an account
                </h3>
              </div>
              <div className="py-6 my-6 custom_bg rounded-xl text-center hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out sm:w-[60%] md:w-full ">
                <MdPlayLesson className="m-auto" />
                <h3
                  className="text-xl"
                  style={{
                    textShadow: "2px 2px 15px black",
                  }}
                >
                  Get to study
                </h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-col md:w-1/2 md:max-w-sm">
              <div className="py-6 my-6 custom_bg rounded-xl text-center hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out sm:w-[60%] sm:ml-[40%] md:w-full md:ml-0">
                <MdCastForEducation className="m-auto" />
                <h3
                  className="text-xl"
                  style={{
                    textShadow: "2px 2px 15px black",
                  }}
                >
                  Practise with mentors
                </h3>
              </div>
              <div className="py-6 my-6 custom_bg rounded-xl text-center hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out sm:w-[60%] md:w-full">
                <FaMoneyBillWave className="m-auto" />
                <h3
                  className="text-xl"
                  style={{
                    textShadow: "2px 2px 15px black",
                  }}
                >
                  Start making money
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
