import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function ProductFormScreen() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [errores, setErrores] = useState<Record<string, string>>({});

  const validar = (): boolean => {
    const nuevosErrores: Record<string, string> = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!precio.trim()) nuevosErrores.precio = "El precio es obligatorio.";
    else if (isNaN(Number(precio)) || Number(precio) < 0) nuevosErrores.precio = "Ingresa un precio válido.";
    if (!cantidad.trim()) nuevosErrores.cantidad = "La cantidad es obligatoria.";
    else if (!Number.isInteger(Number(cantidad)) || Number(cantidad) < 0) nuevosErrores.cantidad = "Debe ser un entero positivo.";
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const limpiarError = (campo: string) =>
    setErrores((prev) => ({ ...prev, [campo]: "" }));

  const handleGuardar = () => {
    if (!validar()) return;
    Alert.alert("✅ Listo", "Producto registrado correctamente.");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>

       <Text style={styles.titulo}>Nuevos Productos</Text>
        <Text style={styles.subtitulo}>Registrar un producto.</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre del producto </Text>
          <TextInput
            style={[styles.input, errores.nombre ? styles.inputError : null]}
            placeholder=""
            placeholderTextColor="#aaa"
            value={nombre}
            onChangeText={(t) => { setNombre(t); limpiarError("nombre"); }}
          />
          {errores.nombre ? <Text style={styles.errorTexto}>{errores.nombre}</Text> : null}
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Precio ($) </Text>
          <TextInput
            style={[styles.input, errores.precio ? styles.inputError : null]}
            placeholder=""
            placeholderTextColor="#aaa"
            value={precio}
            onChangeText={(t) => { setPrecio(t); limpiarError("precio"); }}
            keyboardType="decimal-pad"
          />
          {errores.precio ? <Text style={styles.errorTexto}>{errores.precio}</Text> : null}
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad </Text>
          <TextInput
            style={[styles.input, errores.cantidad ? styles.inputError : null]}
            placeholder=""
            placeholderTextColor="#aaa"
            value={cantidad}
            onChangeText={(t) => { setCantidad(t); limpiarError("cantidad"); }}
            keyboardType="number-pad"
          />
          {errores.cantidad ? <Text style={styles.errorTexto}>{errores.cantidad}</Text> : null}
        </View>

        <TouchableOpacity style={styles.btnGuardar} onPress={handleGuardar}>
          <Text style={styles.btnGuardarTexto}>Registrar producto</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6FB" },
  content: { padding: 24, paddingBottom: 48 },
  titulo: { fontSize: 26, fontWeight: "800", color: "#1A1A2E", marginBottom: 4 },
  subtitulo: { fontSize: 14, color: "#6B7280", marginBottom: 20 },
  campo: { marginBottom: 16 },
  label: { fontSize: 13, fontWeight: "700", color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 },
  input: { backgroundColor: "#fff", borderWidth: 1.5, borderColor: "#D1D5DB", borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: "#1A1A2E" },
  inputError: { borderColor: "#EF4444", backgroundColor: "#FEF2F2" },
  errorTexto: { color: "#EF4444", fontSize: 12, marginTop: 4, fontWeight: "500" },
  btnGuardar: { backgroundColor: "#19c91f", paddingVertical: 15, borderRadius: 12, alignItems: "center", marginTop: 24, elevation: 4 },
  btnGuardarTexto: { color: "#fff", fontSize: 16, fontWeight: "800" },
});