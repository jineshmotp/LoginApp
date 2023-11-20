import { AppRegistry } from 'react-native';
import LoginApp from './App'; // Adjust the path accordingly
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => LoginApp);
