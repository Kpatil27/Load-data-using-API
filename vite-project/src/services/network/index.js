import axios from "axios";

export const getRequest = async (url) => {
 
    const res = await axios.get(url);

  
    const result = res.status === 200 ? res.data : null;
    return result;
  
};

export const postRequest = async (url, payload) => {
 
    const res = await axios.post(url, payload);

    
    const { status, data } = res;
    return status === 200 || status === 201 ? data : null;
 
};
