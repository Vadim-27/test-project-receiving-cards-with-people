import axios from "axios";

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency',
});

export const getAllUsers = async (count = 6) => {
  const result = await instance.get(`api/v1/users?page=1&count=${count}`);
  console.log('result', result.data);
  return result.data;
};