import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native'
import Image from 'react-native-transformable-image';


let {width, height} = Dimensions.get('window');
export default class DetailScreen extends Component {

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.parent}>
                <StatusBar
                    hidden={true}
                    animated={true}/>
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.goBack();
                }}>
                    <Image
                        style={styles.image}
                        source={{uri: params.url}}
                    />

                </TouchableWithoutFeedback>


            </View>

        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: width,
        height: height
    },

    parent: {
        backgroundColor: '#000'
    }
});