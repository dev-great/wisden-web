import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { refreshToken } from "../services/api";
import { getCookie } from "../utils/utils";

interface QueueItem {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: QueueItem[] = [];

const processQueue = (error: unknown = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(
        axiosInstance.defaults.headers.common["Authorization"] as string
      );
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // For logout specifically, add refresh token from cookies
    if (config.url?.includes("logout/") || config.url?.includes("refresh/")) {
      const refreshToken = getCookie("refresh_token");
      if (refreshToken) {
        config.headers["Set-Cookie"] = `refresh_token=${refreshToken}`;
        // OR if your backend expects it differently:
        // config.headers['X-Refresh-Token'] = refreshToken;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await refreshToken();

        const { access } = response.data.auth;
        localStorage.setItem("accessToken", access);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access}`;
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${access}`;
        }

        processQueue();
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// HTTP Methods
export const http = {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.get(url, config);
  },

  post: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.post(url, data, config);
  },

  patch: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.patch(url, data, config);
  },

  put: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.put(url, data, config);
  },

  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.delete(url, config);
  },
};

export default axiosInstance;