import {arrayOf, number, string} from 'prop-types';
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardContent,
  Text
} from 'react-md';

import styles from './styles.module.scss';
import {formatCategories, formatCurrency} from './utils';

function ProductCard({
  name,
  description,
  photo,
  stock,
  price,
  categories,
  brand
}) {
  return (
    <Card className={styles['product-card']}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle className={styles['product-card__subtitle']}>
          {`${formatCategories(categories)} - ${brand}`}
        </CardSubtitle>
      </CardHeader>
      <CardContent>
        <div className={styles['product-card__content']}>
          <img
            className={styles['product-card__image']}
            src={photo}
            alt={`${name} Photo`}
          />
          <div>
            <Text>{description}</Text>
            <div>
              <b>Stock: </b>
              {stock}
            </div>
            <div>
              <b>Price: </b>
              {formatCurrency(price)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  photo: string.isRequired,
  stock: number.isRequired,
  price: string.isRequired,
  categories: arrayOf(string).isRequired,
  brand: string.isRequired
};

export default ProductCard;
