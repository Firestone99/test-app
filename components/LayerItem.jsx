import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LayerItem = ({ name, type }) => {
  const iconMapping = {
    clipping: 'cut',
    light: 'lightbulb-o',
    rectangle: 'square-o',
    ellipse: 'circle-o',
  };

  return (
    <View style={styles.layerItem}>
      <Icon name={iconMapping[type]} size={20} color="#999" style={styles.iconSpacing} />
      <Text style={styles.layerText}>{name}</Text>
      <Icon name="lock" size={20} color="#999" style={styles.iconSpacing} />
      <Icon name="eye" size={20} color="#999" />
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
});

export default LayerItem;
