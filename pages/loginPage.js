import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TextInput, Button } from "react-native-paper";

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconField}>
        <FontAwesome5 name="atom" size={100} color="black" />
      </View>
      <TextInput label="Email" style={styles.textInput} />
      <TextInput label="Password" style={styles.textInput} secureTextEntry />
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" labelStyle={styles.buttonLabel}>
          Log In
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  iconField: {
    marginBottom: 30,
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 16,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  forgetPasswordText: {
    fontSize: 17,
    color: "purple",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
  },
  buttonLabel: {
    fontSize: 20,
    padding: 5,
  },
});
