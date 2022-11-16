import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      id: 1,
      name: "Premium course",
      image: "premium",
      highlightWord: "PREMIUM",
      content:
        " - guarantees a premium approach to each student, where the basic knowledge will be supplemented by the study of effective trading strategies, under the strict guidance of our experienced mentors. The package includes the basic theory and a 2-month intensive course.",
      position: "left",
      checkoutUrl: "price_1M4oEILve5qdt85VTdgppX4V",
    },
    {
      id: 2,
      name: "Premium pro course",
      image: "premium_pro",
      highlightWord: "PREMIUM PRO",
      content:
        " is a course focused on individual training with a mentor who is a high-class active trader. One of the powerful bonuses for those who buy this package will be access to 3 completely new trading theories, including a new scalping method.",
      position: "right",
      checkoutUrl: "price_1M4pMvLve5qdt85VYSOiV2Pi",
    },
    {
      id: 3,
      name: "Pro course",
      image: "pro",
      highlightWord: "PRO",
      content:
        " - a training course from the founder of Milliy Fx - Rahmonjon Shadiev, which includes the study of effective strategies developed by the fund under his management. The main advantage of this package is that it includes a comprehensive program based on all 4 main training packages.",
      position: "left",
      checkoutUrl: "price_1M4pOrLve5qdt85VAfPad7Lo",
    },
  ],
  featuredCourse: {
    id: 4,
    name: "Basic course",
    image: "basic",
    highlightWord: "Basic",
    content:
      " - master the basic knowledge and skills of stock trading offline, with additional online resources: video courses, a library and webinars twice a week.",
  },
  singleCourse: {},
};

// const basicInfo = {
//   description:
//     "The basic package helps you get familiar with the basics of the market and provides fundamental knowledge in trading.",

//   target:
//     "The course ideally firs for anybody with zero or with some of knowledge about forex market!",

//   includedItems: [
//     "Trader's Hall - telegram group",
//     "Mentor Analysis - telegram group",
//     "Blog (Blog) 'MilliyFX' - telegram group",
//     "Online video courses - (Uzbek, Russian, English)",
//     "LiveTrading Light (LT) - exclusive webinar with mentors trade in the real market with you.",
//   ],
//   price: 0,
//   rate: 4,
// };

const premiumInfo = {
  description:
    "The package guarantees an individual approach to each client. In addition to the fundamental concept of the market, our mentors will also teach you trading strategies and introduce you to topics for in-depth market research.",

  target:
    "This course is ideal for traders who want to improve their professional level under the guidance of qualified mentors.",

  includedItems: [
    "All telegram chanels",
    "'Milliy FX' - Basic course",
    "Live Trading Pro",
    "Theory - 2 months",
    "Practise - 10 months",
  ],
  price: 999.99,
  rate: 5,
};

const premiumProInfo = {
  description:
    "Ready-made strategies and personal mentoring, which you will receive in the Pro package. This will help you get maximum results in the shortest time.",

  target:
    "You receive a full premium with pro approach level mentoring, the maximum individual approach that will lead you to the maximum earnings after the first lessons.",

  includedItems: [
    "'Milliy FX' - Basic course",
    "'MilliyFX' - Premium",
    "All telegram chanels",
    "Live Trading Pro",
    "One to one mentorship",
  ],
  price: 1999.99,
  rate: 4,
};

const ProInfo = {
  description:
    "A training course from the founder of Milliy Fx - Rahmonjon Shadiev, which includes the study of effective strategies developed by the fund under his management. The main advantage of this package is that it includes a comprehensive program based on all 4 main training packages.",

  target:
    "You receive a full Pro level mentoring, the maximum individual approach that will lead you to the maximum earnings after the first lessons.",

  includedItems: [
    "'Milliy FX' - Basic course",
    "'MilliyFX' - Premium",
    "All telegram chanels",
    "Live Trading Pro",
    "One to one mentorship with Rahmonjon Shadiev",
  ],
  price: 2999.99,
  rate: 5,
};

const getSingleCourse = (localData, id) => {
  const data = localData.courses.filter((item) => item.id === id);
  switch (id) {
    case 1:
      return { ...data[0], ...premiumInfo };
    case 2:
      return { ...data[0], ...premiumProInfo };
    case 3:
      return { ...data[0], ...ProInfo };
    default:
      break;
  }
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    fetchSingleCourse: (state, action) => {
      state.singleCourse = getSingleCourse(current(state), +action.payload);
    },
  },
});

const { actions, reducer } = coursesSlice;
export default reducer;
export const { fetchSingleCourse } = actions;
