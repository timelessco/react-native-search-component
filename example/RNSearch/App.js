import React, { useState, useRef } from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, TouchableOpacity
} from 'react-native';
import SearchComponent from './src/UISearchBar';

const App = () => {
  const [theme, setTheme] = React.useState('LIGHT');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTheme = () => theme === 'LIGHT' ? setTheme('DARK') : setTheme('LIGHT');
  const themeBasedContainer = [styles.container, { backgroundColor: theme === 'LIGHT' ? 'white' : 'black' }];
  const themeBasedTextStyle = [styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }];
  const searchInput = useRef();

  const toggleFocus = () => {
    const isFocused = searchInput.current.searchInputRef().isFocused();

    if (isFocused) {
      searchInput.current.searchInputRef().blur();
    } else {
      searchInput.current.searchInputRef().focus();
    }
  };

  const onChange = (e) => {
    setSearchTerm(e?.nativeEvent?.text)
  }
  const onSearchClear = () => setSearchTerm('');

  return (
    <SafeAreaView style={themeBasedContainer}>
      <Text style={themeBasedTextStyle}>React Native Search Component</Text>
      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={toggleTheme}>
        <Text style={[styles.textStyle, { color: '#007AFF', fontSize: 18 }]}>Toggle Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={toggleFocus}>
        <Text style={[styles.textStyle, { color: '#007AFF', fontSize: 18 }]}>Toggle Focus</Text>
      </TouchableOpacity>

        <SearchComponent isLoading={true} value={searchTerm} theme={theme} onChange={onChange} onSearchClear={onSearchClear} ref={searchInput}/>
      <Text style={[themeBasedTextStyle, { textAlign: 'left', paddingLeft: 16, fontSize: 18 }]}> Search Term : {searchTerm}</Text>
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
