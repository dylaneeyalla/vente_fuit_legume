import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

export default function page2() {


  return (
    <ScrollView vertical>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ backgroundColor: 'rgb(255 136 204)', padding: 10, width: 35, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
            <Image source={require('./assets/fleche-fine-contour-vers-la-gauche.png')}
              style={{ width: 20, height: 20, }}
            />
          </View>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
          }}>Juicy Orange</Text>

          <Image source={require('./assets/partager.png')}
            style={{
              width: 30, height: 30,
            }}
          />
          <StatusBar style="auto" />
        </View>


        <View style={styles.headerText}>
          <Text style={styles.Text}>Juicy Orange</Text>
          <Text style={{ color: 'rgb(255 136 204)', fontSize: 10 }}>Sweet and Juicy</Text>
        </View>



        <View style={styles.headerbtn}>

          <Text style={{ width: 310, textAlign: 'justify', marginTop: -20 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat aliquam quam repellat dolorem eveniet laudantium quidem dolorum animi! Nihil enim praesentium
          </Text>

        </View>
        <View style={styles.partfint}>
          <View style={styles.part}>

            <Image source={require('./assets/coeur.png')}
              style={{
                width: 40, height: 40,
              }}
            />
          </View>
          <View style={{
            width: 200, height: 60, backgroundColor: 'rgb(255 136 204)', justifyContent: 'center', alignItems: 'center', borderRadius: 20
          }}>
            <View style={styles.bloccc}>
              <Text style={{ fontWeight: 'bold',color:'#fff' }}>Find Nearest Store</Text>

            </View>
          </View>
        </View>

        <Image source={require('./assets/orange-png-png_75700.png')}
          style={{
            width: 250, height: 250, marginLeft: 30
          }}
        />
        <View style={styles.bloc}>
        <Text style={{ fontWeight: 'bold', fontSize:22 }}>Find Nearest Store</Text>
        <Text style={{color:'rgb(195 195 195)', fontSize:20, marginTop:-50 }}>Fiber    3 g                                  7%</Text>
        <View style={{width:300,height:10,backgroundColor:'rgb(195 195 195)',borderRadius:10,marginTop:-65}}>
        <View style={{width:100,height:10,backgroundColor:'pink',borderRadius:10,}}>
            <Text></Text>
          </View>
        </View>

        <Text style={{color:'rgb(195 195 195)', fontSize:20, marginTop:-50 }}>Good suger    12 g                    5%</Text>
        <View style={{width:300,height:10,backgroundColor:'rgb(195 195 195)',borderRadius:10,marginTop:-65}}>
        <View style={{width:180,height:10,backgroundColor:'pink',borderRadius:10,}}>
            <Text></Text>
          </View>
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
    backgroundColor: '#F8D7A6',
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
    width: 220,
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
  button: {
    backgroundColor: '#FF9800',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt: {
    color: '#FF8F06', // Changer la couleur du texte
    fontSize: 16,
  },

  ctss: {
    backgroundColor: '#BCC8FF',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: '#0C2492',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtx: {
    color: '#0C2492', // Changer la couleur du texte
    fontSize: 16,
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

  ctf: {
    backgroundColor: '#FCA0A0',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonf: {
    backgroundColor: '#FF0000',
    borderRadius: 50, // Arrondir les bordures du bouton
    padding: 8,
    width: 100,
    marginTop: 20
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
    padding:40,
    paddingTop:140
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
    borderWidth: 1, // Épaisseur de la bordure
    borderColor: 'rgb(255 136 204)', // Couleur de la bordure
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partfint: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 70,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
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
