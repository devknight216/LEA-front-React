import axios from "axios";

const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api`;

//Contact US API
export const contactus = (requestbody) => {
  axios.post(backend_url + "email/contact-us", requestbody, {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
};

//Email Verify API
export const emailVerify = async (token) => {
  return await axios.get(`${backend_url}/users/verify/${token}`);
};

//Link Stripe account
export const stripeAccount = async (token) => {
  return await axios.post(`${backend_url}/users/stripe_account`);
};

export const stripeLink = async (token, body) => {
  return await axios.post(`${backend_url}/users/stripe_link`, JSON.stringify(body));
};
export const stripeCheck = async (token) => {
  return await axios.post(`${backend_url}/users/stripe_check`);
};

//Upload Avatar
export const saveAvatarUrlToBackend = async (id, url, token) => {
  return await axios.post(backend_url + "accounts/avatar", {
    userId: id,
    avatarURL: url,
  });
};

//Payment intent
export const paymentIntent = async (body, token) => {
  return await axios.post(backend_url + "payment/payment-intent", JSON.stringify(body));
};
