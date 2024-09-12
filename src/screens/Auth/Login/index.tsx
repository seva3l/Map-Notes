import { Text, View, TouchableOpacity } from 'react-native';
import Container from '@components/Container';
import { BrandEmailInput, BrandPasswordInput } from '@components/TextInput';
import { useState } from 'react';
import Button from '@components/Button';
import styles from './styles';
import useKeyboardVisibility from '@hooks/useKeyboardVisibility';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@navigation/AuthStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Spacer from '@components/Spacer';
import { useAuth } from '@hooks/useAuth';
import LogoSVG from '@assets/icons/Logo';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isKeyboardVisible = useKeyboardVisibility();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { signIn, loading, error } = useAuth();

  const handleLogin = async () => {
    await signIn(email, password);
  };

  const isButtonDisabled = !email || !password;

  return (
    <Container>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={{ flex: 1 }}
      >
        <LogoSVG/>
        <Text style={styles.title}>Map Notes</Text>

        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <View style={styles.inputContainer}>
          <BrandEmailInput placeholder="Email Address" setText={setEmail} value={email} />
          <BrandPasswordInput placeholder="Password" setText={setPassword} value={password} />
        </View>
        <Button
          disabled={isButtonDisabled}
          isLoading={loading}
          label="Login"
          width={'100%'}
          onPress={handleLogin}
        />
      </KeyboardAwareScrollView>
      {!isKeyboardVisible && (
        <View style={styles.bottomContainer}>
          <Text style={styles.label}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.register}>Register here</Text>
          </TouchableOpacity>
        </View>
      )}
      <Spacer/>
    </Container>
  );
}
