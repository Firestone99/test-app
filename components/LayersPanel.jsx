import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LayerItem from './LayerItem';

const LayersPanel = () => {
  return (
    <View style={styles.layersContainer}>
      <View style={styles.layersHeader}>
        <Text style={styles.layersHeaderText}>Layers</Text>
        <Icon name="plus" size={20} color="#000" />
      </View>
      <LayerItem name="Clipping mask" type="clipping" />
      <LayerItem name="Light Mask" type="light" />
      <LayerItem name="Rectangle" type="rectangle" />
      <LayerItem name="Ellipse" type="ellipse" />
    </View>
  );
};

const styles = StyleSheet.create({

   layerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 5,
  },
  layerText: {
    flex: 1,
    fontSize: 14,
  },
  iconSpacing: {
    marginRight: 10,
  },
  layersContainer: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  layersHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  layersHeaderText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LayersPanel;
