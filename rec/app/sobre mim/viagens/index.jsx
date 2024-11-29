import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Header from '../../../components/header';

const viagens = [
  { id: '1', title: 'Portugal', year: 2023, image: 'https://www.civitatis.com/blog/wp-content/uploads/2024/04/shutterstock_2283072393-1280x865.jpg' },
  { id: '2', title: 'Rio de janeiro Show madona', year: 2024, image: 'https://midias.agazeta.com.br/2024/05/06/a-cantora-americana-madonna-durante-o-show-the-celebration-tourna-praia-de-copacabana-rio-de-janeiro-2094795-article.jpeg' },
  { id: '3', title: 'Sao Paulo', year: 2024, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSWwthzJJ38739W2qqpzDz8IZfAyLjABXZg&s' },
];

const TelaViagens = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Viagens" voltarPara="/sobre-mim" />
      <FlatList
        data={viagens}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title} - {item.year}</Text>
          </View>
        )}
      />
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
    width: 1000,
    height: 350,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default TelaViagens;