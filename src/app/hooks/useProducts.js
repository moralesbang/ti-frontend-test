import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import productActions from '../../redux/products/actions';

const useProducts = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productActions.fetchProducts());
  }, []);

  return productsState;
};

export default useProducts;
