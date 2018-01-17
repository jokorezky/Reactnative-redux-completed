
/**
 * getEnvironment - Returns the current environment, or development by default
 * @returns {String}
 */
export const getEnvironment = () => process.env.NODE_ENV
  ? process.env.NODE_ENV
  : 'development';


/**
 * getApiUrl  - Returns the URL for the api, given the current environment
 * @returns {String}
 */
export const getApiUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'http://';
    case 'stage':
      return 'http://';
    case 'test':
      return 'http://';
    case 'development':
    default:
    return 'https://ta.tokopedia.com';
  }
};
