import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import NoteScreen from '@screens/Note';
import BottomTabNavigator from './BottomTabNavigator';
import { getToken } from '@utils/asyncStorage';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

export type StackParamList = {
  Auth: undefined;
  Note: { noteId: string };
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function StackNavigator() {
  type StackParamKey = keyof StackParamList;
  const [initialScreen, setInitialScreen] = useState<StackParamKey | undefined>(undefined);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const isLoggedin = await getToken('user');

      if (isLoggedin === null) {
        setInitialScreen('Auth');
      } else {
        setInitialScreen('Tabs');
      }
      setIsReady(true);
    };

    fetchData();
  }, []);

  if (!isReady || initialScreen === undefined) {
    return <Loading />;
  }
  return (
    <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Note" component={NoteScreen} />
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
export default StackNavigator;
