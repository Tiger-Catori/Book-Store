import { Text, StyleSheet, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import {vs, s} from 'react-native-size-matters'
import AppTextInputComponent from "../components/AppTextInput";
import AppButtonComponent from "../components/AppButton";

const AddBookScreenComponent = ({onCloseIconPress}) => {
  return <AddBookScreen onCloseIconPress={onCloseIconPress}/>
}

export default AddBookScreenComponent;

const AddBookScreen = ({ onCloseIconPress }) => {

  const [bookName, setBookName] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [coverURL, setCoverURL] = useState("")
  const [price, setPrice] = useState("")

  return (
    <SafeAreaView>
      <Ionicons name="close-circle" size={40} color="#e81d1d" onPress={onCloseIconPress} />
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
        <AppButtonComponent onPress={onCloseIconPress}/>
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
  }
})
