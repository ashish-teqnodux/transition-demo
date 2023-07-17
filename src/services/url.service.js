const ApiUrl = process.env.REACT_APP_API_URL;

const UrlParamsReplace = (url, params = {}) => {
  let urlWithPrefix = `${ApiUrl}${url}`;
  if (params) {
    Object.keys(params).forEach(
      (key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key]))
    );
  }
  return urlWithPrefix;
};

export const SYSTEM_ADMIN_LOGIN_URL = () => UrlParamsReplace("/auth/login");
export const GET_ALL_DATA = (size, page) =>
  UrlParamsReplace("/customers/get-all-cutomers?size=:size&page=:page", {
    size,
    page,
  });
