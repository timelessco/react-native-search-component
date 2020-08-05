import PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, ViewPropTypes, TextInput, useWindowDimensions, TouchableOpacity } from 'react-native';
import Animated, { Value, spring, timing, Easing } from 'react-native-reanimated';

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

const textInputWidth = new Value(0);
const cancelTextOpacity = new Value(0);

const SearchBar = (props) => {
  const [searchInputFocussed, setSearchInputFocussed] = useState(false);
  const width = useWindowDimensions().width;
  const memoizedTextInputOnFocusWidth = useMemo(() => width - 112, [width]);
  const memoizedTextInputOnBlurWidth = useMemo(() => width - 32, [width]);
  const focusTextInput = useCallback(() => setSearchInputFocussed(true), []);
  const blurTextInput = useCallback(() => setSearchInputFocussed(false), []);
  useEffect(() => {
    if (searchInputFocussed) {
      spring(textInputWidth, {
        toValue: memoizedTextInputOnFocusWidth,
        mass: 1,
        stiffness: 120,
        damping: 20,
      }).start();
      timing(cancelTextOpacity, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }).start();
    } else {
      spring(textInputWidth, {
        toValue: memoizedTextInputOnBlurWidth,
        mass: 1,
        stiffness: 120,
        damping: 20,
      }).start();
      timing(cancelTextOpacity, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear
      }).start();
    }
  }, [searchInputFocussed]);
  const handlePressCancel = () => {
    searchTextInput?.blur();
  }
  return (
    <Animated.View style={[styles.searchInputWrapper]}>
      <Animated.View style={{ width: textInputWidth, paddingVertical: 4 }}>
        <TextInput
          ref={ref => searchTextInput = ref}
          onFocus={focusTextInput}
          onBlur={blurTextInput}
          style={[
            styles.searchInputStyle,
            {
              backgroundColor: styledTheme[props?.theme].textInputBackground,
              color: styledTheme[props?.theme].textColor,
            }
          ]}
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor || styledTheme[props?.theme].placeholderTextColor}
        />
      </Animated.View>
      <TouchableOpacity style={{ display: 'flex', justifyContent: 'center' }} onPress={handlePressCancel}>
        <Animated.Text style={{ paddingLeft: 16, fontSize: 17, color: '#007AFF', opacity: cancelTextOpacity }}>
          Cancel
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  )
}


const styles = StyleSheet.create({
  searchInputWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 10,
  },
  searchInputStyle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
  }
})


SearchBar.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}


SearchBar.defaultProps = {
  placeholder: 'Search',
  placeholderTextColor: null,
  label: 'Label',
  onChange: () => { },
}

export default SearchBar;