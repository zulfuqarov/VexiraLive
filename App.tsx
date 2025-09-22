import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigation from './src/Navigations/BottomNavigations/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from "react-native-bootsplash";
import { useEffect } from 'react';
function App() {
  // useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };
  //   init().finally(async () => {
  //     await BootSplash.hide({ fade: true });
  //   });
  // }, []);
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



