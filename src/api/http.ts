import { Axios } from "axios";
import { Alert } from "react-native";

const endpointURL = "https://6b05739bdb01cf4636088d83.mockapi.io/books"

const getListOfBooks = async () => {
  try {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3))
    setBookList(response.data)
  } catch (error) {
    console.log("An error occurred with getting the list of books", error)
  }
}

const getBookByID = async () => {
  try {
    const response = await axios.get(`${endpointURL}/5`)
    console.log(JSON.stringify(response.data, null, 3))
  } catch (error) {
    console.log("An error occurred with getting a book", error)
  }
}

const deleteBookByID = async () => {
  try {
    const response = await axios.delete(`${endpointURL}/3`)
    Alert.alert("Book Is Deleted Successfully")
  } catch (error) {
    console.log(error)
  }
}

const body = {
  name_of_author: "Mark Hayward",
  cover: "https://picsum.org/500/300.jpg",
  price_of_book: "40.00",
  email_of_seller: "angel@yahoo.co.uk",
}

const createBook = async () => {
  try {
    const response = await axios.post(endpointURL, body)
    Alert.alert("Book Has Been Created!")
    getListOfBooks()
  } catch (error) {
    console.log(error)
  }
}

const updateBook = async () => {
  try {
    const response = await axios.put(`${endpointURL}/3`, body)
    Alert.alert("Book has been updated!")
  } catch (error) {
    console.log(error)
  }
}
