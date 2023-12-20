import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function page2() {
    const handleImagePress = () => {
        Linking.openURL('https://www.example.com');
    };

    return (
        <ScrollView vertical>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ borderWidth: 1, borderColor: '#000', padding: 10, width: 35, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                        <Image source={require('./assets/fleche-fine-contour-vers-la-gauche.png')}
                            style={{ width: 20, height: 20, }}
                        />
                    </View>


                    <Image source={require('./assets/sac-en-papier.png')}
                        style={{
                            width: 30, height: 30,
                        }}
                    />
                    <StatusBar style="auto" />
                </View>


                <View style={styles.headerText}>
                    <Text style={styles.Text}>My Order</Text>
                </View>



                <View style={styles.partfint}>
                    <View style={styles.part}>

                        <Image source={require('./assets/orange-png-png_75700.png')}
                            style={{
                                width: 40, height: 40,
                            }}
                        />
                    </View>
                    <View style={{
                        width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
                    }}>
                        <View style={{
                            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold' }}>1X</Text>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Orange</Text>
                            </View>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: 45, height: 45, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
                    }}>
                        <Image source={require('./assets/poubelle-de-recyclage.png')}
                            style={{
                                width: 25, height: 25,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.partfint}>
                    <View style={styles.partf}>

                        <Image source={require('./assets/fraises.png')}
                            style={{
                                width: 50, height: 40,
                            }}
                        />
                    </View>
                    <View style={{
                        width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
                    }}>
                        <View style={{
                            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold' }}>1X</Text>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Fraise</Text>
                            </View>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: 45, height: 45, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
                    }}>
                        <Image source={require('./assets/poubelle-de-recyclage.png')}
                            style={{
                                width: 25, height: 25,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.partfint}>
                    <View style={styles.part}>

                        <Image source={require('./assets/mangue.png')}
                            style={{
                                width: 50, height: 40,
                            }}
                        />
                    </View>
                    <View style={{
                        width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
                    }}>
                        <View style={{
                            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold' }}>1X</Text>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mangue</Text>
                            </View>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: 45, height: 45, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
                    }}>
                        <Image source={require('./assets/poubelle-de-recyclage.png')}
                            style={{
                                width: 25, height: 25,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.partfint}>
                    <View style={styles.part}>

                        <Image source={require('./assets/raisin.png')}
                            style={{
                                width: 55, height: 40,
                            }}
                        />
                    </View>
                    <View style={{
                        width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
                    }}>
                        <View style={{
                            width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold' }}>1X</Text>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
                        }}>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Grape</Text>
                            </View>
                            <View style={styles.bloccc}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: 45, height: 45, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
                    }}>
                        <Image source={require('./assets/poubelle-de-recyclage.png')}
                            style={{
                                width: 25, height: 25,
                            }}
                        />
                    </View>
                </View>
                <View style={{ width: 350, height: 2, backgroundColor: '#b8b8b8', marginTop: 30, }}>

                </View>

                <View style={{ width: 350, height: 2, marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Total Pice</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$50</Text>
                </View>


                <View style={{
                    width: 200, height: 45, backgroundColor: 'rgb(255 136 204)', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
                    margin:70
                }}>
                    <View style={styles.bloccc}>
                        <Text style={{ color: '#fff', fontSize: 20,}}>Payment</Text>

                    </View>
                </View>




            <StatusBar style="auto" />
        </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 50,
        display: 'flex',
    },
    header: {
        marginTop: '30px',
        height: '6px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    img: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    headerText: {
        padding: 15,
        marginTop: '50px',
        height: '6px',
        width: '500px',
        flexDirection: 'column',
    },
    Text: {
        height: '6px',
        width: 80,
        justifyContent: 'space-between',
        flexDirection: 'row',
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 30,
        color: '#292725'
    },
    headerbtn: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: "space-between",
        width: 420,
        marginTop: 5,
        textAlign: 'center',
        alignItems: 'center'

    },
    btn: {
        backgroundColor: 'red',
        borderBottomColor: '#737373',
    },
    ct: {
        backgroundColor: '#F8D7A6',
        width: 200,
        height: 240,
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    imgct: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cts: {
        marginLeft: 150,

    },
    cs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 170,
    },

    ctx: {
        backgroundColor: '#FFF07B',
        width: 200,
        height: 240,
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonx: {
        backgroundColor: '#FFE200',
        borderRadius: 50, // Arrondir les bordures du bouton
        padding: 8,
        width: 100,
        marginTop: 20
    },
    txta: {
        color: '#FFE200', // Changer la couleur du texte
        fontSize: 16,
    },

    txtf: {
        color: '#F70505', // Changer la couleur du texte
        fontSize: 16,
    },
    ctm: {
        backgroundColor: '#FBE09A',
        width: 200,
        height: 240,
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonm: {
        backgroundColor: '#FFA500',
        borderRadius: 50, // Arrondir les bordures du bouton
        padding: 8,
        width: 100,
        marginTop: 20
    },
    txtm: {
        color: '#FFA500', // Changer la couleur du texte
        fontSize: 16,
    },
    bloc: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 370,
        height: 350,
        marginTop: -150,
        marginLeft: -23,
        backgroundColor: '#fff',
        zIndex: -1,
        borderRadius: 50,
        padding: 40,
        paddingTop: 140
    },
    blocc: {
        display: 'flex',
        flexDirection: 'row',
        width: 540,
        marginTop: 5,
        padding: 20,
        paddingLeft: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    part: {
        display: 'flex',
        flexDirection: 'row',
        width: 70,
        height: 60,
        backgroundColor: '#F8D7A6',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    partf: {
        display: 'flex',
        flexDirection: 'row',
        width: 70,
        height: 60,
        backgroundColor: '#FCA0A0',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },


    partfint: {
        display: 'flex',
        flexDirection: 'row',
        width: 340,
        height: 70,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    bloccc: {
        marginLeft: 10,
        width: 'auto'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90,
        bottom: -30,
        left: 0,
        right: 0,

    },

});
