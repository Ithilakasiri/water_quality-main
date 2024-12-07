// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyDYUsVIgr7gCL3D1S5dhwyDc6K-aP31sXA",
//   authDomain: "waterquality-ba0bb.firebaseapp.com",
//   databaseURL: "https://waterquality-ba0bb-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "waterquality-ba0bb",
//   storageBucket: "waterquality-ba0bb.appspot.com",
//   messagingSenderId: "654440423465",
//   appId: "1:654440423465:web:8e7694398bd773f3343c38",
//   measurementId: "G-QSVJTQQ3RD"
// };

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCiAYUgp9KftTUXjZhyYBn1PuRWDoPG83U",
  authDomain: "wqms-3552c.firebaseapp.com",
  databaseURL: "https://wqms-3552c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wqms-3552c",
  storageBucket: "wqms-3552c.firebasestorage.app",
  messagingSenderId: "676704037565",
  appId: "1:676704037565:web:f4ce2c63e85589daf125d4",
  measurementId: "G-S0FN4FKZ8P"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
