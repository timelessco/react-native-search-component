declare module 'react-native-search-component' {
  import { TextStyle, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
  import React from 'react'

  export interface SearchComponentProps {
    placeholder?: string;
    placeholderTextColor?: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    value: string;
    onSearchClear?: () => void;
    theme?: 'LIGHT' | 'DARK' | 'ligth' | 'dark';
    isLoading?: boolean;
    loadingTintColor?: string;
    cancelColor?: string;
    customSearchInputStyle?: TextStyle;
    customCancelTextStyle?: TextStyle;
  } 

  const SearchComponent: React.ForwardRefRenderFunction<T, SearchComponentProps>;
  
  export default SearchComponent;
}
