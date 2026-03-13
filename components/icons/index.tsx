import { Image, StyleSheet } from 'react-native';

export function playIcon() {
  return (
    <Image source={require('../../assets/img/fechado.png')} style={styles.icon} />
  );
}

export function pauseIcon() {
  return (
    <Image source={require('../../assets/img/aberto.png')} style={styles.icon} />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});