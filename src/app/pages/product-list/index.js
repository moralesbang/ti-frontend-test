// import {useParams} from 'react-router-dom';

import useProducts from '../../hooks/useProducts';

import ProductCard from './components/product-card';

function ProductList() {
  // const {category} = useParams();
  const {products} = useProducts();

  console.log('Fetched products', products);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
