import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppointmentCreated } from '../pages/AppointmentCreated';
import { CreateAppointment } from '../pages/CreateAppointment';
import Dashboard from '../pages/Dashboard';
import { Profile } from '../pages/Profile';

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
      <Screen name="CreateAppointment" component={CreateAppointment} />
      <Screen name="AppointmentCreated" component={AppointmentCreated} />

      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default AppRoutes;
