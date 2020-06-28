import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface IProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton : React.FC<IProps> = ({
  channelName,
  selected
}) => {
  return(
    <Container className= { selected ? 'active' : '' }>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <div>
          <InviteIcon />
          <SettingsIcon />
        </div>
      </div>
    </Container>
  )
};

export default ChannelButton;