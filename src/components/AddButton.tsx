import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from 'react-native-size-matters'
import AntDesign from '@expo/vector-icons/AntDesign';

const AddButtonComponent = ({onPress}) => {
  return (
    <AddButton onPress={onPress}/>
  )
}
export default AddButtonComponent;

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={30} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: vs(60),
    width: s(60),
    backgroundColor: '#1273de',
    borderRadius: s(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: s(0)
  }
})
