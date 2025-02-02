import React from 'react';
import { Container, Profile, Avatar, UserData, Icons, MicIcon,
  HeadphoneIcon, SettingsIcon } from './styles'

const UserInfo : React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <div>
            <img src="https://eu.ui-avatars.com/api/?name=Caio+Rosa&background=8a8c90&color=fff" alt="Avatar"/>
          </div>
        </Avatar>
        <UserData>
          <strong>Caio Rosa</strong>
          <span>#64621</span>
        </UserData>
      </Profile>
      
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>

    </Container>
  )
};

export default UserInfo;