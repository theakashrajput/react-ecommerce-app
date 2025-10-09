import axios from "../../api/axiosConfig";
import { loadUser } from "../reducers/userSlice";

export const asyncGetUser = () => async (dispatch, getState) => {
  try {
    console.log("Current State: ", getState());
    const res = await axios.get("/", { withCredentials: true });
    console.log("User data", res.data.user);
    dispatch(loadUser(res.data.user));
  } catch (error) {
    console.log(error);
  }
};
