import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { useRouter, useGlobalSearchParams } from 'expo-router'
import { useState } from 'react'
import { useUserStore } from '../stores/useUserStore'

export default function EditUser() {

    const {users, setUsers} = useUserStore()

    const router = useRouter()
    const {id, name: eName, email: eEmail, avatar: eAvatar} = useGlobalSearchParams()

    const [name, setName] = useState(eName)
    const [email, setEmail] = useState(eEmail)
    const [pass, setPass] = useState('')
    const [avatar, setAvatar] = useState(eAvatar)

    const handleEdit = async () => {

        const profile = {
            name,
            email,
            pass,
            avatar
        }

        const response = await fetch(`http://localhost:3333/profile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile),
        })

        if (response.ok) {
            console.log('Perfil editado com sucesso')
            // atualizar lista de usuarios na store
            const updatedUsers = users.map(user => {
                if(user.id === id) {
                    return { id, ...profile }
                }
                return user
            })
            setUsers(updatedUsers)
            router.navigate('/contact')
        } else {
            console.log('Erro ao Editar perfil')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Perfil</Text>

            <View style={styles.form}>
            <Text>Nome:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Text>Email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text>Senha:</Text>
                <TextInput
                    style={styles.input}
                    value={pass}
                    onChangeText={setPass}
                />
                <Text>Avatar:</Text>
                <TextInput
                    style={styles.input}
                    value={avatar}
                    onChangeText={setAvatar}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button 
                    title='Editar'
                    onPress={handleEdit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '90%',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
})