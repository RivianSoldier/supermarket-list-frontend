import {
  CardContainer,
  CheckImage,
  TextContainer,
  ArrowIconContainer,
  ArrowIcon
} from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        alt="checkbox-icon"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        onClick={() => onCheckItem(item)}
      />
      <TextContainer>
        <SmallText fontSize={16} mb={4} align={'start'} fontWeight={'bold'}>
          {item.name}
        </SmallText>
        <SmallText fontSize={14} align={'start'}>
          {item.quantity} unidades
        </SmallText>
      </TextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowIconContainer>
    </CardContainer>
  )
}
