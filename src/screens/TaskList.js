import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    FlatList,
    TouchableOpacity,
    Platform,
    Alert,
} from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'
import AddTasks from './AddTasks'

export default class TaskList extends Component {
    state = {
        showDoneTasks: true,
        showAddTasks: false,
        visibleTasks: [],
        tasks: [{
            id: Math.random(),
            desc: 'Comprar Livro de React Native',
            estimateAt: new Date(),
            doneAt: new Date(),
        }, {
            id: Math.random(),
            desc: 'Let Livro de React Native',
            estimateAt: new Date(),
            doneAt: null,
        }]
    }

    componentDidMount = () => {
        this.filterTasks()
    }

    
    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        }else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })

        
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filterTasks)
    }

    addTask = newTask => {
        if(!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Descrição não Informada!')
            return 
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null,
        })

        this.setState({ tasks, showAddTasks: false }, this.filterTasks)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(tasks => tasks.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }

   
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
                <View style={styles.container}>
                    <AddTasks isVisible={this.state.showAddTasks}
                        onCancel={() => this.setState({ showAddTasks: false })}
                        onSave={this.addTask}/>
                    <ImageBackground source={todayImage}
                        style={styles.background}>
                            <View style={styles.iconBar}>
                                <TouchableOpacity onPress={this.toggleFilter}>
                                    <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} 
                                        size={20} color={commonStyles.colors.secodary}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.titleBar}>
                                <Text style={styles.title}>Hoje</Text>
                                <Text style={styles.subTitle}>{today}</Text>
                            </View>
                    </ImageBackground>
                    <View style={styles.taskList}>
                        <FlatList data={this.state.visibleTasks} 
                            keyExtractor={item => `${item.id}`}
                            renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask}/>}/>
                    </View>
                    <TouchableOpacity style={styles.addButton}
                        activeOpacity={0.7}
                        onPress={() => this.setState({ showAddTasks: true })}>
                        <Icon name ="plus" size ={20} color={commonStyles.colors.secodary}/>
                    </TouchableOpacity>
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
        // fontFamily: commonStyles.fontFamily,
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
     iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 10
     },
     addButton: {
         position: 'absolute',
         right: 30,
         bottom: 30,
         width: 50,
         height: 50,
         borderRadius: 25,
         backgroundColor: commonStyles.colors.today,
         justifyContent: 'center',
         alignItems: 'center',
     },
})