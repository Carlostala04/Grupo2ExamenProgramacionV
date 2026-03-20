import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductFormScreen from './screens/ProductFormScreen';
import CardProducto from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductFormScreen />
      <CardProducto nombre='leche' cantidad={10} categoria='lacteos' precio={200} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});