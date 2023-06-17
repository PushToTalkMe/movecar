import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/use_typed_selector";

export const Sort = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Все");
  const ln = useTypedSelector((state) => state.settingsReducer.language);
  const dispatch = useDispatch();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          {ln === "ru" ? (
            <View style={styles.modalView}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 75, width: 250 }}
                onValueChange={(itemValue) => {
                  setSelectedValue(itemValue);
                  dispatch({ type: "ADD_CATEGORY", payload: itemValue });
                }}
              >
                <Picker.Item label="Все" value="Все" />
                <Picker.Item label="Пассажирский" value="Пассажирский" />
                <Picker.Item label="Грузовой" value="Грузовой" />
                <Picker.Item label="Спецтранспорт" value="Спецтранспорт" />
              </Picker>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  dispatch({ type: "FILTER_CATEGORY" });
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Применить</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.modalView}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 75, width: 250 }}
                onValueChange={(itemValue) => {
                  setSelectedValue(itemValue);
                  dispatch({ type: "ADD_CATEGORY", payload: itemValue });
                }}
              >
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Passenger" value="Passenger" />
                <Picker.Item label="Freight" value="Freight" />
                <Picker.Item
                  label="Special Transport"
                  value="Special Transport"
                />
              </Picker>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  dispatch({ type: "FILTER_CATEGORY" });
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Apply</Text>
              </Pressable>
            </View>
          )}
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        {ln === "ru" ? (
          <Text style={styles.textStyle}>Фильтр</Text>
        ) : (
          <Text style={styles.textStyle}>Filter</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 11,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
