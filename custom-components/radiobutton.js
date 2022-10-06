import React, { Component, setState } from 'react';
import { Button, View } from 'react-native';

export class RadioButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            buttonColors: {
                btn1: props.colorNotSelected, btn2: props.colorNotSelected
            }
        };
        this.setSelected = this.setSelected.bind(this)
    }


    setSelected(buttonId, callback) {
        callback(buttonId)
        var btnColors = { btn1: undefined, btn2: undefined }
        if (this.props.nameB1 == buttonId) {
            btnColors = { btn1: this.props.colorSelected, btn2: this.props.colorNotSelected }
        } else if (this.props.nameB2 == buttonId) {
            btnColors = { btn1: this.props.colorNotSelected, btn2: this.props.colorSelected }
        }
        this.setState({ value: buttonId, buttonColors: btnColors })
        console.log(this.state.value)
    }

    render = () => {
        return (
            <View style={this.props.style}>
                <Button style={{ flex: 1 }} title={this.props.nameB1} onPress={() => this.setSelected(this.props.nameB1, this.props.callback)}
                    color={this.state.buttonColors.btn1}>{this.props.nameB1}</Button>
                <View style={{ flex: 0.1 }} />
                <Button style={{ flex: 1 }} title={this.props.nameB2} onPress={() => this.setSelected(this.props.nameB2, this.props.callback)}
                    color={this.state.buttonColors.btn2}>{this.props.nameB2}</Button>
            </View >
        );
    }
}
