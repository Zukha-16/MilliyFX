import { useRef, useEffect } from "react";
import Container from "../container/Container";
import "./ContactUs.scss";
import { MdCall, MdEmail, MdSupportAgent } from "react-icons/md";

function ContactUs() {
  const fullname = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const message = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name: fullname.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
      message: message.current.value,
    };
    fullname.current.value = "";
    email.current.value = "";
    phoneNumber.current.value = "";
    message.current.value = "";
    console.log(formData);
  };
  return (
    <>
      <div className="find_us_bg "></div>
      <Container>
        <div className="-mt-[50vh] 2xl:-mt-[40vh] text-white">
          <h1 className="text-center text-3xl" id="contact_form">
            Contact Us
          </h1>
          <h3 className="text-center text-secondary">
            Get in touch now to start building your future. Make money work for
            you!
          </h3>
          <form
            className="mx-auto mt-10  border text-white bg-secondaryBg border-secondary rounded-md flex flex-col justify-center items-center py-6 px-4 gap-4 max-w-lg"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-xl text-white">Get in touch</h3>
            <div className="w-full flex flex-col ">
              <label htmlFor="fullname">Full name</label>
              <input
                ref={fullname}
                type="text"
                name="fullname"
                placeholder="Milliy FX"
                className="p-2 rounded-md outline-none bg-transparent border border-secondary focus:border-primaryBlue transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="w-full flex flex-col ">
              <label htmlFor="fullname">Your email</label>
              <input
                ref={email}
                type="email"
                name="email"
                placeholder="name@milliyfx.com"
                className="p-2 rounded-md outline-none bg-transparent border border-secondary focus:border-primaryBlue transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="w-full flex flex-col ">
              <label htmlFor="fullname">Phone number</label>
              <input
                ref={phoneNumber}
                type="text"
                name="phone_number"
                placeholder="+998 99 999-99-99"
                className="p-2 rounded-md outline-none bg-transparent border border-secondary focus:border-primaryBlue transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="w-full flex flex-col ">
              <label htmlFor="fullname" className="text-secondary">
                Your message
              </label>
              <textarea
                ref={message}
                name="comment"
                placeholder="Leave a comment..."
                className="p-2 rounded-md outline-none bg-transparent border border-secondary focus:border-primaryBlue transition-all duration-300 ease-in-out h-24"
              />
            </div>
            <p className="text-secondary text-sm">
              By submitting this form you agree to our terms and conditions and
              our privacy policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </p>

            <button
              className="py-2 w-full text-white bg-primaryBlue hover:bg-opacity-60 transition-all duration-200 ease-in-out hover:cursor-pointer rounded-md"
              type="submit"
            >
              Sumbit
            </button>
          </form>
        </div>

        {/* Contact us info */}
        <div className="mt-40 mb-24  text-white flex flex-col justify-center items-center gap-12 md:flex-row md:gap-0 md:justify-around">
          <div className="flex flex-col justify-center items-center md:w-[30%]">
            <MdCall
              size={45}
              className="bg-secondaryBg p-4 box-content rounded-lg hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-primaryGreen text-secondary"
            />
            <h3 className="text-2xl font-medium my-3">Email us</h3>
            <p className="text-secondary text-center mb-3">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <p className="text-primaryBlue py-2 font-medium">
              info@milliyfx.com
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-[30%]">
            <MdEmail
              size={45}
              className="bg-secondaryBg p-4 box-content rounded-lg hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-primaryBlue text-secondary"
            />
            <h3 className="text-2xl font-medium my-3">Call us</h3>
            <p className="text-secondary text-center mb-3">
              Call us to speak to a member of our team. We are always happy to
              help
            </p>
            <p className="text-primaryBlue py-2 font-medium">
              +998 99 999-99-99
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-[30%]">
            <MdSupportAgent
              size={45}
              className="bg-secondaryBg p-4 box-content rounded-lg hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-primaryPurple text-secondary"
            />
            <h3 className="text-2xl font-medium my-3">Support</h3>
            <p className="text-secondary text-center mb-3">
              Email us for general inquires, including marketing and partnership
              opportinities
            </p>
            <a
              href="#contact_form"
              className="border rounded-lg py-2 max-w-[175px] w-full text-center text-primaryBlue border-primaryBlue hover:text-white hover:scale-110 hover:bg-primaryBlue transition-all duration-300 ease-in-out font-medium"
            >
              Email support
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ContactUs;
