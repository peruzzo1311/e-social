import { useNavigation } from '@react-navigation/native'
import { AlertDialog, Button } from 'native-base'
import { Dispatch, SetStateAction, useRef } from 'react'

interface IProps {
  exitAlert: boolean
  setExitAlert: Dispatch<SetStateAction<boolean>>
}

export default function ExitAlert({ exitAlert, setExitAlert }: IProps) {
  const cancelRef = useRef(null)
  const navigation = useNavigation<any>()

  return (
    <AlertDialog
      isOpen={exitAlert}
      onClose={() => setExitAlert(false)}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialog.Content>
        <AlertDialog.Header fontSize='lg' fontWeight='bold'>
          Sair do app
        </AlertDialog.Header>

        <AlertDialog.Body>
          Você tem certeza que deseja sair do app?
        </AlertDialog.Body>

        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant='unstyled'
              colorScheme='coolGray'
              onPress={() => setExitAlert(false)}
              ref={cancelRef}
            >
              Cancelar
            </Button>

            <Button
              bgColor={'#0171BB'}
              w={150}
              onPress={() => {
                setExitAlert(false)

                navigation.navigate('Login')
              }}
            >
              Sair
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
