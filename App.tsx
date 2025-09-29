import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigation from './src/Navigations/BottomNavigations/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from "react-native-bootsplash";

function App() {

  if (__DEV__) {
    require("./ReactotronConfig");
  }


  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor="white" />
      <NavigationContainer
        onReady={() => {
          BootSplash.hide({ fade: true });
        }}
      >
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;



