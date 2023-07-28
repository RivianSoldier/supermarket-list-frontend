import { styled } from 'styled-components'
import closeSvg from '../Modal/close.svg'

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 32vw;
  background-color: white;
  align-items: center;
  padding: 12px 16px;
  box-sizing: border-box;

  @media (max-width: 830px) {
    width: 60vw;
    height: 100vh;
  }

  @media (max-width: 420px) {
    width: 100vw;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`
export const ModalCloseButton = styled.button`
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 0;
  background-image: url(${closeSvg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 100%;
  justify-content: space-between;
  margin-top: 54vh;

  @media (max-width: 830px) {
    height: 12vh;
    margin-top: 72vh;
  }

  @media (max-width: 420px) {
    align-items: center;
    height: 18vh;
    margin-top: 48vh;
  }
`
