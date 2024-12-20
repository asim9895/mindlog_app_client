import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { font_family } from "@/theme/font_family";
import { colors } from "@/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView>
        <Text
          style={{
            fontSize: 25,
            fontFamily: font_family.TitanOne_400Regular,
            color: colors.text,
            textAlign: "center",
            marginTop: 60,
            marginBottom: 50,
          }}
        >
          NOTELY
        </Text>

        <Text
          style={{
            fontSize: 25,
            marginHorizontal: 30,
            fontFamily: font_family.Nunito_900Black,
            color: colors.text,
            textAlign: "center",
          }}
        >
          Reset your password
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 30,
            fontFamily: font_family.Nunito_600SemiBold,
            color: colors.text,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          Create new password and access all your content in one go.
        </Text>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 30,
              fontFamily: font_family.Nunito_600SemiBold,
              color: colors.text,
            }}
          >
            Email Address
          </Text>
          <TextInput
            placeholder="Eg: john@gmail.com"
            editable={false}
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 30,
              padding: 12,
              borderRadius: 10,
              fontFamily: font_family.Nunito_600SemiBold,
              marginTop: 7,
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 30,
              fontFamily: font_family.Nunito_600SemiBold,
              color: colors.text,
            }}
          >
            New Password
          </Text>
          <TextInput
            placeholder="Eg: John453cft4es#%#"
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 30,
              padding: 12,
              borderRadius: 10,
              fontFamily: font_family.Nunito_600SemiBold,
              marginTop: 7,
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.button_color,
            padding: 15,
            alignItems: "center",
            marginHorizontal: 30,
            marginTop: 20,
            borderRadius: 10,
          }}
          onPress={() => {
            console.log("hello");
            router.push("/(auth)/login");
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: font_family.Nunito_800ExtraBold,
              letterSpacing: 1,
              color: colors.white,
            }}
          >
            Change Password
          </Text>
        </TouchableOpacity>
        <Text
          onPress={() => {
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
          Remember Password?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
