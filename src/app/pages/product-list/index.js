import {useParams} from 'react-router-dom';

function ProductList() {
  const {category} = useParams();
  return <h1>Products List of {category}</h1>;
}

export default ProductList;
