import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';
import Button from './src/components/Button';
import Rodape from './src/components/Rodape';

  export default function App() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Card />
        <Button />
      </View>
        <Rodape />
        </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2795dfff",
      flex: 2,
      justifyContent: "center",
      alignItems: "center"
    },
    content: {
      flex: 7,
      width: "100%",
      backgroundColor: "#a5a5a5ff"
  }
})
