import {
  BuildSVGIcon,
  ComputerSVGIcon,
  FolderSVGIcon,
  FormatListBulletedFontIcon,
} from 'react-md';

import {createRoute} from './utils';

export const NAV_ITEMS = {
  '/products': createRoute(
    '/products',
    'Products',
    <FormatListBulletedFontIcon />,
  ),
  '/products/tech': createRoute('/products/tech', 'Tech', <ComputerSVGIcon />),
  '/products/services': createRoute(
    '/products/services',
    'Services',
    BuildSVGIcon,
  ),
  '/products/office': createRoute(
    '/products/office',
    'Office',
    <FolderSVGIcon />,
  ),
};
