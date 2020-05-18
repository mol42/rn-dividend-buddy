import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import HomeScreen from "./containers/home/Home";
import SettingsScreen from "./containers/settings/Settings";
import store from "./redux/configureStore";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                return <Ionicons name={"ios-home"} size={size} color={color} />;
              } else if (route.name === "Settings") {
                return (
                  <SimpleLineIcons
                    name={"settings"}
                    size={size}
                    color={color}
                  />
                );
              }
              return null;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#2fc192",
            inactiveTintColor: "gray",
            activeBackgroundColor: "black",
            inactiveBackgroundColor: "black",
            safeAreaInsets: {
              bottom: 0,
            },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
