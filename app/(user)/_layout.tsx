import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const UserLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default UserLayout;

const styles = StyleSheet.create({});
