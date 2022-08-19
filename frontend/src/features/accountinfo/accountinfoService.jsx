import axios from "axios";

const API_URL = "/api/accounts/";

const createAccountinfo = async (accountinfoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, accountinfoData, config);
  return res.data;
};

const getAccountinfos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);
  return res.data;
};

const deleteAccountinfo = async (accountinfoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(API_URL + accountinfoId, config);
  return res.data;
};

const accountinfoService = {
  createAccountinfo,
  getAccountinfos,
  deleteAccountinfo,
};

export default accountinfoService;
