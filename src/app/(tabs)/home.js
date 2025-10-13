
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Footer from '../../components/Rodape'
import Card from '../../components/Card'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        <Link href="contact"><Text>Contato</Text></Link>
        <Link href="about"><Text>Sobre</Text></Link>
      </View>
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
          img={
            "https://m.media-amazon.com/images/S/pv-target-images/9fd172a452587004a54251df846efdb16b3f2e808718c9dca35fe7ff68f508ac._SX1080_FMjpg_.jpg"
          }
        />
        <Card
          title="Dexter"
          desc="O serial killer de seriais killers"
          img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0GcZEwXB7mvH56j8UXR8eUi3pF13hheM_f4-SlkFhjBx1LwpwXn7AbVm4_oXtluWZtf6GAw"  
        />
      </View>
      <Footer />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff"
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#a5a5a5ff",
    padding: 15,
    gap: 15
  }
}) 
