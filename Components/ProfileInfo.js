import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ProfileInfo({ darkMode }) {
  const textColor = darkMode ? "#fff" : "#000";

  return (
    <View>
      <Text style={[styles.nameText, { color: textColor }]}>
        Kent Jhon M. Dumapias
      </Text>
      <Text style={[styles.idText, { color: textColor }]}>BSIT-3R10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  idText: {
    fontSize: 18,
  },
});

export default ProfileInfo;
