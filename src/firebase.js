import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTZFUvUqRJK_s4yRY4RN_0_MAIbqQCx5Y",
  authDomain: "clone-of-disneyplus.firebaseapp.com",
  projectId: "clone-of-disneyplus",
  storageBucket: "clone-of-disneyplus.appspot.com",
  messagingSenderId: "951951934061",
  appId: "1:951951934061:web:b96fc394d80546da93f564",
  measurementId: "G-FF26J8Z9YZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new auth.GoogleAuthProvider();
const storage = getStorage();
export { auth, provider, storage };
export default db;
