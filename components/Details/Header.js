import { View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='chevron-left' size={30} />
                <View style={styles.iconGroup}>
                    <Icon name='upload' size={30} />
                    <Icon name='info-circle' size={30} />
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('../../assets/add.png')} style={{width: 200, height: 200}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        rowGap: 20,
        alignItems: 'center'
    },
    header: {
        width: '100vw',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconGroup: {
        flexDirection: 'row',
        columnGap: 30
    },
    card: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        backgroundColor: '#e6f1ed',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;