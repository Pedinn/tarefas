import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
                <View style={styles.container}>
                    <ImageBackground source={todayImage}>

                    </ImageBackground>
                    <Text>TaskList</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})