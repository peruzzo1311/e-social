import { VStack, Divider, View, Text } from 'native-base'

export default function ProfileInfo() {
  return (
    <VStack space={4} divider={<Divider />}>
      <Text fontWeight={700} fontSize={'md'} color={'#0171BB'}>
        Informações sobre a conta
      </Text>

      <View>
        <Text fontWeight={700} fontSize={'md'}>
          Nome de usuário
        </Text>

        <Text>Henrique Nicolli</Text>
      </View>

      <View>
        <Text fontWeight={700} fontSize={'md'}>
          Email:
        </Text>

        <Text>HenriqueNicolli@prisma-demo.com.br</Text>
      </View>

      <View>
        <Text fontWeight={700} fontSize={'md'}>
          Tenant:
        </Text>

        <Text>prisma-demo</Text>
      </View>

      <View>
        <Text fontWeight={700} fontSize={'md'}>
          Telefone
        </Text>

        <Text>(41) 98877-9480</Text>
      </View>
    </VStack>
  )
}
