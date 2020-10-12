import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import MyHeader from './components/MyHeader';
import MyBody from './components/MyBody';
import MySection from './components/MySection';
import MyFooter from './components/MyFooter';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <MyHeader />
        <MyBody />
        <MySection />
        <MyFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
