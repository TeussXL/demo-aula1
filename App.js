import { View, Text, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Card from "./src/components/Card";
import Button from "./src/components/Button";
import Rodape from "./src/components/Rodape";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Card
          title="Os Incriveis"
          desc="Os Incriveis"
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mQrea67xY2xcEx_751ZkMjeJwHalyho_g&s"
          }
        />
        <Card
          title="Batman"
          desc="batman"
          img={"https://m.media-amazon.com/images/S/pv-target-images/9fd172a452587004a54251df846efdb16b3f2e808718c9dca35fe7ff68f508ac._SX1080_FMjpg_.jpg"
          }
        />
        <Button />
      </View>
      <Rodape />
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
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#a5a5a5ff",
  },
});
