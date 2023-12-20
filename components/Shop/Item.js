import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const Item = () => {
    return(
        <View>
            <View>
                <Text>Popular items</Text>
                <Text>See all</Text>
            </View>
            <ScrollView style={styles.items} horizontal>
                <View style={styles.card}>
                    <View style={styles.cardImage}>
                        <Image source={require('./../../ressources/2.png')} style={styles.image} />
                        <Icon name='heart' color='red' size={25} style={styles.like} />
                    </View>
                    <View style={styles.cardFooter}>
                        <View>
                            <Text>Bitrrot</Text>
                            <Text>$1.25</Text>
                        </View>
                        <View style={styles.btn}>
                            <Icon name="shopping-bag" size={20} color='#fff' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        height: 200,
        width: 160,
        borderRadius: 20,
        padding: 10,
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'strech'
    },
    cardImage: {
        borderBottomColor: '#000',
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#00ac67',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    image: {
        width: 100,
        height: 120
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    like: {
        position: 'absolute',
        top: 20,
        left: 110
    }
});

export default Item;