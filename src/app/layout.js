import {element} from 'prop-types';
import {Layout, useLayoutNavigation} from 'react-md';
import {Link, useLocation} from 'react-router-dom';

// import {NAV_ITEMS} from './constants';

import './styles.scss';

function AppLayout({children}) {
  const {pathname} = useLocation();

  return (
    <Layout
      title="My Title"
      navHeaderTitle="My Nav Title"
      treeProps={useLayoutNavigation({}, pathname, Link)}
    >
      {children}
    </Layout>
  );
}

AppLayout.propTypes = {
  children: element.isRequired,
};

export default AppLayout;
