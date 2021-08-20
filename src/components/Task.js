import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import commonStyles from '../commonStyles'

export default props => {

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text>{props.desc}</Text>
                <Text>{props.estimateAt + ""}</Text>
            </View>
                    
        </View>
    )
}

function getCheckView(doneAt){
    if(doneAt != null){
        return (
            <View style={styles.done}>
                <Icon name='checkmark' size={20} color={'#FFF'}></Icon>
            </View>
        )
    }else {
        return (
            <View style={styles.peding}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer: {
        width: "20%",
        alignItems: 'center' 
    },
    peding: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    desc: {
        // fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText
    },
})