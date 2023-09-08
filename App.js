import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import ListTodo from './components/listTodo';
import AddTodo from './components/addTodo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [todos, setTodos] = useState([]);

  const [keyCounter, setKeyCounter] = useState(1);

  const [fontsLoader, setFontsLoader] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'RubikIso': require('./assets/fonts/RubikIso-Regular.ttf')
        })
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoader(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoader) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoader]);

  if (!fontsLoader) {
    return null;
  }


  const doneHandler = (key) => {
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
          <View style={styles.container} onLayout={onLayoutRootView}>
            <Header />
            <View style={styles.content}>
              <AddTodo submitHandler={submitHandler} />
              <FlatList
              style= {styles.listTodos}
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
  },
  content: {
    flex: 1,
    padding: 20,
  },
  listTodos: {
    flex: 1,
  }
});
