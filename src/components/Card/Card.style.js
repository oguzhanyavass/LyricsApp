import { StyleSheet } from "react-native"


export default StyleSheet.create({
    container:{
        backgroundColor:'#5e548e',
        margin:15,
        borderRadius:10,
        borderWidth: 1.5,
        borderColor:'#eae2b7',
        width:350,
        marginTop:1,
        marginBottom:2,
    },
    body:{
        padding:10,
    },
    title:{
        fontFamily:"e0b1cb",
        fontSize: 25,
        margin:10,
        marginBottom:3,
        fontWeight:"bold",
        color: '#e9ecef',
    },
    text:{
        fontFamily:"e0b1cb",
        margin:10,
        fontSize: 18,
        marginTop:3,
        color: '#e9ecef',
    },
    button_container:{
        backgroundColor:"#48bfe3",
        padding:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
    },
    button_title:{
        color:'#231942',
        fontWeight:"bold",
    }
});