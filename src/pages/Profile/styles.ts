import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled(RectButton)`
  margin-top: 12px;
`;

export const UserAvatar = styled.Image`
  height: 186px;
  width: 186px;
  border-radius: 98px;
  align-self: center;
`;
