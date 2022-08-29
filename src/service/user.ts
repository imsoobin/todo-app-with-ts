import axios from "axios";
import { ApiState, LoginState } from "../model/type";
export const submitAccount = (data: Partial<LoginState & ApiState>) => {
  return axios({
    url: `${process.env.REACT_APP_HOST}${data.url}`,
    method: data?.method,
    data,
  });
};
