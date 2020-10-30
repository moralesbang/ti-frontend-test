import {Configuration} from 'react-md';
import {BrowserRouter} from 'react-router-dom';

import AppLayout from './layout';
import ProductList from './pages/product-list';
import './styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Configuration>
        <AppLayout>
          {/* <Switch>
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:category" component={ProductList} />
          </Switch> */}
          <ProductList />
        </AppLayout>
      </Configuration>
    </BrowserRouter>
  );
}

export default App;
