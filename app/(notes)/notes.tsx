import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "@/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { font_family } from "@/theme/font_family";
import { icons } from "@/constants/icons";
import EmptyNoteList from "@/components/EmptyNoteList/EmptyNoteList";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { delete_note } from "@/redux/actions/noteActions";

const Notes = () => {
  const dispatch: any = useDispatch();
  const { notes } = useSelector((state: any) => state.note);

  const delete_note_from_list = (id: string) => {
    dispatch(delete_note(id));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar backgroundColor={colors.background} style="dark" />
      <View
        style={{
          width: "100%",
          height: "7%",
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
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: font_family.Nunito_700Bold,
              color: colors.text,
            }}
          >
            All Notes
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.search}
              style={{ width: 20, height: 20, tintColor: colors.text }}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={notes}
        style={{ marginHorizontal: 10 }}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <View
            style={[
              {
                flex: 1,
                marginBottom: item.id === notes[notes.length - 1].id ? 120 : 0,
                marginTop: index === 0 || index === 1 ? 15 : 5,
                margin: 3,
                height: 150,
                backgroundColor: colors.white,
                borderRadius: 4,
                overflow: "hidden",
              },
            ]}
          >
            <Pressable
              style={{
                flex: 1,
              }}
              onPress={() => router.push(`/(notes)/${item.id}`)}
              android_ripple={{ color: colors.button_color }}
            >
              <View
                style={{
                  flex: 1,
                  padding: 16,
                  height: "100%",
                  width: "100%",
                }}
              >
                <Text
                  numberOfLines={5}
                  style={{
                    height: "100%",
                    width: "100%",
                    fontSize: 15,
                    fontFamily: font_family.Nunito_800ExtraBold,
                    color: colors.text,
                  }}
                >
                  {item.title === "" ? "No Title" : item?.title}
                </Text>

                {/* <Text
                  numberOfLines={7}
                  style={{
                    height: "60%",
                    width: "100%",
                    marginTop: 5,
                    fontSize: 8,
                    fontFamily: font_family.Nunito_400Regular,
                  }}
                >
                  {item.Body}
                </Text> */}
              </View>
            </Pressable>
            <TouchableOpacity onPress={() => delete_note_from_list(item?.id)}>
              <Text style={{ color: colors.button_color, fontSize: 17 }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<EmptyNoteList />}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 40,
          right: 20,
          backgroundColor: colors.button_color,
          height: 60,
          width: 60,
          borderRadius: 30,
          zIndex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.8}
        onPress={() => router.push("/(notes)/new-note")}
      >
        <Image
          source={icons.plus}
          style={{ height: 20, width: 20, tintColor: colors.background }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notes;
