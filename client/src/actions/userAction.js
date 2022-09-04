import axios from "axios";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    console.log("user actions success");

    const res = await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.data });
  } catch (error) {
    console.log("user actions fail");

    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED" });
  }
};

export const logoutUser = (user) => dispatch =>{
 localStorage.removeItem('currentUser');
 window.location.href = '/login'
}