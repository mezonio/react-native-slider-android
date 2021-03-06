# React-Native Slider for Android
A slider component for selecting integer values. (Similar to SliderIOS.)

## Example

```
...

import SliderAndroid from 'react-native-slider-android';

...

<SliderAndroid onValueChange={this.onValueChange} value={6} 
minimumValue={-10} maximumValue={10} style={{height: 30, width: 300,}}/>

```

## Install

### Step 1 - Install the npm package

```sh
$ npm install react-native-slider-android --save
```

### Step 2 - Update Gradle Settings

```gradle
// file: android/settings.gradle
...

include ':react-native-slider-android', ':app'
project(':react-native-slider-android').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-slider-android/app')
```

### Step 3 - Update app Gradle Build

```gradle
// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':react-native-slider-android')
}
```

### Step 4 - Register React Package

```java
// MainActivity.java
import io.mezon.rnslider.RNSliderPackage;

...
    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RNSliderPackage()   // <-- Register package here
        );
    }
```
##Props
- minimumValue : number
- maximumValue : number
- value (This is the initial value.) : number
- onValueChange : function