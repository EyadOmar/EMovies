import api from './apiConfig';
import axios from 'axios';
import queryString from 'query-string';

const configHttps = {
  headers: {
    'Content-tpye': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  },
};

const axiosClient = axios.create({
  method: 'GET',
  baseURL: api.baseUrl,
  https: configHttps,
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: api.apiKey }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
