import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation'
import {
    StyleSheet,
    Image
} from 'react-native';
import OneScreen from "./OneScreen";
import TwoScreen from "./TwoScreen";
import ThreeScreen from "./ThreeScreen";

let imgOne = require('../img/home.png');
let imgOneAcitve = require('../img/home_active.png');
let imgRead = require('../img/reading.png');
let imgReadActive = require('../img/reading_active.png');
let imgMusic = require('../img/music.png');
let imgMusicActive = require('../img/music_active.png');


export default class TabScreen extends Component {


    render() {
        return (
            <TN/>
        )
    }
}


const TN = TabNavigator({
    One: {
        screen: OneScreen,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    source={focused ? imgOneAcitve : imgOne}
                    style={styles.tabImg}/>
            ),
        }
    },
    Two: {
        screen: TwoScreen,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    source={focused ? imgReadActive : imgRead}
                    style={styles.tabImg}/>
            ),
        }
    },
    Three: {
        screen: ThreeScreen,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    source={focused ? imgMusicActive : imgMusic}
                    style={styles.tabImg}/>
            ),
        }
    }
}, {
    lazy: true,
    swipeEnabled: false,//不能滑动切换
    animationEnabled: false,//不要切换动画
    tabBarOptions: {
        activeTintColor: '#45C018',
        inactiveTintColor: '#999999',
        showIcon: true,
        showLabel: false,
        labelStyle: {
            fontSize: 12,
            marginTop: 0,
            marginBottom: 0,
        },
        style: {
            marginBottom: -2,
            backgroundColor: '#FCFCFC',
        },
        tabStyle: {}
    },
    tabBarPosition: 'bottom',
    backBehavior: true, //直接退出,而不是回到第一个页面
});


const styles = StyleSheet.create({
    tabImg: {
        height: 50,
        width: 50,
    },
});