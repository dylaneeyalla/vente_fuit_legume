import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';


export default function App({navigation}) {
  const handleImagePress = () => {
    Linking.openURL('https://www.example.com');
  };

  return (
    <ScrollView vertical>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/menu.png')}
            style={{ width: 40, height: 40 }}
          />
          <View style={styles.img}>
            <Image source={require('./assets/blog5.jpg')}
              style={{
                width: 40, height: 40, borderRadius: 50,
              }}
            />
            <StatusBar style="auto" />
          </View>
        </View>


        <View style={styles.headerText}>
          <Text style={styles.Text}>Discover Seasonal
            Fruits and vegitables</Text>
        </View>


        <ScrollView horizontal>
          <View style={styles.headerbtn}>
            <TouchableOpacity style={{
              backgroundColor: '#FDCECE',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}>
              <Text style={styles.buttonText}>Orange</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight:'bold'}}>Grape</Text>
            <Text style={{ fontWeight:'bold'}}>Pineapple</Text>
            <Text style={{ fontWeight:'bold'}}>Strave</Text>
            <Text style={{ fontWeight:'bold'}}>mangue</Text>

          </View>
        </ScrollView>

        <ScrollView horizontal>
          <View style={styles.bloc}>
            <View style={styles.ct}>



              <View style={styles.cts}>
                <View style={styles.imgct}>
                  <Image source={require('./assets/coeur.png')}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={require('./assets/orange-png-png_75700.png')}
                style={{
                  width: 120, height: 120, marginTop: -20,
                }}
              />
              <View style={styles.cs}>
                <Text style={styles.txt}>Orange</Text>
                <Text style={styles.txt}>$10</Text>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.ctss}>

              <View style={styles.cts}>
                <View style={styles.imgct}>
                  <Image source={require('./assets/coeur.png')}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={require('./assets/raisin.png')}
                style={{
                  width: 200, height: 120, marginTop: -20,
                }}
              />
              <View style={styles.cs}>
                <Text style={styles.txtx}>Grape</Text>
                <Text style={styles.txtx}>$10</Text>
              </View>

              <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.ctx}>

              <View style={styles.cts}>
                <View style={styles.imgct}>
                  <Image source={require('./assets/coeur.png')}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={require('./assets/ananas.png')}
                style={{
                  width: 150, height: 120, marginTop: -20,
                }}
              />
              <View style={styles.cs}>
                <Text style={styles.txta}>Orange</Text>
                <Text style={styles.txta}>$10</Text>
              </View>

              <TouchableOpacity style={styles.buttonx}>
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.ctf}>

              <View style={styles.cts}>
                <View style={styles.imgct}>
                  <Image source={require('./assets/coeur.png')}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={require('./assets/fraises.png')}
                style={{
                  width: 150, height: 120, marginTop: -20,
                }}
              />
              <View style={styles.cs}>
                <Text style={styles.txtf}>Orange</Text>
                <Text style={styles.txtf}>$10</Text>
              </View>

              <TouchableOpacity style={styles.buttonf}>
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.ctm}>

              <View style={styles.cts}>
                <View style={styles.imgct}>
                  <Image source={require('./assets/coeur.png')}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={require('./assets/mangue.png')}
                style={{
                  width: 150, height: 120, marginTop: -20,
                }}
              />
              <View style={styles.cs}>
                <Text style={styles.txtm}>Orange</Text>
                <Text style={styles.txtm}>$10</Text>
              </View>

              <TouchableOpacity style={styles.buttonm}>
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
        <View style={styles.bloccc}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 22 }}>Nearby Shop</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.blocc}>
            <View style={styles.part}>
              <View style={{
                width: 80, height: 60, backgroundColor: '#FDCECE', justifyContent: 'center', alignItems: 'center', borderRadius: 20
              }}>
                <Image source={require('./assets/boutique.png')}
                  style={{
                    width: 40, height: 40,
                  }}
                />
              </View>
              <View style={styles.bloccc}>
                <Text style={{ fontWeight: 'bold' }}>Xenter Shop</Text>
                <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                <Text style={{ fontWeight: 'bold' }}>9A.M - 7 P.M</Text>
              </View>

            </View>
            <View style={styles.part}>
              <View style={{
                width: 80, height: 60, backgroundColor: '#FDCECE', justifyContent: 'center', alignItems: 'center', borderRadius: 20
              }}>
                <Image source={require('./assets/boutique-en-ligne.png')}
                  style={{
                    width: 40, height: 40,
                  }}
                />
              </View>
              <View style={styles.bloccc}>
                <Text style={{ fontWeight: 'bold' }}>Xenter Shop</Text>
                <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                <Text style={{ fontWeight: 'bold' }}>9A.M - 7 P.M</Text>
              </View>

            </View>
            <StatusBar style="auto" />
          </View>
        </ScrollView>

        <View style={styles.footer}>

          <Image source={require('./assets/maison.png')}
            style={{
              width: 35, height: 35,
            }}
          />
          <TouchableOpacity onPress={handleImagePress}>
          <Image source={require('./assets/chercher.png')}
            style={{
              width: 35, height: 35,
            }}
          />
          </TouchableOpacity>
          <Image source={require('./assets/sac-de-courses.png')}
            style={{
              width: 35, height: 35,
            }}
          />
          <Image source={require('./assets/utilisateur.png')}
            style={{
              width: 35, height: 35,
            }}
          />

        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 1100,
    marginTop:20
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
    width: 250,
    height: 90,
    borderWidth: 1, // Épaisseur de la bordure
    borderColor: '#FDCECE', // Couleur de la bordure
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  bloccc: {
    marginLeft: 10,
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
