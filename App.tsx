import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigation from './src/Navigations/BottomNavigations/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
function App() {

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor="white" />
      <NavigationContainer >
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;



