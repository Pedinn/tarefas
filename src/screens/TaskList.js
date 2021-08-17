import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
                <View style={styles.container}>
                    <ImageBackground source={todayImage}
                        style={styles.background}>
                        <View style={styles.titleBar}>
                            <Text>Hoje</Text>
                            <Text>{today}</Text>
                        </View>
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
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',

    },
})