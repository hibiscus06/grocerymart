import { ACTION_TYPE } from "../constant/actionType";

const initialState = {
  name: "Rudrika",
  email: "rudrikasingh1856@gmail.com",
  password: "1234",
};

const loginReducer = (state = initialState, action) => {
  const data = localStorage.getItem("user");

  return true;
};

export default loginReducer;
