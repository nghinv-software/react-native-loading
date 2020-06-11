/**
 * Created by nghinv on Thu Jun 11 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

import React from 'react';
import { Modal, View, ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';

interface LoadingViewProps {
  visible?: Boolean;
  renderIndicator?: () => void;
  indicatorColor?: String;
  indicatorSize?: 'large' | 'small';
  backgroundColor?: String;
  containerStyle?: ViewStyle;
}

function LoadingView(props: LoadingViewProps) {
  const {
    visible,
    renderIndicator,
    indicatorColor,
    indicatorSize,
    backgroundColor,
    containerStyle
  } = props;

  return (
    <Modal
      supportedOrientations={['portrait', 'landscape']}
      visible={visible}
      animationType='fade'
      transparent
    >
      <View style={[styles.container, { backgroundColor }, containerStyle]}>
        {
          renderIndicator ? renderIndicator() : <ActivityIndicator size={indicatorSize} color={indicatorColor} />
        }
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});

LoadingView.defaultProps = {
  visible: false,
  indicatorColor: 'white',
  indicatorSize: 'large',
  backgroundColor: 'rgba(0, 0, 0, 0.4)'
};

export default React.memo(LoadingView);
