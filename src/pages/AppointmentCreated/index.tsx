/* eslint-disable  */
import { useNavigation, useRoute } from '@react-navigation/core';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Description,
  OkButton,
  OkButtonText,
  Title,
} from './styles';

interface ParamsProps {
  date: number;
  provider: string;
}

export const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const route = useRoute();

  const { date, provider } = route.params as ParamsProps;

  const handleOkButton = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(date, "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", {
      locale: ptBR,
    });
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>{`${formattedDate} com ${provider}`}</Description>

      <OkButton onPress={handleOkButton}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};
