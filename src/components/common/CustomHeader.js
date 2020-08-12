import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class CustomHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={{ justifyContent: 'center' }}>
                    {
                        this.props.isHome ?
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <MaterialIcon name='menu' size={30} color='#000' style={{ marginLeft: 8 }} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <MaterialIcon name='keyboard-arrow-left' size={30} color='#000' style={{ marginLeft: 8 }} />
                            </TouchableOpacity>
                    }
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        textAlign: "center",
        fontSize: 16, 
        color: '#000',
        fontFamily: 'Muli-Bold',
    }
})