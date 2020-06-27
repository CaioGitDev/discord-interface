import React from 'react';
import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () =>{
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={7} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={55}/>
      <ServerButton />
    </Container>
  )
};

export default ServerList;