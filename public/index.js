function setToken() {
  window.localStorage.setItem("token", "123456");
  window.location.replace("/home");
  console.log(window.localStorage.getItem("token"));
}

function isLoggedIn() {
  if (window.localStorage.getItem("token") === null) {
    window.location.replace("/login");
  }
}

function clearToken() {
  window.localStorage.clear();
}