import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {infoBarIconElement} from '../styles/base'
import BaseBarElement from './BaseBarElement';

export default class InfoBarIconElement extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {...infoBarIconElement , ...(props.containerStyle || {})}
    }
    _renderButtonContents() {
        return(<View><Image source={this.props.source}  style={{ resizeMode:"contain", marginBottom: this.props.space || 3 }}/>
        <Text style={{textAlign:'center'}}>{this.props.text}</Text></View>)
    }
    renderAsInfo(){
        return(
        <View style={this.containerStyle}>
            {this._renderButtonContents()}
          </View>
        )
    }
    renderAsButton() {
        return(
            <TouchableOpacity style={this.containerStyle} onPress={this.props.press}>
                {this._renderButtonContents()}
            </TouchableOpacity>
        )
    }
    render() {
        
        if (this.props.press) {
           return(super.render())
        } else {
            return(this.renderAsInfo())
        }
    }

}


