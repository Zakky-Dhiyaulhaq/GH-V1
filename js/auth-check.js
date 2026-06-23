import { app } from "./firebase-config.js";
import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Blok seluruh halaman sebelum auth selesai
document.documentElement.style.display = "none";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Belum login → langsung tendang ke halaman login
        window.location.replace("index.html");
    } else {
        // Sudah login → tampilkan halaman
        document.documentElement.style.display = "";
    }
});