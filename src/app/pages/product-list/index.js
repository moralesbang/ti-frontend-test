import {useParams} from 'react-router-dom';

import useProducts from '../../hooks/useProducts';

function ProductList() {
  const {category} = useParams();
  const {products} = useProducts();

  console.log('Fetched products', products);

  return <h1>Products List of {category}</h1>;
}

export default ProductList;
