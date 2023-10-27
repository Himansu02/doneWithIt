import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/Colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ visible, progress, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
