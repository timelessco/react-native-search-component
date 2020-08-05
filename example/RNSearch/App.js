/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, TouchableOpacity
} from 'react-native';
import SearchBar from './src/UISearchBar';


const App = () => {
  const [theme, setTheme] = React.useState('LIGHT');
  const toggleTheme = () => theme === 'LIGHT' ? setTheme('DARK') : setTheme('LIGHT');
  const themeBasedContainer = [styles.container, { backgroundColor: theme === 'LIGHT' ? 'white' : 'black' }];
  const themeBasedTextStyle = [styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }];
  return (
    <SafeAreaView style={themeBasedContainer}>
      <Text style={themeBasedTextStyle}>Hello,World !</Text>
      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={toggleTheme}>
        <Text style={[styles.textStyle, { color: '#007AFF' }]}>Toggle Theme</Text>
      </TouchableOpacity>
      <SearchBar theme={theme} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10
  }
})

export default App;
