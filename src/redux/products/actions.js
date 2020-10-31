import {getProducts} from '../../services/products';

export const actionTypes = {
  PRODUCTS_LOADING: 'PRODUCTS_LOADING',
  PRODUCTS_SUCCESSFUL: 'PRODUCTS_SUCCESS',
  PRODUCTS_FAILURE: 'PRODUCTS_FAILURE'
};

const actionCreators = {
  productsLoading: () => ({type: actionTypes.PRODUCTS_LOADING}),
  productsSuccessful: (payload) => ({
    type: actionTypes.PRODUCTS_SUCCESSFUL,
    payload
  }),
  productsFailure: (payload) => ({
    type: actionTypes.PRODUCTS_FAILURE,
    payload
  })
};

const actions = {
  fetchProducts() {
    return (dispatch) => {
      dispatch(actionCreators.productsLoading());
      return getProducts()
        .then((response) =>
          dispatch(actionCreators.productsSuccessful(response.data))
        )
        .catch((error) => actionCreators.productsFailure(error));
    };
  }
};

export default actions;
