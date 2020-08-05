<div align='center'>
<h1>React Native Search Component</h1>
</div>


## :anchor: Installation

```sh

yarn add react-native-search-component
# or
npm i react-native-search-component

```

## :family: Dependencies

##### React Native Reanimated

For iOS 

```sh

npm install react-native-reanimated

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

cd ios && pod install && cd ..

```

> For detailed instructions check it out [here](https://github.com/react-native-community/react-native-svg)

## :mag: Usage

```js

import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, TouchableOpacity
} from 'react-native';
import SearchBar from './src/UISearchBar';


const App = () => {
  const [theme, setTheme] = React.useState('LIGHT');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTheme = () => theme === 'LIGHT' ? setTheme('DARK') : setTheme('LIGHT');
  const themeBasedContainer = [styles.container, { backgroundColor: theme === 'LIGHT' ? 'white' : 'black' }];
  const themeBasedTextStyle = [styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }];

  const onChange = (e) => {
    setSearchTerm(e?.nativeEvent?.text)
  }
  const onSearchClear = () => setSearchTerm('');

  return (
    <SafeAreaView style={themeBasedContainer}>
      <Text style={themeBasedTextStyle}>Hello,World !</Text>
      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={toggleTheme}>
        <Text style={[styles.textStyle, { color: '#007AFF' }]}>Toggle Theme</Text>
      </TouchableOpacity>
      <SearchBar theme={theme} onChange={onChange} onSearchClear={onSearchClear} />
      <Text style={[themeBasedTextStyle, { textAlign: 'left', paddingLeft: 16 }]}> Search Term : {searchTerm}</Text>
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

```

## :camera: Screenshot



## :wrench: Props

|   Name                           | Description                                    | Required    | Type                 | Default              | 
| ---------------------------------| ---------------------------------------------- | ----------- | -------------------- | -------------------- |
|                                  |                                                |             |                      |                      |


## :tada: Example

Checkout the example [here](https://github.com/timelessco/react-native-search-component/tree/master/example/RNSearch).

## :notebook: Blog

Have a look at my blog [here]().

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
