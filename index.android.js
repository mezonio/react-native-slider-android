'use strict';
import React, { Component, PropTypes, requireNativeComponent } from 'react-native';


export default class SliderAndroid extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }
  _onChange(event: Event) {
    if (!this.props.onValueChange) {
      return;
    }
    this.props.onValueChange(event.nativeEvent.progress);
  }
  render() {
    return <RNSlider {...this.props} onChange={this._onChange} />;
  }
}
SliderAndroid.propTypes = {
  onValueChange: React.PropTypes.func,
  minimumValue: React.PropTypes.number,
  maximumValue: React.PropTypes.number,
  value: React.PropTypes.number,
  rotation: PropTypes.number,
  scaleX: PropTypes.number,
  scaleY: PropTypes.number,
  translateX: PropTypes.number,
  translateY: PropTypes.number,
  importantForAccessibility: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  testID: PropTypes.string,
  renderToHardwareTextureAndroid: PropTypes.string,
  accessibilityLiveRegion: PropTypes.string,
  accessibilityComponentType: PropTypes.string,
  onLayout: PropTypes.bool,


};

var RNSlider = requireNativeComponent(`RNSlider`, SliderAndroid, {
  nativeOnly: {onChange: true,
}
});
