declare module 'react-native-search-component' {
  import {  ViewStyle, TextStyle } from "react-native"
  import React from 'react'

  export interface SearchComponentProps {
    placeholder?: string;
    placeholderTextColor?: string;
    onChange: func.isRequired;
    value: string.isRequired;
    onSearchClear?: () => {};
    theme?: 'LIGHT' | 'DARK';
    isLoading?: bool;
    loadingTintColor?: string;
    cancelColor?: string;
    customSearchInputStyle?: ViewStyle;
    customCancelTextStyle?: TextStyle;
  } 

  const SearchComponent: React.ForwardRefExoticComponent<SearchComponentProps>;
  
  export default SearchComponent;
}