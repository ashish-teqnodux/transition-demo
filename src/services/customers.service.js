import * as HttpService from "./http.service";
import { GET_ALL_DATA, SYSTEM_ADMIN_LOGIN_URL } from "./url.service";

export const adminLogin = (data) => {
  return HttpService.postWithOutAuth(SYSTEM_ADMIN_LOGIN_URL(), data);
};

export const getAllData = (token, size, page) => {
  return HttpService.getWithAuth(GET_ALL_DATA(size, page), token);
};
