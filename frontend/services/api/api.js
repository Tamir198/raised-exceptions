import axios from "axios";

import { API_URLS } from "../../constants/url.js";

const baseURL = API_URLS.SERVER_BASE_ADDRESS;

export const Api = axios.create({
  baseURL,
});
