import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator ,TransitionSpecs } from '@react-navigation/native-stack';
import SplashScreen from '../common/SplashScreen';
import NavigationService from './NavigationService';
import FHomeScreen from '../FGrocery/FHomeScreen';
import FProductDetailScreen from '../FGrocery/FProductDetailScreen';
import FCartScreen from '../FGrocery/FCartScreen';
import AddaddressScreen from '../common/AddaddressScreen';
import FDeliveryOption from '../FGrocery/FDeliveryOption';
import FProductListScreen from '../FGrocery/FProductListScreen';
import FAccountScreen from '../FGrocery/FAccountScreen';
import FEditAccountScreen from '../FGrocery/FEditAccountScreen';
import FCategroyScreen from '../FGrocery/FCategoryScreen';
import FNotificationScreen from '../FGrocery/FNotificationScreen';
import FOrderHistoryScreen from '../FGrocery/FOrderHistoryScreen';
import HomeScreen from '../Food/HomeScreen';
import RestaurentDetails from '../Food/RestaurentDetails';
import CartScreen from '../Food/CartScreen';
import FoodAddaddressScreen from '../Food/FoodAddaddressScreen';
import AccountScreen from '../Food/AccountScreen';
import OrderHistoryScreen from '../Food/OrderHistoryScreen';
import FoodSearchScreen from '../Food/FoodSearchScreen';


const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer ref={(navigatorRef) => { NavigationService.setTopLevelNavigator(navigatorRef); }}>

            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          animation: 'slide_from_right', //<-- this is what will do the trick
          presentation: 'card',
          headerShown:false
        }}>
               <Stack.Screen name="SplashScreen" component={SplashScreen}/>


               {/* grocery */}
               <Stack.Screen name='FHomeScreen' component={FHomeScreen}/>
               <Stack.Screen name='FProductDetailScreen' component={FProductDetailScreen}/>
             
               <Stack.Screen name='FCartScreen' component={FCartScreen}/>
               <Stack.Screen name='FDeliveryOption' component={FDeliveryOption}/>
               <Stack.Screen name='FProductListScreen' component={FProductListScreen}/>
               <Stack.Screen name='FAccountScreen' component={FAccountScreen}/>
               <Stack.Screen name='FEditAccountScreen' component={FEditAccountScreen}/>
               <Stack.Screen name='FCategoryScreen' component={FCategroyScreen}/>

               <Stack.Screen name='FNotificationScreen' component={FNotificationScreen}/>

               <Stack.Screen name='FOrderHistoryScreen' component={FOrderHistoryScreen}/>

                {/* common */}
                <Stack.Screen name='AddaddressScreen' component={AddaddressScreen}/>


                {/* food */}
               <Stack.Screen name='HomeScreen' component={HomeScreen}/>
               <Stack.Screen name='RestaurentDetails' component={RestaurentDetails}/>

               <Stack.Screen name='CartScreen' component={CartScreen}/>
               <Stack.Screen name='FoodAddaddressScreen' component={FoodAddaddressScreen}/>
               <Stack.Screen name='AccountScreen' component={AccountScreen}/>
               <Stack.Screen name='OrderHistoryScreen' component={OrderHistoryScreen}/>

               <Stack.Screen name='FoodSearchScreen' component={FoodSearchScreen}/>


            </Stack.Navigator>
        
        </NavigationContainer>
    );
};

export default AppNavigator;
