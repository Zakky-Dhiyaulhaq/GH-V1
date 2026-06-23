import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7AEvowZOLhz2xtAcfzhOv21nZMWxiTuM",
  authDomain: "greenhouse-padmawidya.firebaseapp.com",
  databaseURL: "https://greenhouse-padmawidya-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "greenhouse-padmawidya",
  storageBucket: "greenhouse-padmawidya.firebasestorage.app",
  messagingSenderId: "765552204530",
  appId: "1:765552204530:web:81db374c404b29c94c8e6b"
};

export const app = initializeApp(firebaseConfig);