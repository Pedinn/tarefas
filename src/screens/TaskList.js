import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
                <View style={styles.container}>
                    <ImageBackground source={todayImage}
                        style={styles.background}>

                    </ImageBackground>
                    <View style={styles.taskList}>
                        <Text>TaskList</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },  
    taskList: {
        flex: 7,
    },  
})