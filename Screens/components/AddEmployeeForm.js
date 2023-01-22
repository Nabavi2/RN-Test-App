/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from "react-native-vector-icons/Entypo";

const AddEmployeeForm = ({ noOfForm }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.cartView}>
      <View style={styles.separator}></View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            marginBottom: 10,
          }}
        >
          Employee Form
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 15,
            color: "#fc8d30",
          }}
        >
          {noOfForm}
        </Text>
      </View>

      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => setFirstName(text)}
        placeholder="Name"
        placeholderTextColor="black"
        value={firstName}
      />
      {firstName && isValid ? (
        <Text style={styles.textError}>Valid Name</Text>
      ) : (
        <Text style={[styles.textError, { color: "red" }]}>Invalid Name</Text>
      )}
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
      />
      {email && isValid && email.includes("@") ? (
        <Text style={styles.textError}>Valid Email</Text>
      ) : (
        <Text style={[styles.textError, { color: "red" }]}>Invalid Email</Text>
      )}
      <View
        style={[
          styles.textInputStyle,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <TextInput
          style={[{ width: "80%" }]}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={visible}
          value={password}
        />

        {visible ? (
          <Entypo
            name="eye"
            size={24}
            color="black"
            onPress={() => {
              setVisible(!visible);
            }}
          />
        ) : (
          <Entypo
            name="eye-with-line"
            size={24}
            color="black"
            onPress={() => {
              setVisible(!visible);
            }}
          />
        )}
      </View>
      {password && isValid ? (
        <Text style={styles.textError}>Valid Password</Text>
      ) : (
        <Text style={[styles.textError, { color: "red" }]}>
          Invalid Password
        </Text>
      )}
      <TouchableOpacity
        onPress={() => {
          setIsValid(true);
        }}
        style={[styles.submitBtn]}
      >
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddEmployeeForm;
const styles = StyleSheet.create({
  cartView: {
    width: "100%",
    height: 260,
    borderRadius: 14,
    alignSelf: "center",
    marginBottom: hp(9),
  },

  textInputStyle: {
    height: 45,
    width: "90%",
    borderRadius: 13,
    borderColor: "grey",
    marginBottom: 8,
    backgroundColor: "white",
    alignSelf: "center",
    borderWidth: 1,
    elevation: 0.5,
    paddingHorizontal: 10,
    color: "black",
  },
  textError: {
    color: "green",
    fontSize: 12,
    marginLeft: 20,
    marginTop: -7,
  },
  submitBtn: {
    width: wp(90),
    height: 50,
    backgroundColor: "#fc8d30",
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    marginTop: 30,
    marginBottom: 27,
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: "gray",
  },
  submitBtnText: {
    color: "white",
    fontSize: 18,
  },
});
