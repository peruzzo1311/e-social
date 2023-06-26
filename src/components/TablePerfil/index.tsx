import { Icon, Image, View,Text, Center, Switch } from "native-base";

export default function TablePerfil() {
  return (
    <View shadow={3} p={8} borderRadius={10} w={'80%'} bgColor={'white'}>
        <View justifyContent={'space-between'}  pb={2} mb={4}  borderBottomColor={'gray.400'} borderBottomWidth={'1'}>
        <Text fontWeight={'bold'}>Nome</Text><Text color={'gray.500'}>Henrique Nicolli</Text>
        </View>
        <View justifyContent={'space-between'} pb={2} mb={4} borderBottomColor={'gray.400'} borderBottomWidth={'1'}>
        <Text fontWeight={'bold'}>Email</Text><Text color={'gray.500'}>henrique.nicolli@prismainformatica.com.br</Text>
        </View>
        <View justifyContent={'space-between'}   >
        <Text fontWeight={'bold'}>Telefone</Text><Text color={'gray.500'}>41988779480</Text>
        </View>
    </View>
  );
}
