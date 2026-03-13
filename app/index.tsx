import { SetStateAction, useRef, useState } from "react";
import { Image,Text, View, StyleSheet, Pressable } from "react-native";
import FocusButton  from "../components/focusButton";
import ButtonActive from "../components/buttonActive";
import Timer from "../components/Timer";
import { playIcon, pauseIcon } from "../components/icons";


const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('../assets/img/cat_time.png'),
    display:'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('../assets/img/cat_midium.png'),
    display:'Pausa curta'

  },
  {
    id: 'long',
    initialValue: 15,
    image: require('../assets/img/cat_long.png'),
    display:'Pausa longa'

  },

]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue * 60)
  const [timerRunning, setTimerRunning] = useState(false)

  const timerRef = useRef<number | null>(null)

 const clear = () => {
  if(timerRef.current != null){
    clearInterval(timerRef.current)
    timerRef.current = null
    setTimerRunning(false)
  }
 }

 const toggleTimerType = (newTimerType: typeof pomodoro[0]) => {
  setTimerType(newTimerType)
  setSeconds(newTimerType.initialValue * 60)
  clear()
 }

 const toggleTimer = () => {
  if(timerRef.current){
    clear()
    return
  }

  setTimerRunning(true)

  const id = setInterval(() => {
    setSeconds(oldState => {
      if(oldState === 0){
        clear()
        return timerType.initialValue * 60
      }
      return oldState - 1
    })
    console.log('timer rolando')
  }, 1000)
  timerRef.current = id
 }

  return (
    <View
      style={styles.container}
    >
      <Image style ={styles.imagePomodoro} source={timerType.image} />
      <View style = {styles.actions}>
        <View style ={styles.context}>
          {pomodoro.map(p => (
            <ButtonActive key={p.id} active={timerType.id === p.id} onPress={() => toggleTimerType(p)} display={p.display} />
          ))}
        </View>
      <Timer options={{ minute: '2-digit', second: '2-digit' }} totalSeconds={seconds} />
      <FocusButton title={timerRunning ? 'Pausar' : 'Iniciar'} icon={timerRunning ? pauseIcon() : playIcon()} onPress={toggleTimer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#e7b65a',
        gap: 25
},
imagePomodoro:{
  width: 240,
  height: 250,
  borderRadius: 15
},
actions:{
  paddingVertical: 24,
  paddingHorizontal: 24,
  backgroundColor: "rgb(238, 210, 133)65a",
  width: '80%',
  borderRadius: 32,
  borderWidth: 8,
  borderColor: '#e7b65a',
  gap: 32
},
context:{
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center'
},
})