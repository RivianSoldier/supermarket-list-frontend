import { styled } from 'styled-components'

export const ListRenderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  height: 92%;
  padding: 12px;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
    visibility: hidden;
  }
`
