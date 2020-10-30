<div align='center'>
  
  ![npm](https://badgen.net/badge/license/MIT/blue)
  [![npm](https://badgen.net/npm/dt/react-native-search-component)](https://www.npmjs.com/package/react-native-search-component)
  [![npm](https://badgen.net/npm/v/react-native-search-component)](https://www.npmjs.com/package/react-native-search-component)

  <h1>React Native Search Component</h1>
  
  <img width="auto" height="550" src="./example/RNSearch/assets/ioslight.gif">

  <img width="auto" height="550" src="./example/RNSearch/assets/iosdark.gif">

  <img width="auto" height="550" src="./example/RNSearch/assets/android.gif">
  
</div>

## :anchor: Installation

```sh

yarn add react-native-search-component
# or
npm i react-native-search-component

```

## :family: Dependencies

##### React Native Reanimated

```sh
npm install react-native-reanimated
```

For iOS

```sh

cd ios && pod install && cd ..

```

For Android

1. Turn on Hermes engine by editing android/app/build.gradle

```code

project.ext.react = [
  enableHermes: true  // <- here | clean and rebuild if changing
]

```

2. Plug Reanimated in MainApplication.java

```code
  import com.facebook.react.bridge.JSIModulePackage; // <- add
  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
  ...
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  ...

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

      @Override
      protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // <- add
      }
    };
  ...
```

> For detailed instructions check it out [here](https://docs.swmansion.com/react-native-reanimated/docs/next/installation)

##### React Native SVG

```sh

npm install react-native-svg

```

For iOS

```sh
cd ios && pod install && cd ..
```

> For detailed instructions check it out [here](https://github.com/react-native-community/react-native-svg)

> Rebuild the project after adding the dependencies

## :mag: Usage

```js
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import SearchComponent from "react-native-search-component";

const App = () => {
  const [theme, setTheme] = React.useState("LIGHT");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTheme = () =>
    theme === "LIGHT" ? setTheme("DARK") : setTheme("LIGHT");
  const themeBasedContainer = [
    styles.container,
    { backgroundColor: theme === "LIGHT" ? "white" : "black" },
  ];
  const themeBasedTextStyle = [
    styles.textStyle,
    { color: theme === "LIGHT" ? "black" : "white" },
  ];

  const onChange = (e) => {
    setSearchTerm(e?.nativeEvent?.text);
  };
  const onSearchClear = () => setSearchTerm("");

  return (
    <SafeAreaView style={themeBasedContainer}>
      <Text style={themeBasedTextStyle}>React Native Search Component</Text>
      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={toggleTheme}>
        <Text style={[styles.textStyle, { color: "#007AFF", fontSize: 18 }]}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
      <SearchComponent
        value={searchTerm}
        theme={theme}
        onChange={onChange}
        onSearchClear={onSearchClear}
      />
      <Text
        style={[
          themeBasedTextStyle,
          { textAlign: "left", paddingLeft: 16, fontSize: 18 },
        ]}
      >
        {" "}
        Search Term : {searchTerm}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default App;
```

## :camera: Screenshot

<div>
  
<img src="./example/RNSearch/assets/screenshot.png">
  
</div>

## :wrench: Props

| Name                   | Description                                                | Required | Type                 | Default        |
| --------------------   | ------------------------------------------------           | -------- | -------------------- | -------------- |
| value                  | A search term Value                                        | Yes      | String               | ''             |
| placeholder            | A placeholder value                                        | No       | String               | ''             |
| placeholderTextColor   | Tintcolor for Placeholder                                  | No       | Color                | Based on theme |
| onChange               | A Callback function returning TextInput onChange           | Yes      | Function             | () => {}       |
| onSearchClear          | A Callback function on Close Icon click                    | No       | Function             | () => {}       |
| theme                  | App Theme                                                  | NO       | oneOf['LIGHT','DARK] | 'LIGHT'        |
| isLoading              | Loading state Indicator on search                          | NO       | Boolean              | false          |
| loadingTintColor       | The tint color of spinner                                  | NO       | Color                | '#636366'      |
| searchIcon             | The search icon of input                                   | NO       | Function             | [Check here]
(https://github.com/timelessco/react-native-search-component#wrench-custom-icons)        |
| closeIcon              | The close icon of input                                    | NO       | Function             | [Check here]   |
(https://github.com/timelessco/react-native-search-component#wrench-custom-icons)        |
| cancelColor            | The tint color of 'Cancel' text                            | NO       | Color                | '#007AFF'      |
| customSearchInputStyle | The styles, that will rewrite default searchInputStyle     | NO       | Object               | [Check here](https://github.com/timelessco/react-native-search-component#wrench-style-objects)       |
| customCancelTextStyle  | The styles, that will rewrite default "cancel" text Style  | NO       | Object               |   [Check here](https://github.com/timelessco/react-native-search-component#wrench-style-objects)               |

## :wrench: Style Objects

```
default value of Custome Search Input
{
  fontSize: 18,
  fontWeight: '400',
  lineHeight: 22,
  letterSpacing: 0.5,
  paddingHorizontal: 12,
  paddingVertical: 10,
  borderRadius: 12,
  paddingLeft: 32
}

default value of Custom Cancel Text Style
{
  paddingLeft: 16,
  fontSize: 17,
  color: props.cancelColor
}
```

## :wrench: Custom Icons

```
default value search icon of the input
const SearchIcon = ({ theme }) => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M13.7431 12.5741L9.91009 8.73956C10.5972 7.80246 10.9652 6.66953 10.9601 5.50756C10.947 2.47441 8.49372 0.0175744 5.46059 5.57178e-05C4.00907 -0.00651157 2.61522 0.567712 1.58953 1.59481C0.563845 2.6219 -0.00846493 4.01655 9.46502e-05 5.46806C0.0132044 8.50148 2.4667 10.9585 5.50009 10.9761C6.6668 10.9811 7.80387 10.6088 8.74159 9.91456L8.74559 9.91156L12.5751 13.7431C12.7821 13.9603 13.0907 14.0482 13.3811 13.9728C13.6716 13.8973 13.8983 13.6704 13.9735 13.3799C14.0487 13.0894 13.9605 12.7809 13.7431 12.5741ZM5.49609 9.87806C3.06951 9.8641 1.10675 7.89866 1.09609 5.47206C1.08955 4.311 1.54743 3.19551 2.36783 2.37389C3.18822 1.55228 4.30303 1.09273 5.46409 1.09756C7.89068 1.11151 9.85344 3.07695 9.86409 5.50356C9.87064 6.66461 9.41276 7.78011 8.59236 8.60172C7.77197 9.42334 6.65716 9.88288 5.49609 9.87806Z" fill={styledTheme[theme].searchFill} />
    </Svg>
  )
}

default value close icon of the input
const CloseIcon = ({ theme }) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4182 16 16 12.4182 16 8C16 3.58179 12.4182 0 8 0C3.58179 0 0 3.58179 0 8C0 12.4182 3.58179 16 8 16ZM4.71484 5.7522C4.42847 5.46582 4.42847 5.00122 4.71484 4.71484C4.81201 4.61768 4.92993 4.55347 5.0542 4.52222C5.15039 4.49805 5.25049 4.49365 5.34814 4.50903C5.49609 4.53223 5.63818 4.60083 5.7522 4.71484L8 6.96265L10.2478 4.71484C10.5342 4.42847 10.9988 4.42847 11.2852 4.71484C11.5715 5.00122 11.5715 5.46582 11.2852 5.7522L9.03735 8L11.2852 10.2478C11.4307 10.3933 11.5022 10.5847 11.4998 10.7754C11.4976 10.9602 11.426 11.1443 11.2852 11.2852C10.9988 11.5715 10.5342 11.5715 10.2478 11.2852L8 9.03735L5.7522 11.2852C5.46582 11.5715 5.00122 11.5715 4.71484 11.2852C4.55981 11.1301 4.48877 10.9226 4.50171 10.7197C4.51245 10.5479 4.5835 10.3792 4.71484 10.2478L6.96265 8L4.71484 5.7522Z" fill="#C7C7CC" />
    </Svg>
  )
}
```

## :wrench: Methods

```
.searchInputRef()
```
Returns searchTextInput ref. Useful for directly control search input.

Example:
```js
import { useEffect, useRef } from 'react';

[...]

const searchInput = useRef();

[...]

const toggleFocus = () => {
  const isFocused = searchInput.current.searchInputRef().isFocused();
  if (isFocused) {
    searchInput.current.searchInputRef().blur();
  } else {
    searchInput.current.searchInputRef().focus();
  }
};

<SearchComponent
  value={searchTerm}
  theme={theme}
  onChange={onChange}
  onSearchClear={onSearchClear}
  ref={searchInput}
/>
```

## :tada: Example

Checkout the example [here](https://github.com/timelessco/react-native-search-component/tree/master/example/RNSearch).

## :notebook: Blog

Checkout my blog [here](https://medium.com/timeless/react-native-search-component-de0be89df6e1).

## :snowman: Built with ❤️ and

- [react-native](https://www.npmjs.com/package/react-native)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [react-native-svg](https://github.com/react-native-community/react-native-svg)

## :v: Contributing

Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## :man: Author

[Karthik B](https://twitter.com/_iam_karthik)

## :clipboard: License

MIT

<div align="center">
<sub><sup>Project by <a href="https://github.com/timelessco"> @Timeless</a></sup></sub><small> ✌</small>
</div>
