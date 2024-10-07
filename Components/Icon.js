import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function Icon({ onPress, borderColor, iconColor, bgColor }) {
  return (
    <TouchableOpacity
      style={[styles.container, { borderColor, backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name="theme-light-dark"
        size={50}
        color={iconColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Icon;
