import { AlertDialog, Button } from 'native-base'
import { Dispatch, SetStateAction, useRef } from 'react'

interface IProps {
  notificationAlert: boolean
  setNotificationAlert: Dispatch<SetStateAction<boolean>>
  setNotification: Dispatch<SetStateAction<boolean>>
}

export default function NotficationAlert({
  notificationAlert,
  setNotificationAlert,
  setNotification,
}: IProps) {
  const cancelRef = useRef(null)

  return (
    <AlertDialog
      isOpen={notificationAlert}
      onClose={() => setNotificationAlert(false)}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialog.Content>
        <AlertDialog.Header fontSize='lg' fontWeight='bold'>
          Notificações
        </AlertDialog.Header>

        <AlertDialog.Body>
          Você tem certeza que deseja desativar as notificações?
        </AlertDialog.Body>

        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant='unstyled'
              colorScheme='coolGray'
              onPress={() => setNotificationAlert(false)}
              ref={cancelRef}
            >
              Cancelar
            </Button>

            <Button
              bgColor={'#0171BB'}
              w={150}
              onPress={() => {
                setNotification(false)
                setNotificationAlert(false)
              }}
            >
              Desativar
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
