import React from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import Contact from './Kontak';

const List = ({navigation}) => {
  const data = [
    {
      key: '1',
      gambar: require('../assets/abay.png'),
      judul: 'Muhammad Akbar Perdian',
      kota: 'Selabintana',
      telpon: '08467283576',
    },
    {
      key: '2',
      gambar: require('../assets/azil.jpeg'),
      judul: 'Azriel Fujya Wahda',
      kota: 'Cikidang',
      telpon: '08412346367'
    },
    {
      key: '3',
      gambar: require('../assets/alwan.jpeg'),
      judul: 'Alwan Munawar',
      kota: 'Takokak',
      telpon: '08658567453'
    },
    {
      key: '4',
      gambar: require('../assets/agung.jpeg'),
      judul: 'Agung Mochamad Sahril',
      kota: 'Jampang Kulon',
      telpon: '08436587665'
    },
    {
      key: '5',
      gambar: require('../assets/herdi.jpeg'),
      judul: 'Herdi Alfachri',
      kota: 'Tipar',
      telpon: '08657856845'
    },
  ];

  const renderItem = ({item}) => (
    <Contact gambar={item.gambar} judul={item.judul} kota={item.kota} telpon={item.telpon}/>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Informasi</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        style={styles.flatList}/>

      <Button title="Kembali" onPress={() => navigation.goBack()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatList: {
    width: '100%',
  },
});

export default List;
