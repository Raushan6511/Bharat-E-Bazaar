import {TAB_ROUTES, APP_ICON_PRESET} from '@common';
import {
  CategoriesScreen,
  FavoritesScreen,
  HomeScreen,
  OrdersScreen,
  ProfileScreen,
} from '@screens';

export type tabScreenData = {
  params?: (name?: string, params?: any) => unknown;
  index: number;
  route: string;
  name: string;
  icon: string;
  type: string;
  screen: React.FC;
  size?: number;
};

const BottomTabScreens = [
  // {
  //   index: 0,
  //   route: TAB_ROUTES.HOME,
  //   name: 'Home',
  //   icon: 'home',
  //   type: APP_ICON_PRESET.MATERIAL_ICONS,
  //   screen: HomeScreen,
  // },
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
  },
  // {
  //   index: 1,
  //   route: TAB_ROUTES.CATEGORIES,
  //   name: 'Categories',
  //   icon: 'dashboard',
  //   type: APP_ICON_PRESET.MATERIAL_ICONS,
  //   screen: CategoriesScreen,
  // },
  {
    index: 2,
    route: TAB_ROUTES.FAVORITES,
    name: 'Favorites',
    icon: 'heart-multiple',
    type: APP_ICON_PRESET.MATERIAL_COMMUNITY,
    screen: FavoritesScreen,
    size: 24,
  },

  {
    index: 3,
    route: TAB_ROUTES.ORDERS,
    name: 'Orders',
    icon: 'dropbox',
    type: APP_ICON_PRESET.FONTISTO,
    screen: OrdersScreen,
    size: 22,
  },

  {
    index: 4,
    route: TAB_ROUTES.PROFILE,
    name: 'Profile',
    icon: 'engineering',
    type: APP_ICON_PRESET.MATERIAL_ICONS,
    screen: ProfileScreen,
    size: 28,
  },
  // {
  //   index: 4,
  //   route: TAB_ROUTES.PROFILE,
  //   name: 'Profile',
  //   icon: 'person-dots-from-line',
  //   type: APP_ICON_PRESET.FONT_AWESOME6,
  //   screen: ProfileScreen,
  // },
];

export {BottomTabScreens};
