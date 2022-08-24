
import React, { useState, useEffect, createContext } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "./style";

const Test = createContext();

export default function Home(props) {

    const [mode, setSearchMode] = useState("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const [search, onChangeSearch] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch(mode, requestOptions)
            .then(res => res.json())
            .then(res => {
                setData(res.drinks[0])
            })
            .catch(error => console.log('error', error))
            .finally(() => setLoading(false));

    }, [mode]);

    useEffect(() => {
        if (search !== "") {
            setSearchMode(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }, [search]);

    return (

        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeSearch}
                placeholder="search by name"
                style={styles.search}
            />
            {!isLoading ?
                <View >
                    <View style={styles.block}>
                    <Text style={styles.title}>{data.strDrink}</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Detail', { name: data.strDrink })}
                        >
                            <Image source={{ uri: data.strDrinkThumb }} style={{ height: 200, width: 200, resizeMode: 'stretch', margin: 5 }} />
                            <Text style={styles.text}>show more→</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : <Text style={styles.text}>Loading...</Text>
            }
        </View>
    )
}

export { Test };