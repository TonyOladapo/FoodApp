import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    return (
        <View>
            <SearchBar />
            <Text>SearchScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen