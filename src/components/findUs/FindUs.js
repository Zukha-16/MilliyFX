import { useEffect } from "react";
import Container from "../container/Container";
import "./FindUs.scss";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  MdOutlineLocationOn,
  MdCall,
  MdEmail,
  MdTimeline,
} from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import GoogleMaps from "./GoogleMaps";

function FindUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const days = [
    { day: "Monday", time: "10:00 - 19:30", id: 1 },
    { day: "Tuesday", time: "10:00 - 19:30", id: 2 },
    { day: "Wednesday", time: "10:00 - 19:30", id: 3 },
    { day: "Thursday", time: "10:00 - 19:30", id: 4 },
    { day: "Friday", time: "10:00 - 19:30", id: 5 },
    { day: "Saturday", time: "Closed", id: 6 },
    { day: "Sunday", time: "Closed", id: 7 },
  ];

  const now = new Date();
  const day = now.getDay();
  return (
    <div className="mt-[8rem]">
      <Container>
        <h1 className="text-3xl md:text-4xl text-center text-white">
          We are{" "}
          <span
            className={
              day === 6 || day === 7 ? "text-red-600" : "text-primaryGreen"
            }
          >
            {day === 6 || day === 7 ? "closed" : "open"}
          </span>{" "}
          today
        </h1>
        <div className="text-white lg:flex flex-row gap-8 justify-between">
          <div className="mt-10 bg-secondaryBg border border-secondary p-4 rounded-lg flex flex-col gap-2 text-lg lg:order-2 lg:min-w-[350px] lg:justify-between xl:min-w-[400px]">
            <h3 className="text-2xl text-primaryPurple">Working hours</h3>
            {days.map((currentDay) => {
              return (
                <div
                  key={currentDay.id}
                  className="flex flex-row justify-between"
                >
                  <p className="flex items-center gap-2">
                    {currentDay.day}
                    {currentDay.id === day ? (
                      <AiOutlineClockCircle color="yellow" />
                    ) : null}
                  </p>
                  <p
                    className={` ${
                      currentDay.day === "Saturday" ||
                      currentDay.day === "Sunday"
                        ? "text-red-600"
                        : "text-white"
                    } flex flex-row gap-2 items-center`}
                  >
                    {currentDay.id === day ? (
                      <AiOutlineClockCircle
                        color="yellow"
                        className="hidden md:block lg:hidden"
                      />
                    ) : null}
                    {currentDay.time}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 bg-secondaryBg border border-secondary p-4 rounded-lg flex flex-col gap-2 text-lg lg:order-1 lg:w-full">
            <h3 className="text-2xl text-primaryPurple">Information</h3>
            <p className="text-base mb-6">
              Contact us to make an order or get more information about any
              course you are interested in. Our operators will provide you with
              all the information about your future study.
            </p>
            {information.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-row gap-2 info_icons items-center text-base mb-2 sm"
                >
                  {item.icon} <p className="w-[85%]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <div className="border mt-20 -mb-20">
        <GoogleMaps />
      </div>
    </div>
  );
}

export default FindUs;

const information = [
  {
    id: 1,
    icon: <MdOutlineLocationOn className="box-content w-[10%]" size={25} />,
    text: "29 Bog'idil street, Tashkent, Uzbekistan 1st floor",
  },
  {
    id: 2,
    icon: <MdCall className="box-content w-[10%]" size={25} />,
    text: "+998 99 699-66-66",
  },
  {
    id: 3,
    icon: <MdEmail className="box-content w-[10%]" size={25} />,
    text: "info@milliyfx.com",
  },

  {
    id: 4,
    icon: <MdTimeline className="box-content w-[10%]" size={25} />,
    text: "Monday-Friday 10am-7:30pm",
  },
  {
    id: 5,
    icon: <FaGlobeAsia className="box-content w-[10%]" size={25} />,
    text: "Find us on google maps",
  },
];
