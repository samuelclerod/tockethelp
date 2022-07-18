import { useState } from "react";
import { Heading, Icon, useTheme, VStack } from "native-base";
import { Envelope, Key } from 'phosphor-react-native';

import Logo from "../assets/logo_primary.svg";
import Button from "../Components/Button";
import Input from "../Components/Input";

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  const handleSignIn = () => {
    console.log(email, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>Acesse sua conta</Heading>
      <Input
        mb="4"
        placeholder="e-mail"
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setEmail}
      />
      <Input
        mb="8"
        placeholder="senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}