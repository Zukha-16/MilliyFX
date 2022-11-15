import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
// import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Dzal7n-6SWqH74Ybxk1YPWaviPfSloI",
  authDomain: "milliyfx-e1a55.firebaseapp.com",
  projectId: "milliyfx-e1a55",
  storageBucket: "milliyfx-e1a55.appspot.com",
  messagingSenderId: "387024523950",
  appId: "1:387024523950:web:f108cb3bbea735bc41533f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Google auth




// Sign in with email and password

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

// register with email and password (not google)
const registerWithEmailAndPassword = async (name, phone, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      phone,
      image: "default",
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link has been sent successfuly!");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

const changeProfileInfo = async (user, data) => {
  const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  const document = await getDocs(q);
  const id = document.docs[0].id;
  const docRef = doc(db, "users", id);
  setDoc(docRef, data, { merge: true });
};

// const getUserImage = async (uid) => {
//   const storage = getStorage();
//   const imageRef = ref(storage, `users/${uid}`);
//   // Get the download URL
//   try {
//     const url = await getDownloadURL(imageRef);
//     return url;
//   } catch (error) {
//     switch (error.message) {
//       case "storage/object-not-found":
//         console.log("hello");
//         break;

//       default:
//         break;
//     }
//   }
// };

const fetchUser = async (uid) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    return data;
  } catch (err) {
    alert("An error occured while fetching user data");
  }
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  changeProfileInfo,
  fetchUser,
};
