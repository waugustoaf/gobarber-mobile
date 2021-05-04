import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const { Navigator, Screen } = Auth;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#321e38' },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthRoutes;
