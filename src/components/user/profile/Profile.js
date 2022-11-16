import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// loader and default image
import Loader from "../../loader/Loader";
import defualtImage from "../../../assets/add_image.png";
import "./Profile.scss";
// firebase
import { auth, changeProfileInfo, fetchUser } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout } from "../../../firebase";
// redux
import { useDispatch } from "react-redux";
import { userChangeInfo, userLogOut, userLoggingError } from "../userSlice";
import { useSelector } from "react-redux";

function Profile() {
  const [changeProfile, setChangeProfile] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [imageLable, setImageLabel] = useState("Click to update your image");

  const { user: localUser, userLoadingStatus } = useSelector(
    (state) => state.user
  );

  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Create a reference with an initial file path and name
  const submitHandler = (e) => {
    const data = { name, phone };
    e.preventDefault();
    changeProfileInfo(user, data)
      .then(() => dispatch(userChangeInfo(data)))
      .then(() => setChangeProfile(false))
      .catch((error) => dispatch(userLoggingError(error)));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) navigate("/user/login");

    if (user) fetchUser(user.uid);

    if (user) {
      if (localUser.name) {
        setName(localUser?.name);
        setPhone(localUser?.phone);
      } else {
        fetchUser(user.uid);
      }
    }
    // eslint-disable-next-line
  }, [user]);

  const uploadImageHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const inputStyle =
    "w-full rounded-none mb-2 text-lg bg-transparent border-b-2 border-secondary p-1 outline-none focus:border-primaryBlue transition-all duration-300 ease-in-out";
  return (
    <div className="bg-secondaryBg w-full p-4 rounded max-w-[350px] mt-12">
      <h2 className="text-2xl text-center mb-6">Profile</h2>
      <img
        src={!localUser.image === "default" ? localUser.image : defualtImage}
        alt="User"
        width={200}
        height={200}
        className="mx-auto rounded-full border-8 border-primaryPurple transition-all duration-300 ease-in-out hover:border-primaryGreen hover:cursor-pointer"
      />
      {userLoadingStatus === "loading" ? (
        <Loader />
      ) : changeProfile ? (
        <form className="mt-8 text-lg">
          <label class="block mb-2 text-sm text-secondary " htmlFo="file_input">
            Upload your image
          </label>
          <input
            class="block w-full text-sm text-white bg-transparent rounded-md border-2 border-secondary cursor-pointer focus:outline-none"
            id="file_input"
            type="file"
          />

          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="file_input"
          >
            Upload file
          </label>
          <input
            class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />

          <input
            className={inputStyle}
            placeholder="Full name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <input
            className={inputStyle}
            placeholder="Phone number"
            type="text"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />

          <button
            className="w-full max-w-[350px] border-2 rounded py-2 border-primaryGreen text-primaryGreen hover:bg-primaryGreen transition-all duration-300 ease-in-out hover:text-white mt-4"
            onClick={(event) => {
              submitHandler(event);
            }}
          >
            Save
          </button>
        </form>
      ) : (
        <div className="mt-8 text-lg">
          <div className="flex justify-start gap-4 mb-4">
            <p>Name:</p>
            <p>{localUser.name}</p>
          </div>
          <div className="flex justify-start gap-4 mb-4">
            <p>Email:</p>
            <p>{localUser.email}</p>
          </div>
          <div className="flex justify-start gap-4 mb-4">
            <p>Phone:</p>
            <p>{localUser.phone}</p>
          </div>
          <button
            className="w-full max-w-[350px] border-2 rounded py-2 border-primaryPurple text-primaryPurple hover:bg-primaryPurple transition-all duration-300 ease-in-out hover:text-white mt-4"
            onClick={() => {
              setChangeProfile(true);
            }}
          >
            Edit
          </button>
          <button
            className="w-full max-w-[350px] border-2 rounded py-2 border-primaryBlue text-primaryBlue hover:bg-primaryBlue transition-all duration-300 ease-in-out hover:text-white mt-4"
            onClick={(e) => {
              e.preventDefault();
              dispatch(userLogOut());
              logout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
