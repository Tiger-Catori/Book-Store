import { View, Text, StyleSheet, FlatList, Modal } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BookCardComponent from '../components/BookCard';
import { useState, useEffect } from 'react';
import { deleteBookByID, getListOfBooks } from '../api/http';
import AddButtonComponent from '../components/AddButton';
import AddBookScreenComponent from './AddBookScreen';

const HomeScreenComponent = () => {
  return (
    <HomeScreen />
  )
}

export default HomeScreenComponent;

const HomeScreen = () => {
  const [bookList, setBookList] = useState();
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: books => setBookList(books),
      onError: err => console.log(err)
    })
  }

  useEffect(() => {
    getListOfBooksFN()
  }, [])

  // Deleting book functionality
  const onDeleteItem = (item) => {
    console.log(item.id)
    deleteBookByID({
      onSuccess: () => getListOfBooksFN(),
      onError: (error) => console.log(error),
      itemID: item.id
    })
  }

  // Deleting book functionality
  const onEditItem = (item) => {
    setModalVisible(true)
    setSelectedItem(item)
  }


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
          onDeleteItem={() => onDeleteItem(item)}
          onEditItem={() => onEditItem(item)}
        />}
      />
      <AddButtonComponent onPress={() => {
        setModalVisible(true)
        setSelectedItem(null)
      }} />
      <Modal animationType='slide' visible={modalVisible}>
        <AddBookScreenComponent
          onCloseIconPress={() => setModalVisible(false)}
          onCreateSuccess={() => getListOfBooksFN()}
          selectedItem={selectedItem}
        />
      </Modal>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
