/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { userReducer } from './src/reducers/userReducer'

import Home from './src/components/screens/Home';
import Profile from './src/components/screens/Profile';
import UserDetails from './src/components/screens/UserDetails';

import { CustomDrawerContent } from './src/components/common/CustomDrawerContent';

const store = createStore(userReducer);

const navOptionHandler = () => ({
	headerShown: false,
});

const Drawer = createDrawerNavigator();
function DrawerNavigator({ navigation }) {
	return (
		<Drawer.Navigator
			drawerStyle={{ width: 310 }}
			initialRouteName="HomeDrawer"
			drawerContent={() => <CustomDrawerContent navigation={navigation} />}
		>
			<Drawer.Screen name="HomeDrawer" component={Home} />
			<Drawer.Screen name="ProfileDrawer" component={Profile} />
			<Drawer.Screen name="UserDetailsDrawer" component={UserDetails} />
		</Drawer.Navigator>
	)
}

const StackApp = createStackNavigator();

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StackApp.Navigator>
					<StackApp.Screen name="AppHome" component={DrawerNavigator} options={navOptionHandler} />
					<StackApp.Screen name="Home" component={Home} options={navOptionHandler} />
				</StackApp.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

const styles = StyleSheet.create({});

export default App;
