import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My ToDo App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#A73121',
    paddingTop: 80,
    paddingBottom: 40
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#F2E8C6',
    fontFamily: 'RubikIso'
  }
})

export default Header;