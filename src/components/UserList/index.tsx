import React from 'react';
import { Container, User, Avatar, Role } from './styles';

interface IUserProps {
  nickname: string;
  isBot?: boolean;
};

const UserRow : React.FC<IUserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
};

const UserList : React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1 </Role>
      <UserRow nickname="Caio Rosa" />

      <Role>Offline - 20 </Role>
      <UserRow nickname="Heiz Ztir"/>
      <UserRow nickname="Coffee Ecma"/>
      <UserRow nickname="Talento Ontonov" />
      <UserRow nickname="Goiabada Alez"/>
      <UserRow nickname="Dismissed Development" isBot/>
    </Container>
  )
};

export default UserList;