import axios from "axios";

export function saveUserService(_newUser) {
  delete _newUser.c_password;
  console.log(_newUser);
  let url = "http://localhost:3004/users";
  return axios.post(url, _newUser);
}

export function makeLoginService(loginUser) {
  let userName = loginUser.username.current.value;
  let password = loginUser.password.current.value;
  let url = `http://localhost:3004/users?email=${userName}&password=${password}`;
  return axios.get(url);
}
