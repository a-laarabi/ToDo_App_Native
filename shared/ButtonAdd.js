import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonAdd(props) {
  return (
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
          {props.children}
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A73121',
    maxWidth: '40%',
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
})