import { View, Image, StyleSheet } from "react-native";

const Profile = ({ source }) => {
  return (
    <View style={styles.profilePicContainer}>
      <Image source={source} style={styles.profilePic} />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicContainer: {
    width: 130,
    height: 130,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#ffffff",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Profile;
