import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import streak from './assets/streak.png';
import uptime from './assets/Uptime.png';
import home from './assets/home.png';
import profile from './assets/profile.png';
import setting from './assets/settings.png';
import InfoIconAndTextPanel from './components/InfoIconAndTextPanel';
import set_posture from './assets/set_posture.png';
import toggleImage from './assets/toggle.png';
import helpCenter from './assets/help_center.png';
import battery from './assets/Battery.png';
import delay from './assets/delay.png';
import Avi from './assets/Avi.png';
import ScreenWrapper from './components/ext_components/ScreenWrapper';
import StickyPanel from './components/panels/StickyPanel';
import MainView from './components/MainView';
import ActionPanel from './components/panels/ActionPanel';
import AviPanel from './components/panels/AviPanel';
import InfoBarIconElement from './components/InfoBarIconElement';

const CORAL_COLOR = '#fe6e76';
const GREEN_UPRIGHT = '#64bd45';
const SEMI_BOLD = '600';
const BLACK_UPRIGTH = '#525252';

export default function App() {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <StickyPanel position={'up'}>
          <Text>hi i am header</Text>
        </StickyPanel>
        <MainView>
          <Text>hi i am not</Text>
        </MainView>
        <StickyPanel position={'down'}>
          <Text>hi i am footer</Text>
        </StickyPanel>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
