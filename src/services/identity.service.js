export const getAuth = () => {
  let auth = localStorage.getItem("AUTH");
  return JSON.parse(auth);
};

export const setAuth = (authObj) => {
  let auth = JSON.stringify(authObj);
  localStorage.setItem("AUTH", auth);
  return auth;
};
