//Экран настройки, включающий в себя смену языка

import { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";

export default function Settings() {
  const [selectedValue, setSelectedValue] = useState("ru");
  const dispatch = useDispatch();
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Picker
        selectedValue={selectedValue}
        style={{ height: 75, width: 250 }}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          dispatch({ type: "CHANGE_LANGUAGE", payload: itemValue });
          dispatch({ type: "CHANGE_DATA", payload: itemValue });
        }}
      >
        <Picker.Item label="Русский" value="ru" />
        <Picker.Item label="English" value="en" />
      </Picker>
    </View>
  );
}
