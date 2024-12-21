import {
  BackHandler,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme/colors";
import { font_family } from "@/theme/font_family";
import { icons } from "@/constants/icons";
import {
  useEditorBridge,
  RichText,
  Toolbar,
  CodeBridge,
  TenTapStartKit,
  useEditorContent,
  darkEditorTheme,
} from "@10play/tentap-editor";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { add_note } from "@/redux/actions/noteActions";
import { customCodeBlockCSS } from "@/helpers/text_editor_styles";

const NewNote = () => {
  const [title, settitle] = useState("");
  const dispatch: any = useDispatch();

  const editor: any = useEditorBridge({
    theme: darkEditorTheme,
    autofocus: true,
    avoidIosKeyboard: true,
    onChange: () => {
      console.log("content", content);
    },
    bridgeExtensions: [
      ...TenTapStartKit,
      CodeBridge.configureCSS(customCodeBlockCSS), // Custom codeblock css
    ],
  });

  const content = useEditorContent(editor, { type: "html" });
  useEffect(() => {
    // Will render each time content is updated and call onSave
    console.log("content", content);
    // content && onSave(content);
  }, [content]);

  const save_note = () => {
    const isValidNote = content && content !== "<p></p>" && content !== "";

    console.log(isValidNote);
    if (isValidNote) {
      dispatch(add_note({ title, body: content }));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        save_note();
        router.back();

        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [title, content, dispatch])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar backgroundColor={colors.background} style="dark" />
      <View
        style={{
          width: "100%",
          height: "10%",
          zIndex: 1,
          justifyContent: "center",
          borderBottomColor: colors.button_color,
          borderBottomWidth: 0.5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {
              save_note();
              router.back();
            }}
          >
            <Image
              source={icons.back}
              style={{
                width: 17,
                height: 17,
                marginTop: 2,
                tintColor: colors.text,
              }}
            />
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              fontFamily: font_family.Nunito_700Bold,
              color: colors.text,
            }}
          >
            New Note
          </Text>
          <Image
            source={icons.back}
            style={{
              width: 17,
              height: 17,
              marginTop: 2,
              tintColor: colors.background,
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Write a title"
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => settitle(text)}
          style={{
            marginTop: 15,
            fontSize: 25,
            paddingHorizontal: 20,
            color: colors.text,
            fontFamily: font_family.Nunito_900Black,
          }}
        />
        <RichText
          editor={editor}
          containerStyle={{
            paddingHorizontal: 5,
            marginTop: 10,
            borderRadius: 10,
            paddingVertical: 10,
            backgroundColor: colors.background,
            borderColor: colors.button_color,
            borderTopWidth: 0.5,
          }}
          focusable
          style={{
            backgroundColor: colors.background,
            marginHorizontal: 15,
          }}
          onContentSizeChange={(contentSize) => {
            console.log("contentSize", contentSize);
          }}
          onSourceChanged={(source) => {
            console.log("source", source);
          }}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            backgroundColor: colors.background,
          }}
        >
          <Toolbar editor={editor} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default NewNote;

const styles = StyleSheet.create({});
