import { FlatList } from "react-native";

//DATA:
import { CATEGORIES } from "../data/dummy-data.js";

//components:
import CategoryGridTile from "../components/CategoryGridTile.js";

export function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverView', {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
        categoryColor: itemData.item.color,


      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

//********use map for practice insted of flatlist******** :
// <View>
//   {CATEGORIES.map((category) => {
//     console.log(`Category ID: ${category.id}`);

//     return (
//       <CategoryGridTile
//         key={category.id}
//         title={category.title}
//         color={category.color}
//       />
//     );
//   })}
// </View>
