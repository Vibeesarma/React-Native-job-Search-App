import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        resizeMode="cover"
        style={styles.btnImg(dimension)}
        source={iconUrl}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
