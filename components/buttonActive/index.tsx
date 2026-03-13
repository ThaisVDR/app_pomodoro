import { Pressable, Text, StyleSheet} from "react-native";

interface ButtonActiveProps {
  active: boolean;
  onPress: () => void;
  display: string;
}

export default function ButtonActive({active, onPress, display}: ButtonActiveProps) {
    return(
          <Pressable style={active ? styles.buttonContextActive : null} onPress={onPress}>
            <Text style={styles.buttonContext}>{display}</Text>
          </Pressable>
       
    )
}
const styles = StyleSheet.create({
buttonContextActive:{
backgroundColor:'#e4b96a',
borderRadius: 10,
},
buttonContext:{
fontSize: 12.5,
color:'#fff',
padding: 10,
textAlign: 'center',
},
})
