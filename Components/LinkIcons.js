import React from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

function LinkIcons({ iconColor }) {
  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity
        onPress={() => openURL("https://www.instagram.com/kent.35p/")}
      >
        <Entypo
          name="instagram-with-circle"
          size={40}
          color={iconColor} // Use the passed iconColor prop
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openURL("https://www.facebook.com/kentjhon.dumapias")}
      >
        <Entypo
          name="facebook-with-circle"
          size={40}
          color={iconColor} // Use the passed iconColor prop
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openURL("https://github.com/KentJhon")}>
        <AntDesign
          name="github"
          size={40}
          color={iconColor} // Use the passed iconColor prop
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
  },
});

export default LinkIcons;
