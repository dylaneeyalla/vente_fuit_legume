import { Image, StyleSheet, Text, View } from "react-native"

const Deals = () => {
    return(
        <View>
            <View>
                <Text>Deals</Text>
                <Text>See all</Text>
            </View>
            <View style={styles.card}>
                <View>
                    <Text>50% OFF</Text>
                    <Text>On Grocery Combo packs</Text>
                    <View style={styles.btn}>
                        <Text style={{color: '#1ca56f'}}>Shop now</Text>
                    </View>
                </View>
                <Image />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#def3ea',
        padding: 40,
        borderRadius: 20
    },
    btn: {
        backgroundColor: '#fff',
        width: 80,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Deals;