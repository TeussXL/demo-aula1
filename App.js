import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box3} />

      <Text style={styles.tituloPrincipal}>Titulo principal</Text>
      <Text style={styles.subTitulo}>subtitulo</Text>
      <Text>esse é paragrafo</Text>
      <Text style={styles.saibaMais}>saiba mais</Text>
      <Text style={styles.tituloPrincipal}>Titulo principal 2</Text>
      <View style={styles.box2} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40e7b5ff",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloPrincipal: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginHorizontal:20
  },
  subTitulo: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginVertical: 20
  },
  saibaMais: {
    fontSize: '14px',
    color: "#464646"
  },
  box1: {
    display: "flex",
    width: '100%',
    height: 80,
    backgroundColor: "#f0f0f0",
    justifyContent: "space-between",
  },
  box2: {
    width: '100%',
    height: 80,
    backgroundColor: "#da1f1fff",
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: "#33b1d8ff",
  },
});
