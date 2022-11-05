import logo from "../../assets/logo_no_label.png";
import "./Loader.scss";

function Loader() {
  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={logo}
        alt="loader"
        width={100}
        height={100}
        className="loader_effect"
      />
    </div>
  );
}

export default Loader;
