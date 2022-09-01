import { getRequest } from "../../../services/network";


export const getAllUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = getRequest(url);
  return response === null ? [] : response;
};
