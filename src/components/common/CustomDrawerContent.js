import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomDrawerContent = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#3685A7', '#49C7FF']}
                style={styles.container}>
                <View style={{ height: 170, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{color: '#fff', fontFamily: 'Muli-Bold', fontSize: 18}}>AwesomeProject</Text>
                </View>
            </LinearGradient>
            <ScrollView style={{ marginLeft: 20, paddingTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, }}>
                    <MaterialCommunityIcons name='home-outline' size={25} color='#4C4D4F' />
                    <TouchableOpacity onPress={() => navigation.navigate('HomeDrawer')}>
                        <Text style={styles.drawerText}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, }}>
                    <MaterialCommunityIcons name='account-outline' size={25} color='#4C4D4F' />
                    <TouchableOpacity onPress={() => navigation.navigate('UserDetailsDrawer')}>
                        <Text style={styles.drawerText}>User Details</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    drawerText: {
        fontSize: 16, 
        fontFamily: 'Muli-Bold', 
        color: '#4C4D4F', 
        marginLeft: 20
    }
})