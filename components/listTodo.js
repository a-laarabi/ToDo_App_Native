import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ListTodo({todo, doneHandler}) {
  return(
    <View style={styles.todo}>
      <Text>{todo.text} {todo.key}</Text>
      <TouchableOpacity onPress={() => doneHandler(todo.key)}>
        <MaterialIcons name="check-circle-outline" size={32}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#A73121',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 5,
    paddingLeft: 15,
    paddingRight:15,
    marginTop: 15,
  }
})