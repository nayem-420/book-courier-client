import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAxiosSecure = () => {
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    // REQUEST interceptor → token attach
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // RESPONSE interceptor → 401 / 403 handle
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          await logOut();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );

    // cleanup (important!)
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosInstance, logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;