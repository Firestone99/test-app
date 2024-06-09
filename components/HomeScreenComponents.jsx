import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const fontStyles = {
  color: '#fff',
  fontFamily: 'Arial', // Change to your desired font
};

export const Tabs = ({ activeTab, handleTabPress }) => {
    return (
      <View style={[styles.tabsContainer, { paddingHorizontal: 0 }]}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'projects' && styles.activeTab]}
          onPress={() => handleTabPress('projects')}
        >
          <Text style={[styles.tabText, fontStyles]}>My projects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'tutorials' && styles.activeTab]}
          onPress={() => handleTabPress('tutorials')}
        >
          <Text style={[styles.tabText, fontStyles]}>Tutorials</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

export const GenerateAnything = () => {
  return (
    <View style={[styles.generateContainer, fontStyles]}>
      <Text style={[styles.title, fontStyles]}>Generate anything</Text>
      <Text style={[styles.subtitle, fontStyles]}>through the AI</Text>
      <TouchableOpacity style={styles.generateButton} onPress={() => {}}>
        <Text style={styles.generateButtonText}>Try with AI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 70, // Adjust the height as needed
    width: 600,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    height: '100%', // Fills the entire height of the tabsContainer
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomColor: '#D8BFD8',
  },
  tabText: {
    fontSize: 32,
  },
  generateContainer: {
    width: 500,
    height: 300,
    backgroundColor: '#f6a192', // Peach background color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  generateButton: {
    backgroundColor: '#f5f5dc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  generateButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default styles;
