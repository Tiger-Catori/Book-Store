import { TextInput, View, StyleSheet } from "react-native"
import {vs, s} from 'react-native-size-matters'

const AppTextInputComponent = ({value, onChangeText, placeholder, keyboardType, ...otherProps}) => {
  return (
    <AppTextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      {...otherProps}
    />
  )
}
export default AppTextInputComponent

const AppTextInput = ({value, onChangeText, placeholder, keyboardType, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...otherProps}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeefee',
    width: '100%',
    height: vs(40),
    borderRadius: s(8),
    justifyContent: 'center',
    paddingHorizontal: s(8),
    marginBottom: vs(20)
  }
})
