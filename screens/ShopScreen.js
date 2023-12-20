import { StyleSheet, View } from "react-native";
import Header from "../components/Shop/Header";
import Categorie from "../components/Shop/Categorie";
import Deals from "../components/Shop/Deals";
import Item from "../components/Shop/Item";
import Footer from "../components/Shop/Footer";

const ShopScreen = () => {
    return(
        <View style={styles.container}>
            <Header />
            <Categorie />
            <Deals />
            <Item />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    }
});

export default ShopScreen;