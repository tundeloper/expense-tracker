import { View, StyleSheet } from "react-native"
import GlobalStyles from "../../constants/styles"
import Button from "./Button"

export default function ErrorOverlay({message, onConfirm}) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An error occured!</Text>
        <Text style={styles.message} >{message}</Text>
        <Button>Okay</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles().colors.primary500
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 14
    }
})