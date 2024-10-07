import { View, Image, StyleSheet } from "react-native";

const BackgroundProfilePic = ({ source }) => {
  return (
    <View style={styles.profileBGPicContainer}>
      <Image source={source} style={styles.backgroundPic} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileBGPicContainer: {
    width: "100%",
    height: 300,
    overflow: "hidden",
  },
  backgroundPic: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default BackgroundProfilePic;
