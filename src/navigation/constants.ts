import {TAB_ROUTES, APP_ICON_PRESET} from '@common';
import {
  CategoriesScreen,
  TrendsScreen,
  NewArrivalScreen,
  HomeScreen,
  AccountScreen,
} from '@screens';
import {colors} from '@theme';

export type tabScreenData = {
  params?: (name?: string, params?: any) => unknown;
  index: number;
  route: string;
  name: string;
  icon: string;
  type: string;
  screen: React.FC;
  size?: number;
  color?: string;
};

const BottomTabScreens = [
  {
    index: 0,
    route: TAB_ROUTES.HOME,
    name: 'Home',
    icon: 'home',
    type: APP_ICON_PRESET.IONICONS,
    screen: HomeScreen,
    size: 24,
  },
  {
    index: 1,
    route: TAB_ROUTES.CATEGORIES,
    name: 'Categories',
    icon: 'space-dashboard',
    type: APP_ICON_PRESET.MATERIAL_ICONS,
    screen: CategoriesScreen,
    size: 24,
    color: colors.palette.vividRaspberry,
  },
  // {
  //   index: 2,
  //   route: TAB_ROUTES.FAVORITES,
  //   name: 'Favorites',
  //   icon: 'heart-multiple',
  //   type: APP_ICON_PRESET.MATERIAL_COMMUNITY,
  //   screen: FavoritesScreen,
  //   size: 24,
  //   color: colors.palette.red,
  // },
  {
    index: 2,
    route: TAB_ROUTES.NEW_ARRIVALS,
    name: 'New Arrivals',
    icon: 'new-box',
    type: APP_ICON_PRESET.MATERIAL_COMMUNITY,
    screen: NewArrivalScreen,
    size: 24,
    color: colors.palette.jungleGreen,
  },
  {
    index: 3,
    route: TAB_ROUTES.TRENDS,
    name: 'Trends',
    icon: 'motion-play',
    type: APP_ICON_PRESET.MATERIAL_COMMUNITY,
    screen: TrendsScreen,
    size: 26,
    color: colors.palette.vividPurple,
  },
  // {
  //   index: 4,
  //   route: TAB_ROUTES.ACCOUNT,
  //   name: 'Account',
  //   icon: 'engineering',
  //   type: APP_ICON_PRESET.MATERIAL_ICONS,
  //   screen: ProfileScreen,
  //   size: 28,
  // },
  {
    index: 4,
    route: TAB_ROUTES.ACCOUNT,
    name: 'Account',
    icon: 'person-dots-from-line',
    type: APP_ICON_PRESET.FONT_AWESOME6,
    screen: AccountScreen,
    size: 24,
  },
];

export {BottomTabScreens};

// star-shooting
// pound
// pound-box
// motion-play
// creation              new arrival
// hashtag
// data-exploration
