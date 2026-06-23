import { app } from "./firebase-config.js";

import {
    getAuth,
    signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

window.login = function () {

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    signInWithEmailAndPassword(
        auth,
        email,
        password
    )

    .then((userCredential) => {

        errorMessage.textContent = "";
        sessionStorage.setItem('gh_authed', '1');
        window.location.href = "dashboard.html";

    })

    .catch((error) => {

        errorMessage.textContent =
            "Anda salah memasukkan email atau password!";

    });

}