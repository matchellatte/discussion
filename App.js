import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import User from './components/user';

const App = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setData(data); 
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Text>API ACTIVITY BY</Text>
      <Text>Grechelle Ann Boneo</Text>
      <StatusBar style="auto" />

      <FlatList
        data={data}
        renderItem={({ item }) => <User user={item} />} 
        keyExtractor={item => item.id.toString()} 
      />
      <Button title="LOAD DATA" onPress={getData} style={styles.button} />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7eef3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#AA336A',
  }
});
