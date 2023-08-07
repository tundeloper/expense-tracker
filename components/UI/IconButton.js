import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function IconButton({ icon, size, color, onPress}) {

    return (
        <Pressable onPress={onPress} style={(pressed) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} color={color} size={size} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginVertical: 2,
        marginHorizontal: 8,
    }, 
    pressed: {
        opacity: 0.75,
    }
})