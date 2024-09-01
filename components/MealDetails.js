import {
    View,
    Text,
    StyleSheet,
  } from "react-native";

export function MealDetails({duration, complexity,affordability, style, textStyle}){
return(
    <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
          </View>
)
}

export default MealDetails;

const styles= StyleSheet.create({
    details: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      },
      detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
      },
});

