import { StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Icon name="home" size={30} color='#333' />
            <Icon name="heart" size={30} color='#333' />
            <Icon name="shopping-bag" size={30} color='#fff' style={styles.btn} />
            <Icon name="list" size={30} color='#333' />
            <Icon name="notification" size={30} color='#333' />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#01aa67',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60
    }
});

export default Footer;