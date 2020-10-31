import {element} from 'prop-types';
import {TabsManager, Tabs} from 'react-md';

import {NAVIGATION_TABS} from './constants';

// import {NAV_ITEMS} from './constants';

import './styles.scss';

function AppLayout({children}) {
  return (
    <div>
      <TabsManager tabs={NAVIGATION_TABS}>
        <Tabs padded={true} />
        {children}
      </TabsManager>
    </div>
  );
}

AppLayout.propTypes = {
  children: element.isRequired
};

export default AppLayout;
