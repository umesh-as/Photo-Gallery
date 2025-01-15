import axios from 'axios';

const commonAPI = async (httpMethod, url, regBody) => {
  const regConfig = {
    method: httpMethod,
    url,
    data: regBody,
  };

  try {
    const response = await axios(regConfig);
    return response;
  } catch (err) {
    // You can log the error or return it depending on your need
    return { error: err.message || 'An error occurred' };
  }
};

export default commonAPI;
