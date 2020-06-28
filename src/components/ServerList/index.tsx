import React from 'react';
import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () =>{
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications mentions={14} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={7} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={55}/>
      <ServerButton hasNotifications />
    </Container>
  )
};

export default ServerList;