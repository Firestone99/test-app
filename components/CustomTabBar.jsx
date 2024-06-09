import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabBar = () => {
  const [activeTab, setActiveTab] = useState('Object');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Object' && styles.activeTab]}
        onPress={() => setActiveTab('Object')}
      >
        <Text style={[styles.tabText, activeTab === 'Object' && styles.activeTabText]}>Object</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Assets' && styles.activeTab]}
        onPress={() => setActiveTab('Assets')}
      >
        <Text style={[styles.tabText, activeTab === 'Assets' && styles.activeTabText]}>Assets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5', // Light grey for inactive tabs
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FFFF99', // Yellow color for the active tab
  },
  tabText: {
    color: '#999999', // Grey color for inactive tab text
  },
  activeTabText: {
    color: '#000000', // Black color for active tab text
  },
});

export default CustomTabBar;
