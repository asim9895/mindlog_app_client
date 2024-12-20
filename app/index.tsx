import { StyleSheet, Text, View } from "react-native";

import { Link, Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const {
    authenticated,
    first_time_entry,
  }: { authenticated: boolean; first_time_entry: boolean } = useSelector(
    (state: any) => state.user
  );
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Welcome</Text>
    //   <Link href={"/(notes)/22"}>Noted By Id</Link>
    //   <Link href={"/(notes)/notes"}>Notes</Link>
    //   <Link href={"/(user)/profile"}>User</Link>
    // </View>

    <SafeAreaView style={{ flex: 1 }}>
      {first_time_entry ? (
        <Redirect href={"/onboarding"} />
      ) : (
        <>
          {authenticated ? (
            <Redirect href={"/(notes)/notes"} />
          ) : (
            <Redirect href={"/(auth)/login"} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default App;
