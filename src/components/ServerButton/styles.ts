import styled from 'styled-components';
import { IProps } from '.';
export const Button = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background-color: ${(props) => 
    props.isHome ? 'var(--caioLogo)' : 'var(--primary)'
  };
  position: relative;
  cursor: pointer;

`;