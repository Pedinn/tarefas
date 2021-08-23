import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
} from 'react-native'

import { useFonts } from 'expo-font';
import Lato from './assets/fonts/Lato.ttf'
import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'

export default class TaskList extends Component {
    render() {
        const [loaded] = useFonts({Lato,})
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
                <View style={styles.container}>
                    <ImageBackground source={todayImage}
                        style={styles.background}>
                            <View style={styles.titleBar}>
                                <Text style={styles.title}>Hoje</Text>
                                <Text style={styles.subTitle}>{today}</Text>
                            </View>
                    </ImageBackground>
                    <View style={styles.taskList}>
                        <Task desc="Comprar Livro" estimateAt={new Date()}
                            doneAt={new Date()} />
                        <Task desc="Ler livro" estimateAt={new Date()}
                            doneAt={null} />
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
    title: {
        fontFamily: 'Lato',
        color: commonStyles.colors.secodary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subTitle: {
        // fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secodary, 
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
     },
})