import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Header from '../../../components/header';

const filmes = [
  { title: 'como treinar seu dragao', year: 2019, image: 'https://upload.wikimedia.org/wikipedia/pt/0/0b/How_to_Train_Your_Dragon_3_poster.jpg' },
  { title: 'maze runner', year: 2014, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiChectVPRZE5xUjFBgcWOJT_ZJRYr4KH5A&s' },
  { title: 'rei leao', year: 2019, image: 'https://lumiere-a.akamaihd.net/v1/images/lion_king_the_2019_la_ih_ptb_1000_x_1440_2baad78d.jpeg?region=0%2C0%2C1000%2C1440' },
 
 
];

const TelaFilmes = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Filmes" voltarPara="/sobre-mim" />
      <ScrollView>
        {filmes.map((filme, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: filme.image }} style={styles.image} />
            <Text style={styles.title}>{filme.title}</Text>
            <Text>{filme.year}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 300,
    height: 350,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default TelaFilmes;