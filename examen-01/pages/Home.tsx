import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import CardProducto from "../components/Card";
import { supabase } from "../lib/supabase";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: string;
  idUser:number
};

const ListaProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarProductos = async () => {
      const { data, error } = await supabase.from("productos").select('*');

      if (error) {
        setError(error.message);
        return;
      }

      setProductos(data || []);
    };

    cargarProductos();
  }, []);

  return (
    <View style={{ flex: 1 }}>
     

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardProducto
            nombre={item.nombre}
            precio={item.precio}
            cantidad={item.cantidad}
            categoria={item.categoria}
          />
        )}
      />
    </View>
  );
};

export default ListaProductos;