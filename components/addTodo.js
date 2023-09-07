import { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const AddTodo = ({submitHandler}) => {

  const [text, setText] = useState('');

  const pressHandler = () => {
    submitHandler(text);
  }


  return (
    <View>
      <TextInput
        style={styles.todoInput}
        placeholder="new Todo.."
        onChangeText={(val)=>{setText(val)}}
      />
      <Button onPress={pressHandler} title ='add todo' color='#A73121'/>
    </View>
  )
}

const styles = StyleSheet.create({
  todoInput:{
    backgroundColor: '#DAD4B5',
    borderBottomColor: '#000',
    borderStyle:'solid',
    borderBottomWidth: 1,
    padding: 15,
    marginBottom: 13
  }
})


export default AddTodo;