import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../pages/Dashboard';
import AuthRoutes from './auth.routes';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = Auth;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#321e38' },
      }}
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="SignUp" component={AuthRoutes} />
    </Navigator>
  );
};

export default AppRoutes;
