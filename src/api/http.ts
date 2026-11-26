import axios from "axios";
import { Alert } from "react-native";

const endpointURL = "https://6b05739bdb01cf4636088d83.mockapi.io/books"

export const getListOfBooks = async ({onSuccess, onError}) => {
  try {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null))
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log("An error occurred with getting the list of books", error)
  }
}

export const getBookByID = async ({onSuccess, onError}) => {
  try {
    const response = await axios.get(`${endpointURL}/5`)
    console.log(JSON.stringify(response.data, null, 3))
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log("An error occurred with getting a book", error)
  }
}

export const deleteBookByID = async ({onSuccess, onError}) => {
  try {
    const response = await axios.delete(`${endpointURL}/3`)
    Alert.alert("Book Is Deleted Successfully")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}

const body = {
  name_of_author: "Mark Hayward",
  cover: "https://picsum.org/500/300.jpg",
  price_of_book: "40.00",
  email_of_seller: "angel@yahoo.co.uk",
}

export const createBook = async ({onSuccess, onError}) => {
  try {
    const response = await axios.post(endpointURL, body)
    Alert.alert("Book Has Been Created!")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}

export const updateBook = async ({onSuccess, onError}) => {
  try {
    const response = await axios.put(`${endpointURL}/3`, body)

    Alert.alert("Book has been updated!")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}
