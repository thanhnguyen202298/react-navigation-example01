import React from 'react';
import { Button, View, Text } from 'react-native';
import {withNavigationFocus} from 'react-navigation';

class Profile extends React.Component {
    static navigationOptions = {
        title: 'This is Jane Profile Page'
    }

    render() {
        const { navigate, push, goBack } = this.props.navigation;
        return (
            <View>
                <Button
                    title={this.props.isFocus? 'focused':'not focused'} 
                    onPress={() => push('Profile', { name: 'profile to profile' })} />

                <Button
                    title="to hoem"
                    onPress={() => push('Home', { name: 'hOme to ' })} />

                <Button
                    title="This is Jane's profile"
                    onPress={() => goBack()} />
                <Text></Text>

            </View>
        );
    }
}

export default withNavigationFocus(Profile);