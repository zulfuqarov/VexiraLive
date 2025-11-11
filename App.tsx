import 'react-native-reanimated';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigation from './src/Navigations/BottomNavigations/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { navigationRef } from './src/Navigations/Service/NavigationsService';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  if (__DEV__) {
    require('./ReactotronConfig');
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          BootSplash.hide({ fade: true });
        }}
      >
        <KeyboardProvider
          statusBarTranslucent={true}
          navigationBarTranslucent={true}
        >
          <QueryClientProvider client={queryClient}>
            <BottomNavigation />
          </QueryClientProvider>
        </KeyboardProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
