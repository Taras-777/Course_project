import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:8088";

const baseAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

baseAxios.interceptors.request.use(
  (config) => {
    console.log(
      `Method: ${config.method.toUpperCase()}\n` +
        `URL: ${BASE_URL}${config.url}\n` +
        `Params: ${JSON.stringify(config.params)}\n` +
        `Time: ${new Date().toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const startupsApi = {
  getStartups: (filters) =>
    baseAxios.get("/startups", {
      params: {
        filters: filters,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    }),

  getStartupTypes: () => baseAxios.get("/startups/types"),

  createStartup: (startup) =>
    baseAxios.post("/startups", {
      name: startup.name,
      dateOfFoundation: startup.dateOfFoundation,
      incubator: startup.incubator,
      type: startup.type,
      entranceFee: startup.entranceFee,
    }),

  editStartup: (startup) =>
    baseAxios.put("/startups", {
      id: startup.id,
      name: startup.name,
      dateOfFoundation: startup.dateOfFoundation,
      incubator: startup.incubator,
      type: startup.type,
      entranceFee: startup.entranceFee,
    }),

  deleteStartup: (id) => baseAxios.delete(`/startups/${id}`),
};

export default startupsApi;
