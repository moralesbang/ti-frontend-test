import {Configuration} from 'react-md';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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
            <Switch>
              <Route exact path="/products" component={ProductList} />
            </Switch>
          </AppLayout>
        </Configuration>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
