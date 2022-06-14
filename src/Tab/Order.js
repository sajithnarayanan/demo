import React, {Component}  from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from 'react-native';

export default class Order extends Component{

    render(){
        return(
            <View style= {styles.container}>
                <Text style= {styles.categoryText}>Hi this is Orders Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    categoryText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        elevation: 4,
        marginBottom: 10
    },
    itemText: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    itemDesc: {
        fontSize: 12,
        color: '#369',
        fontWeight: 'bold',
        marginTop: 5
    }
})