import axios from "axios";
import config from "@/config/config";

const { baseURL, port } = config;

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000, // 请求超时时间
  baseURL:
    process.env.REACT_APP_RUN_MODE === "mock" ? `${baseURL}:${port}` : "",
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 设置请求头 token等
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    // 设置统一响应错误信息
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
