import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const VideoThumbnail = () => {
  return (
    <View style={styles.thumbnailContainer}>
      <Image
        source={{ uri: 'https://via.placeholder.com/300x200' }} // Replace with your image URL
        style={styles.thumbnail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnailContainer: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 10,
    margin: 10,
  },
  thumbnail: {
    width: 300,
    height: 200,
    borderRadius: 15,
  },
});

export default VideoThumbnail;
