import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {baseStyle} from '../../styles/base';

export default class BasePanelItem extends Component {
  constructor(props) {
    super(props);
    this.containerStyle = {...baseStyle, ...(props.containerStyle || {})};
    this.press = this.props.press;
    this.disabled = this.props.press ? false : true;
  }

  render() {
    const {children} = this.props;
    return (
      <TouchableOpacity
        disabled={this.disabled}
        onPress={this.press}
        style={this.containerStyle}>
        <View>
          <Image
            source={this.props.source}
            style={{resizeMode: 'contain', marginBottom: this.props.space || 3}}
          />
          <Text style={{textAlign: 'center'}}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
