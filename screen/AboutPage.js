import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation'

export default class About extends React.Component {
    static navigationOptions = {
        title: 'About YOue',
    }

    render() {
        const { navigate, push, goBack } = this.props.navigation;return (
            <View>
                <NavigationEvents
                    onWillFocus={payload => console.warn('will focus', payload)}
                    onDidFocus={payload => console.warn('did focus', payload)}
                    onWillBlur={payload => console.warn('will blur', payload)}
                    onDidBlur={payload => console.warn('did blur', payload)}
                />
                <Text></Text>
            </View>
        );
    }
}
