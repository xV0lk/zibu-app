import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cartElement}>
        <Text style={styles.cartElementText}>Coffee</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed")}
        >
          <Text style={styles.buttonText}>Hello</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
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
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: theme.colorWhite,
  },
});
