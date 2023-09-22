import axios from 'axios';
import { getToken } from '../utils/token';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;


export const getAttractions = async () => {
  return axios.get('/views')
}

export const getCollects = async (id) => {
  getToken();
  return axios.get(`/600/users/${id}/collects`)
}

export const deleteCollect = async (id) => {
  getToken();
  return axios.delete(`/600/collects/${id}`)
}

export const getAttraction = async (id) => {
  return axios.get(`/views/${id}`)
}

export const signUp = async (data) => {
  return axios
  .post("/register", data)
}

export const login = async (data) => {
  return axios
  .post("/login", data)
}

export const collect = async (data)=>{
  getToken();
  return axios
  .post("/600/collects", data)
}

export const addAttraction = async (data)=>{
  getToken();
  return axios
  .post("/600/views", data)
}

export const editAttraction = async (data, id)=>{
  getToken();
  return axios
  .patch(`/600/views/${id}`, data)
}

export const deleteAttraction = async (id)=>{
  getToken();
  return axios
  .delete(`/600/views/${id}?_expand=user`)
}