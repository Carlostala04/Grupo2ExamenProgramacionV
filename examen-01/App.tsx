import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardProducto from './components/Card';

export default function App() {
  return (
    <CardProducto nombre='leche' cantidad={10} categoria='lacteos' precio={200} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
