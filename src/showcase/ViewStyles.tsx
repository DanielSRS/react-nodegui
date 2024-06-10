import React from 'react';
import { Text, Renderer, Window, View } from '..';

const App = () => {
  return (
    <Window minSize={{ height: 400, width: 400 }}>
      <View style={container}>
        <View style={[square, { backgroundColor: '#0000FF80'}]}>
          <Text>backgroundColor</Text>
        </View>
        <View style={[square, { opacity: 0.5 }]}>
          <Text>opacity</Text>
          <Text>(not working)</Text>
        </View>
        <View style={[square, { borderRadius: 10, }]}>
          <Text>borderRadius</Text>
        </View>
        <View style={[square, { borderWidth: 1 }]}>
          <Text>borderWidth</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderBottomColor: 'red' }]}>
          <Text>borderBottomColor</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderBottomEndRadius: 10 }]}>
          <Text>border Bottom</Text>
          <Text>End Radius</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderBottomLeftRadius: 10 }]}>
          <Text>border Bottom</Text>
          <Text>Left Radius</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderBottomRightRadius: 10 }]}>
          <Text>border Bottom</Text>
          <Text>Right Radius</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderBottomStartRadius: 10 }]}>
          <Text>border Bottom</Text>
          <Text>Start Radius</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderStartEndRadius: 10 }]}>
          <Text>border Start</Text>
          <Text>End Radius</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderStartStartRadius: 10 }]}>
          <Text>border Start</Text>
          <Text>Start Radius</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderEndEndRadius: 10 }]}>
          <Text>border End</Text>
          <Text>End Radius</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderEndStartRadius: 10 }]}>
          <Text>border End</Text>
          <Text>Start Radius</Text>
        </View>
        <View style={[square, { borderBottomWidth: 1 }]}>
          <Text>borderBottomWidth</Text>
        </View>
        <View style={[square, { borderColor: 'blue', borderWidth: 1 }]}>
          <Text>borderColor</Text>
        </View>
        <View style={[square, { borderEndColor: 'yellow', borderWidth: 1 }]}>
          <Text>borderEndColor</Text>
        </View>
        <View style={[square, { borderLeftColor: 'yellow', borderWidth: 1 }]}>
          <Text>borderLeftColor</Text>
        </View>
        <View style={[square, { borderLeftWidth: 1 }]}>
          <Text>borderLeftWidth</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderRightColor: 'red' }]}>
          <Text>borderRightColor</Text>
        </View>
        <View style={[square, { borderRightWidth: 1 }]}>
          <Text>borderRightWidth</Text>
        </View>
        <View style={[square, { borderStartColor: 'red', borderWidth: 1 }]}>
          <Text>borderStartColor</Text>
        </View>
        <View style={[square, { borderWidth: 1, borderStyle: 'dotted' }]}>
          <Text>borderStyle</Text>
        </View>
        <View style={[square, { borderWidth: 2, borderTopColor: 'pink' }]}>
          <Text>borderTopColor</Text>
        </View>
        <View style={[square, { borderWidth: 2, borderTopEndRadius: 10 }]}>
          <Text>borderTopEndRadius</Text>
        </View>
        <View style={[square, { borderWidth: 2, borderTopLeftRadius: 10 }]}>
          <Text>borderTopLeftRadius</Text>
        </View>
        <View style={[square, { borderWidth: 2, borderTopRightRadius: 10 }]}>
          <Text>borderTopRightRadius</Text>
        </View>
        <View style={[square, { borderWidth: 2, borderTopStartRadius: 10 }]}>
          <Text>borderTopStartRadius</Text>
        </View>
        <View style={[square, { borderTopWidth: 2 }]}>
          <Text>borderTopWidth</Text>
        </View>
        {/* <View id='st' styleSheet={stylesheet}>
          <Text>stylesheet</Text>
        </View> */}
      </View>
    </Window>
  );
};

const square = {
  height: 100,
  width: 100,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#DFE0DF',
} as const;

const stylesheet = `
  #st {
    border-width: '2px';
    border-style: solid;
    border-color: 'green';
    background-color: '#800000FF';
    border-bottom-color: 'red';
    padding: 20;
    /*left: '-30px';*/
    /*opacity: 70;*/
  }
`;

const container = {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 24,
  justifyContent: 'space-between',
  // backgroundColor: 'white'
} as const;

Renderer.render(<App />);
