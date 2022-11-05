import logo from "../../assets/logo_no_label.png";
import Container from "../container/Container";
import "./Footer.scss";

import { BsTelegram, BsWhatsapp, BsDiscord, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const list = [
    { name: "Home", link: "/" },
    { name: "News", link: "/news" },
    { name: "About us", link: "/about" },
    { name: "Education", link: "/education" },
    { name: "Support", link: "/support" },
    { name: "Profile", link: "/profile" },
  ];

  return (
    <div className="footer_bg py-8 text-white mt-16">
      <Container>
        <div className="md:flex gap-4 items-center">
          <div className="text-center md:w-[40%]">
            <img
              className="m-auto"
              src={logo}
              alt="Milliy FX"
              width={100}
              height={100}
            />
            <label
              className="text-sm"
              htmlFor="img"
              style={{ letterSpacing: "1px" }}
            >
              Milliy <span className="fx_effect">FX</span>
            </label>
            <p className="mt-4 text-primaryPurple">
              We create possibilities to change your life for the better
            </p>
          </div>

          <div className="sm:flex sm:my-6 md:my-2 md:w-[60%] lg:justify-around ">
            <div className="w-full my-4 sm:my-0 text-center sm:text-left md:w-[40%] lg:w-[40%]">
              <h2 className="text-xl mb-2">Quick links</h2>
              <ul>
                {list.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="hover:text-primaryPurple hover:cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      <li>{item.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="w-full flex flex-col md:w-[70%] lg:w-[50%] xl:w-[40%]">
              <h2 className="text-xl">Follow us</h2>
              <ul className="flex justify-evenly sm:justify-between social_media my-4 ">
                <Link>
                  <li>
                    <BsInstagram className="text-[rgba(255,255,255,0.8)] hover:text-instagramHover hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" />
                  </li>
                </Link>
                <Link>
                  <li>
                    <BsTelegram className="text-[rgba(255,255,255,0.8)] hover:text-telegramHover hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" />
                  </li>
                </Link>
                <Link>
                  <li>
                    <BsWhatsapp className="text-[rgba(255,255,255,0.8)] hover:text-whatsappHover hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" />
                  </li>
                </Link>
                <Link>
                  <li>
                    <BsDiscord className="text-[rgba(255,255,255,0.8)] hover:text-discordHover hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h3 className="text-lg text-center mt-6">Disclaimer</h3>
        <p className="text-[rgba(255,255,255,0.8)] text-justify">
          We are aware there are numerous websites and social media platforms
          attempting to impersonate us with efforts to get the public to send
          them money. Please note we do not accept investments from the public,
          nor would we ask you to send money via cryptocurrency. We do not offer
          daily, weekly or monthly returns. We are not FCA regulated and we do
          not take any investments nor give financial advice.
        </p>
        <p
          className="mt-4 text-center text-xs text-[rgba(255,255,255,0.8)]"
          style={{ letterSpacing: "1px" }}
        >
          Milliy<span className="fx_effect ">FX </span>© 2022 all rights
          reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
