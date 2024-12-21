import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "@/theme/colors";
import { font_family } from "@/theme/font_family";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { first_time_entry_change } from "@/redux/actions/userActions";

const window_width = Dimensions.get("window").width;
const window_height = Dimensions.get("window").height;

const Onboarding = () => {
  const dispatch: any = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontFamily: font_family.TitanOne_400Regular,
          color: colors.text,
          textAlign: "center",
          marginTop: 60,
        }}
      >
        NOTELY
      </Text>

      <View style={{ justifyContent: "center", display: "flex", flex: 1 }}>
        <Image
          source={images.onboarding_banner}
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
          World's Safest And Largest Digital Notebook
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginHorizontal: 30,
            fontFamily: font_family.Nunito_600SemiBold,
            color: colors.text,
            textAlign: "center",
            marginTop: 15,
            marginBottom: 60,
          }}
        >
          Notely is the world's safest, largest and intelligent digital
          notebook, join over 10M+ users already using Notely.
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.button_color,
            padding: 20,
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
          }}
          onPress={() => {
            dispatch(first_time_entry_change());
            router.push("/(notes)/notes");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: font_family.Nunito_800ExtraBold,
              letterSpacing: 1,
              color: colors.white,
            }}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
        {/* <Text
          onPress={() => {
            dispatch(first_time_entry_change());
            router.push("/(auth)/login");
          }}
          style={{
            fontSize: 17,
            fontFamily: font_family.Nunito_700Bold,
            letterSpacing: 1,
            color: colors.button_color,
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Already Have An Account?
        </Text> */}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
