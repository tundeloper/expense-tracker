import React, { useRef, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

// type OTPInputProps = {
//     length: Number,
//     value: Array<String>
//     disabled: boolean,
//     onChnage
// }

export default function OTPInput({ length, value, disabled, onChange }) {
  // const inputsRef = <Array<Nullable<TextInput>>useRef([])
  const [val, setVal] = useState([])
  const inputsRef = useRef([])

  const onChangeVal = (text, index) => {
    // const newValue = value.map((item, valueIndex) => {
    //   if (valueIndex === index) return text
    //   return text
    // })
    // onChange(newValue)
  }

  
  const changeHandler = (text, index) => {
    console.log(text)
    onChangeVal(text, index)
    if (text.length !== 0) {
      return inputsRef?.current[index + 1]?.focus()
    }
    return inputsRef?.current[index - 1]?.focus()
  }

  const backspaceHandler = (event, index) => {
    const key = event.nativeEvent.key
    
    if (key === 'Backspace') changeHandler('', index)
  }
  
  return (
    <View style={styles.container}> 
      <View style={styles.inputContainer}>
      {[...new Array(4)].map((item, index) => {
          return (
            <TextInput
            ref={(ref) => {
                if (ref && !inputsRef.current.includes(ref)) {
                //check if ref is not already in array then add it 
                inputsRef.current = [...inputsRef.current, ref]
              }
            }}
            style={styles.input}
            key={index} maxLength={1}
            contextMenuHidden
            selectTextOnFocus
            editable={!disabled}
            keyboardType='decimal-pad'
            onChange={(text) => changeHandler(text, index)}
            onKeyPress={event => backspaceHandler(event, index)}
            // testID={index}
             />
          )
      })}
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    justifyContent: 'center'
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