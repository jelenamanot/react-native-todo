import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('RNTodo', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('RNTodo', { rootTag });
}
