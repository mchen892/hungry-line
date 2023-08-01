import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

type props = {
  name: string;
  open: boolean;
  time: string;
  image: any;
};

export default function Card({ name, open, time, image }: props) {
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} />
      <TouchableOpacity style={styles.heart} onPress={handleFavorite}>
        <Image
          source={
            favorited
              ? require("../assets/favorited.png")
              : require("../assets/unfavorited.png")
          }
        />
      </TouchableOpacity>
      <View style={styles.cardBody}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.cardTitle}>{name}</Text>
          <View style={{ flexDirection: "row", paddingVertical: 1 }}>
            <Text style={styles.distanceLabel}>Dist. </Text>
            <Text style={styles.distance}>0.2 mi</Text>
          </View>
        </View>
        <Text style={styles.cardLabel}>
          {open ? "Open" : "Closed"} until {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 301,
    height: 191,
    borderRadius: 15,
    marginVertical: 12,
    marginHorizontal: 16,
    alignSelf: "center",
  },
  cardImage: {
    width: 301,
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 1,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: "#F7E1AE",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    zIndex: 1,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 6,
    fontWeight: "600",
    paddingVertical: 5,
  },
  distance: {
    fontSize: 12,
    fontWeight: "600",
    color: "#617A55",
  },
  distanceLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    marginLeft: 45, // Fix alignment of distance info
  },
  heart: {
    position: "absolute",
    height: 24,
    width: 24,
    zIndex: 2,
    top: 15,
    left: 263,
  },
});
