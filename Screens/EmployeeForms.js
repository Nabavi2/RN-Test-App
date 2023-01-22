/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AddEmployeeForm from "./components/AddEmployeeForm";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function EmployeeForms(props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const handleRenderEmployeeComponent = (noOfForm) => {
    return <AddEmployeeForm noOfForm={noOfForm} />;
  };

  const showTravelersDetails = () => {
    const arrList = [];
    for (let i = 0; i < count; i++) {
      arrList.push(handleRenderEmployeeComponent(i + 1));
    }
    return arrList;
  };
  const handleValidation = () => {
    setIsValid(false);
    setFirstName("");
    setEmail("");
    setPassword("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        {/*Buttons Row*/}
        <View style={styles.btnRow}>
          {/*Delete form's button*/}

          <AntDesign
            name="minuscircle"
            size={28}
            color="#fc8d30"
            onPress={() => {
              setCount(count - 1);
            }}
          />
          {/*Add Form's button  */}

          <AntDesign
            name="pluscircle"
            size={28}
            color="#fc8d30"
            onPress={() => {
              setCount(count + 1);
              handleValidation();
            }}
          />
        </View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(19) }}
          showsVerticalScrollIndicator={false}
        >
          {/*Employee cart rendered */}
          {showTravelersDetails()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#fc8d30",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
