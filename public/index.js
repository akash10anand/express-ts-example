async function setToken() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.text();
    window.localStorage.setItem("token", data);
    window.location.replace("/home");
    console.log(window.localStorage.getItem("token"));
  } catch (error) {
    console.error(error);
  }
}

function isLoggedIn() {
  if (window.localStorage.getItem("token") === null) {
    window.location.replace("/login");
  }
}

function clearToken() {
  window.localStorage.clear();
}
