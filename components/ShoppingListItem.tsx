import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Props {
  name: string;
  isCompleted?: boolean;
}

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "This action cannot be undone",
      [
        {
          text: "Yes",
          onPress: () => console.log("Deleting"),
          style: "destructive",
        },
        { text: "Cancel", onPress: () => console.log("Cancel") },
      ],
    );
  };
  return (
    <View
      style={[
        styles.cartElement,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.cartElementText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        Coffee
      </Text>
      <TouchableOpacity onPress={handleDelete}>
        <AntDesign
          name="closecircleo"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  cartElement: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartElementText: {
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorCerulean,
  },
});
