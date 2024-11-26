import Container from '@components/Container';
import { StackType } from '@navigations/BaseNavigation';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

export function ProfilePage() {
  const { navigate } = useNavigation<StackType>()

  return (
    <Container>
      <Text>ProfilePage</Text>
      <Button onPress={() => navigate("Home")} title="Go home" />
    </Container>
  );
}