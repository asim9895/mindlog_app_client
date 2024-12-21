import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/theme/colors";

const App = () => {
  const {
    // authenticated,
    first_time_entry,
  }: { authenticated: boolean; first_time_entry: boolean } = useSelector(
    (state: any) => state.user
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.background} />
      {first_time_entry ? (
        <Redirect href={"/onboarding"} />
      ) : (
        <Redirect href={"/(notes)/notes"} />
      )}
    </SafeAreaView>
  );
};

export default App;
