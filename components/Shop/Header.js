import { StyleSheet, Text, TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'


const Header = () => {
    return(
        <View style={styles.header}>
            <Text>Your Location</Text>
            <View style={styles.nav}>
                <View>
                    <Text>3892 Olen Thomas Drive, NY</Text>
                    {/* <Icon name="chevron-bottom" /> */}
                </View>
                <View style={styles.profile}></View>
            </View>
            <View style={styles.search}>
                <View style={styles.inputGroup}>
                    <Icon name="search" size={20} />
                    <TextInput placeholder="Search foods, groceries" style={styles.input} />
                    <Icon name="record" size={20} />
                </View>
                <View style={styles.btn}>
                    <Icon name="bars" color='#fff' size={20} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100vw',

    },
    nav: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'green'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 9999,
        justifyContent: 'space-evenly',
        width: '70%'
    },
    input: {
        height: '100%'
    },
    btn: {
        width: 70,
        height: 50,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ae69'
    }
});

export default Header;