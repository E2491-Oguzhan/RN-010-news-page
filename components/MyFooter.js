import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const MyFooter = () => {
  return (
    <SafeAreaView style={{ marginTop: 10, flex: 1 }}>
      <View style={{ backgroundColor: '#000' }}>
        <Text
          style={{
            color: '#fff',
            padding: 20,

            textAlign: 'center',
          }}>
          © 2020 ALL RIGHTS RESERVED
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MyFooter;
