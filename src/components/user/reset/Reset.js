import { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../../firebase";
import Loader from "../../loader/Loader";
function Reset() {
  const email = useRef();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) navigate("/");
    // eslint-disable-next-line
  }, []);

  const resetHandler = (event) => {
    event.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.current.value.match(validRegex)) {
      sendPasswordReset(email.current.value).then(() => {
        navigate("/user/login");
      });
      email.current.value = "";
    } else {
      alert("Please enter the correct email address!");
    }
  };
  const inputStyle =
    "rounded-none mb-4 text-xl bg-transparent border-b-2 border-secondary p-2 outline-none focus:border-primaryBlue transition-all duration-300 ease-in-out";
  return (
    <main className="flex justify-center items-center min-h-[calc(100vh-9rem)] text-white mt-20">
      <div className="bg-secondaryBg w-full rounded py-6 px-4 md:max-w-[640px] border-secondary border">
        <h1 className="text-2xl text-center mb-6">Reset password</h1>
        {loading ? (
          <Loader />
        ) : (
          <form className="flex flex-col">
            <input
              ref={email}
              className={inputStyle}
              placeholder="Email address"
              type="email"
            />
            <button
              className="border-2 rounded py-2 text-lg border-primaryPurple text-primaryPurple hover:bg-primaryPurple transition-all duration-300 ease-in-out hover:text-white my-4"
              onClick={(event) => {
                resetHandler(event);
              }}
            >
              Send reset link
            </button>
          </form>
        )}
        <div className="text-base flex flex-col justify-center items-start gap-3 mt-4 md:flex-row md:justify-between">
          <p className="text-secondary">
            Don't have an account{" "}
            <button
              className="fx_effect"
              onClick={() => {
                navigate("/user/register");
              }}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Reset;
