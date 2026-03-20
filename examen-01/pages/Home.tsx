import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from "react-native";
import CardProducto from "../components/Card";
import { supabase } from "../lib/supabase";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: string;
  idUser: number;
};

const ListaProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarProductos = async () => {
      const { data, error } = await supabase.from("productos").select("*");

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      setProductos(data || []);
      setLoading(false);
    };

    cargarProductos();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#19c91f" />
        <Text style={styles.loadingText}>Cargando productos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardProducto
          id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            cantidad={item.cantidad}
            categoria={item.categoria}
          />
        )}
        ListEmptyComponent={
          <View style={styles.center}>
            <Text style={styles.emptyText}>No hay productos registrados.</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#6B7280",
  },
  errorText: {
    fontSize: 16,
    color: "#EF4444",
    fontWeight: "600",
  },
  emptyText: {
    fontSize: 16,
    color: "#6B7280",
  },
});

export default ListaProductos;