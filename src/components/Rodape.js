import { View, Text, StyleSheet } from "react-native";

function Rodape() {
  return (
    <View style={styles.rodape}>
      <Text style>Mateus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2795dfff",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  rodape: {
    flex: 1,
    width: "100%",
    backgroundColor: "#df3434ff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});

export default Rodape;
