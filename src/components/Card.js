import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

function Card({ title, desc, img }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={img} />
      <View style={styles.info}>
        <Text style={styles.h1}>{title}</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 1,
    flexDirection: "column",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Card;
