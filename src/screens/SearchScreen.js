import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import useResults from '../hooks/useResults'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList results={
                    filterResultsByPrice('$')}
                    title="Cost Effective" />

                <ResultsList results={
                    filterResultsByPrice('$$')}
                    title="Bit Pricier" />

                <ResultsList results={
                    filterResultsByPrice('$$$')}
                    title="Big Spender" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen