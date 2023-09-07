import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import ListTodo from './components/listTodo';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    // {text: 'buy coffee', key:'1'},
    // {text: 'Complete the App', key:'2'},
    // {text: 'Study', key:'3'},
  ]);

  const [keyCounter, setKeyCounter] = useState(1)

  // const [doneTodos, setDoneTodos] = useState([]);

  const doneHandler = (key) => {
    // setDoneTodos({})
    Alert.alert('Are u Sure ?', 'this todo will be deleated are you sure?', [
      {text: 'YES', onPress: () => {
        setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.key != key);
        })
      }}, {text: 'No keep it!'}
    ])
  };

  const submitHandler = (text) => {
    if( text.length > 3 ){
      setKeyCounter(keyCounter+1)
      setTodos((prevTodos) => {
        return [
          { text: text, key:keyCounter.toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOps!', 'Todos must be over 3 chars long')
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ListTodo todo={item} doneHandler={doneHandler} />
          )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E8C6',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 20,
  }
});
