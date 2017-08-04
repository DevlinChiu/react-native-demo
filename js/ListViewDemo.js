/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    RefreshControl,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ToastAndroid,
    Dimensions
} from 'react-native';

let list = [];
let index = 1;
let {width, height} = Dimensions.get('window');

export default class ListViewDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({//数据源
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            isLoading: true,
            isError: false
        };
    }

    render() {
        if (this.state.isError) {
            return this.renderError();
        } else {
            return this.renderList();
        }
    }

    renderList() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie.bind(this)} // 渲染listView的每一个item，必须实现
                onEndReachedThreshold={100}//触发ListView滑动到最后一个item回调的阈值
                onEndReached={this._onEndReached.bind(this)}//ListView滑动到最后一个item回调，可以用来实现下拉加载
                style={styles.listView}
                refreshControl={//下拉刷新
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.onRefresh()}
                    />}
            />
        );
    }

    renderError() {
        return (
            <Text
                style={styles.text}>
                出错了...
            </Text>
        );
    }

    onRefresh() {
        index = 1;
        list = [];
        this.getMoviesFromApiAsync();
    }

    _onEndReached() {
        console.log("滑到底部了~");
        // ToastAndroid.show("滑到底部了~", ToastAndroid.SHORT);
        if (this.state.isLoading) return;
        this.setState({
            isLoading: true
        });
        index++;
        this.getMoviesFromApiAsync();
    }

    renderMovie(result) {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail', {url: result.url})}>
                <View>
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={{uri: result.url}}/>
                        <View style={{paddingLeft: 10}}>
                            <Text style={styles.text}>{result.createdAt}</Text>
                            <Text style={styles.text}>{result.desc}</Text>
                        </View>
                    </View>
                    <View style={styles.divider}/>
                </View>
            </TouchableOpacity>
        );

    }

    componentDidMount() {
        this.getMoviesFromApiAsync();
    }

    getMoviesFromApiAsync() {
        return fetch(`http://gank.io/api/data/福利/20/${index}`)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.results;
                data.map((item) => {
                    list.push(item);
                });
                setTimeout(() => {//让子弹飞一会儿
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(list),
                        isLoading: false
                    });
                }, 500);
            })
            .catch((error) => {
                this.setState({
                    isError: true
                });
                index--;
                console.error(error);
            })
            .done();
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    image: {
        height: 80,
        width: 80,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 20,
    },
    listView: {
        backgroundColor: '#F5FCFF',
    },
    divider: {
        backgroundColor: '#D3D3D3',
        height: 1,
        width: width
    }
});

