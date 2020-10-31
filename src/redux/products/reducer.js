import {actionTypes} from './actions';

const INITIAL_STATE = {
  loading: false,
  products: [],
  error: null
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case actionTypes.PRODUCTS:
      return Object.assign({}, state, {loading: true});
    case actionTypes.PRODUCTS_SUCCESSFUL:
      return Object.assign({}, state, INITIAL_STATE, {products: payload});
    case actionTypes.PRODUCTS_FAILURE:
      return Object.assign({}, state, INITIAL_STATE, {error: payload});
    default:
      return state;
  }
};

export default reducer;
