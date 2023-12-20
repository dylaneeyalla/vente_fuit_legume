import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Details/Header";
import Body from "../components/Details/Body";


const DetailScreen = () => {
    return(
        <View style={styles.container}>
            <Header />
            <Body />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        justifyContent: 'space-evenly',
        // rowGap: 50
    }
});

export default DetailScreen;