import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthRoutes from './routes';
import { AppProvider } from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#321e38" />
    <AppProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#321e38' }}>
        <AuthRoutes />
      </SafeAreaView>
    </AppProvider>
  </NavigationContainer>
);

export default App;
