import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const endpointURL = "https://6b05739bdb01cf4636088d83.mockapi.io/books"

  const fetchData = async() => {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3))
  }

  return (
    <View style={styles.container}>
      <Text>Fetching data from API!</Text>
      <StatusBar style="auto" />
      <Button title='Get list of Books' onPress={fetchData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
