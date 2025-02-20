import { Link, Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link href={"/counter/history"}>
              <MaterialIcons name="history" size={24} color={theme.colorGrey} />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
