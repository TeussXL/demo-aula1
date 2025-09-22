import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Image } from 'expo-image';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { useUserStore } from '../stores/useUserStore';

function CardUser({ id, name, email, avatar }) {

  const router = useRouter();
  const { users, setUsers } = useUserStore();

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3333/profile/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      console.log('Deletado com sucesso');
      const updatedUsers = users.filter(user => user.id !== id); // Cria um novo array sem o id que foi excluído
      setUsers(updatedUsers); // Atualiza o estado com o novo array
    } else {
      console.log('Erro ao deletar');
    }
  };

  const handleEdit = () => {
    router.push({
      pathname: '/edituser',
      params: { id, name, email, avatar }
    })
  }

    return (
        <View style={styles.card}>
            {/* <View style={styles.image}>as</View> */}
          <Image
            style={styles.image}
            source={avatar}
          />
          <View style={styles.text}>
            <Text style={styles.cardText}>{name}</Text>
            <Text style={styles.cardText2}>{email}</Text>
          </View>
        <View>
          <Pressable onPress={handleEdit} >
            <Feather name="edit-2" size={24} color="black" />
          </Pressable>
          <Pressable onPress={handleDelete}>            
            <FontAwesome5 name="trash" size={24} color="black" />
            </Pressable>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#473b8dff",
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText2: {
    fontSize: 14,
    color: "#474747ff",
    flexWrap: "wrap",
  }
})

export default CardUser