import { Text, View, TouchableOpacity, Alert } from 'react-native';
import Container from '@components/Container';
import { BrandEmailInput, BrandPasswordInput } from '@components/TextInput';
import { useState } from 'react';
import Button from '@components/Button';
import styles from './styles';
import Spacer from '@components/Spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@navigation/AuthStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '@hooks/useAuth';

export default function SignupScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { signUp, loading, error } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Password and Confirm password is incorrect');
      return;
    }
   await signUp(email,password);
  };

  const isButtonDisabled = !email || !password || !confirmPassword;

  return (
    <Container>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <Text style={styles.title}>Create Account</Text>
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <View style={styles.inputContainer}>
          <BrandEmailInput placeholder="Email Address" setText={setEmail} value={email} />
          <BrandPasswordInput placeholder="Password" setText={setPassword} value={password} />
          <BrandPasswordInput
            placeholder="Confirm Password"
            setText={setConfirmPassword}
            value={confirmPassword}
          />
          <Button
            disabled={isButtonDisabled}
            isLoading={loading}
            label="Register"
            width={'100%'}
            onPress={handleRegister}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.label}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.register}>Login here</Text>
        </TouchableOpacity>
      </View>
      <Spacer />
    </Container>
  );
}
