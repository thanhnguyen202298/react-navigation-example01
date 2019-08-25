import React from 'react';
import { Button, View } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'welcome home app'
    }

    render() {
        const { navigate,push } = this.props.navigation;
        return (
            <Button
                title="Go to profile"
                onPress={() => navigate('Profile', { name: 'Jane of thanh' })}/>
        );
    }
}
