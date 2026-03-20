
import { StyleSheet,View } from 'react-native';
// import CardProducto from './components/Card';
import Home from "./pages/Home"
import ProductFormScreen from './screens/ProductFormScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductFormScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});