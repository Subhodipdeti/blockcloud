import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    topOuterCard: {
        backgroundColor: '#192A56',
        width: '100%'
    },
    list: {
        backgroundColor: '#A4B0BD',
        margin: 10,
        borderRadius: 5
    },
    listLeftView: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 100,
    },
    listRightView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    commonText: {
        fontFamily: 'BlissPro-Bold',
        color: '#fff',
    },
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    noActivityText: {
        fontFamily: 'BlissPro-Bold',
        fontSize: 20,
    },
    transactionsText: {
        fontFamily: 'BlissPro',
        opacity: 0.6,
    },
    iconContainer: {
        marginTop: 100,
        borderColor: 'rgba(23, 73, 255, 0.5)',
        borderWidth: 5,
        backgroundColor: 'rgba(23, 73, 255, 1)',
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

})