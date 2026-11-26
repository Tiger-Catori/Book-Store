import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vs, s } from "react-native-size-matters";

const AppButtonComponent = ({onPress}) => {
  return (
    <AppButton onPress={onPress}/>
  )
}

export default AppButtonComponent;

const AppButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} >
      <Text style={styles.title}>Save</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1273de',
    height: vs(40),
    borderRadius: s(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: s(16),
    fontWeight: 500
  }
})
