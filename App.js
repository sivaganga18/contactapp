import 'react-native-gesture-handler';

import * as React from 'react';

// Redux
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

// Router
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Container
import Container from './src/container';

// Components
import ContactList from './src/components/screen/ContactList';
import About from './src/components/screen/About';
import MangeContact from './src/components/screen/MangeContact';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, typography} from './src/stylesheet';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        {...props}
        name="Contacts"
        component={Container(ContactList)}
        options={{
          tabBarLabelStyle: ({focused, color, size}) => [
            typography.medium.h8,
            {
              color: focused
                ? colors.primaryColor
                : colors.secondaryBorderColor,
            },
          ],
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="account-box-outline"
              color={
                focused ? colors.primaryColor : colors.secondaryBorderColor
              }
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        {...props}
        name="About"
        component={Container(About)}
        options={{
          tabBarLabelStyle: ({focused, color, size}) => [
            typography.medium.h8,
            {
              color: focused
                ? colors.primaryColor
                : colors.secondaryBorderColor,
            },
          ],
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="information-outline"
              color={
                focused ? colors.primaryColor : colors.secondaryBorderColor
              }
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="tabs"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="managecontact"
            component={Container(MangeContact)}
          />
          <Stack.Screen name="tabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
