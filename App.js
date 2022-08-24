import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./compenent/Home";
import Detail from "./compenent/detail"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />

      </Stack.Navigator>

    </NavigationContainer >
    // <View>

    //   <Text>here we go in app</Text>
    // </View>
  );
}



