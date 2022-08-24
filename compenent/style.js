import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: "#fff",
    },
    title: {
        color: "#fff",
        fontSize: 23,
    },

    col: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
    },

    list: {
        color: "#fff",
        display: "flex",
    },

    block: {
        borderWidth: 4,
        borderColor: "#20232a",
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgD: {
        height: 200,
        width: 200,
        resizeMode: 'stretch',
        // margin: 5
    },

    imgH: {
        height: 400,
        width: 400,
        resizeMode: 'stretch',
    },
    search: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: 200,
        // borderBottomLeftRadius: 3,
        borderRadius: 50,
        marginBottom: 50,

    },

});

export default styles;