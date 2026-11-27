import { Text, StyleSheet, View, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import {vs, s} from 'react-native-size-matters'
import AppTextInputComponent from "../components/AppTextInput";
import AppButtonComponent from "../components/AppButton";
import { createBook, updateBook } from "../api/http";

const AddBookScreenComponent = ({onCloseIconPress, onCreateSuccess, selectedItem}) => {
  return (
    <AddBookScreen
      onCloseIconPress={onCloseIconPress}
      onCreateSuccess={onCreateSuccess}
      selectedItem={selectedItem}
    />
  )
}

export default AddBookScreenComponent;

const AddBookScreen = ({ onCloseIconPress, onCreateSuccess, selectedItem }) => {

  const [bookName, setBookName] = useState(selectedItem?.book_title ?? "")
  const [authorName, setAuthorName] = useState(selectedItem?.name_of_author ?? "")
  const [coverURL, setCoverURL] = useState(selectedItem?.cover ?? "")
  const [price, setPrice] = useState(selectedItem?.price_of_book ?? "")


  const createNewBook = () => {
    createBook({
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (err) => {Alert.alert("There is an error")}
    })
  }

  const editBook = () => {
    updateBook({
      ID: selectedItem?.id,
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (err) => {Alert.alert("There is an error")}
    })
  }

  return (
    <SafeAreaView>
      <Ionicons style={styles.close} name="close-circle" size={40} color="#e81d1d" onPress={onCloseIconPress} />
      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AppTextInputComponent
          value={bookName}
          onChangeText={setBookName}
          placeholder={"Book Name"}
        />
        <AppTextInputComponent
          value={authorName}
          onChangeText={setAuthorName}
          placeholder={"Author Name"}
        />
        <AppTextInputComponent
          value={coverURL}
          onChangeText={setCoverURL}
          placeholder={"Cover Image"}
        />
        <AppTextInputComponent
          value={price}
          onChangeText={setPrice}
          placeholder={"Book Price"}
          keyboardType={'numeric'}
        />
        <AppButtonComponent onPress={!!selectedItem ? editBook : createNewBook}/>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingHorizontal: s(15),
    paddingTop: vs(30)
  },
  title: {
    fontWeight: 'bold',
    fontSize: s(16),
    marginBottom: vs(20)
  },
  close: {
    margin: s(4),
    marginLeft:'auto'
  }
})
