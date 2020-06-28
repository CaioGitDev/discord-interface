import React from 'react';
import { Container, HashtagIcon, Title, Separator, Description } from './styles';


const ChannelInfo : React.FC = () => {
  return(
    <Container>
      <HashtagIcon />
      <Title>Development</Title>
      <Separator />
      <Description>React discussions</Description>

    </Container>
  )
};

export default ChannelInfo;