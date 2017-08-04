import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'


let { width, height } = Dimensions.get('window');
export default class DetailScreen extends Component {

    render() {
        const {params} = this.props.navigation.state;
        return (<Image
                style={styles.image}
                source={{uri: params.url}}
            />

        );

    }

}


const styles = StyleSheet.create({
    image: {
        width: width,
        height: height
    }
});