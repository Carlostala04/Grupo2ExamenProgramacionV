
import { StyleSheet,View } from 'react-native';
// import CardProducto from './components/Card';
import Home from "../examen-01/pages/Home"

export default function App() {
  return (
    // <CardProducto nombre='leche' cantidad={10} categoria='lacteos' precio={200} />
    <>
   <View> <Home/></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});