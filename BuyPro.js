import React from 'react';
import { View, Text, Button, StyleSheet, Image, StatusBar } from 'react-native';

const BuyProScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.topHalf}>
        <Image
          source={require('./assets/bgimage_testapp.png')}
          style={styles.bottomImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Design and 3D Collaboration Unite</Text>
        <Text style={styles.subtitle}>Create, edit and integrate objects into your projects with Solwens</Text>
        <View style={styles.buttonContainer}>
          <Button title="Get Started - it's free" color="#E0B0FF" />
          <View style={styles.buttonSpacing} />
          <Button title="I already have an account" color="#e0e0e0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: StatusBar.currentHeight,
  },
  topHalf: {
    flex: 0.5,
    justifyContent: 'flex-end',  // Aligns the image to the bottom of the first half
    alignItems: 'center',
  },
  bottomImage: {
    width: '80%',  // Adjust the width as needed
    height: 150,   // Adjust the height as needed
  },
  contentContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  buttonSpacing: {
    height: 10,
  },
});

export default BuyProScreen;
