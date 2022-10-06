import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 100,
        marginHorizontal: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberInput: {
        width: '100%',
        paddingBottom: 20,
    },
    radioButton: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 20
    },
    dropDown: {
        paddingBottom: 20
    },
    submitButton: {
        justifyContent: 'flex-start',
        width: 49
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        paddingBottom: 10
    },
    result: {
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 50,
        justifyContent: 'center'
    }
});
