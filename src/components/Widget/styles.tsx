import styled from 'styled-components'
import { CloseCircle } from '@styled-icons/ionicons-sharp/CloseCircle'

export const Main = styled.div`
  position: fixed;
  bottom: 0px;
  right: 50px;
  bottom: 50px;
  z-index: 9999;
`

export const BlackCloseCircle = styled(CloseCircle)`
  color: black;
  position: fixed;
  top: 14px;
  right: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonCircle = styled.button`
  background: #ffd202;
  height: 90px;
  width: 90px;
  padding: 1rem;
  border: none;
  cursor: pointer;
  font-color: black;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 0px 10px 1px rgb(51 51 51 / 10%);
  &:hover {
    opacity: 0.8;
  }
`

export const WhiteBox = styled.div`
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(60px);
  box-shadow: 0px 0px 30px 0px rgb(51 51 51 / 20%);
  width: 300px;
  height: 500px;
  border-radius: 12px;
`
