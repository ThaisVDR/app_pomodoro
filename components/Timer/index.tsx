import { Text, StyleSheet } from "react-native";


interface TimerProps {
    totalSeconds: number;
    options: {
        minute: '2-digit';
        second: '2-digit';
    }
}

export default function Timer({totalSeconds, options}: TimerProps) {
    const date = new Date(totalSeconds * 1000);
    return (    
        <Text style ={styles.timer}>
               { date.toLocaleTimeString('pt-BR', options) }
              </Text>
    )
}

const styles = StyleSheet.create({
timer:{
fontSize: 54,
color: '#fff',
fontWeight: 600,
textAlign: 'center',
}

})
