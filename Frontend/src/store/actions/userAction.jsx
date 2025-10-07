import axios from "../../api/axiosConfig";
import { loadUsers } from "../reducers/userSlice";

export const asyncGetUsers = () => async (dispatch, getState) => {
  try {
    console.log("Current State: ", getState());
    const res = await axios.get("/users");
    dispatch(loadUsers(res.data));
  } catch (error) {
    console.log(error);
  }
};
