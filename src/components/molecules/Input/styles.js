import { styled } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  height: 48px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 2px;
  border-style: solid;
  margin-bottom: 16px;

  @media (max-width: 420px) {
    max-width: 300px;
  }
`
export const InputLabel = styled.label`
  font-size: 12px;
  margin: 0;
  padding-top: 6px;
  padding-left: 6px;
  padding-bottom: 4px;
`
export const InputText = styled.input`
  width: 90%;
  height: 100%;
  border: 0 transparent;
  margin-left: 6px;
  font-size: 16px;
  margin-bottom: 6px;
  font-family: 'Avenir Next';

  &:focus {
    outline: none;
  }
`
