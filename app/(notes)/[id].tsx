import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/theme/colors";
import { notes } from "@/data/notes";
import { font_family } from "@/theme/font_family";
import { icons } from "@/constants/icons";
import {
  useEditorBridge,
  RichText,
  Toolbar,
  CodeBridge,
  TenTapStartKit,
} from "@10play/tentap-editor";

const customCodeBlockCSS = `
code {
    font-family: "Nunito_900Black"
    font-size: 3rem;
}
`;

const SingleNote = () => {
  const { id } = useLocalSearchParams();
  const [note, setnote]: any = useState(null);
  const editor: any = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent: note?.body,
    bridgeExtensions: [
      // It is important to spread StarterKit BEFORE our extended plugin,
      // as plugin duplicated will be ignored
      ...TenTapStartKit,
      CodeBridge.configureCSS(customCodeBlockCSS), // Custom codeblock css
    ],
  });
  const find_note = () => {
    const search_note: any = notes.find((note: any) => note.id === id);
    setnote(search_note);
  };

  useEffect(() => {
    find_note();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
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
            onPress={() => router.back()}
          >
            <Image
              source={icons.back}
              style={{ width: 17, height: 17, marginTop: 2 }}
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
            Edit Note
          </Text>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => router.back()}
          >
            <Image
              source={icons.dots}
              style={{ width: 17, height: 17, marginTop: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <RichText
          editor={editor}
          style={{ backgroundColor: colors.background, marginHorizontal: 15 }}
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
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default SingleNote;

const styles = StyleSheet.create({});
