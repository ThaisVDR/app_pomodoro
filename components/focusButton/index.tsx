import { Pressable, Text, StyleSheet } from "react-native"
import { ReactNode } from "react"

interface FocusButtonProps {
  title?: string;
  onPress: () => void;
  icon?: ReactNode;
}

export default function FocusButton({ title, onPress, icon }: FocusButtonProps){
    return(
<Pressable style ={styles.button} onPress={onPress}>
  {icon}
  {title && <Text style = {styles.buttonText}>{title}</Text>}
      </Pressable>
    )
}
const styles = StyleSheet.create({
button:{
  backgroundColor: '#e7b65a',
  borderRadius: 32,
  padding: 8,
  gap: 10,
  flexDirection: 'row',
  justifyContent: 'center',

},
buttonText:{
color:'#fff',
textAlign: 'center',
fontWeight: 600,
fontSize: 18,
marginRight: 10,
}
})
