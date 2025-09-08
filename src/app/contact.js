import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>pagina de contato</Text>
      <Button title="Home" onPress={() => router.replace("/")} />
      <Button title="Sobre" onPress={() => router.push("/sobreNos")} />
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
