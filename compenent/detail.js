
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import styles from "./style";

export default function Detail(props) {

    const [isLoading, setLoading] = useState(true);
    const [ingredient, setIngredient] = useState([])
    const [data, setData] = useState([]);
    const strIngredient = []
    var key = ""
    var measure = ""

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.route.params.name}`, requestOptions)
            .then(res => res.json())
            .then(res => {
                setData(res.drinks[0])

                for (let index = 1; index <= 15; index++) {
                    key = "strIngredient" + index
                    measure = "strMeasure" + index

                    if (res.drinks[0].hasOwnProperty(key) && res.drinks[0][key] !== null) {
                        if (res.drinks[0][measure] !== null) {
                            strIngredient.push(res.drinks[0][key] + " : " + res.drinks[0][measure])
                        }
                        else (
                            strIngredient.push(res.drinks[0][key])
                        )
                    }
                }
                setIngredient(strIngredient)
            })
            .catch(error => console.log('error', error))
            .finally(() => setLoading(false));

    }, []);

    return (

        // {!isLoading ? <Text>Loading...</Text> :
        <View style={styles.container}>
            <Text style={styles.title}>{data.strDrink}</Text>

            <View style={styles.block}>

                <View style={styles.col}>
                    <Image source={{ uri: data.strDrinkThumb }} style={{ height: 200, width: 200, resizeMode: 'stretch', margin: 5 }} />
                    <View>
                        {ingredient.map((item) => (
                            <Text key={key} style={styles.text}> {item} </Text>)
                        )}
                    </View>
                </View>
                <Text style={styles.text}>{data.strInstructions}</Text>


            </View>
        </View>
        // }

    )
}