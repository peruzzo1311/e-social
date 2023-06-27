import { Divider, Modal, View, VStack, Text } from 'native-base'
import { Dispatch, SetStateAction } from 'react'

import Termos from '../../../assets/termosUso'

interface IProps {
  modalInfo: boolean
  setModalInfo: Dispatch<SetStateAction<boolean>>
}

export default function InfoModal({ modalInfo, setModalInfo }: IProps) {
  return (
    <Modal isOpen={modalInfo} onClose={() => setModalInfo(false)} size={'xl'}>
      <Modal.Content>
        <Modal.CloseButton />

        <Modal.Header>Informações sobre o app</Modal.Header>

        <Modal.Body>
          <VStack space={4} divider={<Divider />}>
            <View>
              <Text fontWeight={600} fontSize={'md'}>
                Desenvolvido por:
              </Text>

              <Text fontWeight={500} color={'gray.400'} fontSize={'md'}>
                Prisma Softwares de Gestão
              </Text>
            </View>

            <View>
              <Text fontWeight={600} fontSize={'md'}>
                Versão:
              </Text>

              <Text fontWeight={500} color={'gray.400'} fontSize={'md'}>
                1.0.0
              </Text>
            </View>

            <View>
              <Text fontWeight={600} fontSize={'md'}>
                Data de lançamento:
              </Text>

              <Text fontWeight={500} color={'gray.400'} fontSize={'md'}>
                01/07/2023
              </Text>
            </View>

            <View>
              <Text fontWeight={600} fontSize={'md'}>
                Politicas de privacidade:
              </Text>

              {Termos()}
            </View>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}
