import axios from "axios";

export const getAllUsersFromAPI = async () => {
  const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/accounts`;
  const token = localStorage.getItem("token");
  const res = await axios.get(backend_url, {
    headers: {
      Authorization: `${token}`,
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  return res;
};

export const deleteUserFromAPI = async (id) => {
  const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/accounts/${id}`;
  const token = localStorage.getItem("token");
  await axios.delete(backend_url, {
    headers: {
      Authorization: `${token}`,
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/accounts`, {
    headers: {
      Authorization: `${token}`,
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  return res;
};

export const updateUserFromAPI = async (id, body) => {
  const token = localStorage.getItem("token");
  const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/accounts`;
  await axios.put(`${backend_url}/${id}`, JSON.stringify(body), {
    headers: {
      Authorization: `${token}`,
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
    },
  });
  const res = await axios.get(backend_url, {
    headers: {
      Authorization: `${token}`,
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  return res;
};

export const getUserByIdFromAPI = async (id) => {
  const token = localStorage.getItem("token");
  const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/accounts/${id}`;
  const res = await axios.get(backend_url, {
    headers: {
      Authorization: `${token}`,
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  return res;
};
