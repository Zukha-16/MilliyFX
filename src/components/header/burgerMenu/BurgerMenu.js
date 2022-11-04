import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./BurgerMenu.scss";
import me from "../../../assets/me.jpg";
const BurgerMenu = ({ menuPosition, setMenuPosition }) => {
  const list = [
    { name: "Home", link: "/" },
    { name: "News", link: "/news" },
    { name: "About us", link: "/about" },
    { name: "Education", link: "/education" },
    { name: "Support", link: "/support" },
  ];

  useEffect(() => {
    if (menuPosition) {
      document.body.classList.add("stop_scroll");
    } else {
      document.body.classList.remove("stop_scroll");
    }
  }, [menuPosition]);

  return (
    <div className="burger_menu_container">
      <button
        type="button"
        onClick={() => {
          setMenuPosition(!menuPosition);
        }}
        className='relative w-[30px] h-[25px] flex flex-col justify-between items-end z-50 burger_menu_icon'
      >
        <span className={`menu_stick_1 ${menuPosition ? "open" : ""} `}></span>
        <span className={`menu_stick_2 ${menuPosition ? "open" : ""} `}></span>
        <span className={`menu_stick_3 ${menuPosition ? "open" : ""} `}></span>
      </button>

      <ul
        className={`nav_list fixed top-0 right-0 z-50 h-screen w-[70vw] sm:w-[50vw] flex flex-col justify-evenly text-center text-white text-xl ${
          menuPosition ? "nav_open" : "nav_close"
        }`}
      >
        <li className="h-[30%] w-full flex flex-col justify-around items-center border-y-2 border-primaryPurple vertical_hider">
          <Link to="/">
            <img
              src={me}
              alt="User"
              width={200}
              height={200}
              className="border-8 border-primaryPurple rounded-full hover:border-2 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </Link>
          <Link to="/" className="hover:cursor-pointer">
            <h3>Zukhriddin Mekhrullaev</h3>
          </Link>
        </li>
        <div className="h-[40%] w-full flex flex-col justify-start items-center vertical_fixer">
          {list.map((item, index) => {
            return (
              <li
                className="links"
                key={item.name}
                style={{ animationDelay: `0.${index + 1 * 3}s` }}
              >
                <NavLink
                  end
                  to={item.link}
                  onClick={() => setMenuPosition(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </div>
        <div className="fixed w-full text-center text-base left-0 bottom-[5px] copyright ">
          <p>
            © 2022 <span className="fx_effect">MilliY FX</span>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default BurgerMenu;
