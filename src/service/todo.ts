import axios from "axios";
import { TodoState } from "../model/type";
const TOKEN = localStorage.getItem("token");

export const findTodoList = () => {
  return axios({
    url: process.env.REACT_APP_HOST + "/DTodo/find",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    method: "POST",
  });
};

export const createTodoItem = (data: Partial<TodoState>) => {
  return axios({
    url: process.env.REACT_APP_HOST + "/DTodo/create",
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    data: data,
  });
};

export const updateTodoItem = (data: Partial<TodoState>) => {
  return axios({
    url: process.env.REACT_APP_HOST + "/DTodo/update",
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    data: data,
  });
};

export const deleteTodoItem = (data: Partial<TodoState>) => {
  return axios({
    url: process.env.REACT_APP_HOST + "/DTodo/delete",
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    data,
  });
};
