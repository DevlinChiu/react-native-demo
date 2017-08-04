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
    TouchableWithoutFeedback
} from 'react-native';


export default class ListViewDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            isLoading: true,
            isError: false
        };
    }

    render() {


        if (this.state.isError) {
            return this.renderError();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie.bind(this)}
                style={styles.listView}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.onRefresh()}
                        title="Loading..."
                    />}
            />
        );
    }

    onRefresh() {
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
            <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('Detail', {url:result.url})}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{uri:result.url}}/>
                    <View style={{paddingLeft: 10}}>
                        <Text style={styles.text}>{result.createdAt}</Text>
                        <Text style={styles.text}>{result.desc}</Text>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        );

    }

    componentDidMount() {
        this.getMoviesFromApiAsync();
    }

    getMoviesFromApiAsync() {
        return fetch('http://gank.io/api/data/福利/20/1')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.results),
                    isLoading: false
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
        padding: 10
    },
    image: {
        height: 80,
        width:80,
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

