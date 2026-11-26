import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const BookCardComponent = ({title, authorName, price, imageURI}) => {
  return (
    <BookCard
      title={title}
      authorName={authorName}
      price={price}
      imageURI={imageURI}
    />
  )
}
export default BookCardComponent;

const BookCard = ({title, authorName, price, imageURI}) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image
        source={{uri: imageURI}}
        style={styles.coverImage}
      />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.bookName}>{title}</Text>
        <Text style={styles.authorName}>{authorName}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      {/* Delete & Edit Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.circleButton}>
          <MaterialIcons name="delete-outline" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <Feather name="edit" size={24} color="#25a" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: s(10),
    padding: s(10),
    elevation: s(3),
    margin: s(10),
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: s(0),
      height: vs(2)
    }
  },
  coverImage: {
    height: s(120),
    width: "25%",
    borderRadius: s(8),
    resizeMode: 'stretch'
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: s(10),
    marginTop: vs(10)
  },
  bookName: {
    fontSize: s(16),
    fontWeight: 600,
    color: '#000'
  },
  authorName: {
    fontSize: s(14),
    color: '#888',
    marginVertical: s(3)
  },
  price: {
    fontSize: s(16),
    fontWeight: 600,
    color: '#25a'
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent:'center'
  },
  circleButton: {
    height: vs(35),
    width: s(35),
    borderRadius: s(20),
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: s(20)
  }
})
