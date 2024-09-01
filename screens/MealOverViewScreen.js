import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";

//components:
// import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList/MealsList";

export function MealOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {

    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    console.log(categoryTitle);
    navigation.setOptions({ title: categoryTitle });

  }, [catId, navigation]);



  // function renderMealItem(itemData) {
  //   const item = itemData.item;

  //   const mealItemProps = {
  //     id: item.id,
  //     title: item.title,
  //     imageUrl: item.imageUrl,
  //     affordability: item.affordability,
  //     complexity: item.complexity,
  //     duration: item.duration,
  //   };

  //   // function onMealPressHandler(id, title) {
  //   //   navigation.navigate('MealDetail', {
  //   //     mealId: id,
  //   //     mealTitle: title,
  //   //   })
  //   // }

  //   return <MealItem {...mealItemProps} />;
  // }

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={displayedMeals}
  //       key={(item) => item.id}
  //       renderItem={renderMealItem}
  //     />
  //   </View>
  // );
  return <MealsList items={displayedMeals}/>
}

export default MealOverViewScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });
