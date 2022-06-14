import React, {Component}  from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Search extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text style= {styles.searchText}>User name is</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'Red'
    },
    searchText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})