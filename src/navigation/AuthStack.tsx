import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/Auth/Login";
import SignupScreen from "@screens/Auth/Signup";

export type AuthStackParamList ={
    Login: undefined;
    Signup: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>();


function AuthStack(){
    return(
        <Stack.Navigator  initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Signup' component={SignupScreen}/>
        </Stack.Navigator>
    )
}
export default AuthStack;