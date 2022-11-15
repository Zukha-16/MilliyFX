import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { userLogOut } from "../../user/userSlice";
import { useSelector } from "react-redux";
// styles
import "./BurgerMenu.scss";

const BurgerMenu = ({ menuPosition, setMenuPosition }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (menuPosition) {
      document.body.classList.add("stop_scroll");
    } else {
      document.body.classList.remove("stop_scroll");
    }
  }, [menuPosition, user]);

  return (
    <div className="burger_menu_container">
      <button
        type="button"
        onClick={() => {
          setMenuPosition(!menuPosition);
        }}
        className="relative w-[30px] h-[25px] flex flex-col justify-between items-end z-[999] burger_menu_icon"
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
        <div className="h-[40%] w-full flex flex-col justify-start items-center vertical_fixer">
          <li className="links" style={{ animationDelay: "0.3s" }}>
            <NavLink
              end
              to={user.name ? "/user" : "/user/login"}
              style={{ animationDelay: `0.3s` }}
              onClick={() => setMenuPosition(false)}
            >
              {user.name ? user.name : "Login / Register"}
            </NavLink>
          </li>

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
          {user.name ? (
            <li className="links" style={{ animationDelay: "0.9s" }}>
              <Link
                to={"/"}
                onClick={() => {
                  dispatch(userLogOut());
                  setMenuPosition(false);
                }}
              >
                Logout
              </Link>
            </li>
          ) : null}
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

const list = [
  { name: "Home", link: "/" },
  { name: "News", link: "/news" },
  { name: "About us", link: "/about" },
  { name: "Education", link: "/education" },
  { name: "Find us", link: "/findus" },
];
