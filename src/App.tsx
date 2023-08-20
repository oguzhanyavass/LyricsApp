import React from "react";
import { SafeAreaView,StyleSheet} from "react-native";
import Card from './components/Card'

function App(){
return(
    <SafeAreaView style ={styles.container}>
        <Card title="Steve Jobs" text="Odaklanmak, 1000 iyi fikre hayır diyebilmektir."/>
        <Card title="Ron Jeffries" 
        text="Kod yalan söylemez, yorumlar bazen söyler."/>
        <Card title="Linus Torvalds" 
        text="İnsanlar, yazılımın ürün olmadığını, ürün üretmek için kullanıldığını anlayacaklar."/>
        <Card title="David Heinemeier Hansson" 
        text="Programcılar, 
        geleceği düşündükleri için sürekli olarak 
        işleri gereğinden fazla karmaşıklaştırmaktadırlar. 
        Geleceği boşverin. Bugün için programlayın."/>
    </SafeAreaView>
);
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#231942',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
});

export default App;