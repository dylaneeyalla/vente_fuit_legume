import React from "react";
import { View , StyleSheet, Image, Text} from "react-native";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.cardImage}>
                <Image source={require('../../assets/add.png')} style={styles.image} />
            </View>
            <View style={styles.bottom}>
                <Text style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold'}}>Order Groceries and Get delivered in few minutes</Text>
                <View style={styles.button}>
                    <Text style={styles.btnText}>Get Started</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#e6f1ed',
        rowGap: 50
    },
    cardImage: {
        width: '100%',
        height: '55%',
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: '70%',
        height: '110%'
    }, 
    bottom: {
        width: '100%',
        height: '45%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }, 
    button: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#06ab69',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        borderRadius: 25
    },
    btnText: {
        fontSize: 25, 
        color: '#06ab69'
    }
});

export default HomeScreen;