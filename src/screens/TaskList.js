import React, { Component } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'

export default class TaskList extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
                <View>
                    <Text>TaskList</Text>
                </View>
            </SafeAreaView>
        )
    }
}