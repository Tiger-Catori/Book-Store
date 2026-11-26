import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BookCardComponent from '../components/BookCard';

const HomeScreenComponent = () => {
  return (
    <HomeScreen />
  )
}

export default HomeScreenComponent;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BookCardComponent />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
