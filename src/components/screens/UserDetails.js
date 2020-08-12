import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';
import CustomHeader from '../common/CustomHeader'

class UserDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomHeader
                    title='User Details'
                    isHome={true}
                    navigation={this.props.navigation}
                />
                <Text> {this.props.user} </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.username 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default connect(mapStateToProps)(UserDetails);
