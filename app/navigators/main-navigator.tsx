/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShoppingListScreen } from "../screens"
import Footer from "../components/footer/footer";
import { View } from "react-native";
import { RoutesName } from "../config/Routes";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  account: undefined
  explore: undefined
  notification: undefined
  challenge: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
// const Stack = createStackNavigator<PrimaryParamList>()

const BottomTab = createBottomTabNavigator<PrimaryParamList>();

// function StackNavigator(){
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         cardStyle: { backgroundColor: "transparent" },
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="shoppingList" component={ShoppingListScreen} />
//     </Stack.Navigator>
//   )
// }

function ViewColor(){
  return <View style={{flex: 1, backgroundColor: 'green'}} />
}
export function MainNavigator() {
  return (
    <View style={{flex:1}}>
      <BottomTab.Navigator
          tabBar={() => null}
          sceneContainerStyle={{backgroundColor: 'transparent'}}
          initialRouteName={RoutesName.ACCOUNT}>
          <BottomTab.Screen name={RoutesName.EXPLORE} component={ViewColor} />
          <BottomTab.Screen name={RoutesName.ACCOUNT} component={ShoppingListScreen}/>
          <BottomTab.Screen name={RoutesName.CHALLENGE} component={ViewColor} />
          <BottomTab.Screen name={RoutesName.NOTIFICATION} component={ViewColor} />
      </BottomTab.Navigator>
      <Footer />
    </View>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["account"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
