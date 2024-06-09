import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import CustomTabBar from './components/CustomTabBar';
import SceneSelector from './components/SceneSelector';
import LayersPanel from './components/LayersPanel';
import LayerItem from './components/LayerItem';
import VideoInfo from './components/VideoInfo';
import VideoThumbnail from './components/VideoThumbnail';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar />
        <CustomTabBar />
        <SceneSelector />
        <LayersPanel />
        <LayerItem name="Make your own" type="rectangle" />
        <VideoThumbnail />
        <VideoInfo />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0', // Adjust background color as needed
  },
});

export default App;
