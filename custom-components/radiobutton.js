import React, { Component, setState } from 'react';
import { Button, View } from 'react-native';

export class RadioButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
        this.setSelected = this.setSelected.bind(this)
    }

    setSelected(buttonId, callback) {
        callback(buttonId)
        this.setState({ value: buttonId })
        console.log(this.state.value)
    }

    render = () => {
        return (
            <View>
                <Button title={this.props.nameB1} onPress={() => this.setSelected(this.props.nameB1, this.props.callback)}>{this.props.nameB1}</Button>
                <Button title={this.props.nameB2} onPress={() => this.setSelected(this.props.nameB2, this.props.callback)}>{this.props.nameB2}</Button>
            </View >
        );
    }
}
