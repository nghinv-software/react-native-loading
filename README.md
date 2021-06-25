# @nghinv/react-native-loading

Loading an overlay when running long tasks in the react-native application.

---

[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]][all-contributors]

# Installation

## Installing the package

* Use yarn

```sh
yarn add @nghinv/react-native-loading
```

* Use npm

```sh
npm install @nghinv/react-native-loading
```

<img src="./assets/example.gif" height="600"/>

# How to use

1. Wrapper `LoadingService` in the `Root Component`

```javascript
  ...
  return (
    <LoadingService>
      <RootComponent />
    </LoadingService>
  );
  ...
```

2. Use `Spinner.show()` and `Spinner.hide()`

```javascript
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Spinner, LoadingService, LoadingView } from '@nghinv/react-native-loading';

export default function Example() {
  const onPress = () => {
    Spinner.show();
    setTimeout(() => {
      Spinner.hide();
    }, 2000);
  };

  return (
    <LoadingService>
      <View style={styles.container}>
        <Button title='Show loading' onPress={onPress} />
      </View>
    </LoadingService>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  }
});
```

- Show loading with custom property

```javascript
  ...
  onShow = () => {
    Spinner.show({ indicatorColor: 'red' });
  }
  ...
```

# Property


## LoadingView property

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| visible | `Bool` | `false` | show/hide loading |
| indicatorColor | `String` | `white` | |
| indicatorSize | `large/small` | `large` | |
| backgroundColor | `String` | `rgba(0, 0, 0, 0.4)` | |
| renderIndicator | `func` | `undefined` | Custom loading component |
| containerStyle | `ViewStyle` |  | |


## LoadingService property

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| defaultProps | `LoadingViewProperty` | | |


## Spinner property

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| show | `(params: LoadingViewProperty) => void` | | show loading when call |
| hide | `func` | | hide loading when call |

[version-badge]: https://img.shields.io/npm/v/@nghinv/react-native-loading.svg?style=flat-square
[package]: https://www.npmjs.com/package/@nghinv/react-native-loading
[license-badge]: https://img.shields.io/npm/l/@nghinv/react-native-loading.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[all-contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[all-contributors]: #contributors
