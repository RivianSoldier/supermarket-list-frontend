import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 620px;
  background-color: white;
  border-radius: 24px;

  @media (max-width: 420px) {
    max-width: 320px;
    height: 500px;
    padding: 12px;
  }
`
export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'shopping bag'
})`
  width: 160px;
  height: auto;

  @media (max-width: 420px) {
    width: 140px;
  }
`
export const Title = styled.h1`
  max-width: 320px;
  text-align: center;
  font-family: 'Avenir Next Bold';

  @media (max-width: 420px) {
    max-width: 300px;
  }
`
export const Subtitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  text-align: ${({ align }) => align || 'center'};
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 24px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-top: 8px;
  }
`
