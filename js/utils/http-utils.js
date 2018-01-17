import axios from 'react-native-axios';
import { getApiUrl, getEnvironment } from './environment-utils';
import { getCookie } from './cookie-utils';
import { PENDING, SUCCESS, POST, PUT, GET, DELETE } from './redux-constants';

const API_URL = getApiUrl();

/**
 * logError  - Log error without UI display
 * @param {Object} error      Error object caught in catch block
 * @param {String} type       Action type that caused error
 *
 * @returns {Promise}
 */
export const logError = (error, type) => {
  if (getEnvironment() === 'development') {
    console.error(`Error type: ${type}.`);
    console.error(error);
  }

  const errorMessage = error && error.response
  ? error.response.data
  : error;

  return Promise.reject(errorMessage);
};

/**
 * httpRequest - Generic action to make an http request with axios
 * @param {Function} dispatch     React-redux's dispatch function
 * @param {String} requestType    Type of http request to make
 * @param {String} actionType     Action type to be dispatched
 * @param {Object} opts           Object of options
 *                  endpoint        Api endpoint to hit (e.g., '/auth/login')
 *                  data            Data to be posted to the api
 *                  requiresAuth    Whether or not request needs to be authenticated
 *
 * @returns {Promise}
 */
const httpRequest = async (dispatch, requestType = GET, actionType = '', opts = {}) => {

  try {
    dispatch({
      type: actionType,
      meta: { status: PENDING },
    });

    const reqArgs = [`${API_URL}/${opts.endpoint || ''}`];
    console.log(`${API_URL}/${opts.endpoint || ''}`);
    // Add a data payload to the request if it's a POST or PUT
    if (requestType === POST || requestType === PUT) {
      reqArgs.push(opts.data || {});
    }

    if(opts.requiresContentType && opts.requiresAuth){
      reqArgs.push(
        opts.requiresAuth
          ? {
        //     headers: {
        //     Authorization: getCookie('token'),
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        // }
       }
          : {}
      );
    }else{
      console.log('masuk sini ya');
      reqArgs.push(
        opts.requiresAuth
          ? {
        //     headers: {
        //     Authorization: getCookie('token'),
        //     'Accept': 'application/json',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        // }
       }
          : {
            headers: {
              // Accept:'application/json, text/javascript, */*; q=0.01',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
      );
    }
    console.log(...reqArgs);
    const response = await axios[requestType](...reqArgs);

    dispatch({
      type: actionType,
      meta: { status: SUCCESS },
      payload: response,
    });

    return Promise.resolve(response);
  } catch (err) {
    console.log(err == 'Error: Request failed with status code 401');
    if(err == 'Error: Request failed with status code 401'){
      window.location = "/unauthorized";
    }
    throw err;
  }
};

/**
 * post
 * @param {Function} dispatch
 * @param {String} type
 * @param {String} endpoint
 * @param {Object} data
 * @param {Boolean} requiresAuth
 * @param {Boolean} requiresContentType
 *
 * @returns {Promise}
 */
export const post = (dispatch, type, endpoint, data, requiresAuth, requiresContentType ) =>
  httpRequest(dispatch, POST, type, { endpoint, data, requiresAuth, requiresContentType });

/**
 * put
 * @param {Function} dispatch
 * @param {String} type
 * @param {String} endpoint       Api endpoint to hit /user/:id
 * @param {Object} data
 * @param {Boolean} requiresAuth
 *
 * @returns {Promise}
 */
export const put = async (dispatch, type, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, PUT, type, { endpoint, data, requiresAuth });

/**
 * get - Generic action to make a GET request with axios
 * @param {Function} dispatch     React-redux's dispatch function
 * @param {String} type           Action type to be dispatched
 * @param {String} endpoint       Api endpoint to hit (e.g., '/user')
 * @param {Boolean} requiresAuth  Whether or not request needs to be authenticated
 * @param {Boolean} requiresContentType
 *
 * @returns {Promise}
 */
export const get = async (dispatch, type, endpoint, requiresAuth, requiresContentType) =>
  httpRequest(dispatch, GET, type, { endpoint, requiresAuth, requiresContentType });
/**
 * del - Generic action to make a DELETE request with axios
 * @param {Function} dispatch     React-redux's dispatch function
 * @param {String} type           Action type to be dispatched
 * @param {String} endpoint       Api endpoint to hit (e.g., '/user/:id')
 * @param {Boolean} requiresAuth  Whether or not request needs to be authenticated
 *
 * @returns {Promise}
 */
export const del = async (dispatch, type, endpoint, requiresAuth) =>
  httpRequest(dispatch, DELETE, type, { endpoint, requiresAuth });
