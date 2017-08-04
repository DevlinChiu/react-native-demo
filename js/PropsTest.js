import React, {Component, PropTypes} from 'react';

import {
    Text,
    View
} from 'react-native';

export default class PropsTest extends Component{

    static defaultProps={
        name:'小张',
        age:20,
        sex:'男'
    };

    static propTypes={
        sex:PropTypes.string.isRequired,
        age:PropTypes.number
    };



    constructor(){
        super();
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:20}}>姓名：{this.props.name}</Text>
                <Text style={{fontSize:20}}>年龄：{this.props.age}</Text>
                <Text style={{fontSize:20}}>性别：{this.props.sex}</Text>
            </View>

        );
    }
}