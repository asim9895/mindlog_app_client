import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { font_family } from "@/theme/font_family";
import { colors } from "@/theme/colors";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPassword = () => {
  const [request_code, setrequest_code] = useState(false);
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
          Forgot your password
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
          Don't worry, we will get you access to your account in 2 steps.
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

        {request_code && (
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 16,
                marginHorizontal: 30,
                fontFamily: font_family.Nunito_600SemiBold,
                color: colors.text,
              }}
            >
              Verification Code
            </Text>
            <TextInput
              placeholder="Eg: 253543"
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
        )}

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
            if (request_code === false) {
              setrequest_code(true);
            } else {
              router.push("/(auth)/reset-password");
            }
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
            {request_code ? "Submit Code" : "Request Code"}
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

export default ForgotPassword;

const styles = StyleSheet.create({});
