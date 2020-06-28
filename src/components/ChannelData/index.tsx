import React, { useRef, useEffect } from 'react';
import { Container, Messages , InputWrapper, Input, InputIcon } from './styles'; 
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData : React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>; 
  useEffect(() => {
    const div = messagesRef.current;
    if(div !== null && div !== undefined)
    {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        { Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          key={n}
          author="Dismissed Dev"
          date="28/06/2020"
          content = "Lorem ipsum!"
          />
        ))

        }
        <ChannelMessage 
          author="Dismissed Dev"
          date="28/06/2020"
          content="@Caio Rosa, Note that the development build is not optimized."
          isBot
        />
         <ChannelMessage 
          author="Caio Rosa"
          date="28/06/2020"
          content={
            <>
              <Mention>@Dismissed Dev</Mention>, i know!
            </>
          }
          hasMention
        />

      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #React" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;