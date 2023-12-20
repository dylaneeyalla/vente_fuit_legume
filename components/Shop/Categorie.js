import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


const Categorie = () => {
    return(
        <View>
            <View style={styles.title}>
                <Text>Categories</Text>
                <Text>see all</Text>
            </View>
            <ScrollView style={styles.productList} horizontal>
                <View style={styles.product}>
                    <View style={styles.cardProduct}>
                        <Image />
                    </View>
                    <Text>Vegetables</Text>
                </View>
                <View style={styles.product}>
                    <View style={styles.cardProduct}>
                        <Image />
                    </View>
                    <Text>Dairies</Text>
                </View>
                <View style={styles.product}>
                    <View style={styles.cardProduct}>
                        <Image />
                    </View>
                    <Text>Meats</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productList: {
        display: 'flex',
        flexDirection: 'row',
        gap: 30
    },
    product: {
        alignItems: 'center'
    },
    cardProduct: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Categorie;