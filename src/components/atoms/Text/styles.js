import styled from 'styled-components'

export const Title = styled.h1`
  max-width: ${({ mw }) => mw || 320}px;
  font-weight: bold;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 24}px;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;
  color: black;
  margin-left: ${({ ml }) => ml || 0}px;
  font-family: 'Avenir Next Bold';

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 18px;
  }
`
export const Subtitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-bottom: ${({ mb }) => mb || 48}px;
  font-family: 'Avenir Next';

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 12px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`
export const SmallText = styled.span`
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`
