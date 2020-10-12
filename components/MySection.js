import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const MySection = () => {
  return (
    <SafeAreaView style={{ marginTop: 20, margin: 15, flex: 1 }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle:'italic',
            marginBottom: 20,
            textAlign: 'center',
          }}>
          {' '}
          MOST VIEWED NEWS{' '}
        </Text>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../assets/img1.jpg')}
          />
          <Text style={stylesSection.sectionText}>
            Iconic Armenian cathedral 'shelled by Azerbaijan'{' '}
          </Text>
        </View>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../assets/img2.jpg')}
          />
          <Text style={stylesSection.sectionText}>
            Lousise Glück wins Nobel Prize for Literature{' '}
          </Text>
        </View>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../assets/img3.jpg')}
          />
          <Text style={stylesSection.sectionText}>
            Spain Seeks Abortion Law Change{' '}
          </Text>
        </View>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../assets/img4.jpg')}
          />
          <Text style={stylesSection.sectionText}>
            Film-going could 'become extinct' warns director{' '}
          </Text>
        </View>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../assets/img5.jpg')}
          />
          <Text style={stylesSection.sectionText}>
            Stolen Mao scroll 'worth millions' found cut in half{' '}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesSection = {
  sectionContainers: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
  },
  sectionText: {
    width: '50%',
    fontSize: '22',
  },
  sectionImages: {
    width: '50%',
    marginRight: 5,
  },
};

export default MySection;
