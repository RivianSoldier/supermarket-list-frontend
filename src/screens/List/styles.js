import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`

export const ScreenContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 75vw;
  height: 94vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 420px) {
    width: 84vw;
  }
`

export const ScreenHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const ScreenTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LogoImage = styled.img.attrs({
  src: '/images/logo.png',
  alt: 'Supermarket list logo'
})`
  width: 72px;
  height: 72px;

  @media (max-width: 420px) {
    width: 34px;
    height: auto;
  }
`
export const HeaderButton = styled.div`
  width: 160px;

  @media (max-width: 420px) {
    width: 42px;
  }
`
export const ListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`
