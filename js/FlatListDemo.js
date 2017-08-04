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
    FlatList,
    RefreshControl,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableNativeFeedback,
    ToastAndroid,
    Dimensions,
    PixelRatio
} from 'react-native';

let index = 1;
let dataBlob = [];
let { width, height } = Dimensions.get('window');


export default class FlatListDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });

    constructor(props) {
        super(props);
        this.state = {
            dataArr: [],
            isLoading: true,
            isError: false,
        };
    }

    render() {
        if (this.state.isError) {
            return this.renderError;
        }
        return (
            <FlatList
                data={this.state.dataArr}
                renderItem={this.renderMovie.bind(this)}
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (!this.state.isLoading) {
                        index++;
                        this.setState({
                            isLoading: true,
                        });
                        this.getMoviesFromApiAsync();
                    }
                }}
                style={styles.listView}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.onRefresh()}
                        title="Loading..."
                    />}/>
        );
    }

    onRefresh() {
        index = 1;
        dataBlob = [];
        this.getMoviesFromApiAsync();
    }


    renderError() {
        return (
            <Text
                style={styles.text}>
                出错了...
            </Text>
        );
    }

    renderMovie(result) {
        return (
            <TouchableNativeFeedback
                onPress={() => {
                    this.props.navigation.navigate('Detail', {url: result.item.url});
                    ToastAndroid.show("key:" + result.item.key + "  url:" + result.item.url, ToastAndroid.SHORT);
                }}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>{result.item.createdAt}</Text>
                        <Text style={styles.text}>{result.item.desc}</Text>
                        <View
                            style={styles.line}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        );

    }

    componentDidMount() {
        this.getMoviesFromApiAsync();
    }

    getMoviesFromApiAsync() {
        return fetch('http://gank.io/api/data/福利/20/' + index)
            .then((response) => response.json())
            .then((responseData) => {

                let data = responseData.results;
                let i = dataBlob.length;
                data.map(function (item) {
                    item.key = i;
                    dataBlob.push(item);
                    i++;
                });

                this.setState({
                    //复制数据源
                    dataArr: dataBlob,
                    isLoading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    isError: true
                });
                console.error(error);
            })
            .done();
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        height: 80,
        width: 80,
    },
    line: {
        height: 1 / PixelRatio.get(),
        width: width,
        backgroundColor: '#D3D3D3'
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 20,
    },
    listView: {
        backgroundColor: '#F5FCFF',
    },
});

