import _ from 'lodash';
import { ADS, GET_ADS} from '../../../utils/manifests';
import { put, post, get, del } from '../../../utils/http-utils';
import { updateStore, buildGenericInitialState, handleError } from '../../../utils/store-utils';
const queryString = require('query-string');

/**
 *
 * @returns {Promise}
 */
export let fetchDataAPI = () => async (dispatch) => {
  try {
    const response = get(dispatch, GET_ADS, `${ADS}?user_id=5360408&ep=product&item=10&src=directory&device=android&q=buku&dep_id=8&fshop=1`, true, false);
    if(response.status === 200)
    console.log(response);
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    await handleError(dispatch, err, GET_ADS);
  }
};

// Store
const INITIAL_STATE = {
  ...buildGenericInitialState([GET_ADS])
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ADS:
      return updateStore(state, action, { data: _.get(action, 'payload.data') });
    default:
      return state;
  }
};
