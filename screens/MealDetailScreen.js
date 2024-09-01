import { useLayoutEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";


//components:
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
//react context api
import { FavoritesContext } from "../store/context/favorites-context";

export function MealDetailScreen({ route, navigation }) {

  const favoriteMealCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  // Find the meal that matches the mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if(mealIsFavorite){
      favoriteMealCtx.removeFavorite(mealId);
    }else{
      favoriteMealCtx.addFavorite(mealId);
    }
    console.log("pressed");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color='white'
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

//navigate to this screen from meal overview when this meal is pressed.
//display meal spesipic data spesipicly the id of the meal that was selected.

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },

  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontFamily: "edu-font",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
