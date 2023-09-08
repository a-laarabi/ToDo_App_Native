import { useState } from "react";
import { TextInput, View, StyleSheet, Button, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ButtonAdd from "../shared/ButtonAdd";

const AddTodo = ({submitHandler}) => {

  const [text, setText] = useState('');

  const pressHandler = () => {
    submitHandler(text);
  }


  return (
    <View style={styles.addTodo}>
      <TextInput
        multiline
        style={styles.todoInput}
        placeholder="new Todo.."
        onChangeText={(val)=>{setText(val)}}
      />
      {/* <Button onPress={pressHandler} title ='add todo' color='#A73121'/> */}
      <ButtonAdd onPress={pressHandler} >
        <Ionicons name="add-circle" size={20} />
        <Text>Add toDo</Text>
      </ButtonAdd>
    </View>
  )
}

const styles = StyleSheet.create({
  addTodo:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  todoInput:{
    backgroundColor: '#DAD4B5',
    borderBottomColor: '#000',
    borderStyle:'solid',
    borderBottomWidth: 1,
    padding: 15,
    width: '70%'
  }
})


export default AddTodo;