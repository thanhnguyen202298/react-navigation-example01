import React from 'react';
import { Button, View, Text } from 'react-native';

export default class Setting extends React.Component {
    static navigationOptions = {
        title: 'Seeting'
    }

    render() {
        const { navigate, push, goBack } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Seetign pagee"
                    onPress={() => push('About', { title: 'this. is about layer' })} />

                

            </View>
        );
    }
}
