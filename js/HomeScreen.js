import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    Alert
} from 'react-native';


export default class HomeScreen extends Component {

    static navigationOptions = () => ({
        title: 'Home',
    });

    constructor(props) {
        super(props);
        this.state = {
            disable: false
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        let btn1 = (
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('List', {title: 'ListViewDemo'})}>
                <Text style={styles.text}>ListView</Text>
            </TouchableOpacity>);
        let btn2 = (
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('Props', {title: 'Test'})}>
                <Text style={styles.text}>PropsTest</Text>
            </TouchableOpacity>
        );
        let btn3 = (
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    this.showDialog()
                }}>
                <Text style={styles.text}>Dialog</Text>
            </TouchableOpacity>
        );
        let btn4 = (
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('Flat', {title: 'Flat'})}>
                <Text style={styles.text}>FlatList</Text>
            </TouchableOpacity>
        );
        let btn5 = (
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('Tab', {title: 'Tab'})}>
                <Text style={styles.text}>Tab</Text>
            </TouchableOpacity>
        );
        return (
            <View style={styles.container}>
                {btn1}{btn2}{btn4}{btn3}{btn5}
            </View>

        );
    }

    showDialog() {
        Alert.alert(
            '提示',
            '确定要删除吗?',
            [
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '确定', onPress: () => console.log('OK Pressed')},
            ]
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    button: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#000',
        margin: 10,
        alignItems:'center'
    },
    text: {
        color: '#000',
        fontSize: 20,
        alignSelf:'center',
        padding: 10
    },
});