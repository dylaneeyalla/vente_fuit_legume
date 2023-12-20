import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';


function Feed() {
   return (
      <ScrollView vertical>
         <View style={style.container}>
            <View style={style.header}>
               <Image source={require('./assets/menu.png')}
                  style={{ width: 40, height: 40 }}
               />
               <View style={style.img}>
                  <Image source={require('./assets/blog5.jpg')}
                     style={{
                        width: 40, height: 40, borderRadius: 50,
                     }}
                  />
                  <StatusBar style="auto" />
               </View>
            </View>


            <View style={style.headerText}>
               <Text style={style.Text}>Discover Seasonal
                  Fruits and vegitables</Text>
            </View>


            <ScrollView horizontal>
               <View style={style.headerbtn}>
                  <TouchableOpacity style={{
                     backgroundColor: '#FDCECE',
                     borderRadius: 50,
                     padding: 5,
                     width: 100
                  }}>
                     <Text style={style.buttonText}>Orange</Text>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: 'bold' }}>Grape</Text>
                  <Text style={{ fontWeight: 'bold' }}>Pineapple</Text>
                  <Text style={{ fontWeight: 'bold' }}>Strave</Text>
                  <Text style={{ fontWeight: 'bold' }}>mangue</Text>

               </View>
            </ScrollView>

            <ScrollView horizontal>
               <View style={style.bloc}>
                  <View style={style.ct}>



                     <View style={style.cts}>
                        <View style={style.imgct}>
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
                     <View style={style.cs}>
                        <Text style={style.txt}>Orange</Text>
                        <Text style={style.txt}>$10</Text>
                     </View>

                     <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText} onPress={() => {
           navigation.navigate('Rech', {
             itemId: 86,
             otherParam: 'anything you want here',
           });
         }}>ADD</Text>
                     </TouchableOpacity>

                  </View>

                  <View style={style.ctss}>

                     <View style={style.cts}>
                        <View style={style.imgct}>
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
                           width: 200, height: 130, marginTop: -20,
                        }}
                     />
                     <View style={style.cs}>
                        <Text style={style.txtx}>Grape</Text>
                        <Text style={style.txtx}>$10</Text>
                     </View>

                     <TouchableOpacity style={style.buttons}>
                        <Text style={style.buttonText}>ADD</Text>
                     </TouchableOpacity>

                  </View>

                  <View style={style.ctx}>

                     <View style={style.cts}>
                        <View style={style.imgct}>
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
                     <View style={style.cs}>
                        <Text style={style.txta}>Orange</Text>
                        <Text style={style.txta}>$10</Text>
                     </View>

                     <TouchableOpacity style={style.buttonx}>
                        <Text style={style.buttonText}>ADD</Text>
                     </TouchableOpacity>

                  </View>
                  <View style={style.ctf}>

                     <View style={style.cts}>
                        <View style={style.imgct}>
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
                     <View style={style.cs}>
                        <Text style={style.txtf}>Orange</Text>
                        <Text style={style.txtf}>$10</Text>
                     </View>

                     <TouchableOpacity style={style.buttonf}>
                        <Text style={style.buttonText}>ADD</Text>
                     </TouchableOpacity>

                  </View>
                  <View style={style.ctm}>

                     <View style={style.cts}>
                        <View style={style.imgct}>
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
                     <View style={style.cs}>
                        <Text style={style.txtm}>Orange</Text>
                        <Text style={style.txtm}>$10</Text>
                     </View>

                     <TouchableOpacity style={style.buttonm}>
                        <Text style={style.buttonText}>ADD</Text>
                     </TouchableOpacity>

                  </View>
               </View>
            </ScrollView>
            <View style={style.bloccc}>
               <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 22 }}>Nearby Shop</Text>
            </View>
            <ScrollView horizontal>
               <View style={style.blocc}>
                  <View style={style.part}>
                     <View style={{
                        width: 80, height: 60, backgroundColor: '#FDCECE', justifyContent: 'center', alignItems: 'center', borderRadius: 20
                     }}>
                        <Image source={require('./assets/boutique.png')}
                           style={{
                              width: 40, height: 40,
                           }}
                        />
                     </View>
                     <View style={style.bloccc}>
                        <Text style={{ fontWeight: 'bold' }}>Xenter Shop</Text>
                        <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                        <Text style={{ fontWeight: 'bold' }}>9A.M - 7 P.M</Text>
                     </View>

                  </View>
                  <View style={style.part}>
                     <View style={{
                        width: 80, height: 60, backgroundColor: '#FDCECE', justifyContent: 'center', alignItems: 'center', borderRadius: 20
                     }}>
                        <Image source={require('./assets/boutique-en-ligne.png')}
                           style={{
                              width: 40, height: 40,
                           }}
                        />
                     </View>
                     <View style={style.bloccc}>
                        <Text style={{ fontWeight: 'bold' }}>Xenter Shop</Text>
                        <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                        <Text style={{ fontWeight: 'bold' }}>9A.M - 7 P.M</Text>
                     </View>

                  </View>
                  <StatusBar style="auto" />
               </View>
            </ScrollView>

            <StatusBar style="auto" />
         </View>
      </ScrollView >
   );
}
const style = StyleSheet.create({
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
      marginTop: 20
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





function Profile() {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Profile!</Text>
      </View>
   );
}



function Rech() {
   return (
      <View style={styl.container}>
         <View style={styl.header}>
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


         <View style={styl.headerText}>
            <Text style={styl.Text}>My Order</Text>
         </View>



         <View style={styl.partfint}>
            <View style={styl.part}>

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
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold' }}>1X</Text>
                  </View>
               </View>
               <View style={{
                  justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
               }}>
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Orange</Text>
                  </View>
                  <View style={styl.bloccc}>
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
         <View style={styl.partfint}>
            <View style={styl.partf}>

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
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold' }}>1X</Text>
                  </View>
               </View>
               <View style={{
                  justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
               }}>
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Fraise</Text>
                  </View>
                  <View style={styl.bloccc}>
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
         <View style={styl.partfint}>
            <View style={styl.part}>

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
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold' }}>1X</Text>
                  </View>
               </View>
               <View style={{
                  justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
               }}>
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mangue</Text>
                  </View>
                  <View style={styl.bloccc}>
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
         <View style={styl.partfint}>
            <View style={styl.partr}>

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
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold' }}>1X</Text>
                  </View>
               </View>
               <View style={{
                  justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
               }}>
                  <View style={styl.bloccc}>
                     <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Grape</Text>
                  </View>
                  <View style={styl.bloccc}>
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
         <View style={{ width: 320, height: 2, backgroundColor: '#b8b8b8', marginTop: 30, }}>

         </View>

         <View style={{ width: 10, height: 2, marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', grap:99}}>
            <View style={styl.bloccc}>
               <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Total Pice</Text>
            </View>
            <View style={styl.bloccc}>
               <Text style={{ fontSize: 30, fontWeight: 'bold'}}>$50</Text>
            </View>
         </View>


         <View style={{
            width: 200, height: 45, backgroundColor: 'rgb(255 136 204)', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
            margin: 70, marginTop: 20
         }}>
            <View style={styl.bloccc}>
               <Text style={{ color: '#fff', fontSize: 20, }}>Payment</Text>

            </View>
         </View>




         <StatusBar style="auto" />
      </View>

   );
}
const styl = StyleSheet.create({
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
   partr: {
      display: 'flex',
      flexDirection: 'row',
      width: 70,
      height: 60,
      backgroundColor: '#BCC8FF',
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




function Notifications() {
   return (

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
                  <Text style={{ fontWeight: 'bold', color: '#fff' }}>Find Nearest Store</Text>

               </View>
            </View>
         </View>

         <Image source={require('./assets/orange-png-png_75700.png')}
            style={{
               width: 250, height: 250, marginLeft: 30
            }}
         />
         <View style={styles.bloc}>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Find Nearest Store</Text>
            <Text style={{ color: 'rgb(118 118 118)', fontSize: 18, marginTop: -50 }}>Fiber    3 g                                        7%</Text>
            <View style={{ width: 300, height: 10, backgroundColor: 'rgb(195 195 195)', borderRadius: 10, marginTop: -65 }}>
               <View style={{ width: 100, height: 10, backgroundColor: 'pink', borderRadius: 10, }}>
                  <Text></Text>
               </View>
            </View>

            <Text style={{ color: 'rgb(118 118 118)', fontSize: 18, marginTop: -50 }}>Good suger    12 g                           5%</Text>
            <View style={{ width: 300, height: 10, backgroundColor: 'rgb(195 195 195)', borderRadius: 10, marginTop: -65 }}>
               <View style={{ width: 180, height: 10, backgroundColor: 'pink', borderRadius: 10, }}>
                  <Text></Text>
               </View>
            </View>
         </View>


         <StatusBar style="auto" />
      </View>
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

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
   return (
      <Tab.Navigator
         initialRouteName="Feed"
         activeColor="#e91e63"
         labelStyle={{ fontSize: 12 }}
         style={{ backgroundColor: 'tomato' }}
      >
         <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
               ),
            }}
         />
         <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
               tabBarLabel: 'Updates',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="card-search" color={color} size={26} />
               ),
            }}
         />
         <Tab.Screen
            name="Dylou"
            component={Rech}
            options={{
               tabBarLabel: 'Search',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="shopping" color={color} size={26} />
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
               ),
            }}
         />
      </Tab.Navigator>
   );
}

export default function App() {
   return (
      <NavigationContainer>
         <MyTabs />
      </NavigationContainer>
   );
}
