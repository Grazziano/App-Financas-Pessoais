import React from 'react';
import { Platform } from 'react-native';

import {
  AreaInput,
  Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container behavor={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.7}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
