import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = ({ size }) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={size} color={"#ba55d3"}/>
    </View>
  );
};

const styles = {
  spinnerContainer: {
    flex: -1,
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center',

  }
};

export default Loading ;