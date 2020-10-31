import {Link} from 'react-router-dom';

export const PATHS = {
  HOME: '/',
  PRODUCTS: '/products',
  CLIENTS: '/clients',
  CONTACT: '/contact'
};

export const NAVIGATION_TABS = [
  {
    children: <Link to={PATHS.HOME}>HOME</Link>
  },
  {
    children: <Link to={PATHS.PRODUCTS}>PRODUCTS</Link>
  },
  {
    children: <Link to={PATHS.CLIENTS}>CLIENTS</Link>
  },
  {
    children: <Link to={PATHS.CONTACT}>CONTACT</Link>
  }
];
