import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
      <View style={styles.header}>
              <Text>LOGO</Text>
            <View style={styles.menu}></View></View>
  )
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2795dfff",
      flex: 2,
      justifyContent: "center",
      alignItems: "center"
    },
     header: {
      flex: 1,
      width: "100%",
      backgroundColor: "#859985ff",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      padding: 20
    },
    content: {
      flex: 7,
      width: "100%",
      backgroundColor: "#a5a5a5ff"
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffffff"
  },
    card1: {
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
  cardTitle: {
    fontWeight: 'bold',
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
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  Button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 40,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  rodape: {
    flex: 1,
    width: "100%",
    backgroundColor: "#859985ff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 'bold',
  }
})

export default Header;