/**
 * @format
 */

import {AppNavigator} from 'ern-navigation';
import App from './App';
import {name as appName} from './app.json';

const appNavigator = new AppNavigator(
  {
    [appName]: App,
  },
  {
    initialScreen: appName,
  },
);

appNavigator.registerAll(appName);
