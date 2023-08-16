import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function OTPInput2({onSubmit}) {
 const [pin1, setPin1] = useState('')
 const [pin2, setPin2] = useState('')
 const [pin3, setPin3] = useState('')
 const [pin4, setPin4] = useState('')
//  const [enteredInput, setEnteredInput] = useState
 
 const pin1Ref = useRef(null)
 const pin2Ref = useRef(null)
 const pin3Ref = useRef(null)
 const pin4Ref = useRef(null)
  
  const backspaceHandler2 = (event) => {
    const { key } = event.nativeEvent
    if (key === 'Backspace') pin1Ref.current.focus()
  }
  
  const backspaceHandler3 = (event) => {
    const { key } = event.nativeEvent
    if (key === 'Backspace') pin2Ref.current.focus()
  }
  
  const backspaceHandler4 = (event) => {
    const { key } = event.nativeEvent
    if (key === 'Backspace') pin3Ref.current.focus()
  }
  
  return (
    <View style={styles.container}> 
    <View style={styles.inputContainer}>
    <View style={styles.textInputView}>
          <TextInput maxLength={1}
            style={styles.input}
            contextMenuHidden
            ref={pin1Ref}
            selectTextOnFocus
            // editable={!disabled}
            onChangeText={(pin) => {
              setPin1(pin)
              if (pin1 === '') pin2Ref?.current?.focus()
            }}
            keyboardType='decimal-pad' />
      </View>
      <View style={styles.textInputView}>
          <TextInput maxLength={1}
            style={styles.input}
            ref={pin2Ref}
            contextMenuHidden
            selectTextOnFocus
            onKeyPress={backspaceHandler2}
            // editable={!disabled}
            onChangeText={(pin) => {
              setPin2(pin)
              if (pin2 === '') pin3Ref.current.focus()
            }}
            keyboardType='decimal-pad' />
      </View>
      <View style={styles.textInputView}>
          <TextInput
            maxLength={1}
            ref={pin3Ref}
            style={styles.input}
            contextMenuHidden
            selectTextOnFocus
            onKeyPress={backspaceHandler3}
            // editable={!disabled}
            onChange={(pin) => {
              setPin3(pin)
              if (pin3 === '') pin4Ref.current.focus()
              
            }}
            keyboardType='decimal-pad' />
      </View>
      <View style={styles.textInputView}>
          <TextInput
            style={styles.input}
            maxLength={1}
            ref={pin4Ref}
            contextMenuHidden
            selectTextOnFocus
            onKeyPress={backspaceHandler4}
            // editable={!disabled}
            onChange={(pin) => {
              setPin4(pin)
              // if (pin4 === '') pin1Ref.current.focus()
            }}
            keyboardType='decimal-pad' />
      </View>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 30,
    justifyContent: 'space-around'
  },
  textInputView: {
    // borderWidth: 1,
    // width: 20
  },
  input: {
      fontSize: 24,
      color: 'pink',
      textAlign: 'center',
      width: 45,
      height: 55,
      backgroundColor: 'red',
      borderRadius: 5,
      elevation: 4
    }
})