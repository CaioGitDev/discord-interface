import React from 'react';
import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';


const ChannelList : React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="TypeORM" />
      <ChannelButton channelName="chat-bot" />
      <ChannelButton channelName="dev for life" />
      <ChannelButton channelName="Covid 19" />
    </Container>
  )
}

export default ChannelList;