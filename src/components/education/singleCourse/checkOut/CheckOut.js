import { FaStripeS } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_API_KEY);
  }
  return stripePromise;
};

function CheckOut() {
  const [stripeError, setStripeError] = useState(null);
  const [stripeLoading, setStripeLoading] = useState(false);
  const { singleCourse } = useSelector((state) => state.courses);
  
  const item = {
    price: singleCourse.checkoutUrl,
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/user`,
    cancelUrl: `${window.location.origin}/education`,
  };

  const redirectToCheckout = async () => {
    setStripeLoading(true);
    console.log("Redirecting to checkout!");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    if (error) setStripeError(error);
    setStripeLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <button
      className="flex flex-row items-center gap-2 border-2 border-primaryBlue py-2 w-full lg:w-40 mt-6 lg:mt-0 justify-center rounded-lg text-primaryBlue hover:bg-primaryBlue hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:animate-pulse xl:text-xl xl:w-52"
      onClick={redirectToCheckout}
      disabled={stripeLoading}
    >
      <FaStripeS />
      {stripeLoading ? "Redirecting..." : "BUY NOW"}
    </button>
  );
}

export default CheckOut;
