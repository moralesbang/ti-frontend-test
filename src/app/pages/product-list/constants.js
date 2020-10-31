import {
  ComputerSVGIcon,
  FormatListBulletedSVGIcon,
  BuildSVGIcon,
  FolderSVGIcon
} from 'react-md';

export const MENU_ITEMS = [
  {name: 'All', path: '', icon: FormatListBulletedSVGIcon},
  {name: 'Tech', path: '/tech', icon: ComputerSVGIcon},
  {name: 'Services', path: '/services', icon: BuildSVGIcon},
  {name: 'Office', path: '/office', icon: FolderSVGIcon}
];
