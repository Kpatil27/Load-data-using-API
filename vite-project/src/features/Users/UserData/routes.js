import { getRequest } from "../../../services/network";

export const getUserDetails = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = getRequest(url);
  return response === null ? {} : response;
};
