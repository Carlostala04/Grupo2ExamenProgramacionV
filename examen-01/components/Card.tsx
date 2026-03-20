import { View, Text, StyleSheet, Pressable } from "react-native";

import React from "react";
import { COLORS } from "../constant/colors";
type ProductProps = {
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: string;
};
const CardProducto = ({
  nombre,
  precio,
  cantidad,
  categoria,
}: ProductProps) => {
  return (
    <View style={styles.card_container}>
      <View style={styles.card}>
        <View style={styles.card_header}>
          <Text style={styles.name}>{nombre}</Text>
        </View>
        <View style={styles.card_body}>
          <Text style={styles.card_text}>{`$${precio}`}</Text>
          <Text
            style={styles.card_text}
          >{`Cantidad disponible: ${cantidad}`}</Text>
          <Text style={styles.card_text}>{`Categoria: ${categoria}`}</Text>
        </View>

        <View style={styles.card_buttons}>
          <Pressable style={styles.card_button}>
            <Text style={styles.text_button}>Eliminar</Text>
          </Pressable>
          <Pressable style={styles.card_button}>
            <Text style={styles.text_button}>Editar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "relative",
    backgroundColor: COLORS.BACKGROUND,
    width: 300,
    height: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  card_header: {
    width: "100%",
    height: "40%",
    backgroundColor: COLORS.PRIMARY,
    position: "absolute",
    top: 0,
    borderRadius: 8,
  },

  name: {
    fontSize: 44,
    color: "#fff",
    fontWeight: "800",
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    textAlign: "center",
  },

  card_body: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 100,
    gap: 30,
  },
  card_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  card_buttons: {
    marginLeft: 50,
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 15,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 75,
  },
  card_button: {
    paddingTop: 5,
    width: 90,
    height: 30,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
  },

  text_button: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
  },
});

export default CardProducto;
