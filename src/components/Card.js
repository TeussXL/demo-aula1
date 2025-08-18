import {View, Text, StyleSheet } from "react-native";

 function Card() {
  return (
    <View>
      <View style={styles.card1}>
                <Text style={styles.cardTitle}>Título do Card</Text>
                <Text>Conteúdo do card aqui.</Text>
              </View>
              <View style={styles.card2}>
                <Text style={styles.cardTitle}>Título do Card</Text>
                <Text>Conteúdo do card aqui.</Text>
              </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card1: {
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
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
   card2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
});

export default Card;