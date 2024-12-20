import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { font_family } from "@/theme/font_family";
import { colors } from "@/theme/colors";
import { router } from "expo-router";

const window_width = Dimensions.get("window").width;
const window_height = Dimensions.get("window").height;

const EmptyNoteList = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={images.create_first_note}
        style={{
          width: window_width / 1.4,
          height: window_height / 4,
          alignSelf: "center",
          marginBottom: 30,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 25,
          marginHorizontal: 30,
          fontFamily: font_family.Nunito_900Black,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Create Your First Note
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginHorizontal: 30,
          fontFamily: font_family.Nunito_600SemiBold,
          color: colors.text,
          textAlign: "center",
          marginTop: 15,
          marginBottom: 30,
        }}
      >
        Add a note about anything (your thoughts, climate change, politics, or
        your history essay) and share it with world.
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: colors.button_color,
          padding: 15,
          alignItems: "center",

          marginTop: 0,
          borderRadius: 10,
        }}
        onPress={() => {
          router.push("/(notes)/new-note");
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: font_family.Nunito_800ExtraBold,
            letterSpacing: 1,
            color: colors.white,
          }}
        >
          Create A Note
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyNoteList;
