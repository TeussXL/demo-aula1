import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function sobreNos() {
  return (
    <View style={styles.container}>
      <Text>pagina sobre nos</Text>
      <Button title="Home" onPress={() => router.replace("/")} />
      <Button title="Contato" onPress={() => router.push("/contact")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
