import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const MyBody = () => {
  return (
    <SafeAreaView style={stylesBody.container}>
      <View>
        <Text style={stylesBody.styleText}>
          Virus Takes Center Stage as Pence and Harris Clash at Debate
        </Text>
      </View>
      <View>
        <Text style={stylesBody.styleParagraph}>
          Both candidates had strong moments, and a few stumbles, over the
          course of the 90-minute affair. But as far as lasting memories go,
          they were few and far between. If this was a match that showcased the
          futures of the Democratic and Republican parties, the real fireworks
          will have to wait for the coming years. An unmemorable result, in and
          of itself, is good news for the Democrats and Joe Biden, who polls
          suggest are leading in the race. One more campaign set-piece in the
          books, and one step closer to election day. These are my takeaways
          from the debate.
        </Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'cover',
            width: 400,
            height: 200,
            marginTop: 15,
          }}
          source={require('../assets/_114806251_index_1_vp_debate_1_reuters.jpg')}
        />
      </View>
      <View>
        <Text style={stylesBody.styleText}>
          'Rural Surge' Propels India Toward More Covid-19 Infections Than USA
        </Text>
      </View>
      <View>
        <Text style={stylesBody.styleParagraph}>
          The contagion is hitting towns and villages where resources are scant
          and people are skeptical of lockdown efforts. If unchecked, Indian
          infections could exceed those in the United States.Villagers lining up
          to receive payments at an employment center in Chawmanu, in the state
          of Tripura. Rural India is resisting government efforts to contain the
          virus.
        </Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'cover',
            width: 400,
            height: 200,
            marginTop: 15,
          }}
          source={require('../assets/merlin.jpg')}
        />
        <Text style={stylesBody.styleParagraph}>
          In many villages, no one is wearing masks. There is no social
          distancing. People are refusing to get tested and they are hiding
          their sick.
        </Text>
      </View>
    </SafeAreaView>
  );
};
const stylesBody = {
  container: {
    marginTop: 20,
    margin: 15,
    flex: 1,
    
  },
  styleText: {
    marginVertical:15,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  styleParagraph:{
    padding:10,
    lineHeight:25,
  
  }
};
export default MyBody;
