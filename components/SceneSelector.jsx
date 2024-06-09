import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SceneSelector = () => {
  return (
    <View style={styles.sceneContainer}>
      <View style={styles.sceneHeader}>
        <Text style={styles.sceneHeaderText}>Scenes</Text>
        <Icon name="th" size={20} color="#000" style={styles.iconSpacing} />
        <Icon name="plus" size={20} color="#000" />
      </View>
      <TouchableOpacity style={styles.sceneItem}>
        <Text style={styles.sceneText}>Scene 01</Text>
        <Icon name="lock" size={20} color="#999" style={styles.iconSpacing} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  sceneHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sceneHeaderText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sceneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  sceneText: {
    flex: 1,
    fontSize: 14,
  },
  iconSpacing: {
    marginLeft: 10,
  },
});

export default SceneSelector;
