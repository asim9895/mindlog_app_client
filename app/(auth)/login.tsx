import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "@/theme/colors";
import { font_family } from "@/theme/font_family";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { save_user } from "@/redux/actions/userActions";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const dispatch: any = useDispatch();
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
          Access your account
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
          Access all your notes without any hasle and enjoy the seamless
          experience.
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
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 30,
              fontFamily: font_family.Nunito_600SemiBold,
              color: colors.text,
            }}
          >
            Password
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

        <Text
          onPress={() => {
            router.push("/(auth)/forgot-password");
          }}
          style={{
            fontSize: 14,
            fontFamily: font_family.Nunito_700Bold,
            letterSpacing: 1,
            color: colors.button_color,
            textAlign: "right",
            marginRight: 30,
            marginTop: 20,
          }}
        >
          Forgot Password?
        </Text>

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
            const user_info = {
              email: "asim@gmail.com",
              full_name: "asim jaipuri",
            };
            const token = "fsgasgasgsa";
            const authenticated = true;
            dispatch(save_user({ user_info, token, authenticated }));
            router.push("/(notes)/notes");
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
            Access your account
          </Text>
        </TouchableOpacity>
        <Text
          onPress={() => {
            router.push("/(auth)/register");
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
          Don't Have An Account?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
