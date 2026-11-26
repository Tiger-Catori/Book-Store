import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BookCardComponent from '../components/BookCard';
import { useState, useEffect } from 'react';
import { getListOfBooks } from '../api/http';

const HomeScreenComponent = () => {
  return (
    <HomeScreen />
  )
}

export default HomeScreenComponent;

const HomeScreen = () => {
  const [bookList, setBookList] = useState();
  useEffect(() => {
    getListOfBooks({
      onSuccess: books => setBookList(books),
      onError: err => console.log(err)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bookList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <BookCardComponent
          title={item.book_title}
          authorName={item.name_of_author}
          price={item.price_of_book}
          imageURI={item.cover}
        />}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
