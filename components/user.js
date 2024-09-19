import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const User = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text>Name: {user.name}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Address:</Text>
      <Text>  Street: {user.address.street}</Text>
      <Text>  Suite: {user.address.suite}</Text>
      <Text>  City: {user.address.city}</Text>
      <Text>  Zipcode: {user.address.zipcode}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3CFC6',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ffc0cb',
    borderWidth: 2,
    borderBottomColor: 'ffc0cb',
  },
  text: {
    fontSize: 16,
    color: '#ffc0cb'
  }
});
