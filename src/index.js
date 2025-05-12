import { setCookies, getCookies, removeCookies } from './cookies';
import storage from '@kne/local-storage';

export const setToken = (tokenKey = 'X-User-Token', value, options) => {
  const { expires, sameDomain } = Object.assign({}, { sameDomain: true, expires: null }, options);
  if (sameDomain) {
    storage.setItem(tokenKey, value, expires ? expires * 1000 : null);
  } else {
    setCookies(tokenKey, value, expires);
  }
};

export const getToken = (tokenKey = 'X-User-Token', options) => {
  const { sameDomain } = Object.assign({}, { sameDomain: true }, options);
  if (sameDomain) {
    return storage.getItem(tokenKey);
  } else {
    return getCookies(tokenKey);
  }
};

export const removeToken = (tokenKey = 'X-User-Token', options) => {
  const { sameDomain } = Object.assign({}, { sameDomain: true }, options);
  if (sameDomain) {
    storage.removeItem(tokenKey);
  } else {
    removeCookies(tokenKey);
  }
};

const tokenStorage = {
  setToken,
  getToken,
  removeToken
};

export default tokenStorage;
