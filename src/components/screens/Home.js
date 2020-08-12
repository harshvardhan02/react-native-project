import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';
import CustomHeader from '../common/CustomHeader'

const apiEndpoint = 'https://reqres.in/api/users?page=2'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(apiEndpoint)
            .then(res => {
                const users = res.data.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader
                    title='Home'
                    isHome={true}
                    navigation={this.props.navigation}
                />
                <ScrollView>                    
                    <View style={{ marginTop: 10 }}>
                        {this.state.users.map(user => (
                            <View key={user.id} style={{ backgroundColor: '#fff', marginHorizontal: 10, marginVertical: 4, padding: 10, borderRadius: 8 }}>
                                <Text onPress={() => {
                                    this.props.navigation.navigate('ProfileDrawer', {
                                        userId: user.id,
                                        userName: user.first_name
                                    });
                                }} style={{ fontFamily: 'Muli-Bold', fontSize: 14 }}>{user.first_name}</Text>
                                <Text style={{ fontFamily: 'Muli-Regular', marginTop: 5 }}>{user.email}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
