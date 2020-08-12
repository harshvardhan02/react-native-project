import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import axios from 'axios';
import CustomHeader from '../common/CustomHeader'

const apiEndpoint = 'https://reqres.in/api/users'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleUser: []
        }
    }

    async componentDidMount() {
        //this.getUserById();
        const userId = this.props.route.params.userId
        console.log(userId)
        await axios.get(apiEndpoint + "/" + userId)
            .then(res => {
                const singleUser = res.data.data;
                console.log(singleUser)
                this.setState({ singleUser });
            })
    }
    
    render() {
        console.log("name======>",this.state.singleUser.first_name)
        return (
            <View style={styles.container}>
                <CustomHeader
                    title='Profile'
                    isHome={true}
                    navigation={this.props.navigation}
                />
                <Text> {this.props.route.params.userId} </Text>
                <Text> Name: {this.props.route.params.userName} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
