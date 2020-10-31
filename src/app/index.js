import {Configuration} from 'react-md';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from '../redux/store';

import AppLayout from './layout';
import ProductList from './pages/product-list';
import './styles.scss';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
