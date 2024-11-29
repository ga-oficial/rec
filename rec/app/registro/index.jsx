import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
    input: {
        width: '80%',
        margin: 10,
        backgroundColor: 'lightgray',
        paddingLeft: 10,
        borderRadius: 5,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const registrarUsuario = async () => {
        // Limpar mensagens de erro e sucesso
        setError('')
        setSuccessMessage('')

        // Verificar se os campos estão preenchidos
        if (!nome || !email || !senha) {
            setError('Todos os campos são obrigatórios.')
            return
        }

        try {
            const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nome, email: email, password: senha }),
            })

            if (resposta.ok) {
                setSuccessMessage('Usuário criado com sucesso!')
            } else {
                setError('Erro ao criar usuário. Tente novamente.')
            }
        } catch (error) {
            setError('Erro de conexão. Verifique sua internet.')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Registre-se</Text>

            {/* Campos de input */}
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Insira seu email aqui"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="Insira seu nome aqui"
            />
            <TextInput
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="Insira sua senha aqui"
                secureTextEntry
            />

            {/* Botão de cadastro */}
            <Pressable style={styles.button} onPress={registrarUsuario}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>

            {/* Exibindo mensagens de erro ou sucesso */}
            {error && <Text style={styles.errorText}>{error}</Text>}
            {successMessage && <Text style={{ color: 'green', marginTop: 10 }}>{successMessage}</Text>}
        </SafeAreaView>
    )
}
