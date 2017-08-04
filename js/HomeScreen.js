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
            <TouchableHighlight
            style={styles.welcome}
            onPress={() => navigate('List', {title: 'ListViewDemo'})}>
            <Text style={{fontSize: 16, textAlign: 'center'}}>ListView</Text>
            </TouchableHighlight>);
        let btn2 = (
            <TouchableOpacity
                style={styles.welcome}
                onPress={() => navigate('Props', {title: 'Test'})}>
                <Text style={{fontSize: 16, textAlign: 'center'}}>PropsTest</Text>
            </TouchableOpacity>
        );
        let btn3 = (
            <TouchableHighlight
                style={styles.welcome}
                onPress={() => {
                    this.showDialog()
                }}>
                <Text style={{fontSize: 16, textAlign: 'center'}}>Dialog</Text>
            </TouchableHighlight>
        );
        let btn4 = (
            <TouchableOpacity
                style={styles.welcome}
                onPress={() => navigate('Flat', {title: 'Flat'})}>
                <Text style={{fontSize: 16, textAlign: 'center'}}>FlatList</Text>
            </TouchableOpacity>
        );
        let btn5 = (
            <TouchableOpacity
                style={styles.welcome}
                onPress={() => navigate('Tab', {title: 'Tab'})}>
                <Text style={{fontSize: 16, textAlign: 'center'}}>Tab</Text>
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
    welcome: {
        height: 50,
        backgroundColor: 'darkcyan',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#0f0',
        margin: 10,
    },
    text: {
        color: '#333333',
        fontSize: 20,
    },
});