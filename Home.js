import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, GenerateAnything } from './components/HomeScreenComponents';

const { height } = Dimensions.get('window');

const App = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, fontStyles]}>Hey Jackson!</Text>
          <Text style={[styles.subGreeting, fontStyles]}>Let's create something interesting, huh?</Text>
        </View>
        <Image
          source={require('./assets/hsimg1.jpg')} // Replace with your image URL
          style={styles.profileImage}
        />
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.searchButton]}>
          <Icon name="search" size={20} color="#fff" />
          <Text style={[styles.buttonText, fontStyles]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-down" size={20} color="#fff" />
          <Text style={[styles.buttonText, fontStyles]}>Import</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.activeButton]}>
          <Icon name="plus" size={20} color="#fff" />
          <Text style={[styles.buttonText, fontStyles]}>New file</Text>
        </TouchableOpacity>
      </View>
      <Tabs activeTab={activeTab} handleTabPress={handleTabPress} />
      <View style={styles.imagesContainer}>
        <Image
          source={require('./assets/hsimg2.jpg')} // Replace with your image URL
          style={styles.sideImage}
        />
        <Image
          source={require('./assets/hsimg3.jpeg')} // Replace with your image URL
          style={styles.sideImage}
        />
      </View>
      <GenerateAnything />
    </View>
  );
};

const fontStyles = {
  color: '#fff',
  fontFamily: 'Arial', // Change to your desired font
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Assuming a dark theme as per the image
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subGreeting: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333', // Dark button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 8,
  },
  searchButton: {
    flex: 1.5, // Making the search button relatively bigger
  },
  activeButton: {
    backgroundColor: '#FFD700', // Yellow background for the active button
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 125, // Half of the width and height to make it circular
    borderWidth: 2,
    borderColor: '#fff',
  },

  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  sideImage: {
    width: 250,
    height: 250,
  },
});

export default App;
