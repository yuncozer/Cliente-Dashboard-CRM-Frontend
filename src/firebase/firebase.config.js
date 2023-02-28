import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAtOPyjEJ7-Ha7Idork2-5OsHNzl6LgSXA",
  authDomain: "dashboard-crm-c787c.firebaseapp.com",
  projectId: "dashboard-crm-c787c",
  storageBucket: "dashboard-crm-c787c.appspot.com",
  messagingSenderId: "145116252635",
  appId: "1:145116252635:web:cd3963ba8abe45d24afffe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)