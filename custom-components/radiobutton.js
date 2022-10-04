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

    setSelected(buttonId) {
        this.setState({ value: buttonId })
    }

    render = () => {
        return (
            <View>
                <Button title={this.props.nameB1} onPress={() => this.setSelected(this.name)}>{this.name}</Button>
                <Button title={this.props.nameB2} onPress={() => this.setSelected(this.name2)}>{this.name2}</Button>
            </View >
        );
    }
}
