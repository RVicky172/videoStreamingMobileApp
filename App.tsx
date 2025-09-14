/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NewAppScreen } from '@react-native/new-app-screen';
import VideoPlayer from './components/VideoPlayer'; // Assuming you have a VideoPlayer component

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  interface Video {
    id: number;
    url: string;
  }

  const [videos, setVideos] = useState<Video[]>([]);


  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <VideoPlayer videoUrl="https://www.w3schools.com/html/mov_bbb.mp4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
