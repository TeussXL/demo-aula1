import { View, Text, StyleSheet } from "react-native";

function Button() {
  return (
    <View style={styles.Button}>
      <Text style={styles.ButtonText}>Ver mais</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#ad0000ff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 40,
  },
  ButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Button;
