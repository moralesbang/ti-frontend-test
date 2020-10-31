import {capitalize} from 'lodash';
import {compose} from 'lodash/fp';
import {useState} from 'react';
import {TextField} from 'react-md';
import {useParams} from 'react-router-dom';

import useProducts from '../../hooks/useProducts';

import ProductCard from './components/product-card';
import styles from './styles.module.scss';
import {filterByCategory, filterByName} from './utils';

function ProductList() {
  const [searchQuery, setSearchQuery] = useState();
  const {products} = useProducts();
  const {category} = useParams();

  const handleChangeSearch = (event) => setSearchQuery(event.target.value);

  const filterProducts = compose(
    filterByCategory(capitalize(category)),
    filterByName(searchQuery)
  );

  const filteredProducts = filterProducts(products);

  return (
    <>
      <div className={styles['products-list__header']}>
        <span>
          Showing <b>{filteredProducts.length}</b> products - Hidden:{' '}
          <b>{products.length - filteredProducts.length}</b>
        </span>
        <TextField
          type="text"
          placeholder="Search"
          onChange={handleChangeSearch}
        />
      </div>
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
