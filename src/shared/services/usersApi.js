import axios from "axios";

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency',
});

export const getAllUsers = async () => {
    const result = await instance.get(`api/v1/users`);
    console.log('result', result.data)
    return result.data;
}