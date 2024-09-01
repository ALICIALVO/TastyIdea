import { useEffect } from "react";
// import { Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
//screens:
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverViewScreen from "./screens/MealOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import { CATEGORIES } from "./data/dummy-data";

//Context: 
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [loaded, error] = useFonts({
    "edu-font": require("./assets/fonts/edu-font.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MealsOverView"
            component={MealOverViewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   const category = CATEGORIES.find((cat)=> {
            //      return cat.id === catId;
            //   });
            //   const categoryName = category ? category.title : 'Category';
            //   console.log(categoryName);
            //   return {
            //     title: categoryName,

            //   };
            // }}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
