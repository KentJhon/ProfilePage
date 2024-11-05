import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TextInput, Button } from "react-native-paper";

export default function RegisterPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconField}>
        <FontAwesome5 name="atom" size={100} color="black" />
      </View>
      <TextInput label="Username" style={styles.textInput} />
      <TextInput label="Email" style={styles.textInput} />
      <TextInput label="Password" style={styles.textInput} secureTextEntry />
      <TextInput
        label="Confirm Password"
        style={styles.textInput}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button mode="contained" labelStyle={styles.buttonLabel}>
          Register
        </Button>
      </View>
      <Text style={styles.loginText}>Already have an account? Log In</Text>
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
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  buttonLabel: {
    fontSize: 20,
    padding: 5,
  },
  loginText: {
    fontSize: 17,
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
