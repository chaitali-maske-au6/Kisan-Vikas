// const axios = require('axios')
import axios from "axios";

const markups = {
  login: `
    <form class='login__form'>
      <input name='email' type='email' placeholder='Enter your Email' />
      <input name='password' type='password' placeholder='Enter your password' />
      <a href='http://localhost:3000/google' class='google-login' >Login via Google</a>
      <a href='http://localhost:3000/facebook' class='facebook-login' >Login via facebook</a>
      <input type='submit' value='Login' />
    </form>
  `,

  register: `
  <form class='register__form'>
    <input name='name' type='text' placeholder='Enter your name' />
    <input name='email' type='email' placeholder='Enter your email' />
    <input name='password' type='password' placeholder='Enter your password' />
    <a href='http://localhost:3000/google' class='google-register'>Register via Google</a>
    <a href='http://localhost:3000/facebook' class='facebook-register'>Register via facebook</a>
    <input type='submit'  class='user-register' value='Register' />
  </form>
`,

  dashboard: `
    <h1>You are successfully logged in</h1>
  `
};

const app = document.querySelector("#app");
const registerForm = document.querySelector(".user-register");
const loginForm = document.querySelector(".login__form");
const googleLogin = document.querySelector(".google-login");
const googleRegister = document.querySelector(".google-register");

const loadMarkUpFromHash = hash => {
  app.innerHTML = null;
  app.insertAdjacentHTML("afterbegin", markups[hash]);
};

const fetchUserProfile = () => {
  axios
    .get("http://localhost:3000/profile", {
      withCredentials: true
    })
    .then(res => console.log(res))
    .catch(err => {
      console.log(err);
      window.location.hash = "#login";
    });
};

if (window.location.hash) {
  loadMarkUpFromHash(window.location.hash.replace("#", ""));
  if (window.location.hash === "#dashboard") {
    fetchUserProfile();
  }
}

window.addEventListener("hashchange", e => {
  const currentHash = window.location.hash.replace("#", "");
  if (window.location.hash === "#dashboard") {
    fetchUserProfile();
  }
  loadMarkUpFromHash(currentHash);
});

if (registerForm) {
  registerForm.addEventListener("click", async e => {
    e.preventDefault();
    const {
      
      email,
      password,
      name
    } = e.target;
    try {
      const response = await axios.post("http://localhost:3000/register", {
        
        email: email.value,
        password: password.value,
        name: name.value,
        isThirdPartyUser: false
      });
      console.log(response);
      window.location.hash = "#login";
    } catch (err) {
      console.log(err);
      window.location.hash = "#";;
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async e => {
    const {
      email,
      password
    } = e.target;
    try {
      const response = await axios.post("http://localhost:3000/login", {
        password: password.value,
        email: email.value
      });
      console.log(response);
      window.location.hash = "#login";
    } catch (err) {
      console.log(err);
      alert("Some error has happened");
    }
  });
}
if (googleLogin) {
  googleLogin.addEventListener("click", async e => {
    e.preventDefault();
    console.log("Clicking");
  });
}