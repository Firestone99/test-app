import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const VideoInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoTextContainer}>
        <Icon name="video-camera" size={20} color="#000" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Video</Text>
          <Text style={styles.subtitle}>show.mp4</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="pencil" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="trash" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: '#FFFF99',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default VideoInfo;
