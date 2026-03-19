import { View, Text } from "react-native";
import React from "react";
type ProductProps = {
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: string;
  stock: number;
};
const CardProducto = ({
  nombre,
  precio,
  cantidad,
  categoria,
  stock,
}: ProductProps) => {
  return <View></View>;
};

export default CardProducto;
