import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@navigation/AuthStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@navigation/StackNavigator';
import { storeToken, removeToken } from '@utils/asyncStorage';

const errorMessages: { [key: string]: string } = {
  'auth/email-already-in-use': 'This email is already registered. Please use a different email.',
  'auth/invalid-email': 'The email address is not valid.',
  'auth/weak-password': 'The password is too weak. Please choose a stronger password.',
};

export const useAuth = () => {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const stackNavigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      setError(null);
      navigation.navigate('Login');
    } catch (e: any) {
      const errorCode = e.code;
      setError(errorMessages[errorCode] || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      setError(null);
      await storeToken('user', userCredential.user.email!);
      await storeToken('userId', userCredential.user.uid!);
      stackNavigation.navigate('Tabs');
    } catch (e: any) {
      const errorCode = e.code;
      setError(errorMessages[errorCode] || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await auth().signOut();
      setUser(null);
      await removeToken('user');
      await removeToken('userId');
      stackNavigation.navigate('Auth');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
  };
};
