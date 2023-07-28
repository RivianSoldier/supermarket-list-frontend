import { useEffect, useState } from 'react'
import { getList, updateItem } from 'services/requests'
import { ListRender, Loader, Button, Modal, Title } from 'components'
import {
  ScreenContainer,
  ScreenContentContainer,
  ScreenHeader,
  ScreenTitleContainer,
  LogoImage,
  HeaderButton,
  ListContainer
} from './styles'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList()
    setListData(result)
    setLoading(false)
  }

  useEffect(() => {
    loadListItems()
  }, [])

  const onClickAddButton = () => {
    setSelectedItem(null)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setSelectedItem(null)
  }

  const onEditItem = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item?._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    })
    if (!result.error) {
      await loadListItems()
    }
  }

  return (
    <ScreenContainer>
      <ScreenContentContainer>
        <ScreenHeader>
          <ScreenTitleContainer>
            <LogoImage />
            <Title fontSize={32} lineHeight={32} ml={12}>
              Lista Supermercado
            </Title>
          </ScreenTitleContainer>
          <HeaderButton>
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </HeaderButton>
        </ScreenHeader>
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListContainer>
      </ScreenContentContainer>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </ScreenContainer>
  )
}
