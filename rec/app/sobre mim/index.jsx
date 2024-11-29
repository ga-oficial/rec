import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Header from '../../components/header';

const TelaInicio = () => {
    return (
        <View style={styles.container}>
            <Header title="Sobre Mim" voltarPara="./" />
            <View style={styles.content}>
                <Image
                    source={{ uri: 'https://portaledicase.com/wp-content/uploads/2023/12/Ragdoll-1024x683.jpg' }}
                    style={styles.profileImage}
                />
                <Text style={styles.welcomeText}>Bem-vindo ao meu app</Text>
                <Text style={styles.descriptionText}>
                    Eu sou um estudante do sesi senai, tenho 19 anos e moro em santo amaro da imperatriz, minha familia e portuguesa e namoro a 1 ano.
                </Text>
                <Link href="/sobre%20mim/filmes">
                    <Button title="VEJA OS FILMES QUE ASSISTI" />
                </Link>
                <Link href="/sobre%20mim/viagens">
                    <Button title="VEJA MINHAS VIAGENS" />
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 50
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    descriptionText: {
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default TelaInicio;