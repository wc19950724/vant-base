import { Api } from "./Api";

const api = new Api({
  baseURL: "https://mock.apifox.com/m1/3608844-0-default",
});

api.instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
