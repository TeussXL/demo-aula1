import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import CardUser from "../../components/CardUser.js"

export default function Contact() {

  const router = useRouter();

  const [users, setUsers] = useState([])

  useEffect(() => {
    const listUsers = async () => {
      const response = await fetch ("http://localhost:3333/profile")
      if (response.ok) {
        console.log('Lista carregada com sucesso')
        const data = await response.json()
        console.log(data.profile)
        setUsers(data.profile)
      } else {
        console.log('erro ao carregar lista')
      }
    }
    listUsers()
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>pagina de contato</Text>
           {users.map((user) => (
                <CardUser
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    avatar={user.avatar}
                />
            ))}
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
