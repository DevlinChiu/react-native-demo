import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Tabs from "./Tabs";

export default class OneScreen extends Component {


    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <Text style={styles.text}>Loding...</Text>
                </View>
            )
        } else {
            return (<Tabs/>)
        }
    }

    componentDidMount() {
        setTimeout(() => { //延时，解决TabNavigator嵌套导致滑动冲突问题
            //这里的代码将在1000ms(1s)后执行
            this.setState({
                isLoading: false
            });
        }, 1000);
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 30,
        color: '#000'
    }
});