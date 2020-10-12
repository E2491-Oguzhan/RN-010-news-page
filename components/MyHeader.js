import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

const MyHeader = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={stylesHeader.container}>
        <View>
          <Image
            style={{ width: 24, height: 25 }}
            source={require('../assets/Very-Basic-Menu-icon.png')}
          />
        </View>
        <View>
          <Text
            style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 22 }}>
            {' '}
            The New York Times{' '}
          </Text>
        </View>

        <View>
          <Image source={require('../assets/Users-Name-icon.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const stylesHeader = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default MyHeader;
