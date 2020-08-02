import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewPropTypes, TextInput, useWindowDimensions } from 'react-native';
import Animated from 'react-native-reanimated';


{/* 

  TextInput Props: 

  1. placeholder 
  2. label
  3. text
  4. onChange
  5. placeholderTextColor

  Style Configuration props

  1. barTintColor - The tint color to apply to the search bar background.
  2. searchBarStyle - A search bar style that specifies the search bar’s appearance.
  3. tintColor - The tint color to apply to key elements in the search bar.
  
  Other props

  1. showCancelButton
  2. showClearButton
  3. theme
*/}

const styledTheme = {
  LIGHT: {
    background: '#FFFFFF',
    textColor: '#000000',
    placeholderTextColor: '#8E8E93',
    textInputBackground: "rgba(142,142,147,0.12)",
  },
  DARK: {
    background: '#000000',
    textColor: '#FFFFFF',
    placeholderTextColor: '#636366',
    textInputBackground: "rgba(44,44,46,0.8)",
  }
}

const SearchBar = (props) => {
  const [searchInputFocussed, setSearchInputFocussed] = useState(false);
  return (
    <Animated.View style={[
      styles.searchInputWrapper,
      {
        width: useWindowDimensions().width - 32,
        height: 48
      },
      {
        backgroundColor: styledTheme[props?.theme].textInputBackground,
        borderRadius: 12
      }
    ]}>
      <TextInput
        style={[
          styles.searchInputStyle
        ]}
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholderTextColor || styledTheme[props?.theme].placeholderTextColor}
      />
    </Animated.View>
  )
}


const styles = StyleSheet.create({
  searchInputWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    zIndex: 10,
  },
  searchInputStyle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.5
  }
})


SearchBar.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}


SearchBar.defaultProps = {
  placeholder: 'Placeholder',
  placeholderTextColor: null,
  label: 'Label',
  onChange: () => { },
}

export default SearchBar;