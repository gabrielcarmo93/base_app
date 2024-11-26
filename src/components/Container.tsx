import React from 'react';
import { Dimensions, View, StatusBar } from 'react-native';

function Container({ children }: { children?: React.ReactNode }) {
  const SCREEN_HEIGHT = Dimensions.get('window').height
  const SCREEN_WIDTH = Dimensions.get('window').width

  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'} />
      <View style={{flex: 1, padding: 20, gap: 20, height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}>
        {children}
      </View>
    </React.Fragment>
  );
}

export default Container;