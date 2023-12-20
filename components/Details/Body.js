import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Body = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <View>
                    <View style={styles.titleName}>
                        <Text style={{fontSize: 13, color: '#00ae69'}}>Vegetables</Text>
                    </View>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Broccoli</Text>
                    <Text style={{fontSize: 13, color: '#000'}}>approx 100gm</Text>
                </View>
                <View style={styles.quantity}>
                    <View style={styles.quantityBtn}>
                        <Text style={{fontSize: 30, color: '#00ae69', fontWeight: 'bold'}}>-</Text>
                    </View>
                    <Text style={{fontSize: 25}}>1</Text>
                    <View style={styles.quantityBtn}>
                        <Text style={{fontSize: 30, color: '#00ae69', fontWeight: 'bold'}}>+</Text>
                    </View>
                </View>
            </View>
            <View style={styles.product}>
                <View style={styles.cardProduct}>
                    <View style={styles.card}></View>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Agrifarm Inc</Text>
                        <Text>F5RJ+FJF, Chairtakol</Text>
                    </View>
                </View>
                <View style={styles.starGroup}>
                    <Icon name="star" size={30} color='yellow' />
                    <Text>4.9(89)</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Description</Text>
                <Text style={{fontSize: 20}}>Broccoli is anedible green plan in the cabbage family whose large flowering head, stalk and small associated leaves are <Text style={{color:'#02ab68', fontSize: 23}}>Read More</Text>
                </Text>
            </View>
            <View style={styles.btnGroup}>
                <View style={styles.btn1}>
                    <Icon name="shopping-bag" color='#02ab68' size={20} />
                </View>
                <View style={styles.btn2}>
                    <Text style={{color: '#02ab68', fontSize: 20}}>Add to cart $1.50</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        justifyContent: 'space-between',
        rowGap: 30
    },
    title: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleName: {
        width: 'fit-content', 
        padding: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#00ae69',
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    quantityBtn: {
        width: 40,
        height: 40, 
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#00ae69',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'solid',
        padding: 10
    },
    cardProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20
    },
    card: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#e6f1ed'
    }, 
    btnGroup: {
        flexDirection: 'row',
        columnGap: 20,
        justifyContent: 'center'
    }, 
    btn1:{
        width: 70,
        padding: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn2:{
        width: 280,
        padding: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#02ab68',
        alignItems: 'center',
        justifyContent: 'center'
    },
    starGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    }
});

export default Body;