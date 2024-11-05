import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import BackgroundProfilePic from "./Components/BackgroundProfilePic";
import Profile from "./Components/Profile";
import Icon from "./Components/Icon";
import ProfileInfo from "./Components/ProfileInfo";
import LinkIcons from "./Components/LinkIcons";
import AboutMe from "./Components/AboutMe";

export default function App() {
  const profilePicBGURL = require("./assets/backgroundpic.png");
  const userProfilePicURL = require("./assets/profilepic.jpg");

  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#000" : "#fff" },
      ]}
    >
      <BackgroundProfilePic source={profilePicBGURL} />
      <View style={styles.profileContainer}>
        <Profile source={userProfilePicURL} />
      </View>
      <View style={styles.profileLinkContainer}>
        <LinkIcons iconColor={darkMode ? "white" : "black"} />
      </View>
      <View style={styles.profileInfoContainer}>
        <ProfileInfo darkMode={darkMode} />
      </View>

      <View style={styles.aboutMeContainer}>
        <AboutMe darkMode={darkMode} />
      </View>

      <Icon
        onPress={changeTheme}
        borderColor={darkMode ? "#fff" : "#000"}
        iconColor={darkMode ? "white" : "black"}
        bgColor={darkMode ? "black" : "white"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    position: "absolute",
    top: 250,
    left: "15%",
    transform: [{ translateX: -50 }],
  },
  profileLinkContainer: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 310,
    right: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
  profileInfoContainer: {
    position: "absolute",
    top: 400,
    left: "15%",
    transform: [{ translateX: -50 }],
  },
  aboutMeContainer: {
    position: "absolute",
    top: 460,
    margin: 15,
  },
});
