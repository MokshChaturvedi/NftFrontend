import axios from 'axios'
import constant from '../constants/constants'
const BASE_URL = constant.BACKEND_URL;

export const getWithoutToken = async (apiPath) => {
  try {
    let res = await axios.get(BASE_URL + apiPath)
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}

export const getWithToken = async (apiPath) => {

  const headers = {
    'Authorization': "Bearer " + localStorage.getItem("accessToken"),
    'Content-Type': 'application/json'
  }

  try {
    let res = await axios.get(BASE_URL + apiPath, { headers: headers })
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}

export const postWithoutToken = async (apiPath, bodyData) => {
  try {
    let res = await axios.post(BASE_URL + apiPath, bodyData)
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}

export const postWithToken = async (apiPath, bodyData) => {

  const headers = {
    'Authorization': "Bearer " + localStorage.getItem("accessToken"),
    'Content-Type': 'application/json'
  }

  try {
    console.log("apiPath",apiPath)
    let res = await axios.post(BASE_URL + apiPath, bodyData, { headers: headers })
    console.log("res",res)
    let data = res.data;
    console.log("get collection", data);
    return data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}


export const addWalletData = async (apiPath, bodyData) => {

  const headers = {
    'Authorization': "Bearer " + localStorage.getItem("accessToken"),
    'Content-Type': 'application/json'
  }
  console.log("72============", headers)

  try {
    let res = await axios.post(BASE_URL + apiPath, bodyData, { headers: headers })
    console.log("headers", headers)
    console.log(res, "res");
    let data = res;
    return data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

// function addWalletData(apiName, data) {
//   let tokenObj = localStorage.getItem('token');
//    return  axios({
//        method: 'POST',
//        url: `${this.link()+apiName}`,
//        headers: { 'Content-Type': 'application/json','Authorization':`Bearer ${tokenObj}` },
//        data: data
//    }).then(  (handleResponse) => {
//        console.log("----sever----", handleResponse);
//        return handleResponse;
//    });
// };


export const putWithToken = async (apiPath, bodyData) => {

  const headers = {
    'Authorization': "Bearer " + localStorage.getItem("accessToken"),
    'Content-Type': 'application/json'
  }

  try {
    let res = await axios.put(BASE_URL + apiPath, bodyData, { headers: headers })
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}
