import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AboutMe({ darkMode }) {
  const textAndBorderColor = darkMode ? "#fff" : "#000";

  return (
    <View style={[styles.container, { borderColor: textAndBorderColor }]}>
      <Text style={[styles.title, { color: textAndBorderColor }]}>
        About Me
      </Text>
      <Text style={{ color: textAndBorderColor }}>
        Hello! I am an aspiring software engineer from University of Science and
        Technology of Southern Philippines. {"\n"}I love watching anime,
        listening to music, play guitar, reading manga and playing games! {"\n"}
        I also draw and sometimes code when I have time.{"\n"}I aspire to create
        apps that is innovative and can help solve in real life problems!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 16,
    borderRadius: 8,
    margin: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default AboutMe;
