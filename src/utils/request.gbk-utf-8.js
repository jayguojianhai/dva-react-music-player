import fetch from 'dva/fetch';
// import { stringify } from 'qs';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: response.statusText,
  });
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function eventPromise(res) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = reader.result;
      try {
        resolve(JSON.parse(text));
      } catch (e) {
        reject(e);
      }
    };
    reader.readAsText(res, 'GBK');
  });
}
async function ajax(url2, newOptions) {
  const response = await fetch(url2, newOptions);
  checkStatus(response);
  const res = await response.blob();
  const data = await eventPromise(res);
  return data;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const url2 = `${CONFIG.bumng}/data/pc_benefit/default${url}`;
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      ...newOptions.headers,
    };
    newOptions.body = stringify(newOptions.body);
  }
  return ajax(url2, newOptions);
}
