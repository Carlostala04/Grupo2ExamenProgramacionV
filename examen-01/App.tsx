import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductFormScreen from './screens/ProductFormScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <ProductFormScreen/>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
