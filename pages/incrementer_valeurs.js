// In App.js in a new project
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
   const [count, setCount] = React.useState(0);
 
   React.useEffect(() => {
     // Use `setOptions` to update the button that we previously specified
     // Now the button includes an `onPress` handler to update the count
     navigation.setOptions({
       headerRight: () => (
         <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
       ),
     });
   }, [navigation]);
 
   return <Text>Count: {count}</Text>;
 }
 
 function DetailsScreen({ route, navigation }) {
   /* 2. Get the param */
   const { itemId, otherParam } = route.params;
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Details Screen</Text>
       <Text>itemId: {JSON.stringify(itemId)}</Text>
       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
       <Button
         title="Go to Details... again"
         onPress={() =>
           navigation.push('Details', {
             itemId: Math.floor(Math.random() * 100),
           })
         }
       />
       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
       <Button title="Go back" onPress={() => navigation.goBack()} />
     </View>
   );
 }
const Stack = createNativeStackNavigator();

function App() {
   return (
      <NavigationContainer>
             <Stack.Navigator>
             <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <Button title="Update count" />
          ),
        })}
      />
         <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App;