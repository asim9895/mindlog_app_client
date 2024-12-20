import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const NotesLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="notes" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
      <Stack.Screen name="new-note" options={{ headerShown: false }} />
    </Stack>
  );
};

export default NotesLayout;

const styles = StyleSheet.create({});
