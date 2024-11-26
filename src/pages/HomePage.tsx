import Container from '@components/Container';
import { StackType } from '@navigations/BaseNavigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export function HomePage() {
  const { navigate } = useNavigation<StackType>()

  return (
    <Container>
      <Text>HomePage</Text>
      <Button onPress={() => navigate('Profile')} title="Go" />
    </Container>
  );
}